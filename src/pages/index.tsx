import Image from "next/image";
import data from "../../data.json";

export function Github() {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width='16.000000pt'
      height='16.000000pt'
      viewBox='0 0 16.000000 16.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,16.000000) scale(0.100000,-0.100000)'
        fill='#000000'
        stroke='none'
      >
        <path
          d='M55 60 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4
-4 -10z'
        />
      </g>
    </svg>
  );
}

export function Linkedin() {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width='16.000000pt'
      height='16.000000pt'
      viewBox='0 0 16.000000 16.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,16.000000) scale(0.100000,-0.100000)'
        fill='#000000'
        stroke='none'
      >
        <path
          d='M5 149 c-4 -6 -4 -13 -1 -16 3 -4 6 -1 6 6 0 8 6 11 16 7 8 -3 12 -2
9 4 -8 13 -22 13 -30 -1z'
        />
        <path
          d='M32 63 c-2 -66 -21 -70 -24 -5 l-1 47 -4 -44 c-5 -47 9 -73 28 -54 5
5 8 32 6 59 l-3 49 -2 -52z'
        />
        <path
          d='M54 55 c1 -42 4 -50 21 -52 15 -1 15 0 3 3 -12 4 -18 19 -21 52 l-4
47 1 -50z'
        />
        <path
          d='M150 50 c0 -45 -17 -54 -23 -12 -4 26 -4 25 -3 -3 1 -20 7 -31 19
-33 14 -3 17 4 17 42 0 25 -2 46 -5 46 -3 0 -5 -18 -5 -40z'
        />
      </g>
    </svg>
  );
}

export function Twitter() {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width='16.000000pt'
      height='16.000000pt'
      viewBox='0 0 16.000000 16.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,16.000000) scale(0.100000,-0.100000)'
        fill='#000000'
        stroke='none'
      >
        <path d='M0 80 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z' />
      </g>
    </svg>
  );
}

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
