import './AboutSection.css'

const AboutSection = () => {
  return (
    <>
      <div id='general-info' className='general-info'>
        <h1 className='title'>Vinícius Silva Santos</h1>
        <h2 className='title'>FULLSTACK DEVELOPER, BRASIL</h2>
        <p className='text'>Sou um desenvolvedor de software apaixonado e dedicado em busca de uma posição que me permita aplicar minha
          experiência em programação e habilidades técnicas em computação para contribuir no desenvolvimento de
          soluções inovadoras. Meu objetivo é participar de uma equipe dinâmica em uma empresa de tecnologia, onde
          possa trabalhar em projetos desafiadores e aprimorar minhas habilidades, enquanto colaboro para criar
          produtos de alta qualidade que atendam às necessidades dos usuários.</p>
        <button className="buttons">
          <a href="https://drive.google.com/file/d/1ct8JAVlRW2GH_OJsZwZuaUaiFLFPnEy_/view?usp=drive_link">
            Currículo PDF</a>
        </button>
      </div>
      <div className="about-me">
        <img className="img-section" src="https://github.com/viniciussis.png" alt="personal" />
        <div id="content">
          <h2>ABOUT ME</h2>
          <p>Olá! Sou Vinícius Silva Santos, um desenvolvedor de software apaixonado por programação e ciência de dados,
            que apesar de possuir pouca experiência profissional, estou comprometido em impulsionar inovação e
            excelência em cada projeto em que me envolvo.<br />
            Minha jornada de ensino me levou a estudar numa das melhores faculdades de ensino da Bahia, o IFBA, e támbem
            na maior escola online de tecnologia do brasil, a Alura. Estou constantemente buscando novos desafios e
            oportunidades para crescer e aprender.<br />
            Minhas principais habilidades incluem um amplo conhecimento nas linguagens de programação Java, Python,
            Javascript, conhecimento web como HTML, CSS e SQL, controle de versão no GIT & GitHub e conhecimento em
            bancos de dados como MySQL e MongoDB. Acredito que o trabalho em equipe é a chave para o sucesso, e tenho
            orgulho de colaborar com colegas para alcançar resultados excepcionais.<br />
            Fora do ambiente de trabalho, sou um entusiasta em academia e nutrição, e um ótimo leitor. Acredito na
            importância de equilibrar a vida profissional com o crescimento pessoal.</p>
        </div>
      </div>
    </>
  )
}

export default AboutSection