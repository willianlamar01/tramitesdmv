// Smooth scrolling para todos los navegadores
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const arrow = this.querySelector('span:last-child');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrow.textContent = '▼';
        } else {
            // Cerrar otros FAQs
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            document.querySelectorAll('.faq-question span:last-child').forEach(arr => {
                arr.textContent = '▼';
            });
            
            answer.style.display = 'block';
            arrow.textContent = '▲';
        }
    });
});

// ============================================
// FUNCIONES DEL MODAL DE SOLICITUD DE SERVICIO
// ============================================

let currentServicePrice = '';

// Abrir modal de solicitud
function openRequestModal(serviceName, price) {
    currentServicePrice = price;
    const modal = document.getElementById('requestModal');
    const modalTitle = document.getElementById('modalTitle');
    const serviceTypeInput = document.getElementById('serviceType');
    
    modalTitle.textContent = `Solicitud: ${serviceName}`;
    serviceTypeInput.value = serviceName;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

// Cerrar modal de solicitud
function closeRequestModal() {
    const modal = document.getElementById('requestModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
    
    // Reset del formulario
    const form = document.getElementById('requestForm');
    const successMessage = document.getElementById('successMessage');
    
    form.style.display = 'block';
    successMessage.style.display = 'none';
    form.reset();
}

// Cerrar modal al hacer click fuera de él
document.getElementById('requestModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeRequestModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeRequestModal();
    }
});

// Manejar envío del formulario de solicitud
const requestForm = document.getElementById('requestForm');
if (requestForm) {
    requestForm.addEventListener('submit', function(e) {
        e.preventDefault();

      // Obtener datos del formulario
const serviceType = document.getElementById('serviceType').value;
const fullName = document.getElementById('fullName').value.trim();
const phone = document.getElementById('phone').value.trim();
const address = document.getElementById('address').value.trim();
const address2 = document.getElementById('address2').value.trim();
const city = document.getElementById('city').value.trim();
const state = document.getElementById('state').value.trim();
const zipcode = document.getElementById('zipcode').value.trim();
const comments = document.getElementById('comments').value.trim();

        // Validación básica
        if (!fullName || !phone || !address || !city || !state || !zipcode) {
            alert('Por favor complete todos los campos requeridos.');
            return;
        }

        // Validar código postal (5 dígitos)
        if (!/^\d{5}$/.test(zipcode)) {
            alert('El código postal debe tener 5 dígitos.');
            return;
        }

// Preparar mensaje para WhatsApp
const whatsappMessage = 
    `*NUEVA SOLICITUD DE SERVICIO*%0A%0A` +
    `*Servicio:* ${serviceType}%0A` +
    `*Precio:* ${currentServicePrice}%0A%0A` +
    `*DATOS DEL CLIENTE*%0A` +
    `*Nombre:* ${fullName}%0A` +
    `*Teléfono:* ${phone}%0A` +
    `*Dirección:* ${address}%0A` +
    (address2 ? `*Dirección 2:* ${address2}%0A` : '') +
    `*Ciudad:* ${city}%0A` +
    `*Estado:* ${state}%0A` +
    `*Código Postal:* ${zipcode}%0A` +
    (comments ? `*Comentarios:* ${comments}%0A` : '') +
    `%0A*Fecha:* ${new Date().toLocaleString('es-ES')}`;

        // Ocultar formulario y mostrar animación de éxito
        requestForm.style.display = 'none';
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';

        // Redirigir a WhatsApp después de 2 segundos
        setTimeout(() => {
            window.open(`https://wa.me/18437034758?text=${whatsappMessage}`, '_blank');
            
            // Cerrar modal después de 3 segundos adicionales
            setTimeout(() => {
                closeRequestModal();
            }, 3000);
        }, 2000);
    });
}

// ============================================
// FORMULARIO DE TESTIMONIOS (código existente)
// ============================================

const testimonialForm = document.getElementById('testimonialForm');
const formMessage = document.getElementById('formMessage');

if (testimonialForm) {
    testimonialForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const location = document.getElementById('location').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked');
        const testimonial = document.getElementById('testimonial').value.trim();
        const email = document.getElementById('email').value.trim();
        const consent = document.getElementById('consent').checked;

        // Validaciones
        if (!name || !location || !rating || !testimonial || !consent) {
            showMessage('Por favor completa todos los campos requeridos.', 'error');
            return;
        }

        if (testimonial.length < 50) {
            showMessage('El testimonio debe tener al menos 50 caracteres.', 'error');
            return;
        }

        // Preparar datos para enviar
        const formData = {
            nombre: name,
            ubicacion: location,
            calificacion: rating.value,
            testimonio: testimonial,
            email: email || 'No proporcionado',
            fecha: new Date().toLocaleString('es-ES')
        };

        // Mensaje para WhatsApp
        const whatsappMessage = `*NUEVO TESTIMONIO*%0A%0A` +
            `*Nombre:* ${formData.nombre}%0A` +
            `*Ubicación:* ${formData.ubicacion}%0A` +
            `*Calificación:* ${'⭐'.repeat(parseInt(formData.calificacion))}%0A` +
            `*Testimonio:* ${formData.testimonio}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Fecha:* ${formData.fecha}`;

        // Mostrar mensaje de éxito
        showMessage('¡Gracias por tu testimonio! Lo revisaremos y publicaremos pronto. Te hemos redirigido a WhatsApp para confirmar.', 'success');
        
        // Limpiar formulario
        testimonialForm.reset();

        // Abrir WhatsApp después de 2 segundos
        setTimeout(() => {
            window.open(`https://wa.me/18437034758?text=${whatsappMessage}`, '_blank');
        }, 2000);
    });
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';
    
    // Scroll al mensaje
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Ocultar mensaje después de 5 segundos si es error
    if (type === 'error') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ============================================
