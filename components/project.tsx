import Image from 'next/image';

export interface Link {
  href: string;
  label: string;
}

export interface ProjectProps {
  id: string;
  title: string;
  authors: { name: string; href: string }[];
  abstract: string;
  links: Link[];
  img: StaticImageData;
}

export default function Project({
  id,
  title,
  authors,
  abstract,
  links,
  img,
}: ProjectProps): JSX.Element {
  return (
    <div className='project'>
      <div className='preview'>
        <a className='display' href={links[0]?.href}>
          <Image
            src={img}
            placeholder='blur'
            alt={`Preview of ${title}`}
            layout='fill'
            sizes='300px'
          />
        </a>
        <ul>
          {links.map(({ href, label }) => (
            <li key={label.toLowerCase().split(' ').join('-')}>
              <a
                className='link'
                href={href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='summary'>
        <h2>{title}</h2>
        <h3>
          {authors.map(({ name, href }) =>
            name === 'Nicholas Chiang' ? (
              <strong className='author'>{name}</strong>
            ) : (
              <a
                className='author'
                key={name.toLowerCase().split(' ').join('-')}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {name}
              </a>
            )
          )}
        </h3>
        <p>
          {abstract.split(' \n ').map((paragraph, idx) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <p key={`${id}-paragraph-${idx}`}>{paragraph}</p>
          ))}
        </p>
      </div>
      <style jsx>{`
        .project {
          margin-bottom: var(--geist-gap-double);
          display: flex;
        }

        .project:last-of-type {
          margin-bottom: 0;
        }

        .preview {
          flex: none;
          width: 300px;
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-right: var(--geist-gap);
        }

        .preview a.display {
          width: 100%;
          min-height: 90%;
          background-color: var(--accents-2);
          box-shadow: var(--shadow-large);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        h2 {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 14px;
        }

        h3 {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
        }

        h3 a.author {
          cursor: pointer;
          color: inherit;
          text-decoration: none;
        }

        h3 a.author::after {
          content: ', ';
        }

        h3 a.author:last-child::after {
          content: '';
          display: none;
        }

        h3 strong.author {
          font-weight: 800;
          cursor: not-allowed;
        }

        h3 strong.author::after {
          font-weight: 600;
          content: ', ';
        }

        p {
          font-size: 14px;
          margin: 14px 0;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 14px 0 0;
        }

        li {
          display: inline;
          float: none;
          margin: 0;
        }

        li:not(:last-of-type) {
          margin-right: var(--geist-gap);
        }

        a.link {
          cursor: pointer;
          font-size: 14px;
          text-decoration: none;
          color: var(--accents-5);
          transition: color 0.2s ease 0s;
        }

        a.link:hover {
          color: var(--geist-foreground);
        }

        @media (max-width: 800px) {
          .project {
            flex-direction: column-reverse;
          }

          .preview {
            display: block;
            width: unset;
            margin: 0;
          }

          .preview a.display {
            display: none;
          }

          ul {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
