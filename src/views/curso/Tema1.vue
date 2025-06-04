<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. El mundo rural de la niñez colombiana'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center            
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") En el altiplano cundiboyacense, los llanos orientales, las zonas desérticas de la Guajira, los territorios costeros del Atlántico y el Pacífico, las grandes selvas de la Orinoquía, Amazonía y Guaviare, tantos escenarios ecosistémicos, biodiversos y de patrimonio nacional, guardan en común la caracterización poblacional sobre la ruralidad. 
        .col-lg-auto.mb-3.mb-lg-0.order-lg-2
          figure
            img.img-a.img-t(src='@/assets/curso/temas/4.png', alt='')  

    p(data-aos="fade-down") Las zonas rurales corresponden a los campos (extensiones) y pueblos que dependen de actividades económicas del sector primario; se caracterizan por tener una menor cantidad de habitantes, con respecto al espacio geográfico extenso. 

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/5.png", data-aos="zoom-in")                  
      .col-lg-8  
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/6.png")
            .col-lg
              p.mb-0 Según datos aportados por la Revista Semana (2012), el 94 % del territorio del país es rural y el 32 % de la población colombiana habita esas tierras, descripción que confirma que Colombia es un país con gran diversidad de ruralidades, en donde no es posible hablar de un solo tipo de área rural, sino de contextos o territorios rurales.
        p(data-aos="fade-down") Según la Agencia Nacional de Tierras del gobierno nacional, “los territorios rurales se comprenden como un espacio histórico y social, que, a partir de una delimitación geográfica, integra al menos cuatro componentes: un territorio con actividades económicas diversas interrelacionadas; una población principalmente ligada al uso y manejo de los recursos naturales, con una cultura propia; unos asentamientos con una red de relaciones entre sí y con el exterior; y unas instituciones, gubernamentales y no gubernamentales, que interactúan entre sí”.             

    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg
            .py-4.j1
              p.mb-0 Las zonas rurales se pueden clasificar en zona rural dispersa o zona rural nucleada; a su vez, la zona rural dispersa puede ser de muy baja o baja densidad poblacional; esto último, genera efectos sobre la prestación de servicios básicos, la construcción de comunidad y la gobernanza.
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/7.png")

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Cifras de la infancia rural en Colombia

    .row.mb-5 
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-1.p-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 Según datos de UNICEF Colombia (2023), el sistema educativo de Colombia sigue avanzando sobre la construcción de una educación de calidad para la inclusión y retención de niñas, niños y adolescentes, en las escuelas, en especial para indígenas y afrodescendientes, poblaciones que hacen parte de nuestros entornos rurales. En detalle, por cada 100 estudiantes que ingresan a la escuela en las zonas urbanas, solo el 82 completa su educación. En las zonas rurales, solo el 48 % completa su educación. La tasa nacional de analfabetismo es de 7.4 %, en los afrodescendientes e indígenas es de 11,2 % y 28,6 %, respectivamente. 
        p(data-aos="fade-down") Otras cifras claves sobre la niñez rural (UNICEF, 2023) son los siguientes:

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/1.png", data-aos="zoom-in") 

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p La tasa de #[b mortalidad en menores] de un año en los territorios rurales es más del doble del promedio nacional (17,47 %) en departamentos del Pacífico (Chocó, 41,92 %) y la región Amazónica (38,44 %). En La Guajira, este indicador alcanza un valor crítico de 31,61 %.      
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/9.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p De acuerdo con el Ministerio Nacional de Salud y Protección Social, las tasas más altas de  #[b mortalidad materna] se presentan en tres de las cinco regiones con la más alta población rural, indígena y afro-descendiente: La Caribe, la Pacífica y la Orinoquía. En el Chocó, la tasa de mortalidad materna es 224 por 100.000 nacidos vivos, más de tres veces el promedio nacional (65,89).     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/10.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p Aunque es imposible saber con certeza cuántos niños, niñas y adolescentes, están vinculados a  #[b grupos armados], entre 1999 y 2013 el Instituto Colombiano de Bienestar Familiar (ICBF) asistió a 5,417 niños, niñas y adolescentes, desvinculados de grupos armados ilegales.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/11.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p En el año 2020 fallecieron 209 niños por causas asociadas a la  #[b desnutrición infantil]. El 60 % de los niños entre los 6 y 12 meses, presenta anemia por malos hábitos de alimentación.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/12.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p Para el 2020, el 60 % de los habitantes de zonas rurales de Colombia no contaba con agua segura, solo el 9 % consumía el agua de fuentes superficiales, producto de las precipitaciones o nacimientos de las aguas subterráneas.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/13.png")

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Colombia es un país rural 

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/14.png", data-aos="zoom-in")                  
      .col-lg-8
        p(data-aos="fade-down") Existen diversas investigaciones, realizadas sobre las realidades de los contextos rurales en el país. Los estudios demuestran que Colombia es una nación con un importante componente rural, una distribución geográfica dispersa, una gran diversidad cultural y social, y una compleja dinámica de interacciones entre sus diferentes regiones y grupos sociales. 

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/15.png")
            .col-lg
              p.mb-0 De manera histórica, la ruralidad en Colombia, además de ser sinónimo de prácticas agrícolas, también ha sido escenario de violencias, desplazamiento, migraciones, reconciliación y paz. En ese sentido, la educación rural ha tenido históricamente, brechas asociadas con el acceso, la calidad, la disponibilidad y las oportunidades. 

    .bg-full-width-1.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p(data-aos="fade-down").mb-4 Teniendo en cuenta las cifras y la información anterior, se evidencia que la niñez rural en Colombia presenta las siguientes condiciones que generan vulnerabilidad e inequidad:
        .row.justify-content-center.mb-5      
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/17.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Acceso restringido a fuentes de agua potable de calidad. 
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/18.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Limitación en el acceso a los alimentos en condiciones inocuas, nutrición balanceada, según la edad. 
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/19.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Educación en condiciones de calidad, según la edad y con oportunidades para alcanzar trayectorias completas.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/20.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 La preservación de todos los derechos en condiciones sociales y políticas como conflicto armado, migraciones, desplazamientos. 
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/21.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Limitaciones territoriales para acceder a condiciones de salud dignas, con atención médica oportuna y preventiva.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/22.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Limitación de recursos y medios educativos que promuevan la innovación, identidad, tecnologías, creatividad y el desarrollo de competencias básicas.                 
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='')





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.upn.edu.co/index.php/PYS/article/view/10025/7799" target="_blank" rel="noopener noreferrer") ÁVILA, L. Y VARGAS, J. (2017). Visiones de la niñez y la ruralidad en las políticas públicas para la infancia de contextos rurales durante los últimos 80 años. En C. Córdoba y A.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://fundaec.org/wp-content/uploads/2021/01/Perfetti-M.-2003.-Estudio-sobre-la-Educacion-para-la-poblacion-rural-en-Colombia.-Proyecto-FAO-UNESCO-DOGCS-ITALIA-CIDE-REDUC.-pp.-164-216..pdf" target="_blank" rel="noopener noreferrer") Perfetti, M. (2003). Estudio sobre la educación para la población rural en Colombia.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://observatorio.ant.gov.co/lineas-de-accion/territorios-etnicos-y-campesinos" target="_blank" rel="noopener noreferrer") Agencia Nacional de Tierras. (s.f.). Territorios étnicos y campesinos. Gobierno de Colombia.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=507451GLU-E" target="_blank" rel="noopener noreferrer") Compartir Palabra Maestra. (2019). Marcela Bautista habla del estudio ‘Docencia rural en Colombia’.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
