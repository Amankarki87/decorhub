import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white/60 text-center">
      <div className="relative px-6 md:px-8 py-6 text-sm">
        &copy; Decorhub {new Date().getFullYear()}, Showcasing Excellence in
        Interior Design
      </div>
    </footer>
  );
}
