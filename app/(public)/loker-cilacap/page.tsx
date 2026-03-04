import CityPageTemplate, { generateCityMetadata } from '@/components/CityPageTemplate'

export async function generateMetadata() {
    return generateCityMetadata('cilacap')
}

interface PageProps {
    searchParams: Promise<{ page?: string }>
}

export default function LokerCilacapPage({ searchParams }: PageProps) {
    return (
        <CityPageTemplate
            city="cilacap"
            basePath="/loker-cilacap"
            searchParams={searchParams}
        />
    )
}
