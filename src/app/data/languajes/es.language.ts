import { LanguajeInterface, ExperienceInterface } from "../../interfaces/languaje.interface";

export const LangConstans: LanguajeInterface = {
    CONST_HERO_NAME:            "David Amaya"                                    ,
    CONST_HERO_HELLO:           "Hola"                                           ,
    CONST_HERO_I_AM:            "Soy "                                           ,
    CONST_HERO_POSITION:        "Desarrollador JAVA y WEB."         ,
    CONST_HERO_PRESENTATION:    `Ingeniero Mecatrónico con experiencia en desarrollo 
                                backend y frontend, sólido dominio de lenguaje Java, SQL y 
                                tecnologías web (JavaScript, HTML y CSS), con conocimientos en 
                                PHP, Python, C y C++. He trabajado con metodologías ágiles SCRUM 
                                y el patrón MVC en sistemas ERP. Además, tengo conocimientos en 
                                frameworks como Angular, React y Django, automatización con VBA, 
                                desarrollo de aplicaciones móviles con Java, y programación de 
                                microcontroladores y sistemas embebidos como Arduino y Raspberry Pi. 
                                Mi formación y experiencia incluye el manejo de herramientas como 
                                Matlab y diseño CAD, además de experiencia en análisis de procesos 
                                productivos y de fabricación.`  ,

    CONST_HEADER_HOME:          "Inicio"                                         ,
    CONST_HEADER_ABOUT:         "Sobre"                                          ,
    CONST_HEADER_WORK_EXP:      "Experiencia"                                    ,
    CONST_HEADER_PORTFOLIO:     "Portafolio"                                     ,
    CONST_HEADER_CONTACT:       "Contacto"                                       ,

    CONST_CONTACT_AGE:          "Edad"                                           ,
    CONST_CONTACT_ADRESS:       "Ubicación"                                      ,
    CONST_CONTACT_EMAIL:        "Email"                                          ,
    CONST_CONTACT_PHONE:        "Teléfono"                                       ,
    CONST_CONTACT_JOBTITLE:     "Desarrollador"                                  ,

    EXPERIENCE: [
        {
            id: 1,
            nombre: "Aktek",
            puesto: "Desarrollador Java",
            descripcion:   `Desarrollo de sistemas ERP para instituciones educativas utilizando Java, JSP,
                            y tecnologías web como JavaScript, CSS, y HTML. Implementando metodologías 
                            ágiles como SCRUM y el patrón MVC, optimizando procesos y automatizando 
                            flujos de trabajo.`,
            fechaInicio: new Date('2022-01-03'),
            fechaFinal: new Date('2000-00-00'),
            contacto: "12345678"
        },
        {
            id: 2,
            nombre: "IGT.SAS",
            puesto: "Residente de Planeación ",
            descripcion:    `Diseñador CAD de nuevos productos y sus planos de fabricación, además de 
                            levantar planos sobre muestra. responsable del cálculo de costos y cantidades 
                            necesarias para la fabricación, asegurando la precisión en los 
                            procesos de producción` ,
            fechaInicio: new Date('2021-11-26'),
            fechaFinal: new Date('2022-03-01'),
            contacto: "12345678"
        },
        {
            id: 3,
            nombre: "HB Sadelec",
            puesto: "Analista de Producción",
            descripcion:    `Gestion de sistemas de información para el control de producción, analizando 
                            indicadores clave del proceso productivo para garantizar el cumplimiento de 
                            metas y cronogramas. Desarrollo de macros VBA para la automatización de tareas 
                            e informes, optimizando el flujo de trabajo y mejorando la eficiencia en la recolección, 
                            registro y presentación de datos.`  ,
            fechaInicio: new Date('2019-05-22'),
            fechaFinal: new Date('2021-11-26'),
            contacto: "12345678"
        },
        {
            id: 4,
            nombre: "CL Ingeniería Comercial",
            puesto: "Operario de Producción",
            descripcion: "Operario de maquinaria de corte y doblado de chapa metálica, asegurando precisión en el proceso de fabricación.",
            fechaInicio: new Date('2017-05-16'),
            fechaFinal: new Date('2019-02-16'),
            contacto: "12345678"
        },
        {
            id: 5,
            nombre: "MEC.SAS",
            puesto: "",
            descripcion:    `Realización de planos de fabricación de maquinaria agrícola y actualización de diseños 
                            según las necesidades del proyecto. Levantamiento de planos a partir de muestras físicas 
                            y apoyo en el diseño de nuevos productos. Desarrollo de logotipo de la empresa, diseño de 
                            la página web y creación de la papelería comercial.`  ,
            fechaInicio: new Date('2014-01-06'),
            fechaFinal: new Date('2016-05-31'),
            contacto: "12345678"
        },
        { 
            id: 6,
            nombre: "D’Alejohos Publicidad",
            puesto: "Diseñador Grafico",
            descripcion: `Diseño gráfico de papelería, catálogos, y publicidad en general. Desarrollo de logotipos, carnets, 
                        avisos, pendones, folletos, y señalización. Creación de páginas web y otros materiales 
                        publicitarios para los clientes.` ,
            fechaInicio: new Date('2012-04-05'),
            fechaFinal: new Date('2014-04-31'),
            contacto: "12345678"
        }
    ],
}
