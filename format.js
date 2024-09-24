javascript: (function() {
	document.querySelector(".message-read-receipt-appeal").remove();
	document.querySelector(".secret-questions_link-space").remove();
	const partnerMsg = document.querySelectorAll('.message_balloon');
	partnerMsg.forEach(element => {
		element.style.width = "1200px";
		element.innerHTML = element.innerHTML.replaceAll('<br>', '');
	});
})();
