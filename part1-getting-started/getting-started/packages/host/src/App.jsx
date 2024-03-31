import React from "react";
import ReactDOM from "react-dom";

import Footer from "./Footer";

const Header = React.lazy(() => import("my-nav/Header"));

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <React.Suspense fallback={<div>Loading...</div>}>
      <Header />
    </React.Suspense>
    <div className="mt-10">Home page</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
