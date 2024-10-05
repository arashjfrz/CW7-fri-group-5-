let add = [];
let item = {
  productName: "Tomato",
  Count: 6,
  priceBefore: 5000,
  priceAfter: 3000,
  Total: 18000,
};
let Index = 1;

function addItem(productName, count, priceBefore, priceAfter, total) {
  console.log("I'm Working");
  const tableName = document.getElementById("factor");
  let newRow = tableName.insertRow();
  let rowNumber = newRow.insertCell(0);
  let name = newRow.insertCell(1);
  let number = newRow.insertCell(2);
  let priceB = newRow.insertCell(3);
  let priceA = newRow.insertCell(4);
  let totals = newRow.insertCell(5);
  rowNumber.innerHTML = Index;
  name.innerHTML = productName;
  number.innerHTML = count;
  priceB.innerHTML = priceBefore;
  priceA.innerHTML = priceAfter;
  totals.innerHTML = total;
  Index += 1;
}

const btn = document.getElementById("add");
btn.addEventListener("click", () =>
  addItem(
    item.productName,
    item.Count,
    item.priceBefore,
    item.priceAfter,
    item.Total
  )
);
