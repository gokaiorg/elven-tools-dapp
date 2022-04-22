import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
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
    <Box color="elvenTools.color3.base">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src={imageUrl} alt={name} width={250} height={250} />
      </Box>
      <Text textAlign="center" fontWeight="bold" fontSize="xl">
        {name}
      </Text>
      {bio && (
        <Text mt={3} textAlign="center">
          {bio}
        </Text>
      )}
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
              bgColor="elvenTools.color3.base"
              style={{ width: 30, height: 30 }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
