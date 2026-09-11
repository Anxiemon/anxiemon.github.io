var students = [
  {name: 'Violeta'},
  {name: 'Anil'},
  {name: 'Azul'},
  {name: 'Verde'},
  {name: 'Amarelo'},
  {name: 'Laranja'},
  {name: 'Vermelho'}
];
const colorsimgonnause = ["#341539", "#00416A", "#73C2FB", "#69E842", "#F4C430", "#ED9121", "#DC143C"]
// adicionar dps corante da cúrcuma longa, tornassol e também o corante brazillin (derivado de pau brasil por exemplo)
function showOverlay(content, options = {}) {
  const defaults = {
    opacity: 0.5,
    bgColor: '#000',
    zIndex: 9999,
    width: '800px',
    bgColorModal: '#fff'
  };

  const settings = { ...defaults, ...options };

  // Remove existing overlay if present
  $('#dim-overlay').remove();
  $('#modal-overlay').remove();

  // Create dimmed background
  const $overlay = $('<div id="dim-overlay"></div>').css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: settings.bgColor,
    opacity: settings.opacity,
    zIndex: settings.zIndex
  });

  // Create centered modal
  const $modal = $('<div id="modal-overlay"></div>').css({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: settings.width,
    backgroundColor: settings.bgColorModal,
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    zIndex: settings.zIndex + 1
  });

  // Add close button
  const $closeBtn = $('<button class="close-btn">✕</button>').css({
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#666'
  }).on('click', removeOverlay);

  // Add content
  const $content = $('<div class="modal-content"></div>').append(content);

  $modal.append($closeBtn).append($content);
  $('body').append($overlay).append($modal);
}

/**
 * Removes the overlay
 */
function removeOverlay() {
  $('#dim-overlay').remove();
  $('#modal-overlay').remove();
}

/**
 * Switch case function that handles actions based on student name
 * @param {string} studentName - The name of the student/segment
 */
