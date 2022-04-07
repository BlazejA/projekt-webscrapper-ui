import "@/App.scss";

import React from "react";

import Header from "@/components/Header";
import ProductListView from "@/views/ProductListView";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <ProductListView />
    </>
  );
}

export default App;
