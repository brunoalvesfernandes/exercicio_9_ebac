let tarefas = [];
$(document).ready(function(){
    $('#form-list').submit(function(e){
        const nomeTarefa = document.getElementById('nome-tarefa');
        e.preventDefault();
        let tarefa = `<li id='tarefa_${tarefas.length}'>${nomeTarefa.value}</li>`;

        tarefas.push(tarefa)
        nomeTarefa.value = '';

        $(tarefa).appendTo('#lista-tarefas');

        for (const i in tarefas) {
            $(`#tarefa_${i}`).click(function() {
                $(`#tarefa_${i}`).css('text-decoration','line-through');
            });
        }
    });

})

