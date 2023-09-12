function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + 'rem';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const p = document.createElement('p');
  p.innerHTML = 'WELCOME HOLBERTON!';
  document.body.appendChild(p);


  const spookyButton = document.createElement('button');
  spookyButton.innerHTML = "Spooky";
  spookyButton.onclick = spooky;
  document.body.appendChild(spookyButton);

  const darkButton = document.createElement('button');
  darkButton.innerHTML = "Dark mode";
  darkButton.onclick = darkMode;
  document.body.appendChild(darkButton);

  const screamButton = document.createElement('button');
  screamButton.innerHTML = 'Scream mode';
  screamButton.onclick = screamMode;
  document.body.appendChild(screamButton);
};

main();
