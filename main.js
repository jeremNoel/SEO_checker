import hello from './js/file.js';
import constructDom from './js/domCreator.js';

const dom = document.getElementById('root');

dom.appendChild(constructDom());

constructDom();

let val = hello();
console.log(val);
console.log('main.js');
