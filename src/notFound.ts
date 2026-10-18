import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  if (navRoot) navRoot.innerHTML = Navbar.render("/");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  Navbar.initInteractions();
});
