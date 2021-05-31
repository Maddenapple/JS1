let divBasket = document.querySelector(".basket-products"),
    products = {
        product1 : ['img1-640.jpg', 'Лопата снеговая', 650.50,],
        product2 : ['img2-640.jpg', 'Лопата кривая', 712.45],
        product3 : ['img3-640.jpg', 'Ковырялка', 223.78]
    };

for (let key in products){
    let el = document.createElement('div'),
        img = document.createElement('img'),
        h3 = document.createElement('h3'),
        span = document.createElement('span'),
        button = document.createElement('button');

    el.className = 'basket-product';
    img.src = './img/' + products[key][0];
    h3.innerHTML = products[key][1];
    span.innerHTML = products[key][2];
    button.innerHTML = 'Purchase';
    el.innerHTML = img.outerHTML + h3.outerHTML + span.outerHTML;

    button.onclick = function(e){
        let price = e.target.parentNode.querySelector('span').cloneNode(true),
            img = e.target.parentNode.querySelector('img').cloneNode(true),
            title = e.target.parentNode.querySelector('h3').cloneNode(true),
            el2 = document.querySelector('.basket'),
            div = document.createElement('div');
        div.className = 'basket-products';
        div.innerHTML += img.outerHTML + title.outerHTML + price.outerHTML;
        div.onclick = function () { div.remove(); total(); };
        el2.prepend(div);
        total();
    };
    el.append(button);
    divBasket.append(el);
}

function total() {
    let el = document.querySelector('.wrapper h2'),
        price = document.querySelectorAll('.basket .basket-products span'),
        total = 0;
    for (let i = 0; i <= price.length - 1; i++) {
        total += +price[i].innerHTML;
    }
    el.innerHTML = 'Subtotal: ' + total.toFixed(2);
}