// bring in dependencies
const express = require("express");
const path = require("path");
const api = require("./routes/notes");
const PORT = process.env.PORT || 3001;
const app = express()
// configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use(express.static("public"));

// Routes
// homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

// please note if you have loom chrome extension added you will see this error "blur.js:42 Uncaught (in promise) Error: Minified React error #321; visit https://reactjs.org/docs/error-decoder.html?invariant=321" this is OKAY and can be ignored.