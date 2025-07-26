(function() {
  // Create a script tag for the Adsterra social widget
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = 'https://pl27266459.profitableratecpm.com/1f/ae/b3/1faeb304331c7d3cd6d4ea1e6f6ffedf.js';

  // Inject into a specific container if it exists
  var target = document.getElementById('socialAdHere');
  if (target) {
    target.appendChild(s);
  } else {
    // Fallback if no target exists
    document.body.appendChild(s);
  }
})();
