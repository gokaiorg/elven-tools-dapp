import { useRouter } from 'next/router';
import { useCallback, FC } from 'react';
import { ActionButtonXL } from './ActionButtonXL';
import { Image } from '@chakra-ui/react';

interface MainMenuButtonsProps {
  enabled: string[];
}

export const MainMenuButtons: FC<MainMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const handleMintClick = useCallback(() => {
    router.push('/maiar-ghosts');
  }, [router]);
  const handlePlayAndEarnClick = useCallback(() => {
    router.push('/play-and-earn');
  }, [router]);
  const handleClanClick = useCallback(() => {
    router.push('/clan');
  }, [router]);
  const handleDaoClick = useCallback(() => {
    router.push('/dao');
  }, [router]);
  const handleRoadmapClick = useCallback(() => {
    router.push('/roadmap');
  }, [router]);
  const handleTeamClick = useCallback(() => {
    router.push('/team');
  }, [router]);
  const handleFaqClick = useCallback(() => {
    router.push('/faq');
  }, [router]);
  const handleLightpaperClick = useCallback(() => {
    router.push('https://docs.gokai.org/');
  }, [router]);
  const handleWalletClick = useCallback(() => {
    router.push('https://walletfp.com/?category=nft&address=gokai');
  }, [router]);
  const handleVoteClick = useCallback(() => {
    router.push('https://superciety.com/fellowships/gokai-dao');
  }, [router]);
  const handleTwitterClick = useCallback(() => {
    router.push('https://twitter.com/GokaiLabs');
  }, [router]);
  const handleDiscordClick = useCallback(() => {
    router.push('https://discord.gg/tXSeJfVVnH');
  }, [router]);
  const handleFacebookClick = useCallback(() => {
    router.push('https://www.facebook.com/GokaiLabs');
  }, [router]);
  const handleInstagramClick = useCallback(() => {
    router.push('https://www.instagram.com/gokai_labs/');
  }, [router]);
  const handleMediumClick = useCallback(() => {
    router.push('https://medium.com/@GokaiLabs');
  }, [router]);
  const handleEgldCommunityClick = useCallback(() => {
    router.push('https://egld.community/projects/gokai-labs');
  }, [router]);
  const handleBuildersClick = useCallback(() => {
    router.push(
      'https://elrondbuilders.com/projects/view/f09113bb-f129-48dc-8bbd-920159b6ab84'
    );
  }, [router]);
  const handleGithubClick = useCallback(() => {
    router.push('https://github.com/gokaiorg');
  }, [router]);
  const handleGiphyClick = useCallback(() => {
    router.push('https://giphy.com/GokaiLabs');
  }, [router]);

  return (
    <>
      {enabled.includes('mint') && (
        <ActionButtonXL onClick={handleMintClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-collect-trade-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand collect and trade Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Collect & Trade
        </ActionButtonXL>
      )}
      {enabled.includes('playandearn') && (
        <ActionButtonXL onClick={handlePlayAndEarnClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-play-earn-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand play and earn Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Play & Earn
        </ActionButtonXL>
      )}
      {enabled.includes('dao') && (
        <ActionButtonXL onClick={handleDaoClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-dao-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand DAO Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Dao
        </ActionButtonXL>
      )}
      {enabled.includes('vote') && (
        <ActionButtonXL onClick={handleVoteClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-lightpaper-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Lightpaper Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Governance
        </ActionButtonXL>
      )}
      {enabled.includes('wallet') && (
        <ActionButtonXL onClick={handleWalletClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-lightpaper-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Lightpaper Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Wallet
        </ActionButtonXL>
      )}
      {enabled.includes('github') && (
        <ActionButtonXL onClick={handleGithubClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-lightpaper-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Github Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Github
        </ActionButtonXL>
      )}
      {enabled.includes('lightpaper') && (
        <ActionButtonXL onClick={handleLightpaperClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-lightpaper-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Lightpaper Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Lightpaper
        </ActionButtonXL>
      )}
      {enabled.includes('roadmap') && (
        <ActionButtonXL onClick={handleRoadmapClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-roadmap-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand roadmap Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Roadmap
        </ActionButtonXL>
      )}
      {enabled.includes('team') && (
        <ActionButtonXL onClick={handleTeamClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-team-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand team Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Team
        </ActionButtonXL>
      )}
      {enabled.includes('clan') && (
        <ActionButtonXL onClick={handleClanClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-clan-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand collect and trade Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Clan
        </ActionButtonXL>
      )}
      {enabled.includes('faq') && (
        <ActionButtonXL onClick={handleFaqClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-faq-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand FAQ Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Faq
        </ActionButtonXL>
      )}
      {enabled.includes('egldcommunity') && (
        <ActionButtonXL onClick={handleEgldCommunityClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-elrond-community-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand EGLD community Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          EGLD Community
        </ActionButtonXL>
      )}
      {enabled.includes('twitter') && (
        <ActionButtonXL onClick={handleTwitterClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-twitter-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Twitter Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Twitter
        </ActionButtonXL>
      )}
      {enabled.includes('discord') && (
        <ActionButtonXL onClick={handleDiscordClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-discord-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Discord Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Discord
        </ActionButtonXL>
      )}
      {enabled.includes('builders') && (
        <ActionButtonXL onClick={handleBuildersClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-elrond-builders-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Elrond Builders Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Builders
        </ActionButtonXL>
      )}
      {enabled.includes('medium') && (
        <ActionButtonXL onClick={handleMediumClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-medium-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Medium Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Medium
        </ActionButtonXL>
      )}
      {enabled.includes('instagram') && (
        <ActionButtonXL onClick={handleInstagramClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-instagram-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Instagram Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Instagram
        </ActionButtonXL>
      )}
      {enabled.includes('facebook') && (
        <ActionButtonXL onClick={handleFacebookClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-facebook-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Facebook Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Facebook
        </ActionButtonXL>
      )}
      {enabled.includes('facebook') && (
        <ActionButtonXL onClick={handleGiphyClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostland-giphy-mr-ghost-maiar-ghosts-nft-dao-elrond-network.png"
            alt="GhostLand Giphy Mr Ghost Maiar Ghosts NFT DAO Elrond Network"
          />
          Giphy
        </ActionButtonXL>
      )}
    </>
  );
};
