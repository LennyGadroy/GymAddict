const PROGRAM = {
  lundi:{label:"Lundi",day:1,icon:"💪",fullName:"Push — Pecs & Triceps",type:"gym",exercises:[
    {id:"dev_couche",name:"Développé couché (barre / haltères)",sets:4,repsLabel:"8-10 reps",type:"compound",muscles:["pecs"],restSec:180},
    {id:"dev_incline",name:"Développé incliné haltères",sets:3,repsLabel:"10-12 reps",type:"compound",muscles:["pecs"],restSec:180},
    {id:"ecartes_poulie",name:"Écartés à la poulie (Chest flys)",sets:3,repsLabel:"12-15 reps",type:"isolation",muscles:["pecs"],restSec:90},
    {id:"dips",name:"Dips / Machine triceps",sets:3,repsLabel:"Max / 10-12",type:"compound",muscles:["triceps"],restSec:180},
    {id:"ext_triceps_corde",name:"Extension triceps corde (poulie haute)",sets:3,repsLabel:"12-15 reps",type:"isolation",muscles:["triceps"],restSec:90},
  ]},
  mardi:{label:"Mardi",day:2,icon:"🏋️",fullName:"Pull — Dos & Biceps + HIIT",type:"gym+run",exercises:[
    {id:"tractions",name:"Tractions / Tirage vertical poitrine",sets:4,repsLabel:"8-10 reps",type:"compound",muscles:["dos"],restSec:180},
    {id:"rowing_barre",name:"Rowing barre / machine",sets:3,repsLabel:"10-12 reps",type:"compound",muscles:["dos"],restSec:180},
    {id:"face_pulls",name:"Face pulls (poulie haute)",sets:3,repsLabel:"15 reps",type:"isolation",muscles:["epaules"],restSec:90},
    {id:"curl_ez",name:"Curl biceps barre EZ",sets:3,repsLabel:"10-12 reps",type:"isolation",muscles:["biceps"],restSec:90},
    {id:"curl_marteau",name:"Curl marteau haltères",sets:3,repsLabel:"12 reps",type:"isolation",muscles:["biceps"],restSec:90},
  ],running:{name:"⚡ Fractionné HIIT",steps:["🔥 10 min d'échauffement lent","⚡ 10-15× : 30 sec sprint / 30 sec marche","🌬️ 5 min retour au calme"],targetDuration:30}},
  mercredi:{label:"Mercredi",day:3,icon:"🎯",fullName:"Core & Épaules",type:"gym",exercises:[
    {id:"dev_militaire",name:"Développé militaire haltères",sets:4,repsLabel:"8-10 reps",type:"compound",muscles:["epaules"],restSec:180},
    {id:"elev_laterales",name:"Élévations latérales haltères",sets:4,repsLabel:"15 reps",type:"isolation",muscles:["epaules"],restSec:90},
    {id:"crunch_poulie",name:"Crunch à la poulie haute",sets:4,repsLabel:"15-20 reps",type:"isolation",muscles:["abdos"],restSec:90},
    {id:"releves_jambes",name:"Relevés de jambes (suspendu / sol)",sets:4,repsLabel:"12-15 reps",type:"isolation",muscles:["abdos"],restSec:90},
    {id:"gainage",name:"Gainage — Planche",sets:3,repsLabel:"60+ secondes",type:"isolation",muscles:["abdos"],restSec:60,isTime:true},
  ]},
  jeudi:{label:"Jeudi",day:4,icon:"🔥",fullName:"Supersets Rappel + Tempo Run",type:"gym+run",exercises:[
    {id:"pompes_ss",name:"Pompes (Superset A1)",sets:3,repsLabel:"Max reps",type:"compound",muscles:["pecs"],restSec:0,superset:"A"},
    {id:"tirage_horiz",name:"Tirage horizontal poulie basse (Superset A2)",sets:3,repsLabel:"12 reps",type:"compound",muscles:["dos"],restSec:120,superset:"A"},
    {id:"pullover",name:"Pull-over haltère (Superset B1)",sets:3,repsLabel:"12 reps",type:"compound",muscles:["dos"],restSec:0,superset:"B"},
    {id:"oiseau",name:"Oiseau haltères / Reverse flys (Superset B2)",sets:3,repsLabel:"15 reps",type:"isolation",muscles:["epaules"],restSec:120,superset:"B"},
    {id:"leg_press",name:"Leg press (Optionnel — boost métabolique)",sets:4,repsLabel:"12 reps",type:"compound",muscles:["jambes"],restSec:120,optional:true},
  ],running:{name:"🏃 Course Tempo 5km",steps:["🎯 5km à allure soutenue","💨 Légèrement inconfortable mais constant","⏱️ Maintiens le rythme jusqu'au bout"],targetDuration:35,targetDistance:5}},
  vendredi:{label:"Vendredi",day:5,icon:"💥",fullName:"Gros Volume — Bras & Abdos",type:"gym",exercises:[
    {id:"curl_pupitre",name:"Curl biceps pupitre (Preacher curl)",sets:4,repsLabel:"10-12 reps",type:"isolation",muscles:["biceps"],restSec:90},
    {id:"ext_tete",name:"Extension triceps au-dessus de la tête",sets:4,repsLabel:"10-12 reps",type:"isolation",muscles:["triceps"],restSec:90},
    {id:"curl_inverse",name:"Curl inversé prise pronation (avant-bras)",sets:3,repsLabel:"12 reps",type:"isolation",muscles:["biceps"],restSec:90},
    {id:"russian_twists",name:"Russian twists avec poids",sets:3,repsLabel:"20 reps (×2 côtés)",type:"isolation",muscles:["abdos"],restSec:60},
    {id:"abwheel",name:"Abwheel / Gainage dynamique",sets:3,repsLabel:"10-12 reps",type:"isolation",muscles:["abdos"],restSec:60},
  ]},
  samedi:{label:"Samedi",day:6,icon:"😴",fullName:"Repos Total",type:"rest",exercises:[]},
  dimanche:{label:"Dimanche",day:0,icon:"🌅",fullName:"Sortie Longue (Optionnel)",type:"run",exercises:[],running:{name:"🌿 Endurance Fondamentale — Zone 2",steps:["🕐 45–60 min à rythme très lent","💬 Tu dois pouvoir tenir une conversation","🔥 Optimal pour brûler les graisses"],targetDuration:55}}
};

