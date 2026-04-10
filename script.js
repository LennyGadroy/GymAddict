const EX_LUNDI_JEUDI = [
  {id:"tractions",      name:"Tractions",                               sets:3,repsLabel:"Max / 10",     defaultReps:10, type:"compound", muscles:["dos"],      restSec:180},
  {id:"dips",           name:"Dips",                                    sets:3,repsLabel:"Max / 10-12",  defaultReps:10, type:"compound", muscles:["triceps"],  restSec:180},
  {id:"dev_couche",     name:"Développé couché (barre / haltères)",     sets:4,repsLabel:"8-10 reps",    defaultReps:10, type:"compound", muscles:["pecs"],     restSec:180},
  {id:"chest_fly",      name:"Chest fly (papillon)",                    sets:3,repsLabel:"12-15 reps",   defaultReps:12, type:"isolation",muscles:["pecs"],     restSec:90},
  {id:"curl_pupitre",   name:"Curl Pupitre / Curl Marteau",             sets:3,repsLabel:"Max / 10",     defaultReps:10, type:"compound", muscles:["biceps"],   restSec:180},
  {id:"curl_ez",        name:"Curl Barre EZ",                           sets:3,repsLabel:"10-12 reps",   defaultReps:10, type:"isolation",muscles:["biceps"],   restSec:90},
  {id:"ext_triceps",    name:"Extension triceps (poulie haute)",        sets:3,repsLabel:"12-15 reps",   defaultReps:12, type:"isolation",muscles:["triceps"],  restSec:90},
  {id:"curl_biceps",    name:"Curl Biceps (poulie basse)",              sets:3,repsLabel:"12-15 reps",   defaultReps:12, type:"isolation",muscles:["biceps"],   restSec:90},
  {id:"pompes",         name:"Pompes",                                  sets:3,repsLabel:"10-15 reps",   defaultReps:12, type:"isolation",muscles:["pecs"],     restSec:90},
  {id:"releves_jambes", name:"Relevés de jambes",                       sets:4,repsLabel:"12-15 reps",   defaultReps:12, type:"isolation",muscles:["abdos"],    restSec:90},
  {id:"gainage",        name:"Gainage",                                 sets:3,repsLabel:"60+ secondes", defaultReps:60, type:"isolation",muscles:["abdos"],    restSec:60, isTime:true},
];

const EX_MARDI_VENDREDI = [
  {id:"tirage",         name:"Tirage vertical",                         sets:4,repsLabel:"Max / 10-12",  defaultReps:10, type:"compound", muscles:["dos"],      restSec:180},
  {id:"rowing_barre",   name:"Rowing barre / machine",                  sets:3,repsLabel:"10-12 reps",   defaultReps:10, type:"compound", muscles:["dos"],      restSec:180},
  {id:"face_pulls",     name:"Face pulls (poulie haute)",               sets:3,repsLabel:"15 reps",      defaultReps:15, type:"isolation",muscles:["epaules"],  restSec:90},
  {id:"dev_militaire",  name:"Développé militaire haltères",            sets:4,repsLabel:"8-10 reps",    defaultReps:10, type:"compound", muscles:["epaules"],  restSec:180},
  {id:"elev_laterales", name:"Élévations latérales haltères",           sets:4,repsLabel:"15 reps",      defaultReps:15, type:"isolation",muscles:["epaules"],  restSec:90},
];

const EX_MERCREDI = [
  {id:"dev_militaire",  name:"Développé militaire haltères",            sets:4,repsLabel:"8-10 reps",    defaultReps:10, type:"compound", muscles:["epaules"],  restSec:180},
  {id:"elev_laterales", name:"Élévations latérales haltères",           sets:4,repsLabel:"15 reps",      defaultReps:15, type:"isolation",muscles:["epaules"],  restSec:90},
  {id:"crunch_poulie",  name:"Crunch à la poulie haute",                sets:4,repsLabel:"15-20 reps",   defaultReps:15, type:"isolation",muscles:["abdos"],    restSec:90},
  {id:"releves_jambes", name:"Relevés de jambes",                       sets:4,repsLabel:"12-15 reps",   defaultReps:12, type:"isolation",muscles:["abdos"],    restSec:90},
  {id:"russian_twists", name:"Russian twists avec poids",               sets:3,repsLabel:"20 reps (x2)", defaultReps:20, type:"isolation",muscles:["abdos"],    restSec:60},
  {id:"gainage",        name:"Gainage (Planche)",                       sets:3,repsLabel:"60+ secondes", defaultReps:60, type:"isolation",muscles:["abdos"],    restSec:60, isTime:true},
];

