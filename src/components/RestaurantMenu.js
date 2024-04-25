import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return typeof itemCards === "undefined" ? (
    <h3>looks like this restaurant's menu api url may have changed</h3>
  ) : (
    <div className="menu">
      <h2 className="font-bold text-xl mb-2 mt-5 pl-2">{name}</h2>
      <p className="mb-5 pl-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3 className="text-lg mb-2 pl-3">
        <span className="underline font-bold">Menu</span> :{" "}
        <span style={{ fontWeight: 500 }}>
          ({itemCards.length} Recommended Items)
        </span>
      </h3>
      <ul class="list-disc pl-10">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} ---- Rs.{item.card.info.price / 100}/-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
