/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const smallDiscount = 20;
  const largeDiscount = 50;
  let result = 0;


  for (let i = 0; i < days; i++) {
    result += price;
  }

  if (result < 120) {
    return result;
  } else if (result >= 120 && result < 280) {
    return result - smallDiscount;
  } else if (result >= 280) {
    return result - largeDiscount;
  }
}

module.exports = calculateRentalCost;
