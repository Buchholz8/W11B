
//filet rst we redifne the cookies and use .get to grab them from the other page
let selection_json = Cookies.get(`selection`);
let products_json = Cookies.get(`products_cook`)
//I define a place for the new info to go
let Choice_container = document.querySelector(`#Choice_div`);

//everything seems to work up to this point, it all seems to be undefined even when i click a button

//I add an if loop that will determine if the cookie is defined or not
if(selection_json === undefined){
    Choice_container.insertAdjacentHTML(`afterbegin` , `<h2> You have not made a choice yet</h2>`);
} else {
    slected_item = JSON.parse(selection_json);
    products_info = JSON.parse(products_json)
    Choice_container.insertAdjacentHTML(`afterbegin` ,`<h2> You chose ${slected_item[`key_name`]} ${products_info[`key_name`]} ! </h2>`)
};

//an else statement that will add the new information based off the saved cookie and the keyname 


