const btnAddTarefa = document.querySelector('.app__button--add-task');
const formAddTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const listaDeTarefas = [];
btnAddTarefa.addEventListener('click',() =>{
    formAddTarefa.classList.toggle('hidden');
})

formAddTarefa.addEventListener('submit',(evento) =>{
    evento.preventDefault();
    const tarefa = {
        descricao: textArea.value
    }
    listaDeTarefas.push(tarefa);
    localStorage.setItem('listaDeTarefas',JSON.stringify(listaDeTarefas));
})