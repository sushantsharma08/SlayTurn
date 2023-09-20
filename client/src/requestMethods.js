import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";


const user = JSON.parse(localStorage.getItem("persist:root"))?.user ;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTZkYWZkNDFjN2Y4OGUzN2JlZmMwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc2ODA2NSwiZXhwIjoxNjk1MDI3MjY1fQ.LJ2AjDKqVoXwDoqfHMxLgK0YROSwlusRFf9urImDTIs";

//to fetch data we will use publicRequest because anyone can see data
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});