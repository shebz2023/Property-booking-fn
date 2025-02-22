import RenterSideBar from "../../components/Dashboard/RenterSideBar";

export default function RenterDashboard() {
  const bookings = [
    { id: 1, name: "Beachfront Villa", status: "Pending" },
    { id: 2, name: "City Center Apartment", status: "canceled" },
  ];
  return (
    <>
      <RenterSideBar />
      <div className="w-full text-white">
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-6">My bookings</h2>
          {bookings.length === 0 ? (
            <p className="text-neutral-400">
              You haven't added any bookings yet. Start by adding one!
            </p>
          ) : (
            <ul className="space-y-4">
              {bookings.map((booking) => (
                <li
                  key={booking.id}
                  className="flex justify-between items-center bg-neutral-900 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{booking.name}</h3>
                    <p className="text-neutral-300">{booking.status}</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="cursor-pointer bg-black border border-neutral-950 text-white py-1 px-3 rounded hover:bg-neutral-950 hover:border-neutral-600">
                      Cancel
                    </button>
                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      ;
    </>
  );
}
