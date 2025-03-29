import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction} className="relative group flex justify-center">
      <button className="p-2 sm:p-3 rounded-full hover:bg-primary-800 transition-colors text-primary-600">
        <ArrowRightOnRectangleIcon className="h-6 w-6" />
      </button>

      <span className="absolute left-8 top-1/4 -translate-y-1/2 bg-gray-900 text-white text-xs sm:text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ">
        Sign out
      </span>
    </form>
  );
}

export default SignOutButton;
