import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export async function generateMetadata() {
    return generateCityMetadata('purwokerto')
}

interface PageProps {
    searchParams: Promise<{ page?: string }>
}

export default function LokerPurwokertoPage({ searchParams }: PageProps) {
    return (
        <CityPageTemplate
            city="purwokerto"
            basePath="/loker-purwokerto"
            searchParams={searchParams}
        />
    )
}
