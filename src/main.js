console.log("Olá mundo!");

function test() {
   console.log("Hello World!");
}

test();

function testHTMLElement(text = "Hello World!") {
   const span = document.createElement("span");
   span.textContent = text;
   return span;
}

document.body.appendChild(testHTMLElement());