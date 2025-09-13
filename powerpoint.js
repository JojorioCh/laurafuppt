        let currentSlide = 1;
        const totalSlides = 6;

        function showSlide(n) {
            const slides = document.querySelectorAll('.slide');
            const slideCounter = document.getElementById('currentSlide');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            if (n > totalSlides) currentSlide = totalSlides;
            if (n < 1) currentSlide = 1;

            // Hide all slides
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Show current slide
            slides[currentSlide - 1].classList.add('active');
            
            // Update counter
            slideCounter.textContent = currentSlide;
            
            // Update button states
            prevBtn.disabled = (currentSlide === 1);
            nextBtn.disabled = (currentSlide === totalSlides);
        }

        function changeSlide(n) {
            currentSlide += n;
            showSlide(currentSlide);
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });

        // Initialize
        document.getElementById('totalSlides').textContent = totalSlides;
        showSlide(1);