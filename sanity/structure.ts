import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Dashboard Admin')
    .items([
      // All Job Postings
      S.listItem()
        .title('Semua Lowongan')
        .schemaType('jobPosting')
        .child(
          S.documentTypeList('jobPosting')
            .title('Semua Lowongan Kerja')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),

      S.divider(),

      // By City
      S.listItem()
        .title('Loker Purwokerto')
        .child(
          S.documentList()
            .title('Lowongan di Purwokerto')
            .filter('_type == "jobPosting" && city == "purwokerto"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('Loker Cilacap')
        .child(
          S.documentList()
            .title('Lowongan di Cilacap')
            .filter('_type == "jobPosting" && city == "cilacap"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('Loker Purbalingga')
        .child(
          S.documentList()
            .title('Lowongan di Purbalingga')
            .filter('_type == "jobPosting" && city == "purbalingga"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('Loker Kebumen')
        .child(
          S.documentList()
            .title('Lowongan di Kebumen')
            .filter('_type == "jobPosting" && city == "kebumen"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('Loker Pemalang')
        .child(
          S.documentList()
            .title('Lowongan di Pemalang')
            .filter('_type == "jobPosting" && city == "pemalang"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
    ])
