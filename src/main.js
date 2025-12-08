console.log("Olá mundo!");

function test() {
   console.log("Hello World!");
}

test();

function testHTMLElement() {
   const span = document.createElement("span");
   span.textContent = "Hello World";
   return span;
}

document.body.appendChild(testHTMLElement());