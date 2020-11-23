import React, { FC } from 'react';
import { HomePage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/home';

import HomeHero from 'components/layouts/HomeHero';
import { ContentPage as Meta } from 'components/Meta';
import NewsletterModule from 'components/layouts/NewsletterModule';
import FoundersImpactSlideshow from 'components/layouts/FoundersImpactSlideshow';

type Props = ContainerProps & {
  model: HomePage;
};

const HomeView: FC<Props> = (props) => {
  const { model } = props;
  const { hero, seo, newsletter, foundersImpactSlideshow } = model;

  return (
    <div className="HomeView primary-xxl page-style--margin-top">
      <Meta seo={seo} />
      <HomeHero headline={hero.headline} founders={hero.founders} />
      <FoundersImpactSlideshow
        variant={foundersImpactSlideshow.variant}
        slides={foundersImpactSlideshow.slides}
      />
      <NewsletterModule
        bgColor={newsletter.bgColor}
        headline={newsletter.headline}
        title={newsletter.title}
      />
    </div>
  );
};

export default HomeView;
