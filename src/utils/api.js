import { BASE_URL } from './constants';

export const handleResponse = (res, errorMessage) => {
  if (!res.ok) throw new Error(`Error: ${errorMessage}`);

  return res.json();
};

const getInitialItems = async () => {
  const res = await fetch(`${BASE_URL}/items`);

  return handleResponse(
    res,
    'An error has occured when attempting to fetch clothing data',
  );
};

const addNewItem = async (item) => {
  const res = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });

  return handleResponse(
    res,
    'An error has occured when attempting to add new clothing item',
  );
};

const deleteItem = async (id) => {
  const res = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });

  return handleResponse(
    res,
    'An error has occured when attempting to delete clothing item',
  );
};

const getUserInfo = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(res.message);
    }

    return handleResponse(res, "An error has occured when attempting to fetch user info.")
  } catch (error) {
    throw error;
  }
};

export { getInitialItems, addNewItem, deleteItem, getUserInfo };
