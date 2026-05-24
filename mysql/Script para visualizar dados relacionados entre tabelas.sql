-- Script para vicualizar dados relacionados entre tabelas, exemplo

SELECT
    f.nome AS Funcionario,
    d.nome_departamento AS Departamento,
    c.titulo_cargo AS Cargo,
    f.data_admissao
FROM funcionarios f
INNER JOIN departamentos d ON f.id_departamento = d.id_departamento
INNER JOIN cargos c ON f.id_cargo = c.id_cargo;