const PROGRAM = {
  lundi: {label:"Lundi", day:1, icon:"💪", fullName:"Push & Pull — Polyvalent", type:"gym", exercises: EX_LUNDI_JEUDI},
  mardi: {label:"Mardi", day:2, icon:"🏋️", fullName:"Dos & Épaules", type:"gym+run", exercises: EX_MARDI_VENDREDI, running:{name:"⚡ Fractionné HIIT",steps:["🔥 10 min d'échauffement lent","⚡ 10-15 × : 30 sec sprint / 30 sec marche","🌬️ 5 min retour au calme"],targetDuration:30}},
  mercredi: {label:"Mercredi", day:3, icon:"🎯", fullName:"Core & Épaules", type:"gym", exercises: EX_MERCREDI},
  jeudi: {label:"Jeudi", day:4, icon:"🔥", fullName:"Push & Pull — Polyvalent", type:"gym+run",exercises: EX_LUNDI_JEUDI, running:{name:"🏃 Course Tempo 5km",steps:["🎯 5km à allure soutenue","💨 Légèrement inconfortable mais constant","⏱️ Maintiens le rythme jusqu'au bout"],targetDuration:35,targetDistance:5}},
  vendredi: {label:"Vendredi", day:5, icon:"💥", fullName:"Dos & Épaules", type:"gym", exercises: EX_MARDI_VENDREDI},
  samedi: {label:"Samedi", day:6, icon:"😴", fullName:"Repos Total", type:"rest", exercises:[]},
  dimanche: {label:"Dimanche", day:0, icon:"🌅", fullName:"Sortie Longue (Optionnel)", type:"run", exercises:[], running:{name:"🌿 Endurance Fondamentale — Zone 2",steps:["🕐 45–60 min à rythme très lent","💬 Tu dois pouvoir tenir une conversation","🔥 Optimal pour brûler les graisses"],targetDuration:55}}
};

const DAYS_ORDER = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
const DAY_JS_MAP  = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
const MUSCLE_LABELS = ['Pecs','Dos','Épaules','Biceps','Triceps','Abdos','Jambes'];
const MUSCLE_KEYS   = ['pecs','dos','epaules','biceps','triceps','abdos','jambes'];
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
  ss(d); triggerSave();
  if(field==='done'&&val)markDayActive(dateKey);
}

function getRunLog(dateKey){
  const d=gs();
  return (d.runLogs&&d.runLogs[dateKey])||{done:false,duration:'',distance:'',rpe:''};
}

function saveRunLog(dateKey,field,val){
  const d=gs();
  if(!d.runLogs)d.runLogs={};
  if(!d.runLogs[dateKey])d.runLogs[dateKey]={done:false,duration:'',distance:'',rpe:''};
  d.runLogs[dateKey][field]=val;
  ss(d); triggerSave();
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

function updateStreak(){document.getElementById('streakBadge').textContent='🔥 '+computeStreak()+'j';}
function updateReg(){document.getElementById('regBadge').textContent=computeReg()+'%';}

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
  const w=parseFloat(weight), r=parseInt(reps)||0;
  const isNew=!old||(w>old.weight)||(w===old.weight&&r>old.reps);
  if(isNew){
    savePR(exId,weight,reps,todayKey());
    clearTimeout(_prTimer);
    document.getElementById('prPopName').textContent=exName;
    document.getElementById('prPopVal').textContent=w+' kg'+(r?' × '+r+' reps':'');
    const pop=document.getElementById('prPopup');
    pop.classList.add('show');
    _prTimer=setTimeout(()=>pop.classList.remove('show'),3500);
    setTimeout(()=>document.querySelectorAll('.pr-flag[data-ex="'+exId+'"]').forEach(el=>el.style.display='inline-block'),100);
  }
}

