import { Card } from '@/components/shared/Card';
import CmsImage from '@/components/shared/cms_image';
import DateDisplay from '@/components/shared/date';
import {
  type ArticleListElementDataFragment,
  type InputMaybe,
  type Locales,
  ArticleListElementDataFragmentDoc,
} from '@/gql/graphql';
import { getLabel } from '@/labels';
import { getSdk } from '@/sdk';
import { CmsContentLink } from '@remkoj/optimizely-cms-nextjs/components';
import { type CmsComponent } from '@remkoj/optimizely-cms-react';
import { RichText } from '@remkoj/optimizely-cms-react/components';
import { getServerContext } from '@remkoj/optimizely-cms-react/rsc';
import 'server-only';

export const ArticleListElement: CmsComponent<ArticleListElementDataFragment> = async ({
  data: { articleListCount = 3 },
  contentLink: { locale },
}) => {
  const { factory } = getServerContext();
  const sdk = getSdk();
  const articleCount = articleListCount || 3;
  const articles = (
    (
      await sdk.getArticleListElementItems({
        count: articleCount,
        locale: locale as InputMaybe<Locales> | undefined,
      })
    )?.ArticlePage?.items ?? []
  ).filter(isNotNullOrUndefined);
  const byLabel = await getLabel('By', { locale, fallback: 'By' });
  const andLabel = await getLabel('and', { locale, fallback: 'and' });

  if (articleCount > articles.length) {
    const missingItems = articleCount - articles.length;
    for (let index = 0; index < missingItems; index++) {
      articles.push(articles[0]);
    }
  }

  return (
    <div className="tw-mx-auto tw-my-2xl tw-w-full tw-max-w-[1440px]">
      <h2 className="tw-mb-xs tw-w-[61%] tw-border-b-4 tw-border-b-yellow tw-pb-xxs tw-font-sans tw-text-3xl tw-font-semibold tw-uppercase">
        Related articles
      </h2>
      <div className="tw-relative tw-grid tw-grid-cols-1 tw-gap-4xl tw-pb-12 lg:tw-grid-cols-2">
        {articles.map((article) => {
          let authors: string | undefined = undefined;
          const authorList = (article.articleAuthors ?? []).filter(isNotNullOrUndefined);
          if (authorList.length > 1) {
            const lastAuthor = authorList.slice(-1);
            const firstAuthors = authorList.slice(0, -1);
            authors = `${firstAuthors.join(', ')} ${andLabel} ${lastAuthor[0]}`;
          } else {
            authors = authorList[0];
          }

          return (
            <div
              key={article.articleMeta?.key + Math.random().toString()}
              className="tw-article-list-item tw-relative tw-h-full tw-w-full"
            >
              <CmsContentLink href={article}>
                {/*
                  <article className="prose max-w-none p-8 pb-16 bg-white rounded-[20px] w-full h-full before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:z-[-1] before:rounded-[20px] before:bg-azure before:transition-transform before:ease-in-out before:duration-300 hover:before:translate-x-8 hover:before:translate-y-8 focus:before:translate-x-8 focus:before:translate-y-8 dark:bg-vulcan-85 dark:text-ghost-white">
                */}
                <Card cardColor="white" as="article" className="tw-h-full tw-w-full" withHoverEffect>
                  <CmsImage
                    src={article.articleHeroImage}
                    width={620}
                    height={430}
                    className="tw-w-full tw-rounded-[20px]"
                    alt={article.articleTitle ?? ''}
                  />
                  <h3 className="tw-my-0 tw-mt-[16px] tw-pb-xs tw-font-serif tw-text-2xl">
                    {article?.articleTitle ?? ''}
                  </h3>
                  {article?.articleSummary && <RichText factory={factory} text={article?.articleSummary?.json} />}
                  <div className="tw-mt-[16px] tw-flex tw-justify-between">
                    <p className="tw-text-pale-sky tw-my-0 tw-text-[12px]">
                      {byLabel} {authors ? authors : 'Jotun'}
                    </p>
                    <p className="tw-text-pale-sky tw-my-0 tw-text-[12px]">
                      <DateDisplay value={article.articleMeta?.published ?? null} />
                    </p>
                  </div>
                </Card>
                {/*</article>*/}
              </CmsContentLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
ArticleListElement.getDataFragment = () => ['ArticleListElementData', ArticleListElementDataFragmentDoc];

export default ArticleListElement;

function isNotNullOrUndefined<T>(input?: T | null | undefined): input is T {
  return input ? true : false;
}
