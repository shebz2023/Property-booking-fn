import { MY_BOOKINGS } from "../../services/api";
import { useQuery } from "@apollo/client";
import LoadingSkeleton from "../../components/LoadingSkeleton";

export default function MyBookings() {
  interface MyBooking {
    id: string;
    property: Property;
    location: string;
    status: string;
  }
  interface Property{
    title:string;
  }

  const { loading, error, data } = useQuery(MY_BOOKINGS);

  if (loading) return <LoadingSkeleton />;
  if (error) return `Error! ${error.message}`;
  console.log(data, "my bookings");

  return (
    <>
      <div className="w-full text-white">
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-6">My bookings</h2>
          {data?.myBookings.length === 0  ? (
            <p className="text-neutral-400">
              You haven't added any bookings yet. Start by adding one!
            </p>
          ) : (
            <ul className="space-y-4">
              {data.myBookings.map((myBooking: MyBooking) => (
                <li
                  key={myBooking.id}
                  className="flex justify-between items-center bg-neutral-900 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="text-md font-semibold tracking-widest font-poppins">{myBooking.property.title}</h3>
                    <p className="text-neutral-300">{myBooking.status}</p>
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
