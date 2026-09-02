function showBodyParts(level){
  document.getElementById('levelsPage').classList.add('hidden');
  document.getElementById('bodyPage').classList.remove('hidden');
  document.getElementById('selectedLevel').textContent = 'سطح انتخاب‌شده: ' + level;
  window.scrollTo({top:0, behavior:'smooth'});
}
function backToLevels(){
  document.getElementById('bodyPage').classList.add('hidden');
  document.getElementById('levelsPage').classList.remove('hidden');
  window.scrollTo({top:0, behavior:'smooth'});
}
