import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    // const {resName, cuisine, rating, eta}=props;
    const {resData} = props;
    
    const {cloudinaryImageId,
        name,
        cuisines,
        avgRating
    } = resData?.info;
    return (
        // <div className="res-card" style={styleCard}>
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" alt="res-logo"
         src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} ⭐⭐⭐⭐</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};
export default RestaurantCard;