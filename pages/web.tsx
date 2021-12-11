import Grid from 'components/grid';
import Page from 'components/page';
import Window from 'components/window';

export default function WebPage(): JSX.Element {
  return (
    <Page title='Web Development - Nicholas Chiang' id='web'>
      <Grid cell='var(--geist-page-width)'>
        <Window
          title='Connect students with expert mentors and volunteer tutors'
          url='tutorbook.org'
        />
        <Window
          title='A place where you can enjoy learning from newsletters'
          url='readhammock.com'
        />
        <Window
          title='Silicon Valley’s update to the classical music scene'
          url='saintmichaeltrio.com'
        />
        <Window
          title='Easily rack up votes for any Poll Daddy public survey'
          url='poll.nicholaschiang.com'
        />
        <Window
          title='Ecommerce site for a luxury clothing brand'
          url='niveaux-de-gris.web.app'
        />
        <Window
          title='Timeline of the ongoing Israeli-Palestinian conflict'
          url='perspectives.netlify.app'
        />
      </Grid>
    </Page>
  );
}
