import type { Route } from "./+types/home";
import NavBar from "~/components/NavBar";
import Main from "~/components/Main";

const images = [
  [
    "Grand Mondial Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/grandmondial.svg"
  ],
  [
    "Zodiac Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/07/zodiac-casino.svg"
  ],
  [
    "Luxury Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/luxurycasino.svg"
  ],
  [
    "Villento Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/villento.svg"
  ],
  [
    "Players Palace Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/playerspalacecasino.svg"
  ],
  [
    "Casino Classic",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/casino-classic.svg"
  ],
  [
    "Blackjack Ballroom Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/blackjackballroom.svg"
  ],
  [
    "Golden Tiger Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/gtcasino.svg"
  ],
  [
    "Yukon Gold Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/07/yukongoldcasino.svg"
  ],
  [
    "Casino Action",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/casinoaction.svg"
  ],
  [
    "Captain Cooks Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/captaincookscasino.svg"
  ],
  [
    "Quatro Casino",
    "https://bonuscasinosk.com/wp-content/uploads/2022/08/quatrocasino.svg"
  ],
  [
    "Casino Kingdom",
    "https://bonuscasinosk.com/wp-content/uploads/2023/02/casino-kingdom.svg"
  ]
] as const

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Main className="pt-5 prose">
        <h1>Slovenské kasína online</h1>
        <p>Zostavili sme zoznam všetkých online kasín, ktoré prešli našimi testami a sú teraz dostupné pre nové registrácie. V recenziách kasín sa dozviete viac o funkciách jednotlivých značiek, či majú výplatné limity a aké hry ponúkajú. Pridali sme aj klady a zápory jednotlivých prevádzkovateľov a utajované informácie o kvalite hernej služby.</p>
        <div className="grid grid-cols-5 gap-4 mb-10">
          {images.map(([k, v]) => (
            <div key={k} className="card bg-base-100 shadow-sm">
              <figure className="p-2">
                <img className="h-32" src={v} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title self-center text-center">{k}</h2>
              </div>
            </div>
          ))}
        </div>
        <h1>Profesionáli online kasína</h1>
        <p>Neskôr sa ukáže, že počet hráčov, ktorí sa zamerali na herné platformy na internete, výrazne vzrástol. Možno neponúkajú atmosféru živej hry ako kamenné kasína, no vynikajú niekoľkými výhodami:</p>
        <ul>
          <li>Vyššie RTP v slotoch (93 – 99 %)</li>
          <li>Možnosť registrácie cez akýkoľvek typ zariadenia</li>
          <li>Rýchly prístup k hrám cez mobilnú aplikáciu</li>
          <li>Spoľahlivý softvér, ktorý prešiel testami známych laboratórií</li>
          <li>Okamžité platby bez poplatkov</li>
          <li>Priamy prenos z miestností kasína so skutočnými dílermi</li>
        </ul>
        <p>Žijeme v dynamickom svete, ktorý si vyžaduje, aby sme boli neustále v pohybe. Ak vám vaša práca neumožňuje tráviť viac času hraním kasínových hier, môžete si hru stiahnuť a hrať na diaľku. Aplikácie pre smartfóny sú podporované zariadeniami iOS a Android a verzia mobilnej webovej stránky založená na webovej stránke pre počítače je vždy k dispozícii pre iné operačné systémy.</p>
        <h1>Ako hodnotíme kasína</h1>
        <p>Ako čoskoro uvidíte v recenziách našich kasínových stránok, vyhodnocujeme priemerné hodnotenie všetkých operátorov. Je založená na štyroch hlavných faktoroch:</p>
        <ul>
          <li>Spôsoby platby (vklady / výbery)</li>
          <li>Softvér a kasínové hry</li>
          <li>Zákaznícky servis</li>
          <li>Bonusy</li>
        </ul>
        <p>Kvalitu služieb určujeme podľa medzinárodných štandardov a na základe nich hodnotíme kasíno. V recenzii značky samozrejme upozorňujeme na mnoho ďalších funkcií, ako je licencia, mobilita a živé kasíno.</p>
        <h1>Sú online platformy bezpečné?</h1>
        <p>Hoci sa online hranie rozvinulo pomerne rýchlo, stále existujú zákazníci, ktorí sa obávajú o bezpečnosť svojich osobných údajov a svojich financií. Takéto obavy sú úplne neopodstatnené, keďže online kasína spĺňajú predbežné požiadavky. Dodržiavajú sa aj v pravidlách hry.</p>
        <p>V priebehu niekoľkých rokov spoločnosti prechádzajú licenčným procesom a platia dane v určitých jurisdikciách. Okrem toho musia poskytovať certifikované kasínové hry, ktoré boli schválené regulačnými orgánmi organizovanými laboratóriami ako iTechLabs a eCogra.</p>
        <p>Na ochranu bezpečnosti osobných údajov a platieb sa používajú certifikáty SSL so 128-bitovým alebo 256-bitovým šifrovaným kľúčom. Vďaka tomu sú prístupné pre cudzincov a chráni sa dôvernosť zákazníkov.</p>
        <p>Dohliadaní prevádzkovatelia ukladajú povinnosť overiť si účet kópiou dokladov totožnosti. Zákazníci posielajú jasné obrázky, ktoré sú kontrolované autorizovanými zástupcami. Kontroluje sa vek zákazníka, ako aj to, či sú údaje zaregistrované pri registrácii platné.</p>
        <h1>Existujú nejaké online kasínové bonusy?</h1>
        <p>Konkurencia medzi internetovými kasínami je dobrá vec pre zákazníkov, ktorí dostávajú celkom atraktívne ponuky. Prevádzkovatelia hier dávajú bonusy pri registrácii na webových stránkach a sú to percentá z vkladu. Existujú aj VIP kluby, ktoré zhromažďujú najaktívnejších zákazníkov, ktorí môžu získať ďalšie darčeky a pravidelné bonusy bez vkladu.</p>
        <p>Čím aktívnejšie budete hrať v online kasíne, tým štedrejšia a pravidelnejšia bude osobná ponuka. Najobľúbenejšími bonusmi sú balíčky bezplatných zatočení automatov, pretože peniaze získané prostredníctvom nich nespĺňajú požiadavky na stávkovanie.</p>
        <p>V našich recenziách online kasín sa dozviete o aktuálnych akciách a o tom, ako sa ich môžete zúčastniť. Pri výbere online kasína sa odporúča skontrolovať zoznam ponúk a pripojiť sa k čo najväčšiemu počtu webových stránok so skvelými ponukami.</p>
        <h1>Ako fungujú platby v kasíne?</h1>
        <p>Ďalším dôležitým aspektom zahrnutým v recenzii platformy online kasína je zoznam platobných metód. Pridali sme takéto informácie pre všetky kasína – ktoré meny sú akceptované a aké sú spôsoby výberu / vkladu.</p>
        <p>Je dôležité, aby boli spôsoby platby praktické, aby ste sa pri hraní cítili dostatočne pokojne a bezpečne. Limity sú rôzne, no väčšinou začínajú na 10 eurách a siahajú až do 100 000 eur za jeden výber. Finančné transakcie do/z online kasína vo všeobecnosti nie sú spoplatnené, s výnimkou bankových prevodov, ktoré sú spoplatnené poplatkom 1-2%.</p>
        <p>Najpopulárnejšie spôsoby platby v kasíne:</p>
        <ul>
          <li>Bankové karty a kreditné karty</li>
          <li>E-peňaženky</li>
          <li>Kryptomena</li>
          <li>Predplatené kupóny</li>
          <li>bankový prevod</li>
          <li>Mobilné platby</li>
        </ul>
      </Main>
    </>
  )
}
