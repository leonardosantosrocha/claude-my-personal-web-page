/* ═══════════════════════════════════════════════════════════════════════════
   Leonardo Rocha — portfólio pessoal
   JavaScript sem dependências: idioma, menu mobile, contato e revelação.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    var root = document.documentElement;
    var EMAIL = 'leonardo.rocha.2018@outlook.com';
    var LANG_KEY = 'lr-lang';

    var STRINGS = {
        pt: {
            langToggle: 'Mudar para inglês',
            menuOpen: 'Abrir menu',
            menuClose: 'Fechar menu',
            subject: 'Contato — Leonardo Rocha'
        },
        en: {
            langToggle: 'Switch to Portuguese',
            menuOpen: 'Open menu',
            menuClose: 'Close menu',
            subject: 'Hello — Leonardo Rocha'
        }
    };

    var header = document.getElementById('site-header');
    var navToggle = document.getElementById('nav-toggle');
    var langToggle = document.getElementById('lang-toggle');
    var contactToggle = document.getElementById('contact-toggle');
    var contactDropdown = document.getElementById('contact-dropdown');
    var nav = document.getElementById('site-nav');

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var isDesktopNav = window.matchMedia('(min-width: 768px)');

    function store(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* modo privado */ }
    }
    function read(key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
    }

    /* ─────────────────────────────── idioma ─────────────────────────────── */
    var lang = read(LANG_KEY) === 'en' ? 'en' : 'pt';

    function applyLang(next, persist) {
        lang = next === 'en' ? 'en' : 'pt';
        root.setAttribute('data-lang', lang);
        root.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

        if (langToggle) langToggle.setAttribute('aria-label', STRINGS[lang].langToggle);
        if (nav) nav.setAttribute('aria-label', lang === 'pt' ? 'Principal' : 'Main');
        applyNavLabel();

        var href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(STRINGS[lang].subject);
        var links = document.querySelectorAll('[data-mailto]');
        for (var i = 0; i < links.length; i++) links[i].setAttribute('href', href);

        if (persist) store(LANG_KEY, lang);
    }

    if (langToggle) {
        langToggle.addEventListener('click', function () {
            applyLang(lang === 'pt' ? 'en' : 'pt', true);
        });
    }

    /* ─────────────────────────────── menu mobile ─────────────────────────────── */
    function navIsOpen() {
        return header && header.getAttribute('data-nav-open') === 'true';
    }
    function applyNavLabel() {
        if (!navToggle) return;
        navToggle.setAttribute('aria-label', navIsOpen() ? STRINGS[lang].menuClose : STRINGS[lang].menuOpen);
    }
    function setNav(open) {
        if (!header || !navToggle) return;
        header.setAttribute('data-nav-open', open ? 'true' : 'false');
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        applyNavLabel();
    }

    if (navToggle) {
        setNav(false);
        navToggle.addEventListener('click', function () {
            setNav(!navIsOpen());
        });
    }

    if (nav) {
        nav.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                setNav(false);
                setContact(false);
            }
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        if (contactIsOpen()) {
            setContact(false);
            if (contactToggle) contactToggle.focus();
        }
        if (navIsOpen()) {
            setNav(false);
            if (navToggle) navToggle.focus();
        }
    });

    document.addEventListener('click', function (event) {
        if (navIsOpen() && header && !header.contains(event.target)) setNav(false);
        if (contactIsOpen() && !event.target.closest('.site-nav__item--contact')) setContact(false);
    });

    // ao alargar para tablet o painel deixa de existir: o estado precisa acompanhar
    function onNavBreakpoint(event) {
        if (event.matches) setNav(false);
        setContact(false);
    }
    if (isDesktopNav.addEventListener) isDesktopNav.addEventListener('change', onNavBreakpoint);
    else if (isDesktopNav.addListener) isDesktopNav.addListener(onNavBreakpoint);

    /* ─────────────────────────────── contato (dropdown) ─────────────────────────────── */
    function contactIsOpen() {
        return !!(contactDropdown && !contactDropdown.hidden);
    }
    function setContact(open) {
        if (!contactToggle || !contactDropdown) return;
        contactDropdown.hidden = !open;
        contactToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    if (contactToggle && contactDropdown) {
        contactToggle.addEventListener('click', function (event) {
            event.stopPropagation();
            var willOpen = !contactIsOpen();
            setContact(willOpen);
            if (willOpen) {
                var first = contactDropdown.querySelector('a');
                if (first) first.focus({ preventScroll: true });
            }
        });
    }

    /* ─────────────────────────────── header ao rolar ─────────────────────────────── */
    if (header) {
        var onScroll = function () {
            header.setAttribute('data-scrolled', window.scrollY > 4 ? 'true' : 'false');
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ─────────────────────────────── seção ativa na navegação ─────────────────────────────── */
    var navLinks = nav ? nav.querySelectorAll('a[href^="#"]') : [];
    if (navLinks.length && 'IntersectionObserver' in window) {
        var linkById = {};
        var watched = [];
        for (var n = 0; n < navLinks.length; n++) {
            var id = navLinks[n].getAttribute('href').slice(1);
            var target = document.getElementById(id);
            if (!target) continue;
            linkById[id] = navLinks[n];
            watched.push(target);
        }

        var visible = {};
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                visible[entry.target.id] = entry.isIntersecting;
            });
            var current = null;
            watched.forEach(function (section) {
                if (visible[section.id]) current = current || section.id;
            });
            Object.keys(linkById).forEach(function (key) {
                if (key === current) linkById[key].setAttribute('aria-current', 'true');
                else linkById[key].removeAttribute('aria-current');
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        watched.forEach(function (section) { spy.observe(section); });
    }

    /* ─────────────────────────────── entrada ─────────────────────────────── */
    // Um único momento, na carga: o nome e a linha de abertura sobem, e o eixo
    // cronológico se desenha de cima para baixo. Nada de revelação por seção
    // durante o scroll. O CSS não esconde nada — sem JS, ou com movimento
    // reduzido, a página já nasce inteira.
    function orchestrate() {
        if (reduceMotion.matches) return;

        var axis = document.getElementById('chrono');
        var entering = Array.prototype.slice.call(document.querySelectorAll('[data-enter]'));

        entering.forEach(function (el, i) {
            el.style.transitionDelay = (i * 90) + 'ms';
            el.setAttribute('data-enter', 'in');
        });
        if (axis) axis.setAttribute('data-axis', 'draw');

        var play = function () {
            entering.forEach(function (el) { el.setAttribute('data-enter', 'on'); });
            if (axis) axis.setAttribute('data-axis', 'drawn');
        };

        // dois quadros para o estado inicial chegar a pintar antes da transição
        requestAnimationFrame(function () { requestAnimationFrame(play); });
        // rede de segurança: numa aba em segundo plano o rAF não dispara
        setTimeout(play, 600);
    }

    /* ─────────────────────────────── início ─────────────────────────────── */
    applyLang(lang, false);
    orchestrate();
})();
