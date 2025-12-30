function BookingCard({ slot, onBook, onCancel }) {
  return (
    <div className="p-4 border rounded bg-white">
      <p className="font-semibold">{slot.time}</p>
      {slot.booked ? (
        <button
          onClick={() => onCancel(slot.id)}
          className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
        >
          Cancel
        </button>
      ) : (
        <button
          onClick={() => onBook(slot.id)}
          className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
        >
          Book
        </button>
      )}
    </div>
  );
}

export default BookingCard;
