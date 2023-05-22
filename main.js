(()=>{"use strict";var t=[{title:"Архыз",link:"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9ncyUyMGFuZCUyMHNlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"},{title:"Челябинск",link:"https://images.unsplash.com/photo-1561312176-5aedf7172115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3MlMjBhbmQlMjBzZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},{title:"Иваново",link:"https://images.unsplash.com/photo-1568480418648-be0346569876?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGRvZ3MlMjBhbmQlMjBzZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},{title:"Камчатка",link:"https://images.unsplash.com/photo-1509924295413-6722539acbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxkb2dzJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},{title:"Холмогорский район",link:"https://images.unsplash.com/photo-1554224311-beee415c201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxkb2dzJTIwYW5kJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},{title:"Байкал",link:"https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxkb2dzJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"}],e={formSelector:".popup__form",submitElement:".popup__save",inputSelector:".popup__field",inactiveButtonClass:"popup__save_invalid",inputErrorClass:"popup__error-active",errorClass:"popup__field-blocked"},n=document.querySelector(".profile__open"),r=document.querySelector(".profile__avatar"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".profile-popup"),u=document.querySelector(".item"),l=document.querySelector(".avatar"),a=document.querySelector(".elements");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var f=function(){function t(e,n,r){var o=e.title,i=e.link;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=o,this._link=i,this._templateSelector=r,this._handleCardClick=n}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._photo.addEventListener("click",(function(){t._openCard()})),this._likeButton.addEventListener("click",(function(){t._likeCard()})),this._element.querySelector(".element__delete").addEventListener("click",(function(){t._deleteCard()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._photo=this._element.querySelector(".element__photo"),this._likeButton=this._element.querySelector(".element__like"),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._photo.src=this._link,this._photo.alt=this._name,this._element}},{key:"_likeCard",value:function(){this._likeButton.classList.toggle("element__like_active")}},{key:"_openCard",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var m=function(){function t(e,n){var r=e.initialCards,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialCards=r,this._renderer=o,this._container=n}var e,n;return e=t,(n=[{key:"renderCard",value:function(){var t=this;this._initialCards.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function h(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var _=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"_activeButton",(function(){r._button.removeAttribute("disabled"),r._button.classList.remove(r._selectorConfig.inactiveButtonClass)})),h(this,"_inactiveButton",(function(){r._button.setAttribute("disabled",!0),r._button.classList.add(r._selectorConfig.inactiveButtonClass)})),this._selectorConfig=e,this._formSelector=n,this._inputs=Array.from(this._formSelector.querySelectorAll(this._selectorConfig.inputSelector)),this._button=this._formSelector.querySelector(this._selectorConfig.submitElement)}var e,n;return e=t,(n=[{key:"_showError",value:function(t){var e=this._formSelector.querySelector(".".concat(t.id,"-error"));e.classList.add(this._selectorConfig.inputErrorClass),t.classList.add(this._selectorConfig.errorClass),e.textContent=t.validationMessage}},{key:"_hideError",value:function(t){var e=this._formSelector.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._selectorConfig.inputErrorClass),t.classList.remove(this._selectorConfig.errorClass),e.textContent=" "}},{key:"_toggleInputState",value:function(t){t.validity.valid?this._hideError(t):this._showError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._inactiveButton(this._selectorConfig):this._activeButton(this._selectorConfig)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._toggleInputState(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputs.forEach((function(e){t._hideError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,j(r.key),r)}}function w(t,e,n){return(e=j(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(e)?e:String(e)}var k=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),w(this,"_handleOverlayClose",(function(t){t.target.classList.contains("popup_opened")&&n.close(t.target)})),this._popup=document.querySelector(e),this._closeX=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;document.addEventListener("mousedown",this._handleOverlayClose),this._closeX.addEventListener("click",(function(){t.close()}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imageFullSize=e._popup.querySelector(".image__photo"),e._nameImageFullSize=e._popup.querySelector(".image__title"),e}return e=u,(n=[{key:"open",value:function(t,e){this._nameImageFullSize.textContent=t,this._nameImageFullSize.alt=t,this._imageFullSize.src=e,O(x(u.prototype),"open",this).call(this)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=e,n._form=n._popup.querySelector(".popup__form"),n._inputs=Array.from(n._form.querySelectorAll(".popup__field")),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;q(I(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputValues()),t.close()}))}},{key:"close",value:function(){q(I(u.prototype),"close",this).call(this),this._form.reset()}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var z=function(){function t(e){var n=e.userName,r=e.userJob;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._job=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{username:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.username,this._job.textContent=t.job}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),A=new _(e,i);A.enableValidation();var F=new _(e,u);F.enableValidation();var H=new _(e,l);H.enableValidation();var Z=new z({userName:".profile__name",userJob:".profile__job"}),W=new D(".profile-popup",(function(t){Z.setUserInfo({username:t.username,job:t.job})}));W.setEventListeners(),n.addEventListener("click",(function(){var t=Z.getUserInfo(),e=t.username,n=t.job;W.setInputValues({username:e,job:n}),W.open(),A.resetValidation()}));var Y=new M(".image");Y.setEventListeners();var G=function(t,e){Y.open(t,e)},J=function(t){return new f(t,G,".card-template").generateCard()},U=new m({initialCards:t,renderer:function(t){U.addItem(J(t))}},a);U.renderCard(t);var N=new D(".item",(function(t){var e=t.title,n=t.link;U.prependItem(J({title:e,link:n}))}));N.setEventListeners(),o.addEventListener("click",(function(){N.open(),F.resetValidation()}));var X=new D(".avatar",{});X.setEventListeners(),r.addEventListener("click",(function(){X.open(),H.resetValidation()}))})();