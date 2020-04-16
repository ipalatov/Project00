var money = +prompt('Ваш бюджет на месяц?', '20000');
var time = prompt('Введите дату в формате YYYY-MM-DD', '2020-04-16');
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    // optionalExpenses,
    incom: [],
    saving: false,
};

var answ1 = prompt('Введите обязательную статью расходов в этом месяце', 'qqq');
var answ2 = +prompt('Во сколько обойдется?', '1000');

var answ3 = prompt('Введите обязательную статью расходов в этом месяце', 'www');
var answ4 = +prompt('Во сколько обойдется?', '500');

appData.expenses.answ1 = answ1;
appData.expenses.answ2 = answ2;
appData.expenses.answ3 = answ3;
appData.expenses.answ4 = answ4;
appData.budget = money - answ2 - answ4;

var budgetOneDay = appData.budget / 30;
console.log(budgetOneDay);
alert('Ваш бюджет на 1 день в ближайший месяц составит:'+ budgetOneDay);


