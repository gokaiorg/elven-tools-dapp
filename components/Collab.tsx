import { Box, SimpleGrid } from '@chakra-ui/react';
import { CollabMember } from './CollabMember';
import { collab } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Collab = () => {
  if (!Array.isArray(collab)) return null;

  return (
    <Box mt={32} mb="48">
      <HomeSectionTitle title="Collabs" />
      <SimpleGrid columns={{ lg: 7, md: 4, sm: 3, base: 2 }} spacing={5}>
        {collab.map((collabMember, index) => (
          <CollabMember key={index} {...collabMember} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
