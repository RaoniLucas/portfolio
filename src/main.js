console.log("Olá mundo!");

function test() {
   console.log("Hello World!");
}

test();

function testHTMLElement() {
   return `<span>Hello World</span>`;
}

document.body.appendChild(testHTMLElement());