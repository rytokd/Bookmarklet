javascript: (function() {
  const regEmoji = new RegExp(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/, 'g');
  const removeEmoji = input => (
      // 絵文字を空文字('')に置き換える
      input.replace(regEmoji, '')
  )
	const nameClass = document.getElementsByClassName("topic-header_contents_name text-ellipsis");
	document.getElementById("message_form_body").value = nameClass[0].innerHTML + removeEmoji("さんは\n");
	document.querySelector(".topic-footer").style.height = "250px";
	document.getElementById("message_form_body").style.height = "250px";
	document.querySelector('[type="submit"]').className = "topic-footer_message-form_submit is-active";
})();
