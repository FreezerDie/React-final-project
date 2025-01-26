import React from "react";
import "./OrderStyle.css";

interface OrderProps {
  price: number;
  description: string;
  name: string;
  color?: string;
}

export const Order: React.FC<OrderProps> = ({
  price,
  description,
  name,
  color,
}) => {
  return (
    <div className="order-container">
      <h1 style={{ color: `${color}` }}>${price}</h1>
      <h2>{name}</h2>
      <p>{description}</p>
      <button
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = `dark${color}`)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = `${color}`)
        }
        style={{ backgroundColor: `${color}` }}
      >
        ORDER NOW
      </button>
    </div>
  );
};
