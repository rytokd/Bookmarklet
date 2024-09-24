javascript: (function() {
    // AutoPagerizeの設定
    var AutoPagerize = {
        nextPageSelector: '.paging_next a', // 次のページへのリンクセレクタ
        contentSelector: '.sp-container', // コンテンツを含むセレクタ
        currentPageInfoSelector: '[data-paging-info]', // 現在のページ情報を持っているセレクタ
        loadMore: function() {
            var nextPageLink = document.querySelector(this.nextPageSelector);
            if (nextPageLink) {
                var pageNum = parseInt(nextPageLink.href.match(/page=(\d+)/)[1]);
                var container = document.querySelector(this.contentSelector);
                fetch(nextPageLink.href)
                    .then(response => response.text())
                    .then(html => {
                        var parser = new DOMParser();
                        var doc = parser.parseFromString(html, 'text/html');
                        var newContent = doc.querySelector(this.contentSelector).innerHTML;
                        container.insertAdjacentHTML('beforeend', newContent);
                        
                        // 更新されたページ数を適切に設定
                        // 以下の行は必要に応じて調整
                        nextPageLink.href = nextPageLink.href.replace(/page=(\d+)/, 'page=' + (pageNum + 1));
                    })
                    .catch(err => console.error('Failed to load page: ', err));
            }
            const e = document.getElementsByClassName('header_banner');
            while (e.length) {
                e.item(0).remove()
            };
            const f = document.getElementsByClassName('head-missing-topics-list');
            while (f.length) {
                f.item(0).remove()
            };
        },
        init: function() {
            var currentInfo = document.querySelector(this.currentPageInfoSelector);
            if (currentInfo) {
                var observer = new IntersectionObserver(entries => {
                    if (entries[0].isIntersecting) {
                        this.loadMore();
                    }
                });

                observer.observe(currentInfo);
            }
        }
    };

    // AutoPagerizeを初期化
    AutoPagerize.init();
})();
