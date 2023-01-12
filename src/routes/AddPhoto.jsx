import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPhoto = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [captions, setCaptions] = useState("");
  const [secret, setSecret] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const addPhoto = async (e) => {
    e.preventDefault();
    if (secret === "password") {
      await fetch("http://localhost:3001/photos", {
        method: "POST",
        body: JSON.stringify({
          imageUrl: imageUrl,
          captions: captions,
          createdAt: "12/02/03",
          updatedAt: "12/08/2022",
          secret: secret,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate("/photos")
    } else if(secret !== "password"){
      setError("You are not authorized");
    }
  };


  return (
    <>
     
      <div className="containerr  ">
        {error && <div className="error-msg ">{error}</div>}
        <form className="justify-center my-8"  onSubmit={addPhoto}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
            Image Url:
            <input
              className="block w-5/6 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              data-testid="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Captions:
            <input
              className="block w-5/6 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              
              data-testid="captions"
              value={captions}
              onChange={(e) => setCaptions(e.target.value)}
            />
          </label>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Secret:
            <input
              className="block w-5/6 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
             
              value={secret}
              data-testid="secret"
              onChange={(e) => setSecret(e.target.value)}
            />
          </label>
          <input className="text-white  w-5/6  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit" value="Submit" data-testid="submit" />
        </form>

      </div>
    </>
  );
};

export default AddPhoto;
