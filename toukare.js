javascript: (function(d) {
let counter = 0;
let userimg = 1;
let uesr_group_count = 1;
let scrollloop = 0;
elem = document.getElementsByClassName("user_img img_1");

function scroll() {
    var documentHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var scrollPosition = documentHeight - windowHeight;
    window.scrollTo(0, scrollPosition);
}

function scrollLoop() {
    if ( scrollloop < 3 ) {
        console.log("scroll(間隔10秒): " + scrollloop);
        scrollloop++;
        setTimeout(function() {
            scroll();
            scrollLoop(); // 再帰呼び出し
        }, 10000);
    } else {
         myLoop();
    }
}

function myLoop() {
    if ( uesr_group_count < 3 ) {
        if (counter < 40 ) {
            console.log("user_group: " + userimg, "Counter: " + counter);
            elem[counter].click();
            setTimeout(function() {
                var botan = document.getElementsByClassName("radius100");
                botan[8].click();  
            }, 300);
            counter++;
            // ループを再帰的に呼び出す
            setTimeout(function() {
                myLoop();
            }, 1000);
        } else {
            counter = 0;
            userimg++;
            uesr_group_count++;
            elem = document.getElementsByClassName(`user_img img_${userimg}`);
            setTimeout(function() {
                myLoop();
            }, 1000);
        }
    } else {
        scrollloop = 0; 
        uesr_group_count = 1; 
        var close = document.getElementsByClassName("hmenu_close");
        close[1].click();
        scrollLoop();
    }
}

scrollLoop()
})(document);
