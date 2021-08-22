import { addTodo, addTodoesList, checkedTodo, editTodo, getTodoesList, removeTodo, removeTodoesList } from "../lib/fetch"
import { ADD_TODO, ADD_TODOESLIST, DELETE_TODO, DONE_TODO, EDIT_TODO, REMOVE_TODOESLIST, UNDONE_TODO, UPLOAD_TODOESLIST } from "./constants";

export const fetchTodoes = async(dispatch) => {
	const data = await getTodoesList()
	dispatch({type: UPLOAD_TODOESLIST, data: data})
}

export const addTodoesListStore = (title: string) => {
	const saveTodoesList = async(dispatch) => {
		const data = await addTodoesList(title)
		dispatch({type: ADD_TODOESLIST, todoesList: data})
	}
	return saveTodoesList;
}

export const removeTodoesListStore = (id: number) => {
	removeTodoesList(id);
	return {
		type: REMOVE_TODOESLIST,
		id: id
	}
}

export const doneTodo = (list_id: number, todo_id: number) => {
	checkedTodo(list_id, todo_id, true);
	return {
		type: DONE_TODO,
		list_id: list_id,
		id: todo_id
	}
}

export const undoneTodo = (list_id: number, todo_id: number) => {
	checkedTodo(list_id, todo_id, false);
	return {
		type: UNDONE_TODO,
		list_id: list_id,
		id: todo_id
	}
}

export const deleteTodo = (list_id: number, todo_id: number) => {
	removeTodo(list_id, todo_id);
	return {
		type: DELETE_TODO,
		list_id: list_id,
		id: todo_id
	}
}

export const addTodoStore = (list_id: number, title: string) => {
	const saveTodo = async(dispatch) => {
		const data = await addTodo(list_id, title)
		dispatch({type: ADD_TODO, todo: data, list_id: list_id})
	}
	return saveTodo;
}

export const editTodoStore = (list_id: number, todo_id: number, title: string) => {
	editTodo(list_id, todo_id, title);
	return {
		type: EDIT_TODO,
		title: title,
		list_id: list_id,
		id: todo_id
	}
}