import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

// ミドルウェア
app.use(cors());

// サーバー起動
app.listen(PORT, console.log(`${PORT}番起動`));
