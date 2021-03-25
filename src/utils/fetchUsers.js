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
      const error = new Error("HTTP Error");
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

export function getUser(token) {
  return request(`${serverUrl}/login/me`, {
    headers: { authorization: `${token}` },
  });
}

export default { login, getUser, createUser };
