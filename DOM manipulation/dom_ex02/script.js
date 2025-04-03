const priceList = document.querySelector("#price-list");
const update = document.querySelector("#update")

/*update.addEventListener("click", () => {
    // Selects first child of price-list
    const firstItem = priceList.firstElementChild;
    // Selects first child of firstItem
    const firstItemPrice = firstItem.firstElementChild;

    firstItemPrice.textContent = "$3.00"
});
*/
update.addEventListener("click", ()=>{
	const lastItem = priceList.lastElementChild;
	const lastItemPrice = lastItem.lastElementChild;
	lastItemPrice.textContent = "$4.00"
})