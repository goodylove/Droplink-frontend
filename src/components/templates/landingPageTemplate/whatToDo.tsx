import WhatToDoCard from "@/components/common/WhatToDoCard";
import { whatToDo } from "@/constants/data";
import React from "react";

function WhatToDo() {
  return (
    <section className=" py-20 bg-background border-t ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-sans text-white py-5">
          What You Can Do
        </h2>
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-2 mt-11">
          {whatToDo.map((item, index) => {
            return <WhatToDoCard key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatToDo;
