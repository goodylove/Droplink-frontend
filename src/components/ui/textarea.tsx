import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

//  <div className="flex  items-center my-8 space-x-3 ">
//                 {image ? (
//                   <div className=" relative ">
//                     <Image
//                       src={`${image}`}
//                       width={50}
//                       height={50}
//                       alt="artist image"
//                       className="h-20 w-20 rounded-full object-cover"
//                     />
//                     <div
//                       onClick={handleImageClick}
//                       className="absolute inset-0 cursor-pointer hover:bg-gray-700  opacity-0 hover:opacity-70  flex items-center justify-center rounded-full"
//                     >
//                       <PiPen />
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     onClick={handleImageClick}
//                     className="flex h-20 w-20  cursor-pointer bg-gray-100 rounded-full flex items-center justify-center "
//                   >
//                     <PiUser size={35} />
//                     <Input
//                       id="image"
//                       type="file"
//                       accept="image/*"
//                       className="w-full py-3 text-black hidden"
//                       onChange={handImageChange}
//                       ref={fileInputRef}
//                     />
//                   </div>
//                 )}
//                 <Label
//                   htmlFor="image"
//                   className="block text-sm font-medium cursor-pointer text-gray-700 mb-2"
//                 >
//                   Upload image
//                 </Label>
//               </div>
