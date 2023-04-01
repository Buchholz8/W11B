let selection_json = Cookies.get(`slection`)
options = {
    Shirts: 0,
    Hoodies: 0,
    Pants:0,
    Hats:0,
}
if(!(selection_json === undefined)){
    options = JSON.parse(`selection`)
}
function add_options(details){
    options[details[`target`].getAttribute(`key_name`)] +=1;
    selection_json = JSON.stringify(options)
    Cookies.set(`selection` , selection_json)
}
let choice_buttons = document.querySelectorAll(`.home_button`)
for(let i=0 ; i < choice_buttons.length ; i++){
    choice_buttons[i].addEventListener(`click` , add_options)
}