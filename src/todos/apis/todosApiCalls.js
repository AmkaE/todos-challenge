const BASE_URL = 'http://localhost:3000';

// gets all todo items
export const getTodos = async () => {
	const res = await axios.get(`${BASE_URL}/todos`);
	return res.data;
};

// adds a new todo item
export const addTodo = async newTodo => {
	const res = await axios.post(`${BASE_URL}/todos`, newTodo);
	return res.data;
};

// updated a todo item
export const updateTodo = async (id, updateTitle) => {
	const res = await axios.put(`${BASE_URL}/todos/${id}`, {
		title: updateTitle,
		completed: false,
		isEditing: false,
	});
	return res.data;
};

// changes completed on the specified todo item to true
export const completeTodo = async id => {
	const res = await axios.patch(`${BASE_URL}/todos/${id}`, {
		completed: true,
	});
	return res.data;
};

// changes isEditing on the specified todo item to true
export const editTodo = async id => {
	const res = await axios.patch(`${BASE_URL}/todos/${id}`, {
		isEditing: true,
	});
	return res.data;
};

// deletes a todo item
export const deleteTodo = async id => {
	const res = await axios.delete(`${BASE_URL}/todos/${id}`);
	return res.data;
};
