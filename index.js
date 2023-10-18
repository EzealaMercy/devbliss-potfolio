function sendMail(e){

    var params = {
        form: document.querySelector('.contact-form'),
        name: document.querySelector('.name').value,
        email: document.querySelector('.email').value,
        message: document.querySelector('.message').value,
        phone: document.querySelector('.phone').value,
        subject: document.querySelector('.subject').value,
    };

    const serviceID = 'service_4uwcwbr';
    const templateID = 'template_2a3sleu'

    emailjs .send(serviceID, templateID, params)
       .then((res) => {
         document.getElementById('name').value = '';
         document.getElementById('email').value = '';
         document.getElementById('message').value = '';
          alert('Your message sent successfully');
       }, (error) => {
        alert('error sending message')
       });
       e.target.reset();
    }