const DAYS_ORDER = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
const DAY_JS_MAP = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

const MUSCLE_LABELS = ['Pecs','Dos','Épaules','Bras','Abdos','Jambes'];
const MUSCLE_KEYS   = ['pecs','dos','epaules','bras','abdos','jambes'];
const MUSCLE_MAP_BRAS = ['biceps','triceps'];

const ZONE_COLORS = ['#4ade80','#38bdf8','#facc15','#fb923c','#f87171'];
const ZONE_DATA = [
  {name:'Zone 1',label:'Récupération active',pct:[50,60]},
  {name:'Zone 2',label:'Endurance / Brûle-graisses',pct:[60,70]},
  {name:'Zone 3',label:'Aérobie — Endurance',pct:[70,80]},
  {name:'Zone 4',label:'Tempo / Seuil lactique',pct:[80,90]},
  {name:'Zone 5',label:'VO2max / Sprint',pct:[90,100]},
];

function gs(){try{return JSON.parse(localStorage.getItem('fitcore')||'{}')}catch{return {}}}
function ss(d){localStorage.setItem('fitcore',JSON.stringify(d))}
function todayKey(){return new Date().toISOString().split('T')[0]}
function getDayName(){return DAY_JS_MAP[new Date().getDay()]}

function getSet(dateKey,exId,idx){
  const d=gs();
  return (d.workouts&&d.workouts[dateKey]&&d.workouts[dateKey][exId]&&d.workouts[dateKey][exId][idx])||{done:false,weight:'',reps:''};
}
function saveSet(dateKey,exId,idx,field,val){
  const d=gs();
  if(!d.workouts)d.workouts={};
  if(!d.workouts[dateKey])d.workouts[dateKey]={};
  if(!d.workouts[dateKey][exId])d.workouts[dateKey][exId]=[];
  if(!d.workouts[dateKey][exId][idx])d.workouts[dateKey][exId][idx]={done:false,weight:'',reps:''};
  d.workouts[dateKey][exId][idx][field]=val;
  ss(d);
  triggerSave();
  if(field==='done'&&val)markDayActive(dateKey);
}

