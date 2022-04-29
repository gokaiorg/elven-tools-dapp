// This configuration file keeps all UI constants and settings

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title:
    'Gokai Labs | Collectible NFT DAO project on Elrond Network - Maiar Ghosts NFT collection',
  description:
    'Gokai Labs is a DAO project drived by the community via a governance NFT, Mr Ghost on Elrond Network. Get a Mr Ghost, become a member.',
  image: `${dappHostname}/social.png`,
  shortname: 'Gokai Labs',
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
    question: 'Who is Mr Ghosts and why should I have at least one?',
    answer:
      'Mr Ghost is a collectible, unique, original and beautiful NFT on Elrond , Mr Ghost is the governance token of Gokai Labs DAO and its number is limited to 8658 maximum! Mr Ghost makes you a shareholder of Gokai Labs and a major player in the strategic decisions of the organisation! From now on you can vote in the Discord server to validate the next NFT drops, their prices and other questions the community is wondering about.',
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'DONE',
    points: ['Team building', 'Collection design', 'Giveaway'],
  },
  {
    title: 'IN PROGRESS',
    points: ['Community building', 'Partnerships', 'Pre-sale'],
  },
  {
    title: 'PLANNED',
    points: [
      'Cemetery',
      'DAO governance',
      'Become a Validator'
    ],
  },
];

export const team = [
  {
    name: 'Jeremy',
    bio: 'Founder',
    imageUrl: '/static/media/jeremy-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://www.linkedin.com/in/jeremy-douchamps/'],
  },
  {
    name: 'Vladimir',
    bio: 'Developper',
    imageUrl: '/static/media/build-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://github.com/VladimirAndrianov96'],
  },
  {
    name: 'Nati',
    bio: 'Marketer',
    imageUrl: '/static/media/nati-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://www.linkedin.com/in/nati-douchamps-1151a8144/'],
  },
  {
    name: 'Albert',
    bio: 'SEO Expert',
    imageUrl: '/static/media/bebert-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://www.linkedin.com/in/albertlanne/'],
  },
  {
    name: 'Louis',
    bio: 'Artist',
    imageUrl: '/static/media/louislanne-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://www.instagram.com/louislanne/'],
  },
];

export const collab = [
  {
    name: 'Elrond World',
    imageUrl: '/static/media/collab-elrond-world-elrond.webp',
    socialMediaLinks: ['https://mobile.twitter.com/ElrondWorld'],
  },
  {
    name: 'Wwwine',
    imageUrl: '/static/media/collab-world-wide-wine-elrond.webp',
    socialMediaLinks: ['https://www.wwwine.io/'],
  },
  {
    name: 'Plata',
    imageUrl: '/static/media/collab-plata-network-elrond.webp',
    socialMediaLinks: ['https://plata.network/'],
  },
  {
    name: 'Snapshot',
    imageUrl: '/static/media/collab-snapshot-elrond.webp',
    socialMediaLinks: ['https://snapshot.org/#/'],
  },
  {
    name: 'Indie NFT Artwork',
    imageUrl: '/static/media/collab-indie-nft-artwork-elrond.webp',
    socialMediaLinks: ['https://www.indienftartwork.com/'],
  },
  {
    name: 'Evoluzion Life',
    imageUrl: '/static/media/collab-evoluzion-life-elrond.webp',
    socialMediaLinks: ['https://www.evoluzion.life/'],
  },
  {
    name: 'A la bonne ferme',
    imageUrl: '/static/media/collab-a-la-bonne-ferme-elrond.webp',
    socialMediaLinks: ['https://www.alabonneferme.fr/'],
  },
];

export const secondary = [
  {
    name: 'Buy and Sell Mr Ghost on Deadrare',
    imageUrl: '/static/media/logo-deadrare.webp',
    socialMediaLinks: ['https://deadrare.io/collection/MRG-1c3ba4'],
  },
  {
    name: 'Buy and Sell Mr Ghost on Isengard',
    imageUrl: '/static/media/logo-isengard.webp',
    socialMediaLinks: ['https://isengard.market/collection/MRG-1c3ba4'],
  },
  {
    name: 'Buy and Sell Mr Ghost on Frame It',
    imageUrl: '/static/media/logo-frameit.webp',
    socialMediaLinks: ['https://www.frameit.gg/marketplace/MRG-1c3ba4'],
  },
  {
    name: 'Buy and Sell Mr Ghost on Trust Market',
    imageUrl: '/static/media/logo-trust.webp',
    socialMediaLinks: ['https://www.trust.market/collection/MRG-1c3ba4'],
  },
];