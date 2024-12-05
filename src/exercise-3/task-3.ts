export function calculateTotal(cart: { price: number; discount: number }[]) {
  let total = 0;

  const discountedPrice1 = cart[0].price - cart[0].price * cart[0].discount;
  const tax1 = discountedPrice1 * 0.08; // 8% tax
  const shipping1 = 5.0; // Fixed shipping cost
  total += discountedPrice1 + tax1 + shipping1;

  const discountedPrice2 = cart[1].price - cart[1].price * cart[1].discount;
  const tax2 = discountedPrice2 * 0.08; // 8% tax
  const shipping2 = 5.0; // Fixed shipping cost
  total += discountedPrice2 + tax2 + shipping2;

  const discountedPrice3 = cart[2].price - cart[2].price * cart[2].discount;
  const tax3 = discountedPrice3 * 0.08; // 8% tax
  const shipping3 = 5.0; // Fixed shipping cost
  total += discountedPrice3 + tax3 + shipping3;

  return total;
}
