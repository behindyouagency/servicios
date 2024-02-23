function toggleCategoria(categoria) {
    const categoriaElement = document.getElementById(categoria);
    const categorias = document.querySelectorAll('.categoria');

    categorias.forEach(cat => {
        if (cat.id !== categoria) {
            cat.style.display = 'none';
        }
    });

    if (categoriaElement.style.display === 'none' || categoriaElement.style.display === '') {
        mostrarCategoria(categoria);
    } else {
        ocultarCategoria(categoria);
    }
}

function mostrarCategoria(categoria) {
    const categoriaElement = document.getElementById(categoria);
    const serviciosCategoria = servicios[categoria];
    categoriaElement.innerHTML = '';
    serviciosCategoria.forEach(servicio => {
        const servicioHTML = `
            <div class="servicio">
                <h2>${servicio.nombre}</h2>
                <p>${servicio.descripcion}</p>
                <p>Valor: $${servicio.valor}</p>
            </div>
        `;
        categoriaElement.insertAdjacentHTML('beforeend', servicioHTML);
    });
    categoriaElement.style.display = 'block';
}

function ocultarCategoria(categoria) {
    const categoriaElement = document.getElementById(categoria);
    categoriaElement.style.display = 'none';
}

const servicios = {
    "identidad-corporativa": [
        { nombre: "Nuevo Logotipo", descripcion: "Diseño de un logotipo único que represente la marca, incluye manual de identidad y 5 aplicaciones.", valor: 720 },
        { nombre: "Rediseño Identidad corporativa", descripcion: "Actualización del logotipo y elementos de identidad visual de la marca.", valor: 600 },
        { nombre: "Manual de Identidad", descripcion: "Documento detallado que establece los lineamientos de la identidad visual de la marca.", valor: 500 },
        { nombre: "Logotipo", descripcion: "Diseño de un logotipo simple y memorable para la marca.", valor: 350 },
        { nombre: "Vectorización de logo", descripcion: "Conversión del logotipo a formato vectorial para su uso en diferentes medios.", valor: 130 },
        { nombre: "Diseño de papelería", descripcion: "Creación de papelería corporativa, incluyendo tarjetas de visita, sobres, etc.", valor: 220 },
        { nombre: "Key Visual", descripcion: "Creación de una imagen clave que represente la esencia de la marca.", valor: 360 },
        { nombre: "Slogan", descripcion: "Desarrollo de una frase memorable que resuma la identidad de la marca.", valor: 280 },
        { nombre: "Naming Corporativo / Institucional", descripcion: "Creación de un nombre único y relevante para la empresa.", valor: 300 }
    ],
    "merchandising": [
        { nombre: "Agenda", descripcion: "Agenda personalizada con el logo de la marca.", valor: 140 },
        { nombre: "Botones (5 versiones)", descripcion: "Botones promocionales con diseño personalizado.", valor: 130 },
        { nombre: "Saltarín", descripcion: "Figura promocional saltarina para puntos de venta.", valor: 170 },
        { nombre: "Funda para celular", descripcion: "Funda personalizada para teléfonos móviles.", valor: 170 },
        { nombre: "Plotter para pisos / paredes", descripcion: "Diseño e impresión de gráficos para promoción en pisos o paredes.", valor: 220 },
        { nombre: "Paquete de Souvenirs (Llaveros, bolígrafos, mugs, stickers, etc)", descripcion: "Conjunto de artículos promocionales variados.", valor: 180 },
        { nombre: "Diseño de Stand", descripcion: "Diseño de stands para ferias y eventos promocionales.", valor: 600 },
        { nombre: "Diseño de Uniformes", descripcion: "Diseño de uniformes corporativos para empleados.", valor: 400 },
        { nombre: "Diseño de Backing", descripcion: "Diseño de respaldos gráficos para exhibiciones y eventos.", valor: 300 }
    ],
    "publicidad-exterior": [
        { nombre: "Pasacalles", descripcion: "Carteles publicitarios para instalación en lugares estratégicos.", valor: 250 },
        { nombre: "Mupi", descripcion: "Publicidad en paneles publicitarios urbanos.", valor: 320 },
        { nombre: "Pendón", descripcion: "Banners promocionales para eventos y exposiciones.", valor: 250 },
        { nombre: "Valla", descripcion: "Anuncios publicitarios de gran formato.", valor: 350 }
    ],
    "impresos": [
        { nombre: "Poster", descripcion: "Impresión de carteles promocionales.", valor: 220 },
        { nombre: "Aviso", descripcion: "Anuncios publicitarios para medios impresos.", valor: 250 },
        { nombre: "Bolsa", descripcion: "Bolsas personalizadas con el logo de la marca.", valor: 70 },
        { nombre: "Diseño de empaque + Mockup", descripcion: "Diseño y presentación visual de empaques para productos.", valor: 480 },
        { nombre: "Catálogo de productos x página", descripcion: "Creación de catálogos detallados de productos.", valor: 115 },
        { nombre: "Correo", descripcion: "Diseño de correos electrónicos promocionales.", valor: 90 },
        { nombre: "Diseño editorial x página (Libro)", descripcion: "Diseño de layout para libros.", valor: 3 },
        { nombre: "Diseño editorial x página (Periódico y Revista)", descripcion: "Diseño de maquetación para periódicos y revistas.", valor: 40 },
        { nombre: "Diseño de portada y contraportada", descripcion: "Diseño de portadas para libros y revistas.", valor: 300 },
        { nombre: "Exhibidor", descripcion: "Diseño de expositores para puntos de venta.", valor: 200 },
        { nombre: "Folleto x página", descripcion: "Diseño de folletos promocionales.", valor: 260 },
        { nombre: "Invitación", descripcion: "Diseño de invitaciones para eventos corporativos.", valor: 60 },
        { nombre: "Brochure", descripcion: "Folletos informativos sobre la empresa o productos.", valor: 250 },
        { nombre: "Programa de evento", descripcion: "Diseño de programas para eventos y conferencias.", valor: 100 },
        { nombre: "Tótem", descripcion: "Señalización vertical para eventos y exposiciones.", valor: 400 },
        { nombre: "Volante", descripcion: "Diseño de volantes publicitarios.", valor: 170 }
    ],
    "diseno-web": [
        { nombre: "Diseño de Landing Page", descripcion: "Diseño de página de aterrizaje para captar clientes potenciales.", valor: 500 },
        { nombre: "Diseño Web Corporativo", descripcion: "Diseño de un sitio web completo con hasta 5 páginas internas.", valor: 950 },
        { nombre: "Banner animado", descripcion: "Creación de banners animados para la web.", valor: 190 },
        { nombre: "Ecommerce", descripcion: "Desarrollo de tienda en línea para venta de productos.", valor: 1300 },
        { nombre: "Administración y desarrollo de campañas publicitarias Google Ads", descripcion: "Gestión y optimización de campañas de publicidad en Google Ads.", valor: 800 },
        { nombre: "Web Master mensual", descripcion: "Mantenimiento mensual del sitio web.", valor: 350 },
        { nombre: "Estrategia SEO en web existente", descripcion: "Mejora del posicionamiento en buscadores para un sitio web ya existente.", valor: 850 },
        { nombre: "Estrategia SEO en web nueva", descripcion: "Optimización para motores de búsqueda en un sitio web nuevo.", valor: 950 }
    ],
    "social-media": [
        { nombre: "Diseño de Grid", descripcion: "Diseño de la estructura visual del feed de redes sociales.", valor: 550 },
        { nombre: "Single Post", descripcion: "Diseño y publicación de una sola publicación en redes sociales.", valor: 125 },
        { nombre: "Creación de Perfil", descripcion: "Configuración y personalización de perfiles en redes sociales.", valor: 180 },
        { nombre: "Avatar", descripcion: "Diseño de imagen de perfil para redes sociales.", valor: 30 },
        { nombre: "Creación de video tiktok/reel x 30 segundos", descripcion: "Producción de videos cortos para plataformas como TikTok o Instagram Reels.", valor: 180 },
        { nombre: "Creación de video tiktok/reel x 60 segundos", descripcion: "Producción de videos más largos para plataformas como TikTok o Instagram Reels.", valor: 220 }
    ]
};
