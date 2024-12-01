# Exercise - 1

## Task - 1 | Sprint Time - 5 minutes

### As a fan of Mathematician I want to calculateArea and calculateCircumference of a given with circle radius (r).

`Hint: formula to calculateArea = 3.14 * r * r`

`Hint: formula to calculateCircumference = 2 * 3.14 * r`

1. When R = 4
2. When R = 10

--------

## Task - 2 | Sprint Time - 5 minutes

### As a fan online stores I want to calculate the totalCost incurred for the order placed;

```typescript
const items = [ { name: "Book", quantity: 11, price: 10 }, { name: "Pen", quantity: 5, price: 5 }  ];

function calculateTotalCost(items) {
  let totalCost = 0;
  for (let i = 0; i < items.length; i++) {
    let thisAmount = items[i].quantity * items[i].price;
    // apply 20% discount for quantity more than 10
    if (items[i].quantity > 10) {
      thisAmount = thisAmount - thisAmount * 0.2;
    }
    totalCost += thisAmount;
  }
  // apply 10% discount for total cost
  totalCost = totalCost - totalCost * 0.1;

  console.log("Total cost : ", totalCost);
  return totalCost;
}
```
