// Tooltips
const tooltip01 = document.querySelector('#tooltip01')
if(tooltip01){
	const tooltip = new bootstrap.Tooltip(tooltip01, {
		boundary: 'window'
	});
}

// date fullYear foter
let date = new Date();
let dateYear = date.getFullYear();
let footerDate = document.querySelector('#footerDate');
footerDate.innerHTML = dateYear;