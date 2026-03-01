// ============================================
// EMAILJS - CONFIGURA TUS DATOS AQUÍ
// ============================================
const EMAILJS_CONFIG = {
    publicKey: 'z6-wlU764P-CF53Nb',
    serviceId: 'service_4ga03vh',
    templateId: 'template_6y443vt'
};

// Inicializar EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    }
})();

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// FAQ ACCORDION
// ============================================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const arrow = this.querySelector('span:last-child');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrow.textContent = '▼';
        } else {
            document.querySelectorAll('.faq-answer').forEach(ans => { ans.style.display = 'none'; });
            document.querySelectorAll('.faq-question span:last-child').forEach(arr => { arr.textContent = '▼'; });
            answer.style.display = 'block';
            arrow.textContent = '▲';
        }
    });
});

// ============================================
// EXAMEN DMV CALIFORNIA - PREGUNTAS OFICIALES
// ============================================
const DMV_QUESTIONS = [
    {
        question: "¿Cuál es el límite de velocidad en una zona escolar cuando los niños están presentes?",
        options: ["25 mph", "15 mph", "20 mph"],
        correct: 1,
        explanation: "En California, el límite de velocidad en zonas escolares cuando los niños están presentes es de 25 mph, a menos que se indique lo contrario."
    },
    {
        question: "¿Qué debe hacer si ve una luz roja parpadeando en un semáforo?",
        options: ["Acelerar para cruzar rápido", "Detenerse completamente y ceder el paso", "Reducir la velocidad y continuar con cuidado"],
        correct: 1,
        explanation: "Una luz roja parpadeante significa PARE. Debe detenerse completamente, luego avanzar cuando sea seguro hacerlo."
    },
    {
        question: "¿A qué distancia debe activar sus luces delanteras antes del amanecer o después del atardecer?",
        options: ["30 minutos antes/después", "1 hora antes/después", "Durante la lluvia solamente"],
        correct: 0,
        explanation: "En California, debe encender las luces 30 minutos antes del amanecer y 30 minutos después del atardecer."
    },
    {
        question: "¿Cuál es el límite legal de alcohol en la sangre (BAC) para conductores adultos en California?",
        options: ["0.10%", "0.08%", "0.05%"],
        correct: 1,
        explanation: "El límite legal de BAC en California para conductores de 21 años o más es de 0.08%. Para menores de 21 es 0.01%."
    },
    {
        question: "Cuando se aproxima a una intersección con una señal de ALTO (STOP), usted debe:",
        options: ["Reducir velocidad si no hay tráfico", "Detenerse completamente detrás de la línea", "Ceder el paso sin detenerse"],
        correct: 1,
        explanation: "Una señal de STOP requiere parada COMPLETA detrás de la línea blanca, independientemente del tráfico."
    },
    {
        question: "¿Cuál es la distancia mínima que debe mantener detrás de un vehículo de emergencia con luces encendidas?",
        options: ["100 pies", "300 pies", "500 pies"],
        correct: 1,
        explanation: "En California debe mantener al menos 300 pies de distancia detrás de vehículos de emergencia con sirena y/o luces activadas."
    },
    {
        question: "Al girar a la izquierda en una intersección de doble vía, ¿en qué carril debe completar el giro?",
        options: ["En cualquier carril disponible", "En el carril más cercano a la derecha", "En el carril más cercano a la línea central"],
        correct: 2,
        explanation: "Al girar a la izquierda, debe completar el giro en el carril más cercano a la línea central (carril izquierdo del tráfico que se mueve en su dirección)."
    },
    {
        question: "¿Qué significa una línea amarilla continua doble en el centro de la carretera?",
        options: ["Puede cruzarla para adelantar si es seguro", "Prohibido cruzarla para adelantar en ambas direcciones", "Puede cruzarla solo para girar a la izquierda"],
        correct: 1,
        explanation: "Dos líneas amarillas continuas significan que está prohibido adelantar en ambas direcciones. No debe cruzarlas."
    },
    {
        question: "¿Cuándo es legal usar el carril de alta ocupación (HOV/Carpool)?",
        options: ["Siempre, a cualquier hora", "Solo con 2 o más personas en el vehículo durante horas pico", "Solo los fines de semana"],
        correct: 1,
        explanation: "Los carriles HOV generalmente requieren 2 o más ocupantes durante las horas pico. Verifique las señales para los requisitos específicos."
    },
    {
        question: "¿Cuál es el límite de velocidad máximo en autopistas de California cuando no hay señal?",
        options: ["55 mph", "65 mph", "70 mph"],
        correct: 1,
        explanation: "El límite de velocidad máximo en autopistas de California es 65 mph, a menos que se indique otro límite con señales."
    },
    {
        question: "Cuando se aproxima a un cruce ferroviario con barreras bajadas, usted debe:",
        options: ["Cruzar rápidamente antes que llegue el tren", "Detenerse y esperar hasta que las barreras suban", "Rodear las barreras si puede ver que no viene el tren"],
        correct: 1,
        explanation: "Nunca cruce ni rodee las barreras de un cruce ferroviario. Deténgase y espere hasta que las barreras suban completamente."
    },
    {
        question: "¿Qué debe hacer cuando un vehículo de emergencia se acerca con sirena encendida?",
        options: ["Acelerar para salir de su camino", "Orillarse a la derecha y detenerse", "Mantener su velocidad actual"],
        correct: 1,
        explanation: "Debe orillarse lo más a la derecha posible y detenerse hasta que el vehículo de emergencia haya pasado completamente."
    },
    {
        question: "¿Cuándo es obligatorio usar las luces de emergencia (intermitentes)?",
        options: ["Cuando conduce muy despacio", "Cuando su vehículo está parado y representa un peligro", "Cuando llueve muy fuerte"],
        correct: 1,
        explanation: "Las luces de emergencia se usan cuando el vehículo está parado en la carretera y puede representar un peligro para otros conductores."
    },
    {
        question: "¿Cuál es el límite de velocidad en un callejón sin salida residencial en California?",
        options: ["15 mph", "25 mph", "20 mph"],
        correct: 0,
        explanation: "El límite de velocidad en callejones es de 15 mph en California."
    },
    {
        question: "¿Cuándo puede pasar a otro vehículo por la derecha?",
        options: ["Nunca está permitido", "Cuando hay dos o más carriles en la misma dirección", "Solo en autopistas"],
        correct: 1,
        explanation: "Puede adelantar por la derecha cuando haya dos o más carriles de tráfico en la misma dirección y sea seguro hacerlo."
    },
    {
        question: "Si sus frenos fallan mientras conduce, ¿qué debe hacer primero?",
        options: ["Apagar el motor inmediatamente", "Bombear el freno repetidamente y reducir velocidades", "Girar el volante bruscamente"],
        correct: 1,
        explanation: "Primero intente bombear los frenos para recuperar presión. Luego use el freno de mano gradualmente y busque una salida segura."
    },
    {
        question: "¿Con qué distancia de anticipación debe activar la señal de giro?",
        options: ["50 pies antes", "100 pies antes", "200 pies antes"],
        correct: 1,
        explanation: "En California debe activar la señal al menos 100 pies antes de girar o cambiar de carril en áreas urbanas."
    },
    {
        question: "¿Qué significa una señal de ceda el paso (YIELD)?",
        options: ["Detenerse completamente siempre", "Reducir velocidad y ceder el paso al tráfico que tiene prioridad", "Continuar sin detenerse"],
        correct: 1,
        explanation: "YIELD significa reducir la velocidad, verificar el tráfico y ceder el paso. Solo debe detenerse completamente si es necesario para evitar colisiones."
    },
    {
        question: "¿A qué edad mínima puede un menor de California obtener un permiso de aprendizaje?",
        options: ["16 años", "15 años y medio", "17 años"],
        correct: 1,
        explanation: "En California, los menores pueden obtener un permiso de aprendizaje (instruction permit) a los 15 años y medio."
    },
    {
        question: "Cuando dos vehículos llegan al mismo tiempo a una intersección sin señales de tráfico, ¿quién tiene el derecho de paso?",
        options: ["El vehículo que viene del norte", "El vehículo a la derecha", "El vehículo más grande"],
        correct: 1,
        explanation: "Cuando dos vehículos llegan al mismo tiempo a una intersección sin señales, el vehículo que está a la derecha tiene el derecho de paso."
    }
];

