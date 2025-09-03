// node.js
const express = require("express")
const app = express()
const port = 3000

// app.get("/", (req, res) => {
//   res.send("OK")
// })

app.use(express.static("public"))

// app.get('/:name.html', (req, res, next) => {
//   const filePath = path.join("html directory path", req.path);
//   res.sendFile(filePath, (err) => {
//     if (err) {
//       //fallback to static if not exists file
//       next()
//     }
//   })
// })

app.listen(port, () => {
  console.log(`Start app on port ${port}`)
})
