function Dice(id,size)
{
	var dice=document.createElement('div');
	var diceCss=document.createElement('style');
	var platformId=id+'platform';
	var diceId=id+'dice';
	initiateDice();
	//console.log(size*2);
	function initiateDice()
	{
		insertHtml();
		insertCss();
		
	}
	this.rollDie=function()
	{
		document.getElementById(platformId).style.webkitAnimation='roll 1.6s infinite linear';
		document.getElementById(diceId).style.webkitAnimation='spin 1.6s infinite linear';
	}
	this.stopDie=function()
	{
		document.getElementById(platformId).style.webkitAnimation='';
		document.getElementById(diceId).style.webkitAnimation='';
	}      
	this.showFace=function(faceNo)
	{
		switch(faceNo)
		{
			case 5:
			document.getElementById(diceId).style.webkitTransform='rotateX(90deg)';
			break;
			case 4:
			document.getElementById(diceId).style.webkitTransform='rotateY(90deg)';
			break;
			case 6:
			document.getElementById(diceId).style.webkitTransform='rotateX(180deg)';
			break;
			case 2:
			document.getElementById(diceId).style.webkitTransform='rotateX(270deg)';
			break;
			case 3:
			document.getElementById(diceId).style.webkitTransform='rotateY(270deg)';
			break;
			case 1:
			document.getElementById(diceId).style.webkitTransform='rotateY(0deg)';
			
			
		}
	}
	this.setColor=function( diceColor)
	{
		var dots=document.getElementsByClassName('dot');
		for (i=0;i<dots.length;i++)
		{
			dots[i].style.background=diceColor.dotColor;
		}
		var sides=document.getElementsByClassName('side');
		for (i=0;i<sides.length;i++)
		{
			sides[i].style.background=diceColor.diceColor;
			sides[i].style.boxShadow='inset 0 0 '+size*0.4+'px '+diceColor.diceShadowColor;
		}
		var covers=document.getElementsByClassName('cover');
		for (i=0;i<covers.size;i++)
		{
			covers[i].style.background=diceColor.diceCoverColor;
		}
		var inners=document.getElementsByClassName('inner');
		for(i=0;i<inners.size;i++)
		{
			inners[i].style.background=diceColor.diceCoverColor;
		}
	}
	this.rotateDie=function(x,y,z)
	{
		document.getElementById(diceId).style.webkitTransform='rotateX('+x+'deg) rotateY('+y+'deg) rotateZ('+z+'deg)';
	}
	
	function insertCss()
	{
		diceCss.innerHTML='@keyframes spin{\0% { transform: translateZ(-'+size+'px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }16% { transform: translateZ(-'+size+'px) rotateX(180deg) rotateY(180deg) rotateZ(0deg); }33% { transform: translateZ(-'+size+'px) rotateX(360deg) rotateY(90deg) rotateZ(180deg); }50% { transform: translateZ(-'+size+'px) rotateX(360deg) rotateY(360deg) rotateZ(360deg); }66% { transform: translateZ(-'+size+'px) rotateX(180deg) rotateY(360deg) rotateZ(270deg); }83% { transform: translateZ(-'+size+'px) rotateX(270deg) rotateY(180deg) rotateZ(180deg); }100% { transform: translateZ(-'+size+'px) rotateX(360deg) rotateY(360deg) rotateZ(360deg); }}'+
			'@keyframes roll{0% { transform: translate3d(-'+(2*size)+'px,-'+(size/2)+'px,-'+(4*size)+'px); }12% { transform: translate3d(0px,0,-'+(size)+'px); }25% { transform: translate3d('+(2*size)+'px,-'+(size/2)+'px,-'+(4*size)+'px); }37% { transform: translate3d(0px,-'+size+'px,-'+(8*size)+'px); }50% { transform: translate3d(-'+(2*size)+'px,-'+(size/2)+'px,-'+(4*size)+'px); }62% { transform: translate3d(0px,0,-'+size+'px); }75% { transform: translate3d('+(2*size)+'px,-'
			+size/2+'px,-'+4*size+'px); }87% { transform: translate3d(0px,-'+size+'px,-'+8*size+'px); }100% { transform: translate3d(-'+2*size+'px,-'+size/2+'px,-'+4*size+'px); }}'+
			'@-webkit-keyframes spin{0% { -webkit-transform: translateZ(-'+size+'px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }16% { -webkit-transform: translateZ(-'+size+'px) rotateX(180deg) rotateY(180deg) rotateZ(0deg); }33% { -webkit-transform: translateZ(-'+size+'px) rotateX(360deg) rotateY(90deg) rotateZ(180deg); }50% { -webkit-transform: translateZ(-'+size+'px) rotateX(360deg) rotateY(360deg) rotateZ(360deg); }66% { -webkit-transform: translateZ(-'+size+'px) rotateX(180deg) rotateY(360deg) rotateZ(270deg); }83% { -webkit-transform: translateZ(-'+size+'px) rotateX(270deg) rotateY(180deg) rotateZ(180deg); }100% { -webkit-transform: translateZ(-'+size+'px) rotateX(360deg) rotateY(360deg) rotateZ(360deg); }}'+
			'@-webkit-keyframes roll\
			{\
				0% { -webkit-transform: translate3d(-'+2*size+'px,-'+size/2+'px,-'+4*size+'px); }\
				12% { -webkit-transform: translate3d(0px,0,-'+size+'px); }\
				25% { -webkit-transform: translate3d('+2*size+'px,-'+size/2+'px,-'+4*size+'px); }\
				37% { -webkit-transform: translate3d(0px,-'+size+'px,-'+8*size+'px); }\
				50% { -webkit-transform: translate3d(-'+2*size+'px,-'+size/2+'px,-'+4*size+'px); }\
				62% { -webkit-transform: translate3d(0px,0,-'+size+'px); }\
				75% { -webkit-transform: translate3d('+2*size+'px,-'+size/2+'px,-'+size*4+'px); }\
				87% { -webkit-transform: translate3d(0px,-'+size+'px,-'+size*8+'px); }\
				100% { -webkit-transform: translate3d(-'+2*size+'px,-'+size/2+'px,-'+size*4+'px); }\
			}\
			#'+diceId+'\
			{\
				position: absolute;\
				width: '+2*size+'px;\
				height: '+2*size+'px;\
				transform-style: preserve-3d;\
				-webkit-transform-style: preserve-3d;\
\
			}\
			#'+diceId+' .front \
			{\
				transform: translateZ('+size+'px);\
				-webkit-transform: translateZ('+size+'px);\
			}\
			#'+diceId+' .front.inner\
			{\
				transform: translateZ('+size*0.99+'px);\
				-webkit-transform: translateZ('+size*0.99+'px);\
			}\
			#'+diceId+' .back\
			{\
				transform: rotateX(-180deg) translateZ('+size+'px);\
				-webkit-transform: rotateX(-180deg) translateZ('+size+'px);\
			}\
			#'+diceId+' .back.inner\
			{\
				transform: rotateX(-180deg) translateZ('+size*0.99+'px);\
				-webkit-transform: rotateX(-180deg) translateZ('+size*0.99+'px);\
			}\
			#'+diceId+' .right \
			{\
				transform: rotateY(90deg) translateZ('+size+'px);\
				-webkit-transform: rotateY(90deg) translateZ('+size+'px);\
			}\
			#'+diceId+' .right.inner\
			{\
				transform: rotateY(90deg) translateZ('+size*0.99+'px);\
				-webkit-transform: rotateY(90deg) translateZ('+size*0.99+'px);\
			}\
			#'+diceId+' .left\
			{\
				transform: rotateY(-90deg) translateZ('+size+'px);\
				-webkit-transform: rotateY(-90deg) translateZ('+size+'px);\
			}\
			#'+diceId+' .left.inner\
			{\
				transform: rotateY(-90deg) translateZ('+size*0.99+'px);\
				-webkit-transform: rotateY(-90deg) translateZ('+size*0.99+'px);\
			}\
			#'+diceId+' .top\
			{\
				transform: rotateX(90deg) translateZ('+size+'px);\
				-webkit-transform: rotateX(90deg) translateZ('+size+'px);\
			}\
			#'+diceId+' .top.inner\
			{\
				transform: rotateX(90deg) translateZ('+size*0.99+'px);\
				-webkit-transform: rotateX(90deg) translateZ('+size*0.99+'px);'+
			'}'+
			'#'+diceId+' .bottom'+
			'{'+
				'transform: rotateX(-90deg) translateZ('+size+'px);'+
				'-webkit-transform: rotateX(-90deg) translateZ('+size+'px);'+
			'}'+
			'#'+diceId+' .bottom.inner'+
			'{'+
				'transform: rotateX(-90deg) translateZ('+size*0.99+'px);'+
				'-webkit-transform: rotateX(-90deg) translateZ('+size*0.99+'px);'+
			'}'+
			'.dot\
			{\
				position:absolute;\
				width:'+size*0.46+'px;\
				height:'+size*0.46+'px;\
				border-radius:'+size*0.23+'px;\
				background:#FFF;\
				box-shadow:inset '+size*0.05+'px 0 '+size*0.1+'px #9E0000;\
			}\
			.dot.center\
			{\
				margin:'+size*0.77+'px 0 0 '+size*0.77+'px;\
			}\
			.dot.dtop\
			{\
				margin-top:'+size*0.2+'px;\
			}\
			.dot.dleft\
			{\
				margin-left:'+size*1.34+'px;\
			}\
			.dot.dright\
			{\
				margin-left:'+size*0.2+'px;\
			}\
			.dot.dbottom\
			{\
				margin-top:'+size*1.34+'px;\
			}\
			.dot.center.dleft\
			{\
				margin:'+size*0.77+'px 0 0 '+size*0.2+'px;\
			}\
			.dot.center.dright\
			{\
				margin:'+size*0.77+'px 0 0 '+size*1.34+'px;\
			}\
			.side\
			{\
				position: absolute;\
				width: '+2*size+'px;\
				height: '+2*size+'px;\
				background: #f00;\
				box-shadow:inset 0 0 '+size*0.4+'px #6D4646;\
				border-radius: '+size*0.4+'px;\
			}\
			#'+diceId+' .cover, #'+diceId+' .inner\
			{\
				background: #B32020;\
				box-shadow: none;\
			}\
			#'+diceId+' .cover\
			{\
				border-radius: 0;\
			}\
			#'+diceId+' .cover.x\
			{\
				transform: rotateY(90deg);\
				-webkit-transform: rotateY(90deg);\
			}\
			#'+diceId+' .cover.z\
			{\
				transform: rotateX(90deg);\
				-webkit-transform: rotateX(90deg);\
			}';
			document.body.appendChild(diceCss);
	}

	function insertHtml()
	{
		dice.innerHTML='<div id="'+platformId+'">'+
				'<div id="'+diceId+'">'+
				  '<div class="side front">'+
					'<div class="dot center"></div>'+
				  '</div>'+
				  '<div class="side front inner"></div>'+
				  '<div class="side top">'+
					'<div class="dot dtop dleft"></div>'+
					'<div class="dot dbottom dright"></div>'+
				  '</div>'+
				  '<div class="side top inner"></div>'+
				  '<div class="side right">'+
					'<div class="dot dtop dleft"></div>'+
					'<div class="dot center"></div>'+
					'<div class="dot dbottom dright"></div>'+
				  '</div>'+
				  '<div class="side right inner"></div>'+
				  '<div class="side left">'+
					'<div class="dot dtop dleft"></div>'+
					'<div class="dot dtop dright"></div>'+
					'<div class="dot dbottom dleft"></div>'+
					'<div class="dot dbottom dright"></div>'+
				  '</div>'+
				  '<div class="side left inner"></div>'+
				  '<div class="side bottom">'+
					'<div class="dot center"></div>'+
					'<div class="dot dtop dleft"></div>'+
					'<div class="dot dtop dright"></div>'+
					'<div class="dot dbottom dleft"></div>'+
					'<div class="dot dbottom dright"></div>'+
				  '</div>'+
				  '<div class="side bottom inner"></div>'+
				  '<div class="side back">'+
					'<div class="dot dtop dleft"></div>'+
					'<div class="dot dtop dright"></div>'+
					'<div class="dot dbottom dleft"></div>'+
					'<div class="dot dbottom dright"></div>'+
					'<div class="dot center dleft"></div>'+
					'<div class="dot center dright"></div>'+
				  '</div>'+
				  '<div class="side back inner"></div>'+
				  '<div class="side cover x"></div>'+
				  '<div class="side cover y"></div>'+
				  '<div class="side cover z"></div>'+
				'</div>'+
			'</div>';
		document.getElementById(id).appendChild(dice);
	}
}
