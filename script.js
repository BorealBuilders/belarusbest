(function () {
  var EN = {
    "Береза — обзор города": "Bereza — city overview",
    "Брестская область · Беларусь": "Brest Region · Belarus",
    "Береза": "Bereza",
    "Город на реке Ясельде: старинный центр Полесья и наследие Картузского монастыря.": "A town on the Yaselda River: an old Polesie centre and the legacy of the Carthusian monastery.",
    "Смотреть места": "Explore places",
    "жителей": "residents",
    "первое упоминание": "first mention",
    "основан монастырь": "monastery founded",
    "Брест — Минск": "Brest — Minsk",
    "XV век": "15th century",
    "М1": "M1",
    "О городе": "About",
    "Места": "Places",
    "Карта": "Map",
    "Экономика": "Economy",
    "Как добраться": "Getting there",
    "Красивые места": "Beautiful places",
    "Береза — административный центр Березовского района Брестской области. Город раскинулся в Полесье на реке Ясельде, на пути между Брестом и Минском. Это спокойный районный центр с уютной застройкой, зелёными зонами и заметным историческим наследием.": "Bereza is the administrative centre of Bereza District in Brest Region. The town lies in Polesie on the Yaselda River, on the way between Brest and Minsk. It is a calm district centre with cosy streets, green areas and a lot of history.",
    "Картузский монастырь": "Carthusian Monastery",
    "Остатки комплекса XVII века, основанного Львом Сапегой, — главное историческое место города.": "The remains of the 17th-century complex founded by Lew Sapieha are the town's main historic site.",
    "Открыть в Яндекс Картах": "Open in Yandex Maps",
    "Река Ясельда": "Yaselda River",
    "Тихие берега для неспешных прогулок и отдыха на природе среди полесских лугов и рощ.": "Quiet banks for slow walks and time in nature among fields and trees.",
    "Белоозёрск и озеро Белое": "Beloozersk and Lake Beloye",
    "Город-спутник района на берегу озера, известный энергетиками и тихими набережными.": "A small town in the district by a lake, known for its power workers and quiet lakeside walks.",
    "Береза, Брестская область": "Bereza, Brest Region",
    "Карта Яндекса загружается по кнопке.": "The Yandex map loads on demand.",
    "Показать интерактивную карту": "Show interactive map",
    "Если карта не появилась, её показ блокирует платформа: используйте кнопки ниже.": "If the map did not appear, the platform is blocking it: use the buttons below.",
    "Или откройте место сразу в приложении Яндекс Карт.": "Or open the place directly in Yandex Maps.",
    "Монастырь": "Monastery",
    "Береза на Яндекс Картах": "Bereza on Yandex Maps",
    "Энергетика": "Energy",
    "В Белоозёрске работает Березовская ГРЭС — крупный энергетический объект страны.": "The Bereza power plant in Beloozersk is one of the country's major energy facilities.",
    "Логистика": "Logistics",
    "Расположение на магистрали Брест — Минск поддерживает транспорт и торговлю.": "Its position on the Brest — Minsk highway supports transport and trade.",
    "Проще всего приехать на автомобиле или автобусе по трассе М1 из Бреста, Минска и соседних городов. Есть и железнодорожное сообщение по линии Брест — Барановичи.": "The easiest way is by car or bus along the M1 highway from Brest, Minsk and neighbouring towns. There is also a rail link on the Brest — Baranovichi line.",
    "Береза · обзор города": "Bereza · city overview",
    "«Савушкин продукт»": "“Savushkin Product”",
    "Один из крупных белорусских производителей молочной продукции; в Березе действует производственный филиал компании.": "One of Belarus's major dairy producers, with a factory in Bereza.",
    "Березовский мясоконсервный комбинат": "Bereza Meat-Canning Plant",
    "Одно из крупнейших в стране предприятий по переработке мяса: колбасы и мясные деликатесы.": "One of the country's largest meat-processing enterprises, known for sausages and meat delicacies.",
    "Координаты": "Coordinates",
    "52.5335° с. ш., 24.9830° в. д.": "52.5335° N, 24.9830° E",
    "До Бреста": "To Brest",
    "около 100 км": "about 100 km",
    "До Минска": "To Minsk",
    "около 230 км": "about 230 km",
    "Скопировать координаты": "Copy coordinates",
    "Скопировано": "Copied",
    "Ворота Картузского монастыря": "Gate of the Carthusian Monastery",
    "Разлив реки на закате": "River floodplain at sunset",
    "Озеро с деревянным мостком": "Lake with a wooden pier",
    "Храм и фонтан на площади": "Church and fountain on the square",
    "Старинный парк": "The Old Park",
    "Белоснежный храм и большой фонтан на просторной площади: любимое место прогулок и фотографий.": "A white church and a large fountain on a big square: a favourite place for walks and photos.",
    "Вход в Центральный парк": "Entrance to Central Park",
    "Центральный парк": "Central Park",
    "Зелёный парк с кованой аркой у входа и тенистыми аллеями для прогулок.": "A green park with a wrought-iron entrance arch and leafy paths for walks.",
    "Сквер с памятником": "Square with a monument",
    "Мемориальный сквер": "Memorial square",
    "Тенистый сквер с памятником и мемориальными плитами.": "A leafy square with a monument and memorial signs.",
    "~29 тыс.": "~29k"
  };
  var lang = 'ru', nodes = [], attrs = [];

  // collect translatable text nodes and attributes
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      if (!n.parentNode || /SCRIPT|STYLE/.test(n.parentNode.nodeName)) return NodeFilter.FILTER_REJECT;
      var t = n.nodeValue.trim();
      return t && EN.hasOwnProperty(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  while (walker.nextNode()) {
    var n = walker.currentNode, v = n.nodeValue;
    nodes.push({ n: n, ru: v.trim(), a: v.match(/^\s*/)[0], b: v.match(/\s*$/)[0] });
  }
  document.querySelectorAll('[aria-label],[title],[alt]').forEach(function (el) {
    ['aria-label', 'title', 'alt'].forEach(function (k) {
      var v = el.getAttribute(k);
      if (v && EN.hasOwnProperty(v)) attrs.push({ el: el, k: k, ru: v });
    });
  });
  var titleRu = document.title;

  function tr(ru) { return lang === 'en' ? EN[ru] : ru; }

  function setLang(l) {
    lang = l;
    nodes.forEach(function (o) { o.n.nodeValue = o.a + tr(o.ru) + o.b; });
    attrs.forEach(function (o) { o.el.setAttribute(o.k, tr(o.ru)); });
    document.title = tr(titleRu);
    document.documentElement.lang = l;
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.l === l);
    });
  }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.l); });
  });

  // links to Yandex Maps
  document.querySelectorAll('.ym').forEach(function (a) {
    var q = a.getAttribute('data-q');
    if (q) a.href = 'https://yandex.ru/maps/?text=' + encodeURIComponent(q);
  });

  // load the Yandex map only on demand
  var loadBtn = document.getElementById('loadmap');
  if (loadBtn) loadBtn.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://yandex.ru/map-widget/v1/?ll=24.98%2C52.53&z=13&l=map&pt=24.98%2C52.53%2Cpm2rdl';
    f.title = tr('Береза на Яндекс Картах');
    f.setAttribute('allowfullscreen', '');
    document.getElementById('mapframe').appendChild(f);
    document.getElementById('mapfb').style.display = 'none';
    document.getElementById('mapnote').hidden = false;
  });

  // copy coordinates
  var copyBtn = document.getElementById('copycoords');
  if (copyBtn) copyBtn.addEventListener('click', function () {
    var text = '52.5335, 24.9830', label = copyBtn.firstChild;
    function done() {
      label.nodeValue = tr('Скопировано');
      setTimeout(function () { label.nodeValue = tr('Скопировать координаты'); }, 1600);
    }
    function fallback() {
      var t = document.createElement('textarea');
      t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); } catch (e) {}
      t.remove(); done();
    }
    try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
  });

  // menu: smooth scrolling + highlight of the current section
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var links = {};
  document.querySelectorAll('nav a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.getElementById(a.getAttribute('href').slice(1));
      if (!target || !target.scrollIntoView) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      Object.keys(links).forEach(function (k) { links[k].classList.toggle('on', k === target.id); });
    });
  });

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (x) {
        if (x.isIntersecting) Object.keys(links).forEach(function (k) { links[k].classList.toggle('on', k === x.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  // start in English
  setLang('en');
  document.documentElement.classList.remove('pending');
})();
