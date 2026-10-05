const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
let clicks = 0;
let surpriseLevel = 0;
let bootDone = false;

const log = (msg) => {
  const el = $('#bootLog');
  el.innerHTML += `<div>› ${msg}</div>`;
  el.scrollTop = el.scrollHeight;
};

function boot() {
  const steps = [
    [8,'LOADING FOUNDER KERNEL','Mounting creative processes'],
    [22,'SYNCING DESIGN MEMORY','Locating suspiciously good spacing'],
    [41,'CALIBRATING TECH STACK','React / Next / TypeScript detected'],
    [63,'INDEXING BUSINESS IDEAS','Warning: too many'],
    [79,'MEASURING SHIP VELOCITY','This seems statistically impossible'],
    [94,'VERIFYING PIXEL PERFECTION','Acceptable. For now.'],
    [100,'WELCOME, FOUNDER','Environment ready']
  ];
  let i=0;
  const tick=()=>{
    const [pct,text] = steps[i];
    $('#bootBar').style.width=pct+'%'; $('#bootPct').textContent=pct+'%'; $('#bootText').textContent=text; log(text);
    i++;
    if(i<steps.length) setTimeout(tick, 260);
    else setTimeout(()=>{$('#boot').classList.add('hidden');$('#app').classList.remove('hidden');bootDone=true; startAmbient();},650);
  };
  tick();
}
boot();

function toast(title, body) {
  const el=document.createElement('div'); el.className='toast';
  el.innerHTML=`<b>${title}</b><p>${body}</p>`;
  $('#toastStack').appendChild(el);
  setTimeout(()=>el.remove(),4200);
}
function glitch() {
  $('#glitch').classList.add('on'); setTimeout(()=>$('#glitch').classList.remove('on'),800);
}
function modal(title, body, label='SYSTEM MESSAGE', actionHtml='') {
  $('#modalTitle').textContent=title; $('#modalBody').textContent=body; $('#modalLabel').textContent=label; $('#modalActions').innerHTML=actionHtml; $('#modal').classList.add('show');
}
$('#modalClose').onclick=()=>$('#modal').classList.remove('show');
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')$('#modal').classList.remove('show')});

function showView(id) {
  $$('.view').forEach(v=>v.classList.remove('active-view'));
  $(`#${id}`).classList.add('active-view');
  $$('.nav').forEach(n=>n.classList.toggle('active',n.dataset.view===id));
  if(id==='metrics') surprise(1);
}
$$('.nav').forEach(n=>n.onclick=()=>showView(n.dataset.view));
$$('[data-view-target]').forEach(b=>b.onclick=()=>showView(b.dataset.viewTarget));

function buildChart(){
  const chart=$('#chart'); chart.innerHTML='';
  const vals=[34,38,31,45,43,48,51,49,55,57,52,61,63,59,66,64,70,67,73,72,77,74,81,78,83,80,87,84,91,96];
  vals.forEach((v,i)=>{const b=document.createElement('i');b.className='bar-chart';b.style.height=v+'%';b.style.opacity=.25+i/38;chart.appendChild(b)});
}
buildChart();

$('#focusBtn').onclick=()=>{
  clicks++; $('#switches').textContent=Math.max(0,42-clicks);
  document.body.classList.toggle('focus');
  toast('FOCUS MODE ENABLED','Non-essential consciousness has been minimized.');
  if(clicks===1) surprise(1);
};
$('#panicBtn').onclick=()=>{
  clicks++; glitch(); toast('DIAGNOSTIC COMPLETE','No problems detected. One problem detected. The problem is you clicked this.');
  setTimeout(()=>modal('All systems nominal.', 'FarhanOS has detected 0 critical errors, 3 unfinished ideas, 17 open browser tabs, and an alarming amount of confidence.','DIAGNOSTICS'),500);
};
$('#avatarBtn').onclick=()=>{
  clicks++; modal('Founder identity confirmed.','Mohamed Farhan — Designer / Developer / Entrepreneur. Clearance level: unnecessarily high.','IDENTITY');
};

