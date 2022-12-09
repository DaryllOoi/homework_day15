let x="John"
let y="Doe"
console.log("exercise 21",x + " <> "+ y);


let objectProfile ={
    Name: "John",
    Surname: "Doe",
    Email: "johndoe@hotmail.com"
}
console.log(objectProfile);


delete objectProfile.Email
console.log(objectProfile);


let arr1 = ["1","2","3","4","5","6","7","8","9","10"];
console.log(arr1);


let arr2 = Array(100)
for (let i =0; i< 100; i++){
    arr2[i]= Math.floor(Math.random()*99+1);
}
console.log(arr2);


console.log(maximumNumber(arr2));
console.log(minimumNumber(arr2, maximumNumber(arr2))); //feed the fnc our array and a given min no.


function maximumNumber(Array){
    let maxNum = 0
    for ( let i = 0; i < Array.length; i++ ){
        if (Array[i] > maxNum){
            maxNum = Array[i]  
        } 
    }
    return maxNum
}


function minimumNumber(Array, minNum){
    for ( let i = 0; i < Array.length; i++ ){
        if (Array[i] < minNum){
            minNum = Array[i]  
        } 
    }
    return minNum
}


function arrayList(){
    let array1 = Array(2)
    for ( let i = 0 ; i< array1.length;i++){
        let array2 = Array(10)
        //console.log(array2);
        for (let j = 0; j < array2.length ; j ++){
            array2[j]= Math.floor(Math.random()*99+1);
            //console.log(array2[j]);
        }
        array1[i]=array2;
        //console.log(array2);
    }
    return array1
}
console.log(arrayList());


function maximumLength(Array, Array2){
    if (Array.length > Array2.length){
        return Array
    }
    else{
        return Array2
    }
}
console.log(maximumLength(arr1, arr2));


function maximumLength(Array, Array2){
    let arr1sum 
    for (let i = 0; i< arr1.length; i++ ){
        arr1sum += arr1[i]
    }
    let arr2sum
    for(let j = 0; j < arr2.length; j++){
        arr2sum += arr2[j]
    }
    if (arr1sum > arr2sum){
        return Array1
    }
    else{
        return Array2
    }
}
console.log(maximumLength(arr1, arr2));


let container = document.getElementById('container')
console.log(container);


let allTd = document.getElementsByTagName('td')
console.log(allTd)

//33
// function printTdElement() {

//     let tdText = document.getElementsByTagName('td')
//     let td1 = []
//     for (let i = 0; i < tdText; i++) {
//         td1.push(td.innerText);
//     }
//     }
// console.log(td1);

//34
function changeHeading(){
    
    document.getElementById('newTitle').innerHTML = "new Title"
    
}
console.log(changeHeading());

//35
function addExtraRow(){
    let table = document.getElementById('myTable')
    let row = table.insertRow(0);
    let cell1= row.insertCell (0);
    cell1.innerHTML="New Cell 1";
}
addExtraRow();


function addClassTest(){
    let newClass = document.getElementsByTagName('tr')
    newClass.setAttribute('class','test');
}


function addItems(){
    let ulList = document.querySelector('ul')
    let liList = document.querySelector('li')
    liList.innerText = "hello new ul";
    ulList.appendChild(liList);
}
addItems();