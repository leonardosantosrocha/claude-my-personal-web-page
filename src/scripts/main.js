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
            job1Desc: '✅ Desenvolvi agentes de IA para auxiliar as squads em tarefas rotineiras (ex: documentação).\n✅ Planejei, construí e mantive grandes pipelines de dados na AWS que serviram o negócio de Seguros.\n✅ Compartilhei boas práticas com engenheiros de dados sobre analytics, arquitetura, modelagem e finops.\n⚙️ Stack: IA, AWS (Athena, Glue, S3 e Step Functions), Python, PySpark, SparkSQL, SQL e Terraform.',
            job2Position: 'Engenheiro de Analytics Sênior',
            job2Company: 'Itaú Unibanco',
            job2Period: '2025 - 2026',
            job2Desc: '✅ Aprimorei o fluxo de priorização propondo um novo para receber e iniciar o desenvolvimento.\n✅ Orientei tecnicamente dois estagiários de times de produto - ambos foram contratados como analistas de dados.\n✅ Reduzi os custos da AWS Athena em 35% através de um pipeline que permite monitoramento e rastreamento de queries.\n⚙️ Stack: AWS (Athena, Glue, S3, Step Functions e Quicksight), Python, PySpark, SparkSQL e SQL.',
            job3Position: 'Engenheiro de Analytics Pleno',
            job3Company: 'Itaú Unibanco',
            job3Period: '2024 - 2025',
            job3Desc: '✅ Construí um dashboard que processava 100 milhões de linhas por dia de eventos GA4 no app do Itaú.\n✅ Conduzi treinamentos de dados e analytics (NPS acima de 80) contribuindo para a alfabetização de dados.\n✅ Redesenhei o dashboard de pagamentos para centralizar KPIs que otimizam a análise de dados para 2 squads.\n⚙️ Stack: AWS (Athena, Glue, S3, Step Functions e Quicksight), Python, PySpark, SparkSQL e SQL.',
            job4Position: 'Engenheiro de Analytics Júnior',
            job4Company: 'Itaú Unibanco',
            job4Period: '2022 - 2024',
            job4Desc: '✅ Criei uma página usando HTML, CSS e JS para padronizar documentação reduzindo o esforço em 35%.\n✅ Facilitei a adoção de data mesh que melhorou a qualidade dos dados e aumentou a assertividade.\n✅ Refatorei dezenas de queries SQL durante a migração on-premises para AWS que reduziram custos e riscos.\n⚙️ Stack: AWS, CSS, HTML, Javascript, Python, PySpark, SparkSQL e SQL.',
            job5Position: 'Estagiário em Análise de Dados',
            job5Company: 'Itaú Unibanco',
            job5Period: '2021 - 2022',
            job5Desc: '✅ Construí automações de qualidade de dados usando Shell e SQL que melhoraram a saúde dos pipelines em 15%.\n✅ Desenvolvi um pipeline que processava +100K apólices de seguros por dia usando SAS e Tableau.\n✅ Escrevi documentação técnica acessível que melhorou a manutenibilidade e sustentabilidade dos projetos.\n⚙️ Stack: Alteryx Designer, SAS Enterprise Guide, Shell Script, SQL e Tableau Desktop.',
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
            // job1Desc: 'Building/reusing AI agents that optimize the workflow for data analysts, scientists, and engineers. Reduce operational effort and free up time so they can focus on complex activities. Tech stack: AWS, Claude, and Devin.',
            job1Desc: '✅ Develop AI agents to assist squads in their routine tasks (e.g. documentation).\n✅ Planed, built and sustained big data pipelines on AWS which served the Insurance business.\n✅ Shared good practices with data engineers about data analytics, architecture, modelling and finops.\n⚙️ Stack: AI, AWS (Athena, Glue, S3 and Step Functions), Python, PySpark, SparkSQL, SQL and Terraform.',
            job2Position: 'Senior Analytics Engineer',
            job2Company: 'Itaú Unibanco',
            job2Period: '2025 - 2026',
            job2Desc: '✅ Enhanced the prioritization flow by proposing a new one to receive and start the development.\n✅ Mentored technically two interns from product teams - both has been contracted as data analysts.\n✅ Reduced the AWS Athena costs in 35% through a pipeline which allows queries monitoring and tracking.\n⚙️ Stack: AWS (Athena, Glue, S3, Step Functions and Quicksight), Python, PySpark, SparkSQL and SQL.',
            job3Position: 'Mid Level Analytics Engineer',
            job3Company: 'Itaú Unibanco',
            job3Period: '2024 - 2025',
            job3Desc: '✅ Built a dashboard that processed 100 million rows per day from GA4 events on Itaú app.\n✅ Led data and analytics trainings (NPS over 80) contributing directly for data literacy and learning.\n✅ Redesigned the payments dashboard to centralize KPIs which optimize the data analysis for 2 squads.\n⚙️ Stack: AWS (Athena, Glue, S3, Step Functions and Quicksight), Python, PySpark, SparkSQL and SQL.',
            job4Position: 'Junior Analytics Engineer',
            job4Company: 'Itaú Unibanco',
            job4Period: '2022 - 2024',
            job4Desc: '✅ Created a page using HTML, CSS and JS to standardize docs reducing the effort in 35%.\n✅ Facilitate the data mesh adoption which improved the data quality and triggers assertiveness.\n✅ Refactored tens of SQL queries during on-premises to AWS migration which reduced costs and risks.\n⚙️ Stack: AWS, CSS, HTML, Javascript, Python, PySpark, SparkSQL and SQL.',
            job5Position: 'Data Analyst Intern',
            job5Company: 'Itaú Unibanco',
            job5Period: '2021 - 2022',
            job5Desc: '✅ Built data quality automations using Shell and SQL that enhanced pipelines health in 15%.\n✅ Developed a pipeline that processed +100K insurance policies per day using SAS and Tableau.\n✅ Wrote accessible technical documentation which improved projects maintainability and sustainability.\n⚙️ Stack: Alteryx Designer, SAS Enterpise Guide, Shell Script, SQL and Tableau Desktop.',
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
