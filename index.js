const addBtn = document.querySelector("#addBtn");
let activeIndicator = document.querySelector(".activeIndicator");
const transactionArray = [];



const addTransactionToHistory = (transaction) => {
    /**Use the .unshift() method to add new transaction to transaction array
     * if activeIndicator == true set activeIndicator.classList to green
     * use the .pop() method to remove the last transaction if the transactionArray.length > 5
     */

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
    
    if (amount >= 0) {
        activeIndicator.classList.add("activeIndicatorGreen");
        asset = true
    } else {
        activeIndicator.classList.add("activeIndicatorRed");
    }

    let newTransaction = {
        name: name.toLowerCase(),
        amount: amount,
        asset: asset
    };

    console.log(newTransaction)
}

/**Clcik event for add button */
addBtn.addEventListener("click", () => {
    createNewTransaction();
});
