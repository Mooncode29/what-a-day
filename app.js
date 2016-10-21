console.log('hello world');
(function (){
	"use strict";
	var day = {
		jour : null,
		mois : null,
		annee: null,
		mydate: null,
			
		init : function(){
			moment.locale('fr')
			this.listners();
			$('#message').hide();
			$('#message2').hide();
		},
		listners : function(){
			$('button').click(day.recupInput);
		},
		recupInput : function(){
			day.error();
			day.jour = parseInt($("#jour").val(), 10);
			console.log(day.jour);
			day.mois = $('#selectmois').val();
			console.log(day.mois);
			day.annee = parseInt($('#annee').val(), 10);
			console.log(day.annee);
			day.mydate = moment().year(day.annee).month(day.mois).date(day.jour);
			console.log(day.mydate.format('dddd'));
		},

		error: function(){
			if(day.jour < 1 || day.jour > 31){
				console.log('zaeerztrtyyuuuuuuuuuuuuu')
				$('#message').show();
				$('#jour').css("border", "2px solid red");

			}
			else if (day.annee < 1){
				$('#message2').show();
			}
			
		},

	};


day.init();
})();