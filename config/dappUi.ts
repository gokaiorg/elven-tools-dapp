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
    'GhostLand works like a DAO, all decisions are made by the community. The Maiar Ghosts collection operates as a governance NFT. Vote and participate in the progress of the project. Get a Mr Ghost, become a member.',
  shortname: 'GhostLand',
  image: `${dappHostname}/og-image.png`,
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
      'Mr Ghost is a collectible, unique, original and beautiful NFT on Elrond, Mr Ghost is the governance token of GhostLand DAO and its number is limited to 8658 maximum! Mr Ghost makes you a shareholder of GhostLand and a major player in the strategic decisions of the organisation! From now on you can vote in the Discord server to validate the next NFT drops, their prices and other questions the community is wondering about.',
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'Done',
    points: [
      '✓ Create the most terrifying OG PFP DAO NFT collection in Elrond Network history',
      '✓ Build an organic community populated by OGs',
      '✓ Collaborate with the largest builders',
      '✓ Launch Open Source dApp',
      '✓ Airdrop the community',
      '✓ Sold out Drop #1 & #2',
      '✓ Launch Monthly & Weekly Rewards',
      '✓ Airdrop Collector Vox01 NFT',
      '✓ Get On-chain voting system',
    ],
  },
  {
    title: 'In Progress',
    points: [
      '↻ Build a more amazing community',
      '↻ Make our long-term partnerships stronger',
      '↻ Airdrop Collector Vox02 NFT',
      '↻ Launch Passive Income v1',
      '↻ Launch Open Source dApp v2',
      '↻ Produce merch',
    ],
  },
  {
    title: 'Planned',
    points: [
      'Build the most amazing community',
      'Create multi-sig',
      'Decentralize the project',
      'Sold out Drop #3 to #13',
      'Run a validator node',
      'Build more',
    ],
  },
];

export const team = [
  {
    name: 'Jeremy',
    bio: 'Founder',
    imageUrl: '/media/jeremy-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://www.linkedin.com/in/jeremy-douchamps/'],
  },
  {
    name: 'Sergiu',
    bio: 'DevOps Engineer',
    imageUrl: '/media/build-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: [
      'https://www.linkedin.com/in/sergiupopa89/?originalSubdomain=ro',
    ],
  },
  {
    name: 'Louis',
    bio: 'Artist',
    imageUrl: '/media/louislanne-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://www.instagram.com/louislanne/'],
  },
  {
    name: 'Nati',
    bio: 'Marketer',
    imageUrl: '/media/nati-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://www.linkedin.com/in/nati-douchamps-1151a8144/'],
  },
  {
    name: 'Albert',
    bio: 'SEO Expert',
    imageUrl: '/media/bebert-gokai-labs-elrond-nft-dao-maiar-ghosts.webp',
    socialMediaLinks: ['https://www.linkedin.com/in/albertlanne/'],
  },
];

export const earn = [
  {
    name: 'Passive Income',
    bio: 'Hold and earn. 100% of the EGLD staking revenue is redistributed to holders. Get more than 5 MaiarGhosts and earn EGLDs automatically.',
    imageUrl:
      '/media/ghostland-play-earn-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    earnLink: '/maiar-ghosts',
  },
  {
    name: 'Monthly Rewards',
    bio: 'Win a free NFT mint each month by using your Mr. Ghost NFT as your avatar in Maiar app and adding a friend.',
    imageUrl:
      '/media/ghostland-play-earn-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    earnLink: 'https://forms.gle/wrK6DcASpPYQu6qr8',
  },
  {
    name: 'Weekly Rewards',
    bio: 'Every monday we organize weekly awards on Twitter. A trait is picked and the winners share the prize pool!',
    imageUrl:
      '/media/ghostland-play-earn-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    earnLink: 'https://www.twitter.com/GokaiLabs',
  },
];

export const secondary = [
  {
    name: 'Xoxno',
    imageUrl: '/media/logo-xoxno.webp',
    socialMediaLinks: ['https://xoxno.com/collection/MRG-1c3ba4'],
  },
  {
    name: 'FrameIt',
    imageUrl: '/media/logo-frameit.webp',
    socialMediaLinks: ['https://www.frameit.gg/marketplace/MRG-1c3ba4'],
  },
  {
    name: 'Deadrare',
    imageUrl: '/media/logo-deadrare.webp',
    socialMediaLinks: ['https://deadrare.io/collection/MRG-1c3ba4'],
  },
  {
    name: 'Elrond NFT Swap',
    imageUrl: '/media/logo-elrond-nft-swap.webp',
    socialMediaLinks: ['https://elrondnftswap.com/collection/MRG-1c3ba4'],
  },
];
