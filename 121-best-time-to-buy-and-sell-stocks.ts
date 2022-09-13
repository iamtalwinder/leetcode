function maxProfit(prices: number[]): number {
  if (prices.length === 1) {
    return 0;
  }

  let buy = 0;
  let maxProfit = 0;

  for (let sell = 1; sell < prices.length; sell++) {
    const profit = prices[sell] - prices[buy];
    if (profit > maxProfit) {
      maxProfit = profit
    }

    if (prices[buy] > prices[sell]) {
      buy = sell;
    }
  }

  return maxProfit;
};
