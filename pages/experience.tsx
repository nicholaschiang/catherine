import Page from 'components/page';
import Project from 'components/project';

import LCTES from 'assets/lctes.json';
import LCTESImage from 'assets/imgs/lctes.jpg';
import TECS from 'assets/tecs.json';
import TECSImage from 'assets/imgs/tecs.jpg';

export default function ResearchPage(): JSX.Element {
  return (
    <Page title='Research - Nicholas Chiang' id='research'>
      <Project {...LCTES} img={LCTESImage} />
      <Project {...TECS} img={TECSImage} />
    </Page>
  );
}
