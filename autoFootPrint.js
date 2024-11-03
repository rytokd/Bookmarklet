javascript:(function() {
    // 1. ユーザーに表示したい人数を入力させる
    // var userCount = prompt("表示したい人数を入力してください:", "0");
    var userCount = 150;
    if (userCount === null || isNaN(userCount) || userCount <= 0) {
        alert("正しい数値を入力してください。");
        return;
    }
    userCount = parseInt(userCount, 10);

    // 2. ユーザーカードのエレメントを取得する
    var userCardsCount = document.querySelectorAll('.user-card_transition-bg').length;

    // 3. スクロール処理
    function scrollToLoadMoreUsers() {
        if (userCardsCount < userCount) {
            window.scrollTo(0, document.body.scrollHeight);
            userCardsCount = document.querySelectorAll('.user-card_transition-bg').length;
            setTimeout(scrollToLoadMoreUsers, 1000); // 1秒後に再チェック
        } else {
            // 4. ユーザーリンクを取得
            var links = document.querySelectorAll('a[href^="/users/"]');
            var loaded = 0;

            links.forEach(function(link) {
                var href = link.getAttribute('href');
                // CDNを含むリンクは無視
                if (!href.includes('cdn')) {
                    fetch(href)
                        .then(response => response.text())
                        .then(content => {
                            // 3.1: 取得したコンテンツを埋め込む
                            var tempDiv = document.createElement('div');
                            tempDiv.innerHTML = content;

                            // 適当な位置にコンテンツを追加（例: .user-card_transition-bg の直下）
                            var targetDiv = document.querySelector('.user-card_transition-bg');
                            targetDiv.parentNode.insertBefore(tempDiv, targetDiv.nextSibling);
                            
                            loaded++;
                            
                            // 全てのリンクを処理したか確認
                            if (loaded === links.length) {
                                alert("表示完了しました。");
                            }
                        })
                        .catch(err => console.error('Fetch error:', err));
                }
            });
        }
    }

    scrollToLoadMoreUsers();
})();
