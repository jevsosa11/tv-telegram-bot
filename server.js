import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const BOT_TOKEN = "8392798222:AAHP7E1S-SrsaLTRebVewPKera7bHoGZ4sU";
const CHAT_ID = "6218768132";

app.post("/tv", async (req, res) => {
  const msg = req.body.msg;

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: msg
    })
  });

  res.send("OK");
});

app.listen(process.env.PORT || 3000);
