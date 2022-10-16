import { Box, Text, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';

interface TeamMemberProps {
  name: string;
  imageUrl: string;
  socialMediaLinks?: string[];
  bio?: string;
}

export const TeamMember: FC<TeamMemberProps> = ({
  name,
  imageUrl,
  socialMediaLinks,
  bio,
}) => {
  return (
    <Box
      borderColor="ghostLand.color2.base"
      borderWidth={1}
      bgColor="ghostLand.dark.lighter"
      backdropFilter="blur(3px)"
      py={2}
      px={6}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src={imageUrl} alt={name} boxSize="140px" objectFit="contain" />
      </Box>
      <Text textAlign="center" mt={5} fontWeight="bold" fontSize="xl">
        {name}
      </Text>
      {socialMediaLinks && (
        <Box
          display="flex"
          mt={5}
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          {socialMediaLinks.map((link, index) => (
            <SocialIcon
              key={index}
              url={link}
              bgColor="#fff"
              style={{ width: 30, height: 30 }}
            />
          ))}
        </Box>
      )}
      {bio && (
        <Text mt={5} textAlign="center">
          {bio}
        </Text>
      )}
    </Box>
  );
};
