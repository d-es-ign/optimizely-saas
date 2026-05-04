import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { type HeadingElementDataFragment, HeadingElementDataFragmentDoc } from "@/gql/graphql"
import { type HeadingLayoutProps } from "./types"

import { isDefaultTemplate, DefaultHeadingElement } from "./default_heading"
import { isAnimatedTemplate, AnimatedHeadingElement } from "./animated_heading"
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'

export const HeadingElement : CmsComponent<HeadingElementDataFragment, HeadingLayoutProps> = ({ data, contentLink, layoutProps, ctx }) => 
{
    if (isDefaultTemplate(layoutProps)) {
        return <CmsEditable as={DefaultHeadingElement} ctx={ctx} cmsId={ contentLink.key } data={ data } layoutProps={ layoutProps } />
    } 
    if (isAnimatedTemplate(layoutProps)) {
        return <CmsEditable as={AnimatedHeadingElement} ctx={ctx} cmsId={ contentLink.key } data={ data } layoutProps={ layoutProps } />
    }
    return <CmsEditable as="div" ctx={ctx} className="tw-text-5xl tw-p-4 md:tw-p-8 xl:tw-p-10" cmsId={ contentLink.key }>{ data?.headingText ?? ""}</CmsEditable>
}
HeadingElement.getDataFragment = () => ['HeadingElementData', HeadingElementDataFragmentDoc]

export default HeadingElement
