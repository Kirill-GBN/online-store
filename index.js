
let listProduct = document.getElementById('main-container');
let body = document.querySelector('body');
let listCard = document.getElementById('listCard');
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

// let basket = JSON.parse(localStorage.getItem("data")) || [];

// let cartItem = () => {
//     return (listCard.innerHTML = products.map((x) => {
//         let { id, image, describe, price } = x;
//         let search = basket.find((x) => x.id === id) || [];
//         return `
//         <div id=product-id-${id} class="cart_item">
//             <img class="cart_img" src=${image} alt="">
//             <p class="cart-text">${describe}</p>
//             <div class="count">
//                 <div onclick="decrement(${id})" class="minus">
//                     <i class="bi bi-dash-lg"></i>
//                 </div>
//                 <div id = ${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
//                 <div onclick= "increment(${id})" class="plus">
//                     <i class="bi bi-plus-lg"></i>
//                 </div>
//             </div>
//             <p class="item_summ">${price} ₽</p>
//             <div class="close">
//                 <img class="cross" src="./assets/svg/close.svg" alt="Cross">
//             </div>
//         </div>
//         `;
//     })
//     .join(""));
// };

// cartItem();



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


//Счетчик на уменьшение
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    };

    update(selectedItem);
    basket = basket.filter((x) => x.item !== 0);
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


//Меняем цвет и текст кнопки товаров при добавлении в корзину
const productBtn = document.querySelectorAll('.product-btn');

productBtn.forEach(e => e.addEventListener('click', event => {
    event.target.style.backgroundColor = 'rgba(0, 168, 45, 1)';
    event.target.innerText = 'В корзине';
    cartIcon.classList.add('visible')
}));






// //Удаляем товар из корзины
// function handleClick(e) {
//     const currentCross = e.currentTarget;
//     currentCross.parentElement.remove();
// };

// cross.forEach(close => {
//     close.addEventListener('click', handleClick)
// });


// let cartItems = document.querySelector('.cart_items');

// if (cartItems.length == 0) {
//     document.location.replace("http://127.0.0.1:5500/online-store/index.html")

// };



//Сохраняем данные
// const addCartToMemory = () => {
//     localStorage.setItem('cart', JSON.stringify(listCards));
// }

// function initApp() {
//     products.forEach((value, key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('product_card');
//         newDiv.innerHTML = `
//         <img class="product_img" src="${value.image}" alt="">
//         <p class="product-text">${value.describe}</p>
//         <p class="product_summ">${value.price.toLocaleString()} ₽</p>
//         <button onclick="addToCard(${key})" class="product-btn">добавить в корзину</button>
//         `;
//         listProductHTML.appendChild(newDiv);

//         //Получаем данные из памяти
//         // if(localStorage.getItem('cart')) {
//         //     listCards = JSON.parse(localStorage.getItem('cart'));
//         // }
//     })
// }
// initApp();


//Добавляем товары в корзину

// function addToCard(id) {
//     if (listCards[id] == null) {
//         listCards[id] = products[id];
//         listCards[id].quantity = 1;
//     }
//     reloadCard();
// }

// let listCards = [];

// function reloadCard() {
//     basket.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, id) => {
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;

//         if (value != null) {
//             let newDiv = document.createElement('div');
//             newDiv.classList.add('cart_item');
//             newDiv.innerHTML = `
//                 <img class="cart_img" src="${image}" alt="">
//                 <p class="cart-text">${describe}</p>
//                     <div class="count">
//                         <div class="minus" onclick= "decrement(${id})">
//                             <i class="bi bi-dash-lg"></i>
//                         </div>
//                         <div id = ${id} class="quantity">1</div>
//                         <div class="plus" onclick= "increment(${id})">
//                             <i class="bi bi-plus-lg"></i>
//                         </div>
//                     </div>
//                     <p class="item_summ">${price.toLocaleString()} ₽</p>
//                     <div class="close">
//                         <img class="cross" src="./assets/svg/close.svg" alt="Cross">
//                     </div>`;
//         listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     cartIcon.innerText = count;
// }

// const changeQuantity = (key, quantity) => {
 
//         if(quantity == 0){
//             delete listCards[key];
//         }else{
//             listCards[key].quantity = quantity;
//             listCards[key].price = quantity* products.price;
//         }
//     reloadCard();
// }