function handleStudentAction(studentName) {
    /* adicionar abas e método de produção,
    como cada um dos corantes interage com a luz (quais faixas de luz que absorve/reflete)
    e suas composições químicas
     */
  switch (studentName) {
    case 'Verde':
      showOverlay('<div class="w3-container"><img alt="color" style="display: inline-block; padding: 10px 0px;" src="otherassets/green.png" width="200" height="215"><div style="display: inline-block; padding: 5px;"><h2 style="color: #69E842;">Corante Verde</h2><p>(clorofila)<p>Reflete luz de comprimento ~533nm</div></div><div class="w3-container w3-light-grey"><div style="display: inline-block; padding: 20px;"><h2>Ingredientes:</h2><ul><li>200g de espinafre<li>1/2 xícara de chá de água</li><br><br></ul></div><div style="display: inline-block; padding: 10px;"><h2>Método de preparo:</h2><ol><li>Processe os dois ingredientes em um liquidificador<li>Coe a místura feita<li>Ferva a fogo baixo<li>Utilize para qualquer coisa que quiser (está pronto)</ol></div></div>', '');
      break;
    case 'Laranja':
      showOverlay('<div class="w3-container"><img alt="color" style="display: inline-block; padding: 10px 0px;" src="otherassets/orange.png" width="200" height="215"><div style="display: inline-block; padding: 5px;"><h2 style="color: #ED9121;">Corante Laranja</h2><p>(carotenoides)<p>Reflete luz de comprimento ~613nm</div></div><div class="w3-container w3-light-grey"><div style="display: inline-block; padding: 20px;"><h2>Ingredientes:</h2><ul><li>Duas cenouras<li>1/2 xícara de chá de água</li><br><br></ul></div><div style="display: inline-block; padding: 10px;"><h2>Método de preparo:</h2><ol><li>Processe os dois ingredientes em um liquidificador<li>Coe a místura feita<li>Ferva a fogo baixo<li>Utilize para qualquer coisa que quiser (está pronto)</ol></div>');
      break;
    case 'Anil':
      showOverlay('<div class="w3-container"><img alt="color" style="display: inline-block; padding: 10px 0px;" src="otherassets/indigo.png" width="200" height="215"><div style="display: inline-block; padding: 20px;"><h2 style="color: #00416A;">Anil/Indigo (corante)</h2><p>C₁₆H₁₀N₂O₂/Indigotin<p>Comprimento de onda de luz refletida desconhecido</div></div><div class="w3-container w3-light-grey"><div style="display: inline-block; padding: 5px;"><h2>Ingredientes:</h2><ul><li>Folhas da planta Indigofera Tinctora<li>Água (quantidade varia)</li></ul></div><div style="display: inline-block; padding: 5px;"><h2>Método de preparo:</h2><ol><li>Coloque as folhas na água, e fermentem elas com uma fonte de nutrientes até ter precipitação (ou seja, até tiver coisas na parte debaixo da solução)<li>Misture com uma base forte (algo bem alcalino, com pH alto), como soda cáustica<li>Utilize para qualquer coisa que quiser (está pronto)</ol>')
      break;
    case 'Azul':
      showOverlay('<div class="w3-container"><img alt="color" style="display: inline-block; padding: 10px 0px;" src="otherassets/blue.png" width="200" height="215"><div style="display: inline-block; padding: 20px;"><h2 style="color: #5A7FE2;">Azul</h2><p>(antocianinas de repolho roxo em uma solução básica)<p>Reflete luz de comprimento ~440nm, ~510nm, ~808nm</div></div><div class="w3-container w3-light-grey"><div style="display: inline-block; padding: 5px;"><h2>Ingredientes:</h2><ul><li>Repolho roxo (quantidade varia)<li>Alguma solução básica, como bicarbonato de sódio (quantidade varia)<li>Água (quantidade varia)</li></ul></div><div style="display: inline-block; padding: 5px;"><h2>Método de preparo:</h2><ol><li>Pique o repolho<li>Ferva por 10 minutos<li>Retire as folhas da solução<li>Coloque bicarbonato (quantidade varia em quão azul que você quer que fique)<li>Utilize para qualquer coisa que quiser (está pronto)</ol></div>')
      break;
      case 'Amarelo':
          showOverlay('<div class="w3-container"><img alt="color" style="display: inline-block; padding: 10px 0px;" src="otherassets/yellow.png" width="200" height="215"><div style="display: inline-block; padding: 20px;"><h2 style="color: #D8A611;">Amarelo</h2><p>(betacaroteno)<p>Reflete luz de comprimento ~598nm</div></div><div class="w3-container w3-light-grey"><div style="display: inline-block; padding: 5px;"><h2>Ingredientes:</h2><ul><li>Cinco mangas<li>5 gramas de cúrcuma (opcional)</li></ul></div><div style="display: inline-block; padding: 5px;"><h2>Método de preparo:</h2><ol><li>Corte a manga (de qualquer jeito que quiser)<li>Bata em um liquidificador<li>Adicione cúrcuma se quiser um amarelo mais vivo<li>Utilize para qualquer coisa que quiser (está pronto)</ol></div>')
          break;
    case 'Vermelho':
      showOverlay('<div class="w3-container"><img alt="color" style="display: inline-block; padding: 10px 0px;" src="otherassets/red.png" width="200" height="215"><div style="display: inline-block; padding: 20px;"><h2 style="color: #DC143C;">Vermelho</h2><p>Corante vermelho semelhante a HgS em termos de cor<p>Reflete luz de comprimento ~684nm e <br> luz de outros comprimentos desconhecidos</div></div><div class="w3-container w3-light-grey"><div style="display: inline-block; padding: 5px;"><h2>Ingredientes:</h2><ul><li>Corpos de insetos do genus Kermes (quantidade varia)<li>Água (quantidade varia)</ul></div><div style="display: inline-block; padding: 5px;"><h2>Método de preparo:</h2><ol><li>Seque os corpos de inseto<li>Processe eles de qualquer forma que quiser até virarem um pó<li>Coloque esse pó em um recipiente de água, e "cozinhe" essa solução em fogo baixo<li>Coe essa solução<li>Utilize para qualquer coisa que quiser (está pronto)</ol></div>')
    break;
    case 'Violeta':
      showOverlay('<div class="w3-container"><img alt="color" style="display: inline-block; padding: 10px 0px;" src="otherassets/violet.png" width="200" height="215"><div style="display: inline-block; padding: 20px;"><h2 style="color: #341539;">Violeta</h2><p>(antocianinas)<p>Reflete luz de comprimento ~380nm</div></div><div class="w3-container w3-light-grey"><div style="display: inline-block; padding: 5px;"><h2>Ingredientes:</h2><ul><li>Amoras (200g ou mais)</li><br><br></ul></div><div style="display: inline-block; padding: 5px;"><h2>Método de preparo:</h2><ol><li>Bata as amoras em um liquidificador (ou mixer)<li>Coe com uma peneira<li>Utilize para qualquer coisa que quiser (está pronto)</ol></div>')
      break;
    default:
      // Default action for unknown student
      showOverlay("<p>esse site não tá pronto ainda (por causa da incompetência de um certo alguém) e eu peço desculpas por isso</p>")
      break;
  }
}

