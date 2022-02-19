import { GlobeIcon, PhoneIcon } from "@heroicons/react/solid";
import { getInitials } from "../../utils/logToAnalytics";
import EmptyOverview from "./EmptyOverview";

export default function CampgroundOverview({ camp }) {
  console.log(camp);
  if (!camp) {
    return <EmptyOverview />;
  }
  const operator = camp.attributes.operator ? camp.attributes.operator : "N/A";
  return (
    <article>
      {/* Profile header */}
      <div>
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src="https://ipfs.io/ipfs/bafybeidqyu2tbpnqengq6au75yi42jsqiuuqgjr3ure7bzstv6eu2p5lkm"
            alt=""
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <span className="inline-flex items-center justify-center h-28 w-28 rounded-full bg-orange-600">
                <span className="font-medium text-4xl leading-none text-white">
                  {getInitials(camp.attributes.name)}
                </span>
              </span>
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {camp.attributes.name}
                </h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <GlobeIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Website</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <PhoneIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Call</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {camp.attributes.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 sm:mt-2 2xl:mt-5">
        <div className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                href="#details"
                className="border-orange-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                aria-current="page"
              >
                Details
              </a>
              <a
                href="#photos"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                Photos
              </a>
              <a
                href="#reviews"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                Reviews
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Description list */}
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {camp.attributes["region-name"]} ({camp.attributes.latitude},{" "}
              {camp.attributes.longitude})
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Operator</dt>
            <dd className="mt-1 text-sm text-gray-900">{operator}</dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Accommodation</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {camp.attributes["accommodation-type-names"].join(" ,")}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Bookable</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {camp.attributes.bookable ? "Yes" : "No"}
            </dd>
          </div>

          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
              Look no further for an awesome campground with beautiful sunsets
              and mountains, arrive early to camp near one of the many lakes and
              rivers the campground provides. The restrooms are open 24/7 and
              trash is collected every so often. No firearms and large knives
              are allowed on the campground and no hunting, fishing okay.
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
