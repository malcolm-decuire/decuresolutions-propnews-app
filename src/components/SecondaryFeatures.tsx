'use client'

export function SecondaryFeatures() {
  return (
    <div className="relative bg-gray-100 py-20">
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto', // Center horizontally
          height: 0,
          paddingTop: '56.25%', // 16:9 aspect ratio
          overflow: 'hidden',
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          borderRadius: '8px',
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          src="https://www.canva.com/design/DAGYRUw_KXA/EBd33JL8KhvQ_OoHGTOqhg/view?embed"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-center text-gray-700">
        <a
          href="https://www.canva.com/design/DAGYRUw_KXA/EBd33JL8KhvQ_OoHGTOqhg/view?utm_content=DAGYRUw_KXA&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          DSPN DCR Platform
        </a>
      </p>
    </div>
  )
}
