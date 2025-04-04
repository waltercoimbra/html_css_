const priceList = document.querySelector("#price-list");
const update = document.querySelector("#update")

update.addEventListener('click',()=>{
	//cria um item novo
	const lastItem = priceList.lastElementChild;
	if(lastItem){
		lastItem.remove()
	}
	
});