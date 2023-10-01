// Arreglo propiedades en alquiler

const propiedadesAlquiler =[
    {
        nombre:'Piezas para estudiantes',
        src: 'https://http2.mlstatic.com/D_NQ_NP_747691-MLC71526854803_092023-V.webp',
        descripcion: 'Una habitación perfecta para estudiantes',
        ubicacion: 'Mockingbird Lane 1313',
        bathroom: 1,
        habitaciones: 1,
        costo: 1000,
        smoke: true,
        pets: false
    },
    {
        nombre:'Casa de veraneo',
        src: 'https://images.adsttc.com/media/images/5a58/a650/f197/cc1f/8600/0173/slideshow/S3_CDS--5.jpg?1515759173',
        descripcion: 'Una casa de playa con acceso directo a la playa',
        ubicacion: 'Avenida Siempreviva 742',
        bathroom: 3,
        habitaciones: 5,
        costo: 3500,
        smoke: false,
        pets: true
    },
    {
        nombre:'bachelor apartment',
        src: 'https://res.cloudinary.com/rent-blogs/image/upload/c_scale,w_848,h_565,dpr_1.25/f_auto,q_auto/v1678299746/shutterstock_2107706372.jpg?_i=AA',
        descripcion: 'Un apartamento para hombre soltero.',
        ubicacion: 'Grimmauld Place 12',
        bathroom: 1,
        habitaciones: 2,
        costo: 1800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa campirana',
        src: 'https://i.pinimg.com/564x/fa/32/7f/fa327f52f34ba9f572ee4676312ccdca.jpg',
        descripcion: 'Una casa rústica con encanto en las afueras.',
        ubicacion: 'Windsor Gardens 32',
        bathroom: 2,
        habitaciones: 3,
        costo: 1700,
        smoke: true,
        pets: false
    }
];
const containerAlquiler = document.getElementById('alquiler');

const cardTemplateWithCol = (sale) => {
    return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${sale.src}"
          class="card-img-top"
          alt="${sale.nombre}"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${sale.nombre}
          </h5>
          <p class="card-text">
            ${sale.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${sale.ubicacion}
          </p>
          <p>
          habitaciones : <i class="fas fa-bed"></i> ${sale.bathroom} |
          bathroom: <i class="fas fa-bath"></i> ${sale.habitaciones}
          </p>
          <p>
            <i class="fas fa-dollar-sign"></i>${sale.costo}
          </p>
          <p class=${sale.smoke ? 'text-success' : 'text-danger'}>
            <i class="${sale.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
            ${sale.smoke ? 'Permitido fumar' : 'No se permite fumar'}
          </p>
          <p class="${sale.pets ? 'text-success' : 'text-danger'}">
            <i class="${sale.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
            ${sale.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
          </p>
        </div>
      </div>
    </div>
    `;
  }
  
  let rowAlquiler = containerAlquiler.querySelector('.row');
  
  document.addEventListener('DOMContentLoaded', () => {
    showCard(4);
  });
  
  showCard = (cantidad) => {
    propiedadesAlquiler.forEach((sale, index) => {
      if (index > cantidad - 1) { return }
      rowAlquiler.innerHTML += cardTemplateWithCol(sale);
    });
  }
  