// Variables del examen
let currentQuestion = 0;
let correctAnswers = 0;
let userAnswers = [];
let examQuestions = [];

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startExam() {
    currentQuestion = 0;
    correctAnswers = 0;
    userAnswers = [];
    examQuestions = shuffleArray(DMV_QUESTIONS).slice(0, 20);

    document.getElementById('exam-start').style.display = 'none';
    document.getElementById('exam-results').style.display = 'none';
    document.getElementById('exam-active').style.display = 'block';

    showQuestion();
}

function showQuestion() {
    const q = examQuestions[currentQuestion];
    const total = examQuestions.length;

    document.getElementById('question-counter').textContent = `Pregunta ${currentQuestion + 1} de ${total}`;
    document.getElementById('exam-score-live').textContent = `✓ ${correctAnswers} correctas`;
    document.getElementById('question-number-badge').textContent = currentQuestion + 1;
    document.getElementById('exam-progress-fill').style.width = `${(currentQuestion / total) * 100}%`;

    document.getElementById('question-text').textContent = q.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C'];

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letters[index]}</span>${option}`;
        btn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });

    document.getElementById('answer-feedback').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';

    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = currentQuestion < examQuestions.length - 1 ? 'Siguiente Pregunta →' : 'Ver Resultados →';
}

function selectAnswer(selectedIndex) {
    const q = examQuestions[currentQuestion];
    const options = document.querySelectorAll('.option-btn');
    const feedback = document.getElementById('answer-feedback');
    const isCorrect = selectedIndex === q.correct;

    if (isCorrect) correctAnswers++;
    userAnswers.push({ selected: selectedIndex, correct: q.correct, isCorrect });

    options.forEach(btn => btn.disabled = true);

    options.forEach((btn, index) => {
        if (index === q.correct) {
            btn.classList.add(isCorrect ? 'correct' : 'show-correct');
        }
        if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    feedback.className = 'answer-feedback ' + (isCorrect ? 'correct-feedback' : 'incorrect-feedback');
    feedback.innerHTML = isCorrect
        ? `✅ <strong>¡Correcto!</strong> ${q.explanation}`
        : `❌ <strong>Incorrecto.</strong> ${q.explanation}`;
    feedback.style.display = 'block';

    document.getElementById('exam-score-live').textContent = `✓ ${correctAnswers} correctas`;
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= examQuestions.length) {
        showResults();
    } else {
        showQuestion();
    }
}

function showResults() {
    document.getElementById('exam-active').style.display = 'none';
    document.getElementById('exam-results').style.display = 'block';

    const total = examQuestions.length;
    const percentage = Math.round((correctAnswers / total) * 100);
    const passed = correctAnswers >= 15;

    document.getElementById('results-icon').textContent = passed ? '🎉' : '📚';
    document.getElementById('results-title').textContent = passed ? '¡Felicitaciones! Aprobaste' : 'Necesitas Practicar Más';
    document.getElementById('results-score').textContent = `${correctAnswers}/${total} (${percentage}%)`;
    document.getElementById('results-message').textContent = passed
        ? `¡Excelente! Obtuviste ${correctAnswers} de ${total} respuestas correctas. Estás listo para el examen oficial del DMV.`
        : `Obtuviste ${correctAnswers} de ${total} respuestas correctas. Necesitas al menos 15 (75%) para aprobar el examen oficial. ¡Sigue practicando!`;

    const breakdown = document.getElementById('results-breakdown');
    const wrongAnswers = userAnswers.filter(a => !a.isCorrect).length;
    breakdown.innerHTML = `
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; text-align:center;">
            <div style="background:white; padding:15px; border-radius:8px; border:2px solid #00a91c;">
                <div style="font-size:28px; font-weight:800; color:#00a91c;">${correctAnswers}</div>
                <div style="font-size:13px; color:#5b616b;">Correctas</div>
            </div>
            <div style="background:white; padding:15px; border-radius:8px; border:2px solid #dc3545;">
                <div style="font-size:28px; font-weight:800; color:#dc3545;">${wrongAnswers}</div>
                <div style="font-size:13px; color:#5b616b;">Incorrectas</div>
            </div>
            <div style="background:white; padding:15px; border-radius:8px; border:2px solid ${passed ? '#00a91c' : '#fdb81e'};">
                <div style="font-size:28px; font-weight:800; color:${passed ? '#00a91c' : '#fdb81e'};">${percentage}%</div>
                <div style="font-size:13px; color:#5b616b;">${passed ? 'APROBADO' : 'REPROBADO'}</div>
            </div>
        </div>
    `;
}

function restartExam() {
    document.getElementById('exam-results').style.display = 'none';
    document.getElementById('exam-start').style.display = 'block';
}

// ============================================
// MODAL Y SISTEMA DE CITAS - MULTI PASO
// ============================================

let currentServicePrice = '';
let selectedDate = null;
let selectedTime = null;
let currentCalendarDate = new Date();

function openRequestModal(serviceName, price) {
    currentServicePrice = price;
    const modal = document.getElementById('requestModal');
    document.getElementById('modalTitle').textContent = `Solicitud: ${serviceName}`;
    document.getElementById('serviceType').value = serviceName;

    goToStep1();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => renderCalendar(), 100);
}

function closeRequestModal() {
    document.getElementById('requestModal').classList.remove('active');
    document.body.style.overflow = '';

    document.getElementById('requestForm').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('requestForm').reset();
    selectedDate = null;
    selectedTime = null;
    goToStep1();
}

document.getElementById('requestModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeRequestModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeRequestModal();
});

function goToStep1() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
}

function goToStep2() {
    const fullName = document.getElementById('fullName').value.trim();
    const clientEmail = document.getElementById('clientEmail').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zipcode = document.getElementById('zipcode').value.trim();

    if (!fullName || !clientEmail || !phone || !address || !city || !state || !zipcode) {
        alert('Por favor complete todos los campos requeridos.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
        alert('Por favor ingrese un correo electrónico válido.');
        return;
    }

    const zipcodeClean = zipcode.replace(/\D/g, '');
    if (zipcodeClean.length !== 5) {
        alert('El código postal debe tener 5 dígitos.');
        return;
    }

    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('step3').style.display = 'none';

    renderCalendar();
}

function goToStep3() {
    if (!selectedDate || !selectedTime) {
        alert('Por favor seleccione una fecha y hora para su cita.');
        return;
    }

    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';

    const serviceType = document.getElementById('serviceType').value;
    const fullName = document.getElementById('fullName').value.trim();
    const clientEmail = document.getElementById('clientEmail').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();

    const dateStr = selectedDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('confirmation-summary').innerHTML = `
        <div class="confirmation-row">
            <span class="confirmation-label">🛠️ Servicio</span>
            <span class="confirmation-value">${serviceType}</span>
        </div>
        <div class="confirmation-row">
            <span class="confirmation-label">💲 Precio</span>
            <span class="confirmation-value">${currentServicePrice} (desde)</span>
        </div>
        <div class="confirmation-row">
            <span class="confirmation-label">👤 Cliente</span>
            <span class="confirmation-value">${fullName}</span>
        </div>
        <div class="confirmation-row">
            <span class="confirmation-label">📧 Correo</span>
            <span class="confirmation-value">${clientEmail}</span>
        </div>
        <div class="confirmation-row">
            <span class="confirmation-label">📱 Teléfono</span>
            <span class="confirmation-value">${phone}</span>
        </div>
        <div class="confirmation-row">
            <span class="confirmation-label">📍 Ciudad</span>
            <span class="confirmation-value">${city}, ${state}</span>
        </div>
        <div class="confirmation-row">
            <span class="confirmation-label">📅 Fecha</span>
            <span class="confirmation-value" style="text-transform: capitalize;">${dateStr}</span>
        </div>
        <div class="confirmation-row">
            <span class="confirmation-label">🕐 Hora</span>
            <span class="confirmation-value">${selectedTime}</span>
        </div>
    `;
}

// ============================================
// CALENDARIO DE CITAS
// ============================================

const TIME_SLOTS = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
];

const MONTHS_ES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DAYS_ES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

function renderCalendar() {
    const container = document.getElementById('calendar-container');
    if (!container) return;

    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = `
        <div class="calendar-header">
            <button class="cal-nav-btn" onclick="changeMonth(-1)">‹</button>
            <h4>${MONTHS_ES[month]} ${year}</h4>
            <button class="cal-nav-btn" onclick="changeMonth(1)">›</button>
        </div>
        <div class="calendar-weekdays">
            ${DAYS_ES.map(d => `<span>${d}</span>`).join('')}
        </div>
        <div class="calendar-days">
    `;

    for (let i = 0; i < firstDay; i++) {
        html += `<div class="cal-day empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        date.setHours(0, 0, 0, 0);
        const dayOfWeek = date.getDay();

        const isPast = date < today;
        const isSunday = dayOfWeek === 0;
        const isToday = date.getTime() === today.getTime();
        const isSelected = selectedDate && date.getTime() === selectedDate.getTime();

        let classes = 'cal-day';
        if (isPast || isSunday) classes += ' past disabled';
        if (isToday && !isPast) classes += ' today';
        if (isSelected) classes += ' selected';

        const clickable = !isPast && !isSunday;
        html += `<div class="${classes}" ${clickable ? `onclick="selectDate(${year}, ${month}, ${day})"` : ''}>${day}</div>`;
    }

    html += `</div>`;
    container.innerHTML = html;
}

