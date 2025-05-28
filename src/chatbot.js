const chatbotData = {
    greetings: ["hi", "hello", "hey", "hola", "sup", "yo"],
    goodbyes: ["bye", "goodbye", "see you", "cya", "good night", "farewell"],
    // Add work-related keywords
    workRelated: ["work", "brief", "portfolio", "developed", "created", "built", "made", "working on"],
    responses: {
        greetings: "👋 Hi! I'm Eshani's bot. Ask me about her education, experience, skills, projects, or social media!",
        education: "🎓 Eshani's Education:\n- Currently pursuing Bachelor of Computer Applications (BCA)\n- First-year student with focus on computer science\n- Special interest in AI/ML and Web Development\n- Active participant in coding bootcamps and workshops",
        experience: "💼 Eshani's Current Roles:\n- Evangelist at Hack4Bengal 4.0\n  • Promoting Eastern India's largest hackathon\n  • Community engagement and tech advocacy\n\n- AI Intern at AI Wallah\n  • Hands-on AI/ML project experience\n  • Research and development in AI applications\n\n- Technical Member at GeeksforGeeks SNU Chapter\n  • Contributing to technical content\n  • Organizing coding workshops",
        skills: "🛠️ Eshani's Technical Arsenal:\n\nFrontend:\n- HTML5, CSS3, JavaScript (ES6+)\n- React.js ecosystem\n- UI/UX design principles\n\nBackend:\n- Node.js & Express\n- Database management\n- API development\n\nEmerging Tech:\n- Web3 & Blockchain\n- 3D Technologies (Three.js)\n- AI/ML fundamentals",
        projects: "🚀 Featured Projects:\n\n1. 3D Solar System Explorer\n   • Interactive space visualization\n   • WebGL and Three.js implementation\n   • Educational features\n\n2. Rubik's Cube Game\n   • 3D puzzle simulator\n   • Multiple solving algorithms\n   • Performance tracking\n\n3. Apple Vision Pro Clone\n   • Pixel-perfect recreation\n   • Advanced animations\n   • Responsive design",
        github: "🐱 GitHub: @euii-ii\nCheck out my projects and contributions here:\n<a href='https://github.com/euii-ii' target='_blank'>https://github.com/euii-ii</a>",
        
        linkedin: "💼 LinkedIn: Eshani Paul\nLet's connect professionally:\n<a href='https://www.linkedin.com/in/eshani-paul' target='_blank'>https://www.linkedin.com/in/eshani-paul</a>",
        
        instagram: "📸 Instagram: @eiizz_zz\nFollow my tech journey:\n<a href='https://www.instagram.com/eiizz_zz' target='_blank'>https://www.instagram.com/eiizz_zz</a>",
        
        contact: "📫 Connect with Eshani:\n\n- GitHub: <a href='https://github.com/euii-ii' target='_blank'>https://github.com/euii-ii</a>\n  • Check out her code repositories\n  • View project contributions\n\n- LinkedIn: <a href='https://www.linkedin.com/in/eshani-paul' target='_blank'>https://www.linkedin.com/in/eshani-paul</a>\n  • Professional network\n  • Career updates\n\n- Instagram: <a href='https://www.instagram.com/eiizz_zz' target='_blank'>https://www.instagram.com/eiizz_zz</a>\n  • Tech journey updates\n  • Behind the scenes content",
        
        // New specific social media responses
        github: "🐱 GitHub: @euii-ii\n\nKey Repositories:\n- 3D Solar System Explorer\n- Rubik's Cube Game\n- Apple Vision Pro Clone\n\nVisit: https://github.com/euii-ii",
        linkedin: "💼 LinkedIn: Eshani Paul\n\nHighlights:\n- Frontend Development expertise\n- AI/ML enthusiast\n- Open to collaborations\n\nConnect: https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
        instagram: "📸 Instagram: @eiizz_zz\n\nContent:\n- Tech journey documentation\n- Project updates\n- Coding life\n\nFollow: https://www.instagram.com/eiizz_zz/",

        // Add new brief/summary responses
        briefEducation: "🎓 Quick Education Brief:\nBCA student specializing in computer science with focus on AI/ML and web development. Active learner participating in tech bootcamps.",
        
        briefSkills: "💻 Skills Overview:\n• Frontend: HTML, CSS, JS, React\n• Backend: Node.js, Express\n• Emerging: Web3, 3D, AI/ML",
        
        briefProjects: "🚀 Project Highlights:\n• 3D Solar System Explorer - Interactive space visualization\n• Rubik's Cube Game - 3D puzzle simulator\n• Apple Vision Pro Clone - Responsive web recreation",
        
        fullSummary: "📋 Eshani's Quick Profile:\n\n🎓 Education:\nBCA student focused on computer science, AI/ML, and web development\n\n💻 Key Skills:\n• Frontend Development\n• Backend Development\n• Web3 & 3D Technologies\n\n🚀 Notable Projects:\n• 3D Solar System Explorer\n• Rubik's Cube Game\n• Apple Vision Pro Clone\n\n🔗 Connect:\nGitHub: <a href='https://github.com/euii-ii' target='_blank'>https://github.com/euii-ii</a>\nInstagram: <a href='https://www.instagram.com/eiizz_zz' target='_blank'>https://www.instagram.com/eiizz_zz</a>\nLinkedIn: <a href='https://www.linkedin.com/in/eshani-paul' target='_blank'>https://www.linkedin.com/in/eshani-paul</a>",

        // Add work-specific brief response
        workBrief: "💼 Work & Projects Overview:\n\n🚀 Currently working on:\n• 3D Solar System Explorer - Educational space visualization\n• Rubik's Cube Game - Interactive puzzle simulator\n• Apple Vision Pro Clone - Modern web recreation\n\n💡 Recent achievements:\n• Successfully deployed 3 major web applications\n• Implemented complex 3D visualizations\n• Created responsive, user-friendly interfaces",

        goodbye: "👋 It was great chatting with you! Have a wonderful day! Bye!",

        default: "I'm not sure about that. Try asking about:\n- Education & Skills\n- Work Experience\n- Projects\n- Social Media (GitHub, LinkedIn, Instagram)\n- Contact Information"
    }
};

