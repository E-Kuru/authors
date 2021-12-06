const express = require("express")
const app = express()

const authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get("/", (req,res) => {
    res.send('Authors API')
})

// app.get("/authors/:id", (req,res) => {
//     res.send(authors[req.params.id])
// })

app.get("/authors/:id", (req,res) => {

    const {id} = req.params

    res.json({
        name : authors[id].name,
        nationality : authors[id].nationality,
    })
})

app.get("/authors/:id/books", (req,res) => {
    console.log(`Authors n°${req.params.id}`);
    res.send(authors[req.params.id].books)
})

app.get("*", (req,res) => {
    res.send("dosn't exist")
})


const port = 5000

app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });
  