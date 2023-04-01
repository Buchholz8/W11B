
let selection_json = Cookies.get(`slection`);
let Choice_container = document.querySelector(`#Choice_div`);
if(selection_json === undefined){
    Choice_container.insertAdjacentHTML(`afterbegin` , `<h2> You have not made a choice yet</h2>`);
} else {
    slected_item = JSON.parse(selection_json);
    Choice_container.insertAdjacentHTML(`afterbegin` ,`<h2> You chose ${slected_item[i][key_name]} ! </h2>`)
};
