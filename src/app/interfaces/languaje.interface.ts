export interface LanguajeInterface {
    CONST_HERO_NAME: string;
    CONST_HERO_HELLO: string;
    CONST_HERO_I_AM: string;
    CONST_HERO_POSITION: string;
    CONST_HERO_PRESENTATION: string;
    CONST_HEADER_HOME: string;
    CONST_HEADER_ABOUT: string;
    CONST_HEADER_WORK_EXP: string;
    CONST_HEADER_PORTFOLIO: string;
    CONST_HEADER_CONTACT: string;
    CONST_CONTACT_AGE: string;
    CONST_CONTACT_ADRESS: string;
    CONST_CONTACT_EMAIL: string;
    CONST_CONTACT_PHONE: string;
    CONST_CONTACT_JOBTITLE: string;
    EXPERIENCE: ExperienceInterface[];
}

export interface ExperienceInterface {
    id: number;
    nombre: string;
    puesto: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFinal: Date;
    contacto: string;
}
