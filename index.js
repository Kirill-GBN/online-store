
let listProduct = document.getElementById('main-container');
let body = document.querySelector('body');
let listCard = document.getElementById('listCard');
let cartImg = document.getElementById("shopping-cart")
let cartLink = document.getElementById("cart-link")
let cartIcon = document.getElementById('cartAmount');
// let cross = document.querySelector('.close');


//Наполняем каталог товаров на странице
let basket = JSON.parse(localStorage.getItem("data")) || [];


let generateShop = () => {
    return (listProduct.innerHTML = products.map((x)=>{
        let {id, image, describe, price} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id = product-id-${id} class="product_card">
            <img class="product_img" src=${image} alt="">
            <p class="product-text">${describe}</p>
            <p class="product_summ">${price} ₽</p>
            <button onclick= "increment(${id})" class="product-btn">добавить в корзину</button>
        </div>
        `;
    })
    .join(""));
    
};

generateShop();


//Настраиваем счетчик товаров

//Счетчик на увеличение
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem);

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });
    } 
    else if (search.item < 10) {
        search.item += 1;
    } else {
        alert("Приносим свои извинения, но в данный момент Вы можете заказать не более 10-ти единиц каждого товара");
        return;
    }; 

    update(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
};



//Обновление количества в счетчике
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById("cartAmount").innerHTML = id;
    calculation();
};

//Отображаем количество товара на экране (в "кружочке")
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();


//Меняем цвет и текст кнопки товаров при добавлении в корзину и задаем события
const productBtn = document.querySelectorAll('.product-btn');
productBtn.forEach(e => e.addEventListener('click', event => {
    event.target.style.backgroundColor = 'rgba(0, 168, 45, 1)';
    event.target.innerText = 'В корзине';
    checkCartItems();
}));

//Фиксируем изменения отображения и кликабельности корзины при её заполнении
let checkCartItems = (data) => {
    if (basket.length === 0 || data === 0) {
        cartIcon.style.display = "none";
        cartImg.style.pointerEvents = "none";
        cartLink.style.pointerEvents = "none";
    } else {
        cartIcon.style.display = "block";
        cartImg.style.pointerEvents = "auto";
        cartLink.style.pointerEvents = "auto";   
    } 
};
checkCartItems();






