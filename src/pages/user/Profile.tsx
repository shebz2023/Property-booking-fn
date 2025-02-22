export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="text-4xl font-Urbanist text-purple-600 text-center w-full p-6">
        Update Profile
      </div>{" "}
      <div className="text-neutral-300 mb-2">SWITCH roles </div>
      <div className="text-neutral-500 text-4xl hover:text-neutral-400 duration-300 cursor-pointer">
        Become a Seller{" "}
      </div>
    </div>
  );
}