function getRunLog(dateKey,dayName){
  const d=gs();
  return (d.runLogs&&d.runLogs[dateKey])||{done:false,duration:'',distance:'',rpe:''};
}
function saveRunLog(dateKey,field,val){
  const d=gs();
  if(!d.runLogs)d.runLogs={};
  if(!d.runLogs[dateKey])d.runLogs[dateKey]={done:false,duration:'',distance:'',rpe:''};
  d.runLogs[dateKey][field]=val;
  ss(d);
  triggerSave();
  if(field==='done'&&val)markDayActive(dateKey);
}

function getPRs(){const d=gs();return d.prs||{};}
function savePR(exId,weight,reps,date){
  const d=gs();
  if(!d.prs)d.prs={};
  d.prs[exId]={weight:parseFloat(weight),reps:parseInt(reps)||0,date};
  ss(d);
}

function markDayActive(dateKey){
  const d=gs();
  if(!d.activeDays)d.activeDays=[];
  if(!d.activeDays.includes(dateKey)){d.activeDays.push(dateKey);ss(d);}
  updateStreak();updateReg();
}

function getActiveDays(){const d=gs();return d.activeDays||[];}

function getAge(){const d=gs();return d.age||25;}
function saveAge(a){const d=gs();d.age=a;ss(d);}

function computeStreak(){
  const active=getActiveDays();
  const today=new Date();today.setHours(0,0,0,0);
  let streak=0,cur=new Date(today);
  while(true){
    const key=cur.toISOString().split('T')[0];
    if(active.includes(key)){streak++;cur.setDate(cur.getDate()-1);}
    else{if(cur.getTime()===today.getTime()){cur.setDate(cur.getDate()-1);}else break;}
  }
  return streak;
}
function computeReg(){
  const active=getActiveDays();
  let count=0;
  for(let i=0;i<7;i++){
    const d=new Date();d.setDate(d.getDate()-i);d.setHours(0,0,0,0);
    if(active.includes(d.toISOString().split('T')[0]))count++;
  }
  return Math.round(count/7*100);
}
function updateStreak(){
  document.getElementById('streakBadge').textContent='🔥 '+computeStreak()+'j';
}
function updateReg(){
  document.getElementById('regBadge').textContent=computeReg()+'%';
}

let _saveTimer;
function triggerSave(){
  clearTimeout(_saveTimer);
  const el=document.getElementById('saveInd');
  el.classList.add('on');
  _saveTimer=setTimeout(()=>el.classList.remove('on'),2000);
}

const _debounce={};
function debounce(key,fn,ms=600){
  clearTimeout(_debounce[key]);
  _debounce[key]=setTimeout(fn,ms);
}

let _timerInterval=null,_timerSec=0;
function startTimer(sec,exName){
  _timerSec=sec;
  clearInterval(_timerInterval);
  const w=document.getElementById('timerWidget');
  const d=document.getElementById('timerDisplay');
  const n=document.getElementById('timerExName');
  n.textContent=exName||'Repos';
  w.classList.add('show');
  function tick(){
    const m=Math.floor(_timerSec/60),s=_timerSec%60;
    d.textContent=m+':'+(s<10?'0':'')+s;
    d.className='tmr-time'+(_timerSec<=10?' urgent':'');
    if(_timerSec<=0){
      clearInterval(_timerInterval);_timerInterval=null;
      d.textContent='GO !';d.className='tmr-time';
      setTimeout(()=>{if(!_timerInterval)w.classList.remove('show');},2500);
    } else _timerSec--;
  }
  tick();
  _timerInterval=setInterval(tick,1000);
}
function addTime(s){_timerSec+=s;}
function dismissTimer(){
  clearInterval(_timerInterval);_timerInterval=null;
  document.getElementById('timerWidget').classList.remove('show');
}

let _prTimer;
function checkAndShowPR(exId,exName,weight,reps){
  if(!weight||parseFloat(weight)<=0)return;
  const prs=getPRs();
  const old=prs[exId];
  if(!old||parseFloat(weight)>old.weight){
    savePR(exId,weight,reps,todayKey());
    clearTimeout(_prTimer);
    document.getElementById('prPopName').textContent=exName;
    document.getElementById('prPopVal').textContent=weight+' kg'+(reps?' × '+reps+' reps':'');
    const pop=document.getElementById('prPopup');
    pop.classList.add('show');
    _prTimer=setTimeout(()=>pop.classList.remove('show'),3500);
    setTimeout(()=>updatePRFlags(exId,weight),100);
  }
}
function updatePRFlags(exId,weight){
  document.querySelectorAll('.pr-flag[data-ex="'+exId+'"]').forEach(el=>{
    el.style.display='inline-block';
  });
}

