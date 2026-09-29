(function(){
  document.querySelectorAll('.ym').forEach(function(a){
    var q=a.getAttribute('data-q');
    if(q)a.href='https://yandex.ru/maps/?text='+encodeURIComponent(q);
  });
  var rv=document.querySelectorAll('.rv');
  var links={};
  document.querySelectorAll('nav a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
  if(!('IntersectionObserver' in window)){rv.forEach(function(e){e.classList.add('show')});return}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}})},{threshold:.08});
  rv.forEach(function(e){io.observe(e)});
  var so=new IntersectionObserver(function(en){en.forEach(function(x){
    if(x.isIntersecting){Object.keys(links).forEach(function(k){links[k].classList.toggle('on',k===x.target.id)})}
  })},{rootMargin:'-45% 0px -50% 0px'});
  Object.keys(links).forEach(function(id){var s=document.getElementById(id);if(s)so.observe(s)});
})();
(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var stats=document.getElementById('stats');
  function count(el){
    var to=+el.dataset.count,pre=el.dataset.pre||'',suf=el.dataset.suf||'',t0=null,dur=1400;
    function step(t){if(!t0)t0=t;var k=Math.min((t-t0)/dur,1),e=1-Math.pow(1-k,3);el.textContent=pre+Math.round(to*e)+(el.dataset.suf||'');if(k<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);
  }
  if(stats){
    if(reduce||!('IntersectionObserver' in window)){stats.classList.add('show')}
    else{var so=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){stats.classList.add('show');stats.querySelectorAll('[data-count]').forEach(count);so.disconnect()}})},{threshold:.3});so.observe(stats)}
  }
  document.querySelectorAll('.btn').forEach(function(b){
    b.addEventListener('pointerdown',function(e){
      if(reduce)return;var r=b.getBoundingClientRect(),d=Math.max(r.width,r.height),s=document.createElement('span');
      s.className='ripple';s.style.width=s.style.height=d+'px';s.style.left=(e.clientX-r.left-d/2)+'px';s.style.top=(e.clientY-r.top-d/2)+'px';
      b.appendChild(s);setTimeout(function(){s.remove()},650);
    });
  });
})();
(function(){
var EN={"Береза — обзор города": "Bereza — city overview", "Брестская область · Беларусь": "Brest Region · Belarus", "Береза": "Bereza", "Город на реке Ясельде: старинный центр Полесья и наследие Картузского монастыря.": "A town on the Yaselda River: an old Polesie centre and the legacy of the Carthusian monastery.", "Смотреть места": "Explore places", "жителей": "residents", "первое упоминание": "first mention", "основан монастырь": "monastery founded", "Брест — Минск": "Brest — Minsk", "XV век": "15th century", "М1": "M1", "О городе": "About", "История": "History", "Места": "Places", "Карта": "Map", "Экономика": "Economy", "Как добраться": "Getting there", "Знакомство": "Introduction", "Путь во времени": "Through time", "Маршрут": "Route", "Где находится": "Location", "Труд и производство": "Work and industry", "В дорогу": "On the road", "Красивые места": "Beautiful places", "Береза — административный центр Березовского района Брестской области. Город раскинулся в Полесье на реке Ясельде, на пути между Брестом и Минском. Это спокойный районный центр с уютной застройкой, зелёными зонами и заметным историческим наследием.": "Bereza is the administrative centre of Bereza District in Brest Region. The town lies in Polesie on the Yaselda River, on the way between Brest and Minsk. It is a calm district centre with cosy streets, green areas and a lot of history.", "Первые письменные упоминания о поселении Береза в составе Великого княжества Литовского.": "The first written mentions of the settlement of Bereza, then part of the Grand Duchy of Lithuania.", "Лев Сапега основывает монастырь картузов, ставший центром духовной и хозяйственной жизни округи.": "Lew Sapieha founds a Carthusian monastery that becomes the spiritual and economic centre of the area.", "XIX век": "19th century", "В составе Российской империи монастырь закрывают, а город развивается как торговый и транспортный узел.": "Under the Russian Empire the monastery is closed, while the town grows as a trade and transport hub.", "В период пребывания в составе Польши в зданиях бывшего монастыря действует лагерь «Береза-Картузская».": "While the town is part of Poland, the Bereza Kartuska camp operates in the former monastery buildings.", "1939 и далее": "1939 onward", "Присоединение к БССР, послевоенное восстановление и рост города как районного центра.": "Joining the Byelorussian SSR, post-war reconstruction and growth of the town as a district centre.", "Картузский монастырь": "Carthusian Monastery", "Остатки комплекса XVII века, основанного Львом Сапегой, — главное историческое место города.": "The remains of the 17th-century complex founded by Lew Sapieha are the town's main historic site.", "Открыть в Яндекс Картах": "Open in Yandex Maps", "Река Ясельда": "Yaselda River", "Тихие берега для неспешных прогулок и отдыха на природе среди полесских лугов и рощ.": "Quiet banks for slow walks and time in nature among fields and trees.", "Белоозёрск и озеро Белое": "Beloozersk and Lake Beloye", "Город-спутник района на берегу озера, известный энергетиками и тихими набережными.": "A small town in the district on a lake shore, known for its power workers and quiet lakeside walks.", "Центр города и парки": "Town centre and parks", "Уютные улицы, скверы и зелёные зоны: лучшее место, чтобы почувствовать характер Березы.": "Cosy streets, squares and green areas: the best place to feel the character of Bereza.", "Иллюстрация: монастырь на закате": "Illustration: monastery at sunset", "Иллюстрация: река в лесу": "Illustration: river in the forest", "Иллюстрация: озеро на рассвете": "Illustration: lake at dawn", "Иллюстрация: городской сквер": "Illustration: town square", "Береза, Брестская область": "Bereza, Brest Region", "Карта Яндекса загружается по кнопке.": "The Yandex map loads on demand.", "Показать интерактивную карту": "Show interactive map", "Если карта не появилась, её показ блокирует платформа: используйте кнопки ниже.": "If the map did not appear, the platform is blocking it: use the buttons below.", "Или откройте место сразу в приложении Яндекс Карт.": "Or open the place directly in Yandex Maps.", "Монастырь": "Monastery", "Береза на Яндекс Картах": "Bereza on Yandex Maps", "Энергетика": "Energy", "В Белоозёрске работает Березовская ГРЭС — крупный энергетический объект страны.": "The Bereza power plant in Beloozersk is one of the country's major energy facilities.", "Логистика": "Logistics", "Расположение на магистрали Брест — Минск поддерживает транспорт и торговлю.": "Its position on the Brest — Minsk highway supports transport and trade.", "Проще всего приехать на автомобиле или автобусе по трассе М1 из Бреста, Минска и соседних городов. Есть и железнодорожное сообщение по линии Брест — Барановичи.": "The easiest way is by car or bus along the M1 highway from Brest, Minsk and neighbouring towns. There is also a rail link on the Brest — Baranovichi line.", "Береза · обзор города": "Bereza · city overview", "«Савушкин продукт»": "“Savushkin Product”", "Один из крупных белорусских производителей молочной продукции; в Березе действует производственный филиал компании.": "One of Belarus's major dairy producers, with a factory in Bereza.", "Березовский мясоконсервный комбинат": "Bereza Meat-Canning Plant", "Одно из крупнейших в стране предприятий по переработке мяса: колбасы и мясные деликатесы.": "One of the country's largest meat-processing enterprises, known for sausages and meat delicacies.", "Координаты": "Coordinates", "52.5335° с. ш., 24.9830° в. д.": "52.5335° N, 24.9830° E", "До Бреста": "To Brest", "около 100 км": "about 100 km", "До Минска": "To Minsk", "около 230 км": "about 230 km", "Скопировать координаты": "Copy coordinates", "Скопировано": "Copied", "Ворота Картузского монастыря": "Gate of the Carthusian Monastery", "Разлив реки на закате": "River floodplain at sunset", "Озеро с деревянным мостком": "Lake with a wooden pier", "Храм и фонтан на площади": "Church and fountain on the square", "Площадь с фонтаном": "The Old Park", "Белоснежный храм и большой фонтан на просторной площади: любимое место прогулок и фотографий.": "A white church and a large fountain on a big square: a favourite spot for walks and photos.", "Вход в Центральный парк": "Entrance to Central Park", "Центральный парк": "Central Park", "Зелёный парк с кованой аркой у входа и тенистыми аллеями для прогулок.": "A green park with a wrought-iron entrance arch and shady alleys for walks.", "Сквер с памятником": "Square with a monument", "Мемориальный сквер": "Memorial square", "Тенистый сквер с памятником и мемориальными плитами.": "A shady square with a monument and memorial plaques.", "Руины монастырского комплекса, вид сверху": "Monastery ruins seen from above", "Кирпичные руины среди лугов": "Brick ruins in green fields"};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var fine=matchMedia('(hover: hover) and (pointer: fine)').matches;
var nodes=[],attrs=[],lang='ru';
var tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode;if(!p||/SCRIPT|STYLE/.test(p.nodeName)||(p.closest&&p.closest('[data-count]')))return NodeFilter.FILTER_REJECT;var t=n.nodeValue.trim();return t&&EN.hasOwnProperty(t)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
while(tw.nextNode()){var n=tw.currentNode,v=n.nodeValue;nodes.push({n:n,ru:v.trim(),a:v.match(/^\s*/)[0],b:v.match(/\s*$/)[0]})}
document.querySelectorAll('[aria-label],[title],[alt]').forEach(function(el){['aria-label','title','alt'].forEach(function(k){var v=el.getAttribute(k);if(v&&EN.hasOwnProperty(v))attrs.push({el:el,k:k,ru:v})})});
var titleRu=document.title;
function tr(ru){return lang==='en'?EN[ru]:ru}
function setLang(l){
  lang=l;
  nodes.forEach(function(o){o.n.nodeValue=o.a+tr(o.ru)+o.b});
  attrs.forEach(function(o){o.el.setAttribute(o.k,tr(o.ru))});
  document.title=tr(titleRu);document.documentElement.lang=l;
  document.querySelectorAll('.n[data-count]').forEach(function(el){
    if(el.dataset.suf){el.dataset.suf=l==='en'?'k':' \u0442\u044b\u0441.';el.textContent=(el.dataset.pre||'')+el.dataset.count+el.dataset.suf}
  });
  document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===l)});
  try{localStorage.setItem('lang',l)}catch(e){}
}
var fadeEls=[];nodes.forEach(function(o){var q=o.n.parentNode;if(fadeEls.indexOf(q)<0)fadeEls.push(q)});
document.querySelectorAll('.n[data-count]').forEach(function(e){fadeEls.push(e)});
var switching=false;
function switchLang(l){
  if(l===lang||switching)return;
  document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===l)});
  if(reduce){setLang(l);return}
  switching=true;
  fadeEls.forEach(function(e){e.classList.remove('tx-in');e.classList.add('tx-out')});
  setTimeout(function(){
    setLang(l);
    fadeEls.forEach(function(e){e.classList.remove('tx-out');e.classList.add('tx-in')});
    setTimeout(function(){fadeEls.forEach(function(e){e.classList.remove('tx-in')});switching=false},480);
  },230);
}
document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){switchLang(b.dataset.l)})});
var cb=document.getElementById('copycoords');
if(cb)cb.addEventListener('click',function(){
  var txt='52.5335, 24.9830',tn=cb.firstChild;
  function done(){tn.nodeValue=tr('Скопировано');setTimeout(function(){tn.nodeValue=tr('Скопировать координаты')},1600)}
  function fb(){var t=document.createElement('textarea');t.value=txt;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(e){}t.remove();done()}
  try{navigator.clipboard.writeText(txt).then(done,fb)}catch(e){fb()}
});
setLang('en');
document.documentElement.classList.remove('pending');

