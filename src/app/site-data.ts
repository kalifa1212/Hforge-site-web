// Toutes les informations modifiables du site sont centralisées ici.
export const SITE = {
  name: 'HForge',
  slogan: 'Forgeons l’avenir ensemble',
  founder: {
    name: 'Hamidou Oumarou',
    roles: ['Architecte système', 'Formateur'],
  },
  location: 'Yaoundé, Cameroun',
  // ⚠️ À remplacer par vos vraies coordonnées
  contact: {
    email: 'contact@hforge.cm',
    phone: '+237 6XX XX XX XX',
    whatsapp: 'https://wa.me/2376XXXXXXXX',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
  },
};

export interface Service {
  icon: string;
  title: string;
  text: string;
  points: string[];
}

export const DEV_SERVICES: Service[] = [
  {
    icon: '⚙️',
    title: 'APIs & services backend',
    text: 'Conception et développement d’APIs robustes, sécurisées et évolutives avec Spring Boot et Java.',
    points: ['API REST & microservices', 'Sécurité (JWT, OAuth2)', 'Documentation OpenAPI'],
  },
  {
    icon: '📱',
    title: 'Applications mobiles',
    text: 'Création d’applications mobiles modernes, fluides et connectées à vos services.',
    points: ['Android & iOS', 'Interfaces soignées', 'Intégration API'],
  },
  {
    icon: '🌐',
    title: 'Applications web',
    text: 'Sites et plateformes web sur mesure, pensés pour la performance et l’expérience utilisateur.',
    points: ['Front-end moderne', 'Architecture propre', 'Déploiement & CI/CD'],
  },
];

export const NETWORK_SERVICES: Service[] = [
  {
    icon: '🛠️',
    title: 'Prestations réseau & maintenance',
    text: 'Installation, configuration et maintenance de vos infrastructures réseau et systèmes.',
    points: ['Audit & diagnostic', 'Maintenance préventive', 'Support technique'],
  },
  {
    icon: '💡',
    title: 'Consultation',
    text: 'Un regard d’architecte sur vos choix techniques : architecture, technologies, sécurité.',
    points: ['Architecture logicielle', 'Choix technologiques', 'Revue de code'],
  },
  {
    icon: '🎓',
    title: 'Formation',
    text: 'Des formations pratiques pour monter en compétences, animées par un formateur expérimenté.',
    points: ['Java & Spring Boot', 'Développement d’APIs', 'Ateliers sur mesure'],
  },
  {
    icon: '🤝',
    title: 'Accompagnement',
    text: 'Un suivi de bout en bout pour vos projets et vos équipes, de l’idée à la mise en production.',
    points: ['Cadrage de projet', 'Mentorat technique', 'Suivi & livraison'],
  },
];

export const STACK = [
  'Java', 'Spring Boot', 'REST API', 'Angular', 'Mobile', 'Docker', 'SQL', 'Réseaux', 'DevOps',
];

export const VALUES = [
  { title: 'Excellence', text: 'Un code propre, des architectures solides, un travail soigné.' },
  { title: 'Transmission', text: 'Partager le savoir pour faire grandir toute la communauté tech.' },
  { title: 'Collaboration', text: 'Avancer ensemble : clients, équipes et talents locaux.' },
];
