const BASE_URL = "http://localhost:3000";
const SIGN_IN_URL = BASE_URL + "/sign-in";
const SIGNUP_URL = BASE_URL + "/sign-up";
const POSTS_URL = BASE_URL + "/posts";
const FOLLOW_URL = BASE_URL + "/follow";

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
  return fetch(POSTS_URL, config)
    .then(res => res.json());
}

const postLike = postId => {
  const config = {
    method: "POST",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  return fetch(POSTS_URL + `/${postId}`, config)
    .then(res => res.json());
}

const deleteLike = postId => {
  const config = {
    method: "DELETE",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  return fetch(POSTS_URL + `/${postId}`, config)
    .then(res => res.json());
}

const postFollow = idToFollow => {
  const config = {
    method: "POST",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      follow: {
        followed_id: idToFollow
      }
    })
  }
  return fetch(FOLLOW_URL, config)
    .then(res => res.json());
}

const deleteFollow = idToUnfollow => {
  const config = {
    method: "DELETE",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      follow: {
        followed_id: idToUnfollow
      }
    })
  }
  return fetch(FOLLOW_URL, config)
    .then(res => res.json())
}

const getFeed = () => {
  const config = {
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  return fetch(POSTS_URL, config)
    .then(res => res.json())
}


const API = {
  signIn,
  signUp,
  submitPost,
  postLike,
  deleteLike,
  postFollow,
  deleteFollow,
  getFeed
}

export default API;