const discountPrice = [];
const totalIndiv = [];

const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 },
];

total = 0;
cart.forEach((item) => {
  price = item.price;
  if (price < 5) {
    price = price * 0.95;
  }
  totalIndiv.push(price * item.quantity);
});
for (let i = 0; i < totalIndiv.length; i++) {
  total += totalIndiv[i];
}
console.log(
  `Your final total is $${total} dollars. It can also be $${toFloor(total)}
  )} dollars if you're a cool kid and know why`
);
