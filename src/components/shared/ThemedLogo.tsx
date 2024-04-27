import Image from "next/image";
import NothingLogoWhite from "@/assets/images/nothing-logo-white.svg";
import NothingLogoBlack from "@/assets/images/nothing-logo-black.svg";

/**
 * Renders a themed logo based on the current theme.
 * When the theme is "dark", it displays a white logo.
 * When the theme is "light", it displays a black logo.
 */
export default function ThemedLogo() {
  return (
    <>
      {/* When the theme is dark, hide this div */}
      <div data-hide-on-theme="dark">
        <Image src={NothingLogoWhite} height={36} alt="Nothing-Logo" priority />
      </div>

      {/* When the theme is light, hide this div */}
      <div data-hide-on-theme="light">
        <Image src={NothingLogoBlack} height={36} alt="Nothing-Logo" priority />
      </div>
    </>
  );
}