function getDayProgress(dateKey,dayName){
  const prog=PROGRAM[dayName];
  if(!prog||prog.type==='rest'||prog.exercises.length===0)return{done:0,total:0,pct:0};
  let total=0,done=0;
  prog.exercises.forEach(ex=>{
    for(let i=0;i<ex.sets;i++){
      total++;
      const s=getSet(dateKey,ex.id,i);
      if(s.done)done++;
    }
  });
  return{done,total,pct:total>0?Math.round(done/total*100):0};
}

function getMuscleVolumes(){
  const vols={pecs:0,dos:0,epaules:0,biceps:0,triceps:0,abdos:0,jambes:0};
  const d=gs();
  if(!d.workouts)return vols;
  for(let i=0;i<7;i++){
    const dt=new Date();dt.setDate(dt.getDate()-i);
    const key=dt.toISOString().split('T')[0];
    const dayIdx=dt.getDay();
    const dayName=DAY_JS_MAP[dayIdx];
    const prog=PROGRAM[dayName];
    if(!prog||!d.workouts[key])continue;
    prog.exercises.forEach(ex=>{
      const sets=d.workouts[key][ex.id]||[];
      sets.forEach(s=>{
        if(s&&s.done){
          const w=parseFloat(s.weight)||20;
          const r=parseFloat(s.reps)||10;
          const vol=w*r;
          ex.muscles.forEach(m=>{if(vols[m]!==undefined)vols[m]+=vol;});
        }
      });
    });
  }
  const bras=vols.biceps+vols.triceps;
  return [vols.pecs,vols.dos,vols.epaules,bras,vols.abdos,vols.jambes];
}

function renderExBlock(ex,dateKey,color){
  const prs=getPRs();
  const exPR=prs[ex.id];
  let badge='';
  if(ex.superset)badge=`<span class="badge b-superset">Superset ${ex.superset}</span>`;
  else if(ex.type==='compound')badge=`<span class="badge b-compound">Compound · 3min</span>`;
  else badge=`<span class="badge b-isolation">Isolation · 1m30</span>`;
  if(ex.optional)badge+=`<span class="badge b-optional">Optionnel</span>`;

  let setRows='';
  for(let i=0;i<ex.sets;i++){
    const s=getSet(dateKey,ex.id,i);
    const isPR=exPR&&s.weight&&parseFloat(s.weight)>=exPR.weight;
    setRows+=`
    <div class="set-row" id="setrow-${ex.id}-${i}">
      <div class="set-cb${s.done?' done':''}" id="cb-${ex.id}-${i}" 
        onclick="toggleSet('${dateKey}','${ex.id}',${i},'${ex.name}',${ex.restSec||90})"></div>
      <div class="input-col">
        <span class="set-lbl">KG</span>
        <input class="si${isPR?' pr-input':''}" type="number" inputmode="decimal" 
          id="w-${ex.id}-${i}" value="${s.weight}" placeholder="kg"
          onchange="onWeightChange('${dateKey}','${ex.id}',${i},'${ex.name}')"
          oninput="onWeightInput('${dateKey}','${ex.id}',${i})">
      </div>
      <div class="input-col">
        <span class="set-lbl">${ex.isTime?'SEC':'REPS'}</span>
        <input class="si" type="number" inputmode="numeric"
          id="r-${ex.id}-${i}" value="${s.reps}" placeholder="${ex.isTime?'sec':'reps'}"
          onchange="onRepsChange('${dateKey}','${ex.id}',${i})">
      </div>
      <div id="pr-${ex.id}-${i}" class="pr-flag" data-ex="${ex.id}"
        style="display:${isPR?'inline-block':'none'}">PR 🏅</div>
    </div>`;
  }

  return `
  <div class="ex-block">
    <div class="ex-header">
      <div class="ex-name">${ex.name}</div>
      ${badge}
    </div>
    <div class="ex-meta">📊 ${ex.sets} séries · ${ex.repsLabel}${exPR?` · 🏆 PR: <b style="color:var(--orange)">${exPR.weight}kg</b>`:''}
    </div>
    <div class="sets-wrap">${setRows}</div>
  </div>`;
}

