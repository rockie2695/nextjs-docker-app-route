"use client";
import { useEffect } from "react";

const TestFetch = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log("test");
    return () => {
      console.log("Cleanup");
    };
  }, []);

  return <div>TestFetch</div>;
};

export default TestFetch;
