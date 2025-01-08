const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set static files directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zaidiali087@gmail.com',  // Your email
    pass: 'ali@110110'              // Your email password
  }
});

// POST route for form submission
app.post('/submit-service-request', (req, res) => {
  const { name, phone, service, details } = req.body;

  // Mail options for sending email
  const mailOptions = {
    from: 'zaidiali087@gmail.com',  // Sender email
    to: 'zaidiali087@gmail.com',    // Recipient email
    subject: 'New Service Request',
    html: `
      <h3>New Service Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Details:</strong> ${details}</p>
    `
  };

  // Send the email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return res.status(500).send('Error sending email.');
    }
    res.send('Your service request has been submitted successfully!');
  });
});

// Set the view engine (EJS in this case)
app.set('view engine', 'ejs');
app.set('views', './views');

// Define routes for rendering pages
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/mztechnicals', (req, res) => {
  res.render('index');
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/careers", (req, res) => {
  res.render("careers.ejs");
});

app.get("/offers", (req, res) => {
  res.render("offers.ejs");
});

app.get("/blogs", (req, res) => {
  res.render("blogs.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/interior", (req, res) => {
  res.render("interior.ejs");
});

app.get("/exterior", (req, res) => {
  res.render("exterior.ejs");
});

app.get("/customer", (req, res) => {
  res.render("customer.ejs");
});

app.get("/wiring", (req, res) => {
  res.render("wiring.ejs");
});

app.get("/lighting", (req, res) => {
  res.render("lighting.ejs");
});

app.get("/appliance", (req, res) => {
  res.render("appliance.ejs");
});

app.get("/custom", (req, res) => {
  res.render("custom.ejs");
});

app.get("/furtinur", (req, res) => {
  res.render("furtinur.ejs");
});

app.get("/woodwork", (req, res) => {
  res.render("woodwork.ejs");
});

app.get("/leak", (req, res) => {
  res.render("leak.ejs");
});

app.get("/pipe", (req, res) => {
  res.render("pipe.ejs");
});

app.get("/drain", (req, res) => {
  res.render("drain.ejs");
});

app.get("/acinst", (req, res) => {
  res.render("acinst.ejs");
});

app.get("/acrepair", (req, res) => {
  res.render("acrepair.ejs");
});

// Thank you page after successful form submission
app.get('/thank-you', (req, res) => {
  res.send("Thank you for your service request!");  // You can create a thank-you.ejs file if you prefer
});

// Handle page not found (catch-all)
app.get("*", (req, res) => {
  res.send("Page not found");
});

// Start the server
app.listen(1000, () => {
  console.log('Server is running on http://localhost:1000');
});
