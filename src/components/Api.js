class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  };

getUserName() {
  return fetch(`${this._url}users/me`, { 
    headers: {
      authorization: this._authorization,
    }
  })
  .then(res => res.json())
};

getItems() { 
  return fetch(`${this._url}cards`, {
    headers: {
      authorization: this._authorization,
    }
   })
   .then(res => res.json())
};

setUserInfo(data) {
  return fetch(`${this._url}users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: data.username,
      about: data.job,
     })
  })
  .then(res => res.json())
};

setAvatar(data) {
  return fetch(`${this._url}users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({ 
      avatar: data.avatar,
    })
  })
  .then(res => res.json())
 }

 addCard(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link,
        })
      })
      .then(res => res.json())
 }

deleteCard(cardId) {
  return fetch(`${this._url}cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: this._authorization,
    }
  })
  .then(res => res.json())
}

addLike(cardId) {
  return fetch(`${this._url}cards/${cardId}/likes`, {
    method: 'PUT',
    headers: {
      authorization: this._authorization,
    }
  })
  .then(res => res.json()) 
}

deleteLike(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
      }
    })
    .then(res => res.json())
  }

};

export { Api } 