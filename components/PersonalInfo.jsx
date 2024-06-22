function PersonalInfo() {
  let username = localStorage.getItem("username");
  let email = localStorage.getItem("email");

  return (
    <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
      <div className="rounded  p-6">
        <div className="pb-6">
          <label
            htmlFor="name"
            className="font-semibold text-gray-700 block pb-1"
          >
            Name
          </label>
          <div className="flex">
            <input
              disabled
              id="username"
              className="border-1 rounded-r px-4 py-2 w-full"
              type="text"
              value={username}
            />
          </div>
        </div>
        <div className="pb-4">
          <label
            htmlFor="about"
            className="font-semibold text-gray-700 block pb-1"
          >
            Email
          </label>
          <input
            disabled
            id="email"
            className="border-1 rounded-r px-4 py-2 w-full"
            type="email"
            value={email}
          />
          <span className="text-gray-600 pt-4 block opacity-70">
            Personal login information of your account
          </span>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
