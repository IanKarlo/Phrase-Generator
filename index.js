const express = require('express');

const port = process.env.PORT || 8080

const app = express();
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log('Server listen on port ' + port);
});