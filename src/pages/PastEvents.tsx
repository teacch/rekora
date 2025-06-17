import React from "react";
import Header from "@/components/Header";
import PastEventsGrid from "@/components/events/PastEvents.tsx/PastEventsGrid";
import CallToAction from "@/components/events/PastEvents.tsx/CallToAction";
import Footer from "@/components/footer/Footer";

const PastEvents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-100">
      <Header />

      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4">
            Past events
          </h1>
          <p className="text-gray-700 text-lg">
            Take a look at some of our past events.
          </p>
        </div>

        <PastEventsGrid />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default PastEvents;
