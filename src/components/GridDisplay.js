import React, { useRef, useState } from "react";
import ImageData from "./ImageData";
import { useSearch } from "../SearchContext";
import { useDrag, useDrop } from "react-dnd";

// Define a Card component
const Card = ({ image, index, moveImage }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { type: "image", id: image.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={ref}
      style={{ opacity }}
      className="bg-white rounded-lg shadow-md"
    >
      <img
        src={image.path}
        alt={image.tag}
        className="h-[350px] object-cover"
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
  );
};

export const GridDisplay = () => {
  const { searchQuery } = useSearch();

  const filteredImages = ImageData.filter((image) => {
    const lowerCaseTags = image.tag.map((tag) => tag.toLowerCase());
    return lowerCaseTags.includes(searchQuery.toLowerCase());
  });

  const [images, setImages] = useState(ImageData); // Initialize with ImageData
  const moveImage = (dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];
      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 px-4 my-8">
        {searchQuery === ""
          ? images.map((image, index) => (
              <Card
                key={index}
                image={image}
                index={index}
                moveImage={moveImage}
              />
            ))
          : filteredImages.map((image, index) => (
              <Card
                key={index}
                image={image}
                index={index}
                moveImage={moveImage}
              />
            ))}
      </div>
    </div>
  );
};
