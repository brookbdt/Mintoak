import React from "react"
import { default as NativeImage } from "next/image"
import { domain } from "./API"

const getImageUrl = (imageData) => {
  if (imageData?.url) {
    return domain + imageData?.url
  }
  return
}

export default function Image({
  src = "",
  type = "",
  alt = (src?.url ? src?.url : src)?.split("/")?.pop(),
  ...rest
}) {
  if (src?.url) {
    return <img src={getImageUrl(src)} alt={"mintOak " + alt} {...rest} />
  } else if (type === "img") {
    return <img src={src} alt={"mintOak " + alt} {...rest} />
  } else if (src) {
    return <NativeImage src={src} alt={"mintOak " + alt} {...rest} />
  } else {
    return <></>
  }
}