function toggleSet(dateKey,exId,idx,exName,restSec){
  const s=getSet(dateKey,exId,idx);
  const newDone=!s.done;
  saveSet(dateKey,exId,idx,'done',newDone);
  const cb=document.getElementById('cb-'+exId+'-'+idx);
  if(cb){cb.classList.toggle('done',newDone);}
  if(newDone){
    startTimer(restSec||90,exName);
    const wEl=document.getElementById('w-'+exId+'-'+idx);
    const rEl=document.getElementById('r-'+exId+'-'+idx);
    const w=wEl?wEl.value:'';
    const r=rEl?rEl.value:'';
    if(w)checkAndShowPR(exId,exName,w,r);
  }
  updateDayProgressBar(dateKey);
}

function onWeightChange(dateKey,exId,idx,exName){
  const el=document.getElementById('w-'+exId+'-'+idx);
  const v=el?el.value:'';
  debounce('w-'+exId+'-'+idx,()=>{
    saveSet(dateKey,exId,idx,'weight',v);
    const rEl=document.getElementById('r-'+exId+'-'+idx);
    const r=rEl?rEl.value:'';
    if(v)checkAndShowPR(exId,exName,v,r);
  });
}

function onWeightInput(dateKey,exId,idx){
  const el=document.getElementById('w-'+exId+'-'+idx);
  const v=parseFloat(el?el.value:0);
  const prs=getPRs();
  const old=prs[exId];
  const flag=document.getElementById('pr-'+exId+'-'+idx);
  if(flag){flag.style.display=(old&&v>old.weight)?'inline-block':'none';}
}

function onRepsChange(dateKey,exId,idx){
  const el=document.getElementById('r-'+exId+'-'+idx);
  const v=el?el.value:'';
  debounce('r-'+exId+'-'+idx,()=>saveSet(dateKey,exId,idx,'reps',v));
}

function updateDayProgressBar(dateKey){
  const dt=new Date(dateKey+'T12:00:00');
  const dayName=DAY_JS_MAP[dt.getDay()];
  const p=getDayProgress(dateKey,dayName);
  const bar=document.getElementById('prog-'+dateKey);
  const txt=document.getElementById('progtxt-'+dateKey);
  if(bar)bar.style.width=p.pct+'%';
  if(txt)txt.textContent=p.done+'/'+p.total+' séries · '+p.pct+'%';
}

function renderToday(){
  const dayName=getDayName();
  const prog=PROGRAM[dayName];
  const dateKey=todayKey();
  const el=document.getElementById('today-content');

  if(!prog){el.innerHTML='<div class="empty">Programme indisponible</div>';return;}

  if(prog.type==='rest'){
    el.innerHTML=`
    <div class="rest-day">
      <div class="rest-emoji">😴</div>
      <div class="rest-msg">REPOS TOTAL</div>
      <div class="rest-sub">Laisse ton corps récupérer.<br>La récupération c'est aussi de l'entraînement !</div>
    </div>`;
    return;
  }

  const p=getDayProgress(dateKey,dayName);
  let html=`
  <div class="chip">📅 ${prog.label} — ${new Date().toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'})}</div>
  <div class="card green-glow">
    <div class="card-title">${prog.icon} ${prog.fullName}</div>
    <div class="card-sub">${prog.type==='gym+run'?'🏋️ Salle + 🏃 Running':'🏋️ Salle de sport'}</div>
    <div class="prog-txt" id="progtxt-${dateKey}">${p.done}/${p.total} séries · ${p.pct}%</div>
    <div class="prog-wrap"><div class="prog-fill" id="prog-${dateKey}" style="width:${p.pct}%"></div></div>
  </div>`;

  if(prog.exercises.length>0){
    html+=`<div class="stitle">Exercices</div>`;
    html+=`<div class="card">`;
    prog.exercises.forEach(ex=>{html+=renderExBlock(ex,dateKey);});
    html+=`</div>`;
  }

  if(prog.running){
    const rl=getRunLog(dateKey,dayName);
    html+=`<div class="stitle">Running</div>`;
    html+=`<div class="run-card">
      <div class="run-title">${prog.running.name}</div>
      ${prog.running.steps.map(s=>`<div class="run-step">${s}</div>`).join('')}
      <div class="run-log">
        <div class="input-col"><span class="set-lbl">DURÉE (min)</span>
          <input class="si" type="number" inputmode="numeric" placeholder="${prog.running.targetDuration}" 
            value="${rl.duration}" onchange="debounce('rl-dur-${dateKey}',()=>{saveRunLog('${dateKey}','duration',this.value);},400)"></div>
        ${prog.running.targetDistance?`<div class="input-col"><span class="set-lbl">DIST (km)</span>
          <input class="si" type="number" inputmode="decimal" placeholder="${prog.running.targetDistance}" 
            value="${rl.distance}" onchange="debounce('rl-dis-${dateKey}',()=>{saveRunLog('${dateKey}','distance',this.value);},400)"></div>`:'<div></div>'}
        <div class="input-col"><span class="set-lbl">RPE (1-10)</span>
          <input class="si" type="number" inputmode="numeric" placeholder="7" max="10" min="1"
            value="${rl.rpe}" onchange="debounce('rl-rpe-${dateKey}',()=>{saveRunLog('${dateKey}','rpe',this.value);},400)"></div>
      </div>
      <button class="run-done-btn${rl.done?' done':''}" id="runBtn-${dateKey}" 
        onclick="toggleRunDone('${dateKey}')">
        ${rl.done?'✅ Séance Running Terminée !':'Marquer la séance Running comme faite'}
      </button>
    </div>`;
  }

  el.innerHTML=html;
}

