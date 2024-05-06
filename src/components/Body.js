import RestaurantCard, { withOffer } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST_API_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithDiscount = withOffer(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API_URL);
    const json = await data.json();
    setListOfRestaurants(
      //optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      //optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center  bg-green-300 m-2">
        <div className="search m-3 p-3">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black w-96 h-[38px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-500 m-4 rounded-lg text-white"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-btn ml-24 p-3 flex items-center">
          <button
            className="px-8 py-2 w-72 bg-orange-500 rounded-lg text-white"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {typeof restaurant.info.aggregatedDiscountInfoV3 === "undefined" ? (
              <RestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCardWithDiscount resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
