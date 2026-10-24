const fs = require('fs');
const path = require('path');

// Output directories
const darkDir = path.join(__dirname, '..', 'assets', 'readme', 'dark');
const lightDir = path.join(__dirname, '..', 'assets', 'readme', 'light');
const pubDarkDir = path.join(__dirname, '..', 'public', 'assets', 'readme', 'dark');
const pubLightDir = path.join(__dirname, '..', 'public', 'assets', 'readme', 'light');

for (const d of [darkDir, lightDir, pubDarkDir, pubLightDir]) {
  fs.mkdirSync(d, { recursive: true });
}

// 12-point scalloped Material 3 Expressive flower path (precisely centered at 0, 0)
const CENTERED_FLOWER_PATH = "M24.6,5.0C24.2,5.5 23.8,5.9 23.4,6.4C23.1,6.9 22.7,7.3 22.5,7.8C22.2,8.3 22.0,8.7 21.8,9.2C21.7,9.8 21.6,10.3 21.5,10.9C21.4,11.4 21.4,12.0 21.4,12.6C21.3,13.2 21.3,13.9 21.2,14.5C21.1,15.1 20.9,15.7 20.7,16.3C20.4,16.8 20.1,17.3 19.7,17.8C19.3,18.2 18.9,18.6 18.4,18.9C17.8,19.2 17.2,19.4 16.7,19.6C16.1,19.8 15.4,19.9 14.8,20.0C14.2,20.2 13.6,20.3 13.1,20.4C12.5,20.5 12.0,20.7 11.5,20.9C11.0,21.1 10.6,21.4 10.2,21.7C9.7,22.0 9.3,22.4 8.9,22.9C8.5,23.3 8.1,23.7 7.6,24.2C7.2,24.6 6.7,25.0 6.2,25.4C5.7,25.8 5.2,26.1 4.7,26.3C4.1,26.5 3.5,26.6 2.9,26.7C2.3,26.7 1.7,26.6 1.1,26.4C0.6,26.3 -0.0,26.0 -0.6,25.8C-1.3,25.5 -1.8,25.2 -2.3,24.9C-2.8,24.6 -3.3,24.3 -3.8,24.1C-4.3,23.9 -4.8,23.7 -5.3,23.6C-5.8,23.5 -6.4,23.5 -6.9,23.5C-7.5,23.5 -8.0,23.5 -8.6,23.6C-9.2,23.6 -9.9,23.7 -10.5,23.8C-11.1,23.8 -11.7,23.8 -12.3,23.7C-12.9,23.6 -13.5,23.5 -14.1,23.2C-14.6,23.0 -15.1,22.6 -15.5,22.2C-15.9,21.8 -16.3,21.3 -16.6,20.8C-17.0,20.2 -17.2,19.6 -17.4,19.1C-17.7,18.5 -17.9,17.9 -18.1,17.4C-18.3,16.8 -18.5,16.3 -18.8,15.9C-19.1,15.4 -19.4,15.0 -19.8,14.6C-20.1,14.2 -20.5,13.8 -21.0,13.5C-21.5,13.1 -22.0,12.8 -22.5,12.5C-23.0,12.1 -23.5,11.8 -24.0,11.4C-24.4,11.0 -24.9,10.5 -25.3,10.1C-25.6,9.6 -25.9,9.0 -26.1,8.5C-26.3,7.9 -26.4,7.3 -26.4,6.7C-26.4,6.1 -26.3,5.5 -26.1,4.9C-26.0,4.3 -25.8,3.7 -25.6,3.1C-25.4,2.5 -25.2,2.0 -25.1,1.4C-24.9,0.9 -24.8,0.3 -24.7,-0.2C-24.7,-0.7 -24.7,-1.2 -24.7,-1.8C-24.8,-2.3 -24.9,-2.9 -25.1,-3.4C-25.2,-4.0 -25.4,-4.6 -25.6,-5.2C-25.7,-5.8 -25.9,-6.4 -26.0,-7.0C-26.0,-7.6 -26.0,-8.3 -25.9,-8.8C-25.8,-9.4 -25.7,-10.0 -25.4,-10.5C-25.1,-11.0 -24.7,-11.5 -24.3,-11.9C-23.9,-12.4 -23.4,-12.8 -22.9,-13.1C-22.4,-13.5 -21.8,-13.8 -21.3,-14.1C-20.8,-14.4 -20.3,-14.7 -19.8,-15.0C-19.4,-15.4 -19.0,-15.7 -18.6,-16.1C-18.3,-16.5 -18.0,-17.0 -17.7,-17.4C-17.4,-17.9 -17.2,-18.5 -17.0,-19.0C-16.7,-19.5 -16.5,-20.1 -16.2,-20.7C-15.9,-21.2 -15.6,-21.8 -15.2,-22.3C-14.8,-22.7 -14.4,-23.2 -13.9,-23.5C-13.4,-23.8 -12.9,-24.1 -12.3,-24.3C-11.7,-24.4 -11.1,-24.5 -10.5,-24.5C-9.9,-24.5 -9.2,-24.4 -8.6,-24.4C-8.0,-24.3 -7.4,-24.2 -6.8,-24.1C-6.3,-24.0 -5.8,-23.9 -5.3,-23.9C-4.6,-23.9 -4.1,-24.0 -3.6,-24.1C-3.1,-24.2 -2.5,-24.4 -2.0,-24.7C-1.5,-24.9 -1.0,-25.2 -0.4,-25.4C0.1,-25.7 0.7,-26.0 1.3,-26.2C1.9,-26.4 2.5,-26.6 3.1,-26.6C3.7,-26.7 4.3,-26.7 4.9,-26.6C5.4,-26.4 6.0,-26.2 6.5,-25.9C7.0,-25.6 7.5,-25.2 8.0,-24.8C8.4,-24.4 8.9,-23.9 9.3,-23.5C9.7,-23.0 10.1,-22.5 10.5,-22.1C10.9,-21.7 11.2,-21.3 11.7,-21.0C12.1,-20.7 12.6,-20.5 13.1,-20.2C13.6,-20.0 14.1,-19.9 14.7,-19.7C15.2,-19.6 15.9,-19.5 16.4,-19.3C17.0,-19.1 17.7,-18.9 18.2,-18.7C18.8,-18.4 19.3,-18.1 19.8,-17.8C20.2,-17.4 20.6,-16.9 21.0,-16.4C21.3,-15.9 21.5,-15.4 21.7,-14.8C21.8,-14.2 21.9,-13.6 21.9,-13.0C22.0,-12.3 22.0,-11.7 22.0,-11.1C22.0,-10.5 22.0,-9.9 22.1,-9.4C22.2,-8.8 22.3,-8.3 22.4,-7.8C22.6,-7.3 22.8,-6.8 23.1,-6.3C23.4,-5.9 23.7,-5.4 24.1,-4.9C24.4,-4.4 24.8,-3.9 25.2,-3.4C25.5,-2.9 25.8,-2.3 26.0,-1.7C26.3,-1.2 26.4,-0.6 26.5,0.0C26.5,0.6 26.5,1.2 26.3,1.8C26.2,2.3 25.9,2.9 25.5,3.4C25.3,4.0 24.9,4.5 24.6,5.0Z";

// Helper to write file to both assets/readme and public/assets/readme
function saveSvg(subPath, content) {
  // Enforce XML safety: auto-escape unescaped ampersands
  const safeContent = content.replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;');
  fs.writeFileSync(path.join(__dirname, '..', 'assets', 'readme', subPath), safeContent, 'utf8');
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'assets', 'readme', subPath), safeContent, 'utf8');
}

