import {type_check} from '../../js/utils.js'

class Element{
    constructor (type, idName, className, value, hasChild, typeElem, forElem, hrefElem, widthElem, nameElem){
        this.type = type;
        this.idName = idName;
        this.className = className;
        this.value = value;
        this.hasChild = hasChild;
        this.typeElem = typeElem;
        this.forElem = forElem;
        this.hrefElem = hrefElem;
        this.widthElem = widthElem;
        this.nameElem = nameElem;
    }

    createElement() {
        const elem = document.createElement(this.type);

        if(this.idName)
            elem.id = this.idName;
        if(this.className)
            elem.className = this.className;
        if(this.value)
            elem.textContent = this.value;
        if(this.hasChild){
            if(type_check(this.hasChild, "array") && this.hasChild.length > 1){
                for(let i = 0; i < this.hasChild.length; i+=1){
                    elem.appendChild(this.hasChild[i].createElement());
                }
            } else {
                elem.appendChild(this.hasChild.createElement());
            }
        }
        if(this.typeElem)
            elem.type = this.typeElem;
        if(this.forElem)
            elem.for = this.forElem;
        if(this.hrefElem)
            elem.href = this.hrefElem;
        if(this.widthElem)
            elem.width = this.widthElem;
        if(this.nameElem)
            elem.name = this.nameElem;

        return elem;
    }
}
export default Element;