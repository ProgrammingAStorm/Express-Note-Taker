const express = require('express');

const apiROutes = require('./routes/htmlRoutes');
const htmlRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use('./api', apiROutes);

app.use('./', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});