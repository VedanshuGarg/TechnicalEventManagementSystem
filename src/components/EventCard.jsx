export default function EventCard({ event }) {
  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <h2 className="text-lg font-semibold">{event.name}</h2>
      <p className="text-gray-600">{event.description}</p>
      <p className="text-sm text-gray-400">By: {event.vendor}</p>
    </div>
  );
}
