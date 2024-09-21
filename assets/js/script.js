let expenseNameList = [];
let expenseValueList = [];

function addExpense (){
    let expenseName = document.getElementById('nombreGasto').value;
    let expenseValue = document.getElementById('valorGasto').value;

    expenseNameList.push(expenseName);
    expenseValueList.push(expenseValue);

    refreshExpenseLists ();
}


function refreshExpenseLists (){
    const expensesListPlaceholderElementFromDOM = document.getElementById('listaDeGastos');
    const totalExpensesElementFromDOM = document.getElementById('totalGastos');
    let listHTML = '';
    let totalExpense = 0;

    expenseNameList.forEach((elementExpenseName, index) => {
        const expenseValue = Number(expenseValueList[index]);

        listHTML += `<li>${elementExpenseName} - USD ${expenseValue.toFixed(2)}
                        <button onclick="deleteExpense(${index});">Delete</button>
                    </li>`;

        totalExpense += expenseValue;
    });

    expensesListPlaceholderElementFromDOM.innerHTML = listHTML;
    totalExpensesElementFromDOM.innerHTML = totalExpense.toFixed(2);
    cleanExpenseInputBoxes();
}


function cleanExpenseInputBoxes (){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function deleteExpense (index){
    expenseNameList.splice(index,1);
    expenseValueList.splice(index,1);
    refreshExpenseLists();
}