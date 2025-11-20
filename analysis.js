let discout = 0;
let total = 0;
function totalOrder(order) {
  order.forEach((x) => {
    if (x.dairyFree === true) {
      let afterPrice = x.price - 0.5;
      let roundedPrice = financial(afterPrice);
      let roundedOrigial = financial(x.price);
      console.log(
        `${x.name} (dairy-free): $${roundedOriginal} > $${roundedPrice} (-$0.50)`
      );
      total = total += afterPrice;
      financial(x.price - 0.5);
    } else if (x.dairyFree === false) {
      console.log(`${x.name}: $${x.price} (no discount)`);
      total = total += x.price;
    }
    let roundedTotal = financial;
  });
}
