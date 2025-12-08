
const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", function() {
        const foodName = this.querySelector("img").alt;
        const price = this.querySelector("p").innerText;
        alert(`You selected: ${foodName} \nPrice: ${price}`);
    });
});