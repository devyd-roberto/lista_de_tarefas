$(document).ready(function() {
  // Adicionar tarefa ao enviar o formulário
  $('#form-tarefa').submit(function(event) {
    event.preventDefault(); // Evitar o envio do formulário padrão

    const novaTarefa = $('#input-tarefa').val(); // Obter o valor da nova tarefa
    if (novaTarefa.trim() !== '') { // Verificar se o campo não está vazio
      const novaLinha = $('<tr>'); // Criar uma nova linha na tabela
      novaLinha.append('<td class="atividade">' + novaTarefa + '</td>'); // Adicionar coluna para a descrição da tarefa
      novaLinha.append('<td class="acoes"><button class="concluir">Concluir</button></td>'); // Adicionar coluna para o botão "Concluir"
      $('#lista-tarefas').append(novaLinha); // Adicionar nova linha à tabela
      $('#input-tarefa').val(''); // Limpar o campo de entrada
    }
  });

  // Marcar tarefa como concluída ao clicar no botão
  $(document).on('click', '.concluir', function() {
    $(this).closest('tr').find('.atividade').toggleClass('concluido'); // Alternar classe 'concluido' da coluna de descrição da tarefa mais próxima
  });
});