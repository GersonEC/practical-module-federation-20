import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./index.scss";

const Footer = React.lazy(() => import("my-footer/Footer"))

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="mt-10">Nav project</div>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
