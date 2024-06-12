import React, { useEffect, useState, useRef } from "react";

interface jsonRecipePrompt {
  json_recipe: any;
}

const RecipeStream: React.FC<jsonRecipePrompt> = ({ json_recipe }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const runpod_api_url =
    "/api/runpod_proxy?data=" + JSON.stringify(json_recipe);

  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    const fetchJobIdAndStreamResponse = async () => {
      try {
        const eventSource = new EventSource(runpod_api_url);

        eventSource.onmessage = (event) => {
          if (event.data === "[DONE]") {
            eventSource.close();
          } else if (event.data === "[ERROR]") {
            console.error("Error streaming job output");
            eventSource.close();
          } else {
            setHtmlContent((prevContent) => prevContent + event.data);
          }
        };

        eventSource.onerror = (error) => {
          console.error("EventSource failed:", error);
          eventSource.close();
        };
      } catch (error) {
        console.error("Error fetching job ID or streaming response:", error);
      }
    };

    fetchJobIdAndStreamResponse();
  }, [json_recipe]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default RecipeStream;
