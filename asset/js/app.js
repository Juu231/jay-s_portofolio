const volData = {
    'vol1': {
        title: 'HoD Academic Excellence (2024 - 2025)',
        img: 'asset/image/academic-excellence-2024.jpeg',
        desc: 'Managing and leading a small group from the Student Council with a purpose to improve students in academic or non-academic activities. My main program was to manage tutoring session and provide a learning experience for struggling students.'
    },
    'vol2': {
        title: 'Presidential Candidate 2024-2025',
        img: 'asset/image/candidate-president-picture.jpeg',
        desc: 'I nominate myself to become the next President of Student Council 2024-2025 for UPH College. This picture was taken during The Presidential Debate with another candidate.'
    },
    'vol3': {
        title: 'Performer for Hari Sekolah Kristen Indonesia (Orchestra 2025)',
        img: 'asset/image/orchestra-picture.jpeg',
        desc: 'Becoming a performer for a massive celebration event, HSKI, a celebration to mark Gods fulfilling grace across and pray every Christian school in Indonesia.'
    },
    'vol4': {
        title: 'Clutch Workshop (2025)',
        img: 'asset/image/clutch-workshop.jpeg',
        desc: 'Participate in organizing a workshop event that teaches Leadership softskills, implementing fun activities and enganging lessons.'
    },
    'vol5': {
        title: 'Solo Violin 2024',
        img: 'asset/image/jayson-solo-violin.jpeg',
        desc: 'During the Home Concert event, I nominate myself to become a performer and perform a duo with the classical song "Air on the G String" by Johann Sebastian Bach.'
    },
    'vol6': {
        title: 'Orchestra (2023)',
        img: 'asset/image/orchestra-2023.jpeg',
        desc: 'Since 2022, I have become part of UPH College Orchestra and until 2023, I was still participating to perform massive events at UPH College.'
    },
    'vol7': {
        title: 'Member of Academic Excellence (2023)',
        img: 'asset/image/academic-excellence-member.jpeg',
        desc: 'Partaking in my first ever organization, I took Academic Excellence as my choice to pursuit and create impact within academic or non-academic activities.'
    },
    'vol8': {
        title: 'Leadership Camp Training (2025)',
        img: 'asset/image/leadership-camp-2024.jpeg',
        desc: 'Became part of a committee in managing leadership activities event and coordinating stewardship throughout 2 whole day.'
    },
    'vol9': {
        title: 'Student Orientation Week (2024)',
        img: 'asset/image/new-student-orientation-24.jpeg',
        desc: 'In celebration of Welcoming The Class of 2025, the UPH College Orchestra was involved in giving a performance in the event.'
    }
};



function openVolunteer(id) {
    const panel = document.getElementById('volunteer-details');
    const overlay = document.getElementById('menu-overlay');
    const data = volData[id];

    if (data) {
        document.getElementById('panel-img').src = data.img;
        document.getElementById('panel-title').innerText = data.title;
        document.getElementById('panel-desc').innerText = data.desc;
        
        panel.classList.add('active');
        overlay.classList.add('active'); 
        document.body.style.overflow = 'hidden'; 
    }
}

function closeVolunteer() {
    const panel = document.getElementById('volunteer-details');
    const overlay = document.getElementById('menu-overlay');
    
    panel.classList.remove('active');
    overlay.classList.remove('active'); 
    document.body.style.overflow = 'auto'; 
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
    });


    document.body.classList.add('locked');
    const startBtn = document.getElementById('start-btn');
    const introOverlay = document.getElementById('intro-overlay');
    const audio = document.getElementById('bg-music');
    const playerIcon = document.getElementById('player-icon');
    const musicBtn = document.getElementById('music-toggle-btn');
    const hamburger = document.getElementById('menu-toggle');
    const backToTop = document.getElementById('back-to-top');
    const closeMenu = document.getElementById('close-menu');
    const drawer = document.getElementById('side-drawer');
    const overlay = document.getElementById('menu-overlay');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            audio.play();
            startBtn.style.display = 'none';
            const reco = document.querySelector('.audio-recommendation');
            if (reco) reco.style.display = 'none';
            
            introOverlay.classList.add('intro-zoom');

            setTimeout(() => {
                introOverlay.classList.add('intro-fade-out');
                document.body.classList.remove('locked');
            }, 2500);
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            hamburger.classList.add('scrolled');
            backToTop.classList.add('show');
        } else {
            hamburger.classList.remove('scrolled');
            backToTop.classList.remove('show');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (musicBtn && audio) {
        musicBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playerIcon.textContent = 'II';
            } else {
                audio.pause();
                playerIcon.textContent = '▶';
            }
        });
    }

    const hideMenu = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-active'); 
    document.body.style.overflow = 'auto';
    };

    if (hamburger) {
    hamburger.addEventListener('click', () => {
        drawer.classList.add('open');
        overlay.classList.add('active');
        document.body.classList.add('menu-active'); 
        document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenu) closeMenu.addEventListener('click', hideMenu);
});