const changeButtonColor = document.querySelectorAll('.update');

changeButtonColor.forEach(button => {
	button.addEventListener('click', ()=>{
		const item = button.parentElement;
		if (item) {
			item.style.backgroundColor = "green"
		}
		
	});
});