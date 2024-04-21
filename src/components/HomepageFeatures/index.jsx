import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Coberturas Transparentes',
    Svg: require('@site/static/img/cobertura.svg').default,
    description: (
    <>
        La App de Medicheck te permitirá consultar las coberturas de la póliza o plan de la Aseguradora de Riesgos de Salud a la que estés afiliado.
    </>
    ),
  },
  {
    title: 'Búsca Centros Cercanos',
    Svg: require('@site/static/img/repo4.svg').default,
    description: (
      <>
        De igual manera, a través de nuestra app, odrás ver los establecimientos cercanos que ofrecen el producto o servicio que estás buscando.
      </>
    ),
  },
  {
    title: 'Reporta los Incidentes',
    Svg: require('@site/static/img/repo3.svg').default,
    description: (
      <>
        Ante cualquier discrepancia entre la información en la aplicación y la provista por las prestadoras de salud el usuario puede generar un reporte en la aplicación.    
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
