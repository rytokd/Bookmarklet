javascript:(function() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        const originalHref = link.href;
        link.onclick = function(event) {
            event.preventDefault(); // デフォルトのクリック動作を防ぐ
            window.open(originalHref, 'popup', 'width=600,height=400'); // ポップアップを開く
        };
    });
})();
