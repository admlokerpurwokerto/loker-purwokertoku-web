import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export async function generateMetadata() {
    return generateCityMetadata('purbalingga')
}

interface PageProps {
    searchParams: Promise<{ page?: string }>
}

export default function LokerPurbalinggaPage({ searchParams }: PageProps) {
    return (
        <CityPageTemplate
            city="purbalingga"
            basePath="/loker-purbalingga"
            searchParams={searchParams}
        />
    )
}
