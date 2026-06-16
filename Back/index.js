import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS is now enabled to allow requests from any origin
app.use(cors({
  origin: "*", 
  methods: ["GET"],
}));
app.use(express.json());

// Root route to ensure the service shows as active
app.get("/", (req, res) => {
  res.send("API is active and running.");
});

app.get("/api/stats", async (req, res) => {
  const headers = {
    Authorization: `ApeKey ${process.env.APE_KEY}`,
  };

  try {
    const [statsRes, lastRes, resultsRes] = await Promise.all([
      fetch("https://api.monkeytype.com/users/stats", { headers }),
      fetch("https://api.monkeytype.com/results/last", { headers }),
      fetch("https://api.monkeytype.com/results?limit=10", { headers }),
    ]);

    const statsData = await statsRes.json().catch(() => null);
    const lastData = await lastRes.json().catch(() => null);

    let resultsData;
    const rawResultsText = await resultsRes.text();

    try {
      resultsData = JSON.parse(rawResultsText);
    } catch (e) {
      resultsData = { data: [] };
    }

    const historyRaw =
      Array.isArray(resultsData?.data)
        ? resultsData.data
        : resultsData?.data?.results ||
          resultsData?.results ||
          [];

    const history = historyRaw.map((x) => ({
      wpm: x.wpm ?? 0,
      acc: x.acc ?? x.accuracy ?? 0,
      timestamp: x.timestamp ?? null,
    }));

    res.json({
      statsData: statsData?.data ?? null,
      lastData: lastData?.data ?? null,
      history
    });
  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});