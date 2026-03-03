import { ClockIcon, CogIcon, GiftIcon, GlobeIcon, KeySquareIcon, MapPlusIcon, TruckIcon, UsersRoundIcon } from "@lucide/astro"

export const details = [
    {
        icon: ClockIcon,
        label: "Format",
        value: "3-hour Master Class (English or Spanish)",
    },
    {
        icon: GlobeIcon,
        label: "Modality",
        value: "Online or in-person",
    },
    {
        icon: UsersRoundIcon,
        label: "Public",
        value: "Universities, companies, professionals, motivated students",
    },
    {
        icon: GiftIcon,
        label: "Bonus",
        value: "Each participant receives the e-book SELF-TAUGHT ENGLISH",
    },
]

export const timeline = [
    {
        icon: ClockIcon,
        classIcon: "text-primary",
        hour: "Hour 1",
        time: "0:00 - 1:00",
        title: "Orientation & Foundations",
        desc: "Initial evaluation, self-study methodology and AI tools",
        bullets: [
            "Start improving today: practical steps to begin raising your English level immediately",
            "Understanding CEFR levels (A1-C2): what they mean for academic and business success",
            "What Is My English Level? — CEFR framework explained in simple terms",
            "Levels B2-C1: minimum requirement for graduate school, visas, and effective communication"
        ]
    },
    {
        icon: CogIcon,
        classIcon: "text-green-600",
        hour: "Hour 2",
        time: "1:00 - 2:00",
        title: "Skills & Techniques",
        desc: "Grammar, Listening, Speaking, Reading and Writing strategies",
        bullets: [
            "Grammar: importance, Life Skills method, resources (books, YouTube, AI)",
            "Listening: important variables (accents, speed, ambient noise), resources (television and the 3-Step Method, VOA, podcasts)",
            "Speaking: experienced, native teacher; language exchanges; how AI has revolutionized learning",
            "Reading: resources to expand vocabulary and comprehension including AI",
            "Writing: suggestions for practice; AI-based correction tools",
            "Demonstrations of AI tools: pronunciation, conversation, writing correction",
            "Making learning fun: strategies to stay motivated and consistent"
        ]
    },
    {
        icon: MapPlusIcon,
        classIcon: "text-secondary",
        hour: "Hour 3",
        time: "2:00 - 3:00",
        title: "Application & Roadmap",
        desc: "Official CEFR estimates, exam strategies and roadmap",
        bullets: [
            "How many hours do I need to achieve CEFR B2 or C1?",
            "CEFR official estimates",
            "Guided vs. unguided learning hours",
            "Key factors affecting progress (education, time commitments, focus, practice)",
            "Why achieving C2 or “true fluency” is unrealistic (but B2-C1 is attainable)",
            "How can I achieve the highest score on standardized tests?",
            "TOEFL iBT, IELTS strategies",
            "Tips for listening, speaking, and test preparation",
            "Exam readiness: practical strategies for success",
            "The most important secret to improving your English level",
            "Closing reflections & Q&A",
            "Distribution of the SELF-TAUGHT ENGLISH e-book"
        ]
    }
]

export const additional = [
    {
        icon: KeySquareIcon,
        classIcon: "text-dark",
        title: "Key Takeaways",
        bullets: [
            "Clear roadmap to CEFR B2-C1 proficiency",
            "Effective, low-cost self-study techniques and resources",
            "AI demonstrations that make self-study engaging and practical",
            "Exam preparation strategies for international certifications",
            "Personalized plan supported by the SELF-TAUGHT ENGLISH e-book"
        ]
    },
    {
        icon: TruckIcon,
        classIcon: "text-dark",
        title: "Logistics",
        bullets: [
            "Duration: 3 hours",
            "Format: Virtual or in-office or auditorium delivery",
            "Languages: English, Spanish, or bilingual",
            "Materials: Each participant receives the SELF-TAUGHT ENGLISH e-book",
            "Pricing: Flexible depending on group size and delivery format. Contact us for details.",
        ]
    },
]
