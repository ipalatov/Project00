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

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', 'qqq'),
        b = +prompt('Во сколько обойдется?', '1000');
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
        console.log('Done');
        appData[a] = b;
    } else {
        alert('Некорректные данные');
    }
}
// 2 method:
//
// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', 'qqq'),
//         b = +prompt('Во сколько обойдется?', '1000');
//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Done');
//         appData[a] = b;
//     } else {
//        alert('Некорректные данные');
//   }
//     i++;
// }
//
// 3 method
//
// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', 'qqq'),
//         b = +prompt('Во сколько обойдется?', '1000');
//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Done');
//         appData[a] = b;
//     } else {
//         alert('Некорректные данные');
//     }
//     i++;
// } while (i < 2);






appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет:' + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 100) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
