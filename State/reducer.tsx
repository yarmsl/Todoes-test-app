import { Action, todoList } from "../lib/types";
import { ADD_TODO, ADD_TODOESLIST, DELETE_TODO, DONE_TODO, EDIT_TODO, REMOVE_TODOESLIST, UNDONE_TODO, UPLOAD_TODOESLIST } from "./constants";

const initialState = [] as todoList[];
const todoesListReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case UPLOAD_TODOESLIST:
			return action.data;
		case ADD_TODOESLIST:
			return [
				...state,
				action.todoesList
			];
		case REMOVE_TODOESLIST:
			return state.filter(list => list.id !== action.id);
		case DONE_TODO:
			return state.map(list => {
				if (list.id === action.list_id) {
					return {
						...list,
						todos: list.todos.map(todo => todo.id === action.id ? { ...todo, checked: true } : todo)
					}
				} else {
					return list
				}
			});
		case UNDONE_TODO:
			return state.map(list => {
				if (list.id === action.list_id) {
					return {
						...list,
						todos: list.todos.map(todo => todo.id === action.id ? { ...todo, checked: false } : todo)
					}
				} else {
					return list
				}
			});
		case ADD_TODO:
			return state.map(list => {
				if (list.id === action.list_id) {
					return {
						...list,
						todos:
							list.todos.length === 0 ?
								[
									action.todo
								] : [
									...list.todos,
									action.todo
								]
					}
				} else {
					return list
				}
			});
		case EDIT_TODO:
			return state.map(list => {
				if (list.id === action.list_id) {
					return {
						...list,
						todos: list.todos.map(todo => {
							if (todo.id === action.id) {
								return {
									id: todo.id,
									list_id: todo.list_id,
									checked: todo.checked,
									text: action.title,
									created_at: todo.created_at,
									updated_at: new Date().toISOString()
								}
							} else {
								return todo
							}
						})
					}
				} else {
					return list
				}
			});
		case DELETE_TODO:
			return state.map(list => {
				if (list.id === action.list_id) {
					return {
						...list,
						todos: list.todos.filter(todo => todo.id !== action.id)
					}
				} else {
					return list
				}
			})
		default:
			return state;
	}
};

export default todoesListReducer;