function toggleRunDone(dateKey){
  const rl=getRunLog(dateKey);
  const newVal=!rl.done;
  saveRunLog(dateKey,'done',newVal);
  const btn=document.getElementById('runBtn-'+dateKey);
  if(btn){btn.className='run-done-btn'+(newVal?' done':'');btn.textContent=newVal?'✅ Séance Running Terminée !':'Marquer la séance Running comme faite';}
}

function renderWeek(){
  const todayName=getDayName();
  const el=document.getElementById('week-content');
  let html=`<div class="chip">📅 Programme de la semaine</div>`;

  DAYS_ORDER.forEach(dayName=>{
    const prog=PROGRAM[dayName];
    const isToday=dayName===todayName;
    const today=new Date();today.setHours(0,0,0,0);
    const todayJsDay=today.getDay();
    const targetJsDay=prog.day;
    let diff=targetJsDay-todayJsDay;
    const d=new Date(today);d.setDate(today.getDate()+diff);
    const dateKey=d.toISOString().split('T')[0];
    const p=getDayProgress(dateKey,dayName);

    let typeTag='';
    if(prog.type==='gym')typeTag='<span style="color:var(--green);font-size:10px">🏋️ Salle</span>';
    else if(prog.type==='gym+run')typeTag='<span style="color:var(--blue);font-size:10px">🏋️+🏃</span>';
    else if(prog.type==='run')typeTag='<span style="color:var(--blue);font-size:10px">🏃 Running</span>';
    else typeTag='<span style="color:var(--muted);font-size:10px">😴 Repos</span>';

    html+=`<div class="wday${isToday?' today':''}">
      ${isToday?'<div class="today-tag">AUJOURD\'HUI</div>':''}
      <div class="wicon">${prog.icon}</div>
      <div>
        <div class="wname">${prog.label}</div>
        <div class="wsub">${prog.fullName}</div>
        <div style="margin-top:4px">${typeTag}</div>
      </div>
      <div style="margin-left:auto;text-align:right">
        ${prog.type!=='rest'&&p.total>0?`
          <div class="wprog${p.pct===0?' zero':''}">${p.pct}%</div>
          <div style="font-size:10px;color:var(--muted)">${p.done}/${p.total}</div>
          <div style="width:60px;height:4px;background:rgba(255,255,255,.06);border-radius:2px;margin-top:4px;margin-left:auto">
            <div style="width:${p.pct}%;height:100%;background:var(--green);border-radius:2px"></div>
          </div>`:'<div class="wprog zero">—</div>'}
      </div>
    </div>`;
  });

  el.innerHTML=html;
}

