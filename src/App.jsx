import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout"; // Main Layout
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import ThemeProvider from "./context/ThemeContext"; // Dark Mode Context
import "./App.css"; // Global Styles

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, // No need to pass darkMode props here, context handles it
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
