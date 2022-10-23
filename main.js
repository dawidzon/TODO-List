const tasks=[];

function renderTable(){
  console.log("renderuje");

  const rootElement = document.querySelector("#root");
  rootElement.innerHTML="";
  const tableElement = document.createElement("table");
  tableElement.setAttribute('border','1');
  
  const trElement = document.createElement('tr');
  const th1Element = document.createElement('th');
  const th2Element = document.createElement('th');

  th1Element.textContent="zadanie";
  th2Element.textContent="status";
  
  trElement.appendChild(th1Element);
  trElement.appendChild(th2Element);
  tableElement.appendChild(trElement);
  tasks.forEach((task, index)=>{
    const trTaskElement = document.createElement("tr");
    const tdTaskTextElement = document.createElement("td");
    const tdTaskStatusElement = document.createElement("td");
    const inputTaskCheckboxElement = document.createElement("input");
    inputTaskCheckboxElement.setAttribute("type", "checkbox");   
    tdTaskTextElement.textContent=task.text;
    inputTaskCheckboxElement.checked = task.status;
    inputTaskCheckboxElement.onclick = ()=>{
      tasks[index].status = !task.status;
    }
    tdTaskStatusElement.appendChild(inputTaskCheckboxElement);
    trTaskElement.appendChild(tdTaskTextElement);
    trTaskElement.appendChild(tdTaskStatusElement);
    tableElement.appendChild(trTaskElement);
  })
  rootElement.appendChild(tableElement);
}

function addTask(){
  const taskElement = document.querySelector("#task-input");
  const taskValue = taskElement.value;
  tasks.push({
    text: taskValue, 
    status: false
  });
  console.log(tasks);
  renderTable();
}

renderTable();