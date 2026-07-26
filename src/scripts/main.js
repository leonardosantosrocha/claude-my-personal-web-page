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
            job1Position: 'Engenheiro de Dados Sênior',
            job1Company: 'Itaú Unibanco',
            job1Period: 'Mar 2026 - Presente',
            job1Desc: '✅ Desenvolvimento de agentes de IA para automação de tarefas rotineiras.\n✅ Construção de pipelines big data na AWS para negócio de Seguros.\n⚙️ Stack: IA, AWS (Athena, Glue, S3, Step Functions), Python, PySpark, SparkSQL, SQL, Terraform.',
            job2Position: 'Engenheiro de Analytics Sênior',
            job2Company: 'Itaú Unibanco',
            job2Period: '2025 - 2026',
            job2Desc: '✅ Redução de 35% nos custos da AWS Athena via pipeline de monitoramento.\n✅ Mentoria técnica de estagiários que foram contratados como analistas de dados.\n⚙️ Stack: AWS (Athena, Glue, S3, Step Functions, Quicksight), Python, PySpark, SparkSQL, SQL.',
            job3Position: 'Engenheiro de Analytics Pleno',
            job3Company: 'Itaú Unibanco',
            job3Period: '2024 - 2025',
            job3Desc: '✅ Dashboard processando 100M linhas/dia de eventos GA4 do app Itaú.\n✅ Treinamentos de dados com NPS >80 impulsionando alfabetização de dados.\n⚙️ Stack: AWS (Athena, Glue, S3, Step Functions, Quicksight), Python, PySpark, SparkSQL, SQL.',
            job4Position: 'Engenheiro de Analytics Júnior',
            job4Company: 'Itaú Unibanco',
            job4Period: '2022 - 2024',
            job4Desc: '✅ Página HTML/CSS/JS que reduziu esforço de documentação em 35%.\n✅ Facilitação da adoção de data mesh melhorando qualidade dos dados.\n⚙️ Stack: AWS, CSS, HTML, Javascript, Python, PySpark, SparkSQL, SQL.',
            job5Position: 'Estagiário em Análise de Dados',
            job5Company: 'Itaú Unibanco',
            job5Period: '2021 - 2022',
            job5Desc: '✅ Automações de qualidade de dados que melhoraram saúde dos pipelines 15%.\n✅ Pipeline processando +100K apólices de seguros/dia com SAS e Tableau.\n⚙️ Stack: Alteryx Designer, SAS Enterprise Guide, Shell Script, SQL, Tableau Desktop.',
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
            job1Desc: '✅ Developing AI agents to automate routine squad tasks.\n✅ Building big data pipelines on AWS for Insurance business.\n⚙️ Stack: AI, AWS (Athena, Glue, S3, Step Functions), Python, PySpark, SparkSQL, SQL, Terraform.',
            job2Position: 'Senior Analytics Engineer',
            job2Company: 'Itaú Unibanco',
            job2Period: '2025 - 2026',
            job2Desc: '✅ Reduced AWS Athena costs by 35% through query monitoring pipeline.\n✅ Mentored interns who were hired as data analysts.\n⚙️ Stack: AWS (Athena, Glue, S3, Step Functions, Quicksight), Python, PySpark, SparkSQL, SQL.',
            job3Position: 'Mid Level Analytics Engineer',
            job3Company: 'Itaú Unibanco',
            job3Period: '2024 - 2025',
            job3Desc: '✅ Dashboard processing 100M rows/day from Itaú app GA4 events.\n✅ Data trainings (NPS >80) driving data literacy initiatives.\n⚙️ Stack: AWS (Athena, Glue, S3, Step Functions, Quicksight), Python, PySpark, SparkSQL, SQL.',
            job4Position: 'Junior Analytics Engineer',
            job4Company: 'Itaú Unibanco',
            job4Period: '2022 - 2024',
            job4Desc: '✅ HTML/CSS/JS page reducing documentation effort by 35%.\n✅ Facilitated data mesh adoption improving data quality.\n⚙️ Stack: AWS, CSS, HTML, Javascript, Python, PySpark, SparkSQL, SQL.',
            job5Position: 'Data Analyst Intern',
            job5Company: 'Itaú Unibanco',
            job5Period: '2021 - 2022',
            job5Desc: '✅ Data quality automations enhancing pipeline health by 15%.\n✅ Pipeline processing +100K insurance policies/day with SAS and Tableau.\n⚙️ Stack: Alteryx Designer, SAS Enterprise Guide, Shell Script, SQL, Tableau Desktop.',
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
