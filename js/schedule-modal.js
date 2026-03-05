// Schedule Modal Manager for SMOPS-2026
// This script handles the display of Conference and Workshop schedules within a modal

class ScheduleModalManager {
    constructor() {
        this.modal = null;
        this.isOpen = false;
    }

    init() {
        // Create modal structure if it doesn't exist
        if (!document.getElementById('schedule-modal')) {
            this.createModalMarkup();
        }

        this.modal = document.getElementById('schedule-modal');

        // Add event listeners for closing
        const closeBtn = this.modal.querySelector('.close-modal-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        const backdrop = this.modal.querySelector('.bg-\\[\\#020617\\]\\/90');
        if (backdrop) {
            backdrop.addEventListener('click', () => this.close());
        }

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.close();
        });

        // Add event listeners to all buttons that should open the modal
        this.bindOpenButtons();
    }

    createModalMarkup() {
        const modalHTML = `
            <div id="schedule-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 opacity-0 pointer-events-none transition-all duration-300">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-[#020617]/90 backdrop-blur-md"></div>
                
                <!-- Modal Container -->
                <div class="modal-container relative w-full max-w-4xl max-h-[90vh] glassmorphic-bg rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl border border-white/10 transform scale-95 transition-all duration-300">
                    
                    <!-- Premium Modal Header -->
                    <div class="px-8 py-6 border-b border-white/10 flex flex-col gap-6">
                        <!-- Top Bar: Logos & Close -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-6">
                                <img src="assets/images/ISRO-logo.svg" alt="ISRO" class="h-10 w-auto opacity-90" onerror="this.classList.add('hidden')">
                                <div class="w-px h-8 bg-white/10"></div>
                                <img src="assets/images/inspacelogo.png" alt="IN-SPACe" class="h-8 w-auto opacity-90" onerror="this.classList.add('hidden')">
                                <div class="w-px h-8 bg-white/10"></div>
                                <img src="assets/images/smops-2026_final.webp" alt="SMOPS" class="h-10 w-auto">
                            </div>
                            <button class="close-modal-btn p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        <!-- Title & Tabs -->
                        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h2 class="text-3xl md:text-4xl font-bold schedule-header-gradient mb-2">Conference Agenda</h2>
                                <p class="text-white/50 text-sm">SMOPS 2026 | Bengaluru | 8th - 10th April</p>
                            </div>
                            <!-- Tabs -->
                            <div class="flex p-1 bg-white/5 rounded-2xl border border-white/5 self-start md:self-auto">
                                <button class="schedule-tab-btn active px-6 py-2.5 rounded-xl font-bold text-sm transition-all" data-tab="conference" onclick="window.scheduleManager.switchTab('conference')">Conference</button>
                                <button class="schedule-tab-btn px-6 py-2.5 rounded-xl font-bold text-sm text-white/50 hover:text-white transition-all" data-tab="workshop" onclick="window.scheduleManager.switchTab('workshop')">Workshop</button>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Content -->
                    <div class="flex-grow overflow-y-auto p-4 md:p-8 custom-scrollbar bg-black/20">
                        
                        <!-- Conference Schedule Tab -->
                        <div id="conference-schedule-tab" class="schedule-tab-content block">
                             <!-- Day 01 -->
                             <div class="mb-12">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">01</div>
                                    <div>
                                        <h3 class="text-xl font-bold text-white leading-none">Day 01 - April 8</h3>
                                        <p class="text-blue-400/60 text-xs mt-1 uppercase tracking-widest font-bold">Main Conference Begins</p>
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-1 gap-4">
                                    <!-- Card: Inaugural -->
                                    <div class="schedule-card card-blue">
                                        <div class="schedule-time">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            09:30 - 10:30
                                        </div>
                                        <h4 class="schedule-title uppercase">Inaugural Function</h4>
                                        <p class="schedule-desc">Grand opening ceremony with distinguished guests and keynote.</p>
                                        <div class="schedule-meta">
                                            <div class="meta-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Grand Ballroom</div>
                                            <div class="meta-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> VIP Guest</div>
                                        </div>
                                    </div>

                                    <!-- Card: Plenary -->
                                    <div class="schedule-card card-purple">
                                        <div class="schedule-time">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            11:00 - 01:00
                                        </div>
                                        <h4 class="schedule-title">Plenary Sessions 1 & 2</h4>
                                        <p class="schedule-desc">Key talks on Space Domain Awareness and Future Technologies.</p>
                                        <div class="schedule-meta">
                                            <div class="meta-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> Session Hall 1</div>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-4 py-2 opacity-50">
                                        <div class="h-px bg-white/20 grow"></div>
                                        <span class="text-xs font-bold uppercase tracking-widest italic text-pink-300">Lunch Break | 01:00 - 02:00</span>
                                        <div class="h-px bg-white/20 grow"></div>
                                    </div>

                                    <!-- Card: Technical -->
                                    <div class="schedule-card card-blue">
                                        <div class="schedule-time">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            02:00 - 03:30
                                        </div>
                                        <h4 class="schedule-title">Parallel Technical Sessions</h4>
                                        <p class="schedule-desc">Dedicated tracks for Mission Design, Power, and Thermal systems.</p>
                                        <div class="schedule-meta">
                                            <div class="meta-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg> Halls 1-4</div>
                                        </div>
                                    </div>

                                    <!-- Card: Panel -->
                                    <div class="schedule-card card-emerald">
                                        <div class="schedule-time">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            05:00 - 06:00
                                        </div>
                                        <h4 class="schedule-title uppercase font-black text-emerald-300">Astronaut Panel</h4>
                                        <p class="schedule-desc text-white/80">Interactive session with global space travelers sharing mission experiences.</p>
                                    </div>

                                    <!-- Card: Dinner style -->
                                    <div class="mt-4 p-6 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 text-center relative overflow-hidden group">
                                        <div class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                                        <span class="block text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Social Evening</span>
                                        <h4 class="text-2xl font-bold text-white mb-2">Gala Dinner</h4>
                                        <p class="text-sm text-white/50">Networking and Celebrations | 07:30 PM Onwards</p>
                                    </div>
                                </div>
                             </div>

                             <div class="text-center">
                                <a href="conference-schedule.html" class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
                                    View Full 2nd Day Schedule
                                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                             </div>
                        </div>

                        <!-- Workshop Schedule Tab -->
                        <div id="workshop-schedule-tab" class="schedule-tab-content hidden">
                             <div class="mb-12">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold border border-pink-500/20">03</div>
                                    <div>
                                        <h3 class="text-xl font-bold text-white leading-none">Day 03 - April 10</h3>
                                        <p class="text-pink-400/60 text-xs mt-1 uppercase tracking-widest font-bold">Specialized Workshop</p>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-4">
                                     <!-- Card: WS 1 -->
                                     <div class="schedule-card card-pink">
                                        <div class="schedule-time">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            10:00 - 11:00
                                        </div>
                                        <h4 class="schedule-title">Space Domain Awareness</h4>
                                        <p class="schedule-desc">Advanced techniques in tracking and managing orbital assets.</p>
                                        <div class="schedule-meta">
                                            <div class="meta-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Dr. T.S. Kelso</div>
                                        </div>
                                    </div>

                                    <!-- Card: WS 2 -->
                                    <div class="schedule-card card-amber">
                                        <div class="schedule-time">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            11:15 - 12:15
                                        </div>
                                        <h4 class="schedule-title">Human Space Mission</h4>
                                        <p class="schedule-desc">Gaganyaan operations and safety protocols for crewed missions.</p>
                                        <div class="schedule-meta">
                                            <div class="meta-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Shri DK Singh</div>
                                        </div>
                                    </div>

                                    <!-- Card: WS 3 -->
                                    <div class="schedule-card card-pink">
                                        <div class="schedule-time">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            01:30 - 02:30
                                        </div>
                                        <h4 class="schedule-title">Robotic Mission Operations</h4>
                                        <p class="schedule-desc">Autonomous landing and re-entry algorithms for exploration.</p>
                                        <div class="schedule-meta">
                                            <div class="meta-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Dr. Akiko (JAXA)</div>
                                        </div>
                                    </div>
                                </div>
                             </div>

                             <div class="text-center">
                                <a href="workshop-schedule.html" class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-pink-500/20">
                                    View Full Workshop Agenda
                                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                             </div>
                        </div>
                    </div>

                    <!-- Footer Note -->
                    <div class="bg-white/5 px-8 py-3 flex items-center justify-center gap-2">
                        <div class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                        <p class="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Schedule is subject to change. Please check back regularly.</p>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    bindOpenButtons() {
        const buttons = document.querySelectorAll('.open-schedule-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });
    }

    switchTab(tabId) {
        const tabs = this.modal.querySelectorAll('.schedule-tab-btn');
        const contents = this.modal.querySelectorAll('.schedule-tab-content');

        tabs.forEach(t => {
            if (t.getAttribute('data-tab') === tabId) {
                t.classList.add('active', 'bg-blue-500/80');
                t.classList.remove('text-white/50');
            } else {
                t.classList.remove('active', 'bg-blue-500/80');
                t.classList.add('text-white/50');
            }
        });

        contents.forEach(c => {
            if (c.id === `${tabId}-schedule-tab`) {
                c.classList.remove('hidden');
                c.classList.add('block', 'animate-fade-in');
            } else {
                c.classList.add('hidden');
                c.classList.remove('block', 'animate-fade-in');
            }
        });
    }

    open() {
        if (!this.modal) return;
        this.modal.classList.remove('pointer-events-none', 'opacity-0');
        this.modal.querySelector('.modal-container').classList.remove('scale-95');
        this.modal.querySelector('.modal-container').classList.add('scale-100');
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
    }

    close() {
        if (!this.modal) return;
        this.modal.classList.add('pointer-events-none', 'opacity-0');
        this.modal.querySelector('.modal-container').classList.add('scale-95');
        this.modal.querySelector('.modal-container').classList.remove('scale-100');
        document.body.style.overflow = 'auto';
        this.isOpen = false;
    }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    window.scheduleManager = new ScheduleModalManager();
    window.scheduleManager.init();
});
