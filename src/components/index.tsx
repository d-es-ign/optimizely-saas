// Get React Cache
import { cache } from 'react'

// Get the parts from the Optimizely CMS SDK
import { getFactory, RichTextComponentDictionary as DefaultComponents } from '@remkoj/optimizely-cms-react/rsc'

// Get the implementation parts
import { prefixDictionaryEntries } from "@/components/utils"
import cmsComponents from './cms'
import components from './component'
import richText from './rich-text'

export const getComponentFactory = cache(() => {
    const factory = getFactory()
    const componentAliases = withPrefix(components, 'Component')
    const richTextAliases = withPrefix(richText, 'RichText')
    
    factory.registerAll(cmsComponents)
    factory.registerAll(components)
    factory.registerAll(componentAliases)
    factory.registerAll(DefaultComponents)
    factory.registerAll(richText)
    factory.registerAll(richTextAliases) // Register the rich text components after the defaults to override them
    return factory
})

export default getComponentFactory

function withPrefix(dictionary: typeof components, prefix: string) {
    const clone = dictionary.map((entry) => ({ ...entry }))
    return prefixDictionaryEntries(clone, prefix)
}
