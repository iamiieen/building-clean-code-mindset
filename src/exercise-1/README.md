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
    // base price - quantity discount + shipping
    // apply 10% discount for quantity more than 10 items
    let thisAmount = items[i].quantity * items[i].price - Math.max(0, items[i].quantity - 10) * items[i].price * 0.2 + Math.min(40, items[i].quantity * items[i].price * 0.1);
    
    totalCost += thisAmount;
  }
  // apply 2% discount for total cost cost is more than 1000
  if(totalCoast > 1000){
    totalCost = totalCost - totalCost * 0.02;
  }

  console.log("Total cost : ", totalCost);
  return totalCost;
}
```
