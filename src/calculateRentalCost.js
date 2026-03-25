/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  let result = 0;

  for (let i = 0; i < days; i++) {
    result += price;
  }

  if (result < 120) {
    return result;
  } else if (result >= 120 && result < 280) {
    return result - 20;
  } else if (result >= 280) {
    return result - 50;
  } else {
    return 0;
  }
}

module.exports = calculateRentalCost;
