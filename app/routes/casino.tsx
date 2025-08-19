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
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 bg-base-200 shadow-md rounded-box p-10 content-center">
          <div className="flex flex-row justify-evenly">
            <div className="w-[200px] h-[200px] rounded-lg shadow-2xl p-3 align-middle flex">
              <img src={casino.imageURL} />
            </div>
            <div className="text-center">
              <p className="text-xl font-bold pb-2">Uvítací bonus</p>
              <ShinyText speedInMs={3_000}>
                <p className="text-4xl font-bold pb-2">{casino.welcomeBonus.title}</p>
              </ShinyText>
              <p className="text-xl font-bold pb-4">{casino.welcomeBonus.subtitle}</p>
              <button className="btn btn-primary">NAVŠTÍVIŤ</button>
              <p className="text-sm">18+ | Podmienky</p>
            </div>
          </div>
        </div>
        <div>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row">
              <div className="list-col-grow">
                <div>Celkový počet hier</div>
              </div>
              <div className="font-bold">900+</div>
            </li>
            <li className="list-row">
              <div className="list-col-grow">
                <div>Min. Vklad/výber</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </li>
            <li className="list-row">
              <div className="list-col-grow">
                <div>Živé kasíno</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </li>
            <li className="list-row">
              <div className="list-col-grow">
                <div>Mobilné kasíno</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </li>
            <li className="list-row">
              <div className="list-col-grow">
                <div>Živý chat</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </li>
            <li className="list-row">
              <div className="list-col-grow">
                <div>Vernostný / VIP program</div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Main>
  )
}

export default Casino