// Common SVG Icons (All explicit fills, ZERO currentColor)
const ICONS = {
  download: (c) => `<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="${c}"/>`,
  github: (c) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="${c}"/>`,
  heart: (c) => `<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${c}"/>`,
  bug: (c) => `<path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z" fill="${c}"/>`,
  tag: (c) => `<path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" fill="${c}"/>`,
  license: (c) => `<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="${c}"/>`,
  android: (c) => `<path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.68-.05-.84.26l-1.88 3.24c-1.33-.58-2.82-.9-4.46-.9-1.64 0-3.13.32-4.46.9L5.66 5.71c-.16-.31-.55-.41-.84-.26-.3.16-.42.54-.26.85l1.84 3.18C3.84 11.02 2 13.78 2 17h20c0-3.22-1.84-5.98-4.4-7.52zM7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="${c}"/>`,
  palette: (c) => `<path d="M12 2C6.49 2 2 6.49 2 12c0 5.51 4.49 10 10 10 1.1 0 2-.9 2-2 0-.49-.18-.94-.48-1.29-.3-.35-.48-.8-.48-1.29 0-1.1.9-2 2-2h2.44C19.74 15.42 22 13.16 22 10.86 22 5.97 17.53 2 12 2zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5S18.33 11 17.5 11z" fill="${c}"/>`,
  terminal: (c) => `<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-12-3l3.5-3.5L8 8l1.4-1.4 4.9 4.9-4.9 4.9L8 15zm7 0h4v2h-4v-2z" fill="${c}"/>`,
  lock: (c) => `<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="${c}"/>`,
  sparkles: (c) => `<path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" fill="${c}"/>`,
  speed: (c) => `<path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.28-10.43zm-7.88 4.93a1.5 1.5 0 1 1 1-1.42 1.5 1.5 0 0 1-1 1.42zm2.74-6.41l-2.91 4.36a2.5 2.5 0 1 0-1.07.72l3.4-5.08h.58z" fill="${c}"/>`,
  sync: (c) => `<path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="${c}"/>`,
  check: (c) => `<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="${c}"/>`,
  robot: (c) => `<path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.72V7h4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h4V5.72A2 2 0 0 1 10 4a2 2 0 0 1 2-2zm-4 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-6 5v1h4v-1h-4z" fill="${c}"/>`,
  database: (c) => `<path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm-8 6c0-.3.34-.78 1.13-1.25C6.39 9.38 8.98 10 12 10s5.61-.62 6.87-1.25C19.66 9.22 20 9.7 20 10v2c0 .66-3.58 2-8 2s-8-1.34-8-2v-2zm0 6c0-.3.34-.78 1.13-1.25C6.39 15.38 8.98 16 12 16s5.61-.62 6.87-1.25c.79.47 1.13.95 1.13 1.25v2c0 .66-3.58 2-8 2s-8-1.34-8-2v-2z" fill="${c}"/>`,
  memory: (c) => `<path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z" fill="${c}"/>`,
  code: (c) => `<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="${c}"/>`,
  mic: (c) => `<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" fill="${c}"/>`,
  tune: (c) => `<path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" fill="${c}"/>`,
  devices: (c) => `<path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" fill="${c}"/>`,
  shield: (c) => `<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15.5l-3.5-3.5 1.41-1.41L11 13.67l5.59-5.59L18 9.5l-7 7z" fill="${c}"/>`,
  prs: (c) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5a2.5 2.5 0 0 0-2.45 2H10a3 3 0 0 0-3 3v5.17A2.5 2.5 0 1 0 9 15.5V8.5a1 1 0 0 1 1-1h2.55a2.5 2.5 0 1 0 2.45-4zm-8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm8-11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm1 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="${c}"/>`,
  kotlin: (c) => `<path d="M2 2h20L12 12l10 10H2V2z" fill="${c}"/>`,
  compose: (c) => `<path d="M12 2L2 7l10 5 10-5-10-5zm0 9L2 16l10 5 10-5-10-5z" fill="${c}"/>`,
  koin: (c) => `<path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3.3l5.5 3.05L12 11.4 6.5 8.35 12 5.3zm-7 4.5l6 3.3v6.6l-6-3.3V9.8zm14 6.6l-6 3.3v-6.6l6-3.3v6.6z" fill="${c}"/>`,
  server: (c) => `<path d="M4 1v4h16V1H4zm14 3h-2V2h2v2zM4 7v4h16V7H4zm14 3h-2V8h2v2zm-14 3v4h16v-4H4zm14 3h-2v-2h2v2zm-14 3v4h16v-4H4zm14 3h-2v-2h2v2z" fill="${c}"/>`,
  pdf: (c) => `<path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zm4.5 2H15v-3h-1.5v3zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" fill="${c}"/>`,
  react: (c) => `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="${c}"/>`
};

function renderIcon(name, size, color) {
  const iconFn = ICONS[name] || ICONS.sparkles;
  const iconSvg = iconFn(color);
  const scale = size / 24;
  const offset = -size / 2;
  return `<g transform="translate(${offset}, ${offset}) scale(${scale})">${iconSvg}</g>`;
}

// -------------------------------------------------------------
// 1. ROTATING PIXEL BADGE (Height: 28, Flower Center: 14, 14)
// -------------------------------------------------------------
function generateBadge({ name, label, icon, flowerDark, flowerLight, iconDark, iconLight, width }) {
  // DARK with active 8s rotation
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="28" viewBox="0 0 ${width} 28">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 8s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M14,0H${width - 14}A14,14 0 0 1 ${width},14V14A14,14 0 0 1 ${width - 14},28H14A14,14 0 0 1 0,14V14A14,14 0 0 1 14,0Z" fill="#1e1823" stroke="#362938" stroke-width="1"/>
    <g transform="translate(14, 14)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(0.44)"/>
      </g>
      ${renderIcon(icon, 11, iconDark)}
    </g>
    <text x="27" y="18" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#f0e2ee">${label}</text>
  </svg>`;
  saveSvg(path.join('dark', `badge-${name}.svg`), darkSvg);

  // LIGHT with active 8s rotation
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="28" viewBox="0 0 ${width} 28">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 8s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M14,0H${width - 14}A14,14 0 0 1 ${width},14V14A14,14 0 0 1 ${width - 14},28H14A14,14 0 0 1 0,14V14A14,14 0 0 1 14,0Z" fill="#f4ebf4" stroke="#ded0dd" stroke-width="1"/>
    <g transform="translate(14, 14)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(0.44)"/>
      </g>
      ${renderIcon(icon, 11, iconLight)}
    </g>
    <text x="27" y="18" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#261b28">${label}</text>
  </svg>`;
  saveSvg(path.join('light', `badge-${name}.svg`), lightSvg);
}

// -------------------------------------------------------------
// 2. ROTATING ACTION BUTTON (Height: 68, Flower Center: 38, 34)
// -------------------------------------------------------------
function generateButton({ name, sublabel, label, icon, flowerDark, flowerLight, iconDark, iconLight, bgDark, bgLight, textDark, textLight, width = 216 }) {
  // DARK with active 10s rotation
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="68" viewBox="0 0 ${width} 68">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 10s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M34,1H${width - 34}A33,33 0 0 1 ${width - 1},34V34A33,33 0 0 1 ${width - 34},67H34A33,33 0 0 1 1,34V34A33,33 0 0 1 34,1Z" fill="${bgDark || '#261e27'}" stroke="#3d2f3e" stroke-width="1"/>
    <g transform="translate(38, 34)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="10s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(1.05)" />
      </g>
      ${renderIcon(icon, 24, iconDark)}
    </g>
    <text x="74" y="27" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="10" font-weight="700" fill="${textDark ? textDark + '99' : '#caa7cd'}" letter-spacing="0.08em">${sublabel.toUpperCase()}</text>
    <text x="74" y="47" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="16" font-weight="700" fill="${textDark || '#ffffff'}">${label}</text>
  </svg>`;
  saveSvg(path.join('dark', `btn-${name}.svg`), darkSvg);

  // LIGHT
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="68" viewBox="0 0 ${width} 68">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 10s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M34,1H${width - 34}A33,33 0 0 1 ${width - 1},34V34A33,33 0 0 1 ${width - 34},67H34A33,33 0 0 1 1,34V34A33,33 0 0 1 34,1Z" fill="${bgLight || '#f1e6f0'}" stroke="#dccbda" stroke-width="1"/>
    <g transform="translate(38, 34)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="10s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(1.05)" />
      </g>
      ${renderIcon(icon, 24, iconLight)}
    </g>
    <text x="74" y="27" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="10" font-weight="700" fill="${textLight ? textLight + '99' : '#695168'}" letter-spacing="0.08em">${sublabel.toUpperCase()}</text>
    <text x="74" y="47" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="16" font-weight="700" fill="${textLight || '#211824'}">${label}</text>
  </svg>`;
  saveSvg(path.join('light', `btn-${name}.svg`), lightSvg);
}

