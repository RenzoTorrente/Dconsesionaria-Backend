
exports.propertiesFilter = (propsoptions, propsnotin)=>{
const container = [];
let props = this.propertiesmap(container, propsoptions);
if(propsnotin.length){
var allproperties = this.propertiesmap(props, propsnotin);   
}
return allproperties;
}

exports.propertiesmap = (array , data)=>{

data.map((elem) => {
let objprop = {
 id: elem.id,
name: elem.name,
categoryId: elem.categoryId,};
 array.push(objprop);
 });
return array;
}