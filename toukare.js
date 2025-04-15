javascript: (function(d) {
  let counter = 0;
  let userimg = 1;
  let uesr_group_count = 1;
  let scrollloop = 0;
  let elem = document.getElementsByClassName("user_img img_1");

  function scroll() {
    const documentHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const scrollPosition = documentHeight - windowHeight;
    window.scrollTo(0, scrollPosition);
  }

  async function clickButton() {
    return new Promise(resolve => {
      if (elem[counter]) {
        console.log("user_group: " + userimg, "Counter: " + counter);
        elem[counter].click();
        setTimeout(function() {
          const botan = document.getElementsByClassName("radius100");
          if (botan[8]) {
            botan[8].click();
          } else {
            console.warn("botan[8] が存在しません");
          }
          resolve();
        }, 300);
      } else {
        console.warn("elem[counter] が存在しません");
        resolve();
      }
    });
  }

  async function myLoop() {
    if (uesr_group_count < 3) {
      if (counter < 40) {
        await clickButton();
        counter++;
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
      const close = document.getElementsByClassName("hmenu_close");
      if (close[1]) {
        close[1].click();
      } else {
        console.warn("close[1] が存在しません");
      }
      scrollLoop();
    }
  }

  function scrollLoop() {
    if (scrollloop < 3) {
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

  scrollLoop();
})(document);
