import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { Order } from "../../components/Order/Order";
import { productDinnerSelector } from "../../redux/selectors";
import { MealCircle } from "../../components/MealCircle/MealCircle";

const DinnerPage = () => {
  const dinnerMeals = useSelector(productDinnerSelector);

  console.log("dinnerMeals", dinnerMeals);

  return (
    <div>
      <div>
        <Header />
        <MealCircle meals={dinnerMeals} color="red" />
        <Order price={10} name="Pizza" description="Cheese pizza" color="red" />
      </div>
    </div>
  );
};

export default DinnerPage;
