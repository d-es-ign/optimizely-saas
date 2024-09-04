import 'server-only'
import { type ImageElementDataFragment } from "@/gql/graphql"
//import Image from 'next/image'
import { extractSettings } from '@remkoj/optimizely-cms-react/components'

// To be moved to library
import Image from '@/components/shared/cms_image'
import { ImageComponent, type IconImageLayoutProps, type ImageLayoutProps } from './types'

export const IconImageElement : ImageComponent<ImageElementDataFragment, IconImageLayoutProps> = ({ data: { altText, imageLink }, layoutProps, ...props }) => {
    const { 
        roundedCorners="none",
        size="small"
    } = extractSettings(layoutProps)
    const cssClasses : Array<string> = ["not-prose tw-relative tw-aspect-square"]

    switch (roundedCorners) {
        case 'small':
            cssClasses.push('tw-rounded')
            break;
        case 'medium':
            cssClasses.push('tw-rounded-md')
            break;
        case 'full':
            cssClasses.push('tw-rounded-full')
            break;
        default:
            // No rounded classes
            break;
    }

    switch (size) {
        case 'small':
            cssClasses.push('tw-w-8 tw-h-8')
            break
        case 'medium':
            cssClasses.push('tw-w-12 tw-h-12')
            break
        case 'large':
            cssClasses.push('tw-w-20 tw-h-20')
            break
        default:
            cssClasses.push('tw-w-8 tw-h-8')
            break
    }

    return <div className={ cssClasses.join(' ')} { ...props }>
        <Image alt={altText ?? ""} src={ imageLink } fill className="tw-object-cover" />
    </div>
}

export function isIconImageLayout(layoutProps : ImageLayoutProps | undefined | null) : layoutProps is IconImageLayoutProps
{
    return layoutProps?.template == "IconImageElement"
}

export default IconImageElement