// AUTOCOMPLETADO DE DIRECCIONES SIN API KEY
// Usando OpenStreetMap Nominatim (Gratuito)
// ============================================

let autocompleteTimeout;
let suggestionsContainer;

// Crear contenedor de sugerencias
function createSuggestionsContainer() {
    if (suggestionsContainer) return;
    
    suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'address-suggestions';
    suggestionsContainer.style.display = 'none';
    
    const addressInput = document.getElementById('address');
    addressInput.parentNode.style.position = 'relative';
    addressInput.parentNode.appendChild(suggestionsContainer);
}

// Buscar direcciones mientras el usuario escribe
document.getElementById('address')?.addEventListener('input', function(e) {
    const query = e.target.value.trim();
    
    // Solo buscar si hay al menos 5 caracteres
    if (query.length < 5) {
        hideSuggestions();
        return;
    }
    
    // Limpiar timeout anterior
    clearTimeout(autocompleteTimeout);
    
    // Esperar 500ms después de que el usuario deje de escribir
    autocompleteTimeout = setTimeout(() => {
        searchAddresses(query);
    }, 500);
});

// Buscar direcciones en OpenStreetMap
async function searchAddresses(query) {
    try {
        // Agregar "USA" a la búsqueda para mejores resultados
        const searchQuery = encodeURIComponent(`${query}, USA`);
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}&countrycodes=us&addressdetails=1&limit=5`;
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'TramitesDMV/1.0' // Requerido por Nominatim
            }
        });
        
        if (!response.ok) throw new Error('Error en la búsqueda');
        
        const results = await response.json();
        displaySuggestions(results);
        
    } catch (error) {
        console.error('Error al buscar direcciones:', error);
        hideSuggestions();
    }
}

// Mostrar sugerencias
function displaySuggestions(results) {
    createSuggestionsContainer();
    
    if (results.length === 0) {
        hideSuggestions();
        return;
    }
    
    suggestionsContainer.innerHTML = '';
    
    results.forEach(result => {
        const suggestion = document.createElement('div');
        suggestion.className = 'address-suggestion-item';
        
        // Formatear dirección
        const address = result.address;
        const street = `${address.house_number || ''} ${address.road || ''}`.trim();
        const city = address.city || address.town || address.village || '';
        const state = address.state || '';
        const zipcode = address.postcode || '';
        
        // Mostrar la dirección completa
        suggestion.innerHTML = `
            <div class="suggestion-main">${result.display_name}</div>
        `;
        
        // Al hacer clic en una sugerencia
        suggestion.addEventListener('click', () => {
            fillFormWithAddress(street, city, state, zipcode, result.display_name);
            hideSuggestions();
        });
        
        suggestionsContainer.appendChild(suggestion);
    });
    
    suggestionsContainer.style.display = 'block';
}

// Llenar formulario con la dirección seleccionada
function fillFormWithAddress(street, city, state, zipcode, fullAddress) {
    // Si no hay calle específica, usar la dirección completa
    if (!street) {
        // Extraer solo la primera parte de la dirección
        street = fullAddress.split(',')[0];
    }
    
    document.getElementById('address').value = street;
    document.getElementById('city').value = city;
    document.getElementById('state').value = state;
    document.getElementById('zipcode').value = zipcode;
    
    // Feedback visual
    [document.getElementById('city'), document.getElementById('state'), document.getElementById('zipcode')].forEach(field => {
        if (field.value) {
            field.style.borderColor = '#00a91c';
            field.style.backgroundColor = '#f0fff4';
            setTimeout(() => {
                field.style.borderColor = '';
                field.style.backgroundColor = '';
            }, 2000);
        }
    });
}

// Ocultar sugerencias
function hideSuggestions() {
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
}

// Cerrar sugerencias al hacer clic fuera
document.addEventListener('click', function(e) {
    const addressInput = document.getElementById('address');
    if (e.target !== addressInput && !suggestionsContainer?.contains(e.target)) {
        hideSuggestions();
    }
});

// Prevenir que Enter envíe el formulario al seleccionar sugerencia
document.getElementById('address')?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && suggestionsContainer?.style.display === 'block') {
        e.preventDefault();
    }
});