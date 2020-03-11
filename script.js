
// messing up with dates

//today date to include into url

let today = new Date();

let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();

if(dd<10) {dd='0'+dd;} 
if(mm<10) {mm='0'+mm;} 

today = mm+'-'+dd+'-'+yyyy;

// today date end

//yesterday date
let newDateToday = new Date();
let yesterday = new Date(newDateToday);
yesterday.setDate(newDateToday.getDate() - 1); //setDate also supports negative values, which cause the month to rollover.

let ndd = yesterday.getDate();
let nmm = yesterday.getMonth()+1; //January is 0!

let nyyyy = yesterday.getFullYear();
if(ndd<10){ndd='0'+ndd} if(nmm<10){nmm='0'+nmm} yesterday = nmm+'-'+ndd+'-'+nyyyy;
// console.log(yesterday);

//yesterday date end

//counter of dates
let date1 = new Date("01-22-2020"); 
let date2 = new Date(today); 
  
// To calculate the time difference of two dates 
let Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24)); 
  
//To display the final no. of days (result) 
console.log(Difference_In_Days); 
//counter of dates end

const urlToday = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${today}.csv`
const urlYesterday = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${yesterday}.csv`


window.addEventListener('load', (event) => {
	$("#dataDays").html(Difference_In_Days);
	$("#todayDate").html(today);
	$("#yesterdayDate").html(yesterday);
	datepicker();
	$("#today").empty();
	$("#yesterday").empty();
	
	dataForToday();
	dataForYesterday();
  });



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

	function datepicker (){
		let dtToday = new Date();
		
		let month = dtToday.getMonth() + 1;
		let day = dtToday.getDate();
		let year = dtToday.getFullYear();
		if(month < 10)
			month = '0' + month.toString();
		if(day < 10)
			day = '0' + day.toString();
		
		let maxDate = year + '-' + month + '-' + day;
			$('#datePicker').attr('max', maxDate);
			$('#datePicker').attr('min', '2020-01-22');
	};

	// end date picker


  /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/