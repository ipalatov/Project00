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



function start() {
    do {
        money = +prompt('What is your budget for this month?', '20000');
    } while (isNaN(money) || money == '' || money == null);
    time = prompt('Enter date in format YYYY-MM-DD', '2020-04-16');
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Enter expenses item this mounth:', 'exp'),
                b = +prompt('What amount this expenses item?', '1000');
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' &&
                a.length < 50) {
                console.log('Done');
                appData.expenses[a] = b;
            } else {
                alert('Incorrect data');
                i--;
            }
        }

    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Daily budget:' + appData.moneyPerDay);

    },
    detectLevel: function () {
        if (appData.moneyPerDay <= 100) {
            console.log('Minimum level');
        } else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 100) {
            console.log('Average level');
        } else if (appData.moneyPerDay > 2000) {
            console.log('High level');
        } else {
            console.log('An error occurred');
        }
    },
    checkSaving: function () {
        if (appData.saving == true) {
            let save, percent;
            do {
                save = +prompt('Enter deposit amount:', appData.budget);
            } while (isNaN(save) || save == '' || save == null);
            do {
                percent = +prompt('Enter percent:', '5');
            } while (isNaN(percent) || percent == '' || percent == null);
            appData.monthIncome = save * percent / 100 / 12;
            alert('Your monthly deposit income is:' + (appData.monthIncome).toFixed(2));
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt('Enter optional expenses item this mounth:', 'optexp'),
                b = +prompt('What amount this expenses item?', '500');
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' &&
                a.length < 50) {
                console.log('Done');
                appData.optionalExpenses[a] = b;
            } else {
                alert('Incorrect data');
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items;
        do {
            items = prompt('Enter income items this mounth (separate them with commas)', 'qwe, asd, zxc');
        } while (typeof (items) != 'string' || typeof (items) === null || items === '');

        appData.income = items.split(', ');
        appData.income.push(prompt('Anything else?', 'rrr'));
        appData.income.sort();

        appData.income.forEach(function (index, i) {
            alert('Способы дополнительного заработка:' + (i + 1) + ' ' + index);
        });
    },
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}


