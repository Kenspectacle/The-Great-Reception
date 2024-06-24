export default async function handler(req, res) {
  const apiKey =
    process.env.RUNPOD_API_KEY || "VAB1XOJ27C06LI7RX35HFTXY9COMSGVK9HUOJ04V";
  const endpointId = process.env.RUNPOD_ENDPOINT_ID || "myoxqxv0mw5osj";

  if (!apiKey || !endpointId) {
    res.status(500).json({ error: "API key or Endpoint ID is missing" });
    return;
  }

  const url = `https://api.runpod.ai/v2/${endpointId}/runsync`;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  const payload = {
    input: {
      load_model: true,
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