class Chatbot {
    constructor() {
        this.toggle = document.querySelector('.chatbot-toggle');
        this.container = document.querySelector('.chatbot-box');
        this.closeBtn = document.querySelector('.close-chat');
        this.messagesContainer = document.querySelector('.chatbot-messages');
        this.input = document.querySelector('.chatbot-input input');
        this.sendBtn = document.querySelector('.send-message');

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.toggle.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.toggleChat());
        this.sendBtn.addEventListener('click', () => this.handleUserInput());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        });
    }

    toggleChat() {
        this.container.classList.toggle('hidden');
        if (!this.container.classList.contains('hidden')) {
            this.input.focus();
            if (this.messagesContainer.children.length === 0) {
                this.addMessage(chatbotData.responses.greetings, 'bot');
            }
        }
    }

    handleUserInput() {
        const message = this.input.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.input.value = '';
        this.generateResponse(message);
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.innerHTML = text; // Changed from textContent to innerHTML to support HTML links
        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    generateResponse(userInput) {
        const input = userInput.toLowerCase();
        let response;

        // Check for goodbye messages first
        if (chatbotData.goodbyes.some(goodbye => input.includes(goodbye))) {
            response = chatbotData.responses.goodbye;
            // Add goodbye handling with delayed close
            setTimeout(() => {
                this.addMessage(response, 'bot');
                // Close chat after showing goodbye message
                setTimeout(() => this.toggleChat(), 2000);
            }, 500);
            return;
        }

        // Enhanced work/project detection
        const isWorkRelated = chatbotData.workRelated.some(term => input.includes(term));
        const mentionsWork = input.includes('work') || input.includes('built') || input.includes('portfolio');

        if (isWorkRelated && (input.includes('brief') || input.includes('tell') || input.includes('about'))) {
            response = chatbotData.responses.workBrief;
        } else if (mentionsWork) {
            response = chatbotData.responses.projects;
        } else if (input.includes('brief') || input.includes('summary') || input.includes('overview')) {
            if (input.includes('education') || input.includes('study')) {
                response = chatbotData.responses.briefEducation;
            } else if (input.includes('skill') || input.includes('tech')) {
                response = chatbotData.responses.briefSkills;
            } else if (input.includes('project') || input.includes('work')) {
                response = chatbotData.responses.briefProjects;
            } else {
                // If "brief" is mentioned without specific topic, give full summary
                response = chatbotData.responses.fullSummary;
            }
        } else if (input.includes('tell') && input.includes('about')) {
            // Handle "tell me about" queries
            response = chatbotData.responses.fullSummary;
        } else if (chatbotData.greetings.some(greeting => input.includes(greeting))) {
            response = chatbotData.responses.greetings;
        } else {
            // Original response logic
            if (input.includes('education')) {
                response = chatbotData.responses.education;
            } else if (input.includes('experience')) {
                response = chatbotData.responses.experience;
            } else if (input.includes('skill')) {
                response = chatbotData.responses.skills;
            } else if (input.includes('project')) {
                response = chatbotData.responses.projects;
            } else if (input.includes('github')) {
                response = chatbotData.responses.github;
            } else if (input.includes('linkedin')) {
                response = chatbotData.responses.linkedin;
            } else if (input.includes('instagram')) {
                response = chatbotData.responses.instagram;
            } else if (input.includes('contact')) {
                response = chatbotData.responses.contact;
            } else {
                response = chatbotData.responses.default;
            }
        }

        setTimeout(() => {
            this.addMessage(response, 'bot');
        }, 500);
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});
