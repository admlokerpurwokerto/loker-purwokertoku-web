/**
 * Google AdSense Ad Slot Component
 * ================================
 * Replace the `data-ad-client` and `data-ad-slot` values
 * with your actual AdSense publisher ID and ad unit IDs.
 *
 * Steps to activate:
 * 1. Get approved by Google AdSense
 * 2. Add the AdSense script to your root layout <head>:
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" />
 * 3. Replace placeholder values below with your real ad slot IDs
 */

interface AdSlotProps {
  format?: 'horizontal' | 'in-article' | 'in-feed' | 'sidebar'
  className?: string
}

// Map format to recommended AdSense ad dimensions/styles
const adConfig: Record<string, { style: React.CSSProperties; minHeight: string }> = {
  horizontal: {
    style: { display: 'block' },
    minHeight: '90px',
  },
  'in-article': {
    style: { display: 'block', textAlign: 'center' as const },
    minHeight: '250px',
  },
  'in-feed': {
    style: { display: 'block' },
    minHeight: '100px',
  },
  sidebar: {
    style: { display: 'block' },
    minHeight: '250px',
  },
}

export default function AdSlot({ format = 'horizontal', className = '' }: AdSlotProps) {
  const config = adConfig[format]

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      role="complementary"
      aria-label="Iklan"
      style={{ minHeight: config.minHeight }}
    >
      {/* 
        Production AdSense Code:
        Uncomment the <ins> tag below and remove the placeholder div 
        after your AdSense account is approved.
        
        <ins
          className="adsbygoogle"
          style={config.style}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      */}

      {/* Placeholder - shown until AdSense is activated */}
      <div
        className="ad-slot w-full flex items-center justify-center"
        style={{ minHeight: config.minHeight }}
      >
        <span className="text-xs text-text-muted select-none">Advertisement</span>
      </div>
    </div>
  )
}
