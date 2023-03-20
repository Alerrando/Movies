"use client";

import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";
import "css/global.scss";

export type MenuBarProps = {
  value: string;
};

const MenuBar: MenuBarProps = {
  value: "closed" || "open",
};

export default function HomePage() {
  const [menuBar, setMenuBar] = React.useState(MenuBar);

  return (
    <div className="body-container">
      <Aside menuBar={menuBar} setMenuBar={setMenuBar} />
      <section>
        <Header style={undefined} />
        <Main menuBar={menuBar} />
      </section>
    </div>
  );
}
