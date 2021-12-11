import Cornell from 'components/cornell';
import Page from 'components/page';

export default function EducationPage(): JSX.Element {
  return (
    <Page title='Education - Catherine Ballantyne' id='education'>
      <div className='wrapper'>
        <div className='degree'>
          <h2>Master of Science (EE)</h2>
          <p>School of Engineering with Manufacturing</p>
          <Cornell />
        </div>
        <div className='degree'>
          <h2>Bachelor of Science (EE)</h2>
          <p>School of Material Science and Engineering</p>
          <Cornell />
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          max-width: 848px;
          margin: 0 auto;
          padding: 48px 24px;
          display: flex;
          text-align: center;
        }

        .degree :global(svg) {
          margin-top: 24px;
        }

        .degree:first-child {
          border-right: 1px solid var(--accents-2);
          padding-right: 48px;
        }

        .degree:last-child {
          padding-left: 48px;
        }

        h2 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          margin: 4px 0;
        }
      `}</style>
    </Page>
  );
}
