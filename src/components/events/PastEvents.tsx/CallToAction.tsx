import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="max-w-7xl mx-auto px-4 text-center mb-20">
      <div className="inline-block bg-pink-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 transform -rotate-3">
        JOIN REKORA
      </div>
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
        Want to join the fun?
      </h2>
      <Button className="bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 font-medium rounded-md">
        <Link to="/contact">GET INVOLVED</Link>
      </Button>
    </div>
  );
}
