import { MY_PROPERTIES } from "../../services/api";
import { useQuery } from "@apollo/client";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import { useAuth } from "../../utils/authContext";

export default function MyProperties() {
  interface MyProperty {
    id: string;
    title: string;
    location: string;
  }
  const { user } = useAuth();

  const { loading, error, data } = useQuery(MY_PROPERTIES);

  if (loading) return <LoadingSkeleton />;
  if (error) return `Error! ${error.message}`;
  console.log(data, "my properties");

  return (
    <>
      {user.role === "HOST" ? (
        <div className="w-full text-white p-6">
          {/* Add Property Section */}
          <div className="bg-black p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-6">Create New Property</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  className="block w-full bg-neutral-800 text-white py-2 px-4 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  id="content"
                  name="content"
                  placeholder="Enter content"
                  className="block w-full bg-neutral-800 text-white py-2 px-4 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <textarea
                id="content"
                name="content"
                placeholder="Enter Image url"
                className="block mb-4 text-sm text-white py-2 px-4 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>

              <button
                type="submit"
                className=" bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-all"
              >
                Add Property
              </button>
            </form>
          </div>

          {/* Properties List Section */}
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-6">My Properties</h2>
            {data?.myProperties.length === 0 ? (
              <p className="text-neutral-400">
                You haven't added any properties yet. Start by adding one!
              </p>
            ) : (
              <ul className="space-y-4">
                {data.myProperties.map((myProperty: MyProperty) => (
                  <li
                    key={myProperty.id}
                    className="flex justify-between items-center bg-neutral-900 p-4 rounded-lg"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">
                        {myProperty.title}
                      </h3>
                      <p className="text-neutral-300">{myProperty.location}</p>
                    </div>
                    <div className="flex gap-4">
                      <button className="cursor-pointer bg-black border border-neutral-950 text-white py-1 px-3 rounded hover:bg-neutral-950 hover:border-neutral-600">
                        Update
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
      ) : (
        <div className="flex flex-col justify-center items-center text-purple-600 text-2xl w-full gap-4">
          <p className="">Become a Host to Start Making Properties</p>
          <p className="text-neutral-500 font-poppins">Navigate to Profile</p>
        </div>
      )}
    </>
  );
}
