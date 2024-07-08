document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if(name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    
    if(!validateEmail(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return;
    }
   
    alert('Форма успешно отправлена!');
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
