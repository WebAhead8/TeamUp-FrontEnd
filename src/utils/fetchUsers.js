require("dotenv").config();
let serverUrl;

if (process.env.NODE_ENV === "production") {
  serverUrl = process.env.REACT_APP_SERVER_URL_PRODUCTION;
} else {
  serverUrl = process.env.REACT_APP_SERVER_URL_DEV;
}

function request(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      const error = new Error("HTTP Error FetchUsers");
      error.status = response.status;
      throw error;
    } else {
      return response.json();
    }
  });
}

export function login(loginData) {
  console.log(serverUrl);
  return request(`${serverUrl}/login`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "content-type": "application/json" },
  });
}

export function createUser(userData) {
  return request(`${serverUrl}/users`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json",
    },
  }).catch((err) => {
    throw new Error(`fetch getData failed ${err}`);
  });
}

export function updateUser(url, userData) {
  return request(`${serverUrl}/update/${url}`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json",
    },
  }).catch((err) => {
    console.log(`fetch Update User failed ${err}`);
  });
}

export function deleteUser(id) {
  alert("id from fetch ", id)
  return request(`${serverUrl}/users/${id}`, {
    method: "DELETE",
  }).catch((err) => {
    console.log(`fetch Update User failed ${err}`);
  });
}

export function getUser(token) {
  return request(`${serverUrl}/login/me`, {
    headers: { authorization: `${token}` },
  });
}

export default { login, getUser, createUser, updateUser, deleteUser };
