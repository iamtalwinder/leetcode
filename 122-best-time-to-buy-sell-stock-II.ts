function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    maxProfit += Math.max(prices[i] - prices[i - 1], 0)
  }

  return maxProfit;
};