// const text = document.querySelector('.list')

// text.textContent = 'musa'
// text.style.color = 'white'
// text.innerText = 'sulaiman'


const jj = ['musa','suleman','sadiq','ahmad','salisu']

const student = document.querySelector('.list')

student.style.display='none'

jj.forEach((each, i)=> {
   student.innerHTML += `<li>${each}</li>`
})


const btn = document.querySelector('.btn')

const seeList = ()=>{
  student.style.backgroundColor='white' 
//   if(student.style.display =='none'){
//     student.style.display = 'block'
//   } else{
//     student.style.display = 'none'
//   }

  student.style.display =='none' ?  student.style.display = 'block' : student.style.display = 'none'
  
}

btn.addEventListener('click', seeList)


const fetchedData = async ()=>{
   const result = await fetch('https://jsonplaceholder.typicode.com/comments/1')

   .then(result => result.json())
   .then(result => console.log(result))
   
   
}
fetchedData()




const cv = document.getElementById('cv')




const changeColor = ()=>{
// document.body.style.display='none'
}
cv.addEventListener( 'click' , changeColor)


const input = document.getElementById('inputText')
const button = document.getElementById('inputBtn')
const list = document.getElementById('div')


button.addEventListener("click", ()=>{
 
  const studentList = document.createElement('div')
  const studentName = document.createElement('span')
  studentName.textContent = input.value.trim()
 
  const del = document.createElement('button')
  del.textContent = 'delete'


  studentList.appendChild(studentName)
  studentList.appendChild(del)

  list.appendChild(studentList)


  del.addEventListener("click", ()=>{
    list.remove()
  })
})


// literals

const name = 'musa'
const age = 20
const course = 'frontend development'

const info = `my name is ${name}, i am ${age} years old and i study ${course}`


console.log(info);


// ternary operator

const number = 10
const number2 = 20

number > number2 ? console.log('number is greater') : console.log('number2 is greater');

// destructuring

const person = {
    name: 'suleman',
    age: 25,
    course: 'backend development'
}

const {name: personName, age: personAge, course: personCourse} = person

console.log(personName);
console.log(personAge);
console.log(personCourse);

// spread operator

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const combinedArr = [...arr1, ...arr2]

console.log(combinedArr);
