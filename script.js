
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

today = mm+'-'+dd+'-'+yyyy;
// console.log(today);



const url = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${today}.csv`



	document.getElementById('submit').addEventListener("click", function() {
	
		checkLogin();
		$("#todayDate").html(today);
	  });
	  
	  function checkLogin() {
		Papa.parse(url, {
		  download: true,
		  complete: function(results) {
			  	// $("#output").empty();
			// $("#today").html(results.data);
			// console.log(results.data);
			$("#today").append(arrayToTable(results.data));
		  }
		});
	  }



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

  