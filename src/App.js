import React from "react";
import Testimonial from "./Components/Testimonial";
import reviews from "./data"
const App = () => {
  return (
<div className="flex flex-col w-full h-screen justify-center items-center mt-3">
<div className="text-center">
  <h1 className="text-4xl font-bold">Our Testinomials</h1>
<div className="bg-violet-400 h-1"></div>
<Testimonial reviews={reviews}/>
</div>
    </div>
  );
};

export default App;
