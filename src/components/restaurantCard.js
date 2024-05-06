import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-3 pb-4 w-[300px] bg-slate-200 rounded-md group hover:bg-slate-50 transition-opacity duration-300"
    >
      <img
        className="block w-full h-[200px] object-cover rounded-t-md opacity-100 group-hover:opacity-50 transition-opacity"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex h-[35px] mt-4 mb-2 justify-center align-middle overflow-hidden">
        <h3 className="font-bold text-lg text-center text-slate-800 group-hover:text-gray-500 transition-colors">
          {name}
        </h3>
      </div>
      <div className="h-[48px] mx-3 text-center overflow-hidden mb-3 flex justify-center items-center text-slate-400">
        <h5 className="italic group-hover:text-slate-400 transition-colors">
          {cuisines.length > 0 ? (
            cuisines.slice(0, 3).map((cuisine, index) => (
              <span key={index}>
                {cuisine}
                {index < cuisines.length - 1 && index < 2 && ", "}{" "}
                {/* Add comma for all but the last item */}
              </span>
            ))
          ) : (
            <span>No cuisines available</span>
          )}
        </h5>
      </div>

      <h5 className="text-center mb-3 text-slate-600 group-hover:text-gray-400 transition-colors">
        {avgRating + " stars"}
      </h5>
      <h5 className="text-center mb-3 text-slate-600 group-hover:text-gray-400 transition-colors">
        {costForTwo}
      </h5>
      <h5 className="text-center text-slate-600 group-hover:text-gray-400 transition-colors">
        {sla?.slaString}
      </h5>
    </div>
  );
};

export const withOffer = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const aggregatedDiscountInfo = resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div>
        {aggregatedDiscountInfo && (
          <label className="absolute mx-3 p-1 bg-gray-800 text-white rounded-md ">
            {aggregatedDiscountInfo.header +
              " " +
              aggregatedDiscountInfo.subHeader}
          </label>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
