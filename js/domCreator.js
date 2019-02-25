import Element from './class/Element.js';

export default function constructDOm() {

    const row = new Element('div', null, 'row');
    const row2 = new Element('div', null, 'row');
    const tabRow = [row, row2];
    const homepageResult = new Element('div', null, 'homepage-result', null, tabRow);

    return homepageResult.createElement();

};