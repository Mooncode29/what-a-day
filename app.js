console.log('hello world');
(function (){
	"use strict";
	var day = {
		jour : null,
		mois : null,
		annee: null,
		mydate: null,
		resultDay: null,

			
		init : function(){
			moment.locale('fr')
			this.listners();
			$('#message1').hide();
			$('#message2').hide();
			$('#resultat').hide();
		},
		listners : function(){
			$('button').click(day.recupInput);
		},
		recupInput : function(){
			// day.error();
			day.jour = parseInt($("#jour").val(), 10);
			$("#jour").css("color", "#47b8e0");
			console.log(day.jour);
			day.mois = $('#selectmois').val();
			$("#selectmois").css("color", "#47b8e0");
			console.log(day.mois);
			day.annee = parseInt($('#annee').val(), 10);
			$("#annee").css("color", "#47b8e0");
			console.log(day.annee);
			day.myDate = moment().year(day.annee).month(day.mois).date(day.jour);
			day.resultDay = day.myDate.format('dddd');
			day.verifJour();
			day.verifAnnee();
			// day.result();
			console.log(day.resultDay);

		},

		// result : function(){
		// 	$("#resultat").show();
		// 	$("#resultat").text(day.resultDay);
		// 	$("#jourmoisannee").hide();
		// 	$('#restart').click(function(){
		// 		$("#jourmoisannee").show();

		// 	});

		// },
		verifJour: function(){
			if(day.jour < 1 || day.jour > 31){
				console.log(day.jour);
				$('#message1').show();
				$('#jour').css("border", "2px solid red");
				day.resultDay= null;
			}else{
				$("#resultat").show();
				$("#resultat").text(day.resultDay);
				$('#message1').hide();
				$("#jourmoisannee").hide();
				day.resultDay= null;
				$('#restart').click(function(){
					$("#jourmoisannee").show();

				});
			}
		},

		verifAnnee :function(){
			if(day.annee <= 0){
				$('#message2').show();
				console.log('coucou');
				$('#resultat').hide();
				$("#jourmoisannee").show();
			}
		},

	};


day.init();

})();