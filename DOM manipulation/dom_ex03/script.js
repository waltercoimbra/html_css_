const priceList = document.querySelector("#price-list");
const update = document.querySelector("#update")

update.addEventListener('click',()=>{
	for(let item of priceList.children){
		let priceText = item.querySelector("span").textContent;
		let price = parseFloat(priceText.slice(1));
		price += 1;
		item.querySelector("span").textContent = `$${price}`
	}
});