// -------------------------------------------------------------
// 3. ROTATING HEADER BANNER (1000 x 104, Flower Center: 56, 52)
// -------------------------------------------------------------
function generateHeader({ name, title, subtitle, icon, tags = [], flowerDark, flowerLight, iconDark, iconLight }) {
  function renderTags(tagsList, isDark) {
    let x = 970;
    let out = '';
    const pillBg = isDark ? '#3d2e3f' : '#ddcedd';
    const textColor = isDark ? '#ffffff' : '#221824';
    
    for (let i = tagsList.length - 1; i >= 0; i--) {
      const t = tagsList[i];
      const pillWidth = t.length * 8 + 26;
      x -= pillWidth;
      out += `<g transform="translate(${x}, 36)">
        <rect width="${pillWidth}" height="32" rx="16" fill="${pillBg}"/>
        <text x="${pillWidth / 2}" y="20.5" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13" font-weight="700" fill="${textColor}" text-anchor="middle">${t}</text>
      </g>`;
      x -= 10;
    }
    return out;
  }

  // DESKTOP DARK
  const dDark = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="104" viewBox="0 0 1000 104">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M52,0H948A52,52 0 0 1 1000,52V52A52,52 0 0 1 948,104H52A52,52 0 0 1 0,52V52A52,52 0 0 1 52,0Z" fill="#231b24"/>
    <g transform="translate(56, 52)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(1.52)" />
      </g>
      ${renderIcon(icon, 36, iconDark)}
    </g>
    <text x="114" y="47" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="32" font-weight="700" fill="#ffffff">${title}</text>
    <text x="114" y="74" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="15" font-weight="400" fill="#cbb4ca">${subtitle}</text>
    ${renderTags(tags, true)}
  </svg>`;
  saveSvg(path.join('dark', `h-${name}.svg`), dDark);

  // DESKTOP LIGHT
  const dLight = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="104" viewBox="0 0 1000 104">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M52,0H948A52,52 0 0 1 1000,52V52A52,52 0 0 1 948,104H52A52,52 0 0 1 0,52V52A52,52 0 0 1 52,0Z" fill="#ede2ed"/>
    <g transform="translate(56, 52)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(1.52)" />
      </g>
      ${renderIcon(icon, 36, iconLight)}
    </g>
    <text x="114" y="47" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="32" font-weight="700" fill="#211824">${title}</text>
    <text x="114" y="74" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="15" font-weight="400" fill="#675466">${subtitle}</text>
    ${renderTags(tags, false)}
  </svg>`;
  saveSvg(path.join('light', `h-${name}.svg`), dLight);

  // MOBILE RESPONSIVE VERSION (640 x 90, Flower Center: 46, 45)
  const mDark = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="90" viewBox="0 0 640 90">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M45,0H595A45,45 0 0 1 640,45V45A45,45 0 0 1 595,90H45A45,45 0 0 1 0,45V45A45,45 0 0 1 45,0Z" fill="#231b24"/>
    <g transform="translate(46, 45)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(1.28)" />
      </g>
      ${renderIcon(icon, 30, iconDark)}
    </g>
    <text x="96" y="42" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="25" font-weight="700" fill="#ffffff">${title}</text>
    <text x="96" y="66" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13" font-weight="400" fill="#cbb4ca">${subtitle}</text>
  </svg>`;
  saveSvg(path.join('dark', `hm-${name}.svg`), mDark);

  const mLight = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="90" viewBox="0 0 640 90">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M45,0H595A45,45 0 0 1 640,45V45A45,45 0 0 1 595,90H45A45,45 0 0 1 0,45V45A45,45 0 0 1 45,0Z" fill="#ede2ed"/>
    <g transform="translate(46, 45)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(1.28)" />
      </g>
      ${renderIcon(icon, 30, iconLight)}
    </g>
    <text x="96" y="42" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="25" font-weight="700" fill="#211824">${title}</text>
    <text x="96" y="66" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13" font-weight="400" fill="#675466">${subtitle}</text>
  </svg>`;
  saveSvg(path.join('light', `hm-${name}.svg`), mLight);
}

// -------------------------------------------------------------
// 4. ROTATING FEATURE CARD (430 x 218, Flower Center: 64, 60)
// -------------------------------------------------------------
function generateCard({ name, title, lines, icon, flowerDark, flowerLight, iconDark, iconLight }) {
  const tLines = lines.map((l, i) => `<tspan x="36" dy="${i === 0 ? 0 : 20}">${l}</tspan>`).join('');

  // DARK
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="430" height="218" viewBox="0 0 430 218">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <clipPath id="c_${name}"><rect width="430" height="218" rx="32" /></clipPath>
    <rect width="430" height="218" rx="32" fill="#1b131c" stroke="#362938" stroke-width="1"/>
    <g clip-path="url(#c_${name})">
      <path d="M440,110 C420,115 390,125 375,115 C360,105 340,65 315,55 C295,47 285,15 305,-5 C325,-25 355,-55 390,-55 C430,-55 470,20 475,50 C480,80 455,105 440,110 Z" fill="#261d28" />
    </g>
    <g transform="translate(64, 60)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(1.18)" />
      </g>
      ${renderIcon(icon, 30, iconDark)}
    </g>
    <text x="36" y="125" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="21" font-weight="700" fill="#ffffff">${title}</text>
    <text x="36" y="152" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13.5" font-weight="400" fill="#beabbe">
      ${tLines}
    </text>
  </svg>`;
  saveSvg(path.join('dark', `card-${name}.svg`), darkSvg);

  // LIGHT
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="430" height="218" viewBox="0 0 430 218">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <clipPath id="cl_${name}"><rect width="430" height="218" rx="32" /></clipPath>
    <rect width="430" height="218" rx="32" fill="#f4ebf4" stroke="#e0cee0" stroke-width="1"/>
    <g clip-path="url(#cl_${name})">
      <path d="M440,110 C420,115 390,125 375,115 C360,105 340,65 315,55 C295,47 285,15 305,-5 C325,-25 355,-55 390,-55 C430,-55 470,20 475,50 C480,80 455,105 440,110 Z" fill="#ece0ed" />
    </g>
    <g transform="translate(64, 60)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(1.18)" />
      </g>
      ${renderIcon(icon, 30, iconLight)}
    </g>
    <text x="36" y="125" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="21" font-weight="700" fill="#211824">${title}</text>
    <text x="36" y="152" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13.5" font-weight="400" fill="#5f4e60">
      ${tLines}
    </text>
  </svg>`;
  saveSvg(path.join('light', `card-${name}.svg`), lightSvg);
}

// -------------------------------------------------------------
// 5. ROTATING TECH STACK PILL (Height: 42, Flower Center: 21, 21)
// -------------------------------------------------------------
function generateStackPill({ name, label, icon, flowerDark, flowerLight, iconDark, iconLight, width }) {
  // DARK with active 8s rotation
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="42" viewBox="0 0 ${width} 42">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 8s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M21,0H${width - 21}A21,21 0 0 1 ${width},21V21A21,21 0 0 1 ${width - 21},42H21A21,21 0 0 1 0,21V21A21,21 0 0 1 21,0Z" fill="#231b24" stroke="#362938" stroke-width="1"/>
    <g transform="translate(21, 21)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(0.68)" />
      </g>
      ${renderIcon(icon, 17, iconDark)}
    </g>
    <text x="42" y="26" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="14.5" font-weight="600" fill="#f0e2ee">${label}</text>
  </svg>`;
  saveSvg(path.join('dark', `pill-${name}.svg`), darkSvg);

  // LIGHT
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="42" viewBox="0 0 ${width} 42">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 8s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M21,0H${width - 21}A21,21 0 0 1 ${width},21V21A21,21 0 0 1 ${width - 21},42H21A21,21 0 0 1 0,21V21A21,21 0 0 1 21,0Z" fill="#f0e5ef" stroke="#ded0dd" stroke-width="1"/>
    <g transform="translate(21, 21)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(0.68)" />
      </g>
      ${renderIcon(icon, 17, iconLight)}
    </g>
    <text x="42" y="26" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="14.5" font-weight="600" fill="#261b28">${label}</text>
  </svg>`;
  saveSvg(path.join('light', `pill-${name}.svg`), lightSvg);
}

