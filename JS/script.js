var money = +prompt('Ваш бюджет на месяц?', '20000');
var time = prompt('Введите дату в формате YYYY-MM-DD', '2020-04-16');
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};

var answ1 = prompt('Введите обязательную статью расходов в этом месяце', 'qqq');
var answ2 = +prompt('Во сколько обойдется?', '1000');
var answ3 = prompt('Введите обязательную статью расходов в этом месяце', 'www');
var answ4 = +prompt('Во сколько обойдется?', '500');

appData.expenses.answ1 = answ2;
appData.expenses.answ3 = answ4;

console.log(appData.budget / 30);
alert('Ваш бюджет на 1 день в ближайший месяц составит:'+ appData.budget / 30);


