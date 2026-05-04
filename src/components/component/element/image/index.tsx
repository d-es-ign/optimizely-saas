// Base Optimizely CMS Framework components
import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { type ImageElementDataFragment, ImageElementDataFragmentDoc } from "@/gql/graphql"
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'

// Image Element types and templates
import type { ImageLayoutProps } from './types'
import IconImageElement, { isIconImageLayout } from './icon-image'
import DefaultImageElement from "./default-image"

export const ImageElement : CmsComponent<ImageElementDataFragment, ImageLayoutProps> = ({ data, layoutProps, contentLink, ctx }) =>
{
    if (isIconImageLayout(layoutProps)) {
        return <CmsEditable as={ IconImageElement } ctx={ctx} data={ data } layoutProps={ layoutProps } cmsId={ contentLink.key }/>
    }
    return <CmsEditable as={ DefaultImageElement } ctx={ctx} data={ data } layoutProps={layoutProps} cmsId={ contentLink.key } />
}
ImageElement.getDataFragment = ()=>[ "ImageElementData", ImageElementDataFragmentDoc ]

export default ImageElement
