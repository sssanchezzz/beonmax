

let money, time;
money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let ans1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    ans2 = prompt('Во сколько обойдется?', ''),
    ans3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    ans4 = prompt('Во сколько обойдется?', '');

appData.expenses.ans1 = ans2;
appData.expenses.ans3 = ans4;

alert(appData.budget/30);


