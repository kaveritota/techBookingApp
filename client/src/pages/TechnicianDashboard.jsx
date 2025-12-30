import NotificationBadge from "../components/NotificationBadge";

function TechnicianDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">
        Technician Bookings <NotificationBadge count={2} />
      </h2>
      <p className="mt-4">Booked slots will appear here.</p>
    </div>
  );
}

export default TechnicianDashboard;
