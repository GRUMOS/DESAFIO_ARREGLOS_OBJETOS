const propiedadesVenta = [
    {
      nombre: 'Cabaña el Molino',
      src: 'https://cl.habcdn.com/photos/business/big/casa-campo-madera-nativa-78202.jpg',
      descripcion: 'Casa de madera con hermosa vista',
      ubicacion: 'km 5 Las corrientes',
      bathroom: 3,
      habitaciones: 4,
      costo: 45200000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Departamento tipo estudio',
      src: 'https://i.pinimg.com/564x/e7/8f/cc/e78fccfa936ba6e831a2e9bbd9ad1fa8.jpg',
      descripcion: 'Acogedor departamento tipo estudio',
      ubicacion: 'Calle Wallaby, 42, Sidney',
      bathroom: 1,
      habitaciones: 1,
      costo: 80000000,
      smoke: true,
      pets: false
    },
    {
      nombre: 'Villa el Barco',
      src: 'https://i.blogs.es/121542/casa-barco/1366_2000.png',
      descripcion: 'Para los amantes de los barcos',
      ubicacion: 'Av siempre Inundada, 432',
      bathroom: 4,
      habitaciones: 6,
      costo: 500000000,
      smoke: true,
      pets: true    
    },
    {
      nombre: 'Villa Pichaman',
      src: 'https://planetarquitectura.com/wp-content/uploads/2021/05/CASAS-DE-CAMPO-REVESTIDAS-CON-PIEDRA7-1.jpg',
      descripcion: 'Para disfrutar en familia',
      ubicacion: 'Donceles 815',
      bathroom: 1,
      habitaciones: 2,
      costo: 45000000,
      smoke: true,
      pets: true
    },
  ];
  
  const containerVenta = document.getElementById('venta');
  
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
  
  let rowVenta = containerVenta.querySelector('.row');
  
  document.addEventListener('DOMContentLoaded', () => {
    showCard(4);
  });
  
  showCard = (cantidad) => {
    propiedadesVenta.forEach((sale, index) => {
      if (index > cantidad - 1) { return }
      rowVenta.innerHTML += cardTemplateWithCol(sale);
    });
  }
  
