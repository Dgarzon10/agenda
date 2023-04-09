import React from "react";
import SideBar from "./sideBar";

export default function UserPage() {
  return (
    <>
    <SideBar/>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h2 class="text-2xl text-gray-400 dark:text-gray-500 pb-4">
            WORK FLOW
          </h2>
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center h-screen rounded bg-gray-50 dark:bg-gray-800 relative">
              <p class="text-2xl text-gray-400 dark:text-gray-500 absolute top-2">
                To Do
              </p>
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-screen rounded bg-gray-50 dark:bg-gray-800 relative">
              <p class="text-2xl text-gray-400 dark:text-gray-500 absolute top-2">
                Doing
              </p>
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-screen rounded bg-gray-50 dark:bg-gray-800 relative">
              <p class="text-2xl text-gray-400 dark:text-gray-500 absolute top-2">
                Done
              </p>
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
