const BASE_URL = "http://localhost:3000";
const SIGN_IN_URL = BASE_URL + "/sign-in";
const SIGNUP_URL = BASE_URL + "/sign-up";
const CREATE_POST_URL = BASE_URL + "/posts/create";
const validateUrl = BASE_URL + '/validate'

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(resp => resp.json())


  const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())

  const signIn = credentials => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(credentials)
    }
    return fetch(SIGN_IN_URL, config)
      .then(res => res.json());
  }

const signUp = userDetails => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ user: userDetails })
  }
  fetch(SIGNUP_URL, config)
    .then(res => res.json());
}

const submitPost = formData => {
  const config = {
    method: "POST",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Accept": "application/json"
    },
    body: formData
  }
  return fetch(CREATE_POST_URL, config)
    .then(res => res.json())
    .then(console.log);
}

const validate = () => get(validateUrl)

const API = {
  signIn,
  signUp,
  submitPost,
  validate
}

export default API;