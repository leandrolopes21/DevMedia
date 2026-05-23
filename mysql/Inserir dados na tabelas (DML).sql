-- Inserindo registros da tabela de Departamentos - exemplos
/*
INSERT INTO departamentos (nome_departamento, sigla) VALUES
('Tecnologia da Informação', 'TI'),
('Recursos Humanos', 'RH'),
('Financeiro', 'FIN');
*/

-- Inserindo registros da tabela de Cargos
/*
INSERT INTO cargos (titulo_cargo, salario_base) VALUES
('Desenvolvedor Full Stack', 6500.00),
('Analista de DP', 4200.00),
('Gerente de Projetos', 9500.00);
*/

-- Inserindo registros da tabela de Funcionarios vinculando as Chaves Estrangeiras
INSERT INTO funcionarios (nome, cpf, data_admissao, id_departamento, id_cargo) VALUES
('Marize Moreira de Freitas', '04692066911', '20-05-10', 3, 1),
('Lucas Moreira Lopes', '12538054112', '10-11-13', 1, 2),
('Leandro Alcides Lopes', '04367526976', '21-05-15', 1, 3),
('Guilherme Lopes Speckt' '15645285412', '01-07-10', 2, 2),
('Sonia Maria Lopes' '05265334814', '99-10-14', 1, 2);