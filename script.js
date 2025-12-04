// ===== GLOBAL VARIABLES =====
let currentTheme = localStorage.getItem('theme') || 'light';
let portfolioItems = [];
let sectionColors = {};
let colorRefreshInterval;


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
    initializeComments();
    initializeDynamicColors();
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
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js')
            .then(function(registration) {
                console.log('Service Worker مسجل بنجاح:', registration.scope);
            })
            .catch(function(error) {
                console.log('فشل في تسجيل Service Worker:', error);
            });
    });
} else if (location.protocol === 'file:') {
    console.log('Service Worker غير مدعوم في بروتوكول file://');
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


// ===== COMMENTS SYSTEM =====
function initializeComments() {
    // Wait for Firebase to be available
    const waitForFirebase = () => {
        if (window.firebaseDb) {
            setupCommentsSystem();
        } else {
            setTimeout(waitForFirebase, 100);
        }
    };
    waitForFirebase();
}

async function setupCommentsSystem() {
    try {
        // Import Firebase functions
        const { collection, addDoc, getDocs, query, orderBy, onSnapshot, serverTimestamp, doc, updateDoc, increment, getDoc, where } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const db = window.firebaseDb;
        const commentsCollection = collection(db, 'comments');
        
        // DOM elements
        const commentForm = document.getElementById('comment-form');
        const commentsList = document.getElementById('comments-list');
        const commentsCount = document.getElementById('comments-count');
        const commentsSort = document.getElementById('comments-sort');
        const commentsLoading = document.getElementById('comments-loading');
        const noComments = document.getElementById('no-comments');
        
        let currentSort = 'newest';
        let displayedCommentsCount = 0;
        let allComments = [];
        const COMMENTS_PER_PAGE = 5;
        
        // Load comments
        function loadComments() {
            const sortOrder = currentSort === 'newest' ? 'desc' : 'asc';
            const q = query(commentsCollection, orderBy('timestamp', sortOrder));
            
            onSnapshot(q, (snapshot) => {
                displayComments(snapshot.docs);
                commentsLoading.style.display = 'none';
            });
        }
        
        // Display comments
        function displayComments(docs) {
            allComments = docs;
            displayedCommentsCount = 0;
            const commentsContainer = commentsList.querySelector('.comments-items') || createCommentsContainer();
            commentsContainer.innerHTML = '';
            
            if (docs.length === 0) {
                noComments.style.display = 'block';
                commentsCount.textContent = '0';
                updateTotalComments(0);
                removeShowMoreButton();
                return;
            }
            
            noComments.style.display = 'none';
            commentsCount.textContent = docs.length;
            updateTotalComments(docs.length);
            updateReactionStats(docs);
            
            // Display initial comments
            displayMoreComments();
        }
        
        // Display more comments (5 at a time)
        function displayMoreComments() {
            const commentsContainer = commentsList.querySelector('.comments-items') || createCommentsContainer();
            const startIndex = displayedCommentsCount;
            const endIndex = Math.min(startIndex + COMMENTS_PER_PAGE, allComments.length);
            
            for (let i = startIndex; i < endIndex; i++) {
                const doc = allComments[i];
                const comment = doc.data();
                const commentElement = createCommentElement(comment, i, doc.id);
                commentsContainer.appendChild(commentElement);
                
                // Load replies for this comment after a short delay to ensure DOM is ready
                setTimeout(() => {
                    console.log('Loading replies for comment:', doc.id); // للتشخيص
                    loadRepliesForComment(doc.id);
                }, 200);
            }
            
            displayedCommentsCount = endIndex;
            
            // Update show more button
            updateShowMoreButton();
        }
        
        // Update show more button visibility
        function updateShowMoreButton() {
            const existingButton = commentsList.querySelector('.show-more-btn');
            
            if (displayedCommentsCount < allComments.length) {
                if (!existingButton) {
                    createShowMoreButton();
                } else {
                    const remainingComments = allComments.length - displayedCommentsCount;
                    const buttonText = remainingComments <= COMMENTS_PER_PAGE ? 
                        `عرض ${remainingComments} تعليق متبقي` : 
                        `عرض ${COMMENTS_PER_PAGE} تعليقات أخرى`;
                    existingButton.innerHTML = `<i class="fas fa-chevron-down"></i> ${buttonText}`;
                }
            } else {
                removeShowMoreButton();
            }
        }
        
        // Create show more button
        function createShowMoreButton() {
            const remainingComments = allComments.length - displayedCommentsCount;
            const buttonText = remainingComments <= COMMENTS_PER_PAGE ? 
                `عرض ${remainingComments} تعليق متبقي` : 
                `عرض ${COMMENTS_PER_PAGE} تعليقات أخرى`;
                
            const showMoreBtn = document.createElement('button');
            showMoreBtn.className = 'show-more-btn btn btn-secondary';
            showMoreBtn.innerHTML = `<i class="fas fa-chevron-down"></i> ${buttonText}`;
            
            showMoreBtn.addEventListener('click', function() {
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
                setTimeout(() => {
                    displayMoreComments();
                }, 300);
            });
            
            commentsList.appendChild(showMoreBtn);
        }
        
        // Remove show more button
        function removeShowMoreButton() {
            const existingButton = commentsList.querySelector('.show-more-btn');
            if (existingButton) {
                existingButton.remove();
            }
        }
        
        // Update total comments counter with animation
        function updateTotalComments(count) {
            const totalCommentsEl = document.getElementById('total-comments');
            if (totalCommentsEl) {
                animateCounter(totalCommentsEl, parseInt(totalCommentsEl.textContent) || 0, count);
            }
        }
        
        // Update reaction statistics
        function updateReactionStats(docs) {
            let totalLikes = 0;
            let totalThumbsUp = 0;
            
            docs.forEach(doc => {
                const comment = doc.data();
                if (comment.reactions) {
                    totalLikes += comment.reactions.like || 0;
                    totalThumbsUp += comment.reactions['thumbs-up'] || 0;
                }
            });
            
            // Update stats in header if elements exist
            const likesStatEl = document.querySelector('[data-stat="likes"]');
            const thumbsStatEl = document.querySelector('[data-stat="thumbs"]');
            
            if (likesStatEl) {
                animateCounter(likesStatEl, parseInt(likesStatEl.textContent) || 0, totalLikes);
            }
            if (thumbsStatEl) {
                animateCounter(thumbsStatEl, parseInt(thumbsStatEl.textContent) || 0, totalThumbsUp);
            }
        }
        
        // Animate counter
        function animateCounter(element, start, end) {
            const duration = 1000;
            const startTime = performance.now();
            
            const step = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const value = Math.floor(start + (end - start) * progress);
                element.textContent = value;
                
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            
            requestAnimationFrame(step);
        }
        
        // Create comments container
        function createCommentsContainer() {
            const container = document.createElement('div');
            container.className = 'comments-items';
            commentsList.appendChild(container);
            return container;
        }
        
        // Create comment element
        function createCommentElement(comment, index = 0, commentId) {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-item';
            commentDiv.setAttribute('data-aos', 'fade-up');
            commentDiv.setAttribute('data-aos-delay', (index * 100).toString());
            commentDiv.setAttribute('data-comment-id', commentId);
            commentDiv.dataset.authorName = comment.name;
            
            const timestamp = comment.timestamp ? new Date(comment.timestamp.seconds * 1000) : new Date();
            const timeAgo = getTimeAgo(timestamp);
            
            // Check if this is admin (يوسف جمعة)
            const isAdmin = isAdminUser(comment.name);
            
            // Generate avatar color based on name
            const avatarColor = generateAvatarColor(comment.name);
            const nameInitial = comment.name.charAt(0).toUpperCase();
            
            // Get reaction counts from Firebase data
            const likeCount = comment.reactions?.like || 0;
            const thumbsUpCount = comment.reactions?.['thumbs-up'] || 0;
            
            // Get user ID for tracking reactions (using localStorage for simplicity)
            const userId = getUserId();
            const hasLiked = comment.reactedUsers?.like?.includes(userId) || false;
            const hasThumbsUp = comment.reactedUsers?.['thumbs-up']?.includes(userId) || false;
            
            // Build avatar HTML based on admin status
            const avatarHTML = isAdmin ? `
                <div class="comment-avatar is-admin" style="--avatar-color: ${avatarColor}">
                    <div class="avatar-circle">
                        <img src="images/profile.jpg" alt="${escapeHtml(comment.name)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <span class="avatar-initial" style="display:none;">${nameInitial}</span>
                    </div>
                    <div class="avatar-status"></div>
                </div>
            ` : `
                <div class="comment-avatar" style="--avatar-color: ${avatarColor}">
                    <div class="avatar-circle">
                        <span class="avatar-initial">${nameInitial}</span>
                    </div>
                    <div class="avatar-status"></div>
                </div>
            `;
            
            // Build admin badge if applicable
            const adminBadge = isAdmin ? '<span class="admin-badge"><i class="fas fa-shield-alt"></i> مسؤول</span>' : '';
            
            commentDiv.innerHTML = `
                ${avatarHTML}
                <div class="comment-content">
                    <div class="comment-header">
                        <h4 class="comment-author ${isAdmin ? 'is-admin' : ''}">${adminBadge}${escapeHtml(comment.name)}</h4>
                        <span class="comment-time">${timeAgo}</span>
                    </div>
                    <div class="comment-text-wrapper">
                        <p class="comment-text">${escapeHtml(comment.text || comment.comment).replace(/\n/g, '<br>')}</p>
                        <div class="comment-reactions">
                            <button class="reaction-btn ${hasLiked ? 'active' : ''}" data-reaction="like" data-comment-id="${commentId}">
                                <i class="fas fa-heart"></i>
                                <span>${likeCount}</span>
                            </button>
                            <button class="reaction-btn ${hasThumbsUp ? 'active' : ''}" data-reaction="thumbs-up" data-comment-id="${commentId}">
                                <i class="fas fa-thumbs-up"></i>
                                <span>${thumbsUpCount}</span>
                            </button>
                            <button class="reply-btn" data-comment-id="${commentId}">
                                <i class="fas fa-reply"></i>
                                <span>رد</span>
                            </button>
                            <button class="show-replies-btn" data-comment-id="${commentId}" style="display: none;">
                                <i class="fas fa-comments"></i>
                                <span class="replies-count">0 ردود</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Add click event for reactions
            const reactionBtns = commentDiv.querySelectorAll('.reaction-btn');
            reactionBtns.forEach(btn => {
                btn.addEventListener('click', async function() {
                    const reactionType = this.getAttribute('data-reaction');
                    const commentId = this.getAttribute('data-comment-id');
                    await handleReaction(commentId, reactionType, this);
                });
            });
            
            // Add replies container first
            const repliesContainer = document.createElement('div');
            repliesContainer.className = 'replies-container';
            repliesContainer.setAttribute('data-comment-id', commentId);
            commentDiv.appendChild(repliesContainer);
            
            // Add click event for reply button
            const replyBtn = commentDiv.querySelector('.reply-btn');
            if (replyBtn) {
                replyBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const commentId = this.getAttribute('data-comment-id');
                    console.log('Reply button clicked for comment:', commentId); // للتشخيص
                    toggleReplyForm(commentId, commentDiv);
                });
            }
            
            // Add click event for show replies button
            const showRepliesBtn = commentDiv.querySelector('.show-replies-btn');
            if (showRepliesBtn) {
                showRepliesBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const commentId = this.getAttribute('data-comment-id');
                    toggleRepliesVisibility(commentId, commentDiv);
                });
            }
            
            return commentDiv;
        }
        
        // Toggle reply form (now opens modal)
        function toggleReplyForm(commentId, commentDiv) {
            console.log('Opening reply modal for comment:', commentId);
            
            // Get comment author name from dataset to avoid badge text
            const authorName = commentDiv?.dataset?.authorName || 'التعليق';
            
            // Open reply modal
            openReplyModal(commentId, authorName, 'comment');
        }
        
        // Create reply form
        function createReplyForm(parentCommentId) {
            const formDiv = document.createElement('div');
            formDiv.className = 'reply-form';
            formDiv.innerHTML = `
                <div class="reply-form-header">
                    <h4>اكتب ردك</h4>
                    <button class="close-reply-form" type="button">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <form class="reply-form-content">
                    <div class="form-group">
                        <input type="text" name="name" required placeholder="اسمك" class="reply-name">
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="البريد الإلكتروني (اختياري)" class="reply-email">
                    </div>
                    <div class="form-group">
                        <textarea name="reply" required rows="3" placeholder="اكتب ردك هنا..." class="reply-text"></textarea>
                    </div>
                    <div class="reply-form-actions">
                        <button type="submit" class="btn btn-primary reply-submit">
                            <i class="fas fa-paper-plane"></i>
                            إرسال الرد
                        </button>
                        <button type="button" class="btn btn-secondary cancel-reply">
                            إلغاء
                        </button>
                    </div>
                </form>
            `;
            
            // Add event listeners
            const closeBtn = formDiv.querySelector('.close-reply-form');
            const cancelBtn = formDiv.querySelector('.cancel-reply');
            const form = formDiv.querySelector('.reply-form-content');
            
            closeBtn.addEventListener('click', () => formDiv.remove());
            cancelBtn.addEventListener('click', () => formDiv.remove());
            
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                await handleReplySubmit(e, parentCommentId, formDiv);
            });
            
            return formDiv;
        }
        
        // Handle reply submission
        async function handleReplySubmit(e, parentCommentId, formDiv) {
            const submitBtn = formDiv.querySelector('.reply-submit');
            const originalText = submitBtn.innerHTML;
            
            try {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
                
                const formData = new FormData(e.target);
                const replyData = {
                    name: formData.get('name').trim(),
                    email: formData.get('email').trim(),
                    reply: formData.get('reply').trim(),
                    timestamp: serverTimestamp(),
                    parentCommentId: parentCommentId,
                    approved: true
                };
                
                // Validation
                if (!replyData.name || !replyData.reply) {
                    throw new Error('الرجاء ملء جميع الحقول المطلوبة');
                }
                
                if (replyData.reply.length < 3) {
                    throw new Error('الرد قصير جداً');
                }
                
                if (replyData.reply.length > 500) {
                    throw new Error('الرد طويل جداً (الحد الأقصى 500 حرف)');
                }
                
                // Save reply to Firebase
                await addDoc(collection(db, 'replies'), replyData);
                
                // Remove form
                formDiv.remove();
                showNotification('تم إرسال الرد بنجاح!');
                
                // Reload replies for this comment
                console.log('Reloading replies after submission for:', parentCommentId); // للتشخيص
                await loadRepliesForComment(parentCommentId);
                
            } catch (error) {
                console.error('Error adding reply:', error);
                showNotification('حدث خطأ أثناء إرسال الرد: ' + error.message);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        }
        
        // Load replies for a specific comment
        async function loadRepliesForComment(commentId) {
            console.log('loadRepliesForComment called for:', commentId); // للتشخيص
            
            try {
                // جلب جميع الردود للتعليق
                const repliesQuery = query(
                    collection(db, 'replies'), 
                    where('parentCommentId', '==', commentId)
                );
                
                console.log('Executing replies query...'); // للتشخيص
                const repliesSnapshot = await getDocs(repliesQuery);
                console.log('Total replies found:', repliesSnapshot.docs.length); // للتشخيص
                
                let replies = repliesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                // تصفية الردود لإظهار فقط الردود المباشرة (بدون parentReplyId)
                const nestedRepliesCount = replies.filter(r => r.parentReplyId).length;
                replies = replies.filter(reply => !reply.parentReplyId);
                console.log('Direct replies:', replies.length, '| Nested replies (filtered out):', nestedRepliesCount); // للتشخيص
                
                // Sort replies manually by timestamp
                replies.sort((a, b) => {
                    const timeA = a.timestamp ? a.timestamp.seconds : 0;
                    const timeB = b.timestamp ? b.timestamp.seconds : 0;
                    return timeA - timeB; // ascending order
                });
                
                const repliesContainer = document.querySelector(`[data-comment-id="${commentId}"].replies-container`);
                console.log('Replies container found:', !!repliesContainer); // للتشخيص
                
                if (repliesContainer) {
                    displayReplies(replies, repliesContainer, commentId);
                } else {
                    console.error('Replies container not found for comment:', commentId);
                }
                
            } catch (error) {
                console.error('Error loading replies for comment', commentId, ':', error);
                // Show user-friendly message with retry option
                const repliesContainer = document.querySelector(`[data-comment-id="${commentId}"].replies-container`);
                if (repliesContainer) {
                    repliesContainer.innerHTML = `
                        <div class="replies-error">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span>حدث خطأ في تحميل الردود</span>
                            <button class="retry-replies-btn" onclick="window.loadRepliesForComment('${commentId}')">
                                <i class="fas fa-redo"></i>
                                إعادة المحاولة
                            </button>
                        </div>
                    `;
                }
            }
        }
        
        // Display replies
        function displayReplies(replies, container, parentCommentId) {
            console.log('displayReplies called with', replies.length, 'replies'); // للتشخيص
            container.innerHTML = '';
            
            // تحديث زر عرض الردود في أزرار التفاعل
            const commentElement = container.closest('.comment-item');
            const showRepliesBtn = commentElement?.querySelector('.show-replies-btn');
            if (showRepliesBtn) {
                if (replies.length > 0) {
                    const repliesCount = showRepliesBtn.querySelector('.replies-count');
                    repliesCount.textContent = `${replies.length} ${replies.length === 1 ? 'رد' : 'ردود'}`;
                    showRepliesBtn.style.display = 'flex';
                    showRepliesBtn.setAttribute('data-replies-visible', 'false');
                } else {
                    showRepliesBtn.style.display = 'none';
                }
            }
            
            if (replies.length === 0) {
                console.log('No replies to display'); // للتشخيص
                return;
            }
            
            const repliesList = document.createElement('div');
            repliesList.className = 'replies-list';
            repliesList.setAttribute('data-comment-id', parentCommentId);
            
            // دائماً إخفاء الردود افتراضياً
            repliesList.style.display = 'none';
            
            replies.forEach((reply, index) => {
                const replyElement = createReplyElement(reply, index);
                repliesList.appendChild(replyElement);
            });
            
            container.appendChild(repliesList);
            console.log('Replies created and hidden, awaiting user click on show button');
        }
        
        // Toggle replies visibility من زر التفاعل
        function toggleRepliesVisibility(commentId, commentElement) {
            const repliesContainer = commentElement.querySelector('.replies-container');
            const repliesList = repliesContainer?.querySelector('.replies-list');
            const showRepliesBtn = commentElement.querySelector('.show-replies-btn');
            
            if (!repliesList || !showRepliesBtn) return;
            
            const isVisible = showRepliesBtn.getAttribute('data-replies-visible') === 'true';
            const icon = showRepliesBtn.querySelector('i.fa-comments');
            
            if (isVisible) {
                // إخفاء الردود
                repliesList.style.opacity = '0';
                repliesList.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    repliesList.style.display = 'none';
                }, 300);
                showRepliesBtn.setAttribute('data-replies-visible', 'false');
                icon.className = 'fas fa-comments';
            } else {
                // إظهار الردود
                repliesList.style.display = 'flex';
                repliesList.style.flexDirection = 'column';
                repliesList.style.gap = '1rem';
                requestAnimationFrame(() => {
                    repliesList.style.opacity = '1';
                    repliesList.style.transform = 'translateY(0)';
                    repliesList.style.transition = 'all 0.3s ease';
                });
                showRepliesBtn.setAttribute('data-replies-visible', 'true');
                icon.className = 'fas fa-comments active';
            }
        }
        
        // Create reply element
        function createReplyElement(reply, index = 0, depth = 0) {
            const replyDiv = document.createElement('div');
            replyDiv.className = 'reply-item';
            replyDiv.dataset.authorName = reply.name;
            
            // إضافة خاصية العمق مع أيقونة مناسبة
            if (depth > 0) {
                replyDiv.setAttribute('data-depth', depth);
                // إضافة class لتمييز الردود المتداخلة
                replyDiv.classList.add('is-nested-reply');
            }
            
            // تعطيل AOS مؤقتاً للتأكد من الظهور
            // replyDiv.setAttribute('data-aos', 'fade-up');
            // replyDiv.setAttribute('data-aos-delay', (index * 100).toString());
            
            const timestamp = reply.timestamp ? new Date(reply.timestamp.seconds * 1000) : new Date();
            const timeAgo = getTimeAgo(timestamp);
            
            // Check if this is admin (يوسف جمعة)
            const isAdmin = isAdminUser(reply.name);
            
            // Generate avatar color based on name
            const avatarColor = generateAvatarColor(reply.name);
            const nameInitial = reply.name.charAt(0).toUpperCase();
            
            // Build avatar HTML based on admin status
            const avatarHTML = isAdmin ? `
                <div class="reply-avatar is-admin" style="--avatar-color: ${avatarColor}">
                    <div class="avatar-circle">
                        <img src="images/profile.jpg" alt="${escapeHtml(reply.name)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <span class="avatar-initial" style="display:none;">${nameInitial}</span>
                    </div>
                </div>
            ` : `
                <div class="reply-avatar" style="--avatar-color: ${avatarColor}">
                    <div class="avatar-circle">
                        <span class="avatar-initial">${nameInitial}</span>
                    </div>
                </div>
            `;
            
            // Build admin badge if applicable
            const adminBadge = isAdmin ? '<span class="admin-badge"><i class="fas fa-shield-alt"></i> مسؤول</span>' : '';
            
            // إنشاء wrapper لمحتوى الرد الرئيسي
            const replyMainContent = document.createElement('div');
            replyMainContent.className = 'reply-main-wrapper';
            replyMainContent.innerHTML = `
                ${avatarHTML}
                <div class="reply-content">
                    <div class="reply-header">
                        <h5 class="reply-author ${isAdmin ? 'is-admin' : ''}">${adminBadge}${escapeHtml(reply.name)}</h5>
                        <span class="reply-time">${timeAgo}</span>
                    </div>
                    <p class="reply-text">${escapeHtml(reply.reply).replace(/\n/g, '<br>')}</p>
                    <div class="reply-actions">
                        <button class="nested-reply-btn" data-reply-id="${reply.id}">
                            <i class="fas fa-reply"></i>
                            <span>رد</span>
                        </button>
                    </div>
                </div>
            `;
            
            replyDiv.appendChild(replyMainContent);
            
            // Add nested replies container
            const nestedRepliesContainer = document.createElement('div');
            nestedRepliesContainer.className = 'nested-replies-container';
            nestedRepliesContainer.setAttribute('data-reply-id', reply.id);
            replyDiv.appendChild(nestedRepliesContainer);
            
            // Add click event for nested reply button
            const nestedReplyBtn = replyDiv.querySelector('.nested-reply-btn');
            if (nestedReplyBtn) {
                nestedReplyBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const replyId = this.getAttribute('data-reply-id');
                    const parentCommentId = reply.parentCommentId;
                    console.log('Nested reply button clicked for reply:', replyId);
                    toggleNestedReplyForm(replyId, parentCommentId, replyDiv);
                });
            }
            
            // Load nested replies if any
            loadNestedReplies(reply.id, nestedRepliesContainer);
            
            return replyDiv;
        }
        
        // Toggle nested reply form (now opens modal)
        function toggleNestedReplyForm(replyId, parentCommentId, replyDiv) {
            console.log('Opening reply modal for reply:', replyId);
            
            // Get reply author name from dataset to avoid badge text
            const authorName = replyDiv?.dataset?.authorName || 'الرد';
            
            // Open reply modal
            openReplyModal(replyId, authorName, 'reply', parentCommentId);
        }
        
        // Create nested reply form
        function createNestedReplyForm(parentReplyId, parentCommentId) {
            const formDiv = document.createElement('div');
            formDiv.className = 'nested-reply-form reply-form';
            formDiv.innerHTML = `
                <div class="reply-form-header">
                    <h4>اكتب ردك</h4>
                    <button class="close-reply-form" type="button">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <form class="reply-form-content">
                    <div class="form-group">
                        <input type="text" name="name" required placeholder="اسمك" class="reply-name">
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="البريد الإلكتروني (اختياري)" class="reply-email">
                    </div>
                    <div class="form-group">
                        <textarea name="reply" required rows="3" placeholder="اكتب ردك هنا..." class="reply-text"></textarea>
                    </div>
                    <div class="reply-form-actions">
                        <button type="submit" class="btn btn-primary reply-submit">
                            <i class="fas fa-paper-plane"></i>
                            إرسال الرد
                        </button>
                        <button type="button" class="btn btn-secondary cancel-reply">
                            إلغاء
                        </button>
                    </div>
                </form>
            `;
            
            // Add event listeners
            const closeBtn = formDiv.querySelector('.close-reply-form');
            const cancelBtn = formDiv.querySelector('.cancel-reply');
            const form = formDiv.querySelector('.reply-form-content');
            
            closeBtn.addEventListener('click', () => formDiv.remove());
            cancelBtn.addEventListener('click', () => formDiv.remove());
            
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                await handleNestedReplySubmit(e, parentReplyId, parentCommentId, formDiv);
            });
            
            return formDiv;
        }
        
        // Handle nested reply submission
        async function handleNestedReplySubmit(e, parentReplyId, parentCommentId, formDiv) {
            const submitBtn = formDiv.querySelector('.reply-submit');
            const originalText = submitBtn.innerHTML;
            
            try {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
                
                const formData = new FormData(e.target);
                const replyData = {
                    name: formData.get('name').trim(),
                    email: formData.get('email').trim(),
                    reply: formData.get('reply').trim(),
                    timestamp: serverTimestamp(),
                    parentCommentId: parentCommentId,
                    parentReplyId: parentReplyId, // الرد الذي يتم الرد عليه
                    approved: true
                };
                
                // Validation
                if (!replyData.name || !replyData.reply) {
                    throw new Error('الرجاء ملء جميع الحقول المطلوبة');
                }
                
                if (replyData.reply.length < 3) {
                    throw new Error('الرد قصير جداً');
                }
                
                if (replyData.reply.length > 500) {
                    throw new Error('الرد طويل جداً (الحد الأقصى 500 حرف)');
                }
                
                // Save reply to Firebase
                await addDoc(collection(db, 'replies'), replyData);
                
                // Remove form
                formDiv.remove();
                showNotification('تم إرسال الرد بنجاح!');
                
                // Reload nested replies
                console.log('Reloading nested replies for:', parentReplyId);
                const nestedContainer = document.querySelector(`[data-reply-id="${parentReplyId}"].nested-replies-container`);
                if (nestedContainer) {
                    loadNestedReplies(parentReplyId, nestedContainer);
                }
                
            } catch (error) {
                console.error('Error adding nested reply:', error);
                showNotification('حدث خطأ أثناء إرسال الرد: ' + error.message);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        }
        
        // Load nested replies
        async function loadNestedReplies(parentReplyId, container) {
            try {
                const nestedRepliesQuery = query(
                    collection(db, 'replies'),
                    where('parentReplyId', '==', parentReplyId)
                );
                
                const snapshot = await getDocs(nestedRepliesQuery);
                let nestedReplies = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                // Sort by timestamp
                nestedReplies.sort((a, b) => {
                    const timeA = a.timestamp ? a.timestamp.seconds : 0;
                    const timeB = b.timestamp ? b.timestamp.seconds : 0;
                    return timeA - timeB;
                });
                
                // Clear container and display nested replies
                container.innerHTML = '';
                
                // حساب العمق من خلال عد الـ nested-reply في العنصر الأب
                const parentElement = container.closest('.reply-item');
                let currentDepth = 0;
                let checkElement = parentElement;
                while (checkElement && checkElement.classList.contains('nested-reply')) {
                    currentDepth++;
                    checkElement = checkElement.parentElement?.closest('.reply-item');
                }
                
                nestedReplies.forEach((nestedReply, index) => {
                    const nestedReplyElement = createReplyElement(nestedReply, index, currentDepth + 1);
                    nestedReplyElement.classList.add('nested-reply');
                    container.appendChild(nestedReplyElement);
                });
                
                console.log(`Loaded ${nestedReplies.length} nested replies for ${parentReplyId}`);
                
            } catch (error) {
                console.error('Error loading nested replies:', error);
            }
        }
        
        // Get or create user ID for tracking reactions
        function getUserId() {
            let userId = localStorage.getItem('portfolio_user_id');
            if (!userId) {
                userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                localStorage.setItem('portfolio_user_id', userId);
            }
            return userId;
        }
        
        // Handle reaction click
        async function handleReaction(commentId, reactionType, buttonElement) {
            try {
                const userId = getUserId();
                const commentRef = doc(db, 'comments', commentId);
                const commentSnap = await getDoc(commentRef);
                
                if (!commentSnap.exists()) {
                    throw new Error('التعليق غير موجود');
                }
                
                const commentData = commentSnap.data();
                const reactedUsers = commentData.reactedUsers || { like: [], 'thumbs-up': [] };
                const reactions = commentData.reactions || { like: 0, 'thumbs-up': 0 };
                
                const hasReacted = reactedUsers[reactionType]?.includes(userId) || false;
                const countSpan = buttonElement.querySelector('span');
                
                if (hasReacted) {
                    // Remove reaction
                    reactedUsers[reactionType] = reactedUsers[reactionType].filter(id => id !== userId);
                    reactions[reactionType] = Math.max(0, reactions[reactionType] - 1);
                    buttonElement.classList.remove('active');
                } else {
                    // Add reaction
                    if (!reactedUsers[reactionType]) {
                        reactedUsers[reactionType] = [];
                    }
                    reactedUsers[reactionType].push(userId);
                    reactions[reactionType] = reactions[reactionType] + 1;
                    buttonElement.classList.add('active');
                }
                
                // Update Firebase
                await updateDoc(commentRef, {
                    reactions: reactions,
                    reactedUsers: reactedUsers
                });
                
                // Update UI immediately
                countSpan.textContent = reactions[reactionType];
                
                // Show success message
                const message = !hasReacted ? 
                    (reactionType === 'like' ? 'تم إضافة الإعجاب! ❤️' : 'تم إضافة التقييم! 👍') :
                    (reactionType === 'like' ? 'تم إزالة الإعجاب' : 'تم إزالة التقييم');
                showNotification(message);
                
            } catch (error) {
                console.error('Error updating reaction:', error);
                showNotification('حدث خطأ أثناء تحديث التفاعل');
            }
        }
        
        // Create floating reaction effect
        function createFloatingReaction(buttonElement, reactionType, isAdding) {
            const rect = buttonElement.getBoundingClientRect();
            const floatingElement = document.createElement('div');
            
            // Set emoji based on reaction type
            const emoji = reactionType === 'like' ? '❤️' : '👍';
            const action = isAdding ? '+1' : '-1';
            
            floatingElement.innerHTML = `<span style="margin-right: 5px;">${emoji}</span>${action}`;
            floatingElement.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top}px;
                font-size: 1.2rem;
                font-weight: bold;
                color: ${isAdding ? (reactionType === 'like' ? '#FF6B6B' : '#4ECDC4') : '#666'};
                pointer-events: none;
                z-index: 10000;
                transform: translateX(-50%);
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                opacity: 1;
            `;
            
            document.body.appendChild(floatingElement);
            
            // Animate upward and fade out
            requestAnimationFrame(() => {
                floatingElement.style.transform = 'translateX(-50%) translateY(-50px) scale(1.2)';
                floatingElement.style.opacity = '0';
            });
            
            // Remove element after animation
            setTimeout(() => {
                if (floatingElement.parentNode) {
                    floatingElement.parentNode.removeChild(floatingElement);
                }
            }, 800);
        }
        
        // Generate avatar color based on name
        function generateAvatarColor(name) {
            const colors = [
                '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
                '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
            ];
            let hash = 0;
            for (let i = 0; i < name.length; i++) {
                hash = name.charCodeAt(i) + ((hash << 5) - hash);
            }
            return colors[Math.abs(hash) % colors.length];
        }
        
        // Submit comment
        commentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = commentForm.querySelector('.comment-submit');
            const originalText = submitBtn.innerHTML;
            
            try {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
                
                const formData = new FormData(commentForm);
                
                // Generate a simple user ID for unauthenticated users
                const userId = 'user-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
                
                const commentData = {
                    name: formData.get('name').trim(),
                    email: formData.get('email').trim(),
                    text: formData.get('comment').trim(), // Changed from 'comment' to 'text'
                    timestamp: serverTimestamp(),
                    userId: userId, // Add generated user ID
                    approved: true, // Auto-approve for now
                    reactions: {
                        like: 0,
                        'thumbs-up': 0
                    },
                    reactedUsers: {
                        like: [],
                        'thumbs-up': []
                    }
                };
                
                // Validation
                if (!commentData.name || !commentData.text) {
                    throw new Error('الرجاء ملء جميع الحقول المطلوبة');
                }
                
                if (commentData.text.length < 3) {
                    throw new Error('التعليق قصير جداً');
                }
                
                if (commentData.text.length > 1000) {
                    throw new Error('التعليق طويل جداً (الحد الأقصى 1000 حرف)');
                }
                
                await addDoc(commentsCollection, commentData);
                
                // Reset form
                commentForm.reset();
                showNotification('تم إرسال التعليق بنجاح!');
                
            } catch (error) {
                console.error('Error adding comment:', error);
                showNotification('حدث خطأ أثناء إرسال التعليق: ' + error.message);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
        
        // Sort comments
        commentsSort.addEventListener('change', (e) => {
            currentSort = e.target.value;
            displayedCommentsCount = 0;
            removeShowMoreButton();
            loadComments();
        });
        
        // Character counter for comment textarea
        const commentTextarea = document.getElementById('comment-text');
        const charCounter = document.createElement('div');
        charCounter.className = 'char-counter';
        charCounter.textContent = '0/1000';
        commentTextarea.parentNode.appendChild(charCounter);
        
        commentTextarea.addEventListener('input', (e) => {
            const length = e.target.value.length;
            charCounter.textContent = `${length}/1000`;
            charCounter.style.color = length > 1000 ? '#e74c3c' : '#666';
        });
        
        // Make loadRepliesForComment available globally for retry button
        window.loadRepliesForComment = loadRepliesForComment;
        
        // Add function to force show replies
        window.forceShowReplies = function(commentId) {
            const repliesContainer = document.querySelector(`[data-comment-id="${commentId}"].replies-container`);
            if (repliesContainer) {
                const repliesList = repliesContainer.querySelector('.replies-list');
                const toggleIcon = repliesContainer.querySelector('.replies-toggle-icon');
                
                if (repliesList) {
                    repliesList.style.display = 'block';
                    repliesList.style.opacity = '1';
                    repliesList.style.transform = 'translateY(0)';
                    repliesList.setAttribute('data-visible', 'true');
                    
                    if (toggleIcon) {
                        toggleIcon.className = 'fas fa-chevron-up replies-toggle-icon';
                    }
                    
                    console.log('Forced replies to show for comment:', commentId);
                }
            }
        };
        
        // ===== REPLY MODAL FUNCTIONS =====
        let currentReplyTarget = null;

        // Open reply modal
        window.openReplyModal = function(targetId, targetName, targetType, parentCommentId = null) {
            const replyModal = document.getElementById('reply-modal');
            const replyToName = document.getElementById('reply-to-name');
            const modalForm = document.getElementById('reply-modal-form');

            if (!replyModal || !replyToName || !modalForm) {
                return;
            }

            currentReplyTarget = {
                id: targetId,
                name: targetName,
                type: targetType,
                parentCommentId: parentCommentId
            };

            replyToName.textContent = targetName;

            modalForm.reset();
            const charCounter = document.getElementById('reply-char-counter');
            if (charCounter) {
                charCounter.textContent = '0/500';
                charCounter.style.color = 'var(--text-light)';
            }

            replyModal.style.display = 'flex';
            replyModal.style.alignItems = 'center';
            replyModal.style.justifyContent = 'center';
            document.body.style.overflow = 'hidden';

            setTimeout(() => {
                const nameInput = document.getElementById('reply-modal-name');
                if (nameInput) {
                    nameInput.focus();
                }
            }, 200);
        };

        function closeReplyModal(resetTarget = true) {
            const replyModal = document.getElementById('reply-modal');
            if (!replyModal) {
                return;
            }

            replyModal.style.display = 'none';
            document.body.style.overflow = 'auto';

            if (resetTarget) {
                currentReplyTarget = null;
            }
        }

        const replyModalClose = document.querySelector('.reply-modal-close');
        if (replyModalClose) {
            replyModalClose.addEventListener('click', () => closeReplyModal(true));
        }

        const replyModalCancel = document.querySelector('.reply-modal-cancel');
        if (replyModalCancel) {
            replyModalCancel.addEventListener('click', () => closeReplyModal(true));
        }

        const replyModalForm = document.getElementById('reply-modal-form');
        const replyModalTextarea = document.getElementById('reply-modal-text');
        const replyCharCounter = document.getElementById('reply-char-counter');

        if (replyModalTextarea && replyCharCounter) {
            replyModalTextarea.addEventListener('input', (e) => {
                const length = e.target.value.length;
                replyCharCounter.textContent = `${length}/500`;
                replyCharCounter.style.color = length > 500 ? '#e74c3c' : 'var(--text-light)';
            });
        }

        if (replyModalForm) {
            replyModalForm.addEventListener('submit', async (e) => {
                e.preventDefault();

                if (!currentReplyTarget) {
                    showNotification('حدث خطأ: لم يتم تحديد الهدف');
                    return;
                }

                const submitBtn = replyModalForm.querySelector('.reply-modal-submit');
                const originalText = submitBtn ? submitBtn.innerHTML : '';
                const targetInfo = { ...currentReplyTarget };

                try {
                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
                    }

                    const formData = new FormData(replyModalForm);
                    const replyName = (formData.get('name') || '').toString().trim();
                    const replyEmail = (formData.get('email') || '').toString().trim();
                    const replyText = (formData.get('reply') || '').toString().trim();

                    const replyData = {
                        name: replyName,
                        email: replyEmail,
                        reply: replyText,
                        timestamp: serverTimestamp(),
                        approved: true
                    };

                    if (targetInfo.type === 'comment') {
                        replyData.parentCommentId = targetInfo.id;
                    } else {
                        replyData.parentCommentId = targetInfo.parentCommentId;
                        replyData.parentReplyId = targetInfo.id;
                    }

                    if (!replyData.name || !replyData.reply) {
                        throw new Error('الرجاء ملء جميع الحقول المطلوبة');
                    }

                    if (replyData.reply.length < 3) {
                        throw new Error('الرد قصير جداً');
                    }

                    if (replyData.reply.length > 500) {
                        throw new Error('الرد طويل جداً (الحد الأقصى 500 حرف)');
                    }

                    await addDoc(collection(db, 'replies'), replyData);

                    closeReplyModal(true);
                    showNotification('تم إرسال الرد بنجاح! 💬');

                    if (targetInfo.type === 'comment') {
                        await loadRepliesForComment(targetInfo.id);
                    } else if (targetInfo.parentCommentId) {
                        await loadRepliesForComment(targetInfo.parentCommentId);
                    }

                } catch (error) {
                    console.error('Error submitting reply:', error);
                    showNotification('حدث خطأ: ' + error.message);
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                    }
                    currentReplyTarget = null;
                }
            });
        }

        const replyModal = document.getElementById('reply-modal');
        if (replyModal) {
            replyModal.addEventListener('click', function(e) {
                if (e.target === replyModal) {
                    closeReplyModal(true);
                }
            });
        }
        
        // Initialize
        loadComments();
        
    } catch (error) {
        console.error('Error setting up comments system:', error);
        commentsLoading.innerHTML = '<p style="color: #e74c3c;">حدث خطأ في تحميل نظام التعليقات</p>';
    }
}

