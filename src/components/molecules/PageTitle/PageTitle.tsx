import Button from '@/components/atoms/Button/Button';
import Cta from '@/components/atoms/Cta/Cta';
import Text from '@/components/atoms/Text/Text';
import { IPageTitle } from '@/components/models/IPageTitle';
import ThemeEnum from '@/components/models/enums/ThemeEnum';
import VariantTypeEnum from '@/components/models/enums/VariantTypeEnum';
import { fadeInUp } from '@/components/utility/config/animations';
import throttle from '@/components/utility/helpers/throttle';
import classNames from 'classnames';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const PageTitle = ({
  site,
  backgroundColour,
  content,
  ctaStyle = VariantTypeEnum.Primary,
  isMainHeading = true,
  largeBodyText = false,
  links,
  theme,
  title,
  trumpetText,
}: IPageTitle) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef(null);
  const inView = useInView(textRef, { amount: 0.5, once: true });

  const handleBackgroundChange = () => {
    const pageRoot = document.getElementById('colour-background');
    if (!pageRoot || !backgroundColour) return;

    const elementsWithBackground = document.querySelectorAll(
      'section[data-background-color]'
    );

    let mostVisibleBackgroundColour = '';

    elementsWithBackground.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      const componentInView =
        isVisible &&
        rect.top < window.innerHeight * 0.8 &&
        rect.bottom > window.innerHeight / 2;

      if (componentInView) {
        mostVisibleBackgroundColour =
          section.getAttribute('data-background-color') || '';
      }
    });

    requestAnimationFrame(() => {
      if (pageRoot.style.backgroundColor !== mostVisibleBackgroundColour) {
        pageRoot.style.backgroundColor = mostVisibleBackgroundColour ?? '';
      }
    });
  };

  const throttledHandleBackgroundChange = throttle(handleBackgroundChange, 100);

  useEffect(() => {
    handleBackgroundChange();

    window.addEventListener('scroll', throttledHandleBackgroundChange, {
      passive: true,
    });

    window.addEventListener('resize', throttledHandleBackgroundChange, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', throttledHandleBackgroundChange);
      window.removeEventListener('resize', throttledHandleBackgroundChange);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={classNames('tw-relative tw-py-[90px] md:tw-py-[126px]', {
        'tw-dark': theme === ThemeEnum.Dark,
      })}
      style={isMainHeading ? { backgroundColor: backgroundColour } : {}}
      data-background-color={backgroundColour}
      data-main-heading={isMainHeading}
    >
      <div className="tw-grid-container">
        <motion.div
          className="tw-grid-component-reduced-width tw-flex tw-flex-col tw-items-center tw-gap-md tw-text-center tw-text-grey-100 md:tw-gap-lg dark:tw-text-white"
          ref={textRef}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div
            variants={fadeInUp}
            className="tw-flex tw-flex-col tw-gap-sm"
          >
            {trumpetText && (
              <Text
                variant="body-small"
                className="tw-uppercase tw-text-grey-70 dark:tw-text-grey-20"
              >
                {trumpetText}
              </Text>
            )}
            <Text variant="hero-headline" as={isMainHeading ? 'h1' : 'h2'}>
              {title}
            </Text>
          </motion.div>
          {content && (
            <motion.div variants={fadeInUp}>
              <Text
                variant={largeBodyText ? 'body-18' : 'body'}
                className="tw-rich-text tw-text-grey-80 dark:tw-text-grey-20"
                dangerouslySetInnerHTML={{ __html: content }}
              ></Text>
            </motion.div>
          )}
          {!!links?.length && (
            <motion.div
              variants={fadeInUp}
              className="tw-flex tw-flex-col tw-gap-md md:tw-flex-row"
            >
              {links.map(({ url, text, target }) =>
                ctaStyle === VariantTypeEnum.Primary ? (
                  <Button
                    site={site}
                    as="link"
                    key={text}
                    href={url}
                    target={target}
                    label={text}
                  />
                ) : (
                  <Cta
                    site={site}
                    key={text}
                    url={url}
                    target={target}
                    text={text}
                  />
                )
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageTitle;
