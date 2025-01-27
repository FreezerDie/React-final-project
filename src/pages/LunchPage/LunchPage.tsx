import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { productLunchSelector } from "../../redux/selectors";
import { MealCircle } from "../../components/MealCircle/MealCircle";

const LunchPage = () => {
  const lunchMeals = useSelector(productLunchSelector);
  return (
    <div>
      <div>
        <Header />
        <MealCircle meals={lunchMeals} color="blue" />
      </div>
    </div>
  );
};

export default LunchPage;