// Utility function for time ago
function getTimeAgo(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
        return 'منذ لحظات';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `منذ ${minutes} دقيقة`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `منذ ${hours} ساعة`;
    } else if (diffInSeconds < 2592000) {
        const days = Math.floor(diffInSeconds / 86400);
        return `منذ ${days} يوم`;
    } else {
        return date.toLocaleDateString('ar-EG');
    }
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Utility function to check if user is admin
function isAdminUser(name) {
    if (!name || typeof name !== 'string') {
        return false;
    }
    // List of admin names (can be expanded)
    const adminNames = [
        'يوسف جمعة',
        'يوسف أحمد محمد',
        'Yousef Gomaa',
        'Youssef Gomaa'
    ];
    
    // Normalize the name by trimming and converting to lowercase for comparison
    const normalizedName = name.trim();
    
    return adminNames.some(adminName => 
        normalizedName === adminName || 
        normalizedName.includes('يوسف') && normalizedName.includes('جمعة')
    );
}

// ===== ADMIN PANEL SYSTEM =====
let yKeyPressCount = 0;
let yKeyPressTimer = null;
const Y_KEY_REQUIRED_PRESSES = 5;
const Y_KEY_TIMEOUT = 2000; // 2 seconds timeout

// Track Y key presses
document.addEventListener('keydown', function(e) {
    // Check for 'y' or 'Y' key (keyCode 89 or key 'y')
    if (e.key.toLowerCase() === 'y') {
        yKeyPressCount++;
        
        // Clear existing timer
        if (yKeyPressTimer) {
            clearTimeout(yKeyPressTimer);
        }
        
        // Reset counter after timeout
        yKeyPressTimer = setTimeout(() => {
            yKeyPressCount = 0;
        }, Y_KEY_TIMEOUT);
        
        // Show visual feedback
        if (yKeyPressCount > 0) {
            showYKeyProgress(yKeyPressCount);
        }
        
        // Open admin panel if 5 presses reached
        if (yKeyPressCount >= Y_KEY_REQUIRED_PRESSES) {
            yKeyPressCount = 0;
            clearTimeout(yKeyPressTimer);
            removeYKeyProgress();
            openAdminPanel();
        }
    }
});

