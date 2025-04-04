const priceList = document.querySelector("#price-list");
const update = document.querySelector("#update")

update.addEventListener('click',()=>{
	const lastItem = priceList.lastElementChild;
	if(lastItem){
		lastItem.remove();
	}
})