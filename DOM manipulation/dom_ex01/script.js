const priceList = document.querySelector("#price-list");
const update = document.querySelector("#update")

update.addEventListener('click',()=>{
	const firstItem = priceList.firstElementChild;
	const firstItemPrice = firstItem.firstElementChild;
	firstItemPrice.textContent = "$4.00"
})