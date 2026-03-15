
        // Menu Mobile
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }

        // --- SISTEMA DE TRADUÇÃO ---
        const translations = {
            pt: {
                nav_home: "Início", nav_about: "Sobre Nós", nav_services: "Serviços", nav_pricing: "Pacotes", nav_contact: "Contacto", nav_cta: "Fale Connosco",

                hero_title: "Estratégia Digital e Inovação para Marcas de Alto Impacto.",
                hero_desc: "Ajudamos startups, empreendedores e empresas em crescimento a construírem marcas fortes e posicionarem-se de forma estratégica no ambiente digital com design premium e IA.",
                hero_btn: "Ver Nossas Soluções",

                about_badge: "Quem Somos",
                about_title_1: "Modernos.", about_title_2: "Inteligentes.", about_title_3: "Ousados.",
                about_desc: "Não somos uma agência genérica. Unimos criatividade, pensamento estratégico e inovação tecnológica para desenvolver identidades visuais e soluções que geram resultados reais e eliminam a burocracia do seu negócio.",
                about_stat1: "Projetos Entregues", about_stat2: "Foco em Inovação",
                about_card_title: "Escalabilidade", about_card_desc: "Operações automatizadas",

                srv_badge: "Expertise", srv_title: "Ecossistema de Soluções", srv_desc: "Soluções completas desde a conceção da marca até à automação tecnológica.",
                srv_1_title: "Branding e Identidade Visual", srv_1_desc: "Criamos marcas magnéticas que se destacam no ruído digital e comunicam autoridade.",
                srv_2_title: "Estratégia Digital", srv_3_title: "Design Criativo e Web Design",
                srv_4_title: "Soluções Tecnológicas e Inovação", srv_4_desc: "Implementação de ferramentas avançadas e IA para otimizar processos e modernizar a operação da sua empresa.",

                prc_title: "Soluções à Medida", prc_desc: "Pacotes desenhados para o momento exato da sua empresa.",
                prc_ess_title: "Pacote Essencial", prc_ess_f1: "Criação de site ou landing page", prc_ess_f2: "Identidade visual + elementos básicos", prc_ess_f3: "Integração simples com IA (formulário inteligente, chatbot básico)", prc_ess_btn: "Solicitar Proposta",
                prc_str_badge: "Mais Popular", prc_str_title: "Pacote Estratégico", prc_str_f1: "Branding completo + consultoria de IA", prc_str_f2: "Sites interativos e automações complexas", prc_str_f3: "Agentes de IA para otimizar processos da empresa", prc_str_f4: "Consultoria estratégica para aplicação de IA", prc_str_btn: "Agendar Reunião",
                prc_prm_title: "Pacote Premium", prc_prm_f1: "Desenvolvimento de SaaS ou produto digital", prc_prm_f2: "Automação avançada e agentes de IA sob medida", prc_prm_f3: "Estratégia completa de marketing digital e presença online", prc_prm_btn: "Falar com Especialista",

                footer_copy: "© 2026 JASP Labs. Inovação e Estratégia Digital."
            },
            en: {
                nav_home: "Home", nav_about: "About Us", nav_services: "Services", nav_pricing: "Packages", nav_contact: "Contact", nav_cta: "Let's Talk",

                hero_title: "Digital Strategy and Innovation for High-Impact Brands.",
                hero_desc: "We help startups, entrepreneurs, and growing businesses build strong brands and position themselves strategically in the digital environment with premium design and AI.",
                hero_btn: "View Our Solutions",

                about_badge: "Who We Are",
                about_title_1: "Modern.", about_title_2: "Intelligent.", about_title_3: "Bold.",
                about_desc: "We are not a generic agency. We unite creativity, strategic thinking, and technological innovation to develop visual identities and solutions that generate real results and eliminate bureaucracy from your business.",
                about_stat1: "Delivered Projects", about_stat2: "Focus on Innovation",
                about_card_title: "Scalability", about_card_desc: "Automated operations",

                srv_badge: "Expertise", srv_title: "Ecosystem of Solutions", srv_desc: "Complete solutions from brand conception to technological automation.",
                srv_1_title: "Branding and Visual Identity", srv_1_desc: "We create magnetic brands that stand out in the digital noise and communicate authority.",
                srv_2_title: "Digital Strategy", srv_3_title: "Creative Design and Web Design",
                srv_4_title: "Technological Solutions and Innovation", srv_4_desc: "Implementation of advanced tools and AI to optimize processes and modernize your company's operation.",

                prc_title: "Tailored Solutions", prc_desc: "Packages designed for the exact stage of your company.",
                prc_ess_title: "Essential Package", prc_ess_f1: "Website or landing page creation", prc_ess_f2: "Visual identity + basic elements", prc_ess_f3: "Simple AI integration (smart form, basic chatbot)", prc_ess_btn: "Request Proposal",
                prc_str_badge: "Most Popular", prc_str_title: "Strategic Package", prc_str_f1: "Complete branding + AI consulting", prc_str_f2: "Interactive sites and complex automations", prc_str_f3: "AI agents to optimize company processes", prc_str_f4: "Strategic consulting for AI application", prc_str_btn: "Schedule Meeting",
                prc_prm_title: "Premium Package", prc_prm_f1: "SaaS or digital product development", prc_prm_f2: "Advanced automation and custom AI agents", prc_prm_f3: "Complete digital marketing strategy and online presence", prc_prm_btn: "Talk to an Expert",

                footer_copy: "© 2026 JASP Labs. Innovation and Digital Strategy."
            }
        };

        const langToggle = document.getElementById('lang-toggle');
        const ptOption = document.querySelector('.lang-option.pt');
        const enOption = document.querySelector('.lang-option.en');
        let currentLang = localStorage.getItem('jasp_lang') || 'pt';

        function updateLanguage(lang) {
            const elements = document.querySelectorAll('[data-i18n]');

            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.style.opacity = 0;
                setTimeout(() => {
                    el.textContent = translations[lang][key] || el.textContent;
                    el.style.opacity = 1;
                }, 200);
            });

            if (lang === 'en') {
                langToggle.classList.add('en-active');
                enOption.classList.add('active');
                ptOption.classList.remove('active');
            } else {
                langToggle.classList.remove('en-active');
                ptOption.classList.add('active');
                enOption.classList.remove('active');
            }
            localStorage.setItem('jasp_lang', lang);
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                el.style.transition = 'opacity 0.2s ease';
            });
            updateLanguage(currentLang);
        });

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            updateLanguage(currentLang);
        });

        /**
 * JASP Labs - Scripts Principais
 * Animações GSAP e Interações UI
 */

// Espera que o DOM carregue antes de executar os scripts (boa prática para ficheiros externos)
document.addEventListener("DOMContentLoaded", (event) => {
    
    // 1. Inicializar GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animação de Fade Up para elementos ao fazer scroll
    gsap.utils.toArray('.gsap-fade').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%", // Inicia quando o topo do elemento atinge 85% da tela
                toggleActions: "play none none reverse" // Anima ao descer, reverte ao subir
            },
            y: 50,          // Move 50px de baixo para cima
            opacity: 0,     // Inicia transparente
            duration: 0.8,
            ease: "power3.out"
        });
    });

// --------------------------------------------------------
    // 2. Lógica do Acordeão (FAQ)
    // --------------------------------------------------------
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            // Fecha as outras perguntas se estiverem abertas
            document.querySelectorAll('.faq-item').forEach(other => {
                if(other !== item) {
                    other.classList.remove('active');
                }
            });
            // Abre/fecha a pergunta clicada
            item.classList.toggle('active');
        });
    });

});