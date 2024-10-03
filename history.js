const inhandHistoryMode = document.getElementById("inhandHistory");
const accountHistoryMode = document.getElementById("accountHistory");
const totalHistoryMode = document.getElementById("totalHistory");

var mainDate = null;

function newHistory() {
    console.log("Creating new history...");

    let debtorVal = document.getElementById('debtorVal').value;
    let debtVal = document.getElementById("debtVal").value;
    let reasonVal = document.getElementById("reasonVal").value;
    const currentDate = new Date().toString();
    const formattedDate = currentDate.substring(4, 15);
            
    console.log("Debt info: ", debtorVal, " took ", debtVal);
    console.log("Reason: ", reasonVal);
    console.log("Current date: ", formattedDate);
    console.log("Saving History: InhandMoney = ", inhandMoney, " AccountMoney = ", accountMoney, " totalMoney = ", totalMoney);

    // standardizes inputs
    if (debtorVal == "" || debtVal == "") {
        debtorVal = "N/A";
        debtVal = 0;
    } 
    if (reasonVal == "") {
        reasonVal = "N/A";
    }

    const rowData = [formattedDate, inhandMoney, accountMoney, totalMoney, 'Uncalculated', reasonVal, debtVal, debtorVal];
    addRow(rowData);

    saveHistory();

    // tests
    var newData = [formattedDate, "LMAOOOOOOOO", accountMoney, totalMoney, 'Uncalculated', reasonVal, debtVal, debtorVal];
    updateRow(newData, 0);
    
    const tbody = document.querySelector('.HistoryTableBody');
    const row = tbody.rows[1];
    console.log("ROWWWW:", row);
}

// Saves current history into local storage
function saveHistory() {
    const historyTableBody = document.querySelector('.HistoryTableBody').innerHTML;
    localStorage.setItem('historyTable', historyTableBody);
    console.log("History content saved as: ", localStorage.getItem('historyTable'));
}
// Loads former history content once webpage loads if it exists
document.addEventListener('DOMContentLoaded', function(event) {
    if (localStorage.getItem('historyTable')) {
        console.log("Former history content loaded successfully");
        let historyTableBody = document.querySelector('.HistoryTableBody');
        historyTableBody.innerHTML = localStorage.getItem('historyTable');
    }
});

// Removed changeModeHistory(), make sure to remove its elements

function addRow(data) {
    const historyTableBody = document.querySelector('.HistoryTableBody');

    const newRow = document.createElement('tr');
    data.forEach(item => {
        const cell = document.createElement('td');
        cell.textContent = item;
        newRow.appendChild(cell);
    });

    historyTableBody.prepend(newRow);
}

// NOT WITHIN FUNCTION
function updateRow(rowIndex, newData) {
    const tbody = document.querySelector('.HistoryTableBody');
    const row = tbody.rows[rowIndex];

    if (row) {
        const cells = row.getElementsByTagName('td');
        newData.forEach((data, index) => {
            if (cells[index]) {
                cells[index].textContent = data;
            }
        });
    } else {
        console.log('Row not found');
    }
}

function deleteRow(rowIndex) {
    const tbody = document.querySelector('.HistoryTableBody');

    if (rowIndex >= 0 && rowIndex < tbody.rows.length) {
        // Remove the row at the specified index
        tbody.deleteRow(rowIndex);
    } else {
        console.log('Row index out of bounds');
    }
}

// Lazily put standardization tests
function checkStandard(debtorVal, debtVal, reasonVal) {
    
}
