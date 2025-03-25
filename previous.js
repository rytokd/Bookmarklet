javascript: (function(d) {
    const select = (selector) => d.querySelector(selector);
    const getById = (id) => d.getElementById(id);
    const regEmoji = new RegExp(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/, 'g');
    const removeEmoji = input => (
        // 絵文字を空文字('')に置き換える
        input.replace(regEmoji, '')
    )
  	const nameClass = document.getElementsByClassName("topic-header_contents_name text-ellipsis");

    fetch('https://rytokd.github.io/Bookmarklet/messageList.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((msgList) => {
            if (msgList && msgList.first !== undefined) {
                getById("message_form_body").value += msgList.previous;
                select(".topic-footer").style.height = "250px";
                getById("message_form_body").style.height = "250px";
                select('[type="submit"]').classList.add("topic-footer_message-form_submit", "is-active");
                select('[type="submit"]').classList.remove("is-disabled");
                select('[type="submit"]').disabled = false;
            } else {
                console.error('msgList.first is undefined');
            }
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        });
})(document);
