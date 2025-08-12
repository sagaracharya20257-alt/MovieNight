import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import GuestList from "./components/GuestList";
import Counter from "./components/Counter";
import PlanForm from "./components/PlanForm";

export default function App() {
  const [plan, setPlan] = useState({
    title: "",
    date: "",
    location: "",
  });

  const handlePlanChange = (field, value) => {
    setPlan((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>🎬 Movie Night Planner</h1>

      <MovieCard
        title="Inception"
        genre="Sci-Fi"
        posterUrl="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg"
        rating={8.8}
      />

      <hr />

      <GuestList />

      <hr />

      <Counter />

      <hr />

      <PlanForm plan={plan} onPlanChange={handlePlanChange} />

      <h2>📅 Live Preview</h2>
      <p>
        <strong>Movie:</strong> {plan.title || "Not set"}
      </p>
      <p>
        <strong>Date:</strong> {plan.date || "Not set"}
      </p>
      <p>
        <strong>Location:</strong> {plan.location || "Not set"}
      </p>
    </div>
  );
}
