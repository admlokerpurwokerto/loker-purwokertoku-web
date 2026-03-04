import { defineQuery } from 'next-sanity'

// Get latest N jobs across all cities
export const LATEST_JOBS_QUERY = defineQuery(
    `*[_type == "jobPosting"] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    company,
    companyLogo,
    designImage,
    city,
    jobType,
    salary,
    deadline,
    isFeatured,
    publishedAt
  }`
)

// Get featured/hero jobs (isFeatured == true, top 3)
export const HERO_JOBS_QUERY = defineQuery(
    `*[_type == "jobPosting" && isFeatured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    company,
    companyLogo,
    designImage,
    city,
    jobType,
    salary,
    deadline,
    isFeatured,
    publishedAt
  }`
)

// Get jobs by city with limit
export const JOBS_BY_CITY_QUERY = defineQuery(
    `*[_type == "jobPosting" && city == $city] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    company,
    companyLogo,
    designImage,
    city,
    jobType,
    salary,
    deadline,
    publishedAt
  }`
)

// Get paginated jobs by city
export const JOBS_BY_CITY_PAGINATED_QUERY = defineQuery(
    `*[_type == "jobPosting" && city == $city] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    company,
    companyLogo,
    designImage,
    city,
    jobType,
    salary,
    deadline,
    publishedAt
  }`
)

// Count jobs by city
export const JOBS_BY_CITY_COUNT_QUERY = defineQuery(
    `count(*[_type == "jobPosting" && city == $city])`
)

// Get all jobs paginated (for "Semua Loker Terbaru")
export const ALL_JOBS_PAGINATED_QUERY = defineQuery(
    `*[_type == "jobPosting"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    company,
    companyLogo,
    designImage,
    city,
    jobType,
    salary,
    deadline,
    publishedAt
  }`
)

// Count all jobs
export const ALL_JOBS_COUNT_QUERY = defineQuery(
    `count(*[_type == "jobPosting"])`
)

// Get single job by slug
export const JOB_BY_SLUG_QUERY = defineQuery(
    `*[_type == "jobPosting" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    company,
    companyLogo,
    designImage,
    city,
    jobType,
    salary,
    description,
    requirements,
    contactInfo,
    deadline,
    isFeatured,
    publishedAt
  }`
)

// Get related jobs (same city, exclude current)
export const RELATED_JOBS_QUERY = defineQuery(
    `*[_type == "jobPosting" && city == $city && _id != $currentId] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    company,
    companyLogo,
    designImage,
    city,
    jobType,
    salary,
    publishedAt
  }`
)
