const form = document.getElementById('confession-form');
const submitBtn = document.getElementById('submit-btn');
const confessionsContainer = document.getElementById('confessions-container');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const anonymousName = form.elements[0].value;
    const confessionText = form.elements[1].value;
    const confessionHTML = `
        <div class="confession">
            <span class="confession-anonymous">${anonymousName}</span>
            <p class="confession-text">${confessionText}</p>
        </div>
    `;
    confessionsContainer.innerHTML += confessionHTML;
    form.reset();
});