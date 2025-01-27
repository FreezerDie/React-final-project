import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { productBreakfastSelector } from "../../redux/selectors";
import { MealCircle } from "../../components/MealCircle/MealCircle";

const BreakfastPage = () => {
  const breakfastMeals = useSelector(productBreakfastSelector);
  return (
    <div>
      <div>
        <Header />
        <MealCircle meals={breakfastMeals} color="green" />
      </div>
    </div>
  );
};

export default BreakfastPage;
