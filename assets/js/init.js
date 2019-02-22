$(document).ready(function() {
    M.updateTextFields();
});
import * as templating from '../html/templating.js';
const root = document.getElementById("root");


root.innerHTML = templating.rootFile;