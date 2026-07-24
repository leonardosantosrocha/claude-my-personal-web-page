// Dark mode management
function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        updateThemeToggleButton();
    }
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
            job1Position: 'Engenheiro de Dados e IA',
            job1Company: 'Itaú Unibanco',
            job1Period: 'Mar 2026 - Presente',
            job1Desc: 'Atuo na construção/reuso de agentes de IA que otimizam o fluxo de trabalho dos analistas, cientistas e engenheiros de dados. Com isso, reduzimos esforço operacional e liberamos tempo para que foquem em atividades mais complexas. Stack técnica: AWS, Claude e Devin.',
            job2Position: 'Engenheiro de Analytics Sênior',
            job2Company: 'Itaú Unibanco',
            job2Period: '2025 - 2026',
            job2Desc: 'Desenvolvi um pipeline para capturar as consultas executadas via AWS Athena. Além disso, construi um dashboard para monitorar/otimizar os processos ofensores (redução de +30% de custo) e, principalmente, desenvolver ações de aculturamento de dados (uso eficiente do serviço). Stack técnica: Python, AWS (Athena, Glue, S3 e Quicksight).',
            job3Position: 'Engenheiro de Analytics Pleno',
            job3Company: 'Itaú Unibanco',
            job3Period: '2024 - 2025',
            job3Desc: 'Criei um relatório para monitorar indicadores de navegabilidade dos clientes no app do Itaú. Com isso, os analistas de produtos (junto ao time de UI/UX) da área de Cartões conseguiram tomar decisões mais assertivas quanto as jornadas do aplicativo. Stack técnica: Python, SparkSQL, AWS (Glue, S3 e Quicksight).',
            job4Position: 'Engenheiro de Analytics Júnior',
            job4Company: 'Itaú Unibanco',
            job4Period: '2022 - 2024',
            job4Desc: 'Construi uma página web que facilitou o processo de documentação técnica dos projetos. Dessa forma, reduzimos o esforço de escrita em 70% e alcançamos uma cobertura de mais de 95% dos processos internos da área. Stack técnica: HTML, CSS, Javascript, S3 e CloudFront.',
            job5Position: 'Estagiário em Análise de Dados',
            job5Company: 'Itaú Unibanco',
            job5Period: '2021 - 2022',
            job5Desc: 'Desenvolvi um pipeline de dados que processava mais de 100 mil apólices de seguros diariamente. Com isso, os analistas de negócio conseguiam acompanhar o ciclo de vida do contrato e identificar oportunidades para maximizar a retenção dos clientes. Stack técnica: SAS, SQL e Tableau.',
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
            job1Position: 'Data Engineer & AI',
            job1Company: 'Itaú Unibanco',
            job1Period: 'Mar 2026 - Present',
            job1Desc: 'Building/reusing AI agents that optimize the workflow for data analysts, scientists, and engineers. Reduce operational effort and free up time so they can focus on complex activities. Tech stack: AWS, Claude, and Devin.',
            job2Position: 'Senior Analytics Engineer',
            job2Company: 'Itaú Unibanco',
            job2Period: '2025 - 2026',
            job2Desc: 'Developed pipeline to capture Athena queries. Built dashboard to monitor and optimize cost-intensive processes (30%+ reduction) and drive data culture adoption. Stack: Python, Athena, Glue, S3, Quicksight.',
            job3Position: 'Mid Level Analytics Engineer',
            job3Company: 'Itaú Unibanco',
            job3Period: '2024 - 2025',
            job3Desc: 'Built navigation metrics report for app usability monitoring. Enabled product managers and UX team in Cards to make data-driven decisions on customer journeys. Stack: Python, SparkSQL, Glue, S3, Quicksight.',
            job4Position: 'Junior Analytics Engineer',
            job4Company: 'Itaú Unibanco',
            job4Period: '2022 - 2024',
            job4Desc: 'Built internal web page to streamline technical project documentation. Reduced documentation effort by 70% and achieved 95%+ coverage of internal processes. Stack: HTML, CSS, JavaScript, S3, CloudFront.',
            job5Position: 'Data Analyst Intern',
            job5Company: 'Itaú Unibanco',
            job5Period: '2021 - 2022',
            job5Desc: 'Developed data pipeline processing 100K+ insurance policies daily. Enabled business analysts to track contract lifecycle and identify opportunities to maximize customer retention. Stack: SAS, SQL, Tableau.',
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
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    initializeDarkMode();
    updateLanguage();
}

document.addEventListener('DOMContentLoaded', init);
