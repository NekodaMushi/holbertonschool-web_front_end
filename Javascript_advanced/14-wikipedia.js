function createElement(data) {
  const p = document.createElement('p');
  p.textContent = data;
  document.body.appendChild(p)
}

function queryWikipedia(callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const data = JSON.parse(xhttp.responseText);
      const extract = data.query.pages[Object.keys(data.query.pages)[0]].extract;
      callback(extract);
    }
  }
  xhttp.send();
}

queryWikipedia(createElement)