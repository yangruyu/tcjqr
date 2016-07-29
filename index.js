$(function(){
    audio.src='飞机起飞.mp3';
    audio.play();
   var fj=['fj','fj1','fj2','fj3','fj4','fj5','fj6']
    for(var i=0;i<117;i++){
      $('<div>').addClass(function(){
        return fj[Math.floor(Math.random()*7)]
      }).appendTo('body');  
    }
    
    $('.tsk .paizhi').on('click',function(){
        $('.tsk').removeClass('xialai').addClass('fanhui');
        $('.changjin').addClass('huilai');
        $('.yxcd').addClass('hui');
        $('.yinxiang').addClass('hui');
        audio.src='飞机起飞2.mp3';
        audio.play();
    })


	/*画场景*/
	for(var i=0;i<20;i++){
		for(var j=0;j<20;j++){
			var g=Math.floor(Math.random()*255);
	        var b=Math.floor(Math.random()*30);
            $('<div>')
	        .addClass('zhuan')
	        .attr('id',i+'-'+j)
	        .css('backgroundColor','rgba(0,'+g+','+b+',0.1)').appendTo('.changjin');
		}
	}
	
	/*数据*/
	var shebiao={
	            '0-0':true,
	            '0-1':true,
	            '0-2':true
	            }
	var she=[
	          {x:0,y:0},
              {x:0,y:1},
              {x:0,y:2}
            ];
    var shiwu={x:8,y:8}
    function fangshiwu(){
    	do{
    		var a=Math.floor(Math.random()*20);
    	    var b=Math.floor(Math.random()*20);
    	}while(shebiao[a+'-'+b])
    		$('#'+a+'-'+b).addClass('shiwu');
    	    return{x:a,y:b};
        }
    var shiwu=fangshiwu();
    var zhaodian=function(dian){
    	return $('#'+dian.x+'-'+dian.y);
    }
    for(var i=0;i<she.length;i++){
    	zhaodian(she[i]).addClass('she');
    }
    zhaodian(shiwu).addClass('shiwu');
    var fangxiang='you';
    move=function(){
    	var jiutou=she[she.length-1];
    	if(fangxiang==='you'){
    		var xintou={x:jiutou.x,y:jiutou.y+1};
    	}else if(fangxiang==='zuo'){
           var xintou={x:jiutou.x,y:jiutou.y-1};
    	}else if(fangxiang==='xia'){
           var xintou={x:jiutou.x+1,y:jiutou.y};
    	}
    	else if(fangxiang==='shang'){
           var xintou={x:jiutou.x-1,y:jiutou.y};
    	}
       
        if(xintou.y>19||xintou.y<0||xintou.x>19||xintou.x<0){
        	console.log('out')
            $('.yxsb').addClass('sb');
            audio.src='6969.mp3';
            audio.play();
        	zhanting();
            var $audio=$('audio');
            $audio.on('ended',function(){
            audio.pause();
            })
           for(var i=0;i<200;i++){
           var left=Math.floor(Math.random()*5000);
           var top=Math.floor(Math.random()*5000);
           $('<div>')
          .addClass('feibiao')
          .appendTo('body')
          .delay(i*10)
          .animate({
           top:top,
           left:left
           });


    }
        	return;

        }
       if(shebiao[xintou.x+'-'+xintou.y]){
        	console.log('ziji')
            $('.yxsb').addClass('sb');
            audio.src='6969.mp3';
            audio.play();
        	zhanting();
            var $audio=$('audio');
            $audio.on('ended',function(){
            audio.pause();
            })

          for(var i=0;i<200;i++){
           var left=Math.floor(Math.random()*5000);
           var top=Math.floor(Math.random()*5000);
           $('<div>')
          .addClass('feibiao')
          .appendTo('body')
          .delay(i*10)
          .animate({
           top:top,
           left:left,
           });


        }
        	return;
        }
        zhaodian(xintou).addClass('she');
        she.push(xintou);
        shebiao[xintou.x+'-'+xintou.y]=true;
        if(xintou.x===shiwu.x&&xintou.y===shiwu.y){
           zhaodian(shiwu).removeClass('shiwu');
           audio.src='6055.mp3';
           audio.play();
           shiwu=fangshiwu();
        }else{
        	var weiba=she.shift();
            $('#'+weiba.x+'-'+weiba.y).removeClass('she');
            delete shebiao[weiba.x+'-'+weiba.y];
        }

        
    }
    
    $(document).on('keyup',function(e){
    	e.preventDefault();
    	var biao={
    		'you':39,
    		 'zuo':37,
    		  'shang':38,
    		    'xia':40
    	}
    	if( Math.abs(e.keyCode-biao[fangxiang])===2){
    		return;
    	}
    	if(e.keyCode===37){
    		fangxiang='zuo';
    	}
    	if(e.keyCode===39){
    		fangxiang='you';
    	}
    	if(e.keyCode===38){
    		fangxiang='shang';
    	}
    	if(e.keyCode===40){
    		fangxiang='xia';
    	}
        if(e.keyCode===32){
            kaishi();
            audio.src='Poppin Hyeon Joon-机械舞曲机器人声2.mp3';
            audio.play();
        }
        if(e.keyCode===13){
            zhanting();
            audio.pause();
        }

    })
    var time;
    function kaishi(){
    	clearInterval(time);
    	time=setInterval(move,150);
        var $audio=$('audio');
       $audio.on('ended',function(){
       audio.src='Poppin Hyeon Joon-机械舞曲机器人声2.mp3';
       audio.play();
       })
    }
    function zhanting(){
    	clearInterval(time);
        /*audio.pause();*/
        
    }

    $('.cxks').on('click',function(){
        location.reload();
    })
    $('.cxxks').on('click',function(){
        location.reload();
    })
    $('.ksyx').on('click',function(){
        kaishi();
        audio.src='Poppin Hyeon Joon-机械舞曲机器人声2.mp3';
        audio.play();
    })
    $('.ztyx').on('click',function(){
        zhanting();
        audio.pause();
    })

})