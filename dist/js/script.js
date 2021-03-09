$(document).ready(function () {

  $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
        } else {
        $('.pageup').fadeOut();
        }
    });
    
    $("a[href='#up']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    new WOW().init();
  
});

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

  hamburger.addEventListener('click', () => {
      menu.classList.add('active');
  });

  closeElem.addEventListener('click', () => {
      menu.classList.remove('active');
  });


  //ratings
  /*const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');
  counters.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
  });*/


    const forms = () => {
      const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textarea = document.querySelectorAll('textarea');
            


      const message = {
          loading: 'Загрузка...',
          success: 'Спасибо за ваше внимание, в ближайшее время я свяжусь с вами!',
          failure: 'Что-то пошло не так...'
      };

      const postData = async (url, data) => {
          document.querySelector('.status').textContent = message.loading;
          let res = await fetch(url, {
              method: 'POST',
              body: data
          });

          return await res.text();
      };

      const clearInputs = () => {
          inputs.forEach(item => {
              item.value = '';
          });
          textarea.forEach(item => {
              item.value = '';
          });
      }

      form.forEach(item => {
          item.addEventListener('submit', (e) => {
              e.preventDefault();

              let statusMessage = document.createElement('div');
              statusMessage.classList.add('status');
              statusMessage.style.color = 'red';
              item.appendChild(statusMessage);

              const formData = new FormData(item);

              postData('mailer/smart.php', formData)
                  .then(res => {
                      console.log(res);
                      statusMessage.textContent = message.success;
                  })
                  .catch(() => statusMessage.textContent = message.failure)
                  .finally(() => {
                      clearInputs();
                      setTimeout(() => {
                          statusMessage.remove();
                      }, 5000);
                  });

          });
      });
  };
 forms();
});
 