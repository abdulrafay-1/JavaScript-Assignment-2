//Question 1

function sum (num1) {
        return function(num2) {
                return num1 + num2;
        }
}
let result = sum (5);
console.log(result(10));

//Question 2

function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  }
  const first = arr[0];


  if (first === val) {
    return true;
  }


  return searchArray(arr.slice(1), val);
}
const myArr = [1, 2, 3, 4, 5];


const found = searchArray(myArr, 3);
console.log('Found:', found);

//Question 3

function addPara(text) {
    let Para = document.createElement('p');
    let content = document.createTextNode(text);
    Para.appendChild(content);
    document.body.appendChild(Para);
    Para.style.position = "absolute";
    Para.style.bottom = "0";
  }
console.log(addPara("This is a Paragraph"));

//Question 4

function addListItem(text) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}


addListItem("New Item");
addListItem("NewList ");


//Question 5

function changeBackgroundColor(element, newColor) {
    element.style.backgroundColor = newColor;
}
changeBackgroundColor(newelement, "yellow");

//Question 6

function saveToLocalStorage(key, obj) {
    let objStr = JSON.stringify(obj);
    localStorage.setItem(key, objStr);
}
let myObj = {
    name: ‘Rafay’,
    age: 30,
    email: 'rafay@example.com'
  };
saveToLocalStorage("myObjKey", myObj);


//Question 7

function getFromLocalStorage(key) {
    let objStr = localStorage.getItem(key);
    if (objStr === null) {
      return null;
    }
    return JSON.parse(objStr);
  }
let myObj = getFromLocalStorage('myObjKey');
if (myObj === null) {
  console.log('Object not found in localStorage');
} else {
  console.log('Retrieved object:', myObj);
}


//Question 8

function saveObjectPropertiesToLocalStorage(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        localStorage.setItem(key, obj[key]);
      }
    }
    let newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      newObj[key] = value;
    }
    return newObj;
  }
	let myObj = {
    name: Rafay,
    age: 30,
    email: 'rafay@example.com'
  };
  let retrievedObj = saveObjectPropertiesToLocalStorage(myObj);
  console.log('Retrieved object:', retrievedObj);
