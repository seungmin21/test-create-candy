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