// -------------------------------------------------------------
// 6. MASTER HERO BANNER (Desktop: 1200 x 420, Mobile: 640 x 340)
// -------------------------------------------------------------
function generateHeroBanner() {
  // DESKTOP DARK (1200 x 420)
  const dDark = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="420" viewBox="0 0 1200 420">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 14s linear infinite; transform-origin: 0px 0px; }
        .m3e-flower-spin-fast { animation: m3e-spin 10s linear infinite reverse; transform-origin: 0px 0px; }
      </style>
      <linearGradient id="bgGradD" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1b121d"/>
        <stop offset="50%" stop-color="#140c16"/>
        <stop offset="100%" stop-color="#1d1120"/>
      </linearGradient>
      <linearGradient id="primaryGradD" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#d0bcff"/>
        <stop offset="100%" stop-color="#f2b8b5"/>
      </linearGradient>
      <linearGradient id="accentGradD" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4f378b"/>
        <stop offset="100%" stop-color="#7d5260"/>
      </linearGradient>
      <clipPath id="heroClipD"><rect width="1200" height="420" rx="48"/></clipPath>
    </defs>

    <rect width="1200" height="420" rx="48" fill="url(#bgGradD)" stroke="#39283c" stroke-width="1.5"/>

    <g clip-path="url(#heroClipD)">
      <!-- Ambient background glow blobs -->
      <circle cx="1020" cy="120" r="260" fill="#6750a4" opacity="0.18" filter="blur(60px)"/>
      <circle cx="220" cy="380" r="220" fill="#7d5260" opacity="0.14" filter="blur(50px)"/>

      <!-- Decorative background spinning flower (Large) -->
      <g transform="translate(1040, 210)">
        <g class="m3e-flower-spin">
          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite"/>
          <path d="${CENTERED_FLOWER_PATH}" fill="#2e1f32" transform="scale(6.2)"/>
        </g>
      </g>
      <g transform="translate(1040, 210)">
        <g class="m3e-flower-spin-fast">
          <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="14s" repeatCount="indefinite"/>
          <path d="${CENTERED_FLOWER_PATH}" fill="#412d46" transform="scale(4.0)"/>
        </g>
      </g>

      <!-- Left Hero Text Content -->
      <g transform="translate(72, 76)">
        <!-- Top status pill -->
        <g transform="translate(0, 0)">
          <rect width="260" height="34" rx="17" fill="#312234" stroke="#4a364e" stroke-width="1"/>
          <circle cx="17" cy="17" r="5" fill="#a8e063"/>
          <text x="32" y="22" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="12" font-weight="700" fill="#e9d8e8" letter-spacing="0.04em">GOOGLE MATERIAL 3 EXPRESSIVE</text>
        </g>

        <!-- Main Headline -->
        <text x="0" y="96" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="58" font-weight="800" fill="#ffffff" letter-spacing="-0.02em">Local AI</text>
        <text x="236" y="96" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="24" font-weight="700" fill="#d0bcff">v1.2 Universal</text>

        <!-- Subtitle -->
        <text x="0" y="136" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="19" font-weight="500" fill="#f0e0ef">
          Privacy-First, On-Device Assistant for Android
        </text>
        <text x="0" y="164" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="14.5" font-weight="400" fill="#beabbe">
          Multi-Provider LLM Engine · Linux PRoot Sandbox · Vector RAG · Dual Power Tuning
        </text>

        <!-- Feature chips row -->
        <g transform="translate(0, 204)">
          <g transform="translate(0, 0)">
            <rect width="138" height="32" rx="16" fill="#312234"/>
            <text x="69" y="20.5" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#f2b8b5" text-anchor="middle">⚡ 60/120Hz Fluid</text>
          </g>
          <g transform="translate(148, 0)">
            <rect width="156" height="32" rx="16" fill="#312234"/>
            <text x="78" y="20.5" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#d0bcff" text-anchor="middle">🔒 Zero Telemetry</text>
          </g>
          <g transform="translate(314, 0)">
            <rect width="158" height="32" rx="16" fill="#312234"/>
            <text x="79" y="20.5" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#c3eed0" text-anchor="middle">🐧 Linux Workspace</text>
          </g>
          <g transform="translate(482, 0)">
            <rect width="144" height="32" rx="16" fill="#312234"/>
            <text x="72" y="20.5" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#ffdcc1" text-anchor="middle">🎛️ Dual 70% Limit</text>
          </g>
        </g>
      </g>

      <!-- Right Device Card Preview Graphic -->
      <g transform="translate(760, 56)">
        <!-- Phone Frame Shadow -->
        <rect x="0" y="0" width="360" height="308" rx="36" fill="#1e1520" stroke="#48354b" stroke-width="2"/>
        
        <!-- Header bar inside card -->
        <g transform="translate(24, 24)">
          <circle cx="16" cy="16" r="16" fill="#6750a4"/>
          <g transform="translate(16, 16) scale(0.6)">
            ${ICONS.robot('#ffffff')}
          </g>
          <text x="44" y="16" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Local AI Core</text>
          <text x="44" y="30" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#beabbe">Active · 120Hz Expressive</text>
        </g>

        <!-- Real-time Monitor Mini Card -->
        <g transform="translate(24, 76)">
          <rect width="312" height="74" rx="20" fill="#2a1d2c" stroke="#3d2c40" stroke-width="1"/>
          <!-- CPU -->
          <text x="18" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#d0bcff">CPU USAGE</text>
          <text x="18" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff">28.4%</text>
          <rect x="18" y="56" width="120" height="6" rx="3" fill="#3e2a42"/>
          <rect x="18" y="56" width="34" height="6" rx="3" fill="#d0bcff"/>
          <!-- GPU -->
          <text x="174" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#f2b8b5">GPU POWER</text>
          <text x="174" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff">70% Limit</text>
          <rect x="174" y="56" width="120" height="6" rx="3" fill="#3e2a42"/>
          <rect x="174" y="56" width="84" height="6" rx="3" fill="#f2b8b5"/>
        </g>

        <!-- Message Bubble Sample -->
        <g transform="translate(24, 166)">
          <path d="M16,0H260A16,16 0 0 1 276,16V40A16,16 0 0 1 260,56H20A16,16 0 0 1 4,40V12A12,12 0 0 1 16,0Z" fill="#3d2b40"/>
          <text x="16" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#ffffff">Ready to assist offline on-device.</text>
          <text x="16" y="42" font-family="system-ui, sans-serif" font-size="10.5" font-weight="400" fill="#caa7cd">PRoot tools ready · RAG vector indexed</text>
        </g>

        <!-- Bottom Pill -->
        <g transform="translate(24, 238)">
          <rect width="312" height="46" rx="23" fill="#6750a4"/>
          <text x="156" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">Launch Local Assistant</text>
        </g>
      </g>
    </g>
  </svg>`;
  saveSvg(path.join('dark', 'hero.svg'), dDark);

  // DESKTOP LIGHT (1200 x 420)
  const dLight = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="420" viewBox="0 0 1200 420">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 14s linear infinite; transform-origin: 0px 0px; }
        .m3e-flower-spin-fast { animation: m3e-spin 10s linear infinite reverse; transform-origin: 0px 0px; }
      </style>
      <linearGradient id="bgGradL" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fdf7fd"/>
        <stop offset="50%" stop-color="#f5eaf4"/>
        <stop offset="100%" stop-color="#ede0ed"/>
      </linearGradient>
      <clipPath id="heroClipL"><rect width="1200" height="420" rx="48"/></clipPath>
    </defs>

    <rect width="1200" height="420" rx="48" fill="url(#bgGradL)" stroke="#dfcede" stroke-width="1.5"/>

    <g clip-path="url(#heroClipL)">
      <circle cx="1020" cy="120" r="260" fill="#eaddff" opacity="0.6" filter="blur(60px)"/>
      <circle cx="220" cy="380" r="220" fill="#ffd8e4" opacity="0.4" filter="blur(50px)"/>

      <g transform="translate(1040, 210)">
        <g class="m3e-flower-spin">
          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite"/>
          <path d="${CENTERED_FLOWER_PATH}" fill="#ecd8ec" transform="scale(6.2)"/>
        </g>
      </g>
      <g transform="translate(1040, 210)">
        <g class="m3e-flower-spin-fast">
          <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="14s" repeatCount="indefinite"/>
          <path d="${CENTERED_FLOWER_PATH}" fill="#dfc6e0" transform="scale(4.0)"/>
        </g>
      </g>

      <g transform="translate(72, 76)">
        <g transform="translate(0, 0)">
          <rect width="260" height="34" rx="17" fill="#ebddeb" stroke="#d5c3d5" stroke-width="1"/>
          <circle cx="17" cy="17" r="5" fill="#2e7d32"/>
          <text x="32" y="22" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="12" font-weight="700" fill="#4a364e" letter-spacing="0.04em">GOOGLE MATERIAL 3 EXPRESSIVE</text>
        </g>

        <text x="0" y="96" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="58" font-weight="800" fill="#211824" letter-spacing="-0.02em">Local AI</text>
        <text x="236" y="96" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="24" font-weight="700" fill="#6750a4">v1.2 Universal</text>

        <text x="0" y="136" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="19" font-weight="600" fill="#322435">
          Privacy-First, On-Device Assistant for Android
        </text>
        <text x="0" y="164" font-family="system-ui, Roboto, sans-serif" font-size="14.5" font-weight="400" fill="#665365">
          Multi-Provider LLM Engine · Linux PRoot Sandbox · Vector RAG · Dual Power Tuning
        </text>

        <g transform="translate(0, 204)">
          <g transform="translate(0, 0)">
            <rect width="138" height="32" rx="16" fill="#ebddeb"/>
            <text x="69" y="20.5" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#853b55" text-anchor="middle">⚡ 60/120Hz Fluid</text>
          </g>
          <g transform="translate(148, 0)">
            <rect width="156" height="32" rx="16" fill="#ebddeb"/>
            <text x="78" y="20.5" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#6750a4" text-anchor="middle">🔒 Zero Telemetry</text>
          </g>
          <g transform="translate(314, 0)">
            <rect width="158" height="32" rx="16" fill="#ebddeb"/>
            <text x="79" y="20.5" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#1b5e20" text-anchor="middle">🐧 Linux Workspace</text>
          </g>
          <g transform="translate(482, 0)">
            <rect width="144" height="32" rx="16" fill="#ebddeb"/>
            <text x="72" y="20.5" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#8a5128" text-anchor="middle">🎛️ Dual 70% Limit</text>
          </g>
        </g>
      </g>

      <g transform="translate(760, 56)">
        <rect x="0" y="0" width="360" height="308" rx="36" fill="#ffffff" stroke="#ded0dd" stroke-width="2"/>
        
        <g transform="translate(24, 24)">
          <circle cx="16" cy="16" r="16" fill="#eaddff"/>
          <g transform="translate(16, 16) scale(0.6)">
            ${ICONS.robot('#21005d')}
          </g>
          <text x="44" y="16" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#211824">Local AI Core</text>
          <text x="44" y="30" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#665365">Active · 120Hz Expressive</text>
        </g>

        <g transform="translate(24, 76)">
          <rect width="312" height="74" rx="20" fill="#f6eef6" stroke="#e3d4e2" stroke-width="1"/>
          <text x="18" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#6750a4">CPU USAGE</text>
          <text x="18" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#211824">28.4%</text>
          <rect x="18" y="56" width="120" height="6" rx="3" fill="#e2d2e1"/>
          <rect x="18" y="56" width="34" height="6" rx="3" fill="#6750a4"/>
          <text x="174" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#853b55">GPU POWER</text>
          <text x="174" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#211824">70% Limit</text>
          <rect x="174" y="56" width="120" height="6" rx="3" fill="#e2d2e1"/>
          <rect x="174" y="56" width="84" height="6" rx="3" fill="#853b55"/>
        </g>

        <g transform="translate(24, 166)">
          <path d="M16,0H260A16,16 0 0 1 276,16V40A16,16 0 0 1 260,56H20A16,16 0 0 1 4,40V12A12,12 0 0 1 16,0Z" fill="#ede0ed"/>
          <text x="16" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#211824">Ready to assist offline on-device.</text>
          <text x="16" y="42" font-family="system-ui, sans-serif" font-size="10.5" font-weight="400" fill="#665365">PRoot tools ready · RAG vector indexed</text>
        </g>

        <g transform="translate(24, 238)">
          <rect width="312" height="46" rx="23" fill="#6750a4"/>
          <text x="156" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">Launch Local Assistant</text>
        </g>
      </g>
    </g>
  </svg>`;
  saveSvg(path.join('light', 'hero.svg'), dLight);

  // MOBILE RESPONSIVE HERO (640 x 340)
  const mDark = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="340" viewBox="0 0 640 340">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 14s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <rect width="640" height="340" rx="36" fill="#1b121d" stroke="#39283c" stroke-width="1.5"/>
    <g transform="translate(540, 170)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="#2e1f32" transform="scale(4.8)"/>
      </g>
    </g>
    <g transform="translate(40, 48)">
      <rect width="230" height="30" rx="15" fill="#312234"/>
      <circle cx="15" cy="15" r="4.5" fill="#a8e063"/>
      <text x="28" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#e9d8e8">MATERIAL 3 EXPRESSIVE</text>
      <text x="0" y="82" font-family="system-ui, sans-serif" font-size="44" font-weight="800" fill="#ffffff">Local AI</text>
      <text x="180" y="82" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#d0bcff">v1.2</text>
      <text x="0" y="118" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#f0e0ef">Privacy-First On-Device Assistant</text>
      <text x="0" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="#beabbe">Multi-Provider · Linux PRoot · RAG Memory</text>
      <g transform="translate(0, 174)">
        <rect width="120" height="28" rx="14" fill="#312234"/>
        <text x="60" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#d0bcff" text-anchor="middle">⚡ 120Hz Fluid</text>
        <g transform="translate(130, 0)">
          <rect width="130" height="28" rx="14" fill="#312234"/>
          <text x="65" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#c3eed0" text-anchor="middle">🐧 Linux PRoot</text>
        </g>
        <g transform="translate(270, 0)">
          <rect width="130" height="28" rx="14" fill="#312234"/>
          <text x="65" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#ffdcc1" text-anchor="middle">🎛️ Dual 70% Limit</text>
        </g>
      </g>
    </g>
  </svg>`;
  saveSvg(path.join('dark', 'hm-hero.svg'), mDark);

  const mLight = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="340" viewBox="0 0 640 340">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 14s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <rect width="640" height="340" rx="36" fill="#fdf7fd" stroke="#dfcede" stroke-width="1.5"/>
    <g transform="translate(540, 170)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="#ecd8ec" transform="scale(4.8)"/>
      </g>
    </g>
    <g transform="translate(40, 48)">
      <rect width="230" height="30" rx="15" fill="#ebddeb"/>
      <circle cx="15" cy="15" r="4.5" fill="#2e7d32"/>
      <text x="28" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#4a364e">MATERIAL 3 EXPRESSIVE</text>
      <text x="0" y="82" font-family="system-ui, sans-serif" font-size="44" font-weight="800" fill="#211824">Local AI</text>
      <text x="180" y="82" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#6750a4">v1.2</text>
      <text x="0" y="118" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#322435">Privacy-First On-Device Assistant</text>
      <text x="0" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="#665365">Multi-Provider · Linux PRoot · RAG Memory</text>
      <g transform="translate(0, 174)">
        <rect width="120" height="28" rx="14" fill="#ebddeb"/>
        <text x="60" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#6750a4" text-anchor="middle">⚡ 120Hz Fluid</text>
        <g transform="translate(130, 0)">
          <rect width="130" height="28" rx="14" fill="#ebddeb"/>
          <text x="65" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1b5e20" text-anchor="middle">🐧 Linux PRoot</text>
        </g>
        <g transform="translate(270, 0)">
          <rect width="130" height="28" rx="14" fill="#ebddeb"/>
          <text x="65" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#8a5128" text-anchor="middle">🎛️ Dual 70% Limit</text>
        </g>
      </g>
    </g>
  </svg>`;
  saveSvg(path.join('light', 'hm-hero.svg'), mLight);
}

