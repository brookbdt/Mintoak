import React from "react";
import DesktopFooter from "./DesktopFooter";
import MiniFooter from "./MiniFooter";

export default function Footer() {
  return (
    <div className="bg-footer">
      {/* For desktop size */}
      <DesktopFooter />

      {/* Below laptop size  */}
      <MiniFooter />
    </div>
  );
}
