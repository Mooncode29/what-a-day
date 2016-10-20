console.log('hello world');
(function (){
	"use strict";
	var day = {
		jour : null,
		mois : null,
		année: null,
		mystring: null,
		init : function(){
			this.listners();
			
		},
		listners : function(){
			$('button').click(function(){
				day.recupInput();

			})

		},
		recupInput : function(){
			var jour = parseInt($("#jour").val(), 10);
			console.log(jour);
			var mois = $('#selectmois').val();
			console.log(mois);
			var annee = parseInt($('#annee').val(), 10);
			console.log(annee);

			var mystring = (moment().year(annee).month(mois).date(jour))
			var myvar = mystring.toString();
			var andro = myvar[0] + myvar[1] + myvar[2];
			if (andro === "Mon")
				alert('Monday');
			if (andro === "Tue")
				alert('Monday');
			if (andro === "Wed")
				alert('Wednesday');
			if (andro === "Thu")
				alert('Thursday');
			if (andro === "Fri")
				alert('Friday');
			if (andro === "Sat")
				alert('Saturday');
			if (andro === "Sun")
				alert('Sunday');

			if(jour < 1 || jour > 31){
				alert('le jour doit être compris entre 1 et 31');
			}
			if (annee < 0){
				alert("l'année doit être supérieur à zero!");
			}


		}












	}


day.init();
})();