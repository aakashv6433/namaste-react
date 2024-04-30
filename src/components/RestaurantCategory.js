import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  onCategoryToggle,
  isExpanded,
}) => {
  const handleClick = () => {
    onCategoryToggle();
  };

  return (
    <div>
      <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-md p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{isExpanded ? "🔼" : "🔽"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