function changeMonth(direction) {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + direction);
    renderCalendar();
}

function selectDate(year, month, day) {
    selectedDate = new Date(year, month, day);
    selectedTime = null;

    renderCalendar();

    const timeSlotsSection = document.getElementById('time-slots-section');
    timeSlotsSection.style.display = 'block';

    const timeSlotsContainer = document.getElementById('time-slots');
    timeSlotsContainer.innerHTML = TIME_SLOTS.map(slot => `
        <div class="time-slot" onclick="selectTime('${slot}')">${slot}</div>
    `).join('');

    document.getElementById('selected-appointment-preview').style.display = 'none';
    document.getElementById('step2-next').disabled = true;
}

function selectTime(time) {
    selectedTime = time;

    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.toggle('selected', slot.textContent === time);
    });

    const dateStr = selectedDate.toLocaleDateString('es-ES', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });

    document.getElementById('appointment-summary').textContent = `${dateStr} a las ${time}`;
    document.getElementById('selected-appointment-preview').style.display = 'flex';
    document.getElementById('step2-next').disabled = false;
}

// ============================================
// ENVÍO DEL FORMULARIO - SOLO CORREO (SIN WHATSAPP)
// ============================================

const requestForm = document.getElementById('requestForm');
if (requestForm) {
    requestForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        const serviceType = document.getElementById('serviceType').value;
        const fullName = document.getElementById('fullName').value.trim();
        const clientEmail = document.getElementById('clientEmail').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const address2 = document.getElementById('address2').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim();
        const zipcode = document.getElementById('zipcode').value.trim();
        const comments = document.getElementById('comments').value.trim();

        const dateStr = selectedDate ? selectedDate.toLocaleDateString('es-ES', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        }) : 'No seleccionada';

        const confirmationNumber = 'DMV-' + Date.now().toString().slice(-6);

        const templateParams = {
            confirmation_number: confirmationNumber,
            service_type: serviceType,
            service_price: currentServicePrice,
            client_name: fullName,
            client_email: clientEmail,
            client_phone: phone,
            client_address: address + (address2 ? ', ' + address2 : ''),
            client_city: city + ', ' + state + ' ' + zipcode,
            appointment_date: dateStr,
            appointment_time: selectedTime || 'No seleccionada',
            comments: comments || 'Ninguno',
            submit_date: new Date().toLocaleString('es-ES'),
            to_email: 'tramites.dmv.express@gmail.com'
        };

        // Enviar correo via EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
                .then(function() {
                    // Éxito - mostrar mensaje de confirmación
                    requestForm.style.display = 'none';
                    const successMessage = document.getElementById('successMessage');
                    successMessage.style.display = 'block';
                    document.getElementById('success-details').innerHTML = `
                        <strong>Confirmación #${confirmationNumber}</strong><br>
                        Cita: ${dateStr} a las ${selectedTime}<br>
                        Recibirá un correo en: ${clientEmail}
                    `;
                    // Cerrar modal después de 4 segundos
                    setTimeout(() => closeRequestModal(), 4000);
                })
                .catch(function(error) {
                    console.error('Error EmailJS:', error);
                    submitBtn.disabled = false;
                    submitBtn.textContent = '✅ Confirmar Solicitud';
                    alert('Hubo un error al enviar su solicitud. Por favor intente de nuevo o contáctenos por WhatsApp.');
                });
        } else {
            // EmailJS no cargó
            submitBtn.disabled = false;
            submitBtn.textContent = '✅ Confirmar Solicitud';
            alert('Error de conexión. Por favor contáctenos directamente por WhatsApp al +1 (843) 703-4758.');
        }
    });
}

