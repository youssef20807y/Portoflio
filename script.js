// ===== GLOBAL VARIABLES =====
let currentTheme = localStorage.getItem('theme') || 'light';
let portfolioItems = [];

// ===== AI CHAT CONFIG =====
const GEMINI_API_KEY = 'AIzaSyAOQEI0I8fUGCUN_kV0wetCfU01YxBFkZY';
const GEMINI_MODEL = 'gemini-1.5-flash-latest';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const AI_SYSTEM_PROMPT = `عرّف الناس على يوسف أحمد محمد السيد جمعة بالعامية المصرية وكأنك بتحكي عن واحد صاحبك شاطر وفنان. قول إنه طالب ثانوي من دمياط الجديدة، مواليد 2008، مبدع في الجرافيك ديزاين وعنده خبرة قوية في تصميمات السوشيال ميديا والطباعة، وكمان بيعرف يعمل هوية بصرية وبراند كامل للشركات. اشتغل مع شركات زي Printly Printing Services وMahomd Laban Furniture وTasameem Designs، وقدم شغل احترافي بيجمع بين الإبداع والدقة.
يوسف كمان شاطر في إدارة المحتوى والتسويق الرقمي، وعنده خبرة في تحسين تجربة المستخدم.
في البرمجة، بيعرف لغات زي Python، Java، CSS، PHP، JavaScript، C#، وVisual Basic، وبيهتم يدمج الذكاء الاصطناعي في التطبيقات والمواقع. عنده شغف بالـ UI/UX وتصميم المواقع بأسلوب جمالي مبهر، وكمان بيقدر يشتغل على مشاريع كبيرة فيها تفاعلات وحركات جذابة.
يوسف متطوع في جمعية صناع الحياة في دمياط، وشارك في مبادرة أشبال مصر الرقمية، وعمل مشروع أمني كامل على Windows Server يشمل تحليل إعدادات الأمان، جدار الحماية، قواعد IDS، والتشفير، حسب معايير NIST وأفضل ممارسات Microsoft.
بيحب التصوير، متابعة أحدث تريندات التكنولوجيا، وعنده قدرة على التعلم السريع وحل المشكلات. دمه خفيف، بيحب الهزار، وبيعرف يشتغل تحت ضغط ويطلع شغل فوق الممتاز في المعاد.`;

// ===== PORTFOLIO DATA =====
const portfolioData = [
    {
        id: 1,
        title: "تصميم هوية بصرية لشركة Printly",
        description: "تصميم هوية بصرية شاملة تتضمن الشعار والألوان والخطوط والمواد التسويقية للشركة.",
        image: "images/portfolio-1.png",
        category: "branding",
        tags: ["هوية بصرية", "شعار", "تصميم جرافيك"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "تصميم محتوى سوشيال ميديا",
        description: "مجموعة من التصاميم الإبداعية لمنصات التواصل الاجتماعي المختلفة مع التركيز على الجاذبية البصرية.",
        image: "images/portfolio-2.jpg",
        category: "social",
        tags: ["سوشيال ميديا", "إنستغرام", "فيسبوك"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "موقع إلكتروني تفاعلي",
        description: "تطوير موقع إلكتروني متجاوب باستخدام HTML, CSS, JavaScript مع تصميم حديث وتجربة مستخدم ممتازة.",
        image: "images/portfolio-3.png",
        category: "web",
        tags: ["تطوير ويب", "HTML", "CSS", "JavaScript"],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "تصميم ملصقات إعلانية",
        description: "مجموعة من الملصقات الإعلانية المبتكرة لمحمود لبن للأثاث مع التركيز على جذب العملاء.",
        image: "images/portfolio-1.png",
        category: "design",
        tags: ["ملصقات", "إعلانات", "طباعة"],
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "تطبيق ويب للتجارة الإلكترونية",
        description: "تطوير تطبيق ويب متكامل للتجارة الإلكترونية مع نظام إدارة المنتجات والطلبات.",
        image: "images/portfolio-2.jpg",
        category: "web",
        tags: ["تطبيق ويب", "تجارة إلكترونية", "قاعدة بيانات"],
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "حملة تسويقية متكاملة",
        description: "تصميم حملة تسويقية شاملة تتضمن المحتوى البصري والنصي لمختلف المنصات الرقمية.",
        image: "images/portfolio-3.png",
        category: "social",
        tags: ["تسويق رقمي", "حملات", "محتوى"],
        link: "#",
        github: "#"
    }
];

// ===== SKILLS DATA =====
const skillsData = {
    programming: [
        { name: 'Python', level: 90, years: 3 },
        { name: 'Java', level: 75, years: 2 },
        { name: 'C#', level: 70, years: 2 },
        { name: 'Visual Basic', level: 60, years: 1 },
        { name: 'PHP', level: 65, years: 1.5 },
        { name: 'JavaScript', level: 85, years: 3 },
        { name: 'CSS', level: 80, years: 3 },
        { name: 'HTML', level: 90, years: 4 }
    ],
    design: [
        { name: 'Adobe Photoshop', level: 85, years: 3 },
        { name: 'Adobe Illustrator', level: 80, years: 3 },
        { name: 'UI/UX Design', level: 70, years: 2 }
    ],
    other: [
        { name: 'Windows Server', level: 65, years: 2 },
        { name: 'AI Tools Integration', level: 75, years: 2 },
        { name: 'Network Security', level: 60, years: 1.5 }
    ]
};

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeScrollEffects();
    initializePortfolio();
    initializeModal();
    initializeAnimations();
    initializeContactForm();
    initializeSkills();
    initializeAIChat();
});

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Set initial theme
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Theme toggle event
    themeToggle.addEventListener('click', function() {
        if (currentTheme === 'light') {
            currentTheme = 'dark';
            body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            currentTheme = 'light';
            body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        localStorage.setItem('theme', currentTheme);
    });
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scroll for hero buttons with navbar offset
    const heroLinks = document.querySelectorAll('.hero-buttons a[href^="#"]');
    heroLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // Parallax effect for hero background shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.bg-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
    
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const cvSection = document.getElementById('cv');
            if (cvSection) {
                cvSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        scrollIndicator.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const cvSection = document.getElementById('cv');
                if (cvSection) {
                    cvSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

// ===== PORTFOLIO =====
function initializePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Render portfolio items
    renderPortfolioItems(portfolioData);
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            if (filter === 'all') {
                renderPortfolioItems(portfolioData);
            } else {
                const filteredItems = portfolioData.filter(item => item.category === filter);
                renderPortfolioItems(filteredItems);
            }
        });
    });
}

