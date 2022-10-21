// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title:
    'Community-driven collectible NFT DAO on Elrond Network',
  description:
    'Elrond Network collectible NFT DAO driven by the community. The community makes all decisions. The Maiar Ghosts collection is an NFT for governance. Vote and contribute to the project\'s progress. Get a Mr Ghost and join the clan.',
  shortname: 'GhostLand',
  image: `${dappHostname}/social.png`,
};

// FAQ section data
export const faq = [
  {
    question: 'What exactly are NFTs, and why should you invest in them?',
    answer:
      'NFTs are fascinating. NFT stands for Non-Fungible Token, and they are one-of-a-kind digital assets. Because an NFT can only have one owner at a time, purchasing an NFT grants you exclusive ownership of a digital asset. The rarity of an item heightens its allure. NFTs provide a one-of-a-kind opportunity to participate in a very promising market system with limitless potential.',
  },
  {
    question: 'What is Mr Ghost, and why do I need at least one?',
    answer:
      'Mr Ghost is a collectible, one-of-a-kind, original, and lovely NFT from the MaiarGhosts collection on Elrond. Mr Ghost is the governance token of Ghost Land DAO, and its total number is 8658! Mr Ghost makes you a shareholder of Ghost Land and a key player in the organization\'s strategic decisions on Superciety. 1 ghost, 1 voice!',
  },
  {
    question: 'Why should we use the Elrond network and the EGLD token?',
    answer:
      'Elrond is a high-speed blockchain that aims to provide scalability, efficiency, and security. It can perform 15,000 transactions per second for a transaction fee of 0.001. The Elrond blockchain\'s native token, EGLD, is used to reward validators and pay network fees. Elrond is built for the new Internet economy and decentralized WEB3 applications.',
  },
  {
    question: 'Why should we start a node on the Elrond network?',
    answer:
      'Launching a node and becoming a staking provider is the path to take. A node will always keep running, no matter what. In Asia, there is only 6 percent of Elrond nodes in activity. We are the perfect organization to be a part of the security of the Elrond network in Asia. We\'re currently 2350 EGLD short of this goal. 7290 NFTs are still to be minted. That means we\'ll need to hit a median mint price of 0.32 EGLD.',
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
    imageUrl: '/media/ghostland-jeremy-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    socialMediaLinks: ['https://www.linkedin.com/in/jeremy-douchamps/'],
  },
  {
    name: 'Louis',
    bio: 'Artist',
    imageUrl: '/media/ghostland-louis-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    socialMediaLinks: ['https://www.instagram.com/louislanne/'],
  },
  {
    name: 'Sergiu',
    bio: 'DevOps',
    imageUrl: '/media/ghostland-sergiu-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    socialMediaLinks: [
      'https://www.linkedin.com/in/sergiupopa89/?originalSubdomain=ro',
    ],
  },
  {
    name: 'Damien',
    bio: 'Smart Contract Dev',
    imageUrl: '/media/ghostland-damien-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    socialMediaLinks: [
      'https://github.com/damienen',
    ],
  },
  {
    name: 'Nati',
    bio: 'Marketer',
    imageUrl: '/media/ghostland-nati-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    socialMediaLinks: ['https://www.linkedin.com/in/nati-douchamps-1151a8144/'],
  },
  {
    name: 'Albert',
    bio: 'SEO Expert',
    imageUrl: '/media/ghostland-albert-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    socialMediaLinks: ['https://www.linkedin.com/in/albertlanne/'],
  },
  {
    name: 'Kylian',
    bio: 'Community manager',
    imageUrl: '/media/ghostland-kylian-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    socialMediaLinks: ['https://twitter.com/timkyl2203'],
  },
  {
    name: 'Thip',
    bio: '3D Artist',
    imageUrl: '/media/ghostland-thip-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    socialMediaLinks: ['https://www.artstation.com/ninjathip'],
  },
];

export const earn = [
  {
    name: 'Passive Income',
    bio: 'Hold and earn. 100 percent of the EGLD staking revenue is redistributed to holders. Get more than 5 MaiarGhosts and earn EGLD automatically and for life.',
    imageUrl:
      '/media/ghostland-passive-income-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    earnLink: '/maiar-ghosts',
  },
  {
    name: 'Weekly Rewards',
    bio: 'Every monday we organize weekly rewards on Twitter. A trait is picked and the winners share the prize pool!',
    imageUrl:
      '/media/ghostland-weekly-rewards-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
    earnLink: 'https://www.twitter.com/GokaiLabs',
  },
  {
    name: 'Monthly Rewards',
    bio: 'Win a free NFT mint each month by using your Mr. Ghost NFT as your avatar in Maiar app. Entries are limited and already filled up.',
    imageUrl:
      '/media/ghostland-monthly-rewards-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png',
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
