import './style.css'

const input = document.querySelector<HTMLInputElement>('#taskInput');
const button = document.querySelector<HTMLButtonElement>('#addBtn');
const list = document.querySelector<HTMLUListElement>('#taskList');

if (input && button && list) {
  
  button.addEventListener('click', () => {
    const taskText = input.value.trim(); 
    
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      
      list.appendChild(listItem); 
      input.value = ''; 
    }
  });
}