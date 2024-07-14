const express = require("express");
require("./db/conn");

const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

const newsRouter = require("./routes/news")
const blogRouter = require("./routes/blog")
const workRouter = require("./routes/ourWorks")
const registerRouter = require("./routes/register")
const aboutUsRouter = require("./routes/aboutUs")
const servicesRouter = require("./routes/services")
const teamRouter = require("./routes/team")
const productRouter = require("./routes/product")
const contactRouter = require("./routes/contact")
app.use(newsRouter);
app.use(blogRouter);
app.use(workRouter);
app.use(registerRouter);
app.use(aboutUsRouter);
app.use(servicesRouter);
app.use(teamRouter);
app.use(productRouter);
app.use(contactRouter);

// Handle preflight requests
// app.options('*', cors());


 app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});