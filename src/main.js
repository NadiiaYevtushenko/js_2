console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')


/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
var i = 0

// Постфіксний інкремент
console.log(i++)
// Постфіксний декремент
console.log(i--)
// Префіксний інкремент
console.log(++i)
// Префіксний декремент
console.log(--i)

/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10
var myTest = 20
// myTest
// +=
myTest += myNum
console.log(myTest)
// –=
myTest -= myNum
console.log(myTest)
// *=
myTest *= myNum
console.log(myTest)
// /=
myTest /= myNum
console.log(myTest)
// %=
myTest %= myNum
console.log(myTest)


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
var myPi = Math.PI
console.log(myPi)
// округлене значення числа 89.279 → myRound
var myRound = Math.round(89.279)
console.log(myRound)
// випадкове число між 0..10 (10 не включено) → myRandom
var myRandom = Math.random() * 10
console.log(myRandom)
// 3 у 5 степені → myPow
var myPow = Math.pow(3, 5)
console.log(myTest)

/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */
// Мама мыла раму, рама мыла маму
// strObj
var strObj = { str: 'Мама мыла раму, рама мыла маму'}
strObj.length = strObj.str.length
console.log(strObj.length)

/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
var isRamaPos = strObj.str.indexOf('рама')
// isRama
var isRama = strObj.str.includes('рама')
console.log('isRamaPos:', isRamaPos)
console.log('isRama:', isRama)

/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
var strReplace = strObj.str
  .replace('мыла раму', 'моет раму')
  .replace('рама мыла маму', 'Рама держит маму')

console.log(strReplace)
/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
var someStr = 'some STRING'
// var upperStr
var upperStr = someStr.toUpperCase();
console.log('Uppercase:', upperStr);
// var lowerStr
var lowerStr = someStr.toLowerCase();
console.log('lowercase:', lowerStr);
