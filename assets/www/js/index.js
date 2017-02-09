var $$$ = new Framework7({
    modalTitle: 'JsMobileBasic DOC',
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
                text: 'Закрыть'
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

console.error = error;
console.warn = warn;
console.log = info;

// Add main view
var mainView = $$$.addView('.view-main', {});


/* ===== Change statusbar bg when panel opened/closed ===== */
$$('.panel-left').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-left');
});
$$('.panel-right').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-right');
});
$$('.panel-left, .panel-right').on('close', function () {
    $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
});

