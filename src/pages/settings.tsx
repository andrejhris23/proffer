import Layout from "../components/layouts/Layout"
import { api } from "../utils/api";

// TODO: implements tabs with HeadlessUI for this component, split settings in multiple tabs 
// *** COMPANY TAB MAYBE, PAYMENT (STRIPE SETUP IN THE FUTURE), ACCOUNT INFO...
const Settings = () => {
  const agent = api.user.getAgent.useQuery();

  return (
    <Layout>
      <div className="flex flex-col flex-1 xl:pl-64">
          <div className="py-6">
            <div className="px-4 mx-auto sm:px-6 md:px-8">
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            </div>
            <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">   
              <div className="mt-6">
                <p className="text-base font-bold text-gray-900">Profile</p>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  Edit your information
                </p>
              </div>
              <form action="#" method="POST" className="max-w-3xl mt-12">
                <div className="space-y-8">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                    <label
                      htmlFor=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      {" "}
                      Profile Photo{" "}
                    </label>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <div className="flex items-center space-x-6">
                        <img
                          className="flex-shrink-0 object-cover w-12 h-12 rounded-lg"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-male.png"
                          alt=""
                        />
                        <button
                          type="button"
                          className="text-sm font-semibold text-gray-400 transition-all duration-200 bg-white rounded-md hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          className="text-sm font-semibold text-indigo-600 transition-all duration-200 bg-white rounded-md hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                    <label
                      htmlFor=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      {" "}
                      First &amp; Last Name{" "}
                    </label>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                        <div>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder=""
                            defaultValue="Martin"
                            className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder=""
                            defaultValue="Janiter"
                            className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                    <label
                      htmlFor=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      {" "}
                      Email Address{" "}
                    </label>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder=""
                        defaultValue="j.martin@gmail.com"
                        className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                    <label
                      htmlFor=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      {" "}
                      Write Your Bio{" "}
                    </label>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <textarea
                        name=""
                        id=""
                        placeholder="Write about you"
                        value=""
                        rows={4}
                        className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                        spellCheck="false"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                    <div className="sm:mt-px sm:pt-2">
                      <label
                        htmlFor=""
                        className="block text-sm font-bold text-gray-900"
                      >
                        {" "}
                        Username{" "}
                      </label>
                      <p className="mt-1 text-sm font-medium text-gray-500">
                        You can change it later
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <div className="relative flex">
                        <div className="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">
                          rareblocks.co/user/
                        </div>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=""
                          defaultValue="martin.janiter"
                          className="border flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                    <label
                      htmlFor=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      {" "}
                      Website{" "}
                    </label>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <div className="relative flex">
                        <div className="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">
                          https://
                        </div>
                        <input
                          type="url"
                          name=""
                          id=""
                          placeholder=""
                          defaultValue="postcrafts.co"
                          className="border flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                    <label
                      htmlFor=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      {" "}
                      Job Title{" "}
                    </label>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        defaultValue="Software Developer"
                        className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                      <div className="relative flex items-center mt-2">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="profile"
                            id="profile"
                            className="border w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3">
                          <label
                            htmlFor="profile"
                            className="text-sm font-medium text-gray-900"
                          >
                            {" "}
                            Show this on my profile{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                    <label
                      htmlFor=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      {" "}
                      Country{" "}
                    </label>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <select className="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                        <option>United States</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-12">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Settings;