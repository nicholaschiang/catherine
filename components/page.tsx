import Head from 'next/head';

import Footer from 'components/footer';
import Header from 'components/header';

import PageId from 'lib/page';

export interface PageProps {
  id: PageId;
  title: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
}

// TODO: Research SEO and update the page titles and descriptions accordingly.
export default function Page({
  id,
  title,
  description,
  children,
}: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title || 'Nicholas Chiang'}</title>
        <meta
          name='description'
          content={description || 'Porfolio website for Nicholas Chiang'}
        />
      </Head>
      <div>
        <Header page={id} />
        <main>{children}</main>
        <style jsx>{`
          div {
            min-height: 100vh;
          }

          main {
            max-width: var(--geist-page-width-with-margin);
            margin: auto;
            padding: var(--geist-gap-double) var(--geist-page-margin);
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}
