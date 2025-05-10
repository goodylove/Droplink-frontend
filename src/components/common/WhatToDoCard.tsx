import React from "react";

interface WhatToDoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function WhatToDoCard({
  title,
  description,
  icon,
}: WhatToDoCardProps) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center border-1 border-primary/95 px-4 py-7 rounded-lg shadow-md w-full max-w-sm mx-auto">
        <div className="flex  items-center justify-center mb-4  space-x-5">
          {React.createElement(icon, { className: "text-4xl text-accent" })}
          <h3 className="text-xl font-semibold text-white  font-sans">
            {title}
          </h3>
        </div>
        <p className="text-text mt-2">{description}</p>
      </div>
    </div>
  );
}
