//Меняем цвет и текст кнопки товаров при добавлении в корзину

const productBtn = document.querySelectorAll('.product-btn');
productBtn.forEach(e=>e.addEventListener('click', event => {
    event.target.style.backgroundColor = 'rgba(0, 168, 45, 1)';
    event.target.innerText = `В корзине`;
  }));


//Удаляем товар из корзины

const cross = document.querySelectorAll('.close');

function handleClick(e) {
    const currentCross = e.currentTarget;
    currentCross.parentElement.remove();
};

cross.forEach(close => {
    close.addEventListener('click', handleClick)
});