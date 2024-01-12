import Organo from '../images/projects/Organo.png'
import VS from '../images/projects/Virtual-Space.png'
import Clock from '../images/projects/Clock.png'

const projectsData = [
  {
    title: 'Organo',
    about: 'Plataforma para criar e organizar dinamicamente times ou equipes, adaptando-se às necessidades específicas do usuário.',
    demo: 'https://organo-project-jet.vercel.app/',
    repository: 'https://github.com/viniciussis/Organo_Project.git',
    stack: 'JavaScript, CSS, HTML, ReactJS',
    img: Organo
  },
  {
    title: 'Virtual Space',
    about: 'Desenvolvimento de um mini blog em React, com ênfase em conceitos como React Router, rotas dinâmicas, Single Page Applications (SPAs), e integração de bibliotecas como react-markdown e react-icons.',
    demo: 'https://virtual-space-three.vercel.app',
    repository: 'https://github.com/viniciussis/Virtual_Space.git',
    stack: 'JavaScript, CSS, HTML, ReactJS',
    img: VS
  }
  ,{
    title: 'My Clock',
    about: 'Um cronômetro de tarefas em React/TypeScript, que cria card de tarefas dinâmicamente e um cronômetro para o tempo de execução dessas tarefas',
    demo: 'https://my-clock-five.vercel.app/',
    repository: 'https://github.com/viniciussis/My_Clock.git',
    stack: 'TypeScript, CSS, HTML, React',
    img: Clock
  }
];

export default projectsData