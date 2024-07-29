import { type OptimizelyNextPage } from '@remkoj/optimizely-cms-nextjs'
import { type BlankExperienceDataFragment, type ExperienceDataFragment, type Maybe, type ICompositionNode, BlankExperienceDataFragmentDoc } from '@/gql/graphql'
import { OptimizelyComposition, isNode, CmsEditable } from '@remkoj/optimizely-cms-react/rsc'
import { getSdk } from '@/sdk'

export const BlankExperience : OptimizelyNextPage<BlankExperienceDataFragment> = ({ data }) => 
{
    const composition = (data as ExperienceDataFragment).composition as Maybe<ICompositionNode>
    return <CmsEditable as="main" cmsFieldName="unstructuredData" className="flex-grow tw-overflow-x-hidden main-content">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
BlankExperience.displayName = "BlankExperience"
BlankExperience.getDataFragment = () => ['BlankExperienceData', BlankExperienceDataFragmentDoc]
BlankExperience.getMetaData = async (contentLink) => {
    const sdk = getSdk()
    const response = await sdk.getBlankExperienceMetaData(contentLink)
    const experienceData = (response?.BlankExperience?.items || [])[0]
    const title = "Jotun Colour Picker"
    return {
        title: title
    }
}

export default BlankExperience