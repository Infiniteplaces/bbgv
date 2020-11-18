import React, { PureComponent, createRef } from 'react';
import Slider from 'react-slick';
import cx from 'classnames';
import { Image, FoundersImpactSlide } from 'lib/cms/types';
import Language from 'constants/Language';
import { Button, Img } from 'components/base';

type Props = {
  slides: FoundersImpactSlide[];
  speed?: number;
  variant: string;
};

type State = {
  currentSlide: number;
  shouldCancelNextTimeout: boolean;
};

class FoundersImpactSlideshow extends PureComponent<Props, State> {
  private interval: number | undefined;
  private sliderRef = createRef<Slider>();

  static defaultProps = {
    showPagination: true,
    speed: 5000,
  };

  state = {
    currentSlide: 0,
    shouldCancelNextTimeout: false,
  };

  componentDidMount() {
    this.interval = setInterval(this.attemptNextSlide, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  next = () => {
    const { slides } = this.props;
    const { currentSlide } = this.state;
    const index = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;

    this.goTo(index);
  };

  previous = () => {
    const { slides } = this.props;
    const { currentSlide } = this.state;
    const index = currentSlide <= 0 ? slides.length - 1 : currentSlide - 1;

    this.goTo(index);
  };

  goTo = (currentSlide: number, shouldCancelNextTimeout = false) => {
    if (this.state.currentSlide === currentSlide) return;

    return this.setState({ currentSlide, shouldCancelNextTimeout }, () => {
      this.sliderRef.current?.slickGoTo(currentSlide);
    });
  };

  attemptNextSlide = () => {
    if (this.state.shouldCancelNextTimeout) {
      return this.setState({
        shouldCancelNextTimeout: false,
      });
    }

    this.next();
  };

  renderVariant = (slide: FoundersImpactSlide) => {
    switch (this.props.variant) {
      case 'founder':
        return (
          <div
            key={slide.company.name}
            className="SLIDE FoundersImpactSlideshow__slide__card flex flex-col md:flex-row col-12"
          >
            <div className="col-12 md:col-6 flex flex-col pr3 md:pr0">
              <Button
                ariaLabel=""
                className="FoundersImpactSlideshow__left-tile radius-xs bg-color-nutella w100 text-left flex flex-col"
                wrap={true}
              >
                <div className="flex flex-col justify-between col-12 color-charcoal h100 p1_5 md:p3_75">
                  <p className="primary-lg">{slide.leftHeadline}</p>
                  <p className="primary-xs">Link to sector</p>
                </div>
              </Button>
            </div>

            <div className="col-12 md:col-6 flex flex-col pl3 md:pl0 md:mt8">
              <Button
                ariaLabel=""
                className="FoundersImpactSlideshow__right-tile bg-color-lilac-darker w100 text-left radius-xs flex flex-col mb6 md:mb0"
                wrap={true}
              >
                <div className="flex flex-col justify-between col-12 color-charcoal h100 p1_5 md:p3_75">
                  <p className="primary-xs">Link to sector</p>
                  <p className="primary-lg">
                    <span className="primary-xs vertical-align-middle uppercase pr3_75">
                      founder name
                    </span>
                    {slide.rightHeadline}
                  </p>
                </div>
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { slides, speed, variant } = this.props;
    const { currentSlide } = this.state;

    return (
      <div className="FoundersImpactSlideshow site-inner-content-max-width mxauto relative">
        <div className="FoundersImpactSlideshow__pagination-container absolute z-3 pr_75 md:pr3_75">
          <div className="FoundersImpactSlideshow__pagination relative col-12 flex flex-col">
            <div className="FoundersImpactSlideshow__pagination__inner flex flex-row col-12">
              {slides.map((slide: FoundersImpactSlide, index) => {
                const uniqueKey = '';

                return (
                  <button
                    key={`FoundersImpactSlideshow-${uniqueKey}`}
                    aria-label={Language.t('FoundersImpactSlideshow.paginationDot', {
                      slideNumber: index + 1,
                    })}
                    className={cx(
                      'FoundersImpactSlideshow__pagination__dot radius-button-sm pointer',
                      {
                        'FoundersImpactSlideshow__pagination__dot--active': index < currentSlide,
                        'FoundersImpactSlideshow__pagination__dot--current': index === currentSlide,
                      }
                    )}
                    onClick={() => this.goTo(index, true)}
                  >
                    <div
                      className="FoundersImpactSlideshow__pagination__dot__progress"
                      style={{ animationDuration: `${speed}ms` }}
                    />
                  </button>
                );
              })}
            </div>
            <div className="color-lilac-darkest secondary-bold-xs pt1">
              {Language.t('FoundersImpactSlideshow.viewNext')}
            </div>
          </div>
        </div>

        <div className="FoundersImpactSlideshow__slides-container flex flex-col">
          <Slider
            ref={this.sliderRef}
            className="FoundersImpactSlideshow__slideshow col-12"
            fade={true}
            adaptiveHeight={true}
            arrows={false}
            dots={false}
            centerMode={true}
            centerPadding="0px"
            speed={1000}
          >
            {slides.map((slide: FoundersImpactSlide, index: number) => {
              const uniqueKey = '';

              return (
                <div
                  className="FoundersImpactSlideshow__slide w100 items-center flex-wrap"
                  key={`FoundersImpactSlideshow-${uniqueKey}`}
                >
                  <div
                    className={cx('col-12 flex justify-center', {
                      'FoundersImpactSlideshow__slide__card-container': '',
                    })}
                  >
                    {this.renderVariant(slide)}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default FoundersImpactSlideshow;
