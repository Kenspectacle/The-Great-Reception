import axios from "axios";

export default async function handler(req, res) {
  const apiKey =
    process.env.RUNPOD_API_KEY || "VAB1XOJ27C06LI7RX35HFTXY9COMSGVK9HUOJ04V";
  const endpointId = process.env.RUNPOD_ENDPOINT_ID || "myoxqxv0mw5osj";
  const prompt = "cold dog";

  if (!apiKey || !endpointId) {
    res.status(500).json({ error: "API key or Endpoint ID is missing" });
    return;
  }

  const submitJobAndStreamOutput = async (apiKey, endpointId, prompt) => {
    try {
      const url = `https://api.runpod.ai/v2/${endpointId}/run`;
      const headers = {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      };
      const parsedPrompt = JSON.parse(req.query.data);
      const payload = {
        input: JSON.parse(parsedPrompt),
      };

      console.log("Submitting job with payload:", JSON.stringify(payload));
      const response = await axios.post(url, payload, { headers });
      console.log("Job submission response:", response.data);

      if (response.status !== 200) {
        console.error(`Error submitting job: ${response.data}`);
        res
          .status(response.status)
          .send(`Error submitting job: ${response.data}`);
        return;
      }

      const taskId = response.data.id;
      if (!taskId) {
        console.error("Failed to get a job ID from the response.");
        res.status(500).send("Failed to get a job ID from the response.");
        return;
      }

      const statusUrl = `https://api.runpod.ai/v2/${endpointId}/stream/${taskId}`;

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");
      res.flushHeaders();

      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Polling interval

        const getStatus = await axios.get(statusUrl, { headers });

        if (getStatus.status === 200) {
          const statusResponse = getStatus.data;

          if (statusResponse.stream && statusResponse.stream.length > 0) {
            statusResponse.stream.forEach((item) => {
              // console.log(">>> ", item.output.o);
              res.write(`data: ${item.output.o}\n\n`);
              res.flush();
            });
          }

          if (statusResponse.status === "COMPLETED") {
            res.write("data: [DONE]\n\n");
            res.end();
            break;
          }
        } else {
          console.error(`Error streaming job output: ${getStatus.data}`);
          res.write("data: [ERROR]\n\n");
          res.end();
          break;
        }
      }
    } catch (error) {
      console.error("Error in submitJobAndStreamOutput:", error);
      res.write("data: [ERROR]\n\n");
      res.end();
    }
  };

  await submitJobAndStreamOutput(apiKey, endpointId, prompt);
}
