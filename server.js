const express = require('express');
constbodyParser = require('body-parser');
constcors = require('cors');
constauthRoutes = require('./routes/auth');
consteventRoutes = require('./routes/events');
constmessageRoutes = require('./routes/messages');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
