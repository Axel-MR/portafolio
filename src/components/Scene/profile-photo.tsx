import Image from "next/image"

interface ProfilePhotoProps {
  src: string
  alt: string
}

export function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="rounded-full overflow-hidden border-8 border-[#FF9E44] aspect-square">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
