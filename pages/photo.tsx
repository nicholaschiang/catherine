import { useEffect, useRef } from 'react';
import Image from 'next/image';

import Grid from 'components/grid';
import Page from 'components/page';

import Graffiti from 'assets/imgs/graffiti.jpg';
import HickeyFamily from 'assets/imgs/hickey/family.jpg';
import HsiaoBackpack from 'assets/imgs/hsiao/backpack.jpg';
import HsiaoSitting from 'assets/imgs/hsiao/sitting.jpg';
import HsiaoStanding from 'assets/imgs/hsiao/standing.jpg';
import JamesLooking from 'assets/imgs/james/looking.png';
import JamesMid from 'assets/imgs/james/mid.jpg';
import JamesSideways from 'assets/imgs/james/sideways.jpg';
import JamesWide from 'assets/imgs/james/wide.png';
import LilyAngel from 'assets/imgs/lily/angel.png';
import LilyBoss from 'assets/imgs/lily/boss.png';
import LilyDock from 'assets/imgs/lily/dock.png';
import LilyHands from 'assets/imgs/lily/hands.png';
import LilyHandsDreamy from 'assets/imgs/lily/hands-dreamy.png';
import LilyHandsWide from 'assets/imgs/lily/hands-wide.png';
import LilyRelaxed from 'assets/imgs/lily/relaxed.png';
import NatureChairlift from 'assets/imgs/nature/chairlift.jpg';
import NaturePinecone from 'assets/imgs/nature/pinecone.jpg';
import NatureSunset from 'assets/imgs/nature/sunset.jpg';
import NatureWater from 'assets/imgs/nature/water.jpg';
import SophiaDark from 'assets/imgs/sophia/dark.jpg';
import SophiaPink from 'assets/imgs/sophia/pink.jpg';
import TeslaCloutWalk from 'assets/imgs/tesla/clout-walk.png';
import TeslaLookingEarth from 'assets/imgs/tesla/looking-earth.png';
import TeslaPanelEarth from 'assets/imgs/tesla/panel-earth.png';
import TeslaSaw from 'assets/imgs/tesla/saw.png';
import TeslaScrewdriver from 'assets/imgs/tesla/screwdriver.png';
import TeslaStandingWide from 'assets/imgs/tesla/standing-wide.png';
import TeslaTwoGuysEarth from 'assets/imgs/tesla/two-guys-earth.png';
import Zachary from 'assets/imgs/zachary.jpg';

async function initTilt(elem: HTMLDivElement): Promise<void> {
  const { default: VanillaTilt } = await import('vanilla-tilt');
  VanillaTilt.init(elem, {
    'max-glare': 0.1,
    glare: true,
    max: 4,
  });
}

interface CellProps {
  priority?: boolean;
  src: StaticImageData;
  alt: string;
}

// TODO: Add a blurred image loading placeholder once it's added to canary.
// @see {@link https://github.com/cyrilwanner/react-optimized-image/issues/5}

function Cell({ priority, src, alt }: CellProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    void initTilt(ref.current);
  }, [ref]);

  return (
    <div ref={ref}>
      <a href={src.src}>
        <Image
          sizes={
            '(max-width: 448px) 400px, ' +
            '(max-width: 548px) 500px, ' +
            '(max-width: 648px) 600px, ' +
            '(max-width: 748px) 700px, ' +
            '(max-width: 848px) 800px, ' +
            '(min-width: 848px) 500px'
          }
          src={src}
          placeholder='blur'
          priority={priority}
          objectPosition='center'
          objectFit='cover'
          layout='fill'
          alt={alt}
        />
      </a>
      <style jsx>{`
        a {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          text-decoration: none;
          font-size: 14px;
          color: var(--accents-5);
          transition: color 0.2s ease 0s;
        }

        a:hover {
          color: var(--geist-foreground);
        }

        div {
          background-color: var(--accents-2);
          padding-bottom: calc(100% / 3 * 2);
          position: relative;
        }

        div :global(img) {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
      `}</style>
    </div>
  );
}

export default function PhotoPage(): JSX.Element {
  return (
    <Page title='Photography - Nicholas Chiang' id='photo'>
      <Grid cell='388.5px'>
        <Cell src={LilyAngel} alt='An angelic senior photo of Lily Lochead' />
        <Cell src={LilyBoss} alt='Lily Lochead looking like a gang leader' />
        <Cell src={LilyDock} alt='Lily Lochead posing on a dock in Neverland' />
        <Cell
          src={LilyHandsDreamy}
          alt='Holding hands in Neverland with Lily Lochead and Eunice Cho'
        />
        <Cell
          src={LilyHands}
          alt='Friends on the dock with Lily Lochead and Eunice Cho'
        />
        <Cell
          src={LilyHandsWide}
          alt='A wide view of the friends on the dock'
        />
        <Cell
          src={LilyRelaxed}
          alt='Lily Lochead relaxing on the Foothills Park dock'
        />
        <Cell
          src={TeslaLookingEarth}
          alt='A man on a roof in space staring off towards Earth'
        />
        <Cell
          src={TeslaTwoGuysEarth}
          alt='Two men installing solar panels on a roof in space'
        />
        <Cell
          src={TeslaPanelEarth}
          alt='A man installing a solar panel in space'
        />
        <Cell src={TeslaSaw} alt='A man on a roof carrying an electric saw' />
        <Cell
          src={TeslaScrewdriver}
          alt='A man on a roof throwing a screwdriver back into his toolbox'
        />
        <Cell
          src={TeslaStandingWide}
          alt='A man standing on a roof peacefully contemplating his existence'
        />
        <Cell
          src={TeslaCloutWalk}
          alt='A Tesla employee walking to their truck'
        />
        <Cell
          src={JamesLooking}
          alt='James Lambert at Gunn High School’s senior sunrise'
        />
        <Cell
          src={JamesMid}
          alt='James Lambert at Gunn High School’s senior sunrise'
        />
        <Cell
          src={JamesSideways}
          alt='James Lambert at Gunn High School’s senior sunrise'
        />
        <Cell
          src={JamesWide}
          alt='James Lambert at Gunn High School’s senior sunrise'
        />
        <Cell
          src={Zachary}
          alt='Zachary Lyon eating free pizza from Gunn High School'
        />
        <Cell
          src={SophiaPink}
          alt='Sophia Chiang after a hike in Park City, Utah'
        />
        <Cell
          src={SophiaDark}
          alt='Sophia Chiang standing by a tree in Park City, Utah'
        />
        <Cell
          src={HsiaoBackpack}
          alt='A MW Backpack at Stanford University'
          priority
        />
        <Cell
          src={HsiaoSitting}
          alt='A couple sitting on the grass at Stanford University'
        />
        <Cell
          src={HsiaoStanding}
          alt='A couple standing on the steps of Stanford University'
        />
        <Cell
          src={HickeyFamily}
          alt='A family enjoying California weather'
          priority
        />
        <Cell
          src={Graffiti}
          alt='A girl admiring the iconic graffiti in San Francisco'
        />
        <Cell
          src={NatureChairlift}
          alt='An artistic chairlift spotted in Park City, Utah'
        />
        <Cell
          src={NaturePinecone}
          alt='The beauties of nature as embodied by a pinecone branch'
        />
        <Cell
          src={NatureSunset}
          alt='A sunset captured while driving by a field at 60mph'
        />
        <Cell src={NatureWater} alt='An inviolate stream of chaotic water' />
      </Grid>
    </Page>
  );
}
