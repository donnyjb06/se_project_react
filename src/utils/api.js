import { BASE_URL } from './constants';
import { getToken } from './token';

export const handleResponse = (res, errorMessage) => {
  if (!res.ok) throw new Error(res.message);

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
  const token = getToken();

  if (!token) {
    throw new Error('User must be logged in to create a new item');
  }
  const res = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  });

  return handleResponse(
    res,
    'An error has occured when attempting to add new clothing item',
  );
};

const deleteItem = async (id) => {
  const token = getToken();
  console.log(token);

  if (!token) {
    throw new Error('User must be logged in to create a new item');
  }

  const res = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
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

    return handleResponse(
      res,
      'An error has occured when attempting to fetch user info.',
    );
  } catch (error) {
    throw error;
  }
};

const editUserInfo = async (updates) => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('User must be logged in to update profile');
    }

    if (!updates) {
      throw new Error('Missing fields');
    }

    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updates),
    });

    return handleResponse(
      res,
      'An error has occured when attempting to edit user info.',
    );
  } catch (error) {
    throw error;
  }
};

const toggleIsLiked = async (id, isLiked) => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('User must be logged in to like/dislike a clothing item.')
    }

    const res = await fetch(`${BASE_URL}/items/${id}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: {
        'authorization': `Bearer ${token}`
      }
    })

    return handleResponse(res, "An error has occured when attempting to toggle like state.")
  } catch (error) {
    throw error
  }
}

export { getInitialItems, addNewItem, deleteItem, getUserInfo, editUserInfo, toggleIsLiked };
