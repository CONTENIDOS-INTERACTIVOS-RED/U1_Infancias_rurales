<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Ambientes y contextos rurales de niños y niñas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p(data-aos="fade-down") La primera infancia tiene un capítulo importante en la historia reciente de la educación colombiana y la ruralidad ha tenido una extensa intención en las agendas de gobierno local y nacional, particularmente a través de la Ley 1804 del 2016: Política de Estado para el Desarrollo Integral de la Primera Infancia “De Cero a Siempre”. Dentro de las atenciones priorizadas para los niños y niñas rurales, se destacan:
    .row.align-items-start.mb-5      
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Primer tema")
            p El esquema de vacunación completo para la edad.
          .div(titulo="Segundo tema")
            p La valoración integral para la promoción y mantenimiento de la salud.La valoración integral para la promoción y mantenimiento de la salud.
          .div(titulo="Tercero tema")
            p La educación inicial y atención integral.
          .div(titulo="Cuarto tema")
            p La disposición de talento humano que realiza acciones para la atención integral de la primera infancia en la formación inicial, en servicios y/o avanzada.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/38.png", alt="")                          

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/39.png", alt="")        
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Quinto tema")
            p Apoyo para cumplir con los requerimientos nutricionales.
          .div(titulo="Sexto tema")
            p Dotación de ambientes pedagógicos.
          .div(titulo="Séptimo tema")
            p Educación para cuidadores y familias en servicios de educación inicial.
          .div(titulo="Octavo tema")
            p Acceso a espacios lúdicos y contenidos especializados, de manera regular.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Cartografía de las ruralidades en Colombia

    p(data-aos="fade-down") Colombia es un país rural y de acuerdo con su ubicación geográfica y diversidad social, es posible definir que existen variados tipos de ruralidades.

    p(data-aos="fade-down") La estructura por departamentos y municipios es insuficiente para entender los distintos contextos rurales del país; sin embargo, hay algunos puntos que, desde lo común, podrían aportar a las cualidades diferenciales. Para el caso, se usará la tipificación por las cinco regiones: 

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/37.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="21.5%" y="10.7%" numero="+")
                  h5 Región Caribe     
                  p.mb-0 Lugar de comunidades indígenas con saberes y culturas ancestrales. Los indígenas Wayuu de la Guajira, los Koguis de la Sierra nevada de Santa Marta, la tradición Sinú, entre otras. Además, es un territorio donde convergen los ríos y el océano Atlántico y actividades asociadas a los cultivos de alimentos y la pesca.
                .bg-color-white.box-shadow.p-3(x="25.2%" y="39.7%" numero="+")
                  h5 Región Pacífico     
                  p.mb-0 Territorio en el que la historia ha contribuido con la presencia de comunidades afro e indígenas, un lugar de biodiversidad y prácticas asociadas a la agricultura del pan coger y la pesca artesanal. En territorios con ríos caudalosos, bosques lluviosos y el Océano Pacífico, la ruralidad encuentra una fuente inagotable. 
                .bg-color-white.box-shadow.p-3(x="34.1%" y="82.2%" numero="+")
                  h5 Región Andina     
                  p.mb-0 Además de confluir diferentes culturas alto y bajo andinas, es tierra de agricultura por excelencia, con una extensión única donde convergen tradiciones culturales ancestrales, del campo colombiano.
                .bg-color-white.box-shadow.p-3(x="67.3%" y="21.8%" numero="+")
                  h5 Región Oriental     
                  p.mb-0 Su principal cualidad geográfica, que son las llanuras, ha permitido el desarrollo de la agricultura y la ganadería extensiva. Con una cultura asociada al folclore propio de las prácticas del campo y la tradición oral de ancestros que labraron los campos extensos.
                .bg-color-white.box-shadow.p-3(x="74.9%" y="84.5%" numero="+")
                  h5 Región Amazónica     
                  p.mb-0 Foco importante de la biodiversidad nacional y del planeta. Hábitat de una cantidad extraordinaria de comunidades indígenas que conservan tradiciones, dialectos idiomas y prácticas ancestrales. Territorios de frontera con múltiples comunidades indígenas de otras naciones y de la movilidad a través de los grandes ríos que le atraviesan.


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.5294/edu.2019.22.3.2" target="_blank" rel="noopener noreferrer") Bautista Díaz, D. A., García Gutiérrez, Z. del P., Casas Casallas, E., Gómez Amaya, J., & Gutiérrez Castro, B. A. (2019). Ludomática en ambientes de aprendizaje: educación rural en el posconflicto colombiano. Educación Y Educadores, 22(3), 359–376. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.idep.edu.co/index.php/educacion-y-ciudad/article/view/1647" target="_blank" rel="noopener noreferrer") Arias Gaviria, J. (2017). Problemas y retos de la educación rural colombiana. Educación y Ciudad, (33), 53–62. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=WLg09eWqCyI" target="_blank" rel="noopener noreferrer") Oficina de la OIT para América Latina y el Caribe. (2022). Prevención del trabajo infantil en zonas rurales.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Infancias Rurales',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Las zonas rurales corresponden a los campos (extensiones) y pueblos que dependen de actividades económicas del sector primario y se caracterizan por tener una menor cantidad de habitantes con respecto al espacio geográfico extenso. ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Falso',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Verdadero',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'La educación rural en el país',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Goza de calidad, buena cobertura y baja deserción',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Cuenta con brechas relacionadas con la calidad, la deserción y la cobertura',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'No se cuentan con datos suficientes para determinar el estado de la educación rural en Colombia',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La educación rural en Colombia es suficiente pero la población es muy baja',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'La educación inicial rural',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Es impartida por colegios y jardines infantiles',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'En parte es asumida por las familias, cuidadores y algunas instituciones o escuelas rurales',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Por entidades especializadas de los gobiernos locales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No se tiene información suficiente sobre el fenómeno',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En Colombia la ruralidad:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Es similar en todos los territorios del país',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Presenta diferencias según la zona y territorios, debido a los contextos, culturas y dinámicas sociales',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Mantienen la misma forma y estructura que las familias urbanas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Guardan relación con las estructuras de familia y escuela que las zonas urbanas y cabeceras municipales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Una de estas situaciones y fenómenos NO afecta a la niñez de la ruralidad:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Maltrato infantil y prácticas de violencia',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Deserción escolar',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Trabajo Infantil',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Exceso de consumo de información proveniente de internet y redes sociales',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