// -------------------------------------------------------------
// RUN ALL GENERATORS
// -------------------------------------------------------------
console.log('Generating living Pixel-style M3 Expressive SVGs with SMIL spinning animations...');
generateHeroBanner();


// 1. HERO ACTION BUTTONS (216x68, rounded pill)
generateButton({ name: 'download', sublabel: 'GET LATEST BUILD', label: 'Download APK', icon: 'download', flowerDark: '#6750A4', flowerLight: '#EADDFF', iconDark: '#FFFFFF', iconLight: '#21005D', width: 216 });
generateButton({ name: 'github', sublabel: 'BROWSE THE', label: 'Source code', icon: 'github', flowerDark: '#4A3B4F', flowerLight: '#E8DCEB', iconDark: '#FFFFFF', iconLight: '#251A29', width: 206 });
generateButton({ name: 'sponsor', sublabel: 'LIKE LOCAL AI?', label: 'Support project', icon: 'heart', flowerDark: '#853B55', flowerLight: '#FFD8E4', iconDark: '#FFFFFF', iconLight: '#3B071F', width: 224 });
generateButton({ name: 'issues', sublabel: 'FOUND A BUG?', label: 'Report an issue', icon: 'bug', flowerDark: '#734375', flowerLight: '#FBD7FC', iconDark: '#FFFFFF', iconLight: '#2C132E', width: 218 });
generateButton({ name: 'releases', sublabel: 'STABLE BUILDS', label: 'Release Notes', icon: 'tag', flowerDark: '#2E6A45', flowerLight: '#C3EED0', iconDark: '#FFFFFF', iconLight: '#00210E', width: 214 });
generateButton({ name: 'license', sublabel: 'OPEN SOURCE', label: 'GPL-3.0 License', icon: 'license', flowerDark: '#455173', flowerLight: '#D8E2FF', iconDark: '#FFFFFF', iconLight: '#001A41', width: 210 });

