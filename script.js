function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

const btn = document.getElementById('button');


document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('from_name')
    const mensaje = document.getElementById('message')
    const email = document.getElementById('email_id')

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_dbotzbr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      name.value = '';
      mensaje.value = '';
      email.value = '';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});