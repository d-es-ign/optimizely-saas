'use client'
import { type OfficeLocationDataFragment, type MenuContentFragment, type Maybe } from '@/gql/graphql'
import { getSdk } from '@/sdk'
import { CmsLink, createListKey } from '@/components/shared/cms_link'
import useBreakpoint from '@/hooks/ useBreakpoint'
import { breakpointsBelow } from '@/utility/config/breakpoints'
import BreakpointEnum from '@/components/models/enums/BreakpointEnum'
import { IImage } from '@/components/models/IImage'
import socialLinksMock from '@/components/utility/mocks/socialLinks.mocks'
import Text from '@/components/atoms/Text/Text'
import Cta from '@/components/atoms/Cta/Cta'
import SiteEnum from '@/components/models/enums/SiteEnum'
import ConditionalWrapper from '@/components/atoms/ConditionalWrapper/ConditionalWrapper'
import SocialLinks from '@/components/molecules/SocialLinks/SocialLinks'


export type FooterProps = {

}

function getFirstIfExists<T>(input: Array<T | null> | null | undefined) : T | undefined
{
    if (!input || !Array.isArray(input))
        return undefined
    return input[0] || undefined
}

export const MoseyBankFooter =  ({} : FooterProps) => {

    const year = new Date().getFullYear();
 
    const breakpoint = useBreakpoint();
    const isMobileOrTabletPortrait =
    breakpoint && breakpointsBelow(BreakpointEnum.Large).includes(breakpoint);
  
   
     const svgImage: IImage = {
        altText: 'Jotun Logo',
        url: 'https://www.jotun.com/globalassets-b2b/.com/jotun-logo.svg',
        originalHeight: 40,
        originalWidth: 140,
        imageFocalPoint: '0.5,0.5',
      };
     const data = {
        logo: svgImage,
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus eget turpis non enim sagittis volutpat.',
        cta: {
          text: 'Go to jotun.com',
          url: '/',
          linkIcon: 'arrow-right',
          target: 'self',
        },
        navigationLinks: [
          {
            text: 'About Us',
            url: '/about-us',
            linkIcon: 'arrow-right',
            target: 'self',
          },
          {
            text: 'Privacy Policy',
            url: '/privacy-policy',
            linkIcon: 'arrow-right',
            target: 'self',
          },
        ],
        secondaryLinks: [
          {
            text: 'Careers',
            url: '/careers',
            linkIcon: 'arrow-right',
            target: 'self',
          },
          {
            text: 'Contact Us',
            url: '/contact-us',
            linkIcon: 'arrow-right',
            target: 'self',
          },
        ],
        copyrightNotice: 'Jotun All Rights Reserved',
        socialLinks: socialLinksMock.links,
      };
    return    (
        <footer className="tw-text-grey-100' tw-h-auto tw-w-full tw-bg-white dark:tw-bg-grey-10">
          <div className="tw-container tw-mx-auto tw-grid tw-h-full tw-grid-cols-1 tw-gap-xs tw-px-xs tw-pb-sm tw-pt-xl md:tw-grid-cols-6 md:tw-gap-md md:tw-px-md lg:tw-grid-cols-12 lg:tw-gap-lg lg:tw-px-lg">
            {/* Column One */}
            <div className="tw-col-span-1 tw-grid tw-grid-cols-1 tw-grid-rows-3 tw-gap-xs md:tw-col-span-3 md:tw-gap-md lg:tw-col-span-6 lg:tw-grid-cols-2 lg:tw-gap-lg">
              <div className="tw-col-span-1 lg:tw-col-span-2">
                {data.logo.url && (
                  <a href="/">
                    <img
                      src={data.logo.url}
                      alt={data.logo.altText}
                      loading="lazy"
                      className="tw-h-lg tw-w-[140px]"
                    />
                  </a>
                )}
              </div>
    
              <div className="tw-col-span-1 tw-flex tw-items-end">
                {data.text && (
                  <Text variant="body-small" className="tw-text-grey-80">
                    {data.text}
                  </Text>
                )}
              </div>
              {data.cta?.url && data.cta?.text && (
                <div className="tw-col-span-1 lg:tw-col-span-2">
                  <Cta
                    site={SiteEnum.B2B}
                    linkIcon="arrow-right"
                    className="tw-col-start-2 tw-self-start"
                    url={data.cta.url}
                    text={data.cta.text}
                    target={data.cta.target}
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
                  {!!data.navigationLinks?.length && (
                    <ConditionalWrapper
                      condition={!isMobileOrTabletPortrait}
                      wrapper={(children) => (
                        <ul className="tw-flex tw-flex-col tw-items-start tw-gap-3">
                          {children}
                        </ul>
                      )}
                    >
                      {data.navigationLinks.map(({ url, text }) => (
                        <li key={text}>
                          <a href={url} >
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
                    {!!data.secondaryLinks?.length &&
                      data.secondaryLinks.map(({ url, text }) => (
                        <li key={text}>
                          <a href={url} >
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
                    {year}
                  </p>
                </div>
                <div>{data.socialLinks && <SocialLinks links={data.socialLinks} />}</div>
              </div>
            </div>
          </div>
        </footer>
    )
}

type FooterMenuProps = {
    menu?: Maybe<MenuContentFragment>
}

const FooterMenu = ( {menu}: FooterMenuProps) =>
{
    if (!menu)
        return <></>

    return <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:not-italic prose-li:pl-0">
        { menu.heading && <h1>{ menu.heading }</h1> }
        <ul className="list-none pl-0">
            { menu.links && menu.links.map(link => link && <li key={createListKey(link)}><CmsLink href={link} /></li> )}
        </ul>
    </section>
}

export default MoseyBankFooter





{/* <footer className='bg-azure py-16 lg:py-32 outer-padding dark:bg-vulcan-85'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white'>
            <div className='mb-16 col-span-2 lg:col-span-1'>
                <section className="prose prose-h1:text-[12px] prose-h1:uppercase prose-h1:font-[400] prose-h1:tracking-[1px] prose-a:text-white prose-a:underline hover:prose-a:no-underline prose-a:not-italic">
                    <h1>{ address?.title }</h1>
                    <address>
                        <p>{ address?.street1 }{ address?.street2 && <><br/>{ address?.street2 }</>}<br/>{ address?.city }, { address?.postalcode }, { address?.country }</p>
                        <p>
                            { getLabel('contactus', { fallback: 'Contact Us' }) }<br/>
                            { address?.phone && <>Phone: { address?.phone }</>}
                            { address?.email && <>E-Mail: { address?.email }</>}
                        </p>
                    </address>
                </section>
            </div>
            <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
                <FooterMenu menu={ footerInfo?.firstMenu } />
            </div>
            <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
                <FooterMenu menu={ footerInfo?.secondMenu } />
            </div>
            <div className="flex lg:justify-center col-span-2 lg:col-span-1 mb-16">
                <FooterMenu menu={ footerInfo?.thirdMenu } />
            </div>
        </div>
        <div className="container mx-auto grid text-white mt-16 lg:mt-32 lg:text-center lg:justify-center">
            <div className="lg:justify-center flex mb-16">
                <CmsImage src={ footerInfo?.logo } alt={ footerInfo.logoAlt ?? "" } loading="lazy" width={200} height={35} decoding="async" data-nimg="1" style={{color: "transparent"}} />
            </div>
            <div className="md:flex items-center md:prose-li:ml-[24px] prose-a:text-[12px] prose-p:text-[12px]">
                <p>{ getLabel('copynotice', { fallback: '© Optimizely / Remko Jantzen / Contributors. All rights reserved' }) }</p>
                <ul className="list-none md:flex mt-6 md:mt-0">
                    { footerInfo?.legal && footerInfo.legal.map(link => link && <li key={ createListKey(link)}><CmsLink href={link} /></li>)}
                </ul>
            </div>
        </div>
    </footer> */}