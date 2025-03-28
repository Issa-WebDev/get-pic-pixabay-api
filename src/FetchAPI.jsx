import React, { useEffect } from "react";
import { useState, createContext } from "react";

export const DataContext = createContext();

const FetchDataProvider = ({ children }) => {
  const [imagesData, setImagesData] = useState(() => {
    const savedImages = localStorage.getItem("imagesData");
    return savedImages ? JSON.parse(savedImages) : [];
  });
  const [query, setQuery] = useState(() => {
    return localStorage.getItem("query");
  });

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchImages = async (query) => {
    const endpoint = encodeURIComponent(query);
    try {
      const response = await fetch(
        `${apiUrl}?key=${apiKey}&q=${endpoint}&image_type=photo&per_page=50`
      );
      const data = await response.json();
      if (data && data.hits.length > 0) {
        setImagesData(data.hits);

        // Sauvegarder les images dans localStorage
        localStorage.setItem("imagesData", JSON.stringify(data.hits));
        localStorage.setItem("query", query);
      } else {
        setImagesData([]);
        setQuery("");
        localStorage.removeItem("imagesData"); // Supprimer si aucune image trouvée
        localStorage.removeItem("query"); // Supprimer si aucune image trouvée
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages(query);
  }, []);

  return (
    <DataContext.Provider value={{ query, setQuery, imagesData, fetchImages }}>
      {children}
    </DataContext.Provider>
  );
};

export default FetchDataProvider;
