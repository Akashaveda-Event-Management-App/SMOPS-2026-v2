// Topic Component Manager for SMOPS-2026
// This file manages all conference topics and their subtopics

class TopicManager {
    constructor() {
    this.topics = [
        {
            id: 'topic1',
            number: '01',
            title: 'Present and Future trends in S/C operations and mission design',
            icon: 'lightbulb',
            color: 'blue',
            gradientFrom: 'blue-500',
            gradientVia: 'blue-600',
            gradientTo: 'purple-600',
            subtopics: [
                'Automation in mission Operation Management and Ground resource optimization',
                'Low-cost solution for satellite mission management',
                'Satellite Data handling, Processing and Applications',
                'Challenges in Flight Dynamics Operations',
                'On-Board Automation and Lost in space Recovery techniques',
                'System Design and operations for next generation payloads',
                'Methodologies for Attitude Accuracy Improvement',
                'End of Life mission Management strategy',
                'Challenges in Autonomous Satellite design',
                'Emergency and Contingency Operation methodology',
                'Novel techniques for mission management using electric propulsion systems',
                'Latest trends in on-orbit spacecraft thermal management',
                'Advanced Space Power Technologies',
                'Space Power System for Ambitious Missions'
            ]
        },
        {
            id: 'topic2',
            number: '02',
            title: 'Operation Challenges in GSO mission',
            icon: 'lightning-bolt',
            color: 'purple',
            gradientFrom: 'purple-500',
            gradientVia: 'purple-600',
            gradientTo: 'pink-600',
            subtopics: [
                'Communication payloads Users challenges - Interference, Geo-location and mitigation',
                'GSO satellite Launch and Early Orbit Operations',
                'Electric propulsion Orbit Raising (EOR) Operation and mission management',
                'High throughput satellites (HTS)-Beam Pointing methodologies, In Orbit testing of payloads'
            ]
        },
        {
            id: 'topic3',
            number: '03',
            title: 'Human Spaceflight mission operation management',
            icon: 'user-group',
            color: 'green',
            gradientFrom: 'green-500',
            gradientVia: 'emerald-600',
            gradientTo: 'blue-600',
            subtopics: [
                'Mission operations management',
                'Ground segment architecture design',
                'Reliability aspect for ground and space segment',
                'For a Successful Space Program: Quality and Safety',
                'Crew Training and simulation facility design',
                'Mission Operation Training and simulation',
                'Ascent and Descent Trajectory Design',
                'Recovery and rehabilitation strategy',
                'Governmental Human Spaceflight Programmes',
                'Crew Life support system design'
            ]
        },
        {
            id: 'topic4',
            number: '04',
            title: 'Satellite constellations management',
            icon: 'collection',
            color: 'orange',
            gradientFrom: 'yellow-500',
            gradientVia: 'orange-500',
            gradientTo: 'red-600',
            subtopics: [
                'Formation Flying and Constellations Management techniques and challenges',
                'Formation Flying and colocation of satellites in GSO - Operations and challenges',
                'Challenges in maintenance of constellation',
                'Optimal scheduling of constellation',
                'Multi-mission management strategy',
                'Data relay and Inter-satellite communication design'
            ]
        },
        {
            id: 'topic5',
            number: '05',
            title: 'Present and Future trends in Ground System Engineering',
            icon: 'wifi',
            color: 'red',
            gradientFrom: 'red-500',
            gradientVia: 'pink-500',
            gradientTo: 'purple-600',
            subtopics: [
                'New technologies in ground stations establishment and operations',
                'Deep Space Network array design techniques',
                'Space-based Optical & Quantum Communications',
                'Advanced design, Interference and mitigation Ground station Communications in complete spectral bands (viz. 5-G, 6-G, X-band etc.)',
                'Cross support and interoperability',
                'Ground station software architecture and design',
                'Data acquisition system design',
                'Methodology for qualifying Ground systems',
                'Cloud-based Ground system architecture',
                'Advance Radar design & application for space object tracking, phased array antenna design',
                'Ground based optical communication and tera hertz frequency Management',
                'Mobile Stations for LEO data reception - New Techniques',
                'Evolving Technologies in Ground Station Miniaturization'
            ]
        },
        {
            id: 'topic6',
            number: '06',
            title: 'Space Sustainability and Regulations',
            icon: 'shield-check',
            color: 'indigo',
            gradientFrom: 'indigo-500',
            gradientVia: 'blue-600',
            gradientTo: 'purple-600',
            subtopics: [
                'Approaches to Space Debris Hazard Management and Mitigation',
                'Balancing Safety and Sustainability in Space Missions',
                'Policy, Legal, Institutional, Economic and Security Aspects of Debris Mitigation, Debris Remediation and STM',
                'Strategic Risk Management for Successful Space & Defence Programmes'
            ]
        },
        {
            id: 'topic7',
            number: '07',
            title: 'Robotics-Based Space Mission exploration',
            icon: 'cog',
            color: 'cyan',
            gradientFrom: 'cyan-500',
            gradientVia: 'blue-600',
            gradientTo: 'indigo-600',
            subtopics: [
                'Mission operation strategy for Robotic mission for space exploration',
                'On-orbit satellite servicing'
            ]
        },
        {
            id: 'topic8',
            number: '08',
            title: 'AI for Space Mission',
            icon: 'cpu-chip',
            color: 'emerald',
            gradientFrom: 'emerald-500',
            gradientVia: 'teal-600',
            gradientTo: 'cyan-600',
            subtopics: [
                'Anomaly detection',
                'Guidance and Control',
                'Orbit Determination and Propagation',
                'S/C Operations and Applications',
                'Constellation Management',
                'Landing and Re-entry Algorithm',
                'Sub-system Performance Evaluation',
                'Autonomous Satellite Design and Mission Management'
            ]
        },
        {
            id: 'topic9',
            number: '09',
            title: 'Indian Space Policy for Start-up',
            icon: 'rocket',
            color: 'rose',
            gradientFrom: 'rose-500',
            gradientVia: 'pink-600',
            gradientTo: 'purple-600',
            subtopics: [
                'Public-Private Partnerships: Traditional and New Space Applications',
                'Economic Resilience and the Space Economic/Industrial Sector',
                'Oppurtunities for Industries and Startups in Space',
                'Space technology and ecosystem development'
            ]
        },
        {
            id: 'topic10',
            number: '10',
            title: 'Lunar and Interplanetary Mission',
            icon: 'globe-alt',
            color: 'violet',
            gradientFrom: 'violet-500',
            gradientVia: 'purple-600',
            gradientTo: 'indigo-600',
            subtopics: [
                'Lunar Mission Design and Challenges',
                'Technological Advancement for lunar mission',
                'Challenges in lunar mission navigation',
                'Robotics for lunar and interplanatory mission',
                'Impact on society due to Lunar and Inerplanatory missions, Societal Impact of Lunar and Inerplanatory missions on Innovation, Collaboration and Future life',
                'Lunar communication and Navigation system',
                'Moon to Mars Architechture'
            ]
        },
        {
            id: 'topic11',
            number: '11',
            title: 'Cybersecurity in Space Systems, Risks and Countermeasures',
            icon: 'shield-exclamation',
            color: 'amber',
            gradientFrom: 'amber-500',
            gradientVia: 'yellow-600',
            gradientTo: 'orange-600',
            subtopics: [
                'Space Data Policy and Data Security',
                'Cyber Security and Network Security',
                'International Treaties and Conventions'
            ]
        }
    ];
}

