-- Alterar registro na tabela, utilizando cláusula WHERE

/*
UPDATE curitibaflor.clientes # indica a tabela que será modificada
SET email = 'comercial@email.com' # define o novo valor
WHERE nome = 'Daniel'; # garante que apenas o registro com esse identificador seja alterado
*/

-- Utilizar WHERE garante que apenas o registro selecionado seja alterado

-- Atualizar vários registros ao mesmo tempo

/*
UPDATE curitibaflor.clientes
SET ddd_telefone = '041',
    telefone = '999998888',
    nome = 'Maria Silva'
WHERE id_cliente = 1;
*/