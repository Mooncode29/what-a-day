console.log('hello world');
(function (){
	"use strict";
	var day = {
		jour : null,
		mois : null,
		annee: null,
		mydate: null,
		resultday: null,

			
		init : function(){
			moment.locale('fr')
			this.listners();
			$('#message').hide();
			$('#message2').hide();
			$('#resultat').hide();
		},
		listners : function(){
			$('button').click(day.recupInput);
		},
		recupInput : function(){
			// day.error();
			day.jour = parseInt($("#jour").val(), 10);
			console.log(day.jour);
			day.mois = $('#selectmois').val();
			console.log(day.mois);
			day.annee = parseInt($('#annee').val(), 10);
			console.log(day.annee);
			day.myDate = moment().year(day.annee).month(day.mois).date(day.jour);
			day.verifJour();
			day.verifAnnee();
			day.resultDay = day.myDate.format('dddd');
			console.log(day.resultDay);
			day.result();

		},

		verifJour: function(){
			if(day.jour < 1 || day.jour > 31){
				console.log(day.jour);
				$('#message').show();
				$('#jour').css("border", "2px solid red");
			}
		},
		verifAnnee :function(){
			if(day.annee < 0){
				$('#message2').show();
			}
		},
		result : function(){
			$("#resultat").show();
			$("#resultat").text(day.resultDay);
			$("#jourmoisannee").hide();
			$('#restart').click(function(){
				$("#jourmoisannee").show();

			});

		},
			

	};


day.init();
})();