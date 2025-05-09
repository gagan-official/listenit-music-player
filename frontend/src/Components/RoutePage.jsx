import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import Like from "./Like/Like";
import OurTeam from "./OurTeam/OurTeam";
import PageNotFound from "./PageNotFound/404";
import Search from "./Search/Search";
import { AnimatePresence } from "framer-motion";

function RoutePage() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/meet-developer" element={<OurTeam />} />
        <Route path="/like" element={<Like />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default RoutePage;
