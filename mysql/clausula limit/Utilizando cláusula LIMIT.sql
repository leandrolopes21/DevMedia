-- LIMIT é uma cláusula SQL que especifica o número de linhas que devem ser retornadas no resultado da consulta

-- SELECT * FROM
-- curitibaflor.clientes
-- LIMIT 0,2

-- LIMIT em conjunto com a clausula ORDER BY para ordenar os resultados retornados em ordem ascendente

-- SELECT * FROM
-- curitibaflor.clientes
-- ORDER BY nome ASC
-- LIMIT 0,4

-- LIMIT em conjunto com a clausula ORDER BY para ordenar os resultados retornados em ordem ascendente

-- SELECT * FROM
-- curitibaflor.clientes
-- ORDER BY nome DESC
-- LIMIT 0,3

-- LIMIT em conjunto com a clausula ORDER BY para ordenar os resultados retornados em ordem ascendente
-- E com recurso OFFSET para omitir o primeiro registro

SELECT * FROM
    curitibaflor.clientes
    ORDER BY nome ASC
    LIMIT 3
    OFFSET 1