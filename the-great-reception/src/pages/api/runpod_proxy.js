import axios from "axios";

const apiUrl = "https://api.runpod.ai/v2/myoxqxv0mw5osj/run";
const apiKey = "VAB1XOJ27C06LI7RX35HFTXY9COMSGVK9HUOJ04V";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(apiUrl, req.body, {
        headers: {
          accept: "application/json",
          authorization: apiKey,
          "Content-Type": "application/json",
        },
      });

      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching job ID:", error);
      res
        .status(error.response?.status || 500)
        .json({ error: "Error fetching job ID" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
