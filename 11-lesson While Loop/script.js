// let i = 0;
// while ( i < 15) {
//   console.log(i)
//   i++
// }
//-----------------------------------------
// let i = 0;
// while ( i <= 15) {
//   console.log(i)
//   i++
// }
//
//----------------------------------------
// let number  = 12;
// for (let j = 0; j < number; j++){
//   if (j == 6) {
//     break
//   }
//   console.log(j)
// }
//----------------------------------------------
//
// let number  = 10;
// for (let j = 0; j <= number; j++){
//   if (j == 6) {
//     continue
//   }
//   console.log(j)
// }

// ------------------------------------------------------










// Nested Loop-------------------------------------------------------------

// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= 3; j++  ) {
//     document.write(i);
//   }
// }


//
// let number = 2;
// let sum  = 4;
//
// for (let j = 0; j < number; j++) {
//   console.log(j, "j for")
//     for (let i = 0; i < sum; i++) {
//       console.log(i, "i for")
//     }
// }




// for (let i = 1; i <= 2; i++) {
//   console.log(i + "- First level loop");
//   for (let j = 0; j <= 3; j++) {
//     console.log(j + " -- Second level loop");
//   }
// }



// let i = 0;
// while (i <= 2) {
//   console.log(i + "- First level loop");
//   i++;
//   let j = 0;
//   while (j <= 5) {
//     console.log(j + "-- Second level loop");
//     j++;
//   }5
// }





// Examples With While----------------------------------------------------

// let i = 11;
// while (i <= 33) {
//   console.log(i)
//   i++
// }



// Break---------------------------------------------------------------------
// let sum = 0;
// while (true) {
//   let value = +prompt("greq tiv", '');
//   if (!value) break;
//   sum += value;
// }
// alert( 'Сумма: ' + sum );




// Continue------------------------------------------------------------------
// for (let i = 0; i < 20; i++) {
//
//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;
//
//   alert(i); // 1, затем 3, 5, 7, 9
// }


// Label For Break/Continue---------------------------------------------------
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)
//     // сделать что-нибудь со значениями...
//   }
// }
// alert('Готово!');




