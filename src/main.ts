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

      listItem.style.cursor = 'pointer'; 
      listItem.style.userSelect = 'none';

      listItem.addEventListener('click', () => {
        if (listItem.style.textDecoration === 'line-through') {
          listItem.style.textDecoration = 'none';
          listItem.style.opacity = '1';
        } else {
          listItem.style.textDecoration = 'line-through';
          listItem.style.opacity = '0.5';
        }
      });
      
      list.appendChild(listItem); 
      input.value = ''; 
    }
  });
}