document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.accordion .panel').forEach(panel => {
    panel.addEventListener('click', () => {
      document.querySelectorAll('.accordion .panel').forEach(p => {
        p.classList.remove('active');
      });

      panel.classList.add('active');
    });
  });



});