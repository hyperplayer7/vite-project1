import React, { useState, useEffect } from "react";
import axios from "axios";

function Resume() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/hyperplayer7/jsonresume/main/resume.json")
      .then((response) => {
        setResumeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{resumeData.basics && resumeData.basics.name}</h1>
      <p>{resumeData.basics && resumeData.basics.email}</p>
      <p>{resumeData.basics && resumeData.basics.summary}</p>
    </div>
  );
}

export default Resume;