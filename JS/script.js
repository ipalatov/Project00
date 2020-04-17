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

function start() {
    do {
        money = +prompt('Ваш бюджет на месяц?', '20000');
    } while (isNaN(money) || money == '' || money == null);
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-04-16');
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', 'qqq'),
            b = +prompt('Во сколько обойдется?', '1000');
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' &&
            a.length < 50) {
            console.log('Done');
            appData[a] = b;
        } else {
            alert('Некорректные данные');
            i--;
        }
    }
}

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(2);

alert('Ежедневный бюджет:' + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
    console.log('Minimum level');
} else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 100) {
    console.log('Average level');
} else if (appData.moneyPerDay > 2000) {
    console.log('High level');
} else {
    console.log('An error occurred');
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
checkSaving();