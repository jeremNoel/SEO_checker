import Element from './class/Element.js';

export default function constructDOm() {

    const span6 = new Element('span', null, 'badge', '12');
    const ahref6 = new Element('a', null, 'collection-item orange-text', 'script', span6, null, null, '#!');

    const span5 = new Element('span', null, 'badge', '13');
    const ahref5 = new Element('a', null, 'collection-item orange-text', 'link', span5, null, null, '#!');

    const span4 = new Element('span', null, 'badge', '1');
    const ahref4 = new Element('a', null, 'collection-item orange-text', 'title', span4, null, null, '#!');

    const span3 = new Element('span', null, 'badge', '56');
    const ahref3 = new Element('a', null, 'collection-item orange-text', 'description', span3, null, null, '#!');

    const span2 = new Element('span', 'responseMetaValue', 'badge', '{{meta}}');
    const ahref2 = new Element('a', null, 'collection-item orange-text', 'meta', span2, null, null, '#!');

    const span1 = new Element('span', "responseH1Value", 'badge', '{{h1}}');
    const ahref1 = new Element('a', null, 'collection-item orange-text', 'h1', span1, null, null, '#!');

    const ahrefTab = [ahref1,ahref2,ahref3,ahref4,ahref5,ahref6];

    const divCollection = new Element('div', null, 'collection', null, ahrefTab);

    const td4 = new Element('td', null, null, 'IdAsauvegarderpourconsulterplustard');
    const td3 = new Element('td', null, null, null, divCollection);
    const td2 = new Element('td', "responseTimeValue", null, '{{responseTime}}');
    const td1 = new Element('td', "responseCodeValue", null, '{{responseCode}}');
    const tabTr2 = [td1, td2, td3, td4];

    const tr2 = new Element('tr', null, null, null, tabTr2);
    const tbody = new Element('tbody');

    const thResponseCode = new Element('th', null, null, 'responseCode', null, null, null, null, '20%');
    const thResponseTime = new Element('th', null, null, 'responseTime', null, null, null, null, '20%');
    const thFileWeight = new Element('th', null, null, 'fileWeight', null, null, null, null, '20%');
    const thElement = new Element('th', null, null, 'element', null, null, null, null, '20%');
    const thSaveName = new Element('th', null, null, 'saveName', null, null, null, null, '20%');

    const tabHeader = [thResponseCode, thResponseTime, thFileWeight, thElement, thSaveName];

    const tr1 = new Element('tr', null, null, null, tabHeader);
    const theadElement = new Element('thead');
    const tabTableHeader = [theadElement, tr1, tbody, tr2];

    const table = new Element('table', null, 'centered responsive-table', null, tabTableHeader);
    const colRow = new Element('div', null, 'col l12 m12 s12', null, table);
    const row4 = new Element('div', null, 'row', null, colRow);

    const iconButton = new Element('i', null, 'material-icons right', 'send');
    const buttonSubmit = new Element('button', null, 'btn waves-effect waves-light orange darken-4 button-url', "let's go !", iconButton, 'submit', null, null, null, 'action');

    const labelInput = new Element('label', null, null, '', null, null, '');
    const inputElem = new Element('input', '', 'input-url', null, null, '');
    const tabInput = [inputElem, labelInput];

    const inputField = new Element('div', null, 'input-field col s12', null, tabInput);
    const row3 = new Element('div', null, 'row', null, inputField);
    const form = new Element('form', null, 'col s12 m12 s12', null, row3);

    const row2 = new Element('div', null, 'row', null, form);
    const h4Title = new Element('h4', null, 'text-colors', 'Start by giving us the URL below');
    const spanCard = new Element('span', null, 'card-title orange-text', 'SEO checker');
    const tabTitle = [spanCard, h4Title, row2, buttonSubmit, row4];

    const cardContent = new Element('div', null, 'card-content white-text', null, tabTitle);
    const card1 = new Element('div', null, 'card blue-grey darken-1', null, cardContent);
    const col1 = new Element('div', null, 'col s8 m8 s8 offset-l2 offset-m2 offset-s2', null, card1);
    const row = new Element('div', null, 'row', null, col1);

    const homepageResult = new Element('div', null, 'homepage-result', null, row);

    return homepageResult.createElement();
};