// ============================================
// FORMULARIO DE TESTIMONIOS - GUARDA EN PÁGINA
// ============================================

// Clave secreta: Ctrl+Shift+D para activar modo admin
const ADMIN_DELETE_KEY = 'admin123';

// Cargar y mostrar testimonios guardados al iniciar la página
document.addEventListener('DOMContentLoaded', function() {
    renderSavedTestimonials();
});

// Ctrl+Shift+D para borrar testimonios (invisible para visitantes)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        const key = prompt('Clave:');
        if (key === ADMIN_DELETE_KEY) {
            saveTestimonials([]);
            renderSavedTestimonials();
        }
    }
});

function getSavedTestimonials() {
    try {
        return JSON.parse(localStorage.getItem('dmv_testimonials') || '[]');
    } catch {
        return [];
    }
}

function saveTestimonials(testimonials) {
    localStorage.setItem('dmv_testimonials', JSON.stringify(testimonials));
}

function renderSavedTestimonials() {
    const testimonials = getSavedTestimonials();

    const grid = document.querySelector('.testimonials-grid');
    if (!grid) return;

    // Eliminar testimonios dinámicos anteriores para no duplicar
    grid.querySelectorAll('.testimonial-dynamic').forEach(el => el.remove());

    testimonials.forEach(t => {
        const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
        const div = document.createElement('div');
        div.className = 'testimonial testimonial-dynamic';
        div.dataset.id = t.id;
        div.innerHTML =
            '<div class="testimonial-header">' +
                '<div class="testimonial-stars" style="color: var(--accent-gold);">' + stars + '</div>' +
                '<span class="verified-badge">✓ Verificado</span>' +
            '</div>' +
            '<p>"' + t.text + '"</p>' +
            '<div class="testimonial-author">— ' + t.name + '</div>' +
            '<div class="testimonial-location">' + t.location + '</div>';
        grid.appendChild(div);
    });
}

