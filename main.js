import Request from './js/request.js';
import constructDom from './js/domCreator.js';

const dom = document.getElementById('root');

dom.appendChild(constructDom());

constructDom();

document.getElementById("button-url").addEventListener("click", function( event ) {
    let url = document.getElementById("input-url").value;
    const request = new Request(url);
    let requestor = request.requestCrawler(url);
});

console.log('main.js');
