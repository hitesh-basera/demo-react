import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body=()=>{
    // State variable - superpowerful state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);


//Normal JS variable
    //     let listOfRestaurants = [{
    //         "info": {
    //             "id": "417201",
    //             "name": "Rominus Pizza And Burger",
    //             "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
    //             "cuisines": [
    //                 "Pizzas",
    //                 "Italian",
    //                 "American",
    //                 "Snacks",
    //                 "Desserts",
    //                 "Beverages",
    //                 "Continental"
    //             ],
    //             "avgRating": 4.1,
    //             "sla": {
    //                 "deliveryTime": 23,
    //                 "lastMileTravel": 2.9,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "23 mins",
    //                 "lastMileTravelString": "2.9 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             }
    //     }},
    //     {
    //     "info": {
    //         "id": "417202",
    //         "name": "Rominus Pizza And Burger",
    //         "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
    //         "cuisines": [
    //             "Pizzas",
    //             "Italian",
    //             "American",
    //             "Snacks",
    //             "Desserts",
    //             "Beverages",
    //             "Continental"
    //         ],
    //         "avgRating": 3.8,
    //         "sla": {
    //             "deliveryTime": 23,
    //             "lastMileTravel": 2.9,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "23 mins",
    //             "lastMileTravelString": "2.9 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //         }
    // }},
    // {
    // "info": {
    //     "id": "417203",
    //     "name": "Rominus Pizza And Burger",
    //     "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
    //     "cuisines": [
    //         "Pizzas",
    //         "Italian",
    //         "American",
    //         "Snacks",
    //         "Desserts",
    //         "Beverages",
    //         "Continental"
    //     ],
    //     "avgRating": 4.5,
    //     "sla": {
    //         "deliveryTime": 23,
    //         "lastMileTravel": 2.9,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "23 mins",
    //         "lastMileTravelString": "2.9 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //     }
    // }
    // }
    //         ];
    return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res)=> res.info.avgRating > 4
                );
                setListOfRestaurants(filteredList);
                // listOfRestaurants = listOfRestaurants.filter(
                //     (res)=> res.info.avgRating > 4
                // );
                }}>
                    Top Rated Restaurant
                </button>
        </div>
        <div className="res-container">
            {
                //not using key (not acceptable) << index as key (not recommended - Index as key is an anti pattern) << unique id (best practice)
                listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
        {/* <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />*/}
            {/* <RestaurantCard resName="Meghana Foods" cuisine="Pasta, Wrap, Fast food, Italian" rating="4.1" eta="38"/> */}
            {/* <RestaurantCard resName="KFC" cuisine="Fast Food, Burger, Chicken" rating="4.2" eta="25"/> */}
        </div>
    </div>
    );
};
export default Body;