function deleteTestimonial(id) {
    let testimonials = getSavedTestimonials();
    testimonials = testimonials.filter(t => t.id !== id);
    saveTestimonials(testimonials);

    // Quitar de la página sin recargar
    const el = document.querySelector(`.testimonial-dynamic[data-id="${id}"]`);
    if (el) {
        el.style.transition = 'opacity 0.4s';
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 400);
    }
}

const testimonialForm = document.getElementById('testimonialForm');
const formMessage = document.getElementById('formMessage');

if (testimonialForm) {
    testimonialForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const location = document.getElementById('location').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked');
        const testimonial = document.getElementById('testimonial').value.trim();
        const consent = document.getElementById('consent').checked;

        if (!name || !location || !rating || !testimonial || !consent) {
            showMessage('Por favor completa todos los campos requeridos.', 'error');
            return;
        }

        if (testimonial.length < 50) {
            showMessage('El testimonio debe tener al menos 50 caracteres.', 'error');
            return;
        }

        // Guardar en localStorage
        const testimonials = getSavedTestimonials();
        const newTestimonial = {
            id: Date.now().toString(),
            name,
            location,
            rating: parseInt(rating.value),
            text: testimonial,
            date: new Date().toLocaleString('es-ES')
        };
        testimonials.push(newTestimonial);
        saveTestimonials(testimonials);

        // Mostrar inmediatamente en la página
        renderSavedTestimonials();

        showMessage('¡Gracias por tu testimonio! Ya está visible en la página.', 'success');
        testimonialForm.reset();
    });
}

