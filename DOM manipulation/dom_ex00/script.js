const priceList = document.querySelector("#price-list");
const update = document.querySelector("#update")

update.addEventListener('click',()=>{
	const thirdItem = priceList.children[2];
	const thirdItemPrice = thirdItem.children[0];
	thirdItemPrice.textContent = "$4.00"
})