// 2. BADGES (Height: 28px)
generateBadge({ name: 'android', label: 'Android 14+ / 16', icon: 'android', flowerDark: '#2E6A45', flowerLight: '#C3EED0', iconDark: '#FFFFFF', iconLight: '#00210E', width: 146 });
generateBadge({ name: 'privacy', label: '100% On-Device', icon: 'lock', flowerDark: '#3A5E53', flowerLight: '#CCE8DE', iconDark: '#FFFFFF', iconLight: '#042018', width: 140 });
generateBadge({ name: 'm3e', label: 'Material 3 Expressive', icon: 'palette', flowerDark: '#6750A4', flowerLight: '#EADDFF', iconDark: '#FFFFFF', iconLight: '#21005D', width: 172 });
generateBadge({ name: 'proot', label: 'Linux PRoot Sandbox', icon: 'terminal', flowerDark: '#8A5128', flowerLight: '#FFDCC1', iconDark: '#FFFFFF', iconLight: '#351500', width: 168 });
generateBadge({ name: 'zerotelemetry', label: 'Zero Telemetry', icon: 'shield', flowerDark: '#006969', flowerLight: '#CCE8E8', iconDark: '#FFFFFF', iconLight: '#002020', width: 136 });
generateBadge({ name: 'multimodal', label: 'Multimodal Vision & Voice', icon: 'sparkles', flowerDark: '#754877', flowerLight: '#FBD7FC', iconDark: '#FFFFFF', iconLight: '#2C132E', width: 196 });
generateBadge({ name: 'gpl', label: 'GPL-3.0 License', icon: 'license', flowerDark: '#455173', flowerLight: '#D8E2FF', iconDark: '#FFFFFF', iconLight: '#001A41', width: 138 });
generateBadge({ name: 'prs', label: 'PRs welcome', icon: 'prs', flowerDark: '#4D6438', flowerLight: '#D3EABC', iconDark: '#FFFFFF', iconLight: '#111F05', width: 122 });
generateBadge({ name: 'kotlin', label: 'Kotlin 2.1', icon: 'kotlin', flowerDark: '#7A3F64', flowerLight: '#FAD8E7', iconDark: '#FFFFFF', iconLight: '#320B23', width: 110 });
generateBadge({ name: 'compose', label: 'Jetpack Compose', icon: 'compose', flowerDark: '#2A5D75', flowerLight: '#C3E8FF', iconDark: '#FFFFFF', iconLight: '#001E2E', width: 148 });

// 3. HEADER BANNERS (Desktop: 1000x104, Mobile: 640x90)
generateHeader({ name: 'overview', title: 'Overview', subtitle: 'On-device AI assistant with Linux sandbox & Material 3 Expressive', icon: 'palette', tags: ['Android', 'Local AI', 'Open Source'], flowerDark: '#6750A4', flowerLight: '#EADDFF', iconDark: '#FFFFFF', iconLight: '#21005D' });
generateHeader({ name: 'features', title: 'Core Features', subtitle: 'Material 3 Expressive UI, PRoot Linux tools, RAG & multi-provider routing', icon: 'sparkles', tags: ['Compose', 'M3E', 'On-Device'], flowerDark: '#754877', flowerLight: '#FBD7FC', iconDark: '#FFFFFF', iconLight: '#2C132E' });
generateHeader({ name: 'architecture', title: 'Architecture & Tech Stack', subtitle: 'Modern reactive Android architecture with Jetpack Compose & Koin', icon: 'terminal', tags: ['Kotlin', 'Koin', 'Room', 'Ktor'], flowerDark: '#455173', flowerLight: '#D8E2FF', iconDark: '#FFFFFF', iconLight: '#001A41' });
generateHeader({ name: 'hardware', title: 'Hardware & Performance', subtitle: 'Real-time CPU/GPU monitor, power limit sliders & 120Hz display timing', icon: 'speed', tags: ['Monitoring', 'Power Tuning', '120Hz'], flowerDark: '#8A5128', flowerLight: '#FFDCC1', iconDark: '#FFFFFF', iconLight: '#351500' });
generateHeader({ name: 'updates', title: 'In-App Updates', subtitle: 'Instant GitHub release downloads with live speed & resume persistence', icon: 'sync', tags: ['Releases', 'Auto-Resume', 'Speed'], flowerDark: '#2E6A45', flowerLight: '#C3EED0', iconDark: '#FFFFFF', iconLight: '#00210E' });
generateHeader({ name: 'install', title: 'Installation & Setup', subtitle: 'Build from source with Gradle or install the standalone universal APK', icon: 'download', tags: ['Gradle', 'APK', 'Build'], flowerDark: '#3A5E53', flowerLight: '#CCE8DE', iconDark: '#FFFFFF', iconLight: '#042018' });
generateHeader({ name: 'faq', title: 'Frequently Asked Questions', subtitle: 'Common questions regarding local models, privacy, and Linux tools', icon: 'robot', tags: ['Privacy', 'PRoot', 'Keys'], flowerDark: '#5E5268', flowerLight: '#E8DEF8', iconDark: '#FFFFFF', iconLight: '#1D192B' });
generateHeader({ name: 'support', title: 'Support & Donate', subtitle: 'Support ongoing development via nsave, RedotPay, or GitHub Sponsors', icon: 'heart', tags: ['nsave', 'RedotPay', 'Sponsor'], flowerDark: '#853B55', flowerLight: '#FFD8E4', iconDark: '#FFFFFF', iconLight: '#3B071F' });

// 4. BENTO FEATURE CARDS (430x218)
generateCard({
  name: 'm3e',
  title: 'Material 3 Expressive',
  lines: [
    'Physics-based spring motion, dynamic Android 14+ color,',
    'custom theme creator, center-default Light Slider,',
    'and buttery-smooth 60/120Hz display refresh support.'
  ],
  icon: 'palette',
  flowerDark: '#6750A4',
  flowerLight: '#EADDFF',
  iconDark: '#FFFFFF',
  iconLight: '#21005D'
});

