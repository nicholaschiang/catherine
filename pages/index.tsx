import Page from 'components/page';

export default function IndexPage(): JSX.Element {
  return (
    <Page title='Catherine Ballantyne'>
      <div className='empty'>
        COMING SOON 
        <style jsx>{`
          .empty {
            border: 1px dashed var(--accents-2);
            border-radius: 4px;
            color: var(--accents-3);
            font-size: 16px;
            font-weight: 400;
            position: relative;
            line-height: 16px;
            text-align: center;
            height: 100%;
            min-height: 75vh;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 848px;
            margin: 48px auto;
            padding: 24px;
          }
        `}</style>
      </div>
    </Page>
  );
}
