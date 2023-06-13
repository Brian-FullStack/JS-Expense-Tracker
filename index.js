const addBtn = document.querySelector("#addBtn");
const activeIndicator = document.querySelector(".activeIndicator");
const transactionArray = [];



const addTransactionToHistory = (transactionArray) => {
    /**for each object in the transactionArray:
     * create a new item and display:
     * 1. Name
     * 2. Price
     * 3. Red / Green
     */

    const itemContainer = document.querySelector(".item-container");
    itemContainer.innerHTML = ""; // CLears the previous transaction history

    transactionArray.forEach((transaction) => {
        const activeIndicator = document.createElement("div");
        activeIndicator.classList.add("activeIndicator");

        // Creates the red or green mark at end of line
        if (transaction.amount >= 0) {
            activeIndicator.classList.remove("activeIndicator");
            activeIndicator.classList.add("activeIndicatorGreen");
        } else {
            activeIndicator.classList.remove("activeIndicator");
            activeIndicator.classList.add("activeIndicatorRed");
        }

        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <span class="itemName">${transaction.name}</span>
            <span class="itemPrice">${transaction.amount}</span>`

            activeIndicator.appendChild(item);
            itemContainer.appendChild(activeIndicator);
    });
}

const updateBalanceSheet = (income, expense, balance) => {
    /**if the newTransaction.amount > 0 {
     * ADD newTransaction.amount to income AND balance
     * } else {
     * ADD newTransaction.amount to expenses and SUBTRACT from balance} */

}

const createNewTransaction = () => {
    /**Create a new object using the transaction.Name and transaction.Amount
     * push() the new Object to the transactionArray
     * if amount is less than 0 activeIndicator == flase
     * if amount is more than 0 activeIndicator == true
     */
    let name = document.querySelector("#name").value;
    let amount = document.querySelector("#amount").value;
    let asset = false;

    let newTransaction = {
        name: name.toLowerCase(),
        amount: amount,
        asset: asset
    };

    transactionArray.unshift(newTransaction)
    addTransactionToHistory(transactionArray)
    /* transactionArray.shift() */

    name = "";
    amount = "";
}

/**Clcik event for add button */
addBtn.addEventListener("click", () => {
    createNewTransaction();
});
