// pages/api/runpod_test.js
import fetch from "node-fetch";

const API_KEY = "VAB1XOJ27C06LI7RX35HFTXY9COMSGVK9HUOJ04V";
const SERVER_ENDPOINT_ID = "myoxqxv0mw5osj";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { jobid } = req.query;

    if (!jobid) {
      res.status(400).json({ error: "Job ID is required" });
      return;
    }

    const url = `https://api.runpod.ai/v2/${SERVER_ENDPOINT_ID}/run`;
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };
    const payload = {
      input: {
        prompt: "Describe the process of photosynthesis.",
        answerType: "stream",
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        res.status(response.status).json({ error: "Error submitting job" });
        return;
      }

      const responseJson = await response.json();
      const taskId = responseJson.id;

      if (!taskId) {
        res
          .status(500)
          .json({ error: "Failed to get a job ID from the response." });
        return;
      }

      console.log(`Job ID: ${taskId}`);
      const statusUrl = `https://api.runpod.ai/v2/${SERVER_ENDPOINT_ID}/stream/${taskId}`;

      while (true) {
        const getStatus = await fetch(statusUrl, { headers: headers });

        if (getStatus.status !== 200) {
          console.log(`Error streaming job output: ${await getStatus.text()}`);
          break;
        }

        const statusResponse = await getStatus.json();
        if (statusResponse.stream && statusResponse.stream.length > 0) {
          statusResponse.stream.forEach((item) => {
            process.stdout.write(item.output.text);
          });
        }

        if (statusResponse.status === "COMPLETED") {
          console.log("\nJob completed.");
          break;
        }

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before the next poll
      }

      res.status(200).json({ message: "Streaming completed" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Internal Server Error", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
