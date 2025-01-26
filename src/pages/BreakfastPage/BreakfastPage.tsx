import Header from "../../components/Header/Header";
import { Order } from "../../components/Order/Order";

const BreakfastPage = () => {
  return (
    <div>
      <div>
        <Header />

        <Order
          price={10}
          name="Pizza"
          description="Cheese pizza"
          color="yellow"
        />
      </div>
    </div>
  );
};

export default BreakfastPage;
