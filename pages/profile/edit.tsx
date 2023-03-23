import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-400" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="mt-1">
          <input
            id="email"
            className="rounded-md shoadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 appearance-none w-full px-3 py-2 border border-gray-300"
            type="email"
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <div className="mt-1">
          <div className="flex rounded-sm shadow-sm">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="input"
              type="number"
              className="rounded-l-none rounded-md shoadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 appearance-none w-full px-3 py-2 border border-gray-300"
              required
            />
          </div>
        </div>
      </div>

      <button className="mt-5 w-full  bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
