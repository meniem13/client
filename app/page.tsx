"use client";

import axios from "axios";

const page = () => {
  async function fetchBooks() {
    try {
      const response = await axios.get(
        "https://serverrr-git-main-meniem13s-projects.vercel.app/apias",
        {
          withCredentials: true, // optional, only if your server uses cookies
        }
      );

      console.log("Server data:", response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div>
        <button onClick={fetchBooks}>submit</button>
      </div>
    </div>
  );
};

export default page;
