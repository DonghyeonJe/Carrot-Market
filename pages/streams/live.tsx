import type { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4 divide-y-2">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div className="pt-4">
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <h3 className="text-gray-700 text-lg mt-2">Let's try survive</h3>
        </div>
      ))}
      <button className="fixed bottom-24 right-5 bg-orange-400 rounded-full text-white p-4 shadow-xl hover:bg-orange-500 cursor-pointer transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="white"
        >
          <path d="M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z" />
        </svg>
      </button>
    </div>
  );
};

export default Live;
