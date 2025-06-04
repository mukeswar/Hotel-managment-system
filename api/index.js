// 📦 External Modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// 📁 Internal Routes
const userRoute = require('./routes/user');
const hotelRoute = require('./routes/hotel');
const roomRoute = require('./routes/room');
const blogRoute = require('./routes/blog');

// 🔧 Initialize App
const app = express();
dotenv.config();

// 🌐 Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 🔌 MongoDB Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// 🛣️ API Routes
app.use('/api', userRoute);
app.use('/api', hotelRoute);
app.use('/api', roomRoute);
app.use('/api', blogRoute);

// 🏠 Default Home Route
app.get('/', (req, res) => {
    res.status(200).json({
        message: '🚀 Server running successfully',
    });
});

// ❌ 404 Route Not Found
app.use((req, res) => {
    res.status(404).json({
        error: '❌ URL Not Found',
    });
});

// 🧯 Global Error Handler
app.use((err, req, res, next) => {
    console.error('🔥 Server Error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        details: err.message || err,
    });
});

// 🚀 Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🌍 Server listening on http://localhost:${PORT}`);
});
