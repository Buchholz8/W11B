//i made a prodcts variable with all the info on the products
let products = [
    {
        name:`Shirts`,
        price: 15,
        description:`selling a variety of shirts`,
    },
    {
        name:`Hoodies`,
        price: 60,
        description:`selling different styles of hoodies`,
    },
    {
        name:`Pants`,
        price:30,
        description:`different types of pants`,
    },
    {
        name:`Hats`,
        price:20,
        description:`lots of different hat types`
    }
]
//a for loop to print the new div and its information to the index, also adds in the ids,classes,key_names
for(let i = 0; i < products.length ; i++){
    let prod_info = document.querySelector(`#prod_info`)
    prod_info.insertAdjacentHTML(`beforeend` , `
        <h2 key_name="${products[i][`name`]}" >${products[i][`name`]}</h2>
        <p key_name="${products[i][`name`]}" >${products[i][`description`]}</p>
        <h6 key_name="${products[i][`name`]}" >${products[i][`price`]}$</h6>
        <button class="home_button" key_name="${products[i][`name`]}">${products[i][`name`]}</button>
        `);
}

//I create some variables
let selection_json = Cookies.get(`selection`);
let products_json = Cookies.get(`products_cook`)
//this will track how many times each button was clicked
let options = {
    Shirts: 0,
    Hoodies: 0,
    Pants:0,
    Hats:0,
}
//this is an if loop to check for undefined
if(!(products_json === undefined)){
    products = JSON.parse(products_json)
}
if(!(selection_json === undefined)){
    options = JSON.parse(selection_json);
}
//this function grabs how many times it was clicked and will make a cookie to store that , then it will json the cookie for later, it will aslo reach out for the button key_name and remeber it
function add_options(details){
    options[details[`target`].getAttribute(`key_name`)] += 1;
    selection_json = JSON.stringify(options);
    products[details[`target`].getAttribute(`key_name`) ];
    products_json = JSON.stringify(products)

    Cookies.set(`selection` , selection_json);
    Cookies.set(`products_cook` , products_json)
}
//this will define the buttons and addd an event listener that will trigger the function
let choice_buttons = document.querySelectorAll(`.home_button`)
for(let i=0 ; i < choice_buttons.length ; i++){
    choice_buttons[i].addEventListener(`click` , add_options)
}

    