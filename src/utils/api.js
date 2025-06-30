const BASE_URL = 'http://localhost:3001/items';

const handleResponse = (res) => {
  if (!res.ok) throw new Error(`Error: ${res.status}`)
    
  return res.json()
}

const getInitialItems = async () => {
  const res = await fetch(BASE_URL);
  
  return handleResponse(res)
}

const addNewItem = async (item) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(item)
  })

  return handleResponse(res)
}

export { getInitialItems, addNewItem }