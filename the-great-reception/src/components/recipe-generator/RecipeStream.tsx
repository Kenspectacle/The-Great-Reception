import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

interface jsonRecipePrompt {
  data: any;
}

const RecipeStream: React.FC<jsonRecipePrompt> = ({ data }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const proxyUrl = "/api/runpod_proxy";
  // const streamProxyUrl = "/api/runpod_stream";
  const streamProxyUrl = "/api/runpod_test";

  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    const fetchJobIdAndStreamResponse = async () => {
      try {
        const response = await axios.post(proxyUrl, { input: data });

        const jobId = response.data.id;
        const streamUrl = `${streamProxyUrl}?jobId=${jobId}`;

        const response2 = await axios.post(streamUrl);

        // const eventSource = new EventSource(streamUrl);

        // eventSource.onmessage = (event) => {
        //   console.log(event.data);
        //   const data = JSON.parse(event.data);
        //   if (data.o) {
        //     setHtmlContent((prevContent) => prevContent + data.o);
        //   }
        // };

        // eventSource.onerror = (error) => {
        //   console.error("EventSource failed:", error);
        //   eventSource.close();
        // };
      } catch (error) {
        console.error("Error fetching job ID or streaming response:", error);
      }
    };

    fetchJobIdAndStreamResponse();
  }, [data]);

  return (
    <div>
      <h1>Recipe Streaming</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default RecipeStream;
