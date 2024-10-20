const express = require('express');

const PORT = 1729;

const app = express();
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("get-testimonial-backend\nServer is running...");
})

