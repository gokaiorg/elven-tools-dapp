// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title:
    'Community-driven collectible NFT project on Elrond Network - Gokai Labs',
  description:
    'Gokai Labs works like a DAO, all decisions are made by the community. The Maiar Ghosts collection operates as a governance NFT. Vote and participate in the progress of the project. Get a Mr Ghost, become a member.',
  image: `${dappHostname}/social.png`,
  shortname: 'Gokai Labs',
  titleMaiarGhosts: 'Mint, buy and sell Maiar Ghosts NFT on Elrond NFTs marketplace - Gokai Labs',
  descriptionMaiarGhosts:
    'Maiar Ghosts is a collection of 8658 unique Mr Ghost NFTs haunting the Elrond blockchain. Mr Ghost was born from a wish to create an NFT around the M logo from the Elrond Network digital wallet: Maiar. With 666 traits, Mr Ghost is one of the most fun Elrond NFTs to collect.',
  imageMaiarGhosts: `${dappHostname}/social-maiar-ghosts.png`,
  urlMaiarGhosts: `${dappHostname}/maiar-ghosts`,
  titleUtility: 'Collect, Trade, Play and Earn with Mr Ghost NFT on Elrond Network - Gokai Labs',
  descriptionUtility:
    'The utility of Maiar Ghosts has just begun. You can collect them, trade them, vote in governance and play our various games! NFT for avatar in Maiar app, Effort Economy games, win NFTs and many more surprises to come.',
  imageUtility: `${dappHostname}/social-maiar-ghosts-utility.png`,
  urlUtility: `${dappHostname}/utility`,
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
    points: ['Airdrop', 'Pre-sale', 'Drop #1'],
  },
  {
    title: 'IN PROGRESS',
    points: ['Community building', 'Partnerships', 'Vote for Drop #2'],
  },
  {
    title: 'PLANNED',
    points: [
      'Cemetery - NFT Staking',
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
    name: 'Plata',
    imageUrl: '/static/media/collab-plata-network-elrond.webp',
    socialMediaLinks: ['https://plata.network/'],
  },
  {
    name: 'Evoluzion Life',
    imageUrl: '/static/media/collab-evoluzion-life-elrond.webp',
    socialMediaLinks: ['https://www.evoluzion.life/'],
  },
  {
    name: 'Effort Economy',
    imageUrl: '/static/media/collab-effort-economy-elrond.webp',
    socialMediaLinks: ['https://efforteconomy.io/'],
  },
  {
    name: 'Maka Bros',
    imageUrl: '/static/media/collab-maka-bros-elrond.webp',
    socialMediaLinks: ['https://www.maka-bros.com/'],
  },
  {
    name: 'Mutant Eheadz',
    imageUrl: '/static/media/collab-mutant-eheadz-elrond.webp',
    socialMediaLinks: ['https://www.elrondme.com/'],
  },
  {
    name: 'Orcpunks',
    imageUrl: '/static/media/collab-orcpunks-elrond.webp',
    socialMediaLinks: ['https://app.orcpunks.org/'],
  },
  {
    name: 'Snapshot',
    imageUrl: '/static/media/collab-snapshot-elrond.webp',
    socialMediaLinks: ['https://snapshot.org/#/'],
  },
  {
    name: 'Wwwine',
    imageUrl: '/static/media/collab-world-wide-wine-elrond.webp',
    socialMediaLinks: ['https://www.wwwine.io/'],
  },
  {
    name: 'Indie NFT Artwork',
    imageUrl: '/static/media/collab-indie-nft-artwork-elrond.webp',
    socialMediaLinks: ['https://www.indienftartwork.com/'],
  },
  {
    name: 'A la bonne ferme',
    imageUrl: '/static/media/collab-a-la-bonne-ferme-elrond.webp',
    socialMediaLinks: ['https://www.alabonneferme.fr/'],
  },
  {
    name: 'Elven Tools',
    imageUrl: '/static/media/collab-elven-tools-elrond.webp',
    socialMediaLinks: ['https://www.elven.tools/'],
  },
];

export const secondary = [
  {
    name: 'Buy and Sell Mr Ghost on Frame It',
    imageUrl: '/static/media/logo-frameit.webp',
    socialMediaLinks: ['https://www.frameit.gg/marketplace/MRG-1c3ba4'],
  },
  {
    name: 'Buy and Sell Mr Ghost on Deadrare',
    imageUrl: '/static/media/logo-deadrare.webp',
    socialMediaLinks: ['https://deadrare.io/collection/MRG-1c3ba4'],
  },
  {
    name: 'Buy and Sell Mr Ghost on Elrond NFT Swap',
    imageUrl: '/static/media/logo-elrond-nft-swap.webp',
    socialMediaLinks: ['https://elrondnftswap.com/collection/MRG-1c3ba4'],
  },
  {
    name: 'Buy and Sell Mr Ghost on Xoxno',
    imageUrl: '/static/media/logo-xoxno.webp',
    socialMediaLinks: ['https://xoxno.com/collection/MRG-1c3ba4'],
  },
    {
    name: 'Buy and Sell Mr Ghost on Isengard',
    imageUrl: '/static/media/logo-isengard.webp',
    socialMediaLinks: ['https://isengard.market/collection/MRG-1c3ba4'],
  },
];