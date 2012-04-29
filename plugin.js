GENTICS.Aloha.Help = new GENTICS.Aloha.Plugin('com.gentics.aloha.plugins.Help');

GENTICS.Aloha.Help.languages = ['en', 'ru'];

GENTICS.Aloha.Help.url = "https://github.com/alohaeditor/Aloha-Editor/wiki";
GENTICS.Aloha.Help.width = 640;
GENTICS.Aloha.Help.height = 480;

GENTICS.Aloha.Help.init = function () {
  var that = this;

  if (GENTICS.Aloha.Help.settings.url != undefined) {
    GENTICS.Aloha.Help.url = GENTICS.Aloha.Help.settings.url
  }

  if (GENTICS.Aloha.Help.settings.width != undefined) {
    GENTICS.Aloha.Help.width = GENTICS.Aloha.Help.settings.width
  }

  if (GENTICS.Aloha.Help.settings.height != undefined) {
    GENTICS.Aloha.Help.height = GENTICS.Aloha.Help.settings.height
  }
  
  var stylePath = GENTICS.Aloha.settings.base + '/plugins/com.gentics.aloha.plugins.Help/css/Help.css';
  jQuery('<link rel="stylesheet" />').attr('href', stylePath).appendTo('head');

  var helpButton = new GENTICS.Aloha.ui.Button({
    "iconClass" : "GENTICS_button_help",
    "size" : "small",
    "onclick": function () {
      new Ext.Window({
        title: 'Help',
        width: GENTICS.Aloha.Help.width,
        height: GENTICS.Aloha.Help.height,
        html: '<iframe style="overflow:auto;width:100%;height:100%;" frameborder="0"  src="'+ GENTICS.Aloha.Help.url +'"></iframe>',
        plain: true,
        style: {zIndex: '11111 !important'},
        shadow: false,
        border: false
      }).show();
    }
  });
  
  GENTICS.Aloha.FloatingMenu.addButton(
    "GENTICS.Aloha.continuoustext",
    helpButton,
    that.i18n("floatingmenu.tab.format"), 2
  );
};