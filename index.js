document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });

    // Close menu when clicking a link
    navUl.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navUl.classList.remove('show');
        }
    });
});

// var name = "Abdulnasir"


// Numbers

const age = 123


// Boolean

let isMatch = false

// let isMatch


//null

let something = null


//undefined

let name



// Loops

//while loop

//when to start
//when to end
//increment the flow

let sub = 27 + 3

let a = 0 //starting point

// while(sub<100){ 
//    console.log('yeah it`s')
//    a++ 
// }


// for(let i=0; i < 5; i++){
//    console.log('try again');
   
// }

const myName='David'

//to print the character specified by the index
// for(let i = 0; i < 5; i++){
//   console.log(myName[0]);
  
// }


// to print all the characters one after another
// for(let i = 0; i < 5; i++){
//   console.log(myName[i]); 
// }


// const students =['abdul','nasir','usman', 'musa' ]

// for(let names = 0; names < students.length; names++){
//    console.log(students[names])
// }



// const staffs = ['eze', 'grace', 'ebilin']

// for(let names = 0; names < staffs.length; names++){
//    console.log(staffs[names])
// }



// const all = students.concat(staffs)

// for(let names = 0; names < all.length; names++){
//    console.log(all[names])
// }


//  i will create an array of items, 
//  use for loop and print the first items,
//   last item and whole items in the array

// const items = ['chair','pencil','plain sheet','desktop','envelope']

// for(let item = 0; item < items.length; item++){
//    // console.log(items[0]); // first item
//    // console.log(items[items.length-1]); // last item
//    console.log(items[item]);
      
// }




// conditionals

// const books = ['chair','pencil','plain sheet','desktop','envelope']

// if(books.length < 10 && books.includes('desktop')){
//     console.log('Enough');
   
// }

// else{
//    console.log('Try again');
   
// }



// strings property & methods

// const firstName = ' Abdul'

// console.log(firstName.trim());

// console.log(firstName.length);

// console.log(firstName.charAt(3));

// console.log(firstName.endsWith(''));

// console.log(firstName.startsWith(''));

// console.log(firstName.includes(''));

// console.log(firstName.toLowerCase());

// console.log(firstName.toUpperCase());


// numbers + - / * ** %

// const x = 10

// const y = 5

// const z = 2


// const answer = (x * y) + (x / z) + (x - y ) + (x ** z) + (x & z)

// console.log(answer);


// const anyNo =  Math.floor(Math.random() * 200) 
// console.log(anyNo);

// const EchezId = 'Echez-' + anyNo
// console.log(EchezId);


// // concatenation, string literals

// //ES5

// const msg = 'my name is ' + name + 'i lived in ' + location

// //ES6

// const mssg = `my name is ${name} i lived in ${location}`

 




// Arrays

// const wes = [40, 30, 50, 20, 60, 10, 70, 0]

// console.log(wes.length);
// console.log(wes.includes(10));
// console.log(wes.indexOf(40));

// console.log(wes.join(','));


// objects

// const sew = {
//    admNo: '2212101005',
//    dept: 'computer science',
//    level: '300L'
// }
// console.log(sew.dept);







// const students = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 20,
//     courses: [
//       { courseName: "Math", grades: [85, 90, 92] },
//       { courseName: "Science", grades: [88, 76, 95] }
//     ]
//   },
//   {
//     id: 2,
//     name: "Bob",
//     age: 22,
//     courses: [
//       { courseName: "Math", grades: [70, 60, 75] },
//       { courseName: "History", grades: [80, 82, 78] }
//     ]
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     age: 19,
//     courses: [
//       { courseName: "Math", grades: [95, 92, 94] },
//       { courseName: "Science", grades: [89, 90, 93] },
//       { courseName: "History", grades: [85, 87, 90] }
//     ]
//   },
//   {
//     id: 4,
//     name: "Diana",
//     age: 21,
//     courses: [
//       { courseName: "Math", grades: [60, 65, 70] },
//       { courseName: "Science", grades: [72, 78, 80] },
//       { courseName: "History", grades: [88, 91, 84] }
//     ]
//   },
//   {
//     id: 5,
//     name: "Ethan",
//     age: 23,
//     courses: [
//       { courseName: "Math", grades: [100, 98, 97] },
//       { courseName: "Science", grades: [94, 96, 92] }
//     ]
//   }
// ];

// console.log(students[0].courses[0].grades[1])

// console.log(students[1].courses[1].grades[0])

// console.log(students[2].courses[1].grades[2])


// console.log(`diana is ${students[3].age} years old and she scores ${students[3].courses[2].grades[0]} in history exam`)

// console.log(`we have ${students[4].name} and he scores ${students[4].courses[1].grades[1]}`);



// console.log(students[1].courses[1].courseName);


// for(let i = 0; i < students.length; i++){
//    console.log(students[i]);
   
// }



// console.log(students[0].courses[0].grades)







// TERNARY OPERATOR

// const exam = 50

// const test = 30

// test != exam ? console.log('differs')  :  console.log('same') 


// 10 < 20 ? console.log('first') : console.log('second');




// const staffs = ['mansur','musa','suleman']

// staffs.includes('musa') ? console.log('staff exist') : console.log('staff not found');


// staffs.length == 3 ? console.log(`we have the max staffs ${staffs.length}`) : console.log(`${3-staffs.length} available spot`);
// ;






// HIGHER ARRAY METHODS/FUNCTIONS

// students.forEach((student, index)=>{
//       console.log(student.courses.forEach((each, index)=>{
//        console.log( each.grades);
       
//       }));
      
// })

// students.forEach((each, index)=>{
//     console.log(each.name);
    
// })




// const names = students.map((each, index)=>{
// //    return each.name
//    return {name: each.name, courses: each.courses}
// })

//   console.log(names);



// const pass = students.filter((each, index)=>{
//     return each.age <= 20
// })

// console.log(pass);
