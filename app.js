// 
const task = document.querySelector('#task'),
      filter = document.querySelector('#filter'),
      form = document.querySelector('#task-form'),
      ulList = document.querySelector('.collection'),
      clearTasks = document.querySelector('.clear-tasks');
      
//add event listenner 
form.addEventListener('submit',addTask);
ulList.addEventListener('click',removeTask);
clearTasks.addEventListener('click',removeAllTask);
filter.addEventListener('keyup',filterTask);

//function add function
function addTask(e){
  if(task.value ==''){
      alert('please enter a task')
  }else{
    //create a new list
    const list = document.createElement('li');
    //add class name
    list.classList = 'delete-item collection-item';
    //appent a text from task
    const test = document.createTextNode(task.value);
    // list.appendChild(task.value);
    list.appendChild(test);
    //create a link
    const link = document.createElement('a');
    //create icon
    const icon = document.createElement('i');
    icon.innerHTML = `<i class="fa fa-remove secondary-content"></i>`;
    //icon add class
    // icon.classList = 'remove-item';
    //append icon to link
    link.appendChild(icon);
    //append link to list
    list.appendChild(link)
    //apenlist to ulList
    ulList.appendChild(list);

    task.value = '';
  }
  
  
  e.preventDefault();
}

//function remove task
function removeTask(e){

  if(e.target.className == 'fa fa-remove secondary-content'){
    if(confirm("ARE YOU SURE!")){
      e.target.parentElement.parentElement.parentElement.remove();
    }
     
    }

    e.preventDefault();
}

//function cleare all task
function removeAllTask(){

  if(confirm("ARE YOU SURE!")){
    ulList.innerHTML = '';
  }
  
}

//function filter task
function filterTask(e){
 
  const text = e.target.value.toLowerCase();
  const allTask = document.querySelectorAll('.collection-item');
  allTask.forEach(task => {
    const item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });

}