import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { MotionEngine } from "./services/motion/MotionEngine";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  const waRoot = document.getElementById("whatsapp-root");

  if (navRoot) navRoot.innerHTML = Navbar.render("");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  if (waRoot) waRoot.innerHTML = WhatsAppWidget.render();

  Navbar.initInteractions();
  MotionEngine.init();
});
