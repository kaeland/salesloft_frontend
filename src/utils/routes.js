const APP_URL = "http://localhost:3000/api/v1"

const authOptions = (user) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    user
  })
})

const getOptions = () => ({
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json", 
    "Authorization": `Bearer ${localStorage.getItem("jwt")}`
  }
})

export const loginFetch = (user) => {
  return fetch(`${APP_URL}/login`, authOptions(user))
}

export const fetchPeople = () => {
  return fetch(`${APP_URL}/people`, getOptions())
}