let faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question)=>{
    question.addEventListener("click", ()=>{
        question.classList.toggle("active");
    });
});