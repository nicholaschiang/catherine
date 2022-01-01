import Head from 'next/head';

export interface PageProps {
  title: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
}

// TODO: Research SEO and update the page titles and descriptions accordingly.
export default function Page({
  title,
  description,
  children,
}: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title || 'Catherine Ballantyne'}</title>
        <meta
          name='description'
          content={description || 'Porfolio website for Catherine Ballantyne'}
        />
      </Head>
      <div>
        <main>{children}</main>
        <style jsx>{`
          div {
            min-height: 100vh;
          }
        `}</style>
      </div>
    </>
  );
}
