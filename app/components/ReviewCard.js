import React from 'react';

function ReviewCard({ avatarPath, name, text }) {
  return (
    <div className="min-w-[300px] max-w-[90vw] sm:min-w-[400px] h-auto sm:h-[250px] rounded-lg bg-white p-6 m-2 sm:m-3 shadow-md text-black">
      <div className="flex flex-row items-center mb-4 justify-between">
        <div
            className="flex flex-row items-center"
        >
            <img
            alt={name}
            src={avatarPath}
            className="object-cover rounded-full mr-3"
            loading="lazy"
            width="30"
            height="30"
            />
            <span>{name}</span>
        </div>
        <div className="flex flex-row">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 md:size-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
        </div>
      </div>
      <div className="max-h-[150px] overflow-y-auto">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
