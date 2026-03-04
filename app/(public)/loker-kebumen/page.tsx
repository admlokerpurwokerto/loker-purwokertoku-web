import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export async function generateMetadata() {
    return generateCityMetadata('kebumen')
}

interface PageProps {
    searchParams: Promise<{ page?: string }>
}

export default function LokerKebumenPage({ searchParams }: PageProps) {
    return (
        <CityPageTemplate
            city="kebumen"
            basePath="/loker-kebumen"
            searchParams={searchParams}
        />
    )
}
