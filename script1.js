	


// getting data for today
function dataForToday() {
    Papa.parse(urlToday, {
      download: true,
      complete: function(results) {
        //   console.log(results);
        // $("#today").html(results.data);
    
        $("#today").append(arrayToTable(results.data));
      }
    });
  }

//getting data for day before
  function dataForYesterday(){
    Papa.parse(urlYesterday, {
        download: true,
        complete: function(results) {
                              
          $("#yesterday").append(arrayToTable(results.data));
        }
      });

  }





//capture user date choice
function userDateInput(){
	var finalUserChoice=[];
	$("#submitBtn").on("click",function(){
	let userDate = $("#datePicker").val();
	readyUserDate = convertDate(userDate);
	console.log(readyUserDate);
	finalUserChoice.push(readyUserDate);
	console.log(finalUserChoice);
	});
	
 };
//  console.log(finalUserChoice);
 // end capture user date choice

//converting user input to use for the search
 function convertDate(dateString){
	var p = dateString.split(/\D/g);
	return [p[1],p[2],p[0] ].join("-");
	};
    //
    


    //adding data to the table
    function arrayToTable(tableData) {
        var table = $('<table></table>');
        $(tableData).each(function (i, rowData) {
            var row = $('<tr></tr>');
            $(rowData).each(function (j, cellData) {
                row.append($('<td>'+cellData+'</td>'));
            });
            table.append(row);
        });
        return table;
    }




    
	// date picker

		function datePicker(){
            var dtToday = new Date();
            
            var month = dtToday.getMonth() + 1;
            var day = dtToday.getDate();
            var year = dtToday.getFullYear();
            if(month < 10)
                month = '0' + month.toString();
            if(day < 10)
                day = '0' + day.toString();
            
            var maxDate = year + '-' + month + '-' + day;
            
            $('#datePicker').attr('max', maxDate);
            $('#datePicker').attr('min', '2020-01-22');
        };
    
        // end date picker