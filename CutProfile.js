javascript: (function(d) {
    const select = d.querySelector.bind(d);
    const getById = d.getElementById.bind(d)
    fetch('./msgList.json')
    .then((response)=>{return response.json()})
    .then( (msgList)=>{
        getById("message_form_body").value = select('.topic-header_contents_name.text-ellipsis').innerHTML + msgList.first;
        select(".topic-footer").style.height = "250px";
        getById("message_form_body").style.height = "250px";
        select('[type="submit"]').classList.add("topic-footer_message-form_submit","is-active");
    });
})(document);
