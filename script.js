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

// Manejar envío del formulario de solicitud - MEJORADO PARA iOS
const requestForm = document.getElementById('requestForm');
if (requestForm) {
    requestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Formulario enviado - iniciando procesamiento');

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

        console.log('Datos capturados:', { fullName, phone, city, state, zipcode });

        // Validación básica
        if (!fullName || !phone || !address || !city || !state || !zipcode) {
            alert('Por favor complete todos los campos requeridos.');
            console.log('Validación falló - campos vacíos');
            return false;
        }

        // Validar código postal (5 dígitos) - más flexible para iOS
        const zipcodeClean = zipcode.replace(/\D/g, '');
        if (zipcodeClean.length !== 5) {
            alert('El código postal debe tener 5 dígitos.');
            console.log('Validación falló - zipcode inválido:', zipcode);
            return false;
        }

        console.log('Validación exitosa - preparando mensaje');

        // Preparar mensaje para WhatsApp - Simplificado para mejor compatibilidad iOS
        const messageText = 
            '*NUEVA SOLICITUD DE SERVICIO*\n\n' +
            '*Servicio:* ' + serviceType + '\n' +
            '*Precio:* ' + currentServicePrice + '\n\n' +
            '*DATOS DEL CLIENTE*\n' +
            '*Nombre:* ' + fullName + '\n' +
            '*Teléfono:* ' + phone + '\n' +
            '*Dirección:* ' + address + '\n' +
            (address2 ? '*Dirección 2:* ' + address2 + '\n' : '') +
            '*Ciudad:* ' + city + '\n' +
            '*Estado:* ' + state + '\n' +
            '*Código Postal:* ' + zipcodeClean + '\n' +
            (comments ? '*Comentarios:* ' + comments + '\n' : '') +
            '\n*Fecha:* ' + new Date().toLocaleString('es-ES');

        const whatsappMessage = encodeURIComponent(messageText);

        console.log('Mensaje preparado, longitud:', whatsappMessage.length);

        // Ocultar formulario y mostrar animación de éxito
        requestForm.style.display = 'none';
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';

        console.log('Mostrando mensaje de éxito');

        // Construir URL de WhatsApp
        const whatsappURL = 'https://wa.me/18437034758?text=' + whatsappMessage;
        
        console.log('URL de WhatsApp construida');

        // Redirigir a WhatsApp - Método mejorado compatible con iOS
        setTimeout(function() {
            console.log('Intentando abrir WhatsApp');
            
            // Para iOS: usar location.href es más confiable
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            
            if (isIOS) {
                console.log('Dispositivo iOS detectado, usando location.href');
                window.location.href = whatsappURL;
            } else {
                // Para otros dispositivos, intentar window.open primero
                const whatsappWindow = window.open(whatsappURL, '_blank');
                
                // Si falla, usar location.href como backup
                if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
                    console.log('window.open falló, usando location.href');
                    window.location.href = whatsappURL;
                } else {
                    console.log('WhatsApp abierto con window.open');
                }
            }
            
            // Cerrar modal después de 3 segundos adicionales
            setTimeout(function() {
                console.log('Cerrando modal');
                closeRequestModal();
            }, 3000);
        }, 1500); // Reducido a 1.5 segundos para mejor UX

        return false;
    });
}

// ============================================
// FORMULARIO DE TESTIMONIOS
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
        const messageText = 
            '*NUEVO TESTIMONIO*\n\n' +
            '*Nombre:* ' + formData.nombre + '\n' +
            '*Ubicación:* ' + formData.ubicacion + '\n' +
            '*Calificación:* ' + '⭐'.repeat(parseInt(formData.calificacion)) + '\n' +
            '*Testimonio:* ' + formData.testimonio + '\n' +
            '*Email:* ' + formData.email + '\n' +
            '*Fecha:* ' + formData.fecha;

        const whatsappMessage = encodeURIComponent(messageText);

        // Mostrar mensaje de éxito
        showMessage('¡Gracias por tu testimonio! Lo revisaremos y publicaremos pronto. Te hemos redirigido a WhatsApp para confirmar.', 'success');
        
        // Limpiar formulario
        testimonialForm.reset();

        // Abrir WhatsApp después de 2 segundos
        setTimeout(function() {
            const whatsappURL = 'https://wa.me/18437034758?text=' + whatsappMessage;
            window.location.href = whatsappURL;
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
        setTimeout(function() {
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
    if (addressInput) {
        addressInput.parentNode.style.position = 'relative';
        addressInput.parentNode.appendChild(suggestionsContainer);
    }
}

// Buscar direcciones mientras el usuario escribe
const addressInput = document.getElementById('address');
if (addressInput) {
    addressInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        
        // Solo buscar si hay al menos 5 caracteres
        if (query.length < 5) {
            hideSuggestions();
            return;
        }
        
        // Limpiar timeout anterior
        clearTimeout(autocompleteTimeout);
        
        // Esperar 500ms después de que el usuario deje de escribir
        autocompleteTimeout = setTimeout(function() {
            searchAddresses(query);
        }, 500);
    });
}

// Buscar direcciones en OpenStreetMap
function searchAddresses(query) {
    // Agregar "USA" a la búsqueda para mejores resultados
    const searchQuery = encodeURIComponent(query + ', USA');
    const url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + searchQuery + '&countrycodes=us&addressdetails=1&limit=5';
    
    fetch(url, {
        headers: {
            'User-Agent': 'TramitesDMV/1.0' // Requerido por Nominatim
        }
    })
    .then(function(response) {
        if (!response.ok) throw new Error('Error en la búsqueda');
        return response.json();
    })
    .then(function(results) {
        displaySuggestions(results);
    })
    .catch(function(error) {
        console.error('Error al buscar direcciones:', error);
        hideSuggestions();
    });
}

// Mostrar sugerencias
function displaySuggestions(results) {
    createSuggestionsContainer();
    
    if (results.length === 0) {
        hideSuggestions();
        return;
    }
    
    suggestionsContainer.innerHTML = '';
    
    results.forEach(function(result) {
        const suggestion = document.createElement('div');
        suggestion.className = 'address-suggestion-item';
        
        // Formatear dirección
        const address = result.address;
        const street = ((address.house_number || '') + ' ' + (address.road || '')).trim();
        const city = address.city || address.town || address.village || '';
        const state = address.state || '';
        const zipcode = address.postcode || '';
        
        // Mostrar la dirección completa
        suggestion.innerHTML = '<div class="suggestion-main">' + result.display_name + '</div>';
        
        // Al hacer clic en una sugerencia
        suggestion.addEventListener('click', function() {
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
    [document.getElementById('city'), document.getElementById('state'), document.getElementById('zipcode')].forEach(function(field) {
        if (field.value) {
            field.style.borderColor = '#00a91c';
            field.style.backgroundColor = '#f0fff4';
            setTimeout(function() {
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
    if (addressInput && e.target !== addressInput && suggestionsContainer && !suggestionsContainer.contains(e.target)) {
        hideSuggestions();
    }
});

// Prevenir que Enter envíe el formulario al seleccionar sugerencia
if (addressInput) {
    addressInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && suggestionsContainer && suggestionsContainer.style.display === 'block') {
            e.preventDefault();
        }
    });
}