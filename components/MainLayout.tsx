import { Container, Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { MetaHead, MetaHeadProps } from './MetaHead';
import { Footer } from './Footer';

export const MainLayout: FC<PropsWithChildren<MetaHeadProps>> = ({
  children,
  metaTitle,
  metaDescription,
  metaImage,
  metaUrl,
}) => {
  return (
    <>
      <MetaHead
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        metaImage={metaImage}
        metaUrl={metaUrl}
      />
      <Box minHeight="calc(100vh - 120px)">
        <Container maxW="100%" p={0}>
          <Box>{children}</Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
