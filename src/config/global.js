export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Historia de la educación infantil en los contextos rurales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El mundo rural de la niñez colombiana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Cifras de la infancia rural en Colombia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Colombia es un país rural',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '¿Qué es ser niño o niña del campo?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Las pautas de crianza en el sector rural',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ambientes y contextos rurales de niños y niñas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Cartografía de las ruralidades en Colombia',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Mora Guerrero, G., Constanzo-Belmar, J., Arias-Ortega, K. & Millahual-Ampuero, A. (2022). Educación preescolar en contexto rural: una revisión documental de las políticas públicas en Chile. <i>Revista Educación, 46</i>(2), 1-27.',
      link: 'https://www.redalyc.org/articulo.oa?id=44070055016 ',
    },
    {
      referencia:
        'Acosta Valdeleón, W., Ángel Pardo, N. C. & Pérez Pérez, T. (2020). <i>Liderazgo en la educación rural con enfoque territorial</i>. Universidad de La Salle - Ediciones Unisalle. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/215702 ',
    },
    {
      referencia:
        'Revista Semana. (2012). <i>Así es la Colombia rural. Informe especial</i>. Revista Semana.',
      link:
        'https://especiales.semana.com/especiales/pilares-tierra/asi-es-la-colombia-rural.html ',
    },
    {
      referencia:
        'De Marco, C. (2021). ¿Qué es la niñez rural para la historia? Una revisión y una propuesta desde Argentina. <i>Historia Caribe, 16</i>(39), 189-223. ',
      link: 'https://doi.org/10.15648/hc.39.2021.2964',
    },
    {
      referencia:
        'ABA. (2015). Meeting the Challenge of Child Maltreatment in Rural Areas. American Bar Association.',
      link:
        'https://www.americanbar.org/groups/public_interest/child_law/resources/child_law_practiceonline/child_law_practice/vol-34/march-2015/meeting-the-challenge-of-child-maltreatment-in-rural-areas/',
    },
    {
      referencia:
        'Llevot Calvet, N. (2008). <i>Escuela rural y sociedad</i>. Edicions de la Universitat de Lleida ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/54556',
    },
    {
      referencia:
        'Ley 1804 del 2016. Por la cual se establece la política de Estado para el Desarrollo Integral de la Primera Infancia de Cero a Siempre y se dictan otras disposiciones. ',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30021778',
    },
    {
      referencia:
        'Bustos Jiménez, A. (2014). <i>La escuela rural</i>. Ediciones Octaedro, S.L. ',
      link:
        'https://elibro.net/es/lc/tecnologicadeloriente/titulos/59807?fs_q=rural&prev=fs',
    },
  ],
  glosario: [
    {
      termino: 'Alimentos inocuos',
      significado:
        'Son aquellos alimentos que no presentan peligro, a niveles seguros y aceptables, que puedan dañar la salud de quienes los consumen.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'Es la variedad de vida en la Tierra, abarcando todas las especies de plantas, animales, hongos y microorganismos, la variabilidad genética dentro de cada especie, los ecosistemas que forman y las interacciones entre ellos y su entorno.',
    },
    {
      termino: 'Diversidad cultural',
      significado:
        'Es la coexistencia e interacción armoniosa y respetuosa de diferentes culturas en un mismo lugar y tiempo, abarcando tradiciones, lenguas, creencias, gastronomía y formas de vida, que caracterizan a distintos grupos humanos.',
    },
    {
      termino: 'Pautas de crianza',
      significado:
        'Son normas o modelos que guían el cuidado, educación y desarrollo de los niños dentro de la familia, transmitidos normalmente, de generación en generación. Su objetivo principal es promover un desarrollo saludable físico, mental y emocional, estableciendo hábitos como alimentación, sueño, comportamiento y límites claros. ',
    },
    {
      termino: 'Primera infancia',
      significado:
        'Es la etapa del desarrollo humano que va desde el nacimiento hasta los 5 o 6 años, considerada crítica para el desarrollo integral del niño, en aspectos físicos, cognitivos, emocionales y sociales.',
    },
    {
      termino: 'Periurbano',
      significado:
        'Se refiere a un territorio de transición entre el espacio urbano y el rural, caracterizado por una mezcla de usos y una situación de interfaz entre ciudad y campo. Este espacio no es ni completamente urbano ni rural, y suele estar en constante transformación, debido a la expansión de la ciudad y la incorporación de nuevas tierras a su entorno.',
    },
    {
      termino: 'Ruralidad',
      significado:
        'Conjunto de fenómenos sociales y culturales que ocurren en zonas rurales, especialmente vinculadas a las actividades agropecuarias, y que generan una identidad y sentido de pertenencia en las comunidades que habitan esos espacios.',
    },
    {
      termino: 'Tradiciones culturales',
      significado:
        'Son un conjunto de costumbres, prácticas, creencias y rituales transmitidos de generación en generación, dentro de una comunidad o sociedad, que contribuyen a la identidad cultural y social de un grupo. Incluyen festividades, modos de vestir, formas de cocinar, canciones, danzas y ceremonias que refuerzan el sentido de pertenencia y continuidad histórica.',
    },
    {
      termino: 'Tradiciones ancestrales',
      significado:
        'Son prácticas, creencias, rituales y costumbres, transmitidas de generación en generación que forman parte esencial de la identidad cultural de pueblos y comunidades, especialmente indígenas.',
    },
    {
      termino: 'Urbano',
      significado:
        'Es un adjetivo que se refiere a lo perteneciente o relativo a la ciudad y a otros núcleos de población.',
    },
  ],
}
