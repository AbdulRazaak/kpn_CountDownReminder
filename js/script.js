var cthour = 0;        
var ctmnts = 0;
var ctsecs = 0;
var startchr = 0;     

function countdownTimer() {
  if(startchr == 0 && document.getElementById('hrs') && document.getElementById('mns') && document.getElementById('scs')) {
    cthour = parseInt(document.getElementById('hrs').value) + 0; 
    ctmnts = parseInt(document.getElementById('mns').value) + 0;
    ctsecs = parseInt(document.getElementById('scs').value) * 1;
      

    if(isNaN(ctmnts)) cthour = 0;  
    if(isNaN(ctmnts)) ctmnts = 0;
    if(isNaN(ctsecs)) ctsecs = 0;

    document.getElementById('hrs').value = cthour; 
    document.getElementById('mns').value = ctmnts;
    document.getElementById('scs').value = ctsecs;
    startchr = 1;
    document.getElementById('btnct').setAttribute('disabled', 'disabled');     
  }

  if(cthour==0 && ctmnts==0 && ctsecs==0) {
    startchr = 0;
    document.getElementById('btnct').removeAttribute('disabled');
    var msg = document.getElementById('msg').value;  
    alert(msg);

    return false;
  }
  else {
      if (ctsecs > 0) {
            ctsecs--;
        }
        else {
            if (ctmnts > 0) {
                ctmnts--;
                ctsecs = 59;
            }
            else {
                ctmnts = 59;
                ctsecs= 59;
                cthour--;
            }
        }

  }
  document.getElementById('showhrs').innerHTML = cthour;
  document.getElementById('showmns').innerHTML = ctmnts;
  document.getElementById('showscs').innerHTML = ctsecs;
  setTimeout('countdownTimer()', 1000);
}