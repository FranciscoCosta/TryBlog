const express = require('express')
const postRoutes = require('./routes/posts')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

const app = express();


app.use(express.json());

app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)


app.listen(8000,()=>{
    console.log("Listen to port 8000");
})