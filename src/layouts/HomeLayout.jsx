import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

function HomeLayout() {
  return (
    <div className="p-5">
      <header>
        <Header />
        <section className="max-w-6xl mx-auto">
          <LatestNews />
        </section>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-12 gap-3 my-5">
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
}

export default HomeLayout;
