export const casinos = {
  grandmondial: {
    name: "Grand Mondial Casino",
    imageURL: "https://bonuscasinosk.com/wp-content/uploads/2022/08/grandmondial.svg",
    welcomeBonus: {
      title: "150 šancí na výhru",
      subtitle: "+ 100 % až do 250 $",
    },
    totalNumberOfGames: "",
    minDeposit: "",
    liveCasino: false,
    mobileCasino: false,
    liveChat: false,
    vipProgram: false,
  }
}

export type CasinoId = keyof typeof casinos
