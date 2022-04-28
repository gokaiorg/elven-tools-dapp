import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

interface CollabMemberProps {
  name: string;
  imageUrl: string;
  socialMediaLinks?: string[];
}

export const CollabMember: FC<CollabMemberProps> = ({
  name,
  imageUrl,
  socialMediaLinks,
}) => {
  return (
    <Box color="elvenTools.color3.base">
      {socialMediaLinks && (
        <Box
          as="a"
          height="120px"
          fontSize="xl"
          display="flex"
          href={socialMediaLinks}
          justifyContent="center"
        >
          {socialMediaLinks.map((link, index) => (
            <Image src={imageUrl} alt={name} width="100%" height="100%" objectFit="contain" />
          ))}
        </Box>
      )}
    </Box>
  );
};
