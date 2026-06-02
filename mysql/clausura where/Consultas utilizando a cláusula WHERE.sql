-- Consultas utilizando a cláusula WHERE

-- Consulta na tabela funcionarios, utilizando WHERE condição data_admissão = YEAR
-- SELECT * FROM funcionarios
-- WHERE YEAR(data_admissao) = 1999;

-- Consulta na tabela produtos, utilizando WHERE condição nome = 'nome'
-- SELECT * FROM produtos
-- WHERE nome = 'Carrinho';

-- Consulta na tabela cargos, utilizando WHERE condição titulo_cargo
-- Utilizando LIKE e curinga %
-- Significa encontrar qualquer valor após a palavra analista, neste exemplo
-- SELECT * FROM cargos
-- WHERE titulo_cargo LIKE 'Analista%';

-- Consulta na tabela departamentos, utilizando WHERE condição sigla = 'TI'
-- SELECT * FROM departamentos
-- WHERE sigla = 'TI';

-- Consulta na tabela clientes, utilizando WHERE condição ativo = true(verdadeiro)
-- Verdadeiro significa cliente ativo
-- Falso significa cliente desativado
-- SELECT * FROM clientes
-- WHERE ativo = FALSE;

-- Nesta consulta foi utilizado o operador AND
-- Pois queremos que duas condiçoes sejam verdadeiras
-- SELECT * FROM clientes
-- WHERE email LIKE '%@autodesk%' AND
--     data_cadastro > 2025;

-- Consulta utilizando o operador BETWEEN
-- Tem como finalidade permitir a consulta entre uma determinada faixa de valores
-- SELECT * FROM produtos
-- WHERE preco BETWEEN 300 AND 800;

-- Consulta utilizando o operador NOT BETWEEN
-- Tem como finalidade permitir a consulta de valores fora de uma determinada faixa
-- SELECT * FROM produtos
-- WHERE preco NOT BETWEEN 300 AND 500;

-- Outra forma de se obter o mesmo resultado da operação acima
-- SELECT * FROM produtos
-- WHERE preco < 300 OR preco > 500;