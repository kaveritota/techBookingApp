import { useState } from "react";
import CategorySelector from "../components/CategorySelector";
import Calendar from "../components/Calendar";

const initialSlots = [
  { id: 1, time: "10:00 AM", booked: false },
  { id: 2, time: "11:00 AM", booked: false },
];

function UserDashboard() {
  const [category, setCategory] = useState("Cat 1");
  const [slots, setSlots] = useState(initialSlots);

  const bookSlot = (id) => {
    setSlots(slots.map(s => s.id === id ? { ...s, booked: true } : s));
  };

  const cancelSlot = (id) => {
    setSlots(slots.map(s => s.id === id ? { ...s, booked: false } : s));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book Technician</h1>
      <CategorySelector selected={category} setSelected={setCategory} />
      <Calendar slots={slots} onBook={bookSlot} onCancel={cancelSlot} />
    </div>
  );
}

export default UserDashboard;
