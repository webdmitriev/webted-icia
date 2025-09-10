document.addEventListener('DOMContentLoaded', function () {

  // current date
  if (document.getElementById('current-date')) { document.getElementById('current-date').setAttribute("data-date", "©" + new Date().getFullYear()) }

  // accordion
  document.querySelectorAll('.accordion .panel').forEach(panel => {
    panel.addEventListener('click', () => {
      document.querySelectorAll('.accordion .panel').forEach(p => {
        p.classList.remove('active');
      });

      panel.classList.add('active');
    });
  });



});