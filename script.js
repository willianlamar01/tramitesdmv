// ============================================
// EMAILJS - CONFIGURA TUS DATOS AQUÍ
// ============================================
const EMAILJS_CONFIG = {
    publicKey: 'z6-wlU764P-CF53Nb',
    serviceId: 'service_4ga03vh',
    templateId: 'template_7z598dp'
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
    // ── LEYES DE TRÁNSITO ──
    {
        question: "¿Cuál es el límite de velocidad en una zona escolar cuando los niños están presentes?",
        options: ["25 mph", "15 mph", "20 mph"],
        correct: 1,
        explanation: "En California el límite en zonas escolares con niños presentes es 25 mph, a menos que se indique lo contrario."
    },
    {
        question: "¿Cuál es el límite de velocidad máximo en autopistas de California cuando no hay señal?",
        options: ["55 mph", "65 mph", "70 mph"],
        correct: 1,
        explanation: "El límite máximo en autopistas de California es 65 mph, salvo señal contraria."
    },
    {
        question: "¿Cuál es el límite de velocidad en un callejón residencial en California?",
        options: ["15 mph", "25 mph", "20 mph"],
        correct: 0,
        explanation: "El límite de velocidad en callejones es 15 mph en California."
    },
    {
        question: "¿Cuál es el límite de velocidad en una zona de construcción activa cuando hay trabajadores presentes?",
        options: ["25 mph", "35 mph", "El indicado por señales"],
        correct: 2,
        explanation: "En zonas de construcción con trabajadores presentes, debe respetar el límite indicado por las señales. Las multas se duplican."
    },
    {
        question: "¿Cuál es el límite de velocidad básico en calles residenciales sin señal en California?",
        options: ["35 mph", "25 mph", "30 mph"],
        correct: 1,
        explanation: "En calles residenciales sin señal el límite básico es 25 mph en California."
    },
    {
        question: "¿Cuál es el límite legal de alcohol en la sangre (BAC) para conductores adultos en California?",
        options: ["0.10%", "0.08%", "0.05%"],
        correct: 1,
        explanation: "El BAC legal para conductores de 21+ años es 0.08%. Para menores de 21 es 0.01%."
    },
    {
        question: "¿Cuál es el límite de BAC para conductores menores de 21 años en California?",
        options: ["0.08%", "0.04%", "0.01%"],
        correct: 2,
        explanation: "California tiene política de tolerancia cero: el límite para menores de 21 es 0.01% de BAC."
    },
    {
        question: "¿Con qué anticipación debe activar la señal de giro en áreas urbanas?",
        options: ["50 pies antes", "100 pies antes", "200 pies antes"],
        correct: 1,
        explanation: "En California debe activar la señal al menos 100 pies antes de girar o cambiar de carril en áreas urbanas."
    },
    {
        question: "¿A qué distancia debe encender las luces antes del anochecer o después del amanecer?",
        options: ["30 minutos antes/después", "1 hora antes/después", "Solo cuando llueve"],
        correct: 0,
        explanation: "Debe encender las luces 30 minutos antes del amanecer y 30 minutos después del atardecer."
    },
    {
        question: "¿A qué distancia mínima debe mantener detrás de un vehículo de emergencia con luces encendidas?",
        options: ["100 pies", "300 pies", "500 pies"],
        correct: 1,
        explanation: "Debe mantener al menos 300 pies de distancia detrás de vehículos de emergencia con sirena y/o luces activadas."
    },
    // ── SEÑALES DE TRÁNSITO ──
    {
        question: "¿Qué debe hacer si ve una luz roja parpadeando en un semáforo?",
        options: ["Acelerar para cruzar rápido", "Detenerse completamente y ceder el paso", "Reducir velocidad y continuar"],
        correct: 1,
        explanation: "Una luz roja parpadeante significa PARE. Deténgase completamente y avance cuando sea seguro."
    },
    {
        question: "¿Qué indica una luz amarilla parpadeante en un semáforo?",
        options: ["Detenerse completamente", "Proceder con precaución reduciendo velocidad", "Acelerar antes de que cambie a rojo"],
        correct: 1,
        explanation: "Una luz amarilla parpadeante indica precaución. Reduzca la velocidad y proceda con cuidado."
    },
    {
        question: "Cuando se aproxima a una señal de ALTO (STOP), usted debe:",
        options: ["Reducir velocidad si no hay tráfico", "Detenerse completamente detrás de la línea", "Ceder el paso sin detenerse"],
        correct: 1,
        explanation: "Una señal de STOP requiere parada COMPLETA detrás de la línea blanca, independientemente del tráfico."
    },
    {
        question: "¿Qué significa una señal de CEDA EL PASO (YIELD)?",
        options: ["Detenerse completamente siempre", "Reducir velocidad y ceder el paso al tráfico prioritario", "Continuar sin detenerse"],
        correct: 1,
        explanation: "YIELD significa reducir velocidad y ceder el paso. Solo deténgase completamente si es necesario para evitar colisiones."
    },
    {
        question: "¿Qué significa una línea amarilla continua doble en el centro de la carretera?",
        options: ["Puede cruzarla para adelantar si es seguro", "Prohibido cruzarla para adelantar en ambas direcciones", "Puede cruzarla solo para girar a la izquierda"],
        correct: 1,
        explanation: "Dos líneas amarillas continuas prohíben adelantar en ambas direcciones. No debe cruzarlas."
    },
    {
        question: "¿Qué indica una línea blanca continua en la carretera?",
        options: ["Puede cambiar de carril libremente", "No debe cruzarla o hacerlo con mucha precaución", "Separa el tráfico en sentidos opuestos"],
        correct: 1,
        explanation: "Una línea blanca continua indica que no debe cambiar de carril o cruzarla excepto en casos de emergencia."
    },
    {
        question: "Una señal con forma de octágono (8 lados) de color rojo siempre significa:",
        options: ["Ceda el paso", "ALTO — deténgase completamente", "Zona escolar"],
        correct: 1,
        explanation: "La forma octagonal roja es exclusiva de la señal de STOP. Siempre debe detenerse completamente."
    },
    {
        question: "Una señal triangular invertida de color rojo y blanco significa:",
        options: ["STOP", "YIELD — ceda el paso", "Zona de peligro"],
        correct: 1,
        explanation: "El triángulo invertido rojo y blanco es la señal de YIELD (ceda el paso)."
    },
    {
        question: "¿Qué significa una señal de color naranja en la carretera?",
        options: ["Zona escolar", "Zona de construcción o trabajo en la vía", "Peligro permanente"],
        correct: 1,
        explanation: "Las señales naranjas indican zonas de construcción o trabajo en la vía. Las multas se duplican en estas zonas."
    },
    {
        question: "¿Qué significa una señal pentagonal (5 lados) amarilla con una figura de niños?",
        options: ["Zona de construcción", "Zona escolar — reducir velocidad", "Parque infantil cercano"],
        correct: 1,
        explanation: "La señal pentagonal amarilla con niños indica zona escolar. Debe reducir la velocidad a 25 mph cuando hay niños presentes."
    },
    // ── DERECHO DE PASO ──
    {
        question: "Cuando dos vehículos llegan al mismo tiempo a una intersección sin señales, ¿quién tiene el derecho de paso?",
        options: ["El vehículo que viene del norte", "El vehículo a la derecha", "El vehículo más grande"],
        correct: 1,
        explanation: "Cuando dos vehículos llegan al mismo tiempo sin señales, el vehículo a la derecha tiene el derecho de paso."
    },
    {
        question: "Al girar a la izquierda en una intersección, ¿a quién debe ceder el paso?",
        options: ["Solo a peatones", "Al tráfico que viene de frente y a los peatones", "A nadie si el semáforo está verde"],
        correct: 1,
        explanation: "Al girar a la izquierda debe ceder el paso al tráfico que viene de frente y a todos los peatones."
    },
    {
        question: "¿Quién tiene siempre el derecho de paso en un cruce peatonal marcado?",
        options: ["Los vehículos si el semáforo está verde", "Los peatones siempre", "Quien llegue primero"],
        correct: 1,
        explanation: "Los peatones tienen siempre prioridad en cruces peatonales marcados. Debe detenerse y esperar que crucen."
    },
    {
        question: "Al incorporarse a una autopista por un carril de aceleración, usted debe:",
        options: ["Tener el derecho de paso automáticamente", "Ceder el paso al tráfico que ya está en la autopista", "Detenerse y esperar un espacio"],
        correct: 1,
        explanation: "Al incorporarse a una autopista debe ceder el paso al tráfico que ya circula en ella y ajustar su velocidad."
    },
    {
        question: "¿Quién tiene el derecho de paso en una rotonda (glorieta)?",
        options: ["El vehículo que entra a la rotonda", "El vehículo que ya circula dentro de la rotonda", "El vehículo más grande"],
        correct: 1,
        explanation: "Los vehículos que ya circulan dentro de la rotonda tienen el derecho de paso. Los que entran deben ceder."
    },
    // ── MANIOBRAS Y TÉCNICAS ──
    {
        question: "Al girar a la izquierda en una intersección, ¿en qué carril debe completar el giro?",
        options: ["En cualquier carril disponible", "En el carril más cercano a la derecha", "En el carril más cercano a la línea central"],
        correct: 2,
        explanation: "Al girar a la izquierda, complete el giro en el carril más cercano a la línea central (carril izquierdo)."
    },
    {
        question: "¿Cuándo puede pasar a otro vehículo por la derecha?",
        options: ["Nunca está permitido", "Cuando hay dos o más carriles en la misma dirección", "Solo en autopistas"],
        correct: 1,
        explanation: "Puede adelantar por la derecha cuando haya dos o más carriles de tráfico en la misma dirección y sea seguro hacerlo."
    },
    {
        question: "¿Cuándo es legal usar el carril de alta ocupación (HOV/Carpool)?",
        options: ["Siempre, a cualquier hora", "Con 2 o más personas durante horas indicadas por señales", "Solo los fines de semana"],
        correct: 1,
        explanation: "Los carriles HOV requieren 2+ ocupantes durante las horas pico indicadas por señales."
    },
    {
        question: "¿Cuándo es obligatorio usar las luces de emergencia (hazard lights)?",
        options: ["Cuando conduce muy despacio", "Cuando el vehículo está parado y representa un peligro", "Cuando llueve muy fuerte"],
        correct: 1,
        explanation: "Las luces de emergencia se usan cuando el vehículo está parado en la carretera y puede ser un peligro para otros."
    },
    {
        question: "Si sus frenos fallan mientras conduce, ¿qué debe hacer primero?",
        options: ["Apagar el motor inmediatamente", "Bombear el freno y reducir velocidades", "Girar el volante bruscamente"],
        correct: 1,
        explanation: "Primero bombee los frenos para recuperar presión, luego use el freno de mano gradualmente."
    },
    {
        question: "¿Cuándo debe ceder el paso a los vehículos de emergencia con sirena encendida?",
        options: ["Solo cuando bloquean su carril", "Siempre, orillándose a la derecha y deteniéndose", "Solo en intersecciones"],
        correct: 1,
        explanation: "Siempre debe orillarse lo más a la derecha posible y detenerse hasta que el vehículo de emergencia pase."
    },
    {
        question: "Cuando se aproxima a un cruce ferroviario con barreras bajadas, usted debe:",
        options: ["Cruzar rápidamente antes del tren", "Detenerse y esperar hasta que las barreras suban completamente", "Rodear las barreras si no ve el tren"],
        correct: 1,
        explanation: "Nunca cruce ni rodee las barreras. Deténgase y espere hasta que suban completamente."
    },
    {
        question: "¿A qué distancia antes de un cruce ferroviario debe detenerse si las luces están parpadeando?",
        options: ["10 pies", "15 pies", "50 pies"],
        correct: 1,
        explanation: "Debe detenerse a no menos de 15 pies ni más de 50 pies del cruce ferroviario cuando las luces estén parpadeando."
    },
    // ── SEGURIDAD VIAL ──
    {
        question: "¿En qué situación es obligatorio el uso del cinturón de seguridad en California?",
        options: ["Solo en autopistas", "Solo el conductor", "Todos los ocupantes del vehículo siempre"],
        correct: 2,
        explanation: "En California todos los ocupantes deben usar cinturón de seguridad en todo momento."
    },
    {
        question: "¿A qué edad los niños deben usar asiento de seguridad (car seat) en California?",
        options: ["Hasta los 6 años o 60 libras", "Hasta los 8 años o 4 pies 9 pulgadas de altura", "Hasta los 5 años solamente"],
        correct: 1,
        explanation: "En California los niños deben usar asiento de seguridad apropiado hasta los 8 años O hasta medir 4 pies 9 pulgadas."
    },
    {
        question: "¿Qué debe hacer si se queda dormido mientras conduce?",
        options: ["Bajar la ventana y continuar", "Salirse de la carretera de forma segura y descansar", "Tomar café y continuar manejando"],
        correct: 1,
        explanation: "Si siente somnolencia debe salirse de la carretera de forma segura, estacionarse y descansar. Es una de las causas principales de accidentes."
    },
    {
        question: "¿Está permitido usar el teléfono celular mientras conduce en California?",
        options: ["Sí, si es una llamada corta", "No, a menos que sea completamente manos libres (hands-free)", "Sí, solo en semáforos"],
        correct: 1,
        explanation: "En California solo se permite usar el teléfono con sistema completamente manos libres (hands-free). Texting está prohibido."
    },
    {
        question: "¿Qué debe hacer si su vehículo se queda sin control en una curva (skid)?",
        options: ["Frenar fuerte inmediatamente", "Girar el volante en dirección contraria al derrape", "Girar el volante en la misma dirección del derrape y soltar el acelerador"],
        correct: 2,
        explanation: "En un derrape, gire suavemente el volante en la misma dirección del derrape y suelte el acelerador para recuperar el control."
    },
    {
        question: "¿Cuál es la distancia segura de seguimiento recomendada (following distance) en condiciones normales?",
        options: ["1 segundo", "2 segundos", "3 segundos"],
        correct: 2,
        explanation: "Se recomienda mantener al menos 3 segundos de distancia con el vehículo de adelante en condiciones normales."
    },
    {
        question: "¿Qué debe hacer si su vehículo se queda sin frenos en una pendiente descendente?",
        options: ["Apagar el motor inmediatamente", "Buscar una salida de emergencia o zona de frenado", "Subir la velocidad para llegar más rápido al plano"],
        correct: 1,
        explanation: "Debe buscar una salida de emergencia, zona de frenado (runaway truck ramp) o dirigirse hacia pendiente ascendente."
    },
    {
        question: "¿Cuándo es legal hacer un giro en U (U-turn) en California?",
        options: ["Siempre que no haya tráfico", "Solo donde no esté prohibido por señales y sea seguro", "Nunca en carreteras de dos carriles"],
        correct: 1,
        explanation: "Los giros en U son legales donde no estén prohibidos por señales y cuando pueda hacerse con seguridad sin interferir el tráfico."
    },
    // ── LICENCIAS Y REQUISITOS ──
    {
        question: "¿A qué edad mínima puede un menor obtener un permiso de aprendizaje en California?",
        options: ["16 años", "15 años y medio", "17 años"],
        correct: 1,
        explanation: "En California los menores pueden obtener un permiso de aprendizaje a los 15 años y medio."
    },
    {
        question: "¿Cuántas horas de práctica supervisada requiere un menor antes de obtener la licencia en California?",
        options: ["25 horas (5 nocturnas)", "50 horas (10 nocturnas)", "30 horas (10 nocturnas)"],
        correct: 1,
        explanation: "California requiere 50 horas de práctica supervisada, incluyendo 10 horas de conducción nocturna."
    },
    {
        question: "¿Cuántos días tiene para notificar al DMV si vende o transfiere su vehículo?",
        options: ["10 días", "5 días", "30 días"],
        correct: 1,
        explanation: "Debe notificar al DMV dentro de 5 días de vender o transferir su vehículo para evitar responsabilidad."
    },
    {
        question: "¿Qué ocurre si maneja sin seguro en California?",
        options: ["Solo recibe una advertencia", "Multa y posible suspensión de licencia y registro del vehículo", "Nada si no hay accidente"],
        correct: 1,
        explanation: "Manejar sin seguro en California resulta en multas, suspensión de licencia y del registro del vehículo."
    },
    {
        question: "¿Cuántos puntos en su récord de manejo pueden resultar en la suspensión de su licencia en California?",
        options: ["4 puntos en 12 meses", "4 puntos en 12 meses, 6 en 24 meses u 8 en 36 meses", "10 puntos en cualquier período"],
        correct: 1,
        explanation: "Su licencia puede ser suspendida con 4+ puntos en 12 meses, 6+ en 24 meses u 8+ en 36 meses."
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
    examQuestions = shuffleArray(DMV_QUESTIONS).slice(0, 45);

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
    const passed = correctAnswers >= 38;

    document.getElementById('results-icon').textContent = passed ? '🎉' : '📚';
    document.getElementById('results-title').textContent = passed ? '¡Felicitaciones! Aprobaste' : 'Necesitas Practicar Más';
    document.getElementById('results-score').textContent = `${correctAnswers}/${total} (${percentage}%)`;
    document.getElementById('results-message').textContent = passed
        ? `¡Excelente! Obtuviste ${correctAnswers} de ${total} respuestas correctas. Estás listo para el examen oficial del DMV. ¡Excelente preparación!`
        : `Obtuviste ${correctAnswers} de ${total} respuestas correctas. Necesitas al menos 38 respuestas correctas (83%) para aprobar el examen oficial. ¡Sigue practicando!`;

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