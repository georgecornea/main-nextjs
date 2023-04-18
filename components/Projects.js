import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Projects() {
  return (
    <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left'>
      <Link
        href='https://react.gcornea.ca'
        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          React{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p
          className={`${inter.className} m-0 min-w-[20ch] max-w-[30ch] text-sm opacity-50`}
        >
          React.js projects
        </p>
      </Link>

      <Link
        href='https://cplus.gcornea.ca'
        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          C++{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p
          className={`${inter.className} m-0 min-w-[20ch] max-w-[30ch] text-sm opacity-50`}
        >
          C++ projects
        </p>
      </Link>
    </div>
  );
}
