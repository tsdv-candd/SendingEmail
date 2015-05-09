//Get current date
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();

		if(dd<10){
			dd='0'+dd
		} 
		if(mm<10){
			mm='0'+mm
		}
		
		yy = yy.toString().substr(2,2);
		
	var today = dd+mm+yy;
	
function autousername() {
		var total;
		var f2 = document.getElementById("first-name").value.substring(0, 2);
		var l2 = document.getElementById("last-name").value.substring(0, 2);
		 
		 var place = 0;
		if (document.getElementById("w").checked) {
			place = "W";
		}
		else if (document.getElementById("n").checked) {
			place = "N";
		}
		else if (document.getElementById("b").checked) {
			place = "B";
		}
		else if (document.getElementById("m").checked) {
			place = "M";
		}
			 
		 total = "(" + place + ")" + f2 + l2 + today ;

	document.getElementById('username').value = total;
}

function examTime() {
	var diff = 0;
	var one_hour=1000*60*60;
	
	var exam_started=document.getElementById('exam-started-date').value;
	var exam_finished=document.getElementById('exam-finished-date').value;

	
	var date1 = new Date(exam_started);
	var date2 = new Date(exam_finished);
	var timeDiff = date2.getTime() - date1.getTime();
	var diff = Math.round(timeDiff / one_hour);
	document.getElementById('length-examination').value = diff;
}

function hospitalTime() {
	var diff2 = 0;
	var one_hour=1000*60*60;
	
	var examinar_arrived=document.getElementById('examiner-arrived-date').value;
	var examinar_left=document.getElementById('examiner-left-date').value;

	
	var date3 = new Date(examinar_arrived);
	var date4 = new Date(examinar_left);
	var diff2T = date4.getTime() - date3.getTime();
	var diff2 = Math.round(diff2T / one_hour);
	document.getElementById('time-hospital').value = diff2;
}

function assaultTime() {
	var one_hour=1000*60*60;
	
	var assault_occured=document.getElementById('assault-date').value;
	var exam_started=document.getElementById('exam-started-date').value;

	
	var date5 = new Date(assault_occured);
	var date6 = new Date(exam_started);
	var diff3T = date6.getTime() - date5.getTime();
	var diff3 = Math.round(diff3T / one_hour);
		if (diff3>48 && diff3<=120){
		$('#op8').prop('checked', true).checkboxradio('refresh');
		$('#op9').prop('checked', true).checkboxradio('refresh');
		$('#op10').prop('checked', true).checkboxradio('refresh');
		}
		else if (diff3>24 && diff3<=48){
		$('#op1').prop('checked', true).checkboxradio('refresh');
		$('#op6').prop('checked', true).checkboxradio('refresh');
		$('#op8').prop('checked', true).checkboxradio('refresh');
		$('#op9').prop('checked', true).checkboxradio('refresh');
		$('#op10').prop('checked', true).checkboxradio('refresh');
		$('#op11').prop('checked', true).checkboxradio('refresh');
		$('#op12').prop('checked', true).checkboxradio('refresh');
		$('#op13').prop('checked', true).checkboxradio('refresh');
		$('#op15').prop('checked', true).checkboxradio('refresh');
		$('#op16').prop('checked', true).checkboxradio('refresh');
		$('#op17').prop('checked', true).checkboxradio('refresh');
		$('#op18').prop('checked', true).checkboxradio('refresh');
		$('#op19').prop('checked', true).checkboxradio('refresh');
		$('#op20').prop('checked', true).checkboxradio('refresh');
		}
		else if (diff3>12 && diff3<=24){	
		$('#op1').prop('checked', true).checkboxradio('refresh');
		$('#op3').prop('checked', true).checkboxradio('refresh');
		$('#op4').prop('checked', true).checkboxradio('refresh');
		$('#op5').prop('checked', true).checkboxradio('refresh');
		$('#op6').prop('checked', true).checkboxradio('refresh');
		$('#op7').prop('checked', true).checkboxradio('refresh');
		$('#op8').prop('checked', true).checkboxradio('refresh');
		$('#op9').prop('checked', true).checkboxradio('refresh');
		$('#op10').prop('checked', true).checkboxradio('refresh');
		$('#op11').prop('checked', true).checkboxradio('refresh');
		$('#op12').prop('checked', true).checkboxradio('refresh');
		$('#op13').prop('checked', true).checkboxradio('refresh');
		$('#op15').prop('checked', true).checkboxradio('refresh');
		$('#op16').prop('checked', true).checkboxradio('refresh');
		$('#op17').prop('checked', true).checkboxradio('refresh');
		$('#op18').prop('checked', true).checkboxradio('refresh');
		$('#op19').prop('checked', true).checkboxradio('refresh');
		$('#op20').prop('checked', true).checkboxradio('refresh');
		}
		else if (diff3>0 && diff3<=12){	
		$('#op1').prop('checked', true).checkboxradio('refresh');
		$('#op2').prop('checked', true).checkboxradio('refresh');
		$('#op3').prop('checked', true).checkboxradio('refresh');
		$('#op4').prop('checked', true).checkboxradio('refresh');
		$('#op5').prop('checked', true).checkboxradio('refresh');
		$('#op6').prop('checked', true).checkboxradio('refresh');
		$('#op7').prop('checked', true).checkboxradio('refresh');
		$('#op8').prop('checked', true).checkboxradio('refresh');
		$('#op9').prop('checked', true).checkboxradio('refresh');
		$('#op10').prop('checked', true).checkboxradio('refresh');
		$('#op11').prop('checked', true).checkboxradio('refresh');
		$('#op12').prop('checked', true).checkboxradio('refresh');
		$('#op13').prop('checked', true).checkboxradio('refresh');
		$('#op14').prop('checked', true).checkboxradio('refresh');
		$('#op15').prop('checked', true).checkboxradio('refresh');
		$('#op16').prop('checked', true).checkboxradio('refresh');
		$('#op17').prop('checked', true).checkboxradio('refresh');
		$('#op18').prop('checked', true).checkboxradio('refresh');
		$('#op19').prop('checked', true).checkboxradio('refresh');
		$('#op20').prop('checked', true).checkboxradio('refresh');
	}
	document.getElementById('time-assault').value = diff3;
	}

submitForms = function(){
var name=document.getElementById('first-name').value;
    alert(name);

    document.getElementById("registration").submit();
    document.getElementById("checklist").submit();

}
