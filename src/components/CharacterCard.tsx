interface CharacterCardProps {
  id: number
  name: string
  image: string
  status: string
  species: string
  url: string
}

function CharacterCard({
  id,
  name,
  image,
  url,
  status,
  species,
}: CharacterCardProps) {
  return (
    <div  key={id} className="w-full max-w-xs">
      <div className="flex flex-col bg-neutral-primary-soft border border-default rounded-base shadow-xs overflow-hidden">
        
        <img
          className="object-cover w-full h-56"
          src={image}
          alt={name}
        />

        <div className="flex flex-col flex-1 p-4">
          <h5 className="mb-1 text-lg font-bold tracking-tight text-heading">
            {name}
          </h5>

          <p className="mb-4 text-sm text-body">
            {species} · {status}
          </p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center text-sm font-medium text-body bg-neutral-secondary-medium border border-default-medium rounded-base px-4 py-2.5 hover:bg-neutral-tertiary-medium hover:text-heading transition"
          >
            Read more
            <svg
              className="w-4 h-4 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
