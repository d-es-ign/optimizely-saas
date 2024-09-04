import Button from "@/components/shared/button"
import { type LinkDataFragment } from "@/gql/graphql"
import Link from 'next/link'
import { type ComponentProps } from "react"

export type BaseCTAProps = { 
    href?: LinkDataFragment | null,
    text?: string | null,
    buttonType?: ComponentProps<typeof Button>['buttonType'] | "link"
    buttonColor?: ComponentProps<typeof Button>['buttonColor']
} & Omit<JSX.IntrinsicElements['div'], 'href' | 'text'>

export function BaseCTA({ href, text = 'Call-to-action', buttonType = "primary", buttonColor = "default", className, ...additionalProps }: BaseCTAProps ) {
    const hrefUrl = href ? new URL(href.default ?? '/', href.base ?? 'https://example.com') : undefined

    const primaryC = ' tw-bg-yellow tw-text-black hover:tw-bg-yellow-hover focus-visible:tw-bg-yellow focus-visible:tw-ring-yellow focus-visible:tw-ring-offset-grey-100 active:tw-bg-yellow-active disabled:tw-pointer-events-none disabled:tw-border-yellow-disabled disabled:tw-text-grey-60 disabled:tw-bg-yellow-disabled focus-visible:after:tw-border-black';

    const secondaryC = 'focus-visible:tw-bg-grey-80 focus-visible:tw-text-white focus-visible:tw-ring-grey-80 focus-visible:tw-ring-offset-white disabled:tw-pointer-events-none disabled:tw-border-grey-30 disabled:tw-text-grey-30 disabled:tw-text-grey-60 disabled:tw-bg-grey-30 dark:focus-visible:tw-bg-white dark:focus-visible:tw-text-grey-100 dark:focus-visible:tw-ring-white dark:focus-visible:tw-ring-offset-grey-100 dark:disabled:tw-border-grey-80 dark:disabled:tw-bg-grey-80 dark:disabled:tw-text-white focus-visible:after:tw-border-white dark:focus-visible:after:tw-border-black';

    const classes = `tw-text-lg tw-font-semibold tw-flex tw-items-center tw-rounded tw-relative after:tw-content-[''] after:tw-box-content focus-visible:after:tw-rounded focus-visible:tw-outline-none tw-transition-colors focus-visible:after:tw-absolute focus-visible:after:tw-inset-[2px] focus-visible:after:tw-border-2 focus-visible:after:tw-block tw-px-4 tw-py-2 tw-cursor-pointer ${className} ${buttonType ==='primary' ? primaryC : buttonType ==='secondary' ? secondaryC : ''}`;


    return <div className="tw-w-max" { ...additionalProps }>
        { 
            !hrefUrl ?
            <span className={ classes }>{ text }</span> :
            buttonType == "link" ? 
            <Link href={ hrefUrl } className={ classes }>{ text }</Link> : 
            <Button url={ hrefUrl } buttonType={ buttonType } buttonVariant="cta" className={ classes } buttonColor={ buttonColor }>{ text }</Button>
        }
    </div>
}

export default BaseCTA