import { useEffect, useRef } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import Page from 'components/page';

import Placeholder from 'assets/placeholder.jpg';
import PlaceholderCropped from 'assets/placeholder-cropped.png';

async function initTilt(elem: HTMLAnchorElement): Promise<void> {
  const { default: VanillaTilt } = await import('vanilla-tilt');
  VanillaTilt.init(elem, {
    'full-page-listening': true,
    'max-glare': 0.1,
    glare: true,
    max: 4,
  });
}

interface LinkProps {
  href: string;
  children: string;
}

function Link({ href, children }: LinkProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a
        target={!href.startsWith('/') ? '_blank' : undefined}
        rel={!href.startsWith('/') ? 'noopener noreferrer' : undefined}
      >
        {children}
        <style jsx>{`
          a {
            cursor: pointer;
            font-size: 16px;
            text-decoration: none;
            color: var(--accents-5);
            transition: color 0.2s ease 0s;
          }

          a:hover {
            color: var(--geist-foreground);
          }
        `}</style>
      </a>
    </NextLink>
  );
}

export default function AboutPage(): JSX.Element {
  const portraitRef = useRef<HTMLAnchorElement>(null);
  const landscapeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!portraitRef.current) return;
    void initTilt(portraitRef.current);
  }, [portraitRef]);
  useEffect(() => {
    if (!landscapeRef.current) return;
    void initTilt(landscapeRef.current);
  }, [landscapeRef]);

  return (
    <Page title='About - Catherine Ballantyne' id='about'>
      <div className='flex'>
        <a ref={portraitRef} href={PlaceholderCropped.src} className='img portrait'>
          <Image
            src={PlaceholderCropped}
            placeholder='blur'
            height={250}
            width={200}
            alt='Me'
            priority
          />
        </a>
        <a ref={landscapeRef} href={Placeholder.src} className='img landscape'>
          <Image
            src={Placeholder}
            placeholder='blur'
            objectPosition='center'
            objectFit='cover'
            layout='fill'
            alt='Me'
            priority
          />
        </a>
        <article>
          <p>
            Hi! I’m Catherine, an electrical engineering M.S. from Cornell University with over 30 years of experience across disparate disciplines. Currently, I focus on:
          </p>
          <ul>
            <li>Writing, project planning, and scheduling.</li>
            <li>Iterative design with focus on simplicity.</li>
            <li>Analytical, writing, and organizational skills.</li>
          </ul>
          <p>
            Feel free to skim <Link href='/experience'>my resume</Link> or{' '}
            <Link href='mailto:me@catherineballantyne.com'>shoot me an email</Link>.
          </p>
        </article>
        <style jsx>{`
          .flex {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 848px;
            padding: 48px 24px;
            margin: auto;
          }

          .img {
            flex: none;
            font-size: 14px;
            text-decoration: none;
            color: var(--accents-5);
            background-color: var(--accents-2);
            transition: color 0.2s ease 0s;
          }

          .img:hover {
            color: var(--geist-foreground);
          }

          .img :global(img) {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .img.portrait {
            width: 200px;
            height: 250px;
          }

          .img.landscape {
            width: 100%;
            height: 250px;
            display: none;
          }

          article {
            flex: 1 1 0;
            max-width: 400px;
            margin-left: 32px;
          }

          p {
            font-size: 16px;
            line-height: 24px;
            margin: var(--geist-gap-half) 0;
          }

          p:first-child {
            margin-top: 0;
          }

          p:last-child {
            margin-bottom: 0;
          }

          @media (max-width: 800px) {
            .flex {
              flex-direction: column;
            }

            .img.landscape {
              display: unset;
            }

            .img.portrait {
              display: none;
            }

            article {
              max-width: unset;
              margin-left: 0;
              margin-top: 24px;
            }
          }

          @media (max-width: 600px) {
            .img.landscape {
              display: none;
            }

            article {
              margin: 0;
            }
          }
        `}</style>
      </div>
    </Page>
  );
}
