/* Modo Oscuro-Claro*/
const btnModo = document.getElementById("dark");
const html = document.documentElement;
const heroElement = document.querySelector('.hero-bg');


btnModo.addEventListener('click', () => {

    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        heroElement.style.filter = 'brightness(100%)';
    } else {
        html.setAttribute('data-theme', 'dark');
        heroElement.style.filter = 'brightness(50%)';
    }
});
/* Modo Oscuro-Claro*/

const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva ',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678 ',
        habitaciones: 4,
        bathroom: 2,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas ',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456 ',
        habitaciones: 2,
        bathroom: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica ',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares ',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789 ',
        habitaciones: 3,
        bathroom: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Propiedad en venta",
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion",
        ubicacion: "ubicacion ubicacion ubicacion ubicacion",
        habitaciones: 3,
        bathroom: 2,
        costo: 1000,
        smoke: false,
        pets: true
    },
    {
      nombre: "Propiedad en venta",
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion",
        ubicacion: "ubicacion ubicacion ubicacion ubicacion",
        habitaciones: 3,
        bathroom: 2,
        costo: 1000,
        smoke: false,
        pets: true
    },
    {
      nombre: "Propiedad en venta",
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion",
        ubicacion: "ubicacion ubicacion ubicacion ubicacion",
        habitaciones: 3,
        bathroom: 2,
        costo: 1000,
        smoke: false,
        pets: true
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo. ',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        bathroom: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar ',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789 ',
        habitaciones: 3,
        bathroom: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica ',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares ',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789 ',
        habitaciones: 2,
        bathroom: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: "Propiedad en alquiler",
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion",
        ubicacion: "ubicacion ubicacion ubicacion ubicacion",
        habitaciones: 3,
        bathroom: 2,
        costo: 1000,
        smoke: false,
        pets: true
      },
      {
        nombre: "Propiedad en alquiler",
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion",
        ubicacion: "ubicacion ubicacion ubicacion ubicacion",
        habitaciones: 3,
        bathroom: 2,
        costo: 1000,
        smoke: false,
        pets: true
      },
      {
        nombre: "Propiedad en alquiler",
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion",
        ubicacion: "ubicacion ubicacion ubicacion ubicacion",
        habitaciones: 3,
        bathroom: 2,
        costo: 1000,
        smoke: false,
        pets: true
      }
];

const totalEnVenta = propiedades_venta.length;
mostrarVenta = (total = totalEnVenta) => {
    let htmlRender = '';
    const propiedadesVenta = document.getElementById('venta');
    for (propiedad_venta of propiedades_venta.slice(0, total)) {
        htmlRender += `
            <div class="cell">
            <div class="card">
          
            <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${propiedad_venta.src}"
                    alt="Placeholder image" />
                </figure>
                <div class="is-flex is-justify-content-flex-end">
                    <span class="tag is-warning is-light">Venta</span>
                </div>
            </div>
            
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">${propiedad_venta.nombre}</p>
                    <p class="is-6">${propiedad_venta.descripcion}</p>
                  </div>
                </div>
                <div class="content">
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${propiedad_venta.ubicacion}</p>
                    
                    <p>
                        <i class="fas fa-bed" aria-hidden="true"></i> ${propiedad_venta.habitaciones} Habitaciones |
                        <i class="fas fa-bath" aria-hidden="true"></i> ${propiedad_venta.bathroom} Baños
                    </p>
                    
                    <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${propiedad_venta.costo}</p>
                    
                    <p>${propiedad_venta.smoke ? '<i class="fas fa-smoking has-text-success" aria-hidden="true"></i> <span class="tag is-primary">Permitido fumar </span>' : '<i class="fas fa-smoking-ban has-text-danger" aria-hidden="true"></i> <span class="tag is-danger"> No se permite fumar </span>'} </p>

                    <p>${propiedad_venta.pets ? '<i class="fas fa-paw has-text-success" aria-hidden="true"></i> <span class="tag is-primary"> Mascotas permitidas</span>' : '<i class="fas fa-ban has-text-danger" aria-hidden="true"></i> <span class="tag is-danger"> No se permiten mascotas </span>'} </p>
  
                </div>
              </div>
            </div>
          </div>
        `;
    }
    propiedadesVenta.innerHTML = htmlRender;
}


const totalEnAlquiler = propiedades_alquiler.length;
mostrarAlquiler = (total = totalEnAlquiler) => {
    let htmlRender = '';
    const propiedadesAlquiler = document.getElementById('alquiler');
    for(propiedad_alquier of propiedades_alquiler.slice(0, total)){
        htmlRender +=  `
            <div class="cell">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${propiedad_alquier.src}"
                    alt="Placeholder image" />
                </figure>
              </div>
                <div class="is-flex is-justify-content-flex-end">
                    <span class="tag is-info is-light">Alquiler</span>
                </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">${propiedad_alquier.nombre}</p>
                    <p class="is-6">${propiedad_alquier.descripcion}</p>
                  </div>
                  
                </div>
                <div class="content">
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${propiedad_alquier.ubicacion}</p>
                    
                    <p>
                        <i class="fas fa-bed" aria-hidden="true"></i> ${propiedad_alquier.habitaciones} Habitaciones |
                        <i class="fas fa-bath" aria-hidden="true"></i> ${propiedad_alquier.bathroom} Baños
                    </p>
                    
                    <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${propiedad_alquier.costo}</p>
                    
                    <p>${propiedad_alquier.smoke ? '<i class="fas fa-smoking has-text-success" aria-hidden="true"></i> <span class="tag is-primary">Permitido fumar </span>' : '<i class="fas fa-smoking-ban has-text-danger" aria-hidden="true"></i> <span class="tag is-danger"> No se permite fumar </span>'} </p>

                    <p>${propiedad_alquier.pets ? '<i class="fas fa-paw has-text-success" aria-hidden="true"></i> <span class="tag is-primary"> Mascotas permitidas</span>' : '<i class="fas fa-ban has-text-danger" aria-hidden="true"></i> <span class="tag is-danger"> No se permiten mascotas </span>'} </p>
  
                </div>
              </div>
            </div>
          </div>
        `;
    }
    propiedadesAlquiler.innerHTML = htmlRender;
}