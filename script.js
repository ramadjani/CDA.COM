document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Klik untuk Salin CA
    const caAddress = document.getElementById('caText');
    
    if (caAddress) {
        caAddress.style.cursor = 'pointer';
        caAddress.addEventListener('click', () => {
            const textToCopy = caAddress.innerText;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Efek visual sederhana saat berhasil disalin
                const originalColor = caAddress.style.color;
                caAddress.style.color = '#22c55e'; // Berubah hijau sebentar
                const originalText = caAddress.innerText;
                
                alert('Contract Address Copied! ✅');
                
                setTimeout(() => {
                    caAddress.style.color = originalColor;
                }, 1000);
            }).catch(err => {
                console.error('Gagal menyalin: ', err);
            });
        });
    }

    // 2. Animasi Reveal on Scroll (Tetap dipertahankan dari versi sebelumnya)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });
});
