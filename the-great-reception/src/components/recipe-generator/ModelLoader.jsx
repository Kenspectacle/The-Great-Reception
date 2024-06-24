import React, { useState, useEffect } from "react";

const ModelLoader = ({ setStatusParent }) => {
  const [status, setStatus] = useState("waiting"); // waiting, success, error

  useEffect(() => {
    const loadModel = async () => {
      try {
        const response = await fetch("/api/runpod_load", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (result.success) {
          setStatus("success");
          setStatusParent("success");
        } else {
          setStatus("error");
          setStatusParent("error");
        }
      } catch (error) {
        setStatus("error");
        setStatusParent("error");
      }
    };

    loadModel();
  }, []);

  const getStatusIndicator = () => {
    switch (status) {
      case "waiting":
        return (
          <div>
            <span role="img" aria-label="loading">
              🟡
            </span>{" "}
            Model is loading, which might take up to 60 seconds. We dont have
            the est 8k a year to have a model runnings 24/7 :) (yet)
          </div>
        );
      case "success":
        return (
          <div>
            <span role="img" aria-label="success">
              🟢
            </span>{" "}
            Model is ready for requests.
          </div>
        );
      case "error":
        return (
          <div>
            <span role="img" aria-label="error">
              🔴
            </span>{" "}
            Model failed to load, service not available.
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg text-center">
        {getStatusIndicator()}
      </div>
    </div>
  );
};

export default ModelLoader;
