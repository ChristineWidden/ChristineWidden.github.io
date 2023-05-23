
const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
  <nav>
    <a href="index.html">Home</a>
    <a href="fill-form.html">Form-filling exercise</a>
    <a href="locate-item.html">Item locating exercise</a>
    <a href="cheatsheet.html">Selenium Cheat Sheet</a>
  </nav>
`;

document.getElementById("nav").appendChild(navTemplate.content);
