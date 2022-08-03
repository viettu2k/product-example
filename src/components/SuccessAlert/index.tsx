import React from "react";

const Alert = ({ message, success }: { message: string; success: boolean }) => {
  return (
    <>
      {message && message.length > 0 && (
        <div
          className={`absolute z-10 right-0 flex items-center justify-between gap-4 p-4 ${
            success ? "text-green-700" : "text-red-700"
          } border rounded border-green-900/10 bg-blue-50`}
          role="alert"
        >
          <div className="flex items-center gap-4">
            <span
              className={`p-2 text-white ${
                success ? "bg-green-600" : "bg-red-600"
              } rounded-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {success ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </span>

            <p>
              <strong className="text-sm font-medium">
                {success ? "Success" : "Warning"}
              </strong>
              <span className="block text-xs opacity-90">{message}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
