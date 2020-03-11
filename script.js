
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


let newDateToday = new Date();
let yesterday = new Date(newDateToday);
yesterday.setDate(newDateToday.getDate() - 1); //setDate also supports negative values, which cause the month to rollover.

let ndd = yesterday.getDate();
let nmm = yesterday.getMonth()+1; //January is 0!

let nyyyy = yesterday.getFullYear();
if(ndd<10){ndd='0'+ndd} if(nmm<10){nmm='0'+nmm} yesterday = nmm+'-'+ndd+'-'+nyyyy;
console.log(yesterday);


const urlToday = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${today}.csv`
const urlYesterday = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${yesterday}.csv`




$("#submit").on("click",function(){
	$("#today").empty();
	$("#yesterday").empty();
	$("#todayDate").html(today);
	$("#yesterdayDate").html(yesterday);

	dataForToday();
	dataForYesterday();

})

// getting data for today
		function dataForToday() {
			Papa.parse(urlToday, {
			  download: true,
			  complete: function(results) {
				  
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



  