let radarChart=null;
function renderStats(){
  const streak=computeStreak();
  const reg=computeReg();
  const prs=getPRs();
  const prEntries=Object.entries(prs).sort((a,b)=>b[1].weight-a[1].weight);

  let prHtml='';
  if(prEntries.length===0){
    prHtml=`<div class="empty">Aucun record enregistré encore.<br>Entre tes charges pour les voir apparaître ici !</div>`;
  } else {
    prEntries.slice(0,10).forEach(([id,pr])=>{
      const exName=findExName(id);
      prHtml+=`<div class="pr-item">
        <div><div class="pr-item-name">${exName||id}</div><div class="pr-item-day">📅 ${pr.date||'—'} ${pr.reps?'· '+pr.reps+' reps':''}</div></div>
        <div class="pr-item-w">${pr.weight} kg</div>
      </div>`;
    });
  }

  document.getElementById('stats-content').innerHTML=`
  <div class="chip">📊 Coach Data</div>
  <div class="stats-grid">
    <div class="stat-card"><div class="stat-v" style="color:var(--orange)">${streak}</div><div class="stat-l">🔥 Jours de streak</div></div>
    <div class="stat-card"><div class="stat-v" style="color:var(--green)">${reg}%</div><div class="stat-l">📈 Régularité 7j</div></div>
  </div>
  <div class="radar-wrap">
    <div class="stitle">Répartition Musculaire <span style="font-size:10px;color:var(--dim)">(7 derniers jours)</span></div>
    <canvas id="radarChart" height="220"></canvas>
  </div>
  <div class="card">
    <div class="stitle">🏆 Panthéon des Records (PR)</div>
    ${prHtml}
  </div>`;

  setTimeout(()=>{
    const vols=getMuscleVolumes();
    const ctx=document.getElementById('radarChart');
    if(!ctx)return;
    if(radarChart)radarChart.destroy();
    radarChart=new Chart(ctx,{
      type:'radar',
      data:{
        labels:MUSCLE_LABELS,
        datasets:[{
          label:'Volume (kg·reps)',
          data:vols,
          fill:true,
          backgroundColor:'rgba(34,217,122,0.15)',
          borderColor:'rgba(34,217,122,0.9)',
          pointBackgroundColor:'rgba(34,217,122,1)',
          pointBorderColor:'#000',
          pointHoverBackgroundColor:'#fff',
          pointRadius:5,
        }]
      },
      options:{
        responsive:true,
        plugins:{legend:{display:false}},
        scales:{r:{
          grid:{color:'rgba(255,255,255,0.08)'},
          angleLines:{color:'rgba(255,255,255,0.05)'},
          pointLabels:{color:'#e8e8f5',font:{family:'Rajdhani',size:13,weight:'600'}},
          ticks:{display:false,backdropColor:'transparent'},
          min:0,
        }}
      }
    });
  },100);
}

function findExName(id){
  for(const [,day] of Object.entries(PROGRAM)){
    const ex=day.exercises.find(e=>e.id===id);
    if(ex)return ex.name;
  }
  return id;
}

