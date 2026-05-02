import 'server-only'
import { type IOptiGraphClient } from "@remkoj/optimizely-graph-client"
import { getServerClient } from "@remkoj/optimizely-cms-nextjs"
import { getSdk as getGeneratedSdk, type Sdk } from "@/gql"
import { cache } from 'react'

/**
 * Get an instance of the SDK generated from the queries within the frontend.
 * 
 * @returns     The SDK Instance
 */
export const getSdk = cache<() => Sdk>(() => {
    return getGeneratedSdk(getServerClient() as IOptiGraphClient)
})