function getDayProgress(dateKey,dayName){
  const prog=PROGRAM[dayName];
  if(!prog||prog.type==='rest'||prog.exercises.length===0)return{done:0,total:0,pct:0};
  let total=0,done=0;
  prog.exercises.forEach(ex=>{
    for(let i=0;i<ex.sets;i++){total++;if(getSet(dateKey,ex.id,i).done)done++;}
  });
  return{done,total,pct:total>0?Math.round(done/total*100):0};
}

function getMuscleVolumes(){
  const vols={pecs:0,dos:0,epaules:0,biceps:0,triceps:0,abdos:0,jambes:0};
  const d=gs();
  if(!d.workouts)return MUSCLE_KEYS.map(()=>0);
  for(let i=0;i<7;i++){
    const dt=new Date();dt.setDate(dt.getDate()-i);
    const key=dt.toISOString().split('T')[0];
    const dayName=DAY_JS_MAP[dt.getDay()];
    const prog=PROGRAM[dayName];
    if(!prog||!d.workouts[key])continue;
    prog.exercises.forEach(ex=>{
      (d.workouts[key][ex.id]||[]).forEach(s=>{
        if(s&&s.done){
          const w=parseFloat(s.weight)||20, r=parseFloat(s.reps)||10;
          ex.muscles.forEach(m=>{if(vols[m]!==undefined)vols[m]+=w*r;});
        }
      });
    });
  }
  return MUSCLE_KEYS.map(k=>vols[k]);
}

function getWeightHistory(exId){
  const d=gs();
  if(!d.workouts)return[];
  return Object.keys(d.workouts).sort().reduce((acc,dateKey)=>{
    const sets=(d.workouts[dateKey][exId]||[]).filter(s=>s&&s.done&&parseFloat(s.weight)>0);
    if(sets.length){
      const ws=sets.map(s=>parseFloat(s.weight));
      acc.push({date:dateKey,max:Math.max(...ws),avg:Math.round(ws.reduce((a,b)=>a+b,0)/ws.length*10)/10});
    }
    return acc;
  },[]);
}

function getAllExercises(){
  const seen=new Set(),list=[];
  Object.values(PROGRAM).forEach(day=>day.exercises.forEach(ex=>{
    if(!seen.has(ex.id)){seen.add(ex.id);list.push({id:ex.id,name:ex.name});}
  }));
  return list.sort((a,b)=>a.name.localeCompare(b.name));
}

