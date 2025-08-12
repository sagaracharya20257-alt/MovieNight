import { useState } from "react";

export default function GuestList() {
  const guestsArr = ["Alice", "Bob", "Charlie", "Dana", "Eve"];
  const [guests, setGuests] = useState([]);

  const addRandomGuest = () => {
    const randomGuest =
      guestsArr[Math.floor(Math.random() * guestsArr.length)];
    setGuests((prev) => [...prev, randomGuest]);
  };

  const clearList = () => setGuests([]);

  return (
    <div className="guest-list">
      <h2>🎟 Guest List</h2>
      <button onClick={addRandomGuest}>Add Random Guest</button>
      <button onClick={clearList}>Clear List</button>
      <ul>
        {guests.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
