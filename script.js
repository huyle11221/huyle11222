function showSlide(slideNumber) {
    // Ẩn tất cả các slide
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));

    // Hiển thị slide được chọn
    const selectedSlide = document.getElementById(`slide${slideNumber}`);
    selectedSlide.classList.add('active');
}
