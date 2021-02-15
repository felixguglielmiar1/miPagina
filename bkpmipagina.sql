-- --------------------------------------------------------
-- Host:                         remotemysql.com
-- Versión del servidor:         8.0.13-4 - Percona Server (GPL), Release '4', Revision 'f0a32b8'
-- SO del servidor:              debian-linux-gnu
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para 9A58XK5UhN
CREATE DATABASE IF NOT EXISTS `9A58XK5UhN` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `9A58XK5UhN`;

-- Volcando estructura para tabla 9A58XK5UhN.additionals
CREATE TABLE IF NOT EXISTS `additionals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcionG` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `link_u` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `descripcionU` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `linkC` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `descripcionC` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla 9A58XK5UhN.additionals: ~0 rows (aproximadamente)
DELETE FROM `additionals`;
/*!40000 ALTER TABLE `additionals` DISABLE KEYS */;
INSERT INTO `additionals` (`id`, `descripcionG`, `link_u`, `descripcionU`, `linkC`, `descripcionC`, `createdAt`, `updatedAt`) VALUES
	(11, 'De donde vengo', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126504.46170179243!2d-72.29180248952741!3d7.761756571083874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666ca49582d39f%3A0xe35525b271c7ef85!2sSan%20Crist%C3%B3bal%2C%20T%C3%A1chira%2C%20Venezuela!5e0!3m2!1ses!2sar!4v1612211584514!5m2!1ses!2sar" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', 'San Cristobal, capital de estado Táchira en Venezuela, ciudad de la cordialidad', '<iframe width="200" height="200" src="https://www.youtube.com/embed/ewxF9Jfo7tk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'la feria de San Sebastián, un evento cultural por el cual es  conocida la ciudad', '2021-01-31 01:44:45', '2021-02-13 18:06:42'),
	(12, 'Donde me encuentro', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.037967695604!2d-58.38904618059821!3d-34.60392148734779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf8f55dcf5%3A0xd073935716337382!2sSan%20Nicol%C3%A1s%2C%20CABA!5e0!3m2!1ses!2sar!4v1612304297626!5m2!1ses!2sar" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', 'Actualmente resido en la Ciudad Autónoma de Buenos Aires', '', '', '2021-02-02 22:20:17', '2021-02-02 22:20:17');
/*!40000 ALTER TABLE `additionals` ENABLE KEYS */;

-- Volcando estructura para tabla 9A58XK5UhN.config
CREATE TABLE IF NOT EXISTS `config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seccion` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `IDhtml` varchar(40) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `valor_cfg` varchar(1000) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla 9A58XK5UhN.config: ~38 rows (aproximadamente)
DELETE FROM `config`;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` (`id`, `seccion`, `IDhtml`, `valor_cfg`) VALUES
	(1, 'home', 'TP-1', 'Felix Alejandro Guglielmi Parra'),
	(2, 'home', 'TP-2', 'Ingeniería Industrial,  Marketing Digital, Desarrollo Web, Aplicaciones y Análisis de Datos'),
	(3, 'home', 'TP-3', 'Explora mi pagina Web'),
	(4, 'home', 'TP-4', 'Conoce un poco de mi perfil profesional'),
	(5, 'home', 'TP-5', 'capaz de analizar elementos endógenos y exógenos de un sistema mediante la utilización de técnicas cualitativas, cuantitativas o tecnológicas, brindando soluciones a necesidades u oportunidades, buscando siempre la eficiencia y eficacia. Me especializo en el razonamiento lógico matemático con un enfoque técnico estadístico'),
	(6, 'home', 'TP-6', 'Acerca de mi'),
	(7, 'home', 'TP-7', 'Perseverante y con muchas ganas de aprender, ¿quiere saber más? pulsa qui.'),
	(8, 'home', 'TP-8', 'Estudios Realizados'),
	(9, 'home', 'TP-9', 'Aquí encontraras estudios universitarios, cursos y certificaciones.'),
	(10, 'home', 'TP-10', 'Experiencia laboral'),
	(11, 'home', 'TP-11', 'Ejecutivo de cuentas, supervisor, analista,  pulsa aquí para saber mas. '),
	(12, 'home', 'TP-12', 'Contactame'),
	(13, 'home', 'TP-13', '¿Tienes alguna sugerencia o comentario? pulsa aquí!'),
	(14, 'home', 'TP-14', 'mis Intereses profesionales actualmente se centran en desarrollarme en la industria IT, ambientes desafiantes, innovadores, que incentiven el aprendizaje constante.'),
	(15, 'home', 'TP-15', ' '),
	(16, 'home', 'TP-16', 'sígueme en Linkedin'),
	(17, 'home', 'TP-17', 'https://www.instagram.com/felixguglielmi/'),
	(18, 'home', 'TP-18', 'https://twitter.com/felixguglielmi'),
	(19, 'home', 'TP-19', 'https://www.linkedin.com/in/felixalejandroguglielmiparra/'),
	(20, 'home', 'TP-20', 'https://www.facebook.com/felix.a.parra.94/'),
	(21, 'exlaboral', 'TP-21', 'Experiencia Laboral'),
	(22, 'exlaboral', 'TP-22', 'aquí encontraras mi historial laboral'),
	(23, 'estudiosRe', 'TP-23', 'Estudios Realizados'),
	(24, 'estudiosRe', 'TP-24', 'Aquí podrás detallar mi formación académica en diversas áreas  '),
	(25, 'aboutme', 'TP-25', 'Persistente, entusiasta, orientado a resultados, extrovertido, con mucha facilidad para trabajar en equipo y excelentes habilidades de comunicación efectiva. Estas son algunas de  mis soft skills, en esta sección sabrás un poco mas de mi, de las herramientas que manejo y algunos testimonios de personas que trabajaron o se formaron conmigo. '),
	(26, 'aboutme', 'TP-26', 'Algunas herramientas utilizadas'),
	(34, 'aboutme-h', 'TP-34', 'javascript'),
	(35, 'aboutme-h', 'TP-35', 'sql'),
	(36, 'aboutme-h', 'TP-36', 'git'),
	(37, 'aboutme-h', 'TP-37', 'node'),
	(38, 'aboutme-h', 'TP-38', 'visual basic'),
	(39, 'aboutme-h', 'TP-39', 'excel'),
	(40, 'aboutme-h', 'TP-40', 'mysql'),
	(41, 'aboutme-h', 'TP-41', 'java'),
	(42, 'aboutme-h', 'TP-42', 'crystal report'),
	(43, 'aboutme-h', 'TP-43', 'html'),
	(44, 'aboutme-h', 'TP-44', 'css'),
	(45, 'aboutme-h', 'TP-45', 'bootstrap'),
	(46, 'contacto', 'TP-46', 'los datos introducidos en este formulario solo se usaran para fines informativos, o dado el caso de que requiera una respuesta.');
/*!40000 ALTER TABLE `config` ENABLE KEYS */;

-- Volcando estructura para tabla 9A58XK5UhN.EstudiosRealizados
CREATE TABLE IF NOT EXISTS `EstudiosRealizados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_institucion` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `titulo_optenido` varchar(80) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `perfil_egresado` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `disiplina` varchar(50) COLLATE utf8_unicode_ci DEFAULT '0',
  `link_w` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `link_u` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `periodo_curso` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '0',
  `link_c` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `M_certificado` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla 9A58XK5UhN.EstudiosRealizados: ~9 rows (aproximadamente)
DELETE FROM `EstudiosRealizados`;
/*!40000 ALTER TABLE `EstudiosRealizados` DISABLE KEYS */;
INSERT INTO `EstudiosRealizados` (`id`, `nombre_institucion`, `titulo_optenido`, `perfil_egresado`, `disiplina`, `link_w`, `link_u`, `periodo_curso`, `link_c`, `M_certificado`) VALUES
	(26, 'Universidad Nacional Experimental del Táchira', 'Ingeniero Industrial', 'El Ingeniero Industrial de la Universidad Nacional Experimental del Táchira está en capacidad de:\r\n- Concebir, diseñar, planificar, ejecutar, mejorar y evaluar sistemas de producción de bienes y servicios, originados por la interacción de los distintos factores de producción.\r\n- Dominar conocimientos sobre sistemas de producción y servicio que le permitan: identificar, analizar, diseñar, implantar y evaluar procesos y proyectos para generar respuestas reales a las necesidades del entorno.\r\n- Investigar, acopiar, generar, usar, y difundir conocimientos y tecnologías.\r\n- Crear e implantar nuevos paradigmas que aseguren la sustentabilidad de los sistemas diseñados.\r\n- Tener conciencia de la búsqueda necesaria y permanente del conocimiento a través del desarrollo de procesos cognitivos – afectivos como parte esencial de su formación individual- social.\r\n- Comunicar efectivamente y participar armoniosamente en equipos de trabajo logrando de esta manera relaciones interpersonales exitosas.', 'Ingeniería Industrial', 'http://unet.edu.ve/', 'https://es-la.facebook.com/UNEToficial/', '09/2011-11/2017', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3952.9653157648218!2d-72.20219138602138!3d7.793497094383638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1611428255582!5m2!1ses!2sar" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', 1),
	(27, 'Ministerio de Desarrollo Productivo', 'Analista del Conocimiento Mención Programador', 'El analista del conocimiento mención programador esta en capacidad de: 1. Construir código de programación de acuerdo a especificaciones. 2.Interpretar especificaciones de diseño que le permitan construir el código en el contexto del desarrollo de software en el que participa. 3.Dimensionar su trabajo en el contexto del proyecto de desarrollo de software. 4.Verificar el código desarrollado. 5.Depurar estructuras lógicas o códigos de programas. 6.Utilizar estructuras de datos vinculadas con las aplicaciones desarrolladas o a desarrollar. 7.Elaborar documentación técnica de acuerdo con los requerimientos funcionales y técnicos recibidos. 8.Integrar un equipo en el contexto de un Proyecto de Desarrollo de Software.', 'Desarrollo de software', 'https://www.argentina.gob.ar/educacion/secretaria-politicas-universitarias/programa-111mil', 'https://www.facebook.com/pg/111Mil/posts/', '09/2019', '', 1),
	(28, 'Gobierno de la Ciudad de Buenos Aires', 'Desarrollador Web Full Stack', 'la persona certificada dominara lenguajes/herramientas como HTML, CSS, JAVASCRIP, BOOTSRAP,  GITHUB, NODE JS. Además de dominar las nociones básicas de metodologías como SCRUM, y sistema de gestión de bases de datos relacional como MYSQL. Estará en capacidad de construir desde una API hasta un sitio web.', 'Desarrollo de Software', 'https://www.buenosaires.gob.ar/educacion/codo-codo', 'https://www.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires/', '08/2020-12/2020', '', 0),
	(29, 'LinkedIn Learning ⋅ Course Certificate', 'Domina el Marketing Digital', 'El egresado maneja los principios en Marketing en motores de búsqueda (SEM), Optimización para motores de\r\nbúsqueda (SEO), Google Analytics, Google Ads, Análisis de marketing,\r\nAnálisis web, Marketing digital, Marketing de correo electrónico', 'Marketing Digital', 'https://www.linkedin.com/learning/paths/conviertete-en-experto-en-marketing-digital?trk=flagship-lil_details_certification', 'https://www.facebook.com/linkedinlearning', '07/2020-09/2020', '', 1),
	(30, 'Google Ads', 'Certificación en Display de Google Ads', 'EL certificado en Display, domina los aspectos básicos de la creación y optimización de campañas de display de Google eficaces.', 'Marketing Digital', 'https://skillshop.exceedlms.com/student/path/18071-certificacion-en-display-de-google-ads', 'https://www.facebook.com/GoogleAdsES', '06/2020', '', 1),
	(31, 'Google Ads', 'Certificacion en video ', 'la persona certificada en video de Google ads,  domina aspectos básicos que hacen falta para llegar a la audiencia mediante la publicidad en vídeo de Google y YouTube.', 'Marketing Digital', 'https://skillshop.exceedlms.com/student/path/18229-certificacion-en-video-de-google-ads', 'https://www.facebook.com/GoogleAdsES', '07/2020', '', 1),
	(32, 'Google Ads', 'Certificación en Campañas de Búsqueda de Google Ads', 'La persona certificada domina los aspectos básicos de la creación y personalización de campañas de búsqueda efectivas en Google Ads.', 'Marketing Digital', 'https://skillshop.exceedlms.com/student/path/18169-certificacion-sobre-las-campanas-de-busqueda-de-google-ads', 'https://www.facebook.com/GoogleAdsES', '06/2020', '', 1),
	(33, 'Google Ads', 'Certificación de Publicidad en Búsqueda Google Ads', 'La persona certificada domina los conceptos básicos de la creación y personalización de campañas de Búsqueda de Google eficaces.', 'Marketing Digital', 'https://skillshop.exceedlms.com/student/path/18152-certificacion-de-publicidad-en-busqueda-de-google-ads', 'https://www.facebook.com/GoogleAdsES', '06/2020', '', 1),
	(34, 'Google Ads', 'Certificación en Shopping', ' Los usuarios que obtengan la certificación dejarán claro que saben cómo optimizar las campañas de Shopping para aumentar al máximo el alcance y las conversiones.', 'Marketing Digital', 'https://skillshop.exceedlms.com/student/path/18304-certificacion-en-shopping', 'https://www.facebook.com/GoogleAdsES', '06/2020', '', 1);
/*!40000 ALTER TABLE `EstudiosRealizados` ENABLE KEYS */;

-- Volcando estructura para tabla 9A58XK5UhN.ExLaboral
CREATE TABLE IF NOT EXISTS `ExLaboral` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_emp` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `cargo_des` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `tareas_real` varchar(2000) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `link_web` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `link_ubi` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla 9A58XK5UhN.ExLaboral: ~4 rows (aproximadamente)
DELETE FROM `ExLaboral`;
/*!40000 ALTER TABLE `ExLaboral` DISABLE KEYS */;
INSERT INTO `ExLaboral` (`id`, `nombre_emp`, `cargo_des`, `tareas_real`, `link_web`, `link_ubi`) VALUES
	(34, 'Megadata Sistemas', 'Ejecutivo de Cuentas 11/2019-act', '- 40% de la jornada laboral, responsable comercial en la ejecución de ventas enfocadas en valor B2B, búsqueda de partners a nivel regional entre otros. Entre las tareas realizadas se destacan:\r\n1. diseño, ejecución y mejoramiento continuo de campañas de email-marketing.\r\n2. diseño, puesta en marcha, seguimiento y mejora continua de templete de proceso comercial (desde acercar propuesta de valor a clientes o partners, hasta el cierre de las mismas)\r\n3. diseño, ejecución y mejora continua de campañas de búsqueda en google-ads.\r\n4. benchmarking a competidores.\r\n- El 60% de la jornada laboral brindar soluciones técnicas a clientes de la organización referentes a los productos de la empresa, las tareas destacadas son las siguientes:\r\n1. soporte de sistema, empleando Visual Basic 6.0.\r\n2. modificaciones o requerimientos de bases de datos empleando SQL server, Excel, entre otras.\r\n3. visualización de reportes en general, empleando Crystal Reports.', 'http://www.mega-data.com.ar/', 'https://goo.gl/maps/Xp774B1QSLDwuzPQ6'),
	(35, 'Relax Time', 'Supervisor de Ventas', '1. Reclutamiento, selección y capacitación de personal para el equipo de ventas.\r\n2. Establecer y monitorear alcance de objetivos de ventas.\r\n3. Diseño y puesta en marcha de estrategias comerciales dinámicas para el logro de objetivos.\r\n4. Participar activamente en cierres de ventas.', 'https://www.facebook.com/relaxtimeok/', 'https://goo.gl/maps/VNQRJj7Xvg682EcX6'),
	(36, 'IMP Assist', 'Lider de Ventas 11/2018-03/2019', '1. capacitar comercialmente a vendedores de nuevo ingreso.\r\n2. Establecer estrategias para lograr objetivos de ventas a corto y mediano plazo.\r\n3. Monitorear cumplimiento de objetivos por parte de vendedores.\r\n4. Alcanzar objetivos de ventas impuestos por la dirección.', 'https://web.impassist.com.ar/', 'https://goo.gl/maps/sEuzdmNMSuvYa7uw8'),
	(38, 'Homedics', 'Vendedor-Encargado 06/2018-11/2018', '1 .Prospección y fidelización de clientes.\r\n2. Control de stock.\r\n3 participar en cierres de ventas en frio, consultivos.\r\n4. control y conciliación de caja.\r\n5. Capacitar personal de nuevo ingreso comercialmente.', 'https://homedics.com.ar/', 'https://goo.gl/maps/Asj82nXUEwLrfHcw7'),
	(39, 'Grupo Distribuciones Principal', 'Analista de Ventas 12/2017-05/2018', '1. Crear objetivos de ventas con técnicas de pronósticos y aspectos cualitativos.\r\n2. Diseño de reportes de alcance de ventas.\r\n3. Prestar soporte en requerimientos de las distintas arias de la organización.\r\n4. Gestión de nuevos y actuales clientes.\r\n5. Diseñar estrategias en conjunto con supervisores de ventas.', 'https://www.facebook.com/grupodistribuciones.principal', 'https://goo.gl/maps/UF1KzcFTqAqA9pWf9'),
	(40, 'UNET', 'Preparador 02/2016-11/2017', 'Diseñar y impartir clases de la asignatura Investigación de operaciones 2 (cadenas de Marcov, teoría de colas, simulación de procesos) .', 'http://unet.edu.ve/', 'https://goo.gl/maps/FNGC5h76W84QcMyAA');
/*!40000 ALTER TABLE `ExLaboral` ENABLE KEYS */;

-- Volcando estructura para tabla 9A58XK5UhN.referencias
CREATE TABLE IF NOT EXISTS `referencias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_ref` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `active` int(2) DEFAULT '0',
  `cargo_ref` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `refencia` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `Link_ref` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla 9A58XK5UhN.referencias: ~1 rows (aproximadamente)
DELETE FROM `referencias`;
/*!40000 ALTER TABLE `referencias` DISABLE KEYS */;
INSERT INTO `referencias` (`id`, `nombre_ref`, `active`, `cargo_ref`, `refencia`, `Link_ref`) VALUES
	(3, 'Emilio Jose Vera Parra', 1, 'QA Analyst - Software testing', 'Excelente profesional, muy buena gestion y trabajo en equipo, se notaba su conocimiento en toda el area, fue un gusto haber aprendido nuevas tecnicas y metodologias con el.', 'https://www.linkedin.com/in/emiliojoseveraparra/'),
	(9, 'Frailiany Parada', 0, 'Seguimiento de Ventas', 'Trabajador proactivo, con gran capacidad analítica, posee fluidez comunicacional y orientación al logro', 'https://www.linkedin.com/in/frailiany-parada-ramirez/');
/*!40000 ALTER TABLE `referencias` ENABLE KEYS */;

-- Volcando estructura para tabla 9A58XK5UhN.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL,
  `email` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla 9A58XK5UhN.usuario: ~0 rows (aproximadamente)
DELETE FROM `usuario`;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`id`, `email`, `password`) VALUES
	(1, ' ', ' ');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
