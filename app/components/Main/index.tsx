import clsx from "clsx"
import type { ReactNode } from "react"
import banner from "./zodiac-casino-bonus.png"
import plus18 from "./18plus.svg"
import gamplingTherapy from "./gambling-therapy.svg"
import NavBar from "../NavBar"

interface MainProps {
  className?: string
  children: ReactNode
}

const Main = ({ children, className }: MainProps) => {
  return (
    <>
      <NavBar />
      <main className={clsx("w-full max-w-8/10 m-auto pt-2 pb-5", className)}>
        <div className="pb-5">
          <img className="m-auto" src={banner} alt="banner" />
        </div>
        {children}
      </main>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav>
          <div className="grid grid-flow-col gap-5">
            <a>
              <img className="h-10" src={plus18} alt="18+" />
            </a>
            <a target="_blank" href="https://www.gamblingtherapy.org/fi/online-spelterapistodgrupper/">
              <img className="h-10" src={gamplingTherapy} alt="Gambling Therapy" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - bonuscasinosk.com</p>
        </aside>
      </footer>
    </>
  )
}

export default Main
