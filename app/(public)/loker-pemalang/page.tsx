import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export async function generateMetadata() {
    return generateCityMetadata('pemalang')
}

interface PageProps {
    searchParams: Promise<{ page?: string }>
}

export default function LokerPemalangPage({ searchParams }: PageProps) {
    return (
        <CityPageTemplate
            city="pemalang"
            basePath="/loker-pemalang"
            searchParams={searchParams}
        />
    )
}
