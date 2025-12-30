function NotificationBadge({ count }) {
  if (count === 0) return null;

  return (
    <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
      {count}
    </span>
  );
}

export default NotificationBadge;
