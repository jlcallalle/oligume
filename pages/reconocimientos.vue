<template>
  <div class="wrap-detalle-page">
    <div class="producto-header">
      <div class="container">
        <h1>Reconocimiento</h1>
      </div>
    </div>
    <div class="producto-detalle">
      <div class="container">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <!-- CARRUSEL DE PREMIOS -->
           <div class="col-12 col-sm-8 col-lg-6">
            <div id="carouselPremios" class="carousel slide" data-bs-ride="carousel">
             
              <!-- Imágenes -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="@/assets/premios/premio_oligume1.png" class="d-block w-100" alt="Premio Oligume 1" />
                </div>
                <div class="carousel-item">
                  <img src="@/assets/premios/premio_oligume2.png" class="d-block w-100" alt="Premio Oligume 2" />
                </div>
                <div class="carousel-item">
                  <img src="@/assets/premios/premio_oligume3.png" class="d-block w-100" alt="Premio Oligume 3" />
                </div>
                <div class="carousel-item">
                  <img src="@/assets/premios/premio_oligume4.png" class="d-block w-100" alt="Premio Oligume 3" />
                </div>
              </div>

               <!-- Dots -->
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselPremios" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Premio 1"></button>
                <button type="button" data-bs-target="#carouselPremios" data-bs-slide-to="1" aria-label="Premio 2"></button>
                <button type="button" data-bs-target="#carouselPremios" data-bs-slide-to="2" aria-label="Premio 3"></button>
                <button type="button" data-bs-target="#carouselPremios" data-bs-slide-to="3" aria-label="Premio 4"></button>
              </div>


            </div>
          </div>
          
          <div class="col-lg-6 detalle-texto">
            <h2 class="display-5 fw-bold lh-1 mb-3">Calidad y Excelencia</h2>
            <p>
              En Oligume, nos sentimos orgullosos de ser una empresa familiar
              que cultiva con responsabilidad, compromiso y respeto por la
              tierra. A lo largo de nuestro camino, hemos obtenido importantes
              reconocimientos que respaldan la calidad de nuestros productos y
              nuestras prácticas agrícolas:
            </p>
            <ul class="list-reconocimientos">
              <li>
                <div class="title-p">Certificación BPN (Buenas Prácticas Agrícolas)</div> 
                Avala que
                nuestros procesos de cultivo respetan normas de inocuidad
                alimentaria, sostenibilidad ambiental y bienestar del
                trabajador.
              </li>
              <li>
                <div class="title-p">Certificado "Fundo Verde" </div>
                Reconocimiento otorgado a cultivos libres de
                plaguicidas, lo que garantiza productos más
                sanos para nuestros consumidores y seguros para el medio
                ambiente.
              </li>
              <li>
                <div class="title-p">Licenciatarios de la Marca Arequipa</div> 
                Representamos con orgullo a
                nuestra región, llevando productos de calidad que reflejan la
                identidad y excelencia arequipeña.
              </li>
              <li>
                <div class="title-p">🥇 1er puesto al Mejor Campo Agroecológico en Cultivo de
                Olivo</div> Reconocimiento que destaca nuestra producción responsable,
                sostenible y con enfoque agroecológico en el cultivo de
                aceitunas.
              </li>
              <li>
                <div class="title-p">🏅 Premio en el Concurso de Innovación en Valor Agregado</div>
                Galardón que resalta nuestros esfuerzos por transformar nuestras
                aceitunas y aceites en productos diferenciados, con valor
                añadido y enfoque de mercado.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
