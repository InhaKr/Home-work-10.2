"use strict";

// // // ДЗ 8. #8_1
// // // Написать функцию getMaxs(args), где args - 
// // // любое количество массивов.

// // // Функция должна вернуть максимальные 
// // // чисельные значения всех переданных 
// // // массивов в виде строки, через разделитель `,`

function getMaxs() {
  let r = [];
  let p;

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);

    if (arguments[i].length == 0) {
     continue;
    }

    let q = Math.max(...arguments[i])
    p = r.push(q);
  }
  return r.join();
}

let max = getMaxs([9, 2, 3, 0],[1],[], [1, -5, 7], [9, 12, 5]);
console.log(typeof max, max);



