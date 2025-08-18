import { useMemo } from "react"
import { useParams } from "react-router"
import Main from "~/components/Main"
import ShinyText from "~/components/ShinyText"
import { casinos, type CasinoId } from "~/constants/casinos"

const Casino = () => {
  const { id } = useParams<{ id: CasinoId }>()
  const casino = useMemo(() => id ? casinos[id] : undefined, [id])

  if (!casino) {
    throw new Response("Casino not found", { status: 404 })
  }

  return (
    <Main>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-[200px] h-[200px] rounded-lg shadow-2xl p-3 align-middle flex">
            <img
              src={casino.imageURL}
            />
          </div>
          <div className="w-3xl text-center">
            <p className="text-xl font-bold pb-2">Uvítací bonus</p>
            <ShinyText speedInMs={3_000}>
              <p className="text-4xl font-bold pb-2">{casino.welcomeBonus.title}</p>
            </ShinyText>
            <p className="text-xl font-bold pb-4">{casino.welcomeBonus.subtitle}</p>
            <button className="btn btn-primary">NAVŠTÍVIŤ</button>
            <p className="text-sm">18+ | Podmienky</p>
          </div>
          <div className="stats shadow">
            <div className="stat bg-white">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Games</div>
              <div className="stat-value text-primary">900+</div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Casino
