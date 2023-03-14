export default defineNuxtPlugin(() => {
  class HelloWorldComponent extends HTMLElement {
  
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.innerHTML = `<h1>Hello world! I'm a custom element</h1>`
    }
  
  }
  
  customElements.define("hello-world", HelloWorldComponent)
})