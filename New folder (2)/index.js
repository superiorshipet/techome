document.getElementById("whatsappButton").addEventListener("click", function() {
    var phoneNumber = '01067531535';
    window.open('https://api.whatsapp.com/send?phone=' + phoneNumber, '_blank');
});const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;
darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}
