const API_BASE =
	'https://e1xd9kuxz8.execute-api.eu-west-1.amazonaws.com/dev/user';

export async function getUsers() {
	const res = await fetch(`${API_BASE}`);
	return await res.json();
}

export async function getUser(id) {
	const res = await fetch(`${API_BASE}/${id}`);
	return await res.json();
}

export async function createUser(data) {
	const res = await fetch(`${API_BASE}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	return await res.json();
}

export async function updateUser(id, data) {
	const res = await fetch(`${API_BASE}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	return await res.json();
}

export async function deleteUser(id) {
	await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
}
