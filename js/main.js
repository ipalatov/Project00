'use strict';

let startBtn = document.getElementById('start'),
    divBudget = document.getElementsByClassName('budget-value')[0],
    divDayBudget = document.getElementsByClassName('daybudget-value')[0],
    divLevel = document.getElementsByClassName('level-value')[0],
    divExpenses = document.getElementsByClassName('expenses-value')[0],
    divOptExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    divIncome = document.getElementsByClassName('income-value')[0],
    divMonSav = document.getElementsByClassName('monthsavings-value')[0],
    divYearSav = document.getElementsByClassName('yearsavings-value')[0],
    inputExpenses = document.getElementsByClassName('expenses-item'),
    approveExpensBtn = document.getElementsByTagName('button')[0],
    approveOptExpensBtn = document.getElementsByTagName('button')[1],
    calculateBtn = document.getElementsByTagName('button')[2],
    inputOptExpenses = document.querySelectorAll('.optionalexpenses-item'),
    inputIncome = document.querySelector('.choose-income'),
    checkboxSaving = document.querySelector('#savings'),
    inputSumm = document.querySelector('#sum'),
    inputPercent = document.querySelector('#percent'),
    inputYear = document.querySelector('.year-value'),
    inputMonth = document.querySelector('.month-value'),
    inputDay = document.querySelector('.day-value');

let money,
    time;

approveExpensBtn.disabled = true;
approveOptExpensBtn.disabled = true;
calculateBtn.disabled = true;

startBtn.addEventListener('click', function () {
    time = prompt('Enter date in format YYYY-MM-DD', '2020-04-16');
    do {
        money = +prompt('What is your budget for this month?', '20000');
    } while (isNaN(money) || money == '' || money == null);

    appData.budget = money;
    appData.timeData = time;
    divBudget.textContent = money.toFixed();
    inputYear.value = new Date(Date.parse(time)).getFullYear();
    inputMonth.value = new Date(Date.parse(time)).getMonth() + 1;
    inputDay.value = new Date(Date.parse(time)).getDate();
    approveExpensBtn.disabled = false;
    approveOptExpensBtn.disabled = false;
    calculateBtn.disabled = false;
});

approveExpensBtn.addEventListener('click', function () {
    appData.expensesSum = 0;
    for (let i = 0; i < inputExpenses.length; i++) {
        let a = inputExpenses[i].value,
            b = +inputExpenses[++i].value;
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' &&
            a.length < 50) {
            // console.log('Done');
            appData.expenses[a] = b;
            appData.expensesSum += +b;
        } else {
            alert('Incorrect data');
            i--;
        }
    }
    divExpenses.textContent = appData.expensesSum;
});

approveOptExpensBtn.addEventListener('click', function () {
    for (let i = 0; i < inputOptExpenses.length; i++) {
        let a = inputOptExpenses[i].value;
        appData.optionalExpenses[i] = a;
        divOptExpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

calculateBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed(2);
        divDayBudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 100) {
            divLevel.textContent = 'Minimum level';
        } else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 100) {
            divLevel.textContent = 'Average level';
        } else if (appData.moneyPerDay > 2000) {
            divLevel.textContent = 'High level';
        } else {
            divLevel.textContent = 'An error occurred';
        }
    } else {
        divDayBudget.textContent = 'An error occurred. Press Start button';
    }
});

inputIncome.addEventListener('input', function () {
    let items = inputIncome.value;
    appData.income = items.split(', ');
    divIncome.textContent = appData.income;
});

checkboxSaving.addEventListener('click', function () {
    if (appData.saving == false) {
        appData.saving = true;
    } else {
        appData.saving = false;
    }
});

inputSumm.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum, percent;
        sum = +inputSumm.value;
        percent = +inputPercent.value;
        appData.monthIncome = sum * percent / 100 / 12;
        appData.yearIncome = sum * percent / 100;

        divMonSav.textContent = appData.monthIncome.toFixed(2);
        divYearSav.textContent = appData.yearIncome.toFixed(2);
    }
});

inputPercent.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum, percent;
        sum = +inputSumm.value;
        percent = +inputPercent.value;
        appData.monthIncome = sum * percent / 100 / 12;
        appData.yearIncome = sum * percent / 100;

        divMonSav.textContent = appData.monthIncome.toFixed(2);
        divYearSav.textContent = appData.yearIncome.toFixed(2);
    }
});


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,

    checkSaving: function () {

    },
};