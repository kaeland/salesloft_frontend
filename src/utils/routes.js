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

export const loginFetch = (user) => {
  return fetch(`${APP_URL}/login`, authOptions(user))
}