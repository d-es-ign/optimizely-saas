// Auto generated dictionary
import { ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import componentComponents from "./component";
import elementComponents from "./element";
import experienceComponents from "./experience";
import pageComponents from "./page";
import nodeComponents from "./styles"
import NonRenderableCmsContent from './non-renderable'
import { prefixDictionaryEntries } from '@/components/utils'

const componentAliases = withPrefix(componentComponents, 'Component')
const elementAliases = withPrefix(elementComponents, 'Element')
const elementComponentAliases = withPrefix(elementComponents, 'Component')
const experienceAliases = withPrefix(experienceComponents, 'Experience')
const experiencePageAliases = withPrefix(experienceComponents, 'Page')
const pageAliases = withPrefix(pageComponents, 'Page')
const nodeAliases = withPrefix(nodeComponents, 'Component')

export const cmsComponentDictionary : ComponentTypeDictionary = [
    {
        type: 'Dictionary',
        component: NonRenderableCmsContent,
    },
    {
        type: 'HeaderBlock',
        component: NonRenderableCmsContent,
    },
    {
        type: 'WebsiteFooter',
        component: NonRenderableCmsContent,
    },
    {
        type: 'Colour',
        component: NonRenderableCmsContent,
    },
    ...componentComponents,
    ...elementComponents,
    ...experienceComponents,
    ...pageComponents,
    ...nodeComponents,
    ...componentAliases,
    ...elementAliases,
    ...elementComponentAliases,
    ...experienceAliases,
    ...experiencePageAliases,
    ...pageAliases,
    ...nodeAliases
]

export default cmsComponentDictionary

function withPrefix(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary {
    const clone = list.map((entry) => ({ ...entry }))
    return prefixDictionaryEntries(clone, prefix)
}
