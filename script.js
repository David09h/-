'use strict';

/*let person={
    name:"john",
    age:25,
    isMarried: false
}

console.log(person.name)

let arr=['plum.png','orange.jpg'];

console.log(arr[0])



let answer = +prompt("Есть ли вам 18?m","да")*/

let money=prompt("Ваш бюджет на месяц?")
let time=prompt("Введите дату в формате YYYY-MM-DD")

let qu1=prompt("Введите обязательную статью расходов в этом месяце")
let qu2=prompt("Во сколько обойдется?")

let appData={
    budjet:money,
    timeData:time,
    expenses: {
        qu1 : qu2
        },
    optionalExpenses:null,
    income:null,
    savings:false,
}

alert(`бюджет на 1 день ${+appData.budjet/30} `)
