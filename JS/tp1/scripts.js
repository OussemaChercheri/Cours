document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addExpense();
});

document.getElementById('filterAmount').addEventListener('input', function() {
    filterExpenses();
});

function addExpense() {
    const title = document.getElementById('expenseTitle').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const li = document.createElement('li');
    li.textContent = `${title} : ${amount.toFixed(2)} €`;
    document.getElementById('expenseList').appendChild(li);
    updateTotal(amount);
}

function updateTotal(amount) {
    const total = parseFloat(document.getElementById('totalExpenses').textContent) + amount;
    document.getElementById('totalExpenses').textContent = total.toFixed(2);
}

function filterExpenses() {
    const filterAmount = parseFloat(document.getElementById('filterAmount').value);
    const expenses = document.getElementById('expenseList').getElementsByTagName('li');
    for (let i = 0; i < expenses.length; i++) {
        const expenseAmount = parseFloat(expenses[i].textContent.split('€')[0].split(' ')[1]);
        if (expenseAmount > filterAmount) {
            expenses[i].classList.add('highlight');
        } else {
            expenses[i].classList.remove('highlight');
        }
    }
}