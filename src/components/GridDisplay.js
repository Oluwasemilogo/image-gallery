import React from "react";
import ImageData from "./ImageData";
import { useSearch } from "../SearchContext"; 

export const GridDisplay = () => {
  const { searchQuery } = useSearch(); 

 
  const filteredImages = ImageData.filter((image) => {
    const lowerCaseTags = image.tag.map((tag) => tag.toLowerCase());
    return lowerCaseTags.includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 px-4 my-8">
        {searchQuery === "" 
          ? 
            ImageData.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <img
                  src={image.path}
                  alt={`Image ${index + 1}`}
                  className=" h-[350px]  object-cover"
                />
                <div className="p-4">
                  <ul className="flex space-x-2">
                    {image.tag.map((tag, tagIndex) => (
                      <li key={tagIndex} className="text-[#385A64] text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          : 
            filteredImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <img
                  src={image.path}
                  alt={`Image ${index + 1}`}
                  className=" h-[350px]  object-cover"
                />
                <div className="p-4">
                  <ul className="flex space-x-2">
                    {image.tag.map((tag, tagIndex) => (
                      <li key={tagIndex} className="text-[#385A64] text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
