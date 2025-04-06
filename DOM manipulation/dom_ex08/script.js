let currentItem = document.querySelector('.item');
const nextButton = document.querySelector('#nextButton');
currentItem.style.backgroundColor = "grey";
nextButton.addEventListener('click',()=>{
	if(currentItem.nextElementSibling){
		currentItem.style.backgroundColor = "white";
		currentItem = currentItem.nextElementSibling;
		currentItem.style.backgroundColor = "grey";
	}
})