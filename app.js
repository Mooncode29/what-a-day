console.log('hello world');
(function (){
	"use strict";
	var app = {
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
			$('#verifier').click(app.recupInput);
		},
		recupInput : function(){

			$("#jour", "#selectmois", "#annee").css("color", "#47b8e0");
			app.jour = parseInt($("#jour").val(), 10);
			app.mois = $('#selectmois').val();
			app.annee = parseInt($('#annee').val(), 10);
			app.verifJour();
			app.verifAnnee();
		},

		verifJour: function(){
			if(app.jour < 1 || app.jour > 31){
				$('#message1').show();
				$('#jour').css("border", "2px solid red");

			}else{
				$("#resultat").show();
				app.myDate = moment().year(app.annee).month(app.mois).date(app.jour);
				app.resultDay = app.myDate.format('dddd');
				$("#resultat").text(app.resultDay);
				$('#message1').hide();
				$('#message2').hide();
				$(".overlay").css("display", "flex" );
				$("#jourMoisAnnee").hide();
				// app.resultDay= null;
				$('#restart').click(function(){
					console.log('restart');
					$(".overlay").css("display", "none");
					$("#jourMoisAnnee").show();
					 	$('#jour').css("border", "2px solid #47b8e0");
					 	$('#annee').css("border", "2px solid #47b8e0");
					 	$("#jour").val();
				});
			}
		},

		verifAnnee :function(){
			if(app.annee <= 0){
				$('#message2').show();
				$('#annee').css("border", "2px solid red");
				$('.overlay').hide();
				$("#jourMoisAnnee").show();
			}
		},

	};

app.init();

})();