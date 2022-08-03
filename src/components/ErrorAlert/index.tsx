import React from "react";

const ErrorAlert = ({ message }: { message: string }) => {
  return (
    <>
      {message && message.length > 0 && (
        <div
          className="absolute z-10 right-0 flex items-center justify-between gap-4 p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
          role="alert"
        >
          <div className="flex items-center gap-4">
            <span className="p-2 text-white bg-green-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <p>
              <strong className="text-sm font-medium"> Hooray! </strong>

              <span className="block text-xs opacity-90">{message}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorAlert;
