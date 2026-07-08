import styles from "../App.module.css";

export default function Todo({ todo, handleEditTodo, handleDelete, handleCompleteTodo }) {
    return (
        <div>
            <label className={todo.completed ? styles.completed : ""}>{todo.title}</label>
            <span>
                <input id={todo.id} type={"checkbox"} checked={todo.completed} onChange={(event) => handleCompleteTodo(event)} />
                <button className={styles.Edit} id={todo.id} onClick={(event) => handleEditTodo(event.currentTarget.id)} type={"button"}>Editar</button>
                <button className={styles.Delete} id={todo.id} onClick={(event) => handleDelete(event.currentTarget.id)} type={"button"}>Apagar</button>
            </span>
        </div>
    )
}