import * as React from "react";
import "./styles.css";

import { Layout } from "./components/Layout";
import { Header } from "./components/Head";
import { Content } from "./containers/Content";

export default function App() {
  return (
    <Layout>
      <Header />
      <Content />
    </Layout>
  );
}