function showMessage(message, type) {
    if (!formMessage) return;
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (type === 'error') {
        setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
    }
}

// ============================================
// AUTOCOMPLETADO DE DIRECCIONES (OpenStreetMap)
// ============================================

let autocompleteTimeout;
let suggestionsContainer;

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

const addressInput = document.getElementById('address');
if (addressInput) {
    addressInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        if (query.length < 5) { hideSuggestions(); return; }

        clearTimeout(autocompleteTimeout);
        autocompleteTimeout = setTimeout(() => searchAddresses(query), 500);
    });
}

function searchAddresses(query) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ', California, USA')}&countrycodes=us&addressdetails=1&limit=5`;

    fetch(url, { headers: { 'User-Agent': 'TramitesDMV/1.0' } })
        .then(r => r.json())
        .then(results => displaySuggestions(results))
        .catch(() => hideSuggestions());
}

function displaySuggestions(results) {
    createSuggestionsContainer();
    if (!results.length) { hideSuggestions(); return; }

    suggestionsContainer.innerHTML = '';
    results.forEach(result => {
        const item = document.createElement('div');
        item.className = 'address-suggestion-item';
        const addr = result.address;
        const street = ((addr.house_number || '') + ' ' + (addr.road || '')).trim();
        const city = addr.city || addr.town || addr.village || '';
        const state = addr.state || '';
        const zip = addr.postcode || '';

        item.innerHTML = `<div class="suggestion-main">${result.display_name}</div>`;
        item.addEventListener('click', () => {
            fillFormWithAddress(street || result.display_name.split(',')[0], city, state, zip);
            hideSuggestions();
        });
        suggestionsContainer.appendChild(item);
    });

    suggestionsContainer.style.display = 'block';
}

function fillFormWithAddress(street, city, state, zip) {
    document.getElementById('address').value = street;
    document.getElementById('city').value = city;
    document.getElementById('state').value = state || 'CA';
    document.getElementById('zipcode').value = zip;

    [document.getElementById('city'), document.getElementById('state'), document.getElementById('zipcode')].forEach(field => {
        if (field && field.value) {
            field.style.borderColor = '#00a91c';
            setTimeout(() => { field.style.borderColor = ''; }, 2000);
        }
    });
}

function hideSuggestions() {
    if (suggestionsContainer) suggestionsContainer.style.display = 'none';
}

document.addEventListener('click', function(e) {
    const addr = document.getElementById('address');
    if (addr && e.target !== addr && suggestionsContainer && !suggestionsContainer.contains(e.target)) {
        hideSuggestions();
    }
});

if (addressInput) {
    addressInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && suggestionsContainer && suggestionsContainer.style.display === 'block') {
            e.preventDefault();
        }
    });
}