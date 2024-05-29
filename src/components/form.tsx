import React from "react";

export default function Form() {
  return (
    <form className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 overflow-hidden">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="sender_name"
          className="text-sm font-semibold text-black/60 capitalize"
        >
          sender name
        </label>
        <input
          type="text"
          id="sender_name"
          className="px-4 py-2.5 text-sm lg:text-base bg-zinc-100 outline-none border-2 border-transparent focus:border-yellow-500 rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="sender_mobile"
          className="text-sm font-semibold text-black/60 capitalize"
        >
          sender mobile no.
        </label>
        <input
          type="text"
          id="sender_mobile"
          className="px-4 py-2.5 text-sm lg:text-base bg-zinc-100 outline-none border-2 border-transparent focus:border-yellow-500 rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-black/60 capitalize"
        >
          email
        </label>
        <input
          type="text"
          id="email"
          className="px-4 py-2.5 text-sm lg:text-base bg-zinc-100 outline-none border-2 border-transparent focus:border-yellow-500 rounded-md"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="weight"
            className="text-sm font-semibold text-black/60 capitalize"
          >
            weight
          </label>
          <input
            type="text"
            id="weight"
            className="px-4 py-2.5 text-sm lg:text-base bg-zinc-100 outline-none border-2 border-transparent focus:border-yellow-500 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="fragile"
            className="text-sm font-semibold text-black/60 capitalize"
          >
            fragile
          </label>
          <input
            type="text"
            id="fragile"
            className="px-4 py-2.5 text-sm lg:text-base bg-zinc-100 outline-none border-2 border-transparent focus:border-yellow-500 rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="pickup_area"
          className="text-sm font-semibold text-black/60 capitalize"
        >
          pickup area
        </label>
        <select
          id="pickup_area"
          className="px-4 py-2.5 text-sm lg:text-base bg-zinc-100 outline-none border-2 border-transparent focus:border-yellow-500 rounded-md"
        >
          <option value="1">First choice</option>
          <option value="2">Second choice</option>
          <option value="3">Third choice</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="delivery_area"
          className="text-sm font-semibold text-black/60 capitalize"
        >
          delivery area
        </label>
        <select
          id="delivery_area"
          className="px-4 py-2.5 text-sm lg:text-base bg-zinc-100 outline-none border-2 border-transparent focus:border-yellow-500 rounded-md"
        >
          <option value="1">First choice</option>
          <option value="2">Second choice</option>
          <option value="3">Third choice</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="sender_address"
          className="text-sm font-semibold text-black/60 capitalize"
        >
          sender address
        </label>
        <textarea
          rows={3}
          id="sender_address"
          className="px-4 py-2.5 text-sm lg:text-base bg-zinc-100 outline-none border-2 border-transparent focus:border-yellow-500 rounded-md"
        ></textarea>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="reciever_address"
          className="text-sm font-semibold text-black/60 capitalize"
        >
          reciever address
        </label>
        <textarea
          rows={3}
          id="reciever_address"
          className="px-4 py-2.5 text-sm lg:text-base bg-zinc-100 outline-none border-2 border-transparent focus:border-yellow-500 rounded-md"
        ></textarea>
      </div>
    </form>
  );
}
