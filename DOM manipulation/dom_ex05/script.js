const priceList = document.querySelector("#price-list");
const update = document.querySelector("#update")

update.addEventListener('click',()=>{
	const lastItem = priceList.lastElementChild;//se não é firstElement então children[0]
	if(lastItem){
		lastItem.remove();
	}
})