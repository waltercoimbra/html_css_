const removeButtons = document.querySelectorAll('.update')
removeButtons.forEach(button => {
	button.addEventListener('click',()=>{
		const item = button.parentElement;
		item.remove();
	})
})