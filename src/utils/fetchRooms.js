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

export function createRoom(roomData) {
  return request(`${serverUrl}/rooms`, {
    method: "POST",
    body: JSON.stringify(roomData),
    headers: {
      "Content-type": "application/json",
    },
  }).catch((err) => {
    throw new Error(`fetch getData failed ${err}`);
  });
}
