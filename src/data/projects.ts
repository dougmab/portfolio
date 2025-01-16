import techs, {Tech} from '@/data/tech';

export interface Project {
  name: string;
  description: string; // All descriptions will be written in the i18n json files
  url?: string;
  repository: string;
  technologies: Tech[];
  img: string;
}

type AvailableProjects = 'storem' | 'ygibringer' | 'open-vinyl-box' | 'yabbl'

const basePath = (src: string) => '/assets/img/projects' + src

const projects: {
  [key in AvailableProjects]: Project;
} = {
  'storem': {
    name: 'Storem',
    description: 'storem.desc',
    repository: 'https://github.com/dougmab/storem',
    url: '#', //Temporary
    img: basePath('/storem.png'),
    technologies: [
      techs.ts,
      techs.react,
      techs.tailwindcss,
      techs.java,
      techs.spring,
      techs.postgres,
      techs.docker,
      techs.aws
    ],
  },
  'ygibringer': {
    name: 'Ygibringer',
    description: 'ygibringer.desc',
    repository: 'https://github.com/dougmab/ygibringer',
    img: basePath('/ygibringer.png'),
    technologies: [
      techs.js,
      techs.java,
      techs.spring
    ]
  },
  'open-vinyl-box': {
    name: 'Open Vinyl Box',
    description: 'open-vinyl-box.desc',
    repository: 'https://github.com/dougmab/open-vinyl-box',
    url: '#', // temporary
    img: basePath('/open-vinyl-box.png'),
    technologies: [
      techs.ts,
      techs.nextjs,
      techs.tailwindcss,
      techs.java,
      techs.spring,
      techs.postgres,
      techs.docker
    ]
  },
  'yabbl': {
    name: 'Yabbl',
    description: 'yabbl.desc',
    repository: 'https://github.com/dougmab/yabbl',
    url: '#', // temporary
    img: basePath('/yabbl.png'),
    technologies: [
      techs.ts,
      techs.react,
      techs.tailwindcss,
      techs.java,
      techs.spring,
      techs.postgres,
      techs.docker
    ]
  },
};

export default projects