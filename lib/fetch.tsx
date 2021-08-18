import { API_KEY } from '../state/constants';
import { todoList } from './types';

export const GetData = async <T,>(url: string): Promise<T> => {
	const data = await fetch(url)
		.then(r => r.json())
		.catch(e => console.error(e));
	return data;
};

export const PostData = async <T,>(url: string, obj: Record<string, unknown>): Promise<T> => {
	const data = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(obj)
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const PatchData = async <T,>(url: string, obj: Record<string, unknown>): Promise<T> => {
	const data = await fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(obj)
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const DeleteData = async (url: string): Promise<number | void> => {
	const data = await fetch(url, {
		method: 'DELETE'
	})
		.then(r => r.status)
		.catch(e => console.error(e));
	return data;
};

export const PutData = async <T,>(url: string, obj: Record<string, unknown>): Promise<T> => {
	const data = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(obj)
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const getTodoesList = async() => {
	return await GetData(`${API_KEY}`)
};

export const addTodoesList = (title: string) => {
	const data = PostData(`${API_KEY}`, {title: title});
	return data;
};

export const removeTodoesList = (id: number) => {
	const data = DeleteData(`${API_KEY}/${id}`);
	return data;
};

export const editTodoList = (id: number, title: string) => {
	const data = PatchData(`${API_KEY}/${id}`, {title: title});
	return data;
};

export const addTodo = (listID: number, todo: string) => {
	const data = PostData(`${API_KEY}/${listID}/todo`, {text: todo, checked: true});
	return data;
};

export const editTodo = (listID: number, todoID: number, todo: string) => {
	const data = PatchData(`${API_KEY}/${listID}/todo/${todoID}`, {text: todo, checked: true});
	return data;
}

export const removeTodo = (listID: number, todoID: number) => {
	const data = DeleteData(`${API_KEY}/${listID}/todo/${todoID}`);
	return data;
}