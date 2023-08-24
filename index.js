// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// app.get("/api/", (req, res) => {
//   d = new Date();
//   //d = d.toUTCString();
//   res.json({
//     unix: d.getTime(),
//     utc: d.toUTCString()
//   });
// });
app.get("/api", (req, res) => {
  let date = new Date();
  let UTC = date.getTime();
  UTC = new Date(UTC);
  UTS = UTC.toUTCString();
  let UNIX = date.getTime();
  res.json({ unix: UNIX, utc: UTS });
})

// your first API endpoint... 
app.get("/api/hello", function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.get("/api/:date?", (req, res) => {
  d = req.params.date;
  t = parseInt(d, 10);

  if (Date.parse(d)) {
    d = new Date(d).toUTCString();
    res.json({
      unix: Date.parse(d),
      utc: d
    });
  }
  else if (t > 10000) {
    d = new Date(t).toUTCString();

    res.json({
      unix: t,
      utc: d
    })
  }
  else {
    res.json({
      error: "Invalid Date"
    });
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
