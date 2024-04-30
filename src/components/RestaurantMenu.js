import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [expandedCategoryIndex, setExpandedCategoryIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleCategoryToggle = (index) => {
    if (expandedCategoryIndex === index) {
      setExpandedCategoryIndex(null);
    } else {
      setExpandedCategoryIndex(index);
    }
  };

  return typeof itemCards === "undefined" ? (
    <h3>Looks like this restaurant's menu API URL may have changed</h3>
  ) : (
    <div className="text-center">
      <h2 className="font-bold text-2xl mt-6 mb-4">{name}</h2>
      <p className="mb-8">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={expandedCategoryIndex === index ? true : false}
          onCategoryToggle={() => handleCategoryToggle(index)}
          isExpanded={expandedCategoryIndex === index ? true : false}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
