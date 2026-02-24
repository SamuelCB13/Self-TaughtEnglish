import { BriefcaseIcon, Building2Icon, UsersRoundIcon } from "@lucide/astro";

export const packages = [
    {
        icon: Building2Icon,
        title: "Universidades",
        price: "A solicitud",
        priceNote: "Tarifas preferenciales para instituciones educativas",
        description: "Soluciones personalizadas para instituciones con tarifas preferenciales.",
        features: [
            "Master Class de 3 horas",
            "E-book SELF-TAUGHT ENGLISH incluido",
            "Formato en inglés o español",
            "Modalidad en línea o presencial",
            "Certificado de participación",
        ],
        cta: "Solicitar información",
        highlight: false,
    },
    {
        icon: BriefcaseIcon,
        title: "Empresas",
        price: "$2,500 - $3,000+",
        priceNote: "Según tamaño del grupo",
        description: "Impulsa el inglés de tus ejecutivos y equipos con resultados rápidos y medibles.",
        features: [
            "Master Class de 3 horas",
            "E-book SELF-TAUGHT ENGLISH incluido",
            "Preparacion TOEFL, TOEIC e IELTS",
            "Ahorro significativo en costos",
            "Limite: 40 participantes",
            "Coaching personalizado",
        ],
        cta: "Reservar sesión",
        highlight: true,
    },
    {
        icon: UsersRoundIcon,
        title: "Seminarios grandes",
        price: "Personalizado",
        priceNote: "Logistica adaptada a tus necesidades",
        description: "Para audiencias superiores a 40 personas con logistica completa.",
        features: [
            "Sin limite de asistentes",
            "E-book SELF-TAUGHT ENGLISH incluido",
            "Formato adaptable",
            "Soporte logistico completo",
            "Tarifas especiales por volumen",
        ],
        cta: "Contactar ahora",
        highlight: false,
    },
]
