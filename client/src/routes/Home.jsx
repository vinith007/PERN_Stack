import React from "react";
import Header from "../components/Header";
import AddReastaurants from "../components/AddReastaurants";
import ReastaurantsList from "../components/ReastaurantsList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddReastaurants />
      <ReastaurantsList />
    </div>
  );
};

export default Home;
