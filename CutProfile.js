javascript: (function(d) {
    const select = (selector) => d.querySelector(selector);
    const getById = (id) => d.getElementById(id);

    fetch('https://rytokd.github.io/Bookmarklet/messageList.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((msgList) => {
            if (msgList && msgList.first !== undefined) {
                getById("message_form_body").value = select('.topic-header_contents_name.text-ellipsis').textContent + msgList.first;
                select(".topic-footer").style.height = "250px";
                getById("message_form_body").style.height = "250px";
                select('[type="submit"]').classList.add("topic-footer_message-form_submit", "is-active");
            } else {
                console.error('msgList.first is undefined');
            }
        })
        .catch((error) => {
            console.error('Fetch error:', error);
            alert('さんこんにちわ');
        });
})(document);
