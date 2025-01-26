import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Product } from "../../types";
import { Order } from "../Order/Order";
import "./MealCircleStyle.css";

interface MealCircleProps {
  meals: Product[];
  color: string;
}

export const MealCircle: React.FC<MealCircleProps> = ({ meals, color }) => {
  const [currentId, setCurrentId] = useState(0);

  const handleNext = () => {
    setCurrentId((prevId: number) => (prevId + 1) % meals.length);
  };

  const handlePrev = () => {
    setCurrentId(
      (prevId: number) => (prevId - 1 + meals.length) % meals.length
    );
  };

  const currentMeal = meals[currentId];

  console.log("meals", meals);
  console.log("currentMeal", currentMeal);
  return (
    <div>
      <ul className="meals-ul">
        {meals.map((meal) => (
          <li
            key={meal.id}
            className={meal.id === currentMeal.id ? "active-meal" : ""}
          >
            <img src={meal.image} alt={meal.name} />
          </li>
        ))}
      </ul>
      <div className="control-buttons">
        <button onClick={handlePrev}>
          <GoArrowLeft />
        </button>
        <button onClick={handleNext}>
          <GoArrowRight />
        </button>
      </div>
      <Order
        price={currentMeal.price}
        name={currentMeal.name}
        description={currentMeal.description}
        color={color}
      />
    </div>
  );
};
