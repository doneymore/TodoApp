loadEvents();
function loadEvents(){
    document.querySelector("form").addEventListener('submit',submit);
    document.getElementById('clear').addEventListener('click',clearList);
    document.querySelector('ul').addEventListener('click',deleteOrTick);
}

function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
    addTask(input.value);
    input.value = '';
}

function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class='delete'>*</span><input type='checkbox'><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.display = 'block';

}
    
    function clearList(e){
        let ul = document.querySelector('ul').innerHTML = '';

 }

 function deleteOrTick(e){
     if(e.target.className == 'delete')
    deleteTask(e);
    else {
    tickTask(e);
    }
    
 }


 function deleteTask(e){
     let remove = e.target.parentNode;
     let parentNode = remove.parentNode;
     parentNode.removeChild(remove);

 }

 function tickTask(e){
     const task = e.target.nextSibling;
     if(e.target.checked){
         task.style.textDecoration = 'line-through';
         task.style.color = '#ff0000';
     } else {
         task.style.textDecoration = 'none';
         task.style.color = '#2f4f4f';
     }
 }

 var randomcolor = function(){
     var rvalue = function(){
         return Math.round(Math.random() * 225);
     }
     return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() +')';
 }

 var randy = document.querySelector('body');
randy.onmouseenter = function(){
    randy.style.backgroundColor = randomcolor();
    randy.style.fontFamily = 'cursive';
    randy.style.fontWeight= 500;
    document.querySelector('.butt').style.backgroundColor = randomcolor();
    document.querySelector('.butt1').style.backgroundColor = randomcolor();
    
}

var images = ['./pro1.png', './pro2.png', './pro3.png', 'pro4.png'];

var currentIndex = 0;

function next() {
    var slides = document.querySelector('#slider');
    currentIndex++
    if(currentIndex > images.length){
        currentIndex = 0;
    }
    slides.src = images[currentIndex];
    //setInterval(next, 2000);
}
function prev() {
    var slides = document.querySelector('#slider');
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    slides.src = images[currentIndex];
}

