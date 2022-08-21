import { Box, SimpleGrid } from '@chakra-ui/react';
import { SecondaryMember } from './SecondaryMember';
import { secondary } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Secondary = () => {
  if (!Array.isArray(secondary)) return null;

  return (
    <Box mt={24} mb="24">
      <HomeSectionTitle title="Where to buy and sell?" />
      <SimpleGrid columns={{ base:5 }} spacing={5} width="360px" margin="auto" justifyItems="center">
        {secondary.map((secondaryMember, index) => (
          <SecondaryMember key={index} {...secondaryMember} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
