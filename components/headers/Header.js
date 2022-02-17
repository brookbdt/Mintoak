import { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MiniHeader from "./MiniHeader";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const headerProps = {
    showMobileMenu,
    setShowMobileMenu,
  };

  return (
    <div className="relative flex items-center justify-between px-18 desktop:px-80 h-54 desktop:h-111 bg-hawkesBlue">
      {/* For desktop size */}
      <DesktopHeader />

      {/* Below laptop size  */}
      <MiniHeader {...headerProps} />
    </div>
  );
}
