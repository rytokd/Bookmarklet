javascript: (function() {
	document.querySelector(".profile-thumb_photo").remove();
	document.querySelector(".profile-photo-comment_space").remove();
	document.getElementById("affinity").remove();
	const e = document.getElementsByClassName('detail-box profile-groups');
	while (e.length) {
		e.item(0).remove()
	}
	const f = document.getElementsByClassName('konomi-comment_item_image');
	while (f.length) {
		f.item(0).remove()
	}
	const g = document.getElementsByClassName('profile-detail_title');
	while (g.length) {
		g.item(0).remove()
	}
	const h = document.getElementsByClassName('detail-box profile-introduction');
	if (h.length > 1) {
		h[1].remove();
	}
	const i = document.getElementsByClassName('detail-box profile-talk-disposition');
	i[0].remove();
	const originalTable = document.querySelector('.profile-detail_lists');
	const rows = originalTable.getElementsByTagName('tr');
	const newTable = document.createElement('table');
	newTable.className = 'new-table';
	newTable.id = 'new-table';
	let currentRow;
	for (let i = 0; i < rows.length; i++) {
		const dataCell = rows[i].getElementsByTagName('td')[0];
		if (dataCell) {
			if (i % 4 === 0) {
				currentRow = newTable.insertRow();
			}
			const newCell = currentRow.insertCell();
			newCell.textContent = dataCell.textContent;
		}
	}
	document.body.appendChild(newTable);
	const j = document.getElementsByClassName('detail-box profile-detail');
	j[0].remove();
	document.querySelector(".user-detail-submit").remove();
})();
