import "server-only";
import { getSdk } from "@/sdk";
import HeaderNavigation from "./Header";
import headerData from "../../utility/mocks/header.mocks";
import { ILink } from "../../models/ILink";
import { ContentReference } from "../../../gql/graphql";

export async function Header() {
  const sdk = getSdk();
  const config = getFirstIfExists((await sdk.getHeader())?.menuItems?.items);
  if (!config) {
    console.log("🔴 Header not found");
    return null;
  }
  const secondaryLinks = filterMaybeArray(config.secondaryLinks);
  const logo = (config?.logo as ContentReference)?.url?.default || "";

  return (
    <HeaderNavigation
      {...headerData}
      animation={true}
      featuredContentText={config.featuredContentText || ""}
      secondaryLinks={secondaryLinks as ILink[]}
      logo={logo}
    />
  );
}

export default Header;

function getFirstIfExists<T>(
  input: Array<T | null> | null | undefined,
): T | undefined {
  if (!input || !Array.isArray(input)) return undefined;
  return input[0] || undefined;
}

function filterMaybeArray<T>(
  input: Array<T | null> | T | null | undefined,
): Array<T> {
  if (!input) return [];
  if (!Array.isArray(input)) return [input];
  return input.filter((x) => x) as Array<T>;
}
