import { svgImage } from "./image.mocks";
import SiteEnum from "@/components/models/enums/SiteEnum";
import { IFooter } from "@/components/models/IFooter";
import socialLinksMock from "./socialLinks.mocks";

export const footer: IFooter = {
  logo: svgImage,
  site: SiteEnum.B2B,
  text: "Learn more about Jotun or visit other industry pages.",
  cta: {
    text: "Go to jotun.com",
    url: "/",
    linkIcon: "arrow-right",
    target: "self",
  },
  navigationLinks: [
    {
      text: "About Us",
      url: "/about-us",
      linkIcon: "arrow-right",
      target: "self",
    },
    {
      text: "Privacy Policy",
      url: "/privacy-policy",
      linkIcon: "arrow-right",
      target: "self",
    },
  ],
  secondaryLinks: [
    {
      text: "Careers",
      url: "/careers",
      linkIcon: "arrow-right",
      target: "self",
    },
    {
      text: "Contact Us",
      url: "/contact-us",
      linkIcon: "arrow-right",
      target: "self",
    },
  ],
  copyrightNotice: "Jotun All Rights Reserved",
  socialLinks: socialLinksMock.links,
};

export default footer;
