import BookingCard from "./BookingCard";

function Calendar({ slots, onBook, onCancel }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {slots.map((slot) => (
        <BookingCard
          key={slot.id}
          slot={slot}
          onBook={onBook}
          onCancel={onCancel}
        />
      ))}
    </div>
  );
}

export default Calendar;
