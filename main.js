import Request from './js/request.js';
import constructDom from './js/domCreator.js';
import * as utils from './js/utils.js'


const dom = document.getElementById('root');
dom.appendChild(constructDom());

constructDom();

document.querySelector(".button-url").addEventListener("click", function( event ) {
    let url = document.querySelector(".input-url").value;
    const request = new Request(url);
    const result = request.requestCrawler(url);

    result.then(function (v) {
        initInterpolate(v.responseText);

    });
});

document.querySelector('.button-refresh').addEventListener('click', function(event) {
    location.reload();
});

function showDom() {
    const x = document.querySelector(".dom-result");
      x.style.display = "block";
  }

function initInterpolate(json) {
    const object = JSON.parse(json);
    const responseCodeElem = document.getElementById('responseCodeValue');
    const responseTimeElem = document.getElementById('responseTimeValue');
    const responseH1Elem = document.getElementById('responseH1Value');
    const responseMetaElem = document.getElementById('responseMetaValue');
    const responseDescriptionElem = document.getElementById('responseDescriptionValue');
    const responseTitleElem = document.getElementById('responseTitleValue');
    const responseLinkElem = document.getElementById('responseLinkValue');
    const responseScriptElem = document.getElementById('responseScriptValue');

    responseCodeElem.textContent = utils.interpolate(responseCodeElem.textContent, {responseCode: object['responseCode']});
    responseTimeElem.textContent = utils.interpolate(responseTimeElem.textContent, {responseTime: object['responseTime']});
    responseH1Elem.textContent = utils.interpolate(responseH1Elem.textContent, {h1: object.element['h1']});
    responseMetaElem.textContent = utils.interpolate(responseMetaElem.textContent, {meta: object.element['meta']});
    responseDescriptionElem.textContent = utils.interpolate(responseDescriptionElem.textContent, {description: object.element['description']});
    responseTitleElem.textContent = utils.interpolate(responseTitleElem.textContent, {title: object.element['title']});
    responseLinkElem.textContent = utils.interpolate(responseLinkElem.textContent, {link: object.element['link']});
    responseScriptElem.textContent = utils.interpolate(responseScriptElem.textContent, {script: object.element['script']});

    
    showDom();
    return;

}




