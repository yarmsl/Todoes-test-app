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