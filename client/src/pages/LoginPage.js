import React from "react";

export const LoginPage = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg text-white text-center">Authorization</h1>
      <label htmlFor="" className="text-xs text-gray-400">
        Username:
        <input
          type="text"
          placeholder="Username"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-8 text-xs outline-none placeholder:tet-gray-700"
        />
      </label>
    </form>
  );
};
