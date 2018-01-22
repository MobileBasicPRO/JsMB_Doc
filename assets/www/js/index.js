var $$$ = new Framework7({
    modalTitle: 'JsMB Документация',
    // Enable Material theme
    material: true,
	// Panels
    swipePanel: 'left', // or 'left' or 'right'
    swipePanelActiveArea: 0,
    swipePanelCloseOpposite: true,
    swipePanelOnlyClose: false,
    swipePanelNoFollow: false,
    swipePanelThreshold: 0,
    panelsCloseByOutside: true,
	// Modals
    modalButtonOk: 'OK',
    modalButtonCancel: 'Отмена',
});

// Expose Internal DOM library
var $$ = Dom7;

function log(text){
	$$('#console')[0].innerHTML += '<orange>#</orange> <red>'+text+'</red><br/>';
}

function error(text){
	$$$.addNotification({
            message: 'Ошибка: <red>'+text+'</red>',
            button: {
                text: 'Закрыть'
//                color: 'red'
            }
    });
	log('<b><red>'+text+'</red></b>');
}
function warn(text){
	$$$.addNotification({
            message: 'Предуприждение: <yellow>'+text+'</yellow>',
            button: {
                text: 'Закрыть',
				background: 'yellow'
//                color: 'yellow'
            }
    });
	log('<yellow>'+text+'</yellow>');
}
function info(text){
	$$$.addNotification({
            message: 'Информация: <blue>'+text+'</blue>',
            button: {
                text: 'Закрыть'
            }
    });
	log('<blue>'+text+'</blue>');
}

function alert(text){
	$$$.alert(text);
}

console.error = error;
console.warn = warn;
//console.log = info;
//window.onerror = error;

// Add main view
var mainView = $$$.addView('.view-main', {});


/* ===== Change statusbar bg when panel opened/closed ===== */
$$('.panel-left').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-left');
});
$$('.panel-left,').on('close', function () {
    $$('.statusbar-overlay').removeClass('with-panel-left');
});


function gotoURL(url){
	$$$.confirm('Сейчас будет открыта интернет страница.<br/>Для возвращения в документацию нажмите кнопку Back.', function(){
		window.location.href=url;
	});
}

function soon(){
	$$$.alert('Ожидайте в следующей версии');
}


  function g_main(){
	var g_oper = document.getElementById('g_operator').value.split('(');
	var g_about = document.getElementById('g_about').value;
	var g_params = document.getElementById('g_params').value;
	var g_return = document.getElementById('g_return').value;
	var g_example = document.getElementById('g_example').value;
	var oper = g_oper[0];
	var args = "("+g_oper[1];
	var params = g_params.split('\n').join('<br/>');
    var g_return = (g_return == "true" || g_return == "false") ? "<orange>"+g_return+"</orange>" : g_return;
	var tmp = "<oper>"+oper+"<args>"+args+"</args></oper><info>Описание:</info><block>"+g_about+"</block><info>Параметры:</info><block>"+params+"</block><info>Возвращаемое значение:</info><block>"+g_return+"</block><info>Пример использования:<block>"+g_example+"</block>";
	$$('#g_out').val(tmp);
	log(tmp);
	//document.write(tmp);

	};
	g_main();
	
function checkupdate(){
	soon();
	return;
}


//антибаг
