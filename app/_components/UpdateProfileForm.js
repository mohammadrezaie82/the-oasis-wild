"use client";

import { useState } from "react";
import { updateGuest } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest, children }) {
  const [count, setCount] = useState();

  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-1 px-6 sm:px-12 sm: py-8 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label className="text-sm sm:text-lg">Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className=" px-5 py-1 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 text-sm sm:text-lg"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm sm:text-lg">Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-5 py-1 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 text-sm sm:text-lg"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality" className="text-sm sm:text-lg">
            Where are you from?
          </label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-3 sm:h-5 rounded-sm "
          />
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID" className="text-sm sm:text-lg">
          National ID number
        </label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-1 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm sm:text-lg"
        />
      </div>

      <div className="flex justify-center sm:justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
