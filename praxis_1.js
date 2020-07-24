let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
            if (typeof (a) == 'string' && typeof (a) != null && typeof (b) != null
                && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },

    detectLevel: function () {
        if (appData.moneyPerDay <= 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },

    checkSavings: function () {
        appData.savings = confirm('У вас есть накопления?');
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
        }
    },

    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt('Статья необязательных расходов?', '');
            if (typeof (a) == 'string' && typeof (a) != null
                && a != '' && a.length < 50) {
                appData.optionalExpenses[i + 1] = a;
            } else {
                i--;
            }
        }
    },

    chooseIncome: function () {
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую', '');
        while (typeof (items) !== 'string' || typeof (items) == null || items == '') {
            items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую', '');
        }
        appData.income = items.split(', ');
        let smthngElse = prompt('Может что-то ещё?');
        if (typeof (smthngElse) == 'string' && typeof (smthngElse) != null && smthngElse != '') {
            appData.income.push(smthngElse);
        }
        appData.income.sort();

        let newArray = [];
        appData.income.forEach(function (item, i) {
            newArray[i] = i + 1 + ': ' + item + ';';
        });
        let toPrint = newArray.join(';').split(';').join('\n');

        alert('Способы доп. заработка: \n' + toPrint);

    }
}
appData.chooseIncome();

function printAppData() {
    console.log('Программа включает в себя данные: ');
    for (let appDataKey in appData) {
        console.log(appDataKey);
    }
}

printAppData();

// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
//         && a !== '' && b !== '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }

// let j = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
//         && a !== '' && b !== '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         j--;
//     }
//     j++;
// } while (j < 2)
// chooseOptExpenses();