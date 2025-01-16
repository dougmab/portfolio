export type TechCategory = 'language' | 'frontend' | 'backend' | 'db' | 'infra';

export type Tech = {
  name: string;
  assetName: string;
  type: 'language' | 'framework' | 'lib' | 'db' | 'tool' | 'cloud';
  category: TechCategory;
}

type AvailableTechs = "js" | "ts" | "java" | "python" | "react" | "nextjs" | "tailwindcss" | "sass" | "framer" | "nodejs" | "express" | "sequelize" | "spring" | "hibernate" | "mysql" | "sqlite" | "postgres" | "docker" | "kubernetes" | "aws" | "oauth" | "rabbitmq";

const techs: {
  [key in AvailableTechs]: Tech;
} = {
  js: {
    name: 'JavaScript',
    assetName: 'javascript',
    type: 'language',
    category: 'language'
  },
  ts: {
    name: 'TypeScript',
    assetName: 'typescript',
    type: 'language',
    category: 'language'
  },
  java: {
    name: 'Java',
    assetName: 'java',
    type: 'language',
    category: 'language'
  },
  python: {
    name: 'Python',
    assetName: 'python',
    type: 'language',
    category: 'language'
  },
  react: {
    name: 'React',
    assetName: 'react',
    type: 'framework',
    category: 'frontend'
  },
  nextjs: {
    name: 'Next.js',
    assetName: 'nextjs',
    type: 'framework',
    category: 'frontend'
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    assetName: 'tailwindcss',
    type: 'lib',
    category: 'frontend'
  },
  sass: {
    name: 'SASS',
    assetName: 'sass',
    type: 'tool',
    category: 'frontend'
  },
  framer: {
    name: 'Framer Motion',
    assetName: 'framermotion',
    type: 'lib',
    category: 'frontend'
  },
  nodejs: {
    name: 'Node.js',
    assetName: 'nodejs',
    type: 'language',
    category: 'backend'
  },
  express: {
    name: 'Express',
    assetName: 'express',
    type: 'framework',
    category: 'backend'
  },
  sequelize: {
    name: 'Sequelize ORM',
    assetName: 'sequelize',
    type: 'framework',
    category: 'backend'
  },
  spring: {
    name: 'Spring Boot',
    assetName: 'spring',
    type: 'framework',
    category: 'backend'
  },
  hibernate: {
    name: 'Hibernate',
    assetName: 'hibernate',
    type: 'framework',
    category: 'backend'
  },
  mysql: {
    name: 'MySQL',
    assetName: 'mysql',
    type: 'db',
    category: 'db'
  },
  sqlite: {
    name: 'SQLite',
    assetName: 'sqlite',
    type: 'db',
    category: 'db'
  },
  postgres: {
    name: 'PostgreSQL',
    assetName: 'postgres',
    type: 'db',
    category: 'db'
  },
  docker: {
    name: 'Docker',
    assetName: 'docker',
    type: 'tool',
    category: 'infra'
  },
  kubernetes: {
    name: 'Kubernetes',
    assetName: 'kubernetes',
    type: 'tool',
    category: 'infra'
  },
  aws: {
    name: 'AWS',
    assetName: 'aws',
    type: 'cloud',
    category: 'infra'
  },
  oauth: {
    name: 'OAuth 2.0',
    assetName: 'oauth',
    type: 'tool',
    category: 'infra'
  },
  rabbitmq: {
    name: 'RabbitMQ',
    assetName: 'rabbitmq',
    type: 'tool',
    category: 'infra'
  },
};

export default techs;