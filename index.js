//Удаляем товар из корзины
const cross = document.querySelectorAll('.close');

function handleClick(e) {
    const currentCross = e.currentTarget;
    currentCross.parentElement.remove();
};

cross.forEach(close => {
    close.addEventListener('click', handleClick)
});


// let cartItems = document.querySelector('.cart_items');

// if (cartItems.length == 0) {
//     document.location.replace("http://127.0.0.1:5500/online-store/index.html")
    
// };


//Задаем каталог товаров на странице

let listProductHTML = document.querySelector('.main-container');

let products = [   
    {
        "id": 1,
        "image": "./assets/img/air_humidifier_1.jpg",
        "describe": "Увлажнитель воздуха STARWIND SHC1322, 3л, белый",
        "price": 1650 
    },

    {
        "id": 2,
        "image": "./assets/img/trimmer_2.jpg",
        "describe": "Триммер PHILIPS HC3521/15 серебристый/черный",
        "price": 2290
    },

    {
        "id": 3,
        "image": "./assets/img/fitness_tracker_pink_3.jpg",
        "describe": "Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95, розовый",
        "price": 2390 
    },

    {
        "id": 4,
        "image": "./assets/img/mouse_4.jpg",
        "describe": "Мышь A4TECH Bloody V3, игровая, оптическая, проводная, USB, черный",
        "price": 960  
    },

    {
        "id": 5,
        "image": "./assets/img/fitness_tracker_black_5.jpg",
        "describe": "Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95, черный",
        "price": 2390 
    },

    {
        "id": 6,
        "image": "./assets/img/vacuum_cleaner_6.jpg",
        "describe": "Пылесос SINBO SVC 3497, 2500Вт, синий/серый",
        "price": 5670  
    },

    {
        "id": 7,
        "image": "./assets/img/tablet_7.jpg",
        "describe": "Планшет DIGMA Optima 7 Z800 Android 10.0 серебристый",
        "price": 9490 
    },

    {
        "id": 8,
        "image": "./assets/img/screen_8.jpg",
        "describe": "Монитор игровой ACER Nitro RG241YPbiipx 23.8",
        "price": 16800 
    },

    {
        "id": 9,
        "image": "./assets/img/action_camera_9.jpg",
        "describe": "Экшн-камера DIGMA DiCam 310 4K, WiFi, черный",
        "price": 2290  
    },

    {
        "id": 10,
        "image": "./assets/img/smart_speaker_10.jpg",
        "describe": "Умная колонка ЯНДЕКС c голосовым помощником Алисой, серебристый",
        "price": 5670 
    },

    {
        "id": 11,
        "image": "./assets/img/quadcopter_11.jpg",
        "describe": "Квадрокоптер DJI Mini 2 MT2PD Fly More Combo с камерой, серый",
        "price": 60990 
    },

    {
        "id": 12,
        "image": "./assets/img/vr_helmet_12.jpg",
        "describe": "Шлем виртуальной реальности HTC Vive PRO Eye EEA, черный/синий",
        "price": 11960 
    },

    {
        "id": 13,
        "image": "./assets/img/multifunctional_device_13.jpg",
        "describe": "МФУ лазерный CANON i-Sensys MF445dw, A4, лазерный, черный",
        "price": 35310 
    },

    {
        "id": 14,
        "image": "./assets/img/smart_watch_14.jpg",
        "describe": "Смарт-часы AMAZFIT Bip U, 1.43, зеленый / зеленый",
        "price": 4490
    },

    {
        "id": 15,
        "image": "./assets/img/coffee_machine_15.jpg",
        "describe": "Кофемашина PHILIPS EP1224/00, серый/черный",
        "price": 29990 
    },

    {
        "id": 16,
        "image": "./assets/img/gyro_scooter_16.jpg",
        "describe": "Гироскутер MIZAR MZ10,5CN, 10.5, карбон",
        "price": 12990 
    }

];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('product_card');
        newDiv.innerHTML = `
        <img class="product_img" src="${value.image}" alt="">
        <p class="product-text">${value.describe}</p>
        <p class="product_summ">${value.price} ₽</p>
        <button class="product-btn">добавить в корзину</button>
        `;
        listProductHTML.appendChild(newDiv);
    })
}

initApp();






//Меняем цвет и текст кнопки товаров при добавлении в корзину
const productBtn = document.querySelectorAll('.product-btn');

productBtn.forEach(e=>e.addEventListener('click', event => {
    event.target.style.backgroundColor = 'rgba(0, 168, 45, 1)';
    event.target.innerText = 'В корзине';
}));



