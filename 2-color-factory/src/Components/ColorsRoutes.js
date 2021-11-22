import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";


function ColorsRoutes() {

  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  const [colors, updateColors] = useState(initialColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function handleAdd(newColorObj) {
    updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <Routes>
      <Route path="/" element={<ColorList colors={colors} />} />
      <Route path="/colors" element={<ColorList colors={colors} />} />
      <Route path="/colors/new" element={<NewColorForm addColor={handleAdd} />} />
      <Route path="/colors/:color" element={<Color colors={colors} />} />
    </Routes>
  );
}

export default ColorsRoutes;
