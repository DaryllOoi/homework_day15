//21
let x="John"
let y="Doe"
console.log("exercise 21",x + " <> "+ y);


//22
let objectProfile ={
    Name: "John",
    Surname: "Doe",
    Email: "johndoe@hotmail.com"
}
console.log(objectProfile);


//23
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

//28
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

//29
function maximumLength(Array, Array2){
    if (Array.length > Array2.length){
        return Array
    }
    else{
        return Array2
    }
}
console.log(maximumLength(arr1, arr2));

//30
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

//31
let container = document.getElementById('container')
console.log(container);

//32
let allTd = document.getElementsByTagName('td')
console.log(allTd)

//33
function printTdElement() {

    let tdText = document.getElementsByTagName('td')
    let td1 = []
    for (let i = 0; i < tdText.length; i++) {
        td1.push(tdText[i].innerText);
    }
return td1;
}

console.log(printTdElement());

//34
function changeHeading(){
    
    document.getElementById('newTitle').innerHTML = "new Title created by java"
    
}
console.log(changeHeading());

//35
function addExtraRow(){
    let table = document.getElementById('myTable')
    let newRow = document.createElement('tr')
    newRow.innerText = 'this is a new row';
    table.appendChild(newRow);
}
addExtraRow();

//36
function addClassTest(){
    let newClass = document.getElementsByTagName('tr')
    newClass.setAttribute('class','test');
}

//37
function addRedBackgroundToLinks() {
    let aLinks = document.getElementsByTagName("a");
    for ( let i = 0 ; i < aLinks.length; i++){
        aLinks[i].style.backgroundColor = 'red';
    }
  }
addRedBackgroundToLinks();

//38
function onLoadActions(){
    console.log('Page successfully loaded!');
}
window.onload = onLoadActions;


//39
function addItems(){
    let ulList = document.querySelector('ul')
    let liList = document.querySelector('li')
    liList.innerText = "hello new ul";
    ulList.appendChild(liList);
}
addItems();


//40
function emptyList(){
    let ulList = document.querySelector('ol')
    let liList = document.querySelectorAll('ol li')

    for ( let i = 0; i < liList.length; i++){
        ulList.removeChild(liList[i]);
    }
}
emptyList()


//41
let alertLink = document.getElementsByTagName('a')
for ( let i = 0; i< alertLink.length; i++){
    alertLink[i].addEventListener("mouseover",function(){
        alert(alertLink[i].getAttribute('href'));
    });
}

//42
function hideImages(){
    let images = document.getElementsByTagName('img')
    for ( let image of images){
        image.classList.toggle('hide');
    }
}

//43
function hideTable(){
    let table = document.querySelector('table')
    table.classList.toggle("hide");    
}

//44
function sumOfAllNumbers(){
    let tableData = document.querySelectorAll('td')
    let sumOfData = 0

    for ( let data of tableData){
        let dataText = data.innerText
        let dataInteger = parseInt(dataText)

        if (!isNaN(dataInteger)){
            sumOfData += dataInteger;
        }
    }
    return sumOfData;
}

//45
function deleteLastHeading(){
    let deleteThis = document.getElementsByTagName('h1')[0]
    deleteThis.addEventListener('click', function(event){
        event.target.innerText = event.target.innerText.slice(0, -1);
    });
}
deleteLastHeading();

//46
function changeTdBackground(){
    for ( let changeThat of allTd){
    changeThat.addEventListener('click', function(event){
    changeThat.style.backgroundColor = "red";
    });
}
}
changeTdBackground();

//47
function deleteRandomTd(){
    let random = Math.floor(Math.random()*allTd.length);
    let randomTd = allTd[random];

    let parent = allTd[random].closest('tr');

    parent.removeChild(randomTd);
}

//48
for ( let data of allTd){
    data.addEventListener("mouseover",function(){
        data.classList.add("pink");
    });
}


