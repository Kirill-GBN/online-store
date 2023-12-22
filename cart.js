let listCard = document.getElementById('listCard');
let cartIcon = document.getElementById('cartAmount');
let total = document.getElementById('total');
let basket = JSON.parse(localStorage.getItem("data")) || [];



let generateCartItems = () => {
    if(basket.length !== 0) {
        return (listCard.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = products.find((у) => у.id === id) || [];
            let { image, describe, price} = search;
            return `
            <div id=product-id-${id} class="cart_item">
                <img class="cart_img" src=${image} alt="">
                <p class="cart-text">${describe}</p>
                <div class="count">
                    <div onclick="decrement(${id})" class="minus">
                        <i class="bi bi-dash-lg"></i>
                    </div>
                    <div id = ${id} class="quantity">${item}</div>
                    <div onclick= "increment(${id})" class="plus">
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
                <p class="item_summ">${item * price} ₽</p>
                <div onclick="removeItem(${id})" class="close">
                    <img class="cross" src="./assets/svg/close.svg" alt="Cross">
                </div>
            </div>
            <div class="cart_line"></div>
        `;
        })
        .join(""));
    } else {
        listCard.innerHTML = ``;
        document.location.replace("https://kirill-gbn.github.io/online-store/index.html");
    };
};
generateCartItems();




//Фиксируем изменения отображения корзины при её заполнении
let checkCartItems = (data) => {
    if (basket.length === 0 || data === 0) {
        cartIcon.style.display = "none";
    } else {
        cartIcon.style.display = "block";   
    } 
};
checkCartItems();


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

    generateCartItems();
    update(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
};


//Счетчик на уменьшение
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem);

    if (search === undefined) return;
    else if (search.item === 1) {
        alert("Минимальное количество каждого товара: 1 единица. Если хотите удалить товар из корзины, то воспользуйтесь кнопкой удаления");
        return;
    } else {
        search.item -= 1;
    };

    update(selectedItem);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};


//Обновление количества в счетчике
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById("cartAmount").innerHTML = id;
    calculation();
    totalAmount();
};

//Отображаем количество товара на экране (в "кружочке")
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();


//Удаляем товар из корзины

let removeItem = (id) => {
    let selectedItem = id;
    
    basket = basket.filter((x) => x.id !== selectedItem);
    generateCartItems();
    totalAmount();
    calculation();
    // update(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
};


//Считаем общую сумму всех товаров

let totalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((x) => {
            let { item, id } = x;
            let search = products.find((у) => у.id === id) || [];
            return item * search.price;
        }).reduce((x, y) => x + y, 0);
        total.innerHTML = `
        <span>Сумма ${amount} ₽</span>
        `;    
    }
    else {
        return
    };
};
totalAmount();