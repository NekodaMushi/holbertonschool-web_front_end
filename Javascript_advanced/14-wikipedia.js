<html lang="en">
  <head>
    <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <script>
          function createElement(data) {
      const p = document.createElement('p');
          p.textContent = data;
          document.body.appendChild(p);
    }

          function queryWikipedia(callback) {
      const xhttp = new XMLHttpRequest();
          xhttp.open('GET', "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");

      xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          const data = JSON.parse(xhttp.responseText);
          console.log(data);
          const page = data.query.pages;
          const pageId = Object.keys(page)[0];
          const extract = page[pageId].extract;
          callback(extract);
        }
      };
          xhttp.send();
    }

          queryWikipedia(createElement);
        </script>
      </body>
    </html>
