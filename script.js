//DOM Selectors
let addToDoBtn = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
//ToDoButton event listener
addToDoBtn.addEventListener('click', function() {
    var paragraph = document.createElement('p');//creates a new <p> within the DOM
    if (inputField.value == '') {
        alert('Please enter text')
    } else {
        paragraph.classList.add('paragraph-styling'); //this adds a class to each new <p>
        paragraph.innerText = inputField.value; //sets the value of the <p> to the input value
        toDoContainer.appendChild(paragraph); //sets the location of the new <p>
        toDoContainer.classList.add('to-dos'); //here i set it to add a border around the list
        inputField.value = ""; //here i set it to clear the input box after adding an item
    }
     paragraph.addEventListener('click', function(){
        if (paragraph.style.textDecoration != 'line-through') {
            paragraph.style.textDecoration = 'line-through';
        } else {
            paragraph.style.textDecoration = 'none';
        } /*here i made an 'if statement' so that when i click on the text
            once then it gets a strike-through else if it already has a strike
            then when clicked the strike-through should go away*/
     })
     paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
        if (toDoContainer.innerText == '') {
            toDoContainer.classList.remove('to-dos')
        } /* here i made sure that if the list is empty
            then there should be no border */
        paragraph.style.textDecoration = 'none';
     })
}); /*the event listener takes two parameters, 
    first the type of event that you want to listen to
    then the function you create*/

