'use client'
import { useState } from "react";
import Header from "./(home)/Header";
import Main from "./(home)/Main";

export type MenuBarProps = {
  value: string;
}

const MenuBar: MenuBarProps = {
  value: "closed" || "open"
}

export default function Home() {
  const [menuBar, setMenuBar] = useState(MenuBar);

  return (
    <>
      <Header currentPage={'page1'} menuBar={menuBar} setMenuBar={setMenuBar} />
      <Main menuBar={menuBar} />
    </>
  )
}