$$('.project').forEach(p=>p.onclick=()=>{
  clicks++;
  const names={invoice:'Fera Invoice System',hospitality:'Hospitality Command',gem:'Gemstone Visual Lab'};
  const name=names[p.dataset.project];
  modal(name, `Project telemetry loaded. Status: suspiciously productive. Estimated completion: ${Math.floor(70+Math.random()*29)}%.`, 'PROJECT REGISTRY');
  surprise(clicks);
});

$('#unlockSecret').onclick=()=>{
  clicks+=2; glitch();
  modal('ACCESS GRANTED', 'Classified project unlocked: FARHANOS. Wait… that is the operating system you are currently inside. This is getting recursive.','LEVEL 04', '<button class="btn primary" id="recursive">Continue anyway ↗</button>');
  setTimeout(()=>$('#recursive')?.addEventListener('click',()=>{ $('#modal').classList.remove('show'); surprise(4); }),20);
};

$$('.vault-item').forEach(v=>v.onclick=()=>{
  clicks++;
  const n=v.dataset.vault;
  if(v.classList.contains('locked')){
    toast('CLEARANCE DENIED',`Idea ${n} requires Founder Clearance Level ${n}. Current level: “Nice try.”`);
    glitch();
    surprise(clicks);
  } else {
    const msgs={
      1:'An AI that judges your UI with the confidence of a senior designer who has never shipped anything.',
      2:'An operating system for founders. Extremely meta. Someone should probably stop this.',
      3:'An app that plans your next app, which then plans the app after that.'
    };
    modal('Idea recovered.',msgs[n],'IDEA VAULT');
  }
});

$$('.settings-list input').forEach(i=>i.onchange=()=>{
  clicks++;
  const labels={hyper:'Hyperfocus',notif:'Founder notifications',deploy:'Auto-deploy confidence',reality:'Reality filter'};
  toast(labels[i.id], i.checked?'Enabled. This decision cannot be audited.':'Disabled. Sensible.');
  if(i.id==='reality'&&i.checked) surprise(5);
});

$('#nuclear').onclick=()=>{
  clicks+=3; glitch();
  let progress=0;
  modal('Running complete diagnostic…','Scanning creativity, code quality, business instincts, coffee reserves and questionable decisions.','DEEP SCAN');
  const iv=setInterval(()=>{progress+=20;$('#modalBody').textContent=`Diagnostic progress: ${progress}%. ${progress<100?'Please remain confidently still.':'Diagnostic complete.'}`;if(progress>=100){clearInterval(iv);setTimeout(()=>reveal(),500)}},220);
};

function surprise(level=1){
  surpriseLevel=Math.max(surpriseLevel,level);
  if(level>=3) toast('FARHANOS NOTICE','The system is beginning to understand that you are clicking everything.');
  if(level>=5) { $('#mood').textContent='concerned'; $('#coffee').innerHTML='12<small>%</small>'; toast('COFFEE CRITICAL','Founder beverage reserves have entered the “pray” zone.'); }
  if(level>=7) reveal();
}

function reveal(){
  $('#clickCount').textContent=clicks;
  $('#reveal').classList.add('show');
  glitch();
}
$('#restart').onclick=()=>{
  $('#reveal').classList.remove('show'); clicks=0; surpriseLevel=0; $('#mood').textContent='focused'; $('#coffee').innerHTML='68<small>%</small>';
  toast('DIGNITY RESTORED','FarhanOS rebooted. We recommend not clicking things.');
};

function startAmbient(){
  setTimeout(()=>toast('SYSTEM READY','FarhanOS is fully synchronized. Welcome back, Farhan.'),900);
  setTimeout(()=>toast('IDEA ALERT','Your Idea Vault reports unusually high activity.'),6500);
  setInterval(()=>{
    if(Math.random()<.35 && !$('#reveal').classList.contains('show')){
      const msgs=['Background process: thinking about another project.','Design memory synchronized.','Business instinct nominal.','A new tab was probably opened.','Everything is under control.'];
      toast('BACKGROUND PROCESS',msgs[Math.floor(Math.random()*msgs.length)]);
    }
  },12000);
}