function renderPortfolioItems(items) {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = '';
    
    items.forEach((item, index) => {
        const portfolioItem = createPortfolioItem(item, index);
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Re-initialize AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

function createPortfolioItem(item, index) {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';
    portfolioItem.setAttribute('data-aos', 'fade-up');
    portfolioItem.setAttribute('data-aos-delay', (index * 100).toString());
    
    portfolioItem.innerHTML = `
        <div class="portfolio-image">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <i class="fas fa-eye"></i>
            </div>
        </div>
        <div class="portfolio-content">
            <h3 class="portfolio-title">${item.title}</h3>
            <p class="portfolio-description">${item.description}</p>
            <div class="portfolio-tags">
                ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Add click event to open modal
    portfolioItem.addEventListener('click', function() {
        openPortfolioModal(item);
    });
    
    return portfolioItem;
}

// ===== MODAL =====
function initializeModal() {
    const modal = document.getElementById('portfolio-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openPortfolioModal(item) {
    const modal = document.getElementById('portfolio-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');
    const modalLinks = document.getElementById('modal-links');
    
    // Populate modal content
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    
    // Tags
    modalTags.innerHTML = item.tags.map(tag => 
        `<span class="modal-tag">${tag}</span>`
    ).join('');
    
    // Links
    modalLinks.innerHTML = `
        <a href="${item.link}" class="modal-link" target="_blank">
            <i class="fas fa-external-link-alt"></i>
            عرض المشروع
        </a>
        <a href="${item.github}" class="modal-link" target="_blank">
            <i class="fab fa-github"></i>
            الكود المصدري
        </a>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('portfolio-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Typing animation for hero title
    const heroTitle = document.querySelector('.title-name');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Counter animation for skills
    const skillTags = document.querySelectorAll('.skill-tag');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = Math.random() * 0.5 + 's';
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    skillTags.forEach(tag => {
        skillObserver.observe(tag);
    });
    
    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 500);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    // Add click events to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const contactDetails = this.querySelector('.contact-details p');
            if (contactDetails) {
                const text = contactDetails.textContent;
                
                // Copy to clipboard
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(() => {
                        showNotification('تم نسخ المعلومات إلى الحافظة');
                    });
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    showNotification('تم نسخ المعلومات إلى الحافظة');
                }
            }
        });
    });
    
    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-3px) scale(1)';
        });
    });
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gradient-primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: var(--shadow-heavy);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Smooth scroll polyfill for older browsers
function smoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js';
        document.head.appendChild(script);
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function initializeAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#cv';
    skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `عرض تفاصيل المشروع ${index + 1}`);
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('خطأ في الموقع:', e.error);
    // يمكن إضافة تقرير الأخطاء هنا
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeLazyLoading();
        smoothScrollPolyfill();
        initializeAccessibility();
    } catch (error) {
        console.error('خطأ في تهيئة الموقع:', error);
    }
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('Service Worker مسجل بنجاح:', registration.scope);
            })
            .catch(function(error) {
                console.log('فشل في تسجيل Service Worker:', error);
            });
    });
}

