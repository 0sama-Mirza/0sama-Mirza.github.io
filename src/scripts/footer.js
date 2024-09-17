document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <hr style="width: 64%;">
            <p style="text-align: center;" onclick="alert('EMAILING ME IS USELESS');">
                Email: osama.anees789@gmail.com
            </p>
            <div style="text-align:center;">
                <a href="http://motherfuckingwebsite.com/">
                    <span id="Footer-Text">Why Is My Web</span>
                </a>
                <a href="https://makefrontendshitagain.party/">
                    <span style="color: chocolate;">site So Simple?</span>
                </a>
            </div>
        `;
    }
});
