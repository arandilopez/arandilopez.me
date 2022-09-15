import Alpine from "alpinejs";
import { headingAnchors } from "./heading_anchors";
import "../styles/index.css";

window.Alpine = Alpine;

Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
  headingAnchors();
});
