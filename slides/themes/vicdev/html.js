module.exports = function (data) {
  return {
    "200.html": data.defaultTemplate(),
    "index.html": [
      "<!doctype html>",
      "<html>",
      "<head>",
      "<meta charset=\"utf-8\"/>",
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\"/>",
      '<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" type="text/css">',
      "<link href=\"" + data.css + "\" rel=\"stylesheet\" type=\"text/css\" />",
      "</head>",
      "<body>",
      "<div id=\"root\"></div>",
      "<script src=\"" + data.main + "\"></script>",
      "</body>",
      "</html>"
    ].join("")
  };
};
