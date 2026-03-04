import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File
        const folder = (formData.get('folder') as string) || 'loker-purwokertoku/logos'

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 })
        }

        // Convert file to base64
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const base64 = `data:${file.type};base64,${buffer.toString('base64')}`

        // Different transformations based on folder type
        const isDesign = folder.includes('designs')
        const transformation = isDesign
            ? [
                  { width: 1200, height: 1600, crop: 'limit' as const },
                  { quality: 'auto' as const, fetch_format: 'auto' as const },
              ]
            : [
                  { width: 400, height: 400, crop: 'limit' as const },
                  { quality: 'auto' as const, fetch_format: 'auto' as const },
              ]

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(base64, {
            folder,
            transformation,
        })

        return NextResponse.json({
            url: result.secure_url,
            public_id: result.public_id,
        })
    } catch (error) {
        console.error('Cloudinary upload error:', error)
        return NextResponse.json(
            { error: 'Upload failed' },
            { status: 500 }
        )
    }
}