generateCard({
  name: 'providers',
  title: 'Multi-Provider Routing',
  lines: [
    'Presets for OpenAI, Gemini, Claude, ComfyUI, Ollama,',
    'and custom OpenAI endpoints with automated Key Roulette,',
    'multi-key failover, and model parameter overrides.'
  ],
  icon: 'robot',
  flowerDark: '#2A5D75',
  flowerLight: '#C3E8FF',
  iconDark: '#FFFFFF',
  iconLight: '#001E2E'
});

generateCard({
  name: 'rag',
  title: 'Local RAG & Vector Memory',
  lines: [
    'Persistent on-device vector embeddings and semantic search.',
    'Enables characters and assistants to remember past conversation',
    'context without cloud telemetry or data leakage.'
  ],
  icon: 'memory',
  flowerDark: '#776228',
  flowerLight: '#FFE193',
  iconDark: '#FFFFFF',
  iconLight: '#251A00'
});

generateCard({
  name: 'proot',
  title: 'Linux PRoot Workspace',
  lines: [
    'Fully embedded on-device Linux user-space environment.',
    'Execute bash scripts, Python packages, Node.js scripts,',
    'and local developer automation tools securely.'
  ],
  icon: 'terminal',
  flowerDark: '#8A5128',
  flowerLight: '#FFDCC1',
  iconDark: '#FFFFFF',
  iconLight: '#351500'
});

generateCard({
  name: 'hardware',
  title: 'Real-Time Hardware Monitor',
  lines: [
    'Compact live-animated CPU & GPU usage gauges.',
    'Dedicated 70% default power sliders (10%–100%) to prevent',
    'thermal throttling and prolong battery runtime.'
  ],
  icon: 'speed',
  flowerDark: '#006969',
  flowerLight: '#CCE8E8',
  iconDark: '#FFFFFF',
  iconLight: '#002020'
});

generateCard({
  name: 'multimodal',
  title: 'Multimodal Vision & Voice',
  lines: [
    'Interact seamlessly with text, high-resolution images,',
    'audio transcription via Whisper/DashScope ASR, natural',
    'TTS speech generation, and PDF/DOCX document parsing.'
  ],
  icon: 'mic',
  flowerDark: '#754877',
  flowerLight: '#FBD7FC',
  iconDark: '#FFFFFF',
  iconLight: '#2C132E'
});

generateCard({
  name: 'updates',
  title: 'Smart In-App Updates',
  lines: [
    'GitHub Releases integration with real-time download speed',
    '(MB/s, KB/s), background persistence across app closures,',
    'and one-tap Android PackageInstaller launch.'
  ],
  icon: 'sync',
  flowerDark: '#2E6A45',
  flowerLight: '#C3EED0',
  iconDark: '#FFFFFF',
  iconLight: '#00210E'
});

generateCard({
  name: 'privacy',
  title: '100% Zero-Leak Privacy',
  lines: [
    'All conversation databases, vector embeddings, and API keys',
    'are encrypted with Android Keystore & EncryptedSharedPreferences.',
    'Zero external analytics and zero telemetry tracking.'
  ],
  icon: 'shield',
  flowerDark: '#455173',
  flowerLight: '#D8E2FF',
  iconDark: '#FFFFFF',
  iconLight: '#001A41'
});

generateCard({
  name: 'nsave',
  title: 'nsave Account',
  lines: [
    'Direct support via nsave Swiss accounts (EUR / USD / GBP).',
    'Account Identifier: arafathrahman711@gmail.com',
    'Fast global transfers with zero cross-border hidden fees.'
  ],
  icon: 'license',
  flowerDark: '#2E6A45',
  flowerLight: '#C3EED0',
  iconDark: '#FFFFFF',
  iconLight: '#00210E'
});

generateCard({
  name: 'redotpay',
  title: 'RedotPay Wallet',
  lines: [
    'Support via RedotPay virtual Visa card & crypto wallet.',
    'RedotPay Payment ID: 184920485',
    'Supports USDT, USDC, BTC, and instant user-to-user transfers.'
  ],
  icon: 'speed',
  flowerDark: '#8A5128',
  flowerLight: '#FFDCC1',
  iconDark: '#FFFFFF',
  iconLight: '#351500'
});

generateCard({
  name: 'sponsors',
  title: 'GitHub Sponsors',
  lines: [
    'Sponsor ongoing open-source engineering on GitHub.',
    'Profile: github.com/sponsors/smartworldarafath',
    'Funds Android 16 optimization, new models & Linux PRoot.'
  ],
  icon: 'heart',
  flowerDark: '#853B55',
  flowerLight: '#FFD8E4',
  iconDark: '#FFFFFF',
  iconLight: '#3B071F'
});

// 5. TECH STACK PILLS (Height: 42px)
generateStackPill({ name: 'kotlin', label: 'Kotlin 2.1', icon: 'kotlin', flowerDark: '#7A3F64', flowerLight: '#FAD8E7', iconDark: '#FFFFFF', iconLight: '#320B23', width: 145 });
generateStackPill({ name: 'compose', label: 'Jetpack Compose', icon: 'compose', flowerDark: '#2A5D75', flowerLight: '#C3E8FF', iconDark: '#FFFFFF', iconLight: '#001E2E', width: 185 });
generateStackPill({ name: 'm3e', label: 'Material 3 Expressive', icon: 'palette', flowerDark: '#6750A4', flowerLight: '#EADDFF', iconDark: '#FFFFFF', iconLight: '#21005D', width: 216 });
generateStackPill({ name: 'koin', label: 'Koin 4 DI', icon: 'koin', flowerDark: '#8A5128', flowerLight: '#FFDCC1', iconDark: '#FFFFFF', iconLight: '#351500', width: 140 });
generateStackPill({ name: 'room', label: 'Room & SQLite', icon: 'database', flowerDark: '#776228', flowerLight: '#FFE193', iconDark: '#FFFFFF', iconLight: '#251A00', width: 165 });
generateStackPill({ name: 'ktor', label: 'Ktor Web Server', icon: 'server', flowerDark: '#853B55', flowerLight: '#FFD8E4', iconDark: '#FFFFFF', iconLight: '#3B071F', width: 180 });
generateStackPill({ name: 'okhttp', label: 'OkHttp & SSE', icon: 'sync', flowerDark: '#006969', flowerLight: '#CCE8E8', iconDark: '#FFFFFF', iconLight: '#002020', width: 155 });
generateStackPill({ name: 'proot', label: 'PRoot Linux Sandbox', icon: 'terminal', flowerDark: '#3A5E53', flowerLight: '#CCE8DE', iconDark: '#FFFFFF', iconLight: '#042018', width: 205 });
generateStackPill({ name: 'mupdf', label: 'MuPDF Engine', icon: 'pdf', flowerDark: '#455173', flowerLight: '#D8E2FF', iconDark: '#FFFFFF', iconLight: '#001A41', width: 165 });
generateStackPill({ name: 'react', label: 'React Web UI', icon: 'react', flowerDark: '#1E5268', flowerLight: '#C4E7FF', iconDark: '#FFFFFF', iconLight: '#001E2E', width: 160 });

