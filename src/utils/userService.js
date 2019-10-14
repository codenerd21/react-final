import tokenService from './tokenService';

const BASE_URL = '/api/users/';

export default {
  signup,
  getUser,
  logout,
  update,
  login,
  index,
  delete: deleteUser
};

function deleteUser(idx) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer  + ${token}`
    }
  }).then(res => res.json());
}


function update(user) {
  return fetch(`${BASE_URL}/${user._id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(user)
  }).then(res => res.json());
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
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({ token }) => tokenService.setToken(token));
}
