import Request from './js/request.js';
import constructDom from './js/domCreator.js';

const dom = document.getElementById('root');
dom.appendChild(constructDom());

constructDom();

document.querySelector(".button-url").addEventListener("click", function( event ) {
    console.log('click');
    let url = document.querySelector(".input-url").value;
    const request = new Request(url);
    let requestor = request.requestCrawler(url);
    console.log("requestor : ", requestor);
    
});

console.log('main.js');
