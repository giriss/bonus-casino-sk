import clsx from "clsx"
import type { ReactNode } from "react"
import banner from "./zodiac-casino-bonus.png"

interface MainProps {
  className?: string
  children: ReactNode
}

const Main = ({ children, className }: MainProps) => {
  return (
    <main className={clsx("max-w-[1000px] m-auto", className)}>
      <div className="pb-5">
        <img className="m-auto" src={banner} alt="banner" />
      </div>
      {children}
    </main>
  )
}

export default Main
