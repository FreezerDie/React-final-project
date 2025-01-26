import React from "react";
import Header from "../../components/Header/Header";
import { Order } from "../../components/Order/Order";

const Home: React.FC = () => {
  return (
    <div>
      <Header />

      <Order price={10} name="Pizza" description="Cheese pizza" color="red" />
    </div>
  );
};

export default Home;
