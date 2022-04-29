import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

interface CollabMemberProps {
  name: string;
  imageUrl: string;
  Links: string;
  socialMediaLinks?: string[];
}

export const CollabMember: FC<CollabMemberProps> = ({
  name,
  imageUrl,
  Links,
  socialMediaLinks,
}) => {
  return (
    <Box color="elvenTools.color3.base">
      {socialMediaLinks && (
        <Box>
          {socialMediaLinks.map((link, index) => (
            <Box
              as='a'
              height="120px"
              fontSize="xl"
              display="flex"
              href={Links}
              justifyContent="center"
            >
              <Image src={imageUrl} alt={name} width="100%" height="100%" objectFit="contain" />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
