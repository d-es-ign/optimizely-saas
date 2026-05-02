import { OnPageEdit } from '@remkoj/optimizely-cms-nextjs'
import createFactory from '@/components'
import { getAuthorizedServerClient } from '@remkoj/optimizely-cms-nextjs'
import { getContentById } from '@/gql/functions'

type PreviewPageProps = {
    params: Promise<Record<string, string | string[] | undefined>>
    searchParams: Promise<Record<string, string | undefined>>
}

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function PreviewPage(props: PreviewPageProps) {
    const EditPage = OnPageEdit.createEditPageComponent(createFactory(), {
        loader: getContentById,
        clientFactory: (token?: string) => {
            const client = getAuthorizedServerClient(token)
            client.updateFlags({ queryCache: false, cache: false })
            return client
        }
    })

    return EditPage(props as any)
}
