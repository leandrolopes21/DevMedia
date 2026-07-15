import dotenv from 'dotenv';
dotenv.config();

import postgres from 'postgres'; // Para utilizar com banco de dados Postgres/Supabase
import mysql from 'mysql2'; // Para utilizar com banco de dados MySQL

// Para utilizar com banco de dados Postgres/Supabase
/*
const sql = postgres({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: Number(process.env.DATABASE_PORT),
});
*/

const pool = mysql.createPool({
    host: 'localhost',
    user: 'agenda',
    password: '*agenda',
    database: 'aplicacao_to_do'
});

export async function CreateTodo(title, completed){
    try{
        const conexao = await pool.getConnection();
        const resposta = await conexao.query(`INSERT INTO to_dos (title, completed) VALUES (${ title }, ${ completed })`);
        console.log(resposta);
        conexao.release();
        return resposta;
    } catch {
        return 'Erro ao criar To-do!';
    }
}

export async function ReadTodos() {
    return pool `SELECT id, title, completed from to_dos order by created_at ASC`;
}

export async function ReadTodo(id) {
    return pool `SELECT id, title, completed from to_dos WHERE id = ${id}`;
}

export async function UpdateTodoStatus(id, completed){
    try{
        await pool`UPDATE to_dos set completed = ${ completed } WHERE id = ${ id }`
        return 'To-do concluída!';
    } catch {
        return 'Erro ao concluir To-do!';
    }

}

export async function UpdateTodoTitle(id, title){
    try{
        await pool`UPDATE to_dos set title = ${ title } WHERE id = ${ id }`
        return 'To-do atualizada com sucesso!';
    } catch {
        return 'Erro ao atualizar To-do!';
    }

}

export async function DeleteTodo(id){
    try {
        await sql`DELETE from to_dos WHERE id = ${ id }`
        return 'To-do excluída com sucesso!';
    } catch {
        return 'Erro ao excluir To-do!';
    }
}