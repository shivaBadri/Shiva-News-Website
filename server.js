const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected")).catch(err => console.log(err));

const News = mongoose.model("News", new mongoose.Schema({
  title: String,
  category: String,
  imageUrl: String,
  content: String,
  publishedAt: Date,
}));

app.get('/api/news', async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const news = await News.find(query).sort({ publishedAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));