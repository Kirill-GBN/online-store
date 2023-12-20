
let listProduct = document.getElementById('main-container');
// let total = document.querySelector('.total');
let body = document.querySelector('body');
// let cross = document.querySelector('.close');


//Создаем нашу баззу товаров
let products = [
    {
        id: 1,
        image: "./assets/img/air_humidifier_1.jpg",
        describe: "Увлажнитель воздуха STARWIND SHC1322, 3л, белый",
        price: 1650
    },

    {
        id: 2,
        image: "./assets/img/trimmer_2.jpg",
        describe: "Триммер PHILIPS HC3521/15 серебристый/черный",
        price: 2290
    },

    {
        id: 3,
        image: "./assets/img/fitness_tracker_pink_3.jpg",
        describe: "Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95, розовый",
        price: 2390
    },

    {
        id: 4,
        image: "./assets/img/mouse_4.jpg",
        describe: "Мышь A4TECH Bloody V3, игровая, оптическая, проводная, USB, черный",
        price: 960
    },

    {
        id: 5,
        image: "./assets/img/fitness_tracker_black_5.jpg",
        describe: "Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95, черный",
        price: 2390
    },

    {
        id: 6,
        image: "./assets/img/vacuum_cleaner_6.jpg",
        describe: "Пылесос SINBO SVC 3497, 2500Вт, синий/серый",
        price: 5670
    },

    {
        id: 7,
        image: "./assets/img/tablet_7.jpg",
        describe: "Планшет DIGMA Optima 7 Z800 Android 10.0 серебристый",
        price: 9490
    },

    {
        id: 8,
        image: "./assets/img/screen_8.jpg",
        describe: "Монитор игровой ACER Nitro RG241YPbiipx 23.8",
        price: 16800
    },

    {
        id: 9,
        image: "./assets/img/action_camera_9.jpg",
        describe: "Экшн-камера DIGMA DiCam 310 4K, WiFi, черный",
        price: 2290
    },

    {
        id: 10,
        image: "./assets/img/smart_speaker_10.jpg",
        describe: "Умная колонка ЯНДЕКС c голосовым помощником Алисой, серебристый",
        price: 5670
    },

    {
        id: 11,
        image: "./assets/img/quadcopter_11.jpg",
        describe: "Квадрокоптер DJI Mini 2 MT2PD Fly More Combo с камерой, серый",
        price: 60990
    },

    {
        id: 12,
        image: "./assets/img/vr_helmet_12.jpg",
        describe: "Шлем виртуальной реальности HTC Vive PRO Eye EEA, черный/синий",
        price: 11960
    },

    {
        id: 13,
        image: "./assets/img/multifunctional_device_13.jpg",
        describe: "МФУ лазерный CANON i-Sensys MF445dw, A4, лазерный, черный",
        price: 35310
    },

    {
        id: 14,
        image: "./assets/img/smart_watch_14.jpg",
        describe: "Смарт-часы AMAZFIT Bip U, 1.43, зеленый / зеленый",
        price: 4490
    },

    {
        id: 15,
        image: "./assets/img/coffee_machine_15.jpg",
        describe: "Кофемашина PHILIPS EP1224/00, серый/черный",
        price: 29990
    },

    {
        id: 16,
        image: "./assets/img/gyro_scooter_16.jpg",
        describe: "Гироскутер MIZAR MZ10,5CN, 10.5, карбон",
        price: 12990
    }
];


//Наполняем каталог товаров на странице
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (listProduct.innerHTML = products.map((x)=>{
        let {id, image, describe, price} = x;
        return `
        <div id = product-id-${id} class="product_card">
            <img class="product_img" src=${image} alt="">
            <p class="product-text">${describe}</p>
            <p class="product_summ">${price} ₽</p>
            <button class="product-btn">добавить в корзину</button>
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
    document.getElementById(id).innerHTML = search.item;
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
//     listCard.innerHTML = '';
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
//     quantity.innerText = count;
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

// let basket = [];

// let increment = (id) => {
//     let selctedItem = id;
//     let search = basket.find((x) => x.key === selctedItem.id);

//     if (search === undefined) {
//         basket.push({
//             id: selctedItem,
//             item: 1,
//         })
//     } else {
//         search.item += 1;
//     }

//     console.log(basket);
// };

// let decrement = (key) => {
//     let selctedItem = key
//     console.log(selctedItem);
// };

// let update = () => {}; 