/* map: load Yandex embed on demand */
var lm=document.getElementById('loadmap');
if(lm)lm.addEventListener('click',function(){
  var f=document.createElement('iframe');
  f.src='https://yandex.ru/map-widget/v1/?ll=24.98%2C52.53&z=13&l=map&pt=24.98%2C52.53%2Cpm2rdl';
  f.title=tr('Береза на Яндекс Картах');f.setAttribute('allowfullscreen','');
  document.getElementById('mapframe').appendChild(f);
  document.getElementById('mapfb').style.display='none';
  document.getElementById('mapnote').hidden=false;
});

/* hero: scroll + mouse parallax, cursor glow (single rAF loop) */
var hero=document.querySelector('.hero'),inner=document.querySelector('.hero .in'),clouds=document.querySelector('.clouds'),land=document.querySelector('.land');
var S={sy:0,tx:0,ty:0,cx:0,cy:0,gx:innerWidth/2,gy:innerHeight/2,tgx:innerWidth/2,tgy:innerHeight/2},run=false,glow=null;
function apply(){
  inner.style.transform='translate('+(-S.cx*24)+'px,'+(S.sy*.25-S.cy*16)+'px)';
  inner.style.opacity=String(Math.max(1-S.sy/650,0));
  clouds.style.transform='translate('+(S.cx*40)+'px,'+(S.cy*20)+'px)';
  land.style.transform='translateX('+(-S.cx*16)+'px) scale(1.03)';
  hero.style.setProperty('--gx',(78+S.cx*14)+'%');hero.style.setProperty('--gy',(20+S.cy*14)+'%');
  if(glow)glow.style.transform='translate('+S.gx+'px,'+S.gy+'px)';
}
function loop(){
  S.cx+=(S.tx-S.cx)*.08;S.cy+=(S.ty-S.cy)*.08;S.gx+=(S.tgx-S.gx)*.16;S.gy+=(S.tgy-S.gy)*.16;
  apply();
  if(Math.abs(S.tx-S.cx)>.001||Math.abs(S.ty-S.cy)>.001||Math.abs(S.tgx-S.gx)>.5||Math.abs(S.tgy-S.gy)>.5)requestAnimationFrame(loop);else run=false;
}
function kick(){if(!run){run=true;requestAnimationFrame(loop)}}
if(!reduce){
  addEventListener('scroll',function(){S.sy=Math.min(scrollY,700);kick()},{passive:true});
}
if(!reduce&&fine){
  hero.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;var r=hero.getBoundingClientRect();S.tx=(e.clientX-r.left)/r.width-.5;S.ty=(e.clientY-r.top)/r.height-.5;kick()});
  hero.addEventListener('pointerleave',function(){S.tx=0;S.ty=0;kick()});
  glow=document.createElement('div');glow.className='glow';document.body.appendChild(glow);
  addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;S.tgx=e.clientX;S.tgy=e.clientY;glow.style.opacity='1';kick()});
  document.documentElement.addEventListener('mouseleave',function(){glow.style.opacity='0'});
  /* 3D tilt + spotlight */
  document.querySelectorAll('.place,.stat,.panel').forEach(function(el){
    el.addEventListener('pointermove',function(e){
      if(e.pointerType!=='mouse')return;
      var r=el.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
      el.style.setProperty('--mx',(px*100)+'%');el.style.setProperty('--my',(py*100)+'%');
      el.style.transition='transform .15s ease-out,opacity .7s ease';el.style.transitionDelay='0s';
      el.style.transform='perspective(900px) rotateX('+((.5-py)*10)+'deg) rotateY('+((px-.5)*12)+'deg) translateY(-6px)';
    });
    el.addEventListener('pointerleave',function(){el.style.transform='';el.style.transition='';el.style.transitionDelay=''});
  });
  /* magnetic buttons */
  document.querySelectorAll('.btn').forEach(function(b){
    b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.translate=((e.clientX-r.left-r.width/2)*.22)+'px '+((e.clientY-r.top-r.height/2)*.3)+'px'});
    b.addEventListener('pointerleave',function(){b.style.translate=''});
  });
}
})();
