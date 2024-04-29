import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between items-center"
        >
          <div className="flex-1 pr-4">
            <div className="py-4">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs mb-3 mt-3 pr-16">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="flex-none w-36 h-36 pl-3 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 right-0">
              <button className="p-2 bg-black text-white shadow-md w-19 h-9 text-xs rounded-md">
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
