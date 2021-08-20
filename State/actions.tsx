export const addTodoesListStore = (title: string) => {
	return {
		type: 'ADD_TODOESLIST',
		title: title
	}
}

export const removeTodoesListStore = (id: number) => {
	return {
		type: 'REMOVE_TODOESLIST',
		id: id
	}
}

export const doneTodo = (list_id: number, todo_id: number) => {
	return {
		type: 'DONE_TODO',
		list_id: list_id,
		id: todo_id
	}
}

export const undoneTodo = (list_id: number, todo_id: number) => {
	return {
		type: 'UNDONE_TODO',
		list_id: list_id,
		id: todo_id
	}
}