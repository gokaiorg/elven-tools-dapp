import { SimpleGrid } from '@chakra-ui/react';
import { TeamMember } from './TeamMember';
import { team } from '../config/dappUi';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const Team = () => {
  if (!Array.isArray(team)) return null;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <SimpleGrid columns={{ lg: 5, md: 5, sm: 2 }} spacing={10}>
        {team.map((teamMember, index) => (
          <TeamMember key={index} {...teamMember} />
        ))}
      </SimpleGrid>
    </motion.div>
  );
};
