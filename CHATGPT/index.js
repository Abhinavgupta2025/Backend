const express = require("express");
const main = require("./gemini");

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { msg } = req.body;

    if (!msg) {
      return res.status(400).json({ error: "Message required" });
    }

    const answer = await main(msg);

    res.send(answer);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("🚀 Listening at port 4000");
});

