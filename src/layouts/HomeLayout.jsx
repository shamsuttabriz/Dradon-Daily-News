import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";

function HomeLayout() {
  const { state } = useNavigation();
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
        <aside className="col-span-3 sticky top-5 h-fit">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          {state == "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
}

export default HomeLayout;
