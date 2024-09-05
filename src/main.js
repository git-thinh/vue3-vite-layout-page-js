window.__app = null;
window.__page = null;

window._userInit = (user) => {
	const u = user || {};
	const id = u.id || '';
	localStorage.setItem('user_logined', id);
	localStorage.setItem('user.' + id, JSON.stringify(u));
};

window._userGetID = () => {
	let id = localStorage.getItem('user_logined') || '';
	return id;
};

window._userGet = () => {
	const id = window._userGetID();
	const su = localStorage.getItem('user.' + id);
	const user = JSON.parse(su || '{}');
	if (Object.keys(user).length === 0) return null;
	return user;
};

//import * as bootstrap from 'bootstrap'

// Create an example popover
// document.querySelectorAll('[data-bs-toggle="popover"]')
//   .forEach(popover => {
//     new Popover(popover)
//   })

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { registerLayouts } from './layouts/register';

const app = createApp(App);
registerLayouts(app);

app.use(router);
app.mount(document.body);