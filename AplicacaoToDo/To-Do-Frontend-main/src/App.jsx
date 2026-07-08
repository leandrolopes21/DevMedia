import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import axios from "axios";
import styles from './App.module.css';
import Todo from "./components/todo.jsx";

function App() {

    const [activeTodos, setActiveTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [message, setMessage] = useState("");

    const [editId, setEditId] = useState(-1);
    const [editTitle, setEditTitle] = useState("");

    const [title, setTitle] = useState("");

    let base_url = "http://localhost:8001";

    useEffect(() => {
        handleRead();
    }, [])

    useEffect(() => {
        if(message !== "") {
            document.getElementById('notification').classList.add('active');
            setTimeout(() =>{
                document.getElementById('notification').classList.remove('active');
                setMessage("");
            }, 3000)
        }
    }, [message])

    //Funções CRUD

    function handleCreate() {
        let endpoint = base_url + "/todos";
        axios.post(endpoint, {
            title: title
        }).then((response) => {
            setMessage(response.data);
            setTitle("");
            handleRead();
        });
    }

    function handleRead() {
        let endpoint = base_url + "/todos";
        axios.get(endpoint).then((response) => {
            setActiveTodos(response.data.filter((todo) => todo.completed === false));
            setCompletedTodos(response.data.filter((todo) => todo.completed === true));
        });
    }

    function handleUpdate(id) {
        let endpoint = base_url + "/todos/"+id;
        axios.patch(endpoint, {
            title: editTitle
        }).then((response) => {
            setMessage(response.data);
            setEditId(-1);
            setEditTitle("");
            document.getElementById('EditTodo').classList.remove('active');
            handleRead();
        })
    }

    function handleDelete(id) {
        let endpoint = base_url + "/todos/"+id;
        axios.delete(endpoint).then((response) => {
            setMessage(response.data);
            handleRead();
        })
    }

    //Funções Extras

    function handleCompleteTodo(event) {
        const id = Number(event.currentTarget.id);
        const checked = event.currentTarget.checked;

        handleUpdateStatus(id, checked);
    }

    function handleEditTodo(id) {
        let endpoint = base_url + "/todos/"+id;
        axios.get(endpoint).then((response) => {
            setEditId(Number(response.data.id));
            setEditTitle(response.data.title);
            document.getElementById('EditTodo').classList.add('active');
        });
    }

    function handleUpdateStatus(id, checked) {
        let endpoint = base_url + "/todos/status/"+id;

        axios.patch(endpoint, {
            completed: checked
        }).then((response) => {
            if(checked) {
                setMessage(response.data);
            }
            handleRead();
        })
    }

    return (
        <>
            <main>
                <fieldset id={'EditTodo'} className={[styles.todos,  'EditTodo'].join(' ')}>
                    <legend>Editar To-Do</legend>
                    <section className={[styles.InputTodo].join(' ')}>
                        <input type={'text'} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                        <button type={"button"} onClick={(event) => handleUpdate(editId)}>Alterar To-do</button>
                    </section>
                </fieldset>
                <fieldset className={styles.todos}>
                    <legend>To-dos ativas</legend>
                    <section>
                {
                    activeTodos.map((todo, index) => {
                        return(
                            <Todo
                                key={index}
                                todo={todo}
                                handleEditTodo={handleEditTodo}
                                handleDelete={handleDelete}
                                handleCompleteTodo={handleCompleteTodo}
                            />
                        )
                    })
                }
                    </section>
                </fieldset>
                <fieldset className={styles.todos}>
                    <legend>To-dos concluídas</legend>
                    <section>
                        {
                            completedTodos.map((todo, index) => {
                                return(
                                    <Todo
                                        key={index}
                                        todo={todo}
                                        handleEditTodo={handleEditTodo}
                                        handleDelete={handleDelete}
                                        handleCompleteTodo={handleCompleteTodo}
                                    />
                                )
                            })
                        }
                    </section>
                </fieldset>
                <section className={styles.InputTodo}>
                    <input type={'text'} value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button type='button' onClick={handleCreate}>Adicionar To-do</button>
                </section>
                <span id={'notification'} className={'notification'}>{message != null ? message : ""}</span>
            </main>
        </>
    )
}

export default App
