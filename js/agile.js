$(document).ready(function() {
    $('#submitBtn').click(function() {
        processAgile();
    });


function processAgile() {
	var volume = 0;
	var complexity = 0;
	var subtotal = 0; 
	var total = 0;	
	volume = parseInt($('#analvol').val() );
	complexity = parseInt($('#analcomp').val() );	
	if (volume > 0 && complexity > 0) {
		subtotal = volume * complexity;
		total = total + subtotal;
		if (subtotal > 0) {
			$('#analsub').text(subtotal);
		}
	}
	
	volume = parseInt($('#devvol').val() );
	complexity = parseInt($('#devcomp').val() );	
	if (volume > 0 && complexity > 0) {
		subtotal = volume * complexity;
		total = total + subtotal;
		if (subtotal > 0) {
			$('#devsub').text(subtotal);
		}
	}
	
	volume = parseInt($('#qavol').val() );
	complexity = parseInt($('#qacomp').val() );	
	if (volume > 0 && complexity > 0) {
		subtotal = volume * complexity;
		total = total + subtotal;
		if (subtotal > 0) {
			$('#qasub').text(subtotal);
		}
	}
	if (total > 0) {
		var response = fibonacciSequence(total);
		$('#response').html(response);
	}	
}

function fibonacciSequence(nbr) {
	var seq = 1;
	var saveseq = 1;
	var prevseq = 1;
	var response = '';
	for (var i=0; nbr >= seq; i++) {
	   saveseq = seq;
	   seq = seq + prevseq;
	   prevseq = saveseq;
	}  
	
	if (nbr == seq) {
		response = '<span>Story Points: ' + seq + '</span>';
	}
	else {
		response = '<span>Story Points: ' + prevseq + ' - (' + nbr + ') - ' + seq + '</span>';		
	}
	return response;
}

});
