import Image from "next/image";
import data from "../../data.json";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className='flex items-center px-2 py-1 rounded-md w-full border bg-white mb-3 hover:scale-105 transition-all max-w-3xl'
    >
      <div className='w-10 h-10'>
        {image && (
          <Image
            className='rounded-sm'
            alt={title}
            src={image}
            width={40}
            height={40}
          />
        )}
      </div>

      <h2 className='flex justify-center items-center font-bold text-lg w-full text-center text-gray-700'>
        {title}
      </h2>
    </a>
  );
}

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center mx-auto w-full mt-16 px-8'>
      <Image
        className='rounded-full'
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className='font-semibold mt-4 mb-8 text-xl'>{data.name}</h1>

      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
