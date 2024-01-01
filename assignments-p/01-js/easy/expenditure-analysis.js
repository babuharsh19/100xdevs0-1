/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  categoryAndTotalSpent = {};
  res = [];
  transactions.forEach(function(transaction, x) {
    category = transaction.category;
    if(category in categoryAndTotalSpent){
      categoryAndTotalSpent[category] += transaction.price;
    }
    else{
      categoryAndTotalSpent[category] = transaction.price;
    }
  });
  Object.keys(categoryAndTotalSpent).forEach((category1) => {
    res.push({
      'category': category1,
      'totalSpent': categoryAndTotalSpent[category1]
    })
  });
  return res;
}

module.exports = calculateTotalSpentByCategory;
