import { CDN_URL } from "../commons/constants";

/*const style = {
  backgroundColor: "lightgray",
};*/

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card" /*style={style}*/>
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      <div className="res-name-div">
        <h3 className="res-name" /*style={{ color: "pink" }}*/>{name}</h3>
      </div>
      <div className="cuisines-div">
        <h5 className="res-cuisines">{cuisines.join(", ")}</h5>
      </div>
      <h5 className="rating-count">{avgRating + " stars"}</h5>
      <h5 className="cost-for-two">{costForTwo}</h5>
      <h5 className="del-est">{sla?.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
