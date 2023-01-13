import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    try {
      const results = await searchImages(term);
      setImages(results);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