    // Get all topics
    getAllTopics() {
        return this.topics;
    }

    // Get topic by ID
    getTopicById(id) {
        return this.topics.find(topic => topic.id === id);
    }

    // Get SVG icon based on icon name
    getIcon(iconName) {
        const icons = {
            'lightbulb': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>',
            'lightning-bolt': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>',
            'user-group': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>',
            'collection': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>',
            'wifi': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>',
            'cpu-chip': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>',
            'globe-alt': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>',
            'calendar': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>',
            'heart': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>',
            'eye': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>',
            'beaker': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>'
        };
        return icons[iconName] || icons['lightbulb'];
    }

    // Generate HTML for a single topic card
    generateTopicCard(topic, index) {
        const delay = (index + 1) * 0.1;
        return `
            <div class="topic-card glassmorphic-bg p-8 rounded-3xl border border-white/20 hover:border-${topic.color}-400/60 cursor-pointer group hover:shadow-2xl hover:shadow-${topic.color}-500/20 animate-fade-in-up" style="animation-delay: ${delay}s" onclick="openTopicModal('${topic.id}')">
                <div class="flex flex-col lg:flex-row items-center gap-8">
                    <!-- Icon and Topic Number -->
                    <div class="flex items-center gap-6 flex-shrink-0">
                        <div class="w-20 h-20 bg-gradient-to-br from-${topic.gradientFrom} via-${topic.gradientVia} to-${topic.gradientTo} rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-${topic.color}-500/30 group-hover:shadow-${topic.color}-400/50">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                ${this.getIcon(topic.icon)}
                            </svg>
                        </div>
                        <div class="text-left">
                            <div class="text-lg font-bold text-${topic.color}-400 uppercase tracking-widest mb-2 group-hover:text-${topic.color}-300 transition-colors duration-300">Topic ${topic.number}</div>
                            <div class="w-16 h-1 bg-gradient-to-r from-${topic.color}-400 to-${topic.gradientTo} rounded-full group-hover:w-24 transition-all duration-300"></div>
                        </div>
                    </div>
                    
                    <!-- Title -->
                    <div class="flex-1 text-center lg:text-left lg:px-8">
                        <h3 class="text-2xl lg:text-3xl font-bold text-white group-hover:text-${topic.color}-300 transition-colors duration-300 leading-tight">
                            ${topic.title}
                        </h3>
                    </div>
                    
                    <!-- Subtopics Counter -->
                    <div class="flex-shrink-0">
                        <div class="bg-gradient-to-r from-${topic.color}-500/10 to-${topic.gradientTo}/10 rounded-2xl p-6 border border-${topic.color}-400/20 group-hover:border-${topic.color}-400/40 transition-all duration-300 min-w-[180px]">
                            <div class="flex items-center justify-between gap-4">
                                <div class="text-2xl font-semibold text-${topic.color}-200 group-hover:text-${topic.color}-100 transition-colors duration-300">${topic.subtopics.length} Subtopics</div>
                                <div class="w-12 h-12 bg-${topic.color}-400/20 rounded-full flex items-center justify-center group-hover:bg-${topic.color}-400/30 group-hover:rotate-12 transform transition-all duration-300">
                                    <svg class="w-6 h-6 text-${topic.color}-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Generate HTML for all topics
    generateAllTopicsHTML() {
        return this.topics.map((topic, index) => this.generateTopicCard(topic, index)).join('');
    }

    // Generate modal content for a specific topic
    generateModalContent(topicId) {
        const topic = this.getTopicById(topicId);
        if (!topic) return '';

        const subtopicsHTML = topic.subtopics.map((subtopic, index) => `
            <div class="glassmorphic-bg p-5 rounded-xl border border-${topic.color}-400/20 hover:border-${topic.color}-400/40 transition-all duration-300">
                <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 bg-${topic.color}-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span class="text-${topic.color}-300 font-bold text-base">${index + 1}</span>
                    </div>
                    <span class="text-white font-medium text-lg leading-relaxed">${subtopic}</span>
                </div>
            </div>
        `).join('');

        return {
            title: `Topic ${topic.number}: ${topic.title}`,
            content: `
                <div class="mb-8">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-${topic.gradientFrom} via-${topic.gradientVia} to-${topic.gradientTo} rounded-xl flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                ${this.getIcon(topic.icon)}
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold text-${topic.color}-300">Subtopics (${topic.subtopics.length})</h4>
                            <p class="text-gray-300 text-lg">Explore the key areas under this topic</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    ${subtopicsHTML}
                </div>
            `
        };
    }

    // Initialize the topics section
    init() {
        const topicsContainer = document.querySelector('#topics-container');
        if (topicsContainer) {
            topicsContainer.innerHTML = this.generateAllTopicsHTML();
        }
    }
}

// Initialize the topic manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.topicManager = new TopicManager();
    window.topicManager.init();
});

// Modal functions (updated to work with the new system)
function openTopicModal(topicId) {
    const modal = document.getElementById('topicModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (window.topicManager) {
        const modalData = window.topicManager.generateModalContent(topicId);
        modalTitle.textContent = modalData.title;
        modalContent.innerHTML = modalData.content;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeTopicModal() {
    const modal = document.getElementById('topicModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('topicModal');
    if (e.target === modal) {
        closeTopicModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeTopicModal();
    }
});
