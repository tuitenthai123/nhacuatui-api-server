const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nhaccuatuiApi = require("nhaccuatui-api");

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

app.get("/get-home", async (req, res) => {
  try {
    const data = await nhaccuatuiApi.getHome();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home data", error });
  }
});

// Get topic data
app.get("/get-topic", async (req, res) => {
  try {
    const data = await nhaccuatuiApi.getTopic();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching topic data", error });
  }
});

// Get song info by key
app.post("/get-song", async (req, res) => {
  const { key } = req.body;
  if (!key) return res.status(400).json({ message: "Key is required" });

  try {
    const data = await nhaccuatuiApi.getSong(key);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching song data", error });
  }
});

// Get playlist info by key
app.post("/get-playlist", async (req, res) => {
  const { key } = req.body;
  if (!key) return res.status(400).json({ message: "Key is required" });

  try {
    const data = await nhaccuatuiApi.getPlaylist(key);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching playlist data", error });
  }
});

// Get lyrics by key
app.post("/get-lyric", async (req, res) => {
  const { key } = req.body;
  if (!key) return res.status(400).json({ message: "Key is required" });

  try {
    const data = await nhaccuatuiApi.getLyric(key);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lyric data", error });
  }
});

// Get Top 20 songs
app.get("/get-top20", async (req, res) => {
  try {
    const data = await nhaccuatuiApi.getTop20();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching top 20 songs", error });
  }
});

// Get Top 100 songs by key
app.post("/get-top100", async (req, res) => {
  const { key } = req.body;
  if (!key) return res.status(400).json({ message: "Key is required" });

  try {
    const data = await nhaccuatuiApi.getTop100(key);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching top 100 songs", error });
  }
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
