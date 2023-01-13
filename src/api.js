import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID PGozjyjKPnc7mnk1_kLl0_9ov3nJGrX33RzjqWwlDXQ",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
