import React, { useRef, useState } from "react";

// components

import Header from "../components/Header";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

// layout for page

// import Admin from "layouts/Admin.js";

export default function Dashboard() {
  const playerRef = useRef();
  const { authenticate, isAuthenticated, user, account, isWeb3EnableLoading } =
    useMoralis();
  const router = useRouter();
  return (
    <>
      <Header
        handleSubmit={() => {}}
        authenticate={authenticate}
        loading={isWeb3EnableLoading}
        isVideo
        isAuthenticated={isAuthenticated}
        user={user}
        account={account}
      />
      <div className="container items-center px-4 py-8 m-auto mt">
        <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
          <div className="w-full p-2 lg:w-1/4 md:w-1/2">
            <div className="flex flex-col px-4 py-6 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
              <div className="flex flex-row justify-between items-center">
                <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-gray-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl sm:text-2xl xl:text-3xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                9 $SOL
              </h1>
              <div className="flex flex-row justify-between group-hover:text-gray-200">
                <p>Daily Earnings</p>
              </div>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/4 md:w-1/2">
            <div className="flex flex-col px-4 py-6 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
              <div className="flex flex-row justify-between items-center">
                <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-gray-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl sm:text-2xl xl:text-3xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                19
              </h1>
              <div className="flex flex-row justify-between group-hover:text-gray-200">
                <p>Daily Videos Watched</p>
              </div>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/4 md:w-1/2">
            <div className="flex flex-col px-4 py-6 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
              <div className="flex flex-row justify-between items-center">
                <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-gray-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl sm:text-2xl xl:text-3xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                5 hrs
              </h1>
              <div className="flex flex-row justify-between group-hover:text-gray-200">
                <p>Daily Hours Watched</p>
              </div>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/4 md:w-1/2">
            <div className="flex flex-col px-4 py-6 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
              <div className="flex flex-row justify-between items-center">
                <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-gray-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl xl:text-3xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                16 $SOL
              </h1>
              <div className="flex flex-row justify-between group-hover:text-gray-200">
                <p>Total Earnings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
              Withdraw Earnings
            </h1>

            <form
              action=""
              className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
            >
              <div className="text-3xl font-bold py-2 text-center">
                9.9 $SOL
              </div>

              <button
                type="submit"
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
              >
                Withdraw
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
