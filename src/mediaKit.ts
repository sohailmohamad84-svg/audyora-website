import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { MotionEngine } from "./services/motion/MotionEngine";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  // Mount Navigation, Footer & WhatsApp Widget
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  const waRoot = document.getElementById("whatsapp-root");

  if (navRoot) navRoot.innerHTML = Navbar.render("/media-kit/");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  if (waRoot) waRoot.innerHTML = WhatsAppWidget.render();

  Navbar.initInteractions();

  // Print / PDF download trigger
  const printBtn = document.getElementById("print-media-kit-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  MotionEngine.init();
});
