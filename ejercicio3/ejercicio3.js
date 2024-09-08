document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.getElementById('catalog');
    const cart = document.getElementById('cart');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let cartItems = [];

    
    fetch('ejercicio3.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('col-md-4', 'mb-3');
                card.innerHTML = `
                    <div class="card">
                        <img src="${item.image}" class="card-img-top" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.description}</p>
                            <p class="card-text">$${item.price}</p>
                            <button class="btn btn-primary add-to-cart" data-id="${item.id}">Agregar al Carrito</button>
                        </div>
                    </div>
                `;
                catalog.appendChild(card);
            });
        })
        .catch(error => console.log(error));

    
    catalog.addEventListener('click', event => {
        if (event.target.classList.contains('add-to-cart')) {
            const itemId = event.target.dataset.id;
            const itemToAdd = data.find(item => item.id === itemId);

            if (itemToAdd) {
                cartItems.push(itemToAdd);
                renderCart();
            }
        }
    });

    
    checkoutBtn.addEventListener('click', () => {
        alert('¡Gracias por tu compra!');
        cartItems = [];
        renderCart();
    });
    function renderCart() {
        cart.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('list-group-item', 'cart-item');
            cartItem.textContent = `${item.name} - $${item.price}`;
            cart.appendChild(cartItem);
        });
    }
    function renderCart() {
        cart.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('list-group-item', 'cart-item');
            cartItem.textContent = `${item.name} - $${item.price}`;
            cart.appendChild(cartItem);
        });
    
        // Actualiza la lista de productos en el carrito
        const cartItemsList = document.getElementById('cartItems');
        cartItemsList.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('list-group-item');
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(cartItem);
        });
    }
    
});
