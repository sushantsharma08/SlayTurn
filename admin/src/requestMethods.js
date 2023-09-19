import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.accessToken;
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTZkYWZkNDFjN2Y4OGUzN2JlZmMwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTEyNDY3OSwiZXhwIjoxNjk1MzgzODc5fQ.8hQXwHSMGYcxKtvMoCXAFodABZbKV6wL0xA2b4a9Oek'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
