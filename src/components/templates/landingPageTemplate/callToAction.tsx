import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function CallToAction() {
  return (
    <section className="py-30 bg-white text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 font-sans text-background">
          Ready to Share Your Sound?
        </h2>
        <p className="text-xl mb-8 font-serif text-background">
          Join the community of artists who are taking their music to the next
          level.
        </p>
        <Button className=" h-10 bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
          <Link href="/register"> Get Started</Link>
        </Button>
      </div>
    </section>
  );
}

export default CallToAction;
