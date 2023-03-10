// selecionar os elementos

const inputTask = document.querySelector("#task-title")
const btnAdd = document.querySelector("#add-btn")
const taskList = document.querySelector("#task-list")
const btnDone = document.querySelector(".done-btn")
const btnRemove = document.querySelector(".remove-btn")

// funções

function remove_save(newTask) {
  const newDone = newTask.querySelector(".done-btn")
  const newRemove = newTask.querySelector(".remove-btn")
  // salvar nova tarefa
  newDone.addEventListener("click", () => {
    newTask.classList.toggle("li-done")
  })
  // remover nova tarefa
  newRemove.addEventListener("click", () => {
    newTask.remove()
  })
}

function addTask(e) {
  if (inputTask.value) {
    // clona o template da li
    const template = document.querySelector(".template")
    const newTask = template.cloneNode(true)
    const titleNewTask = document.querySelector("h2")
    // adicionar o texto do input a nova tarefa
    newTask.querySelector(".task-title").textContent = inputTask.value
    // remover classes desnecessárias
    newTask.classList.remove("template")
    newTask.classList.remove("hide")
    titleNewTask.classList.remove("hide")
    // adiciona a newTask na lista
    taskList.appendChild(newTask)
    // limpar texto
    inputTask.value = ""
    // funcão para salvar e remover a nova tarefa
    remove_save(newTask)
  } else {
    alert("Por favor, digite uma tarefa!")
  }
}

// evento que adiciona a tarefa

btnAdd.addEventListener("click", (e) => {
  e.preventDefault()
  addTask()
})