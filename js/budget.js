// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
var update_recent = false;

$(function() {
	
		var canvas = document.getElementById('pointers');
		var ctx = canvas.getContext('2d');

		//For expense 1
			var timebar1 = $(document.getElementById("time1"));
			var money = $(document.getElementById("expense1"));
			var endpoint = timebar1.offset();
			var p1_x = money.offset().left + money.width();
			var p1_y = money.offset().top;
			var p2_x = p1_x;
			var p2_y = p1_y + money.height();

			ctx.strokeStyle = "#D3D3D3";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(p1_x, p1_y);
			ctx.lineTo(endpoint.left, endpoint.top);
			ctx.lineTo(p2_x, p2_y);
			ctx.stroke();

			money.mouseenter(function(e) {
				//ctx.strokeStyle = "gray";
					ctx.fillStyle = "#778899";
					ctx.beginPath();
					ctx.moveTo(p1_x, p1_y);
					ctx.lineTo(endpoint.left, endpoint.top);
					ctx.lineTo(p2_x, p2_y);
					ctx.fill();
				});

			money.mouseleave(function(e) {
				ctx.strokeStyle = "#D3D3D3";
				ctx.fillStyle = "white";
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(p1_x, p1_y);
				ctx.lineTo(endpoint.left, endpoint.top);
				ctx.lineTo(p2_x, p2_y);

				ctx.fill();
				ctx.stroke();
			});

			//For expense 2
			var timebar2 = $(document.getElementById("time2"));
			var money2 = $(document.getElementById("expense2"));
			var a_endpoint = timebar2.offset();
			var a_p1_x = money2.offset().left + money2.width();
			var a_p1_y = money2.offset().top;
			var a_p2_x = a_p1_x;
			var a_p2_y = a_p1_y + money2.height();

			ctx.strokeStyle = "#A9A9A9";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(a_p1_x, a_p1_y);
			ctx.lineTo(a_endpoint.left, a_endpoint.top);
			ctx.lineTo(a_p2_x, a_p2_y);
			ctx.stroke();

			money2.mouseenter(function(e) {
				ctx.strokeStyle = "#778899";
				ctx.lineWidth = 2;
				ctx.fillStyle = "#778899";
				ctx.beginPath();
				ctx.moveTo(a_p1_x, a_p1_y);
				ctx.lineTo(a_endpoint.left, a_endpoint.top);
				ctx.lineTo(a_p2_x, a_p2_y);
				ctx.fill();
			});

			money2.mouseleave(function(e) {
				ctx.strokeStyle = "#A9A9A9";
				ctx.lineWidth = 2;
				ctx.fillStyle = "white";
				ctx.beginPath();
				ctx.moveTo(a_p1_x, a_p1_y);
				ctx.lineTo(a_endpoint.left, a_endpoint.top);
				ctx.lineTo(a_p2_x, a_p2_y);

				ctx.fill();
				ctx.stroke();
			});
			
			if(update_recent){
				var table= document.getElementById("recentTable");
				var rowCount = table.rows.length;
				var row = table.insertRow(rowCount);
				
				var cell1=row.insertCell(0);
				cell1.innerHTML = "02/15/12";
				var cell2 =row.insertCell(1);
				cell2.innerHTML = "$1000.00";
				var cell3 = row.insertCell(2);
				cell3.innerHTML = "new copier";
				
				var timebar3 = $(document.getElementById("time3"));
				var money3 = $(document.getElementById("expense3"));
				money3.height(50);
				timebar3.height(2);

				var leftovers = $(document.getElementById("leftovers"));
				leftovers.height(leftovers.height() - 50);

				var b_endpoint = timebar3.offset();
				var b_p1_x = money3.offset().left + money3.width();
				var b_p1_y = money3.offset().top;
				var b_p2_x = b_p1_x;
				var b_p2_y = b_p1_y + money3.height();

				ctx.strokeStyle = "D3D3D3";
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(b_p1_x, b_p1_y);
				ctx.lineTo(b_endpoint.left, b_endpoint.top);
				ctx.lineTo(b_p2_x, b_p2_y);
				ctx.stroke();

				money3.mouseenter(function(e) {
					ctx.strokeStyle = "#778899";
					ctx.lineWidth = 2;
					ctx.fillStyle = "#778899";
					ctx.beginPath();
					ctx.moveTo(b_p1_x, b_p1_y);
					ctx.lineTo(b_endpoint.left, b_endpoint.top);
					ctx.lineTo(b_p2_x, b_p2_y);
					ctx.fill();
				});

				money3.mouseleave(function(e) {
					ctx.strokeStyle = "#D3D3D3";
					ctx.lineWidth = 2;
					ctx.fillStyle = "white";
					ctx.beginPath();
					ctx.moveTo(b_p1_x, b_p1_y);
					ctx.lineTo(b_endpoint.left, b_endpoint.top);
					ctx.lineTo(b_p2_x, b_p2_y);

					ctx.fill();
					ctx.stroke();
				});
			}
			
			$("#download").click(function() {
				update_recent = true;
				
			});

});

