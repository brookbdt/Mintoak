import React from "react";
import { default as NativeImage } from "next/image";

export default function Image({ src = "", alt = src?.split("/")?.pop(), ...rest }) {
  return <NativeImage src={src} alt={"mintOak " + alt} {...rest} />;
}
