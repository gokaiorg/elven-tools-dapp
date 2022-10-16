import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { Roadmap } from '../components/Roadmap';
import { HomeSectionTitle } from '../components/HomeSectionTitle';

const RoadmapPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Roadmap" />
      <Roadmap />
    </MainLayout>
  );
};

export default RoadmapPage;
