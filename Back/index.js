import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const headers = {
  Authorization: `ApeKey ${process.env.APE_KEY}`,
};

app.get("/api/stats", async (req, res) => {
  try {
    const [statsRes, lastRes, resultsRes] = await Promise.all([
      fetch("https://api.monkeytype.com/users/stats", { headers }),
      fetch("https://api.monkeytype.com/results/last", { headers }),
      fetch("https://api.monkeytype.com/results?limit=10", { headers }),
    ]);

    // ---- SAFE JSON PARSING ----
    const statsData = await statsRes.json().catch(() => null);
    const lastData = await lastRes.json().catch(() => null);

    // results can break (HTML or different structure)
    let resultsData;
    const rawResultsText = await resultsRes.text();

    try {
      resultsData = JSON.parse(rawResultsText);
    } catch (e) {
      console.log(" results endpoint did not return JSON");
      resultsData = { data: [] };
    }

    // ---- SAFE ARRAY HANDLING ----
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

    // ---- SAFE RESPONSE ----
   res.json({
    statsData,
    lastData,
    resultsData
});
  } catch (err) {
    console.log(" Backend error:", err);

    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`running on ${process.env.PORT || 3001}`);
});