'use client'

import React, { useCallback, useState } from 'react'
import { set, unset, type StringInputProps } from 'sanity'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const PreviewWrapper = styled.div<{ $isDesign?: boolean }>`
    position: relative;
    width: ${(props) => (props.$isDesign ? '240px' : '120px')};
    height: ${(props) => (props.$isDesign ? '320px' : '120px')};
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid #e2e8f0;
    background: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Placeholder = styled.div`
    color: #94a3b8;
    font-size: 13px;
    text-align: center;
    padding: 8px;
`

const ButtonRow = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
`

const UploadButton = styled.label<{ $disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background: ${(props) => (props.$disabled ? '#94a3b8' : '#2563eb')};
    color: white;
    font-size: 13px;
    font-weight: 600;
    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
    transition: background 0.2s;

    &:hover {
        background: ${(props) => (props.$disabled ? '#94a3b8' : '#1d4ed8')};
    }
`

const RemoveButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: white;
    color: #ef4444;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #fef2f2;
        border-color: #fecaca;
    }
`

const HiddenInput = styled.input`
    display: none;
`

const StatusText = styled.span<{ $error?: boolean }>`
    font-size: 12px;
    color: ${(props) => (props.$error ? '#ef4444' : '#64748b')};
`

const UrlText = styled.span`
    font-size: 11px;
    color: #94a3b8;
    word-break: break-all;
    max-width: 400px;
    display: block;
`

export default function CloudinaryUploadInput(props: StringInputProps) {
    const { value, onChange, path } = props
    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Detect if this is a design image field based on the field path
    const fieldName = path.length > 0 ? String(path[path.length - 1]) : ''
    const isDesign = fieldName === 'designImage'
    const folder = isDesign
        ? 'loker-purwokertoku/designs'
        : 'loker-purwokertoku/logos'
    const maxSize = isDesign ? 10 : 5 // MB
    const uploadLabel = isDesign ? 'Upload Desain' : 'Upload Logo'
    const placeholderText = isDesign ? 'Belum ada desain' : 'Belum ada logo'

    const handleUpload = useCallback(
        async (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0]
            if (!file) return

            // Validate file type
            if (!file.type.startsWith('image/')) {
                setError('Hanya file gambar yang diperbolehkan')
                return
            }

            // Validate file size
            if (file.size > maxSize * 1024 * 1024) {
                setError(`Ukuran file maksimal ${maxSize}MB`)
                return
            }

            setUploading(true)
            setError(null)

            try {
                const formData = new FormData()
                formData.append('file', file)
                formData.append('folder', folder)

                const response = await fetch('/api/cloudinary-upload', {
                    method: 'POST',
                    body: formData,
                })

                if (!response.ok) {
                    throw new Error('Upload gagal')
                }

                const data = await response.json()
                onChange(set(data.url))
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Upload gagal')
            } finally {
                setUploading(false)
                // Reset input so same file can be re-selected
                event.target.value = ''
            }
        },
        [onChange, maxSize, folder]
    )

    const handleRemove = useCallback(() => {
        onChange(unset())
        setError(null)
    }, [onChange])

    return (
        <Container>
            {/* Image Preview */}
            <PreviewWrapper $isDesign={isDesign}>
                {value ? (
                    <PreviewImage src={value} alt="Preview" />
                ) : (
                    <Placeholder>
                        {uploading ? 'Mengupload...' : placeholderText}
                    </Placeholder>
                )}
            </PreviewWrapper>

            {/* Buttons */}
            <ButtonRow>
                <UploadButton $disabled={uploading}>
                    <HiddenInput
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={uploading}
                    />
                    {uploading ? '⏳ Mengupload...' : `📤 ${uploadLabel}`}
                </UploadButton>

                {value && (
                    <RemoveButton type="button" onClick={handleRemove}>
                        🗑️ Hapus
                    </RemoveButton>
                )}
            </ButtonRow>

            {/* Status */}
            {error && <StatusText $error>{error}</StatusText>}
            {value && <UrlText>URL: {value}</UrlText>}
        </Container>
    )
}
