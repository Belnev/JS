function Cat(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());

barsik = null;

// function depEqual(obj1, obj2) {

//   // if (Object.keys(obj1).length != Object.keys(obj2).length) {
//   //   return false;
//   // };

//   for (var propName in obj1) {
//     if (obj1.hasOwnProperty(propName) && obj2.hasOwnProperty(propName)) {
//       if (obj1[propName] === obj2[propName]) {
//         return
//       }
//     }
//   };

// }

// var objA = {
//   string: 'Vasya',
//   number: 30
// };

// var objB = {
//   // string: 'Vasya',
//   boolean: true,
//   undefined: undefined,
//   null: null
// };

// objA.__proto__ = objB;



// console.log(depEqual(objA, objB));
