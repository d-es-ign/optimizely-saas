import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import { extractSettings } from "@remkoj/optimizely-cms-react/components"
import { type DefaultColumnProps } from "../displayTemplates"

export const DefaultColumn : CmsLayoutComponent<DefaultColumnProps> = ({ layoutProps, children }) => {
    const tpl = layoutProps?.template ?? "none"
    const baseClasses : string[] = ['vb:column', 'vb:template:'+tpl, 'flex-1']
    const cssClasses : string[] = ['tw-flex', 'tw-flex-col']
    const { 
        contentSpacing = 'none', 
        justifyContent = 'start', 
        alignContent = 'start', 
        showFrom = 'always', 
        minWidth = 'auto', 
        overflow = 'full'
    } = extractSettings(layoutProps)

    switch (contentSpacing) {
        case 'small':
            cssClasses.push('tw-px-sm tw-py-sm')
            break;
        case 'medium':
            cssClasses.push('tw-px-md tw-py-md')
            break;
        case 'large':
            cssClasses.push('tw-px-lg tw-py-lg lg:tw-px-lg lg:tw-py-lg')
            break;
        case 'xl':
            cssClasses.push('tw-px-[48px] tw-py-[48px]')
            break;
        case 'xxl':
            cssClasses.push('tw-px-[72px] tw-py-[72px]')
            break;
        default:
            cssClasses.push('gap-0 py-0')
            break;
    }

    switch (justifyContent) {
        case 'center':
            cssClasses.push('tw-justify-center')
            break;
        case 'end':
            cssClasses.push('tw-justify-end')
            break;
        default:
            cssClasses.push('tw-justify-start')
            break;
    }

    switch (alignContent) {
        case 'center':
            cssClasses.push('tw-items-center')
            break;
        case 'end':
            cssClasses.push('tw-items-end')
            break;
        default:
            cssClasses.push('tw-items-start')
            break;
    }

    switch (showFrom) {
        case 'fromSmall':
            cssClasses.push('hidden sm:block')
            break;
        case 'fromMedium':
            cssClasses.push('hidden md:block')
            break;
        case 'fromLarge':
            cssClasses.push('hidden lg:block')
            break;
    }

    switch (minWidth) {
        case 'small':
            cssClasses.push('lg:min-w-[24rem]')
            break;
        case 'medium':
            cssClasses.push('lg:min-w-[48rem]')
            break;
        case 'large':
            cssClasses.push('lg:min-w-[64rem]')
            break;
    }

    cssClasses.push('relative top-0')
    let useChildContainer = false
    switch (overflow) {
        case 'right':
            useChildContainer = true
            cssClasses.push('left-0')
            break
        case 'left':
            useChildContainer = true
            cssClasses.push('right-0')
            break
        case 'clip':
            cssClasses.push('overflow-hidden')
            break;
    }

    switch (showFrom) {
        case 'fromSmall':
            baseClasses.push('hidden sm:block')
            break;
        case 'fromMedium':
            baseClasses.push('hidden md:block')
            break;
        case 'fromLarge':
            baseClasses.push('hidden lg:block')
            break;
    }

    return useChildContainer ? <div className={ baseClasses.join(' ')+' relative' }>
        <div className={ cssClasses.join(' ') }>
            { children }
        </div>
    </div> : <div className={ [...baseClasses, ...cssClasses].join(' ') }>{ children }</div>
}

export default DefaultColumn