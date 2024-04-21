import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hardware',
    Svg: require('@site/static/img/repo2.svg').default,
    description: (
      <>
        El Departamento de TI es el encargado de inventarizar, actualizar, mantener y administrar la infraestructura tecnológica de Cruise On Land
      </>
    ),
  },
  {
    title: 'Software',
    Svg: require('@site/static/img/repo3.svg').default,
    description: (
      <>
        Se encarga, asímismo, de dar soporte técnico y gestionar los diferentes programas, productos de software, y licencias que utiliza la empresa.
      </>
    ),
  },
  {
    title: 'Proyectos TI',
    Svg: require('@site/static/img/repo4.svg').default,
    description: (
      <>
        A su vez, formula, diseña y gestiona diferentes proyectos para resolver necesidades internas de la empresa en el ámbito tecnológico.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
