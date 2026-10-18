import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { siteConfig } from "./config/audyora.config";
import { MotionEngine } from "./services/motion/MotionEngine";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  // Mount Navigation & Footer
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  const waRoot = document.getElementById("whatsapp-root");

  if (navRoot) navRoot.innerHTML = Navbar.render("/contact/");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  if (waRoot) waRoot.innerHTML = WhatsAppWidget.render();
  Navbar.initInteractions();

  // Mount Contact Form
  const formRoot = document.getElementById("contact-form-root");
  if (formRoot) {
    formRoot.innerHTML = ContactForm.render();
    ContactForm.init();

    // Check query params to prefill service or brief
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    const briefParam = params.get("brief");

    if (serviceParam) {
      const select = document.getElementById("form-serviceInterest") as HTMLSelectElement | null;
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value.toLowerCase().includes(serviceParam.toLowerCase())) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    }

    if (briefParam) {
      const textarea = document.getElementById("form-projectDetails") as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.value = `Regarding brief: ${briefParam}\n\nOur primary objectives: `;
      }
    }
  }

  // Populate Configurable Coordinate Placeholders
  const emailElem = document.getElementById("coord-email");
  const phoneElem = document.getElementById("coord-phone");
  const addressElem = document.getElementById("coord-address");
  const hoursElem = document.getElementById("coord-hours");

  if (emailElem) {
    emailElem.textContent = siteConfig.coordinates.emailPlaceholder;
    emailElem.setAttribute("href", `mailto:${siteConfig.coordinates.emailPlaceholder}`);
  }
  if (phoneElem) phoneElem.textContent = siteConfig.coordinates.phonePlaceholder;
  if (addressElem) addressElem.textContent = siteConfig.coordinates.addressPlaceholder;
  if (hoursElem) hoursElem.textContent = siteConfig.coordinates.operatingHours;

  MotionEngine.init();
});
