import Element from './class/Element.js';

export default function constructDOm() {

    const row = new Element('div', null, 'row');
    const homepageResult = new Element('div', null, 'homepage-result', null, row);




    return homepageResult.createElement();

};