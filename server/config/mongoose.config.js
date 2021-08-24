const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/piratedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to database"))
    .catch(err => console.log("Error connection to database", err));