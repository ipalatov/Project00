let money;
let time;

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
};

 chooseExpenses();
detectDayBudget();
detectLevel();
checkSaving();
chooseOptExpenses();

function start() {
    do {
        money = +prompt('What is your budget for this month?', '20000');
    } while (isNaN(money) || money == '' || money == null);
    time = prompt('Enter date in format YYYY-MM-DD', '2020-04-16');
}

function chooseExpenses() {
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
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert('Daily budget:' + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log('Minimum level');
    } else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 100) {
        console.log('Average level');
    } else if (appData.moneyPerDay > 2000) {
        console.log('High level');
    } else {
        console.log('An error occurred');
    }
}

function checkSaving() {
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
}

function chooseOptExpenses() {
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
}
