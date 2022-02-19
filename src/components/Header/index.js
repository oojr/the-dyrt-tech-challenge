import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Example() {
  const [showHeader, setShowHeader] = useState(true);
  if (!showHeader) {
    return null;
  }
  return (
    <div className="relative bg-orange-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span>The Dyrt Tech Challenge by</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a
                href="https://github.com/oojr"
                className="text-white font-bold underline"
              >
                {" "}
                Olajide O. Jr. <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-orage-500 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XIcon
              onClick={() => setShowHeader(false)}
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
