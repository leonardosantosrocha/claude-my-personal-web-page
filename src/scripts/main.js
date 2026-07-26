// Mobile Menu Management
function initializeMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 640) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        }
    });
}

// Dark mode management
function initializeDarkMode() {
    // Always start with light mode (dark mode disabled)
    const darkModeValue = localStorage.getItem('darkMode');

    // Only enable dark mode if explicitly set to 'true' in localStorage
    if (darkModeValue === 'true') {
        document.documentElement.classList.add('dark-mode');
    } else {
        // Default to light mode - always remove dark-mode class
        document.documentElement.classList.remove('dark-mode');
        // Initialize localStorage to 'false' for consistency
        if (!darkModeValue) {
            localStorage.setItem('darkMode', 'false');
        }
    }
    updateThemeToggleButton();
}

function toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeToggleButton();
}

function updateThemeToggleButton() {
    const button = document.getElementById('themeToggle');
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    button.textContent = isDarkMode ? '☀️' : '🌙';
    button.setAttribute('aria-pressed', String(isDarkMode));
}

// Language management
let currentLang = localStorage.getItem('language') || 'pt';

const translations = {
    pt: {
        nav: {
            perfil: 'Perfil',
            projetos: 'Projetos',
            curriculum: 'Currículo',
            contato: 'Contato'
        },
        sections: {
            sectionPerfil: '00 / Perfil',
            sectionProjetos: '01 / Projetos',
            sectionCurriculum: '02 / Currículo'
        },
        hero: {
            bio: 'Cientista da Computação atuando há 5 anos como Engenheiro de Dados e Analytics no Itaú Unibanco. Apoio squads na adoção da cultura data-driven e na automação de processos utilizando IA.'
        },
        projects: {
            project1Title: 'Página Pessoal',
            project1Desc: 'Portfólio técnico minimalista construído com HTML, CSS, JavaScript e Claude Code. Design responsivo, suporte bilíngue e dark mode automático.',
            project1Link: 'Ver repositório →',
            project2Title: 'Em desenvolvimento',
            project2Desc: 'Novo projeto em desenvolvimento. Em breve mais informações.',
            project2Link: 'Em breve →'
        },
        curriculum: {
            experienceTitle: 'Experiência Profissional',
            educationTitle: 'Formação Acadêmica',
            certificationsTitle: 'Certificações',
            job1Position: 'Engenheiro de Dados Sênior',
            job1Company: 'Itaú Unibanco',
            job1Period: 'Mar 2026 - Presente',
            job1Desc: 'Desenvolve agentes de IA e pipelines big data na AWS ao projetar e implementar soluções de automação com Python, PySpark e Terraform, resultando em tarefas de squad simplificadas e suporte abrangente para o negócio de Seguros.',
            job2Position: 'Engenheiro de Analytics Sênior',
            job2Company: 'Itaú Unibanco',
            job2Period: '2025 - 2026',
            job2Desc: 'Alcançou uma redução de 35% nos custos da AWS Athena ao construir um pipeline abrangente de monitoramento e rastreamento de queries, e impulsionou crescimento da equipe ao orientar tecnicamente dois estagiários que foram subsequentemente contratados como analistas de dados.',
            job3Position: 'Engenheiro de Analytics Pleno',
            job3Company: 'Itaú Unibanco',
            job3Period: '2024 - 2025',
            job3Desc: 'Criou um dashboard GA4 de alto desempenho processando 100 milhões de linhas diárias do app Itaú ao aproveitar AWS e PySpark, e impulsionou iniciativas de alfabetização de dados através de treinamentos alcançando NPS >80.',
            job4Position: 'Engenheiro de Analytics Júnior',
            job4Company: 'Itaú Unibanco',
            job4Period: '2022 - 2024',
            job4Desc: 'Construiu uma página HTML/CSS/JS para padronização de projetos técnicos que reduziu o esforço de documentação em 50%, e facilitou a adoção de data mesh ao impulsionar a implementação que melhorou a qualidade dos dados em toda a organização.',
            job5Position: 'Estagiário em Análise de Dados',
            job5Company: 'Itaú Unibanco',
            job5Period: '2021 - 2022',
            job5Desc: 'Implementou automações de qualidade de dados com Shell e SQL que melhoraram a saúde dos pipelines em 15%, e desenvolveu um pipeline de processamento que tratava 100K+ apólices de seguros diárias usando SAS e Tableau para analytics de negócio.',
            edu1Position: 'Especialização em Data Engineering e Big Data',
            edu1Company: 'Escola Politécnica da USP',
            edu1Period: 'Fev 2026 - Fev 2028',
            edu2Position: 'Especialização em Data Science & Inteligência Artificial',
            edu2Company: 'FIAP',
            edu2Period: 'Abr 2024 - Abr 2025',
            edu3Position: 'Bacharelado em Ciência da Computação',
            edu3Company: 'Universidade Presbiteriana Mackenzie',
            edu3Period: 'Jan 2020 - Dez 2023',
            edu4Position: 'Técnico em Programação',
            edu4Company: 'Instituto Tecnológico de Barueri',
            edu4Period: 'Jan 2017 - Dez 2019',
            cert1Position: 'AWS Certified AI Practitioner',
            cert1Company: 'Amazon Web Services (AWS)',
            cert1Period: 'Emitido Ago 2025 · Expira Ago 2028',
            cert2Position: 'AWS Certified Solutions Architect - Associate',
            cert2Company: 'Amazon Web Services (AWS)',
            cert2Period: 'Emitido Nov 2023 · Expira Nov 2026',
            cert3Position: 'AWS Certified Cloud Practitioner',
            cert3Company: 'Amazon Web Services (AWS)',
            cert3Period: 'Emitido Jul 2022 · Expirado Jul 2025'
        },
        footer: {
            copy: '© 2026 Leonardo Rocha. Todos os direitos reservados.',
            topLink: 'Voltar ao topo ↑'
        }
    },
    en: {
        nav: {
            perfil: 'Profile',
            projetos: 'Projects',
            curriculum: 'Resume',
            contato: 'Contact'
        },
        sections: {
            sectionPerfil: '00 / Profile',
            sectionProjetos: '01 / Projects',
            sectionCurriculum: '02 / Curriculum'
        },
        hero: {
            bio: 'Computer Scientist working for 5 years as a Data Engineer and Analytics at Itaú Unibanco. I support multidisciplinary teams in adopting a data-driven culture and automating processes using AI.'
        },
        projects: {
            project1Title: 'Personal Portfolio',
            project1Desc: 'Minimalist technical portfolio built with HTML, CSS, JavaScript and Claude Code. Responsive design, bilingual support and automatic dark mode.',
            project1Link: 'View repository →',
            project2Title: 'In development',
            project2Desc: 'New project in development. More information coming soon.',
            project2Link: 'Coming soon →'
        },
        curriculum: {
            experienceTitle: 'Professional Experience',
            educationTitle: 'Academic Training',
            certificationsTitle: 'Certifications',
            job1Position: 'Senior Data Engineer',
            job1Company: 'Itaú Unibanco',
            job1Period: 'Mar 2026 - Present',
            job1Desc: 'Develops AI agents and big data pipelines on AWS by designing and implementing automation solutions with Python, PySpark, and Terraform, resulting in streamlined routine squad tasks and comprehensive support for the Insurance business.',
            job2Position: 'Senior Analytics Engineer',
            job2Company: 'Itaú Unibanco',
            job2Period: '2025 - 2026',
            job2Desc: 'Achieved a 35% reduction in AWS Athena costs by building a comprehensive query monitoring and tracking pipeline, and drove team growth by mentoring two interns who were subsequently hired as data analysts.',
            job3Position: 'Mid Level Analytics Engineer',
            job3Company: 'Itaú Unibanco',
            job3Period: '2024 - 2025',
            job3Desc: 'Built a high-performance GA4 dashboard processing 100 million rows daily from the Itaú app by leveraging AWS and PySpark, and drove data literacy initiatives through training programs, achieving NPS >80.',
            job4Position: 'Junior Analytics Engineer',
            job4Company: 'Itaú Unibanco',
            job4Period: '2022 - 2024',
            job4Desc: 'Created a standardized documentation system using HTML, CSS, and JS that reduced documentation effort by 50%, and facilitated data mesh adoption by driving implementation that improved data quality across the organization.',
            job5Position: 'Data Analyst Intern',
            job5Company: 'Itaú Unibanco',
            job5Period: '2021 - 2022',
            job5Desc: 'Implemented data quality automations with Shell and SQL that enhanced pipeline health by 15%, and developed a processing pipeline handling 100K+ insurance policies daily using SAS and Tableau for business analytics.',
            edu1Position: 'Specialization in Data Engineering and Big Data',
            edu1Company: 'Polytechnic School of USP',
            edu1Period: 'Feb 2026 - Feb 2028',
            edu2Position: 'Specialization in Data Science & Artificial Intelligence',
            edu2Company: 'FIAP',
            edu2Period: 'Apr 2024 - Apr 2025',
            edu3Position: 'Bachelor\'s Degree in Computer Science',
            edu3Company: 'Presbyterian Mackenzie University',
            edu3Period: 'Jan 2020 - Dec 2023',
            edu4Position: 'Technician in Programming',
            edu4Company: 'Barueri Technological Institute',
            edu4Period: 'Jan 2017 - Dec 2019',
            cert1Position: 'AWS Certified AI Practitioner',
            cert1Company: 'Amazon Web Services (AWS)',
            cert1Period: 'Issued Aug 2025 · Expires Aug 2028',
            cert2Position: 'AWS Certified Solutions Architect - Associate',
            cert2Company: 'Amazon Web Services (AWS)',
            cert2Period: 'Issued Nov 2023 · Expires Nov 2026',
            cert3Position: 'AWS Certified Cloud Practitioner',
            cert3Company: 'Amazon Web Services (AWS)',
            cert3Period: 'Issued Jul 2022 · Expired Jul 2025'
        },
        footer: {
            copy: '© 2026 Leonardo Rocha. All rights reserved.',
            topLink: 'Back to top ↑'
        }
    }
};

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('language', currentLang);
    updateLanguage();
}

function updateLanguage() {
    const htmlElement = document.documentElement;

    // Update html lang attribute
    htmlElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en-US';

    // Update language button with flag
    const langButton = document.getElementById('langToggle');
    langButton.textContent = currentLang === 'pt' ? '🇺🇸' : '🇧🇷';
    langButton.setAttribute('aria-label', currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português');

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translatedText = getNestedValue(translations[currentLang], key);
        if (translatedText) {
            element.textContent = translatedText;
        }
    });
}

// Initialize
function init() {
    initializeMenuToggle();
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    initializeDarkMode();
    updateLanguage();
}

document.addEventListener('DOMContentLoaded', init);