// Show Y key press progress
function showYKeyProgress(count) {
    let progressIndicator = document.getElementById('y-key-progress');
    
    if (!progressIndicator) {
        progressIndicator = document.createElement('div');
        progressIndicator.id = 'y-key-progress';
        progressIndicator.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(79, 70, 229, 0.95);
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            z-index: 9999;
            font-weight: 600;
            font-size: 0.95rem;
            box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
            transition: all 0.3s ease;
            animation: bounceIn 0.3s ease;
        `;
        document.body.appendChild(progressIndicator);
    }
    
    const remaining = Y_KEY_REQUIRED_PRESSES - count;
    progressIndicator.innerHTML = `
        <i class="fas fa-keyboard"></i>
        ${remaining === 0 ? 'فتح لوحة الإدارة...' : `اضغط Y ${remaining} مرات أخرى`}
        <span style="margin-right: 0.5rem;">${'🔑'.repeat(count)}</span>
    `;
    
    // Scale animation
    progressIndicator.style.transform = 'translateX(-50%) scale(1.1)';
    setTimeout(() => {
        progressIndicator.style.transform = 'translateX(-50%) scale(1)';
    }, 200);
}

// Remove Y key progress indicator
function removeYKeyProgress() {
    const progressIndicator = document.getElementById('y-key-progress');
    if (progressIndicator) {
        progressIndicator.style.opacity = '0';
        progressIndicator.style.transform = 'translateX(-50%) scale(0.8)';
        setTimeout(() => {
            progressIndicator.remove();
        }, 300);
    }
}

// Open admin panel
function openAdminPanel() {
    const adminModal = document.getElementById('admin-modal');
    if (adminModal) {
        adminModal.style.display = 'flex';
        adminModal.style.alignItems = 'center';
        adminModal.style.justifyContent = 'center';
        document.body.style.overflow = 'hidden';
        
        // Load admin data
        initializeAdminPanel();
        
        showNotification('مرحباً بك في لوحة الإدارة! 🛡️');
    }
}

// Close admin panel
function closeAdminPanel() {
    const adminModal = document.getElementById('admin-modal');
    if (adminModal) {
        adminModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Initialize admin panel
async function initializeAdminPanel() {
    // Setup close button
    const closeBtn = document.querySelector('.admin-modal-close');
    if (closeBtn) {
        closeBtn.onclick = closeAdminPanel;
    }
    
    // Setup tab switching
    const tabBtns = document.querySelectorAll('.admin-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchAdminTab(tabName);
        });
    });
    
    // Setup search
    const commentsSearch = document.getElementById('admin-comments-search');
    const repliesSearch = document.getElementById('admin-replies-search');
    
    if (commentsSearch) {
        commentsSearch.addEventListener('input', (e) => {
            filterAdminItems('comments', e.target.value);
        });
    }
    
    if (repliesSearch) {
        repliesSearch.addEventListener('input', (e) => {
            filterAdminItems('replies', e.target.value);
        });
    }
    
    // Load data
    await loadAdminComments();
    await loadAdminReplies();
}

// Switch admin tab
function switchAdminTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabName) {
            btn.classList.add('active');
        }
    });
    
    // Update tab content
    document.querySelectorAll('.admin-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const targetTab = document.getElementById(`admin-${tabName}-tab`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

// Load admin comments
async function loadAdminComments() {
    if (!window.firebaseDb) {
        console.error('Firebase not initialized');
        return;
    }
    
    try {
        const { collection, getDocs, query, orderBy } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        const db = window.firebaseDb;
        
        const commentsQuery = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
        const snapshot = await getDocs(commentsQuery);
        
        const commentsList = document.getElementById('admin-comments-list');
        const commentsCount = document.getElementById('admin-comments-count');
        
        if (commentsCount) {
            commentsCount.textContent = snapshot.docs.length;
        }
        
        if (snapshot.docs.length === 0) {
            commentsList.innerHTML = `
                <div class="admin-no-items">
                    <i class="fas fa-comments"></i>
                    <p>لا توجد تعليقات بعد</p>
                </div>
            `;
            return;
        }
        
        commentsList.innerHTML = '';
        snapshot.docs.forEach(doc => {
            const comment = doc.data();
            const commentElement = createAdminCommentElement(doc.id, comment);
            commentsList.appendChild(commentElement);
        });
        
    } catch (error) {
        console.error('Error loading admin comments:', error);
        document.getElementById('admin-comments-list').innerHTML = `
            <div class="admin-no-items">
                <i class="fas fa-exclamation-triangle"></i>
                <p>حدث خطأ في تحميل التعليقات</p>
            </div>
        `;
    }
}

// Load admin replies
async function loadAdminReplies() {
    if (!window.firebaseDb) {
        console.error('Firebase not initialized');
        return;
    }
    
    try {
        const { collection, getDocs, query, orderBy } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        const db = window.firebaseDb;
        
        const repliesQuery = query(collection(db, 'replies'), orderBy('timestamp', 'desc'));
        const snapshot = await getDocs(repliesQuery);
        
        const repliesList = document.getElementById('admin-replies-list');
        const repliesCount = document.getElementById('admin-replies-count');
        
        if (repliesCount) {
            repliesCount.textContent = snapshot.docs.length;
        }
        
        if (snapshot.docs.length === 0) {
            repliesList.innerHTML = `
                <div class="admin-no-items">
                    <i class="fas fa-reply-all"></i>
                    <p>لا توجد ردود بعد</p>
                </div>
            `;
            return;
        }
        
        repliesList.innerHTML = '';
        snapshot.docs.forEach(doc => {
            const reply = doc.data();
            const replyElement = createAdminReplyElement(doc.id, reply);
            repliesList.appendChild(replyElement);
        });
        
    } catch (error) {
        console.error('Error loading admin replies:', error);
        document.getElementById('admin-replies-list').innerHTML = `
            <div class="admin-no-items">
                <i class="fas fa-exclamation-triangle"></i>
                <p>حدث خطأ في تحميل الردود</p>
            </div>
        `;
    }
}

// Create admin comment element
function createAdminCommentElement(id, comment) {
    const div = document.createElement('div');
    div.className = 'admin-item';
    div.setAttribute('data-id', id);
    div.setAttribute('data-type', 'comment');
    div.setAttribute('data-search-text', `${comment.name} ${comment.email || ''} ${comment.text || comment.comment}`.toLowerCase());
    
    const timestamp = comment.timestamp ? new Date(comment.timestamp.seconds * 1000) : new Date();
    const dateStr = timestamp.toLocaleString('ar-EG');
    
    const likeCount = comment.reactions?.like || 0;
    const thumbsUpCount = comment.reactions?.['thumbs-up'] || 0;
    
    div.innerHTML = `
        <div class="admin-item-header">
            <div class="admin-item-info">
                <div class="admin-item-author">${escapeHtml(comment.name)}</div>
                ${comment.email ? `<div class="admin-item-email">${escapeHtml(comment.email)}</div>` : ''}
                <div class="admin-item-date">${dateStr}</div>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn admin-btn-edit" onclick="editAdminItem('comment', '${id}')">
                    <i class="fas fa-edit"></i>
                    تعديل
                </button>
                <button class="admin-btn admin-btn-delete" onclick="deleteAdminItem('comment', '${id}')">
                    <i class="fas fa-trash"></i>
                    حذف
                </button>
            </div>
        </div>
        <div class="admin-item-text">${escapeHtml(comment.text || comment.comment)}</div>
        <div class="admin-item-reactions">
            <div class="admin-reaction-stat">
                <i class="fas fa-heart"></i>
                <span>${likeCount} إعجاب</span>
            </div>
            <div class="admin-reaction-stat">
                <i class="fas fa-thumbs-up"></i>
                <span>${thumbsUpCount} تقييم</span>
            </div>
        </div>
    `;
    
    return div;
}

// Create admin reply element
function createAdminReplyElement(id, reply) {
    const div = document.createElement('div');
    div.className = 'admin-item';
    div.setAttribute('data-id', id);
    div.setAttribute('data-type', 'reply');
    div.setAttribute('data-search-text', `${reply.name} ${reply.email || ''} ${reply.reply}`.toLowerCase());
    
    const timestamp = reply.timestamp ? new Date(reply.timestamp.seconds * 1000) : new Date();
    const dateStr = timestamp.toLocaleString('ar-EG');
    
    const replyType = reply.parentReplyId ? 'رد على رد' : 'رد على تعليق';
    
    div.innerHTML = `
        <div class="admin-item-header">
            <div class="admin-item-info">
                <div class="admin-item-author">${escapeHtml(reply.name)}</div>
                ${reply.email ? `<div class="admin-item-email">${escapeHtml(reply.email)}</div>` : ''}
                <div class="admin-item-date">${dateStr} • ${replyType}</div>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn admin-btn-edit" onclick="editAdminItem('reply', '${id}')">
                    <i class="fas fa-edit"></i>
                    تعديل
                </button>
                <button class="admin-btn admin-btn-delete" onclick="deleteAdminItem('reply', '${id}')">
                    <i class="fas fa-trash"></i>
                    حذف
                </button>
            </div>
        </div>
        <div class="admin-item-text">${escapeHtml(reply.reply)}</div>
    `;
    
    return div;
}

// Edit admin item (global function)
window.editAdminItem = async function(type, id) {
    const item = document.querySelector(`.admin-item[data-id="${id}"]`);
    if (!item) return;
    
    // Check if already editing
    if (item.querySelector('.admin-edit-form')) {
        return;
    }
    
    const textDiv = item.querySelector('.admin-item-text');
    const currentText = textDiv.textContent;
    
    // Create edit form
    const editForm = document.createElement('div');
    editForm.className = 'admin-edit-form';
    editForm.innerHTML = `
        <textarea class="admin-edit-textarea">${currentText}</textarea>
        <div class="admin-edit-actions">
            <button class="admin-btn admin-btn-save" onclick="saveAdminItem('${type}', '${id}')">
                <i class="fas fa-save"></i>
                حفظ
            </button>
            <button class="admin-btn admin-btn-cancel" onclick="cancelEditAdminItem('${id}')">
                <i class="fas fa-times"></i>
                إلغاء
            </button>
        </div>
    `;
    
    // Replace text with form
    textDiv.style.display = 'none';
    textDiv.parentNode.insertBefore(editForm, textDiv.nextSibling);
    
    // Focus on textarea
    const textarea = editForm.querySelector('textarea');
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
};

// Cancel edit admin item (global function)
window.cancelEditAdminItem = function(id) {
    const item = document.querySelector(`.admin-item[data-id="${id}"]`);
    if (!item) return;
    
    const editForm = item.querySelector('.admin-edit-form');
    const textDiv = item.querySelector('.admin-item-text');
    
    if (editForm) {
        editForm.remove();
    }
    
    if (textDiv) {
        textDiv.style.display = 'block';
    }
};

// Save admin item (global function)
window.saveAdminItem = async function(type, id) {
    const item = document.querySelector(`.admin-item[data-id="${id}"]`);
    if (!item) return;
    
    const textarea = item.querySelector('.admin-edit-textarea');
    if (!textarea) return;
    
    const newText = textarea.value.trim();
    
    if (!newText) {
        showNotification('لا يمكن حفظ نص فارغ');
        return;
    }
    
    try {
        const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        const db = window.firebaseDb;
        
        const collectionName = type === 'comment' ? 'comments' : 'replies';
        const fieldName = type === 'comment' ? 'comment' : 'reply';
        
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, {
            [fieldName]: newText
        });
        
        // Update UI
        const textDiv = item.querySelector('.admin-item-text');
        if (textDiv) {
            textDiv.textContent = newText;
            textDiv.style.display = 'block';
        }
        
        const editForm = item.querySelector('.admin-edit-form');
        if (editForm) {
            editForm.remove();
        }
        
        showNotification('تم التعديل بنجاح! ✅');
        
        // Reload comments system to reflect changes
        if (type === 'comment' && typeof setupCommentsSystem === 'function') {
            setTimeout(() => {
                const commentsLoading = document.getElementById('comments-loading');
                if (commentsLoading) commentsLoading.style.display = 'none';
            }, 500);
        }
        
    } catch (error) {
        console.error('Error updating item:', error);
        showNotification('حدث خطأ أثناء التعديل');
    }
};

// Delete admin item (global function)
window.deleteAdminItem = async function(type, id) {
    if (!confirm('هل أنت متأكد من حذف هذا العنصر؟ لا يمكن التراجع عن هذا الإجراء!')) {
        return;
    }
    
    try {
        const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        const db = window.firebaseDb;
        
        const collectionName = type === 'comment' ? 'comments' : 'replies';
        const docRef = doc(db, collectionName, id);
        
        await deleteDoc(docRef);
        
        // Remove from UI
        const item = document.querySelector(`.admin-item[data-id="${id}"]`);
        if (item) {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
                item.remove();
                
                // Update count
                const countElement = document.getElementById(`admin-${type === 'comment' ? 'comments' : 'replies'}-count`);
                if (countElement) {
                    const currentCount = parseInt(countElement.textContent) || 0;
                    countElement.textContent = Math.max(0, currentCount - 1);
                }
                
                // Check if list is now empty
                const listElement = document.getElementById(`admin-${type === 'comment' ? 'comments' : 'replies'}-list`);
                if (listElement && listElement.children.length === 0) {
                    const emptyMessage = type === 'comment' ? 
                        '<i class="fas fa-comments"></i><p>لا توجد تعليقات بعد</p>' :
                        '<i class="fas fa-reply-all"></i><p>لا توجد ردود بعد</p>';
                    
                    listElement.innerHTML = `<div class="admin-no-items">${emptyMessage}</div>`;
                }
            }, 300);
        }
        
        showNotification('تم الحذف بنجاح! 🗑️');
        
    } catch (error) {
        console.error('Error deleting item:', error);
        showNotification('حدث خطأ أثناء الحذف');
    }
};

// Filter admin items
function filterAdminItems(type, searchText) {
    const listId = type === 'comments' ? 'admin-comments-list' : 'admin-replies-list';
    const items = document.querySelectorAll(`#${listId} .admin-item`);
    
    const search = searchText.toLowerCase().trim();
    
    items.forEach(item => {
        const itemText = item.getAttribute('data-search-text') || '';
        
        if (search === '' || itemText.includes(search)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Close admin panel when clicking outside
document.addEventListener('click', function(e) {
    const adminModal = document.getElementById('admin-modal');
    if (adminModal && e.target === adminModal) {
        closeAdminPanel();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close reply modal if open
        const replyModal = document.getElementById('reply-modal');
        if (replyModal && replyModal.style.display !== 'none' && replyModal.style.display !== '') {
            const closeBtn = document.querySelector('.reply-modal-close');
            if (closeBtn) closeBtn.click();
            return;
        }
        
        // Close admin panel if open
        const adminModal = document.getElementById('admin-modal');
        if (adminModal && adminModal.style.display !== 'none') {
            closeAdminPanel();
        }
    }
});