var shuffle = function (o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

var hashCode = function (string) {
  // See http://www.cse.yorku.ca/~oz/hash.html
  var hash = 5381;
  for (i = 0; i < string.length; i++) {
    var char = string.charCodeAt(i);
    hash = ((hash << 5) + hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

var mod = function (a, b) {
  return ((a % b) + b) % b;
};

$(function () {
  var studentContainer = $('#students');
  students.forEach(function (student) {
    var name = student.name;
    studentContainer.append(
      $(document.createElement('div')).append(
          // find a way to somehow put some space between the buttons so they look nicer
        $(document.createElement('button')).attr({
          id: 'student-' + name,
          value: name,
          class: 'w3-button w3-round w3-black'
        }).change(function () {
          var cbox = $(this)[0];
          var segments = wheel.segments;
          var i = segments.indexOf(cbox.value);
          if (typeof cbox !== "undefined" && i === -1) {
            segments.push(cbox.value);

          } else if (typeof cbox == "undefined" && i !== -1) {
            segments.splice(i, 1);
          }

          segments.sort();
          wheel.update();
        }).on('click', function() {
          handleStudentAction($(this).val());
        })
      ).append(
        $(document.createElement('br')).attr({
        }).text("")));

  });

  $('#students').tsort('button', {
    attr: 'value'
  });

  var segments = [];
  $.each($('#students button'), function (key, cbox) {
    this.textContent = cbox.value
    segments.push(cbox.value);
  });

  wheel.segments = segments;
  wheel.init();
  wheel.update();

  // Hide the address bar (for mobile devices)!
  setTimeout(function () {
    window.scrollTo(0, 1);
  }, 0);
});

function createStarEffect() {
  var stars = [];
  var colors = ['#FFD700', '#FFA500', '#FF6347', '#FFFF00'];
  var numClumps = 8;
  var starsPerClump = 8;
  
  for (var c = 0; c < numClumps; c++) {
    var clumpCenterX = Math.random() * window.innerWidth;
    var clumpCenterY = Math.random() * window.innerHeight;

    for (var i = 0; i < starsPerClump; i++) {
      var star = document.createElement('div');
      var size = 15 + Math.random() * 25;
      var angle = Math.random() * Math.PI * 2;
      var speed = 3 + Math.random() * 8;
      var color = colors[Math.floor(Math.random() * colors.length)];

      star.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        left: ${clumpCenterX}px;
        top: ${clumpCenterY}px;
        opacity: 1;
        pointer-events: none;
        z-index: 9998;
      `;

      document.body.appendChild(star);

      stars.push({
        element: star,
        x: clumpCenterX,
        y: clumpCenterY,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        opacity: 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      });
    }
  }
  
  function animateStars() {
    var allFaded = true;
    
    stars.forEach(function(star) {
      if (star.opacity > 0) {
        allFaded = false;
        
        star.x += star.speedX;
        star.y += star.speedY;
        star.rotation += star.rotationSpeed;
        star.opacity -= 0.005;
        
        star.element.style.left = star.x + 'px';
        star.element.style.top = star.y + 'px';
        star.element.style.opacity = star.opacity;
        star.element.style.transform = `rotate(${star.rotation}deg)`;
      } else {
        star.element.remove();
      }
    });
    
    if (!allFaded) {
      requestAnimationFrame(animateStars);
    }
  }
  
  animateStars();
}

var wheel = {
  angleCurrent: 0,
  angleDelta: 0,
  canvasContext: null,
  centerX: 300,
  centerY: 300,
  colorCache: [],
  downTime: 2000,
  frames: 0,
  maxSpeed: Math.PI / 16,
  segments: [],
  size: 290,
  spinStart: 0,
  timerDelay: 33,
  timerHandle: 0,
  upTime: 1000,

  spin: function () {
    // Start the wheel only if it's not already spinning
    if (wheel.timerHandle == 0) {
      wheel.spinStart = new Date().getTime();
      wheel.maxSpeed = Math.PI / (16 + (Math.random() * 10)); // Randomly vary how hard the spin is
      wheel.frames = 0;
      wheel.timerHandle = setInterval(wheel.onTimerTick, wheel.timerDelay);
    }
  },

  onTimerTick: function () {
    wheel.frames++;
    wheel.draw();

    var duration = (new Date().getTime() - wheel.spinStart);
    var progress = 0;
    var finished = false;

    if (duration < wheel.upTime) {
      progress = duration / wheel.upTime;
      wheel.angleDelta = wheel.maxSpeed * Math.sin(progress * Math.PI / 2);
    } else {
      progress = duration / wheel.downTime;
      wheel.angleDelta = wheel.maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
      if (progress >= 1) {
        finished = true;
      }
    }

    wheel.angleCurrent += wheel.angleDelta;
    while (wheel.angleCurrent >= Math.PI * 2)
      // Keep the angle in a reasonable range
      wheel.angleCurrent -= Math.PI * 2;

    if (finished) {
      clearInterval(wheel.timerHandle);
      wheel.timerHandle = 0;
      wheel.angleDelta = 0;
      $('#counter').html((wheel.frames / duration * 1000) + ' FPS');
      var segmentbeingpointedat = wheel.segments.length - Math.floor((wheel.angleCurrent / (Math.PI * 2)) * wheel.segments.length) - 1;
      var selectedStudent = wheel.segments[segmentbeingpointedat];
      handleStudentAction(selectedStudent);
      createStarEffect();
    }

    /*
     // Display RPM
     var rpm = (wheel.angleDelta * (1000 / wheel.timerDelay) * 60) / (Math.PI * 2);
     $('#counter').html( Math.round(rpm) + ' RPM' );
     */
  },

  init: function (optionList) {
    try {
      wheel.initWheel();
      wheel.initCanvas();
      wheel.draw();
      $.extend(wheel, optionList);
    } catch (exceptionData) {
      alert('Wheel is not loaded ' + exceptionData);
    }
  },

  initCanvas: function () {
    var canvas = $('#wheel #canvas').get(0);
    canvas.addEventListener('click', wheel.spin, false);
    wheel.canvasContext = canvas.getContext('2d');
  },

  initWheel: function () {
    shuffle(spectrum);
  },

  update: function () {
    // Ensure we start mid-way on an item
    var r = Math.floor(Math.random() * wheel.segments.length);
    //var r = 0;
    wheel.angleCurrent = ((r + 0.5) / wheel.segments.length) * Math.PI * 2;

    var segments = wheel.segments;
    var len = segments.length;
    var colorLen = spectrum.length;
    var colorCache = [];
    for (var i = 0; i < len; i++) {
      // var color = spectrum[mod(hashCode(segments[i]), colorLen)];
      var color = colorsimgonnause[i]
      colorCache.push(color);
    }
	let testvar = colorCache
    wheel.colorCache = colorCache;
	
    wheel.draw();
  },

  draw: function () {
    wheel.clear();
    wheel.drawWheel();
    wheel.drawNeedle();
  },

  clear: function () {
    var ctx = wheel.canvasContext;
    ctx.clearRect(0, 0, 1000, 800);
  },

  drawNeedle: function () {
    var ctx = wheel.canvasContext;
    var centerX = wheel.centerX;
    var centerY = wheel.centerY;
    var size = wheel.size;

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.fileStyle = '#ffffff';

    ctx.beginPath();

    ctx.moveTo(centerX + size - 40, centerY);
    ctx.lineTo(centerX + size + 20, centerY - 10);
    ctx.lineTo(centerX + size + 20, centerY + 10);
    ctx.closePath();

    ctx.stroke();
    ctx.fill();

    // Which segment is being pointed to?
    var i = wheel.segments.length - Math.floor((wheel.angleCurrent / (Math.PI * 2)) * wheel.segments.length) - 1;

    // Now draw the winning name
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000000';
    ctx.font = '2em Arial';
    ctx.fillText(wheel.segments[i], centerX + size + 25, centerY);
  },

  drawSegment: function (key, lastAngle, angle) {
    var ctx = wheel.canvasContext;
    var centerX = wheel.centerX;
    var centerY = wheel.centerY;
    var size = wheel.size;
    var value = wheel.segments[key];

    ctx.save();
    ctx.beginPath();

    // Start in the centre
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false); // Draw a arc around the edge
    ctx.lineTo(centerX, centerY); // Now draw a line back to the centre
    // Clip anything that follows to this area
    //ctx.clip(); // It would be best to clip, but we can double performance without it
    ctx.closePath();

    ctx.fillStyle = wheel.colorCache[key];
    ctx.fill();
    ctx.stroke();

    // Now draw the text
    ctx.save(); // The save ensures this works on Android devices
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);

    ctx.fillStyle = '#000000';
    ctx.restore();
    ctx.restore();
  },

  drawWheel: function () {
    var ctx = wheel.canvasContext;

    var angleCurrent = wheel.angleCurrent;
    var lastAngle = angleCurrent;

    var len = wheel.segments.length;

    var centerX = wheel.centerX;
    var centerY = wheel.centerY;
    var size = wheel.size;

    var PI2 = Math.PI * 2;

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = '1.4em Arial';

    for (var i = 1; i <= len; i++) {
      var angle = PI2 * (i / len) + angleCurrent;
      wheel.drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }
    // Draw a center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, PI2, false);
    ctx.closePath();

    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000000';
    ctx.fill();
    ctx.stroke();

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, PI2, false);
    ctx.closePath();

    ctx.lineWidth = 10;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
  }
};
