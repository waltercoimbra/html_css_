const priceList = document.querySelector("#price-list");
const update = document.querySelector("#update")

update.addEventListener('click',()=>{
	//cria um item novo
	const newItem = document.createElement("li");
	newItem.className = "item";
	newItem.innerHTML = "Eggs <span>$3.50</span">
	
	//insere o novo item na lista
	priceList.appendChild(newItem);
})