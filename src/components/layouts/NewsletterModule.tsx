import React from 'react';
import { Block } from 'lib/cms/types';
import EmailSignup from 'components/EmailSignup';
import PortableText from 'components/PortableText';

type Props = {
  bgColor: string;
  title: string;
  headline: Block[];
};

const NewsletterModule: React.FC<Props> = ({ bgColor, title, headline }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="NewsletterModule site-max-width site-padding-x mxauto color-chalk px_75 md:px1_5 xl:px15 py6 md:py7_5"
    >
      <span className="NewsletterModule__title primary-sm pr3_75 vertical-align-middle">
        {title}
      </span>
      <span className="NewsletterModule__headline primary-xxl vertical-align-middle">
        <PortableText blocks={headline} />
      </span>
      <div className="pt3_75 xl:pt6">
        <EmailSignup variant="module" />
      </div>
    </div>
  );
};

export default NewsletterModule;