function renderCardio(){
  const age=getAge();

  const hrMax=220-age;
  let zonesHtml='';
  const zoneColors=['#4ade80','#38bdf8','#facc15','#fb923c','#f87171'];
  ZONE_DATA.forEach((z,i)=>{
    const lo=Math.round(hrMax*z.pct[0]/100);
    const hi=Math.round(hrMax*z.pct[1]/100);
    zonesHtml+=`<div class="zone-row">
      <div class="zone-dot" style="background:${zoneColors[i]}"></div>
      <div><div class="zone-name" style="color:${zoneColors[i]}">${z.name}</div><div style="font-size:10px;color:var(--muted)">${z.label}</div></div>
      <div class="zone-bpm" style="color:${zoneColors[i]}">${lo}–${hi}</div>
    </div>`;
  });

  const runDays=[{key:'mardi',icon:'⚡',name:'Mardi — Fractionné HIIT',desc:'Entraînement par intervalles à haute intensité pour brûler max de calories.',detail:'10min éco · 10-15× (30s sprint/30s récup) · 5min retour'},
    {key:'jeudi',icon:'🏃',name:'Jeudi — Tempo 5km',desc:'Allure soutenue sur 5km pour développer ton seuil lactique.',detail:'5km continu, légèrement inconfortable mais constant'},
    {key:'dimanche',icon:'🌿',name:'Dimanche — Sortie Longue (Optionnel)',desc:'Endurance fondamentale Zone 2 pour brûler les graisses.',detail:'45–60min très lent, conversation possible'}];

  let runCardsHtml='';
  runDays.forEach(rd=>{
    const today=new Date();today.setHours(0,0,0,0);
    const targetDay=PROGRAM[rd.key].day;
    const todayJs=today.getDay();
    let diff=targetDay-todayJs;
    const d=new Date(today);d.setDate(today.getDate()+diff);
    const dateKey=d.toISOString().split('T')[0];
    const rl=getRunLog(dateKey);
    runCardsHtml+=`<div class="run-card">
      <div class="run-title">${rd.icon} ${rd.name}</div>
      <div class="run-step" style="margin-bottom:6px">${rd.desc}</div>
      <div class="run-step" style="font-style:italic">${rd.detail}</div>
      <div class="run-log" style="margin-top:12px">
        <div class="input-col"><span class="set-lbl">DURÉE (min)</span>
          <input class="si" type="number" inputmode="numeric" placeholder="—" value="${rl.duration}"
            onchange="debounce('cr-dur-${dateKey}',()=>{saveRunLog('${dateKey}','duration',this.value);},400)"></div>
        <div class="input-col"><span class="set-lbl">DIST (km)</span>
          <input class="si" type="number" inputmode="decimal" placeholder="—" value="${rl.distance}"
            onchange="debounce('cr-dis-${dateKey}',()=>{saveRunLog('${dateKey}','distance',this.value);},400)"></div>
        <div class="input-col"><span class="set-lbl">RPE (1-10)</span>
          <input class="si" type="number" inputmode="numeric" placeholder="7" min="1" max="10" value="${rl.rpe}"
            onchange="debounce('cr-rpe-${dateKey}',()=>{saveRunLog('${dateKey}','rpe',this.value);},400)"></div>
      </div>
      <button class="run-done-btn${rl.done?' done':''}" id="crunBtn-${dateKey}"
        onclick="toggleRunDone2('${dateKey}')">
        ${rl.done?'✅ Séance Running Terminée !':'Marquer comme faite'}
      </button>
    </div>`;
  });

  document.getElementById('cardio-content').innerHTML=`
  <div class="chip">🏃 Séances Running & Cardio</div>
  ${runCardsHtml}
  <div class="card">
    <div class="stitle">💓 Calculateur Zones Cardio</div>
    <div class="age-row">
      <div>
        <div style="font-size:12px;color:var(--dim);margin-bottom:6px">Ton âge</div>
        <input class="big-inp" type="number" id="ageInp" value="${age}" min="10" max="90" inputmode="numeric">
      </div>
      <button class="btn-calc" onclick="calcZones()">Calculer</button>
      <div style="font-family:var(--fm);font-size:11px;color:var(--dim)">FC max estimée :<br><b style="font-size:18px;color:var(--text)">${hrMax}</b> BPM</div>
    </div>
    <div id="zonesResult">${zonesHtml}</div>
  </div>`;
}

function toggleRunDone2(dateKey){
  const rl=getRunLog(dateKey);
  const newVal=!rl.done;
  saveRunLog(dateKey,'done',newVal);
  const btn=document.getElementById('crunBtn-'+dateKey);
  if(btn){btn.className='run-done-btn'+(newVal?' done':'');btn.textContent=newVal?'✅ Séance Running Terminée !':'Marquer comme faite';}
  markDayActive(dateKey);
}

function calcZones(){
  const inp=document.getElementById('ageInp');
  const age=parseInt(inp?inp.value:25)||25;
  saveAge(age);
  const hrMax=220-age;
  const zoneColors=['#4ade80','#38bdf8','#facc15','#fb923c','#f87171'];
  let html='';
  ZONE_DATA.forEach((z,i)=>{
    const lo=Math.round(hrMax*z.pct[0]/100);
    const hi=Math.round(hrMax*z.pct[1]/100);
    html+=`<div class="zone-row">
      <div class="zone-dot" style="background:${zoneColors[i]}"></div>
      <div><div class="zone-name" style="color:${zoneColors[i]}">${z.name}</div><div style="font-size:10px;color:var(--muted)">${z.label}</div></div>
      <div class="zone-bpm" style="color:${zoneColors[i]}">${lo}–${hi}</div>
    </div>`;
  });
  const el=document.getElementById('zonesResult');
  if(el){el.innerHTML=html;}
  document.querySelectorAll('[data-hrmax]').forEach(e=>e.textContent=hrMax);
}
const TABS=['today','week','stats','cardio'];
function switchTab(name){
  TABS.forEach(t=>{
    document.getElementById('tab-'+t).classList.toggle('active',t===name);
    document.getElementById('nav-'+t).classList.toggle('on',t===name);
  });
  if(name==='stats')renderStats();
  if(name==='week')renderWeek();
  if(name==='cardio')renderCardio();
  window.scrollTo({top:0,behavior:'smooth'});
}

function init(){
  renderToday();
  renderWeek();
  updateStreak();
  updateReg();
}

init();