// 1. Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('nav-list');
    const btn = document.querySelector('.mobile-menu-btn');
    nav.classList.toggle('active');
    btn.classList.toggle('active');
}

function closeMenu() {
    const nav = document.getElementById('nav-list');
    const btn = document.querySelector('.mobile-menu-btn');
    nav.classList.remove('active');
    btn.classList.remove('active');
}

// 2. Typing Effect
const textElement = document.getElementById('typewriter');
if (textElement) {
    const professions = [
        "Network & Telecom Engineer",
        "Frontend Developer",
        "Full Stack Developer",
        "Cloud Solutions Architect"
    ];
    let professionIndex = 0;
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = professions[professionIndex];

        if (!isDeleting && index === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
            typeSpeed = 500;
        } else {
            typeSpeed = isDeleting ? 100 : 200;
        }

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, index);
            index--;
        } else {
            textElement.textContent = currentText.substring(0, index);
            index++;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start typing on load
    document.addEventListener('DOMContentLoaded', typeEffect);
}

// 3. Form Validation
function validateForm(e) {
    e.preventDefault(); // Stop reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name == "" || email == "" || message == "") {
        alert("Harap isi semua kolom!");
        return false;
    }

    // Show success message
    alert("Terima kasih, " + name + "! Pesan Anda telah terkirim (Simulasi).");
    document.getElementById('contactForm').reset();
    return true;
}


// Animations on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('animated');
        }
    });
}

// Carousel Logic
document.addEventListener('DOMContentLoaded', function() {
    // --- NEW CAROUSEL LOGIC ---
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && slides.length > 0) {
        let currentIndex = 0;

        function updateCarousel() {
            // Since slides are 100% width, simply translate by 100% per slide
            const targetPos = -currentIndex * 100;
            track.style.transform = `translateX(${targetPos}%)`;

            // Update active classes
            slides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        // Initial update
        // Wait slightly for layout to settle
        setTimeout(updateCarousel, 100);
        window.addEventListener('resize', updateCarousel);
        window.addEventListener('load', updateCarousel); // Ensure images are loaded for correct width

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        // Optional: Auto play
        // setInterval(() => {
        //     currentIndex = (currentIndex + 1) % slides.length;
        //     updateCarousel();
        // }, 5000);
    }
});

window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Close mobile menu when clicking a nav link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

// Project Modal Functionality
const projectsData = {
    1: {
        title: "Enterprise Network Design",
        category: "Network Infrastructure",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
        description: "Comprehensive enterprise network infrastructure design and implementation for multinational corporation with redundant core switching and zero-trust architecture. This project involved designing a scalable network that could handle thousands of users across multiple continents, implementing advanced security measures, and ensuring high availability with minimal downtime.",
        tech: ["Cisco", "Juniper", "SD-WAN"],
        liveLink: "#",
        githubLink: "#"
    },
    2: {
        title: "5G Network Deployment",
        category: "Telecommunications",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
        description: "End-to-end 5G network deployment for urban coverage with radio access network design, core network virtualization, and edge computing infrastructure. The project included site surveys, equipment installation, network optimization, and performance testing to ensure seamless connectivity for smart city applications.",
        tech: ["5G NR", "RAN", "NFV"],
        liveLink: "#",
        githubLink: "#"
    },
    3: {
        title: "Hybrid Cloud Migration",
        category: "Cloud Computing",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        description: "Large-scale hybrid cloud migration project for financial services company with automated deployment pipelines and disaster recovery solutions. This involved migrating legacy applications to cloud-native architectures, implementing CI/CD pipelines, and establishing robust backup and recovery mechanisms.",
        tech: ["AWS", "Azure", "Kubernetes"],
        liveLink: "#",
        githubLink: "#"
    },
    4: {
        title: "Zero Trust Security Framework",
        category: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
        description: "Implementation of comprehensive zero trust security framework for healthcare organization with identity management and real-time threat monitoring. The solution included multi-factor authentication, micro-segmentation, and continuous monitoring to protect sensitive patient data.",
        tech: ["SIEM", "IAM", "DLP"],
        liveLink: "#",
        githubLink: "#"
    },
    5: {
        title: "Smart City Infrastructure",
        category: "IoT Solutions",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        description: "Smart city IoT infrastructure deployment with environmental monitoring sensors, traffic management systems, and waste management optimization. The project encompassed sensor network design, data analytics platform development, and integration with municipal management systems.",
        tech: ["IoT", "MQTT", "Edge AI"],
        liveLink: "#",
        githubLink: "#"
    },
    6: {
        title: "Modern Data Center Design",
        category: "Data Center",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        description: "State-of-the-art data center design with modular architecture, liquid cooling systems, redundant power distribution, and automated monitoring. This facility supports high-density computing with energy-efficient cooling and comprehensive environmental controls.",
        tech: ["Cooling Systems", "Power Distribution", "Automation"],
        liveLink: "#",
        githubLink: "#"
    }
};

function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Populate modal with project data
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-live-link').href = project.liveLink;
    document.getElementById('modal-github-link').href = project.githubLink;

    // Clear and populate tech stack
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const techPill = document.createElement('span');
        techPill.className = 'tech-pill';
        techPill.textContent = tech;
        techContainer.appendChild(techPill);
    });

    // Show modal with fade-in effect
    const modal = document.getElementById('project-modal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Add event listeners to View Details buttons
document.addEventListener('DOMContentLoaded', function() {
    const detailButtons = document.querySelectorAll('.btn-detail.preview-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Close modal when clicking outside
    const modal = document.getElementById('project-modal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});
