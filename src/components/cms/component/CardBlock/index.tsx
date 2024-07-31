import { CardBlockDataFragmentDoc, type CardBlockDataFragment, type ButtonBlockPropertyDataFragment, type ButtonBlockDataFragment } from "@/gql/graphql";
import Image from '@/components/shared/cms_image'
import { CmsEditable, CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import AnimatedImage from "./motion";
import ButtonBlock from '@/components/component/block/button_block'

/**
 * Card Component
 * Reusable card component
 */
export const CardBlockComponent : CmsComponent<CardBlockDataFragment> = ({ data: { layout: imageLayout = "before", image, heading = "", subheading = "", description = {json: null}, color = "blue", link: button, icon }, inEditMode }) => {
    const additionalClasses: string[] = [];
    const innerClasses: string[] = [];
    const buttonClasses : string[] = [];

    switch (color) {
        case "white":
            additionalClasses.push("tw-bg-white tw-border-[2px]");
            innerClasses.push("tw-text-black");
            break;

        case "blue":
            additionalClasses.push("tw-bg-blue");
            innerClasses.push("tw-text-white");
            if (button) {
                buttonClasses.push("light");
            }
            break;

        case "green":
            additionalClasses.push("tw-bg-green");
            innerClasses.push("tw-text-white");
            if (button) {
                buttonClasses.push("btn--light");
            }
            break;

        case "red":
            additionalClasses.push("tw-bg-red");
            innerClasses.push("tw-text-white");
            if (button) {
                buttonClasses.push("btn--dark");
            }
            break;

        case "beige":
            additionalClasses.push("tw-bg-background-beige");
            innerClasses.push("tw-text-black");
            if (button) {
                buttonClasses.push("btn--dark");
            }
            break;
    }

    return (
<section className={`tw-w-full tw-h-full tw-p-[20px] lg:tw-py-[120px] lg:tw-px-[48px] rounded-[40px] @container/card ${additionalClasses.join(" ")}`}>
    <div className="tw-flex tw-justify-center tw-w-full">
        <div className={`tw-h-auto tw-flex tw-flex-col tw-max-w-[30%] tw-mr-[48px] ${innerClasses.join(" ")} dark:!text-ghost-white dark:prose-h3:text-ghost-white dark:prose-h2:text-ghost-white`}>
            <div>
            { (icon || inEditMode) && <CmsEditable as={Image} cmsFieldName="CardIcon" src={ icon } alt={""} width={48} height={48} /> }
            { (heading || inEditMode) && <CmsEditable as="h2" className="tw-text-xl tw-my-[20px]" cmsFieldName="CardHeading">{ heading }</CmsEditable> }
            { (subheading || inEditMode) && <CmsEditable as="h3" className="tw-text-l tw-my-[20px]" cmsFieldName="CardSubHeading">{ subheading }</CmsEditable> }
            </div>
            { (description || inEditMode) && <CmsEditable as={RichText} className="tw-text-sm" cmsFieldName="CardDescription" text={ description?.json } /> }
            { button && <CmsEditable as={ButtonBlock} cmsFieldName="CardButton" contentLink={{ key: null }} data={{
                ...button,
                __typename: undefined,          // Remove data type, so only data fields will be matched
                ' $fragmentName': undefined,    // Remove fragment source, so only data fields will be matched
                className: `${ (button as ButtonBlockPropertyDataFragment | undefined | null)?.className ?? '' } ${ buttonClasses.join(' ')}`.trim() || undefined // Apply additional classes
            }} /> }
        </div>
        { (image || inEditMode) && <AnimatedImage imageLayout={ imageLayout }><CmsEditable as={Image} cmsFieldName="CardImage" className="rounded-[40px] w-full" src={ image } alt={""} width={660} height={440} /></AnimatedImage> }
    </div>
</section>);
}
CardBlockComponent.displayName = "Card Component (Component/CardBlock)"
CardBlockComponent.getDataFragment = () => ['CardBlockData', CardBlockDataFragmentDoc]

export default CardBlockComponent

function isButtonBlock(toTest ?: Record<string, any> | null) : toTest is ButtonBlockPropertyDataFragment
{
    return typeof(toTest) == 'object' && toTest != null && (toTest as ButtonBlockPropertyDataFragment).text != null
}