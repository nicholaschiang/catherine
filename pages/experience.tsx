import Page from 'components/page';

import allied from 'assets/allied.json';
import ecological from 'assets/ecological.json';
import etime from 'assets/etime.json';
import inchcape from 'assets/inchcape.json';
import medallia from 'assets/medallia.json';
import mortgage from 'assets/mortgage.json';
import novellus from 'assets/novellus.json';
import southwall from 'assets/southwall.json';

interface ItemProps {
  title: string;
  company: string;
  location: string;
  time: string;
  content: Record<string, string[]> | string[];
}

function Item({ title, company, location, time, content }: ItemProps): JSX.Element {
  return (
    <section>
      <div className='wrapper'>
        <h2>{title}<span>{time}</span></h2>
        <h3>{company}, {location}</h3>
        {content instanceof Array ? (
          <ul>
            {content.map((item, idx) => (<li key={idx}>{item}</li>))}
          </ul>
        ) : Object.entries(content).map(([header, items]) => (
          <>
            {typeof header === 'string' && <p>{header}:</p>}
            <ul>
              {items.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
          </>
        ))}
      </div>
      <style jsx>{`
        h3 {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }

        h2 {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }

        h2 span {
          font-weight: 400;
          font-size: 14px;
        }

        ul {
          margin: 12px 0 0;
        }

        section {
          border-top: 1px solid var(--accents-2);
          transition: box-shadow 0.2s ease;
        }

        section:first-of-type {
          margin-top: 48px;
        }

        section:hover {
          box-shadow: 0 5px 40px rgba(0, 0, 0, 0.04);
        }

        .wrapper {
          margin: 0 auto;
          max-width: 848px;
          padding: 48px 24px;
        }
      `}</style>
    </section>
  );
}

export default function ExperiencePage(): JSX.Element {
  return (
    <Page title='Experience - Catherine Ballantyne' id='experience'>
      <Item {...ecological} />
      <Item {...medallia} />
      <Item {...mortgage} />
      <Item {...etime} />
      <Item {...novellus} />
      <Item {...allied} />
      <Item {...southwall} />
      <Item {...inchcape} />
    </Page>
  );
}
