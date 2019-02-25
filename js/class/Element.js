import type_check from '../../js/utils.js'

class Element{
    constructor (type, idName, className, value, hasChild){
        this.type = type;
        this.idName = idName;
        this.className = className;
        this.value = value;
        this.hasChild = hasChild;
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
            if(type_check(this.hasChild, "array")){
                for(let i = 0; i < this.hasChild.length; i+=1){
                    console.log(this.hasChild[i]);
                    elem.appendChild(this.hasChild[i].createElement());
                }
            } else {
                elem.appendChild(this.hasChild.createElement());
            }
        }
        return elem;
    }
}
export default Element;