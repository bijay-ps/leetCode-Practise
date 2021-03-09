// https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
  let maxWealth = 0;
  accounts.forEach(amt => {
      const total = amt.reduce((acc,currVal) => acc + currVal);
      maxWealth = Math.max(maxWealth, total);
  });
  return maxWealth;
};

const res1 = maximumWealth([[1,2,3],[3,2,1]]);

const res2 = maximumWealth([[1,5],[7,3],[3,5]]);

const res3 = maximumWealth([[2,8,7],[7,1,3],[1,9,5]]);

console.log(`res1: ${res1}, res2: ${res2}, res3: ${res3}`);