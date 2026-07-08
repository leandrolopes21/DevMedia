// Importação do driver MySQL2 com suporte a Promises
import mysql from 'mysql2/promise';

// Cria um pool de conexões reutilizáveis com o banco de dados
// O pool gerencia múltiplas conexões para melhorar a performance
const pool = mysql.createPool({
    host: 'localhost',      // Endereço do servidor MySQL
    user: 'cadastro',        // Usuário do banco de dados
    password: '*cadastro',   // Senha do usuário
    database: 'leads_bd',     // Nome do banco de dados
});

// Exporta o pool para ser utilizado em outros módulos
export default pool;