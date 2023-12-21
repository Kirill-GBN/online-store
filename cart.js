let listCard = document.getElementById('listCard');
let total = document.getElementById('.total');
let cartIcon = document.getElementById('cartAmount');

let basket = JSON.parse(localStorage.getItem("data")) || [];

//Отображаем количество товара на экране (в "кружочке")
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
    if(basket.length !==0) {
        console.log("basket is not empty");
    } else {
        console.log("basket is totally empty");
    };
};
generateCartItems();