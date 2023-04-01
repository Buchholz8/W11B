let selection_json = Cookies.get(`slection`)
let Choice_container = document.querySelector(`#Choice_div`)
if(selection_json === undefined){
    Choice_container.insertAdjacentHTML(`afterbegin` , `<h2> You have not made a choice yet</h2>`)
} else {
    decision = JSON.parse(selection_json)
    Choice_container.insertAdjacentHTML(`afterbegin` ,  `<h2> Shirts: ${decision[`Shirts`]}</h2>` )
    Choice_container.insertAdjacentHTML(`afterbegin` ,  `<h2> Shirts: ${decision[`Hoodies`]}</h2>` )
    Choice_container.insertAdjacentHTML(`afterbegin` ,  `<h2> Shirts: ${decision[`Pants`]}</h2>` )
    Choice_container.insertAdjacentHTML(`afterbegin` , `<h2> Shirts: ${decision[`Hats`]}</h2>` )
}