const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({name: 'Oi'});
});

app.listen(3333);