function renderExBlock(ex,dateKey){
  const prs=getPRs();
  const exPR=prs[ex.id];
  let badge='';
  if(ex.superset) badge=`<span class="badge b-superset">Superset ${ex.superset}</span>`;
  else if(ex.type==='compound') badge=`<span class="badge b-compound">Compound · 3min</span>`;
  else badge=`<span class="badge b-isolation">Isolation · 1m30</span>`;
  if(ex.optional) badge+=`<span class="badge b-optional">Optionnel</span>`;

  let setRows='';
  for(let i=0;i<ex.sets;i++){
    const s=getSet(dateKey,ex.id,i);
    const dispW = s.weight!=='' ? s.weight : (exPR ? exPR.weight : '');
    const dispR = s.reps!==''   ? s.reps   : (ex.defaultReps||'');
    const isPR  = exPR && dispW && parseFloat(dispW)>=exPR.weight;
    const safeName=ex.name.replace(/'/g,"\\'");
    setRows+=`
    <div class="set-row" id="setrow-${ex.id}-${i}">
      <div class="set-cb${s.done?' done':''}" id="cb-${ex.id}-${i}"
        onclick="toggleSet('${dateKey}','${ex.id}',${i},'${safeName}',${ex.restSec||90})"></div>
      <div class="input-col">
        <span class="set-lbl">KG</span>
        <input class="si${isPR?' pr-input':''}" type="number" inputmode="decimal"
          id="w-${ex.id}-${i}" value="${dispW}" placeholder="kg"
          onchange="onWeightChange('${dateKey}','${ex.id}',${i},'${safeName}',this.value)"
          oninput="onWeightInput('${ex.id}',${i})">
      </div>
      <div class="input-col">
        <span class="set-lbl">${ex.isTime?'SEC':'REPS'}</span>
        <input class="si" type="number" inputmode="numeric"
          id="r-${ex.id}-${i}" value="${dispR}" placeholder="${ex.isTime?'sec':'reps'}"
          onchange="onRepsChange('${dateKey}','${ex.id}',${i},this.value)">
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
    <div class="ex-meta">📊 ${ex.sets} séries · ${ex.repsLabel}${exPR?` · 🏆 PR: <b style="color:var(--orange)">${exPR.weight}kg × ${exPR.reps}reps</b>`:''}
    </div>
    <div class="sets-wrap">${setRows}</div>
  </div>`;
}

function toggleSet(dateKey,exId,idx,exName,restSec){
  const s=getSet(dateKey,exId,idx);
  const newDone=!s.done;
  saveSet(dateKey,exId,idx,'done',newDone);
  const cb=document.getElementById('cb-'+exId+'-'+idx);
  if(cb)cb.classList.toggle('done',newDone);
  if(newDone){
    startTimer(restSec||90,exName);
    const wEl=document.getElementById('w-'+exId+'-'+idx);
    const rEl=document.getElementById('r-'+exId+'-'+idx);
    const wv=wEl?wEl.value:'', rv=rEl?rEl.value:'';
    const stored=getSet(dateKey,exId,idx);
    if(stored.weight===''&&wv) saveSet(dateKey,exId,idx,'weight',wv);
    if(stored.reps===''&&rv)   saveSet(dateKey,exId,idx,'reps',rv);
    if(wv) checkAndShowPR(exId,exName,wv,rv);
  }
  updateDayProgressBar(dateKey);
}

function onWeightChange(dateKey,exId,idx,exName,val){
  debounce('w-'+exId+'-'+idx,()=>{
    saveSet(dateKey,exId,idx,'weight',val);
    const rEl=document.getElementById('r-'+exId+'-'+idx);
    if(val) checkAndShowPR(exId,exName,val,rEl?rEl.value:'');
  });
}

function onWeightInput(exId,idx){
  const el=document.getElementById('w-'+exId+'-'+idx);
  const v=parseFloat(el?el.value:0);
  const old=getPRs()[exId];
  const flag=document.getElementById('pr-'+exId+'-'+idx);
  if(flag)flag.style.display=(old&&v>old.weight)?'inline-block':'none';
}

function onRepsChange(dateKey,exId,idx,val){
  debounce('r-'+exId+'-'+idx,()=>saveSet(dateKey,exId,idx,'reps',val));
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
    el.innerHTML=`<div class="rest-day"><div class="rest-emoji">😴</div><div class="rest-msg">REPOS TOTAL</div><div class="rest-sub">Laisse ton corps récupérer.<br>La récupération c'est aussi de l'entraînement !</div></div>`;
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
    html+=`<div class="stitle">Exercices</div><div class="card">`;
    prog.exercises.forEach(ex=>{html+=renderExBlock(ex,dateKey);});
    html+=`</div>`;
  }
  if(prog.running) html+=buildRunCard(prog.running,dateKey,'runBtn','toggleRunDone');
  el.innerHTML=html;
}

function buildRunCard(running,dateKey,btnId,toggleFn){
  const rl=getRunLog(dateKey);
  return `<div class="stitle">Running</div>
  <div class="run-card">
    <div class="run-title">${running.name}</div>
    ${running.steps.map(s=>`<div class="run-step">${s}</div>`).join('')}
    <div class="run-log">
      <div class="input-col"><span class="set-lbl">DURÉE (min)</span>
        <input class="si" type="number" inputmode="numeric" placeholder="${running.targetDuration}"
          value="${rl.duration}" onchange="debounce('rl-d-${dateKey}',()=>{saveRunLog('${dateKey}','duration',this.value);},400)"></div>
      ${running.targetDistance?`<div class="input-col"><span class="set-lbl">DIST (km)</span>
        <input class="si" type="number" inputmode="decimal" placeholder="${running.targetDistance}"
          value="${rl.distance}" onchange="debounce('rl-s-${dateKey}',()=>{saveRunLog('${dateKey}','distance',this.value);},400)"></div>`:'<div></div>'}
      <div class="input-col"><span class="set-lbl">RPE (1-10)</span>
        <input class="si" type="number" inputmode="numeric" placeholder="7" max="10" min="1"
          value="${rl.rpe}" onchange="debounce('rl-r-${dateKey}',()=>{saveRunLog('${dateKey}','rpe',this.value);},400)"></div>
    </div>
    <button class="run-done-btn${rl.done?' done':''}" id="${btnId}-${dateKey}"
      onclick="${toggleFn}('${dateKey}','${btnId}')">
      ${rl.done?'✅ Séance Running Terminée !':'Marquer la séance Running comme faite'}
    </button>
  </div>`;
}

function toggleRunDone(dateKey,btnId){
  const rl=getRunLog(dateKey);
  const v=!rl.done;
  saveRunLog(dateKey,'done',v);
  const btn=document.getElementById((btnId||'runBtn')+'-'+dateKey);
  if(btn){btn.className='run-done-btn'+(v?' done':'');btn.textContent=v?'✅ Séance Running Terminée !':'Marquer la séance Running comme faite';}
}

function renderWeek(){
  const todayName=getDayName();
  const el=document.getElementById('week-content');
  let html=`<div class="chip">📅 Programme de la semaine</div>`;
  DAYS_ORDER.forEach(dayName=>{
    const prog=PROGRAM[dayName];
    const isToday=dayName===todayName;
    const today=new Date();today.setHours(0,0,0,0);
    const d=new Date(today);d.setDate(today.getDate()+(prog.day-today.getDay()));
    const dateKey=d.toISOString().split('T')[0];
    const p=getDayProgress(dateKey,dayName);
    let typeTag='';
    if(prog.type==='gym')typeTag='<span style="color:var(--green);font-size:10px">🏋️ Salle</span>';
    else if(prog.type==='gym+run')typeTag='<span style="color:var(--blue);font-size:10px">🏋️+🏃</span>';
    else if(prog.type==='run')typeTag='<span style="color:var(--blue);font-size:10px">🏃 Running</span>';
    else typeTag='<span style="color:var(--muted);font-size:10px">😴 Repos</span>';
    const clickable=prog.type!=='rest';
    html+=`<div class="wday${isToday?' today':''}" ${clickable?`onclick="openDayDrawer('${dayName}','${dateKey}')"`:''}
      style="${clickable?'':'cursor:default'}">
      ${isToday?'<div class="today-tag">AUJOURD\'HUI</div>':''}
      <div class="wicon">${prog.icon}</div>
      <div><div class="wname">${prog.label}</div><div class="wsub">${prog.fullName}</div><div style="margin-top:4px">${typeTag}</div></div>
      <div style="margin-left:auto;text-align:right;display:flex;align-items:center;gap:8px">
        <div>
          ${prog.type!=='rest'&&p.total>0?`
            <div class="wprog${p.pct===0?' zero':''}">${p.pct}%</div>
            <div style="font-size:10px;color:var(--muted)">${p.done}/${p.total}</div>
            <div style="width:60px;height:4px;background:rgba(255,255,255,.06);border-radius:2px;margin-top:4px;margin-left:auto">
              <div style="width:${p.pct}%;height:100%;background:var(--green);border-radius:2px"></div></div>
          `:prog.type!=='rest'?'<div class="wprog zero">0%</div>':'<div class="wprog zero">—</div>'}
        </div>
        ${clickable?'<div class="wday-chevron">›</div>':''}
      </div>
    </div>`;
  });
  el.innerHTML=html;
}

let radarChart=null, weightChart=null, _chartMode='max';

function renderStats(){
  const prs=getPRs();
  const prEntries=Object.entries(prs).sort((a,b)=>b[1].weight-a[1].weight);
  let prHtml='';
  if(!prEntries.length){
    prHtml=`<div class="empty">Aucun record enregistré.<br>Entre tes charges pour les voir ici !</div>`;
  } else {
    prEntries.slice(0,20).forEach(([id,pr])=>{
      prHtml+=`<div class="pr-item">
        <div><div class="pr-item-name">${findExName(id)||id}</div>
        <div class="pr-item-day">📅 ${pr.date||'—'}${pr.reps?' · '+pr.reps+' reps':''}</div></div>
        <div class="pr-item-w">${pr.weight} kg</div>
      </div>`;
    });
  }

  const allEx=getAllExercises();
  const exOptions=allEx.map(e=>`<option value="${e.id}">${e.name}</option>`).join('');

  document.getElementById('stats-content').innerHTML=`
  <div class="chip">📊 Coach Data</div>
  <div class="stats-grid">
    <div class="stat-card"><div class="stat-v" style="color:var(--orange)">${computeStreak()}</div><div class="stat-l">🔥 Jours de streak</div></div>
    <div class="stat-card"><div class="stat-v" style="color:var(--green)">${computeReg()}%</div><div class="stat-l">📈 Régularité 7j</div></div>
  </div>

  <div class="card" style="margin-bottom:12px">
    <div class="stitle">📈 Évolution des charges</div>
    <div style="display:flex;gap:8px;margin-bottom:14px;align-items:center;flex-wrap:wrap">
      <select id="exSelect" class="si" style="flex:1;text-align:left;font-size:12px;padding:8px" onchange="renderWeightChart()">
        ${exOptions}
      </select>
      <div style="display:flex;gap:6px">
        <button id="chartMaxBtn" onclick="setChartMode('max')"
          class="badge ${_chartMode==='max'?'b-compound':'b-rest'}" style="cursor:pointer;padding:6px 10px;font-size:11px">Max</button>
        <button id="chartAvgBtn" onclick="setChartMode('avg')"
          class="badge ${_chartMode==='avg'?'b-isolation':'b-rest'}" style="cursor:pointer;padding:6px 10px;font-size:11px">Moy</button>
      </div>
    </div>
    <div style="position:relative;height:190px"><canvas id="weightChart"></canvas></div>
    <div id="weightChartEmpty" class="empty" style="display:none">Aucune donnée pour cet exercice.<br>Lance ta première séance !</div>
  </div>

  <div class="radar-wrap">
    <div class="stitle">Répartition Musculaire <span style="font-size:10px;color:var(--dim)">(7 derniers jours)</span></div>
    <canvas id="radarChart" height="250"></canvas>
  </div>

  <div class="card">
    <div class="stitle">🏆 Panthéon des Records (PR)</div>
    ${prHtml}
  </div>`;

  setTimeout(()=>{ drawRadar(); renderWeightChart(); },80);
}

function setChartMode(mode){
  _chartMode=mode;
  const mb=document.getElementById('chartMaxBtn'), ab=document.getElementById('chartAvgBtn');
  if(mb)mb.className='badge '+(mode==='max'?'b-compound':'b-rest');
  if(ab)ab.className='badge '+(mode==='avg'?'b-isolation':'b-rest');
  renderWeightChart();
}

function renderWeightChart(){
  const sel=document.getElementById('exSelect');
  if(!sel)return;
  const exId=sel.value;
  const hist=getWeightHistory(exId);
  const empty=document.getElementById('weightChartEmpty');
  const canvas=document.getElementById('weightChart');
  if(weightChart){weightChart.destroy();weightChart=null;}
  if(!hist.length){
    if(canvas)canvas.style.display='none';
    if(empty)empty.style.display='block';
    return;
  }
  if(canvas)canvas.style.display='block';
  if(empty)empty.style.display='none';
  const labels=hist.map(h=>h.date.slice(5));
  const data=hist.map(h=>_chartMode==='max'?h.max:h.avg);
  const ctx=canvas.getContext('2d');
  const grad=ctx.createLinearGradient(0,0,0,190);
  grad.addColorStop(0,'rgba(34,217,122,0.3)');
  grad.addColorStop(1,'rgba(34,217,122,0)');
  weightChart=new Chart(ctx,{
    type:'line',
    data:{
      labels,
      datasets:[{
        label:_chartMode==='max'?'Charge max (kg)':'Charge moy (kg)',
        data,fill:true,
        backgroundColor:grad,
        borderColor:'#22d97a',
        pointBackgroundColor:'#22d97a',
        pointBorderColor:'#060611',
        pointRadius:4,pointHoverRadius:6,
        tension:0.35,borderWidth:2,
      }]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:{callbacks:{label:c=>c.parsed.y+' kg'},backgroundColor:'#1a1a35',titleColor:'#e8e8f5',bodyColor:'#22d97a'}
      },
      scales:{
        x:{grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#8a90a8',font:{size:10,family:'JetBrains Mono'}}},
        y:{grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#8a90a8',font:{size:10,family:'JetBrains Mono'},callback:v=>v+'kg'},beginAtZero:false}
      }
    }
  });
}

function drawRadar(){
  const ctx=document.getElementById('radarChart');
  if(!ctx)return;
  if(radarChart)radarChart.destroy();
  radarChart=new Chart(ctx,{
    type:'radar',
    data:{
      labels:MUSCLE_LABELS,
      datasets:[{
        label:'Volume (kg·reps)',
        data:getMuscleVolumes(),
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
        pointLabels:{color:'#e8e8f5',font:{family:'Rajdhani',size:12,weight:'600'}},
        ticks:{display:false,backdropColor:'transparent'},min:0,
      }}
    }
  });
}

function findExName(id){
  for(const day of Object.values(PROGRAM)){
    const ex=day.exercises.find(e=>e.id===id);
    if(ex)return ex.name;
  }
  return id;
}

function renderCardio(){
  const age=getAge(), hrMax=220-age;
  const zoneColors=['#4ade80','#38bdf8','#facc15','#fb923c','#f87171'];
  let zonesHtml='';
  ZONE_DATA.forEach((z,i)=>{
    const lo=Math.round(hrMax*z.pct[0]/100), hi=Math.round(hrMax*z.pct[1]/100);
    zonesHtml+=`<div class="zone-row">
      <div class="zone-dot" style="background:${zoneColors[i]}"></div>
      <div><div class="zone-name" style="color:${zoneColors[i]}">${z.name}</div><div style="font-size:10px;color:var(--muted)">${z.label}</div></div>
      <div class="zone-bpm" style="color:${zoneColors[i]}">${lo}–${hi}</div>
    </div>`;
  });
  const runDays=[
    {key:'mardi', icon:'⚡',name:'Mardi — Fractionné HIIT',   desc:'Intervalles haute intensité pour brûler max de calories.',   detail:'10min éco · 10-15× (30s sprint/30s récup) · 5min retour'},
    {key:'jeudi', icon:'🏃',name:'Jeudi — Tempo 5km',          desc:'Allure soutenue sur 5km pour développer ton seuil lactique.',detail:'5km continu, légèrement inconfortable mais constant'},
    {key:'dimanche',icon:'🌿',name:'Dimanche — Sortie Longue', desc:'Endurance fondamentale Zone 2 pour brûler les graisses.',    detail:'45–60min très lent, conversation possible'},
  ];
  let runCardsHtml='';
  runDays.forEach(rd=>{
    const today=new Date();today.setHours(0,0,0,0);
    const d=new Date(today);d.setDate(today.getDate()+(PROGRAM[rd.key].day-today.getDay()));
    const dateKey=d.toISOString().split('T')[0];
    const rl=getRunLog(dateKey);
    runCardsHtml+=`<div class="run-card">
      <div class="run-title">${rd.icon} ${rd.name}</div>
      <div class="run-step" style="margin-bottom:6px">${rd.desc}</div>
      <div class="run-step" style="font-style:italic">${rd.detail}</div>
      <div class="run-log" style="margin-top:12px">
        <div class="input-col"><span class="set-lbl">DURÉE (min)</span>
          <input class="si" type="number" inputmode="numeric" placeholder="—" value="${rl.duration}"
            onchange="debounce('cr-d-${dateKey}',()=>{saveRunLog('${dateKey}','duration',this.value);},400)"></div>
        <div class="input-col"><span class="set-lbl">DIST (km)</span>
          <input class="si" type="number" inputmode="decimal" placeholder="—" value="${rl.distance}"
            onchange="debounce('cr-s-${dateKey}',()=>{saveRunLog('${dateKey}','distance',this.value);},400)"></div>
        <div class="input-col"><span class="set-lbl">RPE (1-10)</span>
          <input class="si" type="number" inputmode="numeric" placeholder="7" min="1" max="10" value="${rl.rpe}"
            onchange="debounce('cr-r-${dateKey}',()=>{saveRunLog('${dateKey}','rpe',this.value);},400)"></div>
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
      <div style="font-family:var(--fm);font-size:11px;color:var(--dim)">FC max :<br><b style="font-size:18px;color:var(--text)">${hrMax}</b> BPM</div>
    </div>
    <div id="zonesResult">${zonesHtml}</div>
  </div>`;
}

function toggleRunDone2(dateKey){
  const rl=getRunLog(dateKey);
  const v=!rl.done;
  saveRunLog(dateKey,'done',v);
  const btn=document.getElementById('crunBtn-'+dateKey);
  if(btn){btn.className='run-done-btn'+(v?' done':'');btn.textContent=v?'✅ Séance Running Terminée !':'Marquer comme faite';}
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
    const lo=Math.round(hrMax*z.pct[0]/100), hi=Math.round(hrMax*z.pct[1]/100);
    html+=`<div class="zone-row">
      <div class="zone-dot" style="background:${zoneColors[i]}"></div>
      <div><div class="zone-name" style="color:${zoneColors[i]}">${z.name}</div><div style="font-size:10px;color:var(--muted)">${z.label}</div></div>
      <div class="zone-bpm" style="color:${zoneColors[i]}">${lo}–${hi}</div>
    </div>`;
  });
  const el=document.getElementById('zonesResult');
  if(el)el.innerHTML=html;
}

function openDayDrawer(dayName,dateKey){
  const prog=PROGRAM[dayName];
  if(!prog||prog.type==='rest')return;
  document.getElementById('drawerTitle').textContent=prog.icon+' '+prog.fullName;
  const p=getDayProgress(dateKey,dayName);
  let html=`
  <div class="card" style="margin-bottom:12px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
      <span style="font-size:12px;color:var(--dim)">${new Date(dateKey+'T12:00:00').toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'})}</span>
      <span style="font-family:var(--fm);font-size:13px;color:var(--green);font-weight:700">${p.pct}%</span>
    </div>
    <div class="prog-wrap"><div class="prog-fill" id="prog-${dateKey}" style="width:${p.pct}%"></div></div>
    <div class="prog-txt" id="progtxt-${dateKey}">${p.done}/${p.total} séries</div>
  </div>`;
  if(prog.exercises.length>0){
    html+=`<div class="stitle">Exercices</div><div class="card">`;
    prog.exercises.forEach(ex=>{html+=renderExBlock(ex,dateKey);});
    html+=`</div>`;
  }
  if(prog.running) html+=buildRunCard(prog.running,dateKey,'drawerRunBtn','toggleRunDone');
  document.getElementById('drawerBody').innerHTML=html;
  document.getElementById('drawerOverlay').classList.add('open');
  document.getElementById('dayDrawer').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeDrawer(){
  document.getElementById('drawerOverlay').classList.remove('open');
  document.getElementById('dayDrawer').classList.remove('open');
  document.body.style.overflow='';
  renderWeek();
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