// ===== GLOBAL VARIABLES =====
let currentTheme = localStorage.getItem('theme') || 'light';
let portfolioItems = [];


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
        const { collection, addDoc, getDocs, query, orderBy, onSnapshot, serverTimestamp, doc, updateDoc, increment, getDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
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
            const commentsContainer = commentsList.querySelector('.comments-items') || createCommentsContainer();
            commentsContainer.innerHTML = '';
            
            if (docs.length === 0) {
                noComments.style.display = 'block';
                commentsCount.textContent = '0';
                updateTotalComments(0);
                return;
            }
            
            noComments.style.display = 'none';
            commentsCount.textContent = docs.length;
            updateTotalComments(docs.length);
            updateReactionStats(docs);
            
            docs.forEach((doc, index) => {
                const comment = doc.data();
                const commentElement = createCommentElement(comment, index, doc.id);
                commentsContainer.appendChild(commentElement);
            });
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
            
            const timestamp = comment.timestamp ? new Date(comment.timestamp.seconds * 1000) : new Date();
            const timeAgo = getTimeAgo(timestamp);
            
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
            
            commentDiv.innerHTML = `
                <div class="comment-avatar" style="--avatar-color: ${avatarColor}">
                    <div class="avatar-circle">
                        <span class="avatar-initial">${nameInitial}</span>
                    </div>
                    <div class="avatar-status"></div>
                </div>
                <div class="comment-content">
                    <div class="comment-header">
                        <h4 class="comment-author">${escapeHtml(comment.name)}</h4>
                        <span class="comment-time">${timeAgo}</span>
                    </div>
                    <div class="comment-text-wrapper">
                        <p class="comment-text">${escapeHtml(comment.comment).replace(/\n/g, '<br>')}</p>
                        <div class="comment-reactions">
                            <button class="reaction-btn ${hasLiked ? 'active' : ''}" data-reaction="like" data-comment-id="${commentId}">
                                <i class="fas fa-heart"></i>
                                <span>${likeCount}</span>
                            </button>
                            <button class="reaction-btn ${hasThumbsUp ? 'active' : ''}" data-reaction="thumbs-up" data-comment-id="${commentId}">
                                <i class="fas fa-thumbs-up"></i>
                                <span>${thumbsUpCount}</span>
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
            
            return commentDiv;
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
                
                // Show success animation
                buttonElement.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    buttonElement.style.transform = '';
                }, 200);
                
                // Create floating reaction effect
                createFloatingReaction(buttonElement, reactionType, !hasReacted);
                
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
                const commentData = {
                    name: formData.get('name').trim(),
                    email: formData.get('email').trim(),
                    comment: formData.get('comment').trim(),
                    timestamp: serverTimestamp(),
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
                if (!commentData.name || !commentData.comment) {
                    throw new Error('الرجاء ملء جميع الحقول المطلوبة');
                }
                
                if (commentData.comment.length < 3) {
                    throw new Error('التعليق قصير جداً');
                }
                
                if (commentData.comment.length > 1000) {
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

