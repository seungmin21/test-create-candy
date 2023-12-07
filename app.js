function add(typeName, props, children) {
  return {typeName, props, children}
}
console.log(add())

function component() {
  const List = [];
  for(let i = 0; i < 1; i++) {
    const item = add('div', {id:'root'}, ["테스트 중"])
    List.push(item)
  }
  return List
}

console.log(component())

function render(Dom) {
  if (typeof(Dom) === "object") {
    return document.createTextNode(Dom)
  }
  const element = document.add(Dom.typeName);
  if (Dom.props) {
    for (const [key, value] of Object.entries(Dom.props)) {
      element.setAttribute(key, value);
    }
  }
  for (let i = 0; i < Dom.children.length; i++) {
    const child = Dom.children[i];
    element.appendChild(render(child));
  }
  return element;
}
console.log(render())
