import React from "react";

interface HowItWorksCardProps {
  id: number;
  title: string;
  description: string;
}
function HowItWorksCard({ id, title, description }: HowItWorksCardProps) {
  return (
    <div className="flex flex-col items-center text-center font-poppins">
      <div className="w-16 h-16 font-poppins flex border border-white items-center justify-center bg-primary text-white rounded-full text-2xl font-bold mb-4">
        {id}
      </div>
      <h3 className="text-xl font-semibold font-sans text-white mb-2">
        {title}
      </h3>
      <p className="text-text font-sans">{description}</p>
    </div>
  );
}

export default HowItWorksCard;
