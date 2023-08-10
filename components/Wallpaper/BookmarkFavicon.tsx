import clsx from "clsx"
import { CSSProperties, useState } from "react"
import { BiConfused } from "react-icons/bi"

import { faviconURL } from "~utils/browser"

export default function ({
  url,
  size = 28,
  bgColor = "#fff",
  styles = {}
}: {
  url: string
  size?: number
  bgColor?: string
  styles?: CSSProperties
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState<boolean>(url === "" ? true : undefined)
  return (
    <div
      className="inline-block rounded-md relative"
      style={{ backgroundColor: bgColor, ...styles }}>
      <BiConfused
        className={clsx(
          { "opacity-0": isError === undefined },
          "absolute inset-0"
        )}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          minWidth: `${size}px`,
          minHeight: `${size}px`
        }}
      />
      <img
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.log("error", url)
          setIsError(true)
        }}
        src={faviconURL(url, size)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          minWidth: `${size}px`,
          minHeight: `${size}px`
        }}
        className={clsx({
          "opacity-0": !isLoaded
        })}
        alt="ico"
      />
    </div>
  )
}
