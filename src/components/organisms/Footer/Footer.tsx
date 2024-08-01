"use client";
import { type MenuContentFragment, type Maybe } from "@/gql/graphql";
import { getSdk } from "@/sdk";
import { CmsLink, createListKey } from "@/components/shared/cms_link";
import useBreakpoint from "@/hooks/ useBreakpoint";
import { breakpointsBelow } from "@/utility/config/breakpoints";
import BreakpointEnum from "@/components/models/enums/BreakpointEnum";
import { IImage } from "@/components/models/IImage";
import socialLinksMock from "@/components/utility/mocks/socialLinks.mocks";
import Text from "@/components/atoms/Text/Text";
import Cta from "@/components/atoms/Cta/Cta";
import SiteEnum from "@/components/models/enums/SiteEnum";
import ConditionalWrapper from "@/components/atoms/ConditionalWrapper/ConditionalWrapper";
import SocialLinks from "@/components/molecules/SocialLinks/SocialLinks";
import footerMock from "../../utility/mocks/footer.mocks";

export type FooterProps = {};

function getFirstIfExists<T>(
  input: Array<T | null> | null | undefined,
): T | undefined {
  if (!input || !Array.isArray(input)) return undefined;
  return input[0] || undefined;
}

export const Footer = ({}: FooterProps) => {
  const year = new Date().getFullYear();

  const breakpoint = useBreakpoint();
  const isMobileOrTabletPortrait =
    breakpoint && breakpointsBelow(BreakpointEnum.Large).includes(breakpoint);

  return (
    <footer className="tw-text-grey-100' tw-h-auto tw-w-full tw-bg-white dark:tw-bg-grey-10">
      <div className="tw-container tw-mx-auto tw-grid tw-h-full tw-grid-cols-1 tw-gap-xs tw-px-xs tw-pb-sm tw-pt-xl md:tw-grid-cols-6 md:tw-gap-md md:tw-px-md lg:tw-grid-cols-12 lg:tw-gap-lg lg:tw-px-lg">
        {/* Column One */}
        <div className="tw-col-span-1 tw-grid tw-grid-cols-1 tw-grid-rows-3 tw-gap-xs md:tw-col-span-3 md:tw-gap-md lg:tw-col-span-6 lg:tw-grid-cols-2 lg:tw-gap-lg">
          <div className="tw-col-span-1 lg:tw-col-span-2">
            {footerMock.logo.url && (
              <a href="/">
                <img
                  src={footerMock.logo.url}
                  alt={footerMock.logo.altText}
                  loading="lazy"
                  className="tw-h-lg tw-w-[140px]"
                />
              </a>
            )}
          </div>

          <div className="tw-col-span-1 tw-flex tw-items-end">
            {footerMock.text && (
              <Text variant="body-small" className="tw-text-grey-80">
                {footerMock.text}
              </Text>
            )}
          </div>
          {footerMock.cta?.url && footerMock.cta?.text && (
            <div className="tw-col-span-1 lg:tw-col-span-2">
              <Cta
                site={SiteEnum.B2B}
                linkIcon="arrow-right"
                className="tw-col-start-2 tw-self-start"
                url={footerMock.cta.url}
                text={footerMock.cta.text}
                target={footerMock.cta.target}
                enableDarkMode={false}
              />
            </div>
          )}
        </div>

        {/* Column Two */}
        <div className="tw-col-span-1 tw-grid tw-grid-cols-1 tw-gap-xs md:tw-col-span-3 md:tw-grid-rows-3 md:tw-gap-md lg:tw-col-span-6 lg:tw-gap-lg">
          <div className="tw-col-span-1 tw-grid tw-grid-cols-1 md:tw-row-span-2 md:tw-gap-md lg:tw-grid-cols-2 lg:tw-gap-lg">
            <ConditionalWrapper
              condition={!!isMobileOrTabletPortrait}
              wrapper={(children) => (
                <ul className="tw-flex tw-flex-col tw-items-start tw-gap-3">
                  {children}
                </ul>
              )}
            >
              {!!footerMock.navigationLinks?.length && (
                <ConditionalWrapper
                  condition={!isMobileOrTabletPortrait}
                  wrapper={(children) => (
                    <ul className="tw-flex tw-flex-col tw-items-start tw-gap-3">
                      {children}
                    </ul>
                  )}
                >
                  {footerMock.navigationLinks.map(({ url, text }) => (
                    <li key={text}>
                      <a href={url}>
                        <Text variant="body-small">{text}</Text>
                      </a>
                    </li>
                  ))}
                </ConditionalWrapper>
              )}
              <ConditionalWrapper
                condition={!isMobileOrTabletPortrait}
                wrapper={(children) => (
                  <ul className="tw-flex tw-flex-col tw-items-start tw-gap-3">
                    {children}
                  </ul>
                )}
              >
                {!!footerMock.secondaryLinks?.length &&
                  footerMock.secondaryLinks.map(({ url, text }) => (
                    <li key={text}>
                      <a href={url}>
                        <Text variant="body-small">{text}</Text>
                      </a>
                    </li>
                  ))}
                <li>
                  <div className="cookie-footer-link tw-font-sans tw-text-sm">
                    <button id="ot-sdk-btn" className="ot-sdk-show-settings" />
                  </div>
                </li>
              </ConditionalWrapper>
            </ConditionalWrapper>
          </div>

          <div className="tw-col-span-1 tw-grid tw-grid-cols-1 tw-grid-rows-2 tw-gap-xs md:tw-gap-md lg:tw-grid-cols-2 lg:tw-grid-rows-1 lg:tw-gap-lg">
            <div>
              <p className="tw-text-xs tw-text-grey-80">
                {year} © Jotun All Rights Reserved
              </p>
            </div>
            <div>
              {footerMock.socialLinks && (
                <SocialLinks links={footerMock.socialLinks} />
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterMenuProps = {
  menu?: Maybe<MenuContentFragment>;
};

const FooterMenu = ({ menu }: FooterMenuProps) => {
  if (!menu) return <></>;

  return (
    <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:not-italic prose-li:pl-0">
      {menu.heading && <h1>{menu.heading}</h1>}
      <ul className="list-none pl-0">
        {menu.links &&
          menu.links.map(
            (link) =>
              link && (
                <li key={createListKey(link)}>
                  <CmsLink href={link} />
                </li>
              ),
          )}
      </ul>
    </section>
  );
};

export default Footer;
