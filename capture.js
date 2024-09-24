javascript: (function(d) {
    // HTML2Canvasを読み込む
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js'; // HTML2CanvasのCDN
    script.onload = function() {
        // ページ全体をキャプチャする
        html2canvas(document.body, {
            onrendered: function(canvas) {
                // キャプチャした画像を生成
                var imgData = canvas.toDataURL('image/png');
                // 画像を新しいウィンドウで開く
                var imgWindow = window.open('');
                imgWindow.document.write('<img src="' + imgData + '" style="width: 100%; height: auto;">');
                imgWindow.document.close();
            }
        });
    };
    document.head.appendChild(script);
})(document);
