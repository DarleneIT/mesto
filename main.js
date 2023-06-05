(()=>{"use strict";var e={formSelector:".popup__form",submitElement:".popup__save",inputSelector:".popup__field",inactiveButtonClass:"popup__save_invalid",inputErrorClass:"popup__error-active",errorClass:"popup__field-blocked"},t=document.querySelector(".profile__open"),n=document.querySelector(".profile__avatar"),r=document.querySelector(".profile__add-button"),o=document.querySelector(".profile-popup"),i=document.querySelector(".item"),u=document.querySelector(".avatar"),a=document.querySelector(".elements");function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var s=function(){function e(t,n,r,o){var i=r.handleCardClick,u=r.handleDeleteCard,a=r.handleDeleteLike,c=r.handleAddLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._user=t.user,this._owner=t.owner._id,this._cardId=t._id,this._userId=n,this._likes=t.likes,this._likesLength=t.likes.length,this._handleDeleteLike=a,this._handleAddLike=c,this._templateSelector=o,this._handleCardClick=i,this._handleDeleteCard=u}var t,n;return t=e,(n=[{key:"getCardId",value:function(){return this._cardId}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._photo.addEventListener("click",(function(){e._openCard()})),this._likeButton.addEventListener("click",(function(){e._checkLikeStatus()})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteCard()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._photo=this._element.querySelector(".element__photo"),this._title=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__like"),this._deleteButton=this._element.querySelector(".element__delete"),this._likesCounter=this._element.querySelector(".element__counter"),this._setEventListeners(),this._hideTrashIcon(),this._showMyLikes(),this._title.textContent=this._name,this._photo.src=this._link,this._photo.alt=this._name,this._likesCounter.textContent=this._likesLength,this._element}},{key:"updateLike",value:function(e){this._likeButton.classList.toggle("element__like_active"),this._likesCounter.textContent=e.likes.length}},{key:"_showMyLikes",value:function(){var e=this;this._likes.forEach((function(t){t._id!==e._user||e._likeButton.classList.add("element__like_active")}))}},{key:"_checkLikeStatus",value:function(){this._likeButton.classList.contains("element__like_active")?this._handleDeleteLike(this._cardId):this._handleAddLike(this._cardId)}},{key:"_openCard",value:function(){this._handleCardClick(this._name,this._link)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_hideTrashIcon",value:function(){this._userId!==this._owner&&this._deleteButton.remove()}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=n}var t,n;return t=e,(n=[{key:"renderCard",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function d(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}var b=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_activeButton",(function(){r._button.removeAttribute("disabled"),r._button.classList.remove(r._selectorConfig.inactiveButtonClass)})),d(this,"_inactiveButton",(function(){r._button.setAttribute("disabled",!0),r._button.classList.add(r._selectorConfig.inactiveButtonClass)})),this._selectorConfig=t,this._formSelector=n,this._inputs=Array.from(this._formSelector.querySelectorAll(this._selectorConfig.inputSelector)),this._button=this._formSelector.querySelector(this._selectorConfig.submitElement)}var t,n;return t=e,(n=[{key:"_showError",value:function(e){var t=this._formSelector.querySelector(".".concat(e.id,"-error"));t.classList.add(this._selectorConfig.inputErrorClass),e.classList.add(this._selectorConfig.errorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=this._formSelector.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._selectorConfig.inputErrorClass),e.classList.remove(this._selectorConfig.errorClass),t.textContent=" "}},{key:"_toggleInputState",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._inactiveButton(this._selectorConfig):this._activeButton(this._selectorConfig)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._toggleInputState(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,k(r.key),r)}}function S(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===_(t)?t:String(t)}var w=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),S(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),this._popup=document.querySelector(t),this._closeX=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",this._handleOverlayClose),this._closeX.addEventListener("click",(function(){e.close()}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imageFullSize=t._popup.querySelector(".image__photo"),t._nameImageFullSize=t._popup.querySelector(".image__title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._nameImageFullSize.textContent=e,this._imageFullSize.alt=e,this._imageFullSize.src=t,O(P(u.prototype),"open",this).call(this)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=Array.from(n._form.querySelectorAll(".popup__field")),n._saveButton=n._form.querySelector(".popup__save"),n._saveButtonText=n._saveButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;R(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"loadingMessage",value:function(e,t){e?(this._saveButton.textContent=t,this._saveButton.disabled=!0):(this._saveButton.textContent=this._saveButtonText,this._saveButton.disabled=!1)}},{key:"close",value:function(){R(q(u.prototype),"close",this).call(this),this._form.reset()}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;D(V(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var J=function(){function e(t){var n=t.userName,r=t.userJob,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{username:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.username,n=e.job,r=e.avatar;this._name.textContent=t,this._job.textContent=n,this._avatar.src=r}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==H(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=null,K=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers,this._authorization=t.headers.authorization}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUserName",value:function(){return fetch("".concat(this._url,"users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getItems",value:function(){return fetch("".concat(this._url,"cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.username,about:e.job})}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&X(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-66/",headers:{authorization:"c9ca397d-f5a3-459e-b811-61b33e0fdb3e","Content-Type":"application/json"}});Promise.all([K.getUserName(),K.getItems()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];G=o._id,ee.setUserInfo({username:o.name,job:o.about,avatar:o.avatar}),ie.renderCard(i)})).catch((function(e){return console.log("Ошибка ".concat(e))}));var Q=new b(e,o);Q.enableValidation();var W=new b(e,i);W.enableValidation();var Y=new b(e,u);Y.enableValidation();var Z=new M(".confirm");Z.setEventListeners();var ee=new J({userName:".profile__name",userJob:".profile__job",avatar:".profile__avatar"}),te=new x(".profile-popup",(function(e){te.loadingMessage(!0,"Сохранение..."),K.setUserInfo(e).then((function(e){ee.setUserInfo({username:e.name,job:e.about,avatar:e.avatar}),te.close()})).catch((function(e){return console.log("Не удалось изменить данные пользователя ".concat(e))})).finally((function(){te.loadingMessage(!1)}))}));te.setEventListeners(),t.addEventListener("click",(function(){var e=ee.getUserInfo(),t=e.username,n=e.job;te.setInputValues({username:t,job:n}),te.open(),Q.resetValidation()}));var ne=new x(".avatar",(function(e){ne.loadingMessage(!0,"Сохранение..."),K.setAvatar(e).then((function(e){ee.setUserInfo({username:e.name,job:e.about,avatar:e.avatar}),ne.close()})).catch((function(e){return console.log("Не удалось изменить аватар ".concat(e))})).finally((function(){ne.loadingMessage(!1)}))}));ne.setEventListeners(),n.addEventListener("click",(function(){ne.open(),Y.resetValidation()}));var re=new L(".image");function oe(e){var t=new s(e,G,{handleCardClick:function(e,t){re.open(e,t)},handleDeleteCard:function(){Z.open(),Z.setSubmitAction((function(){K.deleteCard(t.getCardId()).then((function(){t.deleteCard(),Z.close()})).catch((function(e){return console.log("Не удалось выполнить действие. ".concat(e))}))}))},handleDeleteLike:function(e){K.deleteLike(e).then((function(e){t.updateLike(e)})).catch((function(e){return console.log("Не удалось выполнить действие. ".concat(e))}))},handleAddLike:function(e){K.addLike(e).then((function(e){t.updateLike(e)})).catch((function(e){return console.log("Не удалось выполнить действие. ".concat(e))}))}},".card-template");return t.generateCard()}re.setEventListeners();var ie=new h((function(e){ie.addItem(oe(e))}),a),ue=new x(".item",(function(e){ue.loadingMessage(!0,"Создание..."),K.addCard(e).then((function(e){ie.prependItem(oe(e)),ue.close()})).catch((function(e){return console.log("Не удалось загрузить картинку ".concat(e))})).finally((function(){ue.loadingMessage(!1)}))}));ue.setEventListeners(),r.addEventListener("click",(function(){ue.open(),W.resetValidation()}))})();