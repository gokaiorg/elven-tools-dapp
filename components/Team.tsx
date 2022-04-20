import { Box, SimpleGrid } from '@chakra-ui/react';
import { TeamMember } from './TeamMember';
import { team } from '../config/dappUi';
import { HomeSectionTitle } from '../components/HomeSectionTitle';

export const Team = () => {
  if (!Array.isArray(team)) return null;

  return (
    <Box mt={32}>
      <HomeSectionTitle title="Team" />
      <SimpleGrid columns={{ lg: 5, md: 2, sm: 1 }} spacing={10}>
        {team.map((teamMember, index) => (
          <TeamMember key={index} {...teamMember} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
