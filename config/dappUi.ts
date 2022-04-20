// This configuration file keeps all UI constants and settings

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Gokai Labs | Collectible NFT DAO project on Elrond Network - Maiar Ghosts NFT collection',
  description:
    'Gokai Labs is a DAO project drived by the community via a governance NFT, Mr Ghost on Elrond Network. Get a Mr Ghost, become a member.',
  image: `${dappHostname}/social.png`,
};

// FAQ section data
export const faq = [
  {
    question: 'What are NFTs and why should you buy them?',
    answer:
      'NFTs are exciting. NFT stands for Non-Fungible Token, which are unique digital assets. Since an NFT can only have one owner at a time, when you buy an NFT you are buying exclusive ownership of a digital asset. Rarity increases the excitement around an item. NFTs offer a unique opportunity to participate in a very promising market system with endless possibilities, including the possibility of making considerable profits.',
  },
  {
    question: 'Why choose the Elrond network and its EGLD token?',
    answer:
      'Elrond is a high-speed blockchain that aims to provide scalability, efficiency and security and is able to perform 15,000 transactions per second at a transaction cost of $0.001. EGLD is the native token of the Elrond blockchain and is used to reward validators and to pay network fees. The Elrond platform is designed for the new Internet economy and decentralised WEB3 applications.',
  },
  {
    question:
      'Who is Mr Ghosts and why should I have at least one?',
    answer:
      'Mr Ghost is a collectible, unique, original and beautiful NFT on Elrond , Mr Ghost is the governance token of Gokai Labs DAO and its number is limited to 8658 maximum! Mr Ghost makes you a shareholder of Gokai Labs and a major player in the strategic decisions of the organisation! From now on you can vote in the Discord server to validate the next NFT drops, their prices and other questions the community is wondering about.',
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'Q2 2022',
    points: [
      'Collection design',
      'Giveaway & Drop 1',
      'Marketing campaign',
    ],
  },
  {
    title: 'Q3 2022',
    points: [
      'Community votes',
      'Next drops',
      'Partnerships',
    ],
  },
  {
    title: 'Q4 2022',
    points: [
      'DAO governance',
      'Runing a node',
      'Land tokenisation? Community wishes?',
    ],
  },
];

export const team = [
  {
    name: 'Jeremy',
    bio: 'Founder',
    imageUrl: '/jeremy-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: [
      'https://www.linkedin.com/in/jeremy-douchamps/',
    ],
  },
  {
    name: 'Vladimir',
    bio: 'Developper',
    imageUrl: '/build-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://github.com/VladimirAndrianov96'],
  },
  {
    name: 'Nati',
    bio: 'Marketer',
    imageUrl: '/nati-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: [
      'https://www.linkedin.com/in/nati-douchamps-1151a8144/',
    ],
  },
  {
    name: 'Albert',
    bio: 'SEO Expert',
    imageUrl: '/bebert-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: [
      'https://www.linkedin.com/in/albertlanne/',
    ],
  },
  {
    name: 'Louis',
    bio: 'Artist',
    imageUrl: '/louislanne-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: [
      'https://www.instagram.com/louislanne/',
    ],
  },
];
