class UserInfo {
  constructor ({ userName, userJob, avatar }) {
    this._name = document.querySelector(userName),
    this._job = document.querySelector(userJob)
    this._avatar = document.querySelector(avatar)};

  getUserInfo() {
    return {
      username: this._name.textContent,
      job: this._job.textContent, 
    }
  }

  setUserInfo({ username, job, avatar }) {
    this._name.textContent = username;
    this._job.textContent = job;
    this._avatar.src = avatar;
  }
}

export { UserInfo }