function createDom(root) {
if (typeof root === 'string') {
    return document.createTextNode(root);
  }

  const element = document.createElement(root.type);

  if (root.attributes) {
    Object.keys(root.attributes).forEach(attr => {
      element.setAttribute(attr, root.attributes[attr]);
    });
  }

  if (root.children) {
    root.children.forEach(child => {
      element.appendChild(createDom(child));
    });
  }

  return element;
}

module.exports=createDom
