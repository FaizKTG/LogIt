const inhandHistoryMode = document.getElementById("inhandHistory");
const accountHistoryMode = document.getElementById("accountHistory");
const totalHistoryMode = document.getElementById("totalHistory");

var mainDate = null;

function newHistory() {
    console.log("Creating new history...");

    let debtorVal = document.getElementById('debtorVal').value;
    let debtVal = document.getElementById("debtVal").value;
    const currentDate = new Date().toString();
    const formattedDate = currentDate.substring(4, 15);
            
    console.log("Debt info: ", debtorVal, " took ", debtVal);
    console.log("Current date: ", formattedDate);
    console.log("Saving History: InhandMoney = ", inhandMoney, " AccountMoney = ", accountMoney, " totalMoney = ", totalMoney);


    if (debtorVal == "" || debtVal == "") {
        debtorVal = "N/A";
        debtVal = 0;
    }

    const rowData = [formattedDate, inhandMoney, accountMoney, totalMoney, 'Uncalculated', debtVal, debtorVal];
    addRow(rowData);

    var newData = [formattedDate, "LMAOOOOOOOO", accountMoney, totalMoney, 'Uncalculated', debtVal, debtorVal];
    updateRow(newData, 0);


}

function changeModeHistory() {
    if (inhandMode.checked) {
        updateMoneyRow(inhandMoney);
    }
    else if (accountMode.checked) {
        updateMoneyRow(accountMoney);
    }
    else if (totalMode.checked) {
        updateMoneyRow(totalMoney);
    }
    else {
        alert("HistoryMode Change Error!");
    }
}

function addRow(data) {
    const historyTableBody = document.querySelector('.HistoryTableBody');

    const newRow = document.createElement('tr');
    data.forEach(item => {
        const cell = document.createElement('td');
        cell.textContent = item;
        newRow.appendChild(cell);
    });

    historyTableBody.appendChild(newRow);
}

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