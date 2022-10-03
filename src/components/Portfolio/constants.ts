import IMG1 from '../../assets/portfolio/Clutch.png';
import IMG2 from '../../assets/portfolio/JSOC.jpg'
import IMG3 from '../../assets/portfolio/Kangaroo.png';
import IMG4 from '../../assets/portfolio/Warzone.jpg';
import IMG5 from '../../assets/portfolio/Scheduler.jpg';
import IMG6 from '../../assets/portfolio/TicTacToe.png';

export interface PortfolioInterface {
  name: string,
  github?: string,
  img: string,
  title: string,
  website?: string,
}

export const PORTFOLIO = [
  {
    name: 'Clutch.ca',
    img: IMG1,
    title: 'Car buying made easy',
    website: 'https://clutch.ca'
  },
  {
    name: 'JSOC',
    github: 'https://github.com/rahulshial/JSOC',
    img: IMG2,
    title: 'Jain Society of Calgary',
    website: 'https://www.jainsocietyofcalgary.com'
  },
  {
    name: 'Kangaroo',
    github: 'https://github.com/rahulshial/mitelCorpClubhouse',
    img: IMG3,
    title: 'Dynamic audio chat rooms',
  },
  {
    name: 'WarZone',
    github: 'https://github.com/rahulshial/WarzoneStatArena',
    img: IMG4,
    title: 'Real time Statistics from Call of Duty focussed on Battle Royal',
  },
  {
    name: 'Scheduler',
    github: 'https://github.com/rahulshial/scheduler',
    img: IMG5,
    title: 'Appointment Scheduler',
  },
  {
    name: 'TicTacToe',
    github: 'https://github.com/rahulshial/react-vite-tic-tac-toe',
    img: IMG6,
    title: 'Simple React Game',
  },
]