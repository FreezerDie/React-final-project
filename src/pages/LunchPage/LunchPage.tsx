import Header from "../../components/Header/Header";
import { Order } from "../../components/Order/Order";

const LunchPage = () => {
  return (
    <div>
      <div>
        <Header />

        <Order
          price={10}
          name="Pizza"
          description="Cheese pizza"
          color="blue"
        />
      </div>
    </div>
  );
};

export default LunchPage;
