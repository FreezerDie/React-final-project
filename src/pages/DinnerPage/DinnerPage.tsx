import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
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
      </div>
    </div>
  );
};

export default DinnerPage;
