import { GelatoAddressBook } from "../types";

export const OPS_TASKS_API =
  "https://ops-task.fra.gelato.digital/1514007e8336fa99e6fe/api";

export const ETH = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export const CHAIN_ID = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GOERLI: 5,
  OPTIMISM: 10,
  CRONOS: 25,
  KOVAN: 42,
  BSC: 56,
  GNOSIS: 100,
  MATIC: 137,
  FANTOM: 250,
  MOONBEAM: 1284,
  ARBITRUM: 42161,
  AVALANCHE: 43114,
  MUMBAI: 80001,
};

export const GELATO_ADDRESSES: GelatoAddressBook = {
  [CHAIN_ID.MAINNET]: {
    ops: "0xB3f5503f93d5Ef84b06993a1975B9D21B962892F",
    forwarder: "0xA9AB392d9c725a302329434E92812fdeD02160d4",
  },
  [CHAIN_ID.ROPSTEN]: {
    ops: "0x9C4771560d84222fD8B7d9f15C59193388cC81B3",
    forwarder: "0xfaf634e4Db23B3A7d19bb9aB9B640531dbd5779E",
  },
  [CHAIN_ID.RINKEBY]: {
    ops: "0x8c089073A9594a4FB03Fa99feee3effF0e2Bc58a",
    forwarder: "0x04462c8ad55a3d970fd9b4944A2f4C7c15700883",
  },
  [CHAIN_ID.GOERLI]: {
    ops: "0xc1C6805B857Bef1f412519C4A842522431aFed39",
    forwarder: "0xe2b4403A3bC36b84d54eF088A923aE8575c88d94",
  },
  [CHAIN_ID.KOVAN]: {
    ops: "0x6c3224f9b3feE000A444681d5D45e4532D5BA531",
    forwarder: "0x4055cb250Ec8d539C5222EAa71fa7e30Fe94f8e9",
  },
  [CHAIN_ID.MATIC]: {
    ops: "0x527a819db1eb0e34426297b03bae11F2f8B3A19E",
    forwarder: "0xCd8eE05B92746Ef168460D8809bDb26b7321ec30",
  },
  [CHAIN_ID.MUMBAI]: {
    ops: "0xB3f5503f93d5Ef84b06993a1975B9D21B962892F",
    forwarder: "0x4055cb250Ec8d539C5222EAa71fa7e30Fe94f8e9",
  },
  [CHAIN_ID.FANTOM]: {
    ops: "0x6EDe1597c05A0ca77031cBA43Ab887ccf24cd7e8",
    forwarder: "0x0f441882F5B00bced580c530e8B6d3d6906F2beD",
  },
  [CHAIN_ID.ARBITRUM]: {
    ops: "0xB3f5503f93d5Ef84b06993a1975B9D21B962892F",
    forwarder: "0x95f4538C3950CE0EF5821f2049aE2aC5cCade68D",
  },
  [CHAIN_ID.AVALANCHE]: {
    ops: "0x8aB6aDbC1fec4F18617C9B889F5cE7F28401B8dB",
    forwarder: "0xa5f9b728ecEB9A1F6FCC89dcc2eFd810bA4Dec41",
  },
  [CHAIN_ID.BSC]: {
    ops: "0x527a819db1eb0e34426297b03bae11F2f8B3A19E",
    forwarder: "0xB3f5503f93d5Ef84b06993a1975B9D21B962892F",
  },
  [CHAIN_ID.GNOSIS]: {
    ops: "0x8aB6aDbC1fec4F18617C9B889F5cE7F28401B8dB",
    forwarder: "0xB3f5503f93d5Ef84b06993a1975B9D21B962892F",
  },
  [CHAIN_ID.OPTIMISM]: {
    ops: "0x340759c8346A1E6Ed92035FB8B6ec57cE1D82c2c",
    forwarder: "0x95f4538C3950CE0EF5821f2049aE2aC5cCade68D",
  },
  [CHAIN_ID.MOONBEAM]: {
    ops: "0x6c3224f9b3feE000A444681d5D45e4532D5BA531",
    forwarder: "0x340759c8346A1E6Ed92035FB8B6ec57cE1D82c2c",
  },
  [CHAIN_ID.CRONOS]: {
    ops: "0x86B7e611194978F556007ac1F52D09d114D8f160",
    forwarder: "0xE196330228CdE3Bb6b29413f32A95C45ACcF4952",
  },
};
