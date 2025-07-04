const BASE_URL = 'http://localhost:3001/items';

export const handleResponse = (res, errorMessage) => {
  if (!res.ok) throw new Error(`Error: ${errorMessage}`)
    
  return res.json()
}

const getInitialItems = async () => {
  const res = await fetch(BASE_URL);
  
  return handleResponse(res, "An error has occured when attempting to fetch clothing data")
}

const addNewItem = async (item) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(item)
  })

  return handleResponse(res, "An error has occured when attempting to add new clothing item")
}

const deleteItem = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  })

  return handleResponse(res, "An error has occured when attempting to delete clothing item")
}

export { getInitialItems, addNewItem, deleteItem }