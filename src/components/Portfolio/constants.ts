import IMG1 from '../../assets/portfolio/Clutch.png';
import IMG2 from '../../assets/portfolio/JSOC.jpg'
import IMG3 from '../../assets/portfolio/Kangaroo.png';
import IMG4 from '../../assets/portfolio/Warzone.jpg';
import IMG5 from '../../assets/portfolio/Scheduler.jpg';
import IMG6 from '../../assets/portfolio/TicTacToe.png';

export interface PortfolioInterface {
  id: number,
  name: string,
  github?: string,
  img: string,
  title: string,
  website?: string,
}

export const PORTFOLIO = [
  {
    id: 1,
    name: 'Clutch.ca',
    img: IMG1,
    title: 'Car buying made easy',
    website: 'https://clutch.ca'
  },
  {
    id: 2,
    name: 'JSOC',
    github: 'https://github.com/rahulshial/JSOC',
    img: IMG2,
    title: 'Jain Society of Calgary',
    website: 'https://www.jainsocietyofcalgary.com'
  },
  {
    id: 3,
    name: 'Kangaroo',
    github: 'https://github.com/rahulshial/mitelCorpClubhouse',
    img: IMG3,
    title: 'Dynamic audio chat rooms',
  },
  {
    id: 4,
    name: 'WarZone',
    github: 'https://github.com/rahulshial/WarzoneStatArena',
    img: IMG4,
    title: 'Real time Statistics from Call of Duty (Battle Royal)',
  },
  {
    id: 5,
    name: 'Scheduler',
    github: 'https://github.com/rahulshial/scheduler',
    img: IMG5,
    title: 'Appointment Scheduler',
  },
  {
    id: 6,
    name: 'TicTacToe',
    github: 'https://github.com/rahulshial/react-vite-tic-tac-toe',
    img: IMG6,
    title: 'Simple React Game',
  },
]