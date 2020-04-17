let money;
let time;

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
        } while (typeof(items) != 'string' || typeof(items) === null || items === '');
        
        appData.income = items.split(', '); 
        appData.income.push(prompt('Anything else?','rrr'));
        appData.income.sort();
        
        appData.income.forEach(function(index, i, array) {
            alert('Способы дополнительного заработка:' + (i+1) + ' ' + index );
        });
    },
};

for (const key in appData) {
    if (appData.hasOwnProperty(key)) {
        console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
    }
}
