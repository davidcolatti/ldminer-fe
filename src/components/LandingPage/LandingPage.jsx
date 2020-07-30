import React from "react";
import { signInWithGoogle } from "../../config/Fire";

const LandingPage = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Click Me</button>
    </div>
  );
};

export default LandingPage;