// ===== SKILLS RENDERING =====
function initializeSkills() {
    const containers = {
        programming: document.getElementById('skills-programming'),
        design: document.getElementById('skills-design'),
        other: document.getElementById('skills-other')
    };

    const levelBadgeClass = (level) => {
        if (level < 50) return 'level-beginner';
        if (level < 70) return 'level-intermediate';
        if (level < 85) return 'level-advanced';
        return 'level-expert';
    };

    const levelBadgeText = (level) => {
        if (level < 50) return 'مبتدئ';
        if (level < 70) return 'متوسط';
        if (level < 85) return 'متقدم';
        return 'خبير';
    };

    const iconFor = (name) => {
        const map = [
            { keys: ['python'], icon: 'fa-brands fa-python', color: '#3776AB' },
            { keys: ['java'], icon: 'fa-brands fa-java', color: '#f89820' },
            { keys: ['c#','csharp'], icon: 'fa-solid fa-code', color: '#9b4f96' },
            { keys: ['visual basic','vb'], icon: 'fa-solid fa-terminal', color: '#6b7280' },
            { keys: ['php'], icon: 'fa-brands fa-php', color: '#777BB4' },
            { keys: ['javascript','js'], icon: 'fa-brands fa-js', color: '#f7df1e' },
            { keys: ['css'], icon: 'fa-brands fa-css3-alt', color: '#2965f1' },
            { keys: ['html'], icon: 'fa-brands fa-html5', color: '#e34f26' },
            { keys: ['photoshop'], icon: 'fa-solid fa-image', color: '#31a8ff' },
            { keys: ['illustrator'], icon: 'fa-solid fa-pen', color: '#ff9a00' },
            { keys: ['ui/ux','ux','ui'], icon: 'fa-solid fa-object-group', color: '#8b5cf6' },
            { keys: ['windows server','windows'], icon: 'fa-brands fa-windows', color: '#00a4ef' },
            { keys: ['ai','ai tools'], icon: 'fa-solid fa-robot', color: '#06b6d4' },
            { keys: ['network'], icon: 'fa-solid fa-network-wired', color: '#10b981' }
        ];
        const lower = name.toLowerCase();
        for (const m of map) {
            if (m.keys.some(k => lower.includes(k))) return m;
        }
        return { icon: 'fa-solid fa-circle-notch', color: getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || '#4f46e5' };
    };

    Object.keys(containers).forEach(key => {
        const container = containers[key];
        if (!container) return;
        container.innerHTML = '';
        const sortedSkills = [...skillsData[key]].sort((a, b) => {
            if (b.level !== a.level) return b.level - a.level;
            if (b.years !== a.years) return b.years - a.years;
            return a.name.localeCompare(b.name);
        });
        sortedSkills.forEach((skill, index) => {
            const { icon, color } = iconFor(skill.name);
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.setAttribute('data-aos', 'zoom-in');
            card.setAttribute('data-aos-delay', (index * 90).toString());
            card.innerHTML = `
                <div class="skill-visual" style="--icon-color: ${color}; --percent: 0">
                    <div class="skill-ring"></div>
                    <div class="skill-ring-inner">
                        <i class="${icon}"></i>
                    </div>
                </div>
                <div class="skill-meta">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level-badge ${levelBadgeClass(skill.level)}">${levelBadgeText(skill.level)}</span>
                    <span class="skill-years">${skill.years} سنة خبرة</span>
                    <span class="skill-percent">0%</span>
                </div>
            `;
            card.dataset.targetPercent = String(skill.level);
            container.appendChild(card);
        });
    });

    // Re-init AOS for newly added elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }

    // Animate circular rings when visible
    const cards = document.querySelectorAll('.skill-card .skill-visual');
    const observerOptions = { threshold: 0.5 };
    const ringObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const visual = entry.target;
            const card = visual.closest('.skill-card');
            if (!card) return;
            const target = Number(card.dataset.targetPercent || 0);

            // animate --percent and number text
            let start = 0;
            const duration = 1000;
            const startTime = performance.now();

            const step = (now) => {
                const progress = Math.min(1, (now - startTime) / duration);
                const value = Math.round(start + (target - start) * progress);
                const ring = visual.querySelector('.skill-ring');
                if (ring) ring.style.setProperty('--percent', String(value));
                const percentEl = card.querySelector('.skill-percent');
                if (percentEl) percentEl.textContent = value + '%';
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);

            observer.unobserve(visual);
        });
    }, observerOptions);

    cards.forEach(v => ringObserver.observe(v));
}

