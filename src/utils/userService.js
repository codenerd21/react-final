import tokenService from './tokenService';

const BASE_URL = '/api/users/';

export default {
  signup,
  getUser,
  logout,
  login,
  index
};

function update(question) {
  // ----------------- POST Method
  // 1) Get current user from the db
  // 2) Update the question that was passed as argument
  // 3) Call on user update end point to update user 
}

function index() {
  const url = `${BASE_URL}match`;
  return fetch(url)
    .then((res) => res.json());
}

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user)
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Email already taken!');
    })
    .then(({ token }) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(creds)
  })
    .then(res => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({ token }) => tokenService.setToken(token));
}
