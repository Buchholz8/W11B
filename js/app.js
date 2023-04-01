let types = [
    {
        shirts: `T-shirt`,
        description: `These are shirts`,
        price: 20,
    },
    {
        Hoodies: `hoodies`,
        description: `These are hoodies`,
        price: 80,
    },
    {
        pants: `jeans`,
        description: `These are jeans`,
        price: 60,
    },
    {
        hats: `sports hats`,
        description: `These are hats`,
        price: 40,
    },
]
let selection_json = Cookies.get(`slection`);
let options = {
    Shirts: 0,
    Hoodies: 0,
    Pants:0,
    Hats:0,
}
if(!(selection_json === undefined)){
    options = JSON.parse(selection_json);
}
function add_options(details){
    options[details[`target`].getAttribute(`key_name`)] += 1;
    selection_json = JSON.stringify(options)
    Cookies.set(`selection` , selection_json)
}
let choice_buttons = document.querySelectorAll(`.home_button`)
for(let i=0 ; i < choice_buttons.length ; i++){
    choice_buttons[i].addEventListener(`click` , add_options)
}