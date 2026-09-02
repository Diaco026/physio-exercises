function chooseLevel(level){
  document.getElementById('levelPage').classList.add('hidden');
  document.getElementById('bodyPage').classList.remove('hidden');
  document.getElementById('levelBadge').textContent = 'سطح انتخاب‌شده: ' + level;
  window.scrollTo({top:0,behavior:'smooth'});
}
function backToLevels(){
  document.getElementById('bodyPage').classList.add('hidden');
  document.getElementById('levelPage').classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}
