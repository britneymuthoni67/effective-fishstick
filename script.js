const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

headings.forEach(heading => {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  heading.style.color = randomColor;
});
