document.addEventListener("DOMContentLoaded", () => {
    const menuList = document.getElementById("menu-list");
    const cartList = document.getElementById("cart-list");
    const totalDisplay = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout");

    const menuItems = [
        { name: "Hambúrguer", price: 15.00 },
        { name: "Batata Frita", price: 8.00 },
        { name: "Refrigerante", price: 5.00 },
        { name: "Salada", price: 12.00 }
    ];

    const cart = [];

    const updateCart = () => {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <button data-index="${index}">Remover</button>`;
            cartList.appendChild(li);
            total += item.price;
        });

        totalDisplay.textContent = `Total: R$ ${total.toFixed(2)}`;
    };

    menuItems.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <button>Adicionar</button>`;
        li.querySelector("button").addEventListener("click", () => {
            cart.push(item);
            updateCart();
        });
        menuList.appendChild(li);
    });

    cartList.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const index = event.target.dataset.index;
            cart.splice(index, 1);
            updateCart();
        }
    });

    checkoutButton.addEventListener("click", () => {
        if (cart.length > 0) {
            alert("Pedido finalizado com sucesso! Obrigado por usar o EasyOrder.");
            cart.length = 0;
            updateCart();
        } else {
            alert("Seu carrinho está vazio.");
        }
    });

    updateCart();
});
