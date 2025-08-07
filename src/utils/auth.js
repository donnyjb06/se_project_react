import { handleResponse } from "./api"
import { BASE_URL } from "./constants"

export const signUp = async (email, password, name, avatar) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({name, email, password, avatar}) 
  })
  
  return handleResponse(res, "An error has occured while attempting to register your account.")
}

export const logIn = async (email, password) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })

  return handleResponse(res, "An error has occured while attempting to log you in.")
}