// 6. GENERATE HTML PREVIEW FILE
const previewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Local AI - Material 3 Expressive README Asset Gallery</title>
  <style>
    :root {
      --bg: #140d16;
      --card-bg: #1f1722;
      --text: #f0e3ef;
      --subtext: #cbb4ca;
      --border: #382a3b;
      --accent: #d0bcff;
    }
    body.light {
      --bg: #faf2fa;
      --card-bg: #ffffff;
      --text: #211824;
      --subtext: #675466;
      --border: #e0d0df;
      --accent: #6750a4;
    }
    body {
      margin: 0;
      padding: 32px 20px;
      font-family: system-ui, -apple-system, 'Google Sans', Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      transition: background 0.3s, color 0.3s;
    }
    .container {
      max-width: 1040px;
      margin: 0 auto;
    }
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 28px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--border);
    }
    .theme-toggle {
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 10px 20px;
      border-radius: 9999px;
      font-weight: 700;
      cursor: pointer;
      font-size: 14px;
      transition: transform 0.15s;
    }
    .theme-toggle:active {
      transform: scale(0.96);
    }
    section {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 28px;
      padding: 28px;
      margin-bottom: 28px;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 20px;
      color: var(--accent);
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      align-items: center;
    }
    .banner-preview {
      width: 100%;
      overflow-x: auto;
      margin-bottom: 16px;
    }
    .banner-preview img {
      max-width: 100%;
      height: auto;
      display: block;
      border-radius: 52px;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 16px;
    }
    .card-grid img {
      width: 100%;
      height: auto;
      border-radius: 32px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header-bar">
      <div>
        <h1 style="margin:0; font-size: 28px;">Local AI · M3 Expressive SVGs</h1>
        <p style="margin:4px 0 0 0; color:var(--subtext);">Google Pixel 12-petal rotating flower components with GitHub-safe SMIL animations</p>
      </div>
      <button class="theme-toggle" onclick="document.body.classList.toggle('light')">🌓 Switch Light / Dark</button>
    </div>

    <section>
      <h2>Action Buttons (216x68 Pill)</h2>
      <div class="grid">
        <img class="theme-img" data-dark="assets/readme/dark/btn-download.svg" data-light="assets/readme/light/btn-download.svg" alt="Download">
        <img class="theme-img" data-dark="assets/readme/dark/btn-github.svg" data-light="assets/readme/light/btn-github.svg" alt="GitHub">
        <img class="theme-img" data-dark="assets/readme/dark/btn-sponsor.svg" data-light="assets/readme/light/btn-sponsor.svg" alt="Support">
        <img class="theme-img" data-dark="assets/readme/dark/btn-issues.svg" data-light="assets/readme/light/btn-issues.svg" alt="Issues">
        <img class="theme-img" data-dark="assets/readme/dark/btn-releases.svg" data-light="assets/readme/light/btn-releases.svg" alt="Releases">
        <img class="theme-img" data-dark="assets/readme/dark/btn-license.svg" data-light="assets/readme/light/btn-license.svg" alt="License">
      </div>
    </section>

    <section>
      <h2>Badges (28px Pill)</h2>
      <div class="grid">
        <img class="theme-img" data-dark="assets/readme/dark/badge-android.svg" data-light="assets/readme/light/badge-android.svg">
        <img class="theme-img" data-dark="assets/readme/dark/badge-privacy.svg" data-light="assets/readme/light/badge-privacy.svg">
        <img class="theme-img" data-dark="assets/readme/dark/badge-m3e.svg" data-light="assets/readme/light/badge-m3e.svg">
        <img class="theme-img" data-dark="assets/readme/dark/badge-proot.svg" data-light="assets/readme/light/badge-proot.svg">
        <img class="theme-img" data-dark="assets/readme/dark/badge-zerotelemetry.svg" data-light="assets/readme/light/badge-zerotelemetry.svg">
        <img class="theme-img" data-dark="assets/readme/dark/badge-multimodal.svg" data-light="assets/readme/light/badge-multimodal.svg">
        <img class="theme-img" data-dark="assets/readme/dark/badge-gpl.svg" data-light="assets/readme/light/badge-gpl.svg">
        <img class="theme-img" data-dark="assets/readme/dark/badge-prs.svg" data-light="assets/readme/light/badge-prs.svg">
        <img class="theme-img" data-dark="assets/readme/dark/badge-kotlin.svg" data-light="assets/readme/light/badge-kotlin.svg">
        <img class="theme-img" data-dark="assets/readme/dark/badge-compose.svg" data-light="assets/readme/light/badge-compose.svg">
      </div>
    </section>

    <section>
      <h2>Header Banners (1000x104)</h2>
      <div class="banner-preview"><img class="theme-img" data-dark="assets/readme/dark/h-overview.svg" data-light="assets/readme/light/h-overview.svg"></div>
      <div class="banner-preview"><img class="theme-img" data-dark="assets/readme/dark/h-features.svg" data-light="assets/readme/light/h-features.svg"></div>
      <div class="banner-preview"><img class="theme-img" data-dark="assets/readme/dark/h-architecture.svg" data-light="assets/readme/light/h-architecture.svg"></div>
      <div class="banner-preview"><img class="theme-img" data-dark="assets/readme/dark/h-hardware.svg" data-light="assets/readme/light/h-hardware.svg"></div>
      <div class="banner-preview"><img class="theme-img" data-dark="assets/readme/dark/h-updates.svg" data-light="assets/readme/light/h-updates.svg"></div>
      <div class="banner-preview"><img class="theme-img" data-dark="assets/readme/dark/h-install.svg" data-light="assets/readme/light/h-install.svg"></div>
      <div class="banner-preview"><img class="theme-img" data-dark="assets/readme/dark/h-faq.svg" data-light="assets/readme/light/h-faq.svg"></div>
      <div class="banner-preview"><img class="theme-img" data-dark="assets/readme/dark/h-support.svg" data-light="assets/readme/light/h-support.svg"></div>
    </section>

    <section>
      <h2>Bento Grid Feature Cards (430x218)</h2>
      <div class="card-grid">
        <img class="theme-img" data-dark="assets/readme/dark/card-m3e.svg" data-light="assets/readme/light/card-m3e.svg">
        <img class="theme-img" data-dark="assets/readme/dark/card-providers.svg" data-light="assets/readme/light/card-providers.svg">
        <img class="theme-img" data-dark="assets/readme/dark/card-rag.svg" data-light="assets/readme/light/card-rag.svg">
        <img class="theme-img" data-dark="assets/readme/dark/card-proot.svg" data-light="assets/readme/light/card-proot.svg">
        <img class="theme-img" data-dark="assets/readme/dark/card-hardware.svg" data-light="assets/readme/light/card-hardware.svg">
        <img class="theme-img" data-dark="assets/readme/dark/card-multimodal.svg" data-light="assets/readme/light/card-multimodal.svg">
        <img class="theme-img" data-dark="assets/readme/dark/card-updates.svg" data-light="assets/readme/light/card-updates.svg">
        <img class="theme-img" data-dark="assets/readme/dark/card-privacy.svg" data-light="assets/readme/light/card-privacy.svg">
      </div>
    </section>

    <section>
      <h2>Tech Stack Pills (42px)</h2>
      <div class="grid">
        <img class="theme-img" data-dark="assets/readme/dark/pill-kotlin.svg" data-light="assets/readme/light/pill-kotlin.svg">
        <img class="theme-img" data-dark="assets/readme/dark/pill-compose.svg" data-light="assets/readme/light/pill-compose.svg">
        <img class="theme-img" data-dark="assets/readme/dark/pill-m3e.svg" data-light="assets/readme/light/pill-m3e.svg">
        <img class="theme-img" data-dark="assets/readme/dark/pill-koin.svg" data-light="assets/readme/light/pill-koin.svg">
        <img class="theme-img" data-dark="assets/readme/dark/pill-room.svg" data-light="assets/readme/light/pill-room.svg">
        <img class="theme-img" data-dark="assets/readme/dark/pill-ktor.svg" data-light="assets/readme/light/pill-ktor.svg">
        <img class="theme-img" data-dark="assets/readme/dark/pill-okhttp.svg" data-light="assets/readme/light/pill-okhttp.svg">
        <img class="theme-img" data-dark="assets/readme/dark/pill-proot.svg" data-light="assets/readme/light/pill-proot.svg">
        <img class="theme-img" data-dark="assets/readme/dark/pill-mupdf.svg" data-light="assets/readme/light/pill-mupdf.svg">
        <img class="theme-img" data-dark="assets/readme/dark/pill-react.svg" data-light="assets/readme/light/pill-react.svg">
      </div>
    </section>
  </div>

  <script>
    function updateImages() {
      const isLight = document.body.classList.contains('light');
      document.querySelectorAll('.theme-img').forEach(img => {
        const src = isLight ? img.dataset.light : img.dataset.dark;
        if (src) img.src = src;
      });
    }
    const observer = new MutationObserver(updateImages);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    updateImages();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'readme-preview.html'), previewHtml);
console.log('Created public/readme-preview.html successfully!');
console.log('All Pixel-style Material 3 Expressive assets generated successfully!');
