function customRender(reactElement, container) {
  const { type, props, children } = reactElement;
  const domElement = document.createElement(type); // e.g., 'a'

  // Set attributes
  for (const [key, value] of Object.entries(props || {})) {
    domElement.setAttribute(key, value);
  }

  // Set text content
  if (children) {
    domElement.textContent = children;
  }

  container.appendChild(domElement);
}

// React-like element
const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.example.com',
    target: '_blank' // correct
  },
  children: 'Click me to visit example.com'
};

// Mount to DOM
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
