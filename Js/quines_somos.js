/* INTERACCION DEL MENU HAMBURGESA */
const hamburgerMenu = document.querySelector('.hamburger input'); 
const optionHamburgerMenu = document.querySelector('.nav-buttons-container'); 

hamburgerMenu.addEventListener('click', () => {
    optionHamburgerMenu.classList.toggle('inactive');
    console.log(optionHamburgerMenu.classList);
});
/** FIN DEL MENU HAMBURGUESA */


/* SECCION DE LOS SEVICIOS EN QUIENES SOMOS */

const services = [
    `<h3>¿Qué es?</h3>
    <p>La <strong>Consultoría en Business Intelligence</strong> permite a las empresas transformar sus datos en información estratégica mediante <strong>visualización, análisis y automatización</strong> de reportes.</p>
    <p><strong>Beneficios:</strong></p>
    <ul>
        <li>Definición de estrategias BI adaptadas a cada empresa.</li>
        <li>Automatización de reportes e implementación de dashboards.</li>
        <li>Integración de datos desde múltiples fuentes en una sola plataforma.</li>
        <li>Decisiones basadas en datos en tiempo real.</li>
    </ul>
    <p><strong>Preguntas Frecuentes:</strong></p>
    <ul>
        <li><strong>¿Necesito conocimientos técnicos?</strong> No, nuestro equipo se encarga del desarrollo y capacitación para que tu equipo pueda aprovechar al máximo las herramientas.</li>
        <li><strong>¿Con qué herramientas trabajan?</strong> Power BI, Tableau y Google Data Studio. Priorizando soluciones open source para reducir costos.</li>
        <li><strong>¿Cuánto tiempo toma implementar una solución de BI?</strong> Depende del nivel de madurez de los datos en tu empresa, pero en promedio entre <strong>3 a 8 semanas</strong>.</li>
    </ul>`,
    `<h3>¿Qué es?</h3>
    <p>La <strong>Inteligencia Artificial (IA)</strong> permite automatizar procesos, optimizar operaciones y generar análisis predictivos avanzados.</p>
    <p><strong>Beneficios:</strong></p>
    <ul>
        <li>Automatización de tareas y reducción de costos.</li>
        <li>Mejora en la experiencia del cliente.</li>
        <li>Análisis predictivo con aprendizaje automático.</li>
    </ul>
    <p><strong>Preguntas Frecuentes:</strong></p>
    <ul>
        <li><strong>¿Necesito conocimientos previos?</strong> No, adaptamos las soluciones a tu empresa.</li>
        <li><strong>¿Se integra con mis sistemas actuales?</strong> Sí, trabajamos con CRM, ERP y más.</li>
    </ul>`,
    `<h3>¿Qué es?</h3>
    <p>Los <strong>Agentes IA</strong> son sistemas autónomos que pueden interactuar con clientes y sistemas empresariales, automatizando tareas específicas, como responder preguntas, gestionar datos y automatizar procesos.</p>
    <ul>
        <li><strong>Atención al cliente 24/7</strong> mediante asistentes virtuales.</li>
        <li>Automatización de <strong>respuestas y procesos</strong>.</li>
        <li>Análisis de <strong>grandes volúmenes de datos</strong> en tiempo real.</li>
        <li><strong>Mejora en la productividad</strong> reduciendo carga operativa.</li>
    </ul>
    <p><strong>Preguntas Frecuentes:</strong></p>
    <ul>
        <li><strong>¿Qué diferencia a los Agentes IA de un chatbot tradicional?</strong> Los Agentes IA pueden <strong>aprender, tomar decisiones y ejecutar tareas automatizadas</strong> con mayor precisión.</li>
        <li><strong>¿Se pueden personalizar los Agentes IA para mi empresa?</strong> Sí, desarrollamos agentes ajustados a las necesidades específicas de cada cliente.</li>
    </ul>`,
    `<h3>¿Qué es?</h3>
    <p>La <strong>automatización de datos</strong> optimiza el flujo de información en la empresa, eliminando tareas repetitivas y reduciendo errores.</p>
    <p><strong>Beneficios:</strong></p>
    <ul>
        <li>Mayor eficiencia en procesos.</li>
        <li>Reducción de errores manuales.</li>
        <li>Disminución de costos operativos.</li>
        <li>Mayor seguridad y control sobre los datos.</li>
    </ul>
    <p><strong>Preguntas Frecuentes:</strong></p>
    <ul>
        <li><strong>¿Es complejo de implementar?</strong> No, nuestras soluciones son modulares y adaptables.</li>
        <li><strong>¿Requiere cambios en la infraestructura?</strong> No necesariamente, se adapta a tu entorno.</li>
    </ul>`,
    `<h3>¿Qué es?</h3>
    <p>Ofrecemos <strong>formación empresarial</strong> en análisis de datos, BI e inteligencia artificial para potenciar las habilidades de los equipos.</p>
    <p><strong>Beneficios:</strong></p>
    <ul>
        <li>Desarrollo de habilidades analíticas.</li>
        <li>Capacitación en herramientas BI.</li>
        <li>Formación en análisis avanzado.</li>
    </ul>
    <p><strong>Preguntas Frecuentes:</strong></p>
    <ul>
        <li><strong>¿Los cursos son personalizables?</strong> Sí, según las necesidades de cada empresa.</li>
        <li><strong>¿Cuál es la duración?</strong> Depende del nivel y modalidad, entre 4 y 12 semanas.</li>
    </ul>`,
    `<h3>¿Qué es?</h3>
    <p>Convertimos documentos y procesos en <strong>soluciones digitales optimizadas</strong> para mejorar la eficiencia empresarial.</p>
    <p><strong>Beneficios:</strong></p>
    <ul>
        <li>Acceso rápido y organizado a la información.</li>
        <li>Reducción de costos en almacenamiento.</li>
        <li>Mayor eficiencia en la gestión de datos.</li>
    </ul>
    <p><strong>Preguntas Frecuentes:</strong></p>
    <ul>
        <li><strong>¿Es seguro digitalizar documentos?</strong> Sí, implementamos encriptación y acceso controlado.</li>
        <li><strong>¿Cuánto tiempo toma el proceso?</strong> Depende del volumen de datos, pero suele ser rápido.</li>
    </ul>`,
    `<h3>¿Qué es?</h3>
    <p>Aplicamos estrategias de <strong>marketing basado en datos</strong> para segmentar audiencias y optimizar campañas.</p>
    <p><strong>Beneficios:</strong></p>
    <ul>
        <li>Mayor impacto en la audiencia correcta.</li>
        <li>Reducción de costos en publicidad.</li>
        <li>Decisiones estratégicas basadas en métricas.</li>
    </ul>
    <p><strong>Preguntas Frecuentes:</strong></p>
    <ul>
        <li><strong>¿Cómo optimizan las campañas?</strong> A través de análisis predictivo y segmentación avanzada.</li>
        <li><strong>¿Trabajan con redes sociales?</strong> Sí, optimizamos campañas en todas las plataformas digitales.</li>
    </ul>`
];
function showService(index) {
    document.getElementById('service-info').innerHTML = services[index];
}
