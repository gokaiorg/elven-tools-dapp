import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

interface SecondaryMemberProps {
  name: string;
  imageUrl: string;
  socialMediaLinks?: string[];
}

export const SecondaryMember: FC<SecondaryMemberProps> = ({
  name,
  imageUrl,
  socialMediaLinks,
}) => {
  return (
    <Box color="elvenTools.color3.base">
      {socialMediaLinks && (
        <Box>
          {socialMediaLinks.map((link, index) => (
            <Box
              as='a'
              height="68px"
              fontSize="xl"
              display="flex"
              key={index}
              href={link}
              rel="sponsored"
              title={name}
              justifyContent="center"
            >
              <Image src={imageUrl} alt={name} title={name} width="100%" height="100%" objectFit="contain" />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