// ===== AI CHAT WIDGET =====
function initializeAIChat() {
    try {
        // Floating Action Button
        const fab = document.createElement('button');
        fab.className = 'ai-fab';
        fab.setAttribute('aria-label', 'محادثة الذكاء الاصطناعي');
        fab.innerHTML = '<i class="fas fa-robot"></i>';

        // Chat container
        const chat = document.createElement('div');
        chat.className = 'ai-chat';
        chat.innerHTML = `
            <div class="ai-chat-header">
                <div class="ai-chat-title"><i class="fas fa-robot"></i><span>مساعد الذكاء الاصطناعي</span></div>
                <button class="ai-chat-close" aria-label="إغلاق">&times;</button>
            </div>
            <div class="ai-chat-messages" role="log" aria-live="polite"></div>
            <form class="ai-chat-input" autocomplete="off">
                <textarea class="ai-chat-textarea" rows="2" placeholder="اكتب رسالتك هنا..."></textarea>
                <button class="ai-chat-send" type="submit" aria-label="إرسال"><i class="fas fa-paper-plane"></i></button>
            </form>
        `;

        document.body.appendChild(fab);
        document.body.appendChild(chat);

        const closeBtn = chat.querySelector('.ai-chat-close');
        const messagesEl = chat.querySelector('.ai-chat-messages');
        const formEl = chat.querySelector('.ai-chat-input');
        const textareaEl = chat.querySelector('.ai-chat-textarea');
        const sendBtn = chat.querySelector('.ai-chat-send');

        let isOpen = false;
        let isSending = false;
        const chatHistory = [];

        const openChat = () => {
            chat.classList.add('open');
            isOpen = true;
            setTimeout(() => textareaEl.focus(), 0);
            if (!messagesEl.dataset.greeted) {
                addMessage('assistant', 'مرحباً! أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟');
                messagesEl.dataset.greeted = '1';
            }
        };
        const closeChat = () => { chat.classList.remove('open'); isOpen = false; };

        fab.addEventListener('click', () => {
            isOpen ? closeChat() : openChat();
        });
        closeBtn.addEventListener('click', closeChat);

        formEl.addEventListener('submit', async (e) => {
            e.preventDefault();
            const text = textareaEl.value.trim();
            if (!text || isSending) return;
            textareaEl.value = '';
            addMessage('user', text);
            await sendToGemini(text);
        });

        function addMessage(role, text) {
            const item = document.createElement('div');
            item.className = `ai-msg ${role}`;
            item.innerHTML = `<div class="ai-msg-bubble">${escapeHtml(text).replace(/\n/g, '<br>')}</div>`;
            messagesEl.appendChild(item);
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }

        function addTyping() {
            const item = document.createElement('div');
            item.className = 'ai-msg assistant typing';
            item.innerHTML = '<div class="ai-msg-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
            messagesEl.appendChild(item);
            messagesEl.scrollTop = messagesEl.scrollHeight;
            return item;
        }

        async function sendToGemini(userText) {
            if (!GEMINI_API_KEY) {
                addMessage('assistant', 'لم يتم ضبط مفتاح API.');
                return;
            }
            try {
                isSending = true;
                textareaEl.disabled = true;
                sendBtn.disabled = true;

                chatHistory.push({ role: 'user', text: userText });
                const typingEl = addTyping();

                const contents = chatHistory.map(m => ({
                    role: m.role === 'user' ? 'user' : 'model',
                    parts: [{ text: m.text }]
                }));

                const res = await fetch(`${GEMINI_API_URL}?key=${encodeURIComponent(GEMINI_API_KEY)}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents,
                        systemInstruction: {
                            role: 'system',
                            parts: [{ text: AI_SYSTEM_PROMPT }]
                        }
                    })
                });

                if (!res.ok) {
                    throw new Error('HTTP ' + res.status);
                }
                const data = await res.json();
                const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'تعذر الحصول على رد.';

                typingEl.remove();
                chatHistory.push({ role: 'assistant', text });
                addMessage('assistant', text);
            } catch (err) {
                addMessage('assistant', 'حدث خطأ أثناء الاتصال بالخدمة. حاول مرة أخرى.');
                console.error('Gemini error:', err);
            } finally {
                isSending = false;
                textareaEl.disabled = false;
                sendBtn.disabled = false;
                textareaEl.focus();
            }
        }

        function escapeHtml(str) {
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

    } catch (error) {
        console.error('فشل تهيئة دردشة الذكاء الاصطناعي:', error);
    }
}

