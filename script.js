$(document).ready(function() {
    // Adiciona uma nova tarefa
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obtém o valor da tarefa
        const taskText = $('#task-input').val();

        if (taskText) {
            // Cria o item de lista <li> com botões de confirmar e deletar
            const newTask = $(`
                <li>
                    <span class="task-text">${taskText}</span>
                    <div class="task-buttons">
                        <button class="confirm-btn">Confirmar</button>
                        <button class="delete-btn">Excluir</button>
                    </div>
                </li>
            `);

            // Adiciona o item na lista
            $('#task-list').append(newTask);

            // Limpa o campo de input
            $('#task-input').val('');
        }
    });

    // Aplica o efeito de linha ao clicar no botão "Confirmar"
    $('#task-list').on('click', '.confirm-btn', function() {
        $(this).closest('li').find('.task-text').toggleClass('completed');
    });

    // Remove uma tarefa ao clicar no botão "Excluir"
    $('#task-list').on('click', '.delete-btn', function() {
        $(this).closest('li').remove();
    });
});
