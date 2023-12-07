export function makecompo(fatagId, tagName, id, style, contents){  
  const fatag = document.getElementById(fatagId)
  const tag =  `<${tagName} id:${id} style:${style}>${contents}</${tagName}`
  fatag.innerHTML = tag
}