(function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/chat_form"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "    <div class='action-drop-down-region chat-form-plus-icon'></div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div id='chat-read-only-form-text'>\n  <div class='text-color-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "This member has left {spaceTitle}, so you can't message with them anymore.", {
name:"translate_label",
hash:{
spaceTitle:null != a ? a.space_title :a
},
data:s
})) + "</div>\n  <div class='text-color-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "But we've saved your conversation here for your reference.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n</div>\n<div id='chat-form-text-content'>\n  <div class='left-content'>\n    <div class='chat-form-controls'>\n      <div id='emoticons-selector'></div>\n      <a class='chat-form-help-opener btn-action icon-poll-question-circle-24 text-color-body' href='#' title=\"" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Help", {
name:"translate_label",
hash:{},
data:s
})) + "\"></a>\n      <input id='chat-file' name='asset_file' type='file'>\n    </div>\n    <textarea class='disable-glow' id='popout-chat-input-text'></textarea>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_media_menu :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "  </div>\n  <div class='right-content'>\n    <a class='mighty-btn-square mighty-btn-filled-theme-color-button submit-chat-btn'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Send", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n  </div>\n  <div class='chat-form-text-below-input text-color-lighter'>\n    <div id='chat-form-user-typing-region'></div>\n    <span class='chat-form-status'></span>\n  </div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/chat_form"];
}).call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/chat_help"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t, i;
return "  <div class='special-command'>\n    " + (null != (i = null != (i = l.command || (null != a ? a.command :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"command",
hash:{},
data:s
}) :i) ? t :"") + "\n    <span>\n      <strong>-></strong>\n      " + (null != (i = null != (i = l.value || (null != a ? a.value :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"value",
hash:{},
data:s
}) :i) ? t :"") + "\n    </span>\n  </div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='help-title'>\n  <b>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Help", {
name:"translate_label",
hash:{},
data:s
})) + "</b>\n</div>\n<div class='help-box'>\n" + (null != (t = l.each.call(null != a ? a :{}, null != a ? a.special_commands :a, {
name:"each",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/chat_help"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/chat_link"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t, i;
return "  <span class='title'>\n    <a class='text-color-title-link " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_local :a, {
name:"if",
hash:{},
fn:e.program(2, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "' href='" + e.escapeExpression((i = null != (i = l.original_url || (null != a ? a.original_url :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"original_url",
hash:{},
data:s
}) :i)) + "' rel='" + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.is_local :a, {
name:"unless",
hash:{},
fn:e.program(4, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "' target='" + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.is_local :a, {
name:"unless",
hash:{},
fn:e.program(6, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"title",
hash:{},
data:s
}) :i)) + "</a>\n  </span>\n";
},
"2":function(e, a, l, n, s) {
return "navigate";
},
"4":function(e, a, l, n, s) {
return "nofollow";
},
"6":function(e, a, l, n, s) {
return "_blank";
},
"8":function(e, a, l, n, s) {
var t;
return "  <p class='text-color-body'>" + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"description",
hash:{},
data:s
}) :t)) + "</p>\n";
},
"10":function(e, a, l, n, s) {
var t;
return null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_video :a, {
name:"if",
hash:{},
fn:e.program(11, s, 0),
inverse:e.program(13, s, 0),
data:s
})) ? t :"";
},
"11":function(e, a, l, n, s) {
var t;
return "  <a class='popoup-video' href='" + e.escapeExpression((t = null != (t = l.original_url || (null != a ? a.original_url :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"original_url",
hash:{},
data:s
}) :t)) + "' target='_blank' title='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"title",
hash:{},
data:s
}) :t)) + "'>\n    <div class='video-overlay'>\n      <img height='226' src='" + e.escapeExpression((t = null != (t = l.image_url || (null != a ? a.image_url :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"image_url",
hash:{},
data:s
}) :t)) + "' width='400'>\n    </div>\n  </a>\n";
},
"13":function(e, a, l, n, s) {
var t, i;
return "  <a class='" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_local :a, {
name:"if",
hash:{},
fn:e.program(2, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "' href='" + e.escapeExpression((i = null != (i = l.original_url || (null != a ? a.original_url :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"original_url",
hash:{},
data:s
}) :i)) + "' rel='" + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.is_local :a, {
name:"unless",
hash:{},
fn:e.program(4, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "' target='" + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.is_local :a, {
name:"unless",
hash:{},
fn:e.program(6, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>\n    <img class='preview-chat-image' src='" + e.escapeExpression((i = null != (i = l.image_url || (null != a ? a.image_url :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"image_url",
hash:{},
data:s
}) :i)) + "'>\n  </a>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='chat-link-container'>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.title :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.description :a, {
name:"if",
hash:{},
fn:e.program(8, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.image_url :a, {
name:"if",
hash:{},
fn:e.program(10, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/chat_link"];
}.call(this), function() {
Handlebars.registerPartial("chat/chats/_item", Handlebars.template({
"1":function(e, a, l, n, s) {
var t;
return "<div class='timestamp-label text-color-light'>\n  <span>" + e.escapeExpression((t = null != (t = l.timestamp_label || (null != a ? a.timestamp_label :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"timestamp_label",
hash:{},
data:s
}) :t)) + "</span>\n</div>\n";
},
"3":function(e, a, l, n, s) {
var t, i;
return "      <a class='navigate mighty-avatar-user-small' deepLink='" + e.escapeExpression((i = null != (i = l.member_deep_link || (null != a ? a.member_deep_link :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"member_deep_link",
hash:{},
data:s
}) :i)) + "' href='" + e.escapeExpression((i = null != (i = l.member_link || (null != a ? a.member_link :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"member_link",
hash:{},
data:s
}) :i)) + "'>\n        <img src='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.user :a) ? t.avatar_url :t, a)) + "'>\n      </a>\n";
},
"5":function(e, a, l, n, s) {
var t;
return "      <span class='mighty-avatar-user-small'>\n        <img src='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.user :a) ? t.avatar_url :t, a)) + "'>\n      </span>\n";
},
"7":function(e, a, l, n, s) {
return "tablet-small-hide";
},
"9":function(e, a, l, n, s) {
return "current-user-chat-item-meta";
},
"11":function(e, a, l, n, s) {
var t, i;
return "      <a class='chat-item-message-action navigate text-color-title-link' deepLink='" + e.escapeExpression((i = null != (i = l.member_deep_link || (null != a ? a.member_deep_link :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"member_deep_link",
hash:{},
data:s
}) :i)) + "' href='" + e.escapeExpression((i = null != (i = l.member_link || (null != a ? a.member_link :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"member_link",
hash:{},
data:s
}) :i)) + "'>" + e.escapeExpression(e.lambda(null != (t = null != a ? a.user :a) ? t.name :t, a)) + "</a>\n";
},
"13":function(e, a, l, n, s) {
var t;
return "      <span class='chat-item-message-action text-color-title'>" + e.escapeExpression(e.lambda(null != (t = null != a ? a.user :a) ? t.name :t, a)) + "</span>\n";
},
"15":function(e, a, l, n, s) {
return "current-user-plain-text-chat-item-text";
},
"17":function(e, a, l, n, s) {
return "      <a class='chat-item-delete text-color-title-link mighty-btn-delete-small text-color-lighter tablet-small-hide mighty-btn-icon-small' data-placement='left' href='#' rel='tooltip' title='Delete'></a>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.timestamp_label :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "<div class='chat-item-avatar-content-wrapper'>\n  <div class='chat-item-avatar'>\n    <div class='chat-avatar' data-user-id='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.user :a) ? t.id :t, a)) + "'>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.enable_navigation :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.program(5, s, 0),
data:s
})) ? t :"") + "      <span class='mighty-presence-indicator-medium mighty-circle-border-thick mighty-circle-border-white chat-user-presence-indicator " + e.escapeExpression((l.presenceClasses || a && a.presenceClasses || l.helperMissing).call(null != a ? a :{}, null != (t = null != a ? a.user :a) ? t.id :t, {
name:"presenceClasses",
hash:{},
data:s
})) + " " + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.is_other_user_id :a, {
name:"unless",
hash:{},
fn:e.program(7, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'></span>\n    </div>\n  </div>\n  <div class='chat-item-content'>\n    <div class='chat-item-meta " + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.is_other_user_id :a, {
name:"unless",
hash:{},
fn:e.program(9, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "' data-space-id='" + e.escapeExpression((i = null != (i = l.presenceSpaceId || (null != a ? a.presenceSpaceId :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"presenceSpaceId",
hash:{},
data:s
}) :i)) + "' data-user-id='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.user :a) ? t.id :t, a)) + "'>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.enable_navigation :a, {
name:"if",
hash:{},
fn:e.program(11, s, 0),
inverse:e.program(13, s, 0),
data:s
})) ? t :"") + "      <span class='chat-timestamp' data-timestamp='" + e.escapeExpression((i = null != (i = l.created_at || (null != a ? a.created_at :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"created_at",
hash:{},
data:s
}) :i)) + "' rel='tooltip' title='" + e.escapeExpression((l.standardDateTimeLong || a && a.standardDateTimeLong || l.helperMissing).call(null != a ? a :{}, null != a ? a.created_at :a, {
name:"standardDateTimeLong",
hash:{},
data:s
})) + "'>" + e.escapeExpression((i = null != (i = l.relative_time || (null != a ? a.relative_time :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"relative_time",
hash:{},
data:s
}) :i)) + "</span>\n    </div>\n    <div class='chat-item-text text-color-title " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.has_current_user_plain_text_content :a, {
name:"if",
hash:{},
fn:e.program(15, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>\n      " + (null != (i = null != (i = l.text || (null != a ? a.text :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"text",
hash:{},
data:s
}) :i) ? t :"") + "\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.enable_delete :a, {
name:"if",
hash:{},
fn:e.program(17, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "    </div>\n  </div>\n</div>";
},
useData:!0
}));
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/chats/empty"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "";
},
useData:!0
}), this.HandlebarsTemplates["chat/chats/empty"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/chats/item"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "chat/chats/_item", {
name:"include",
hash:{},
data:s
}));
},
useData:!0
}), this.HandlebarsTemplates["chat/chats/item"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/chats/search_result_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='chats-search-result-layout-selected-members-container mighty-sticky'>\n  <div class='chats-search-result-layout-selected-members-region chats-search-result-layout-selected-members-list'></div>\n  <div class='chats-search-result-layout-start-chat-button-container'>\n    <a class='chats-search-result-layout-start-chat-button navigate mighty-btn-filled-theme-color-button mighty-btn-square' href='#'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Start Chat", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n  </div>\n</div>\n<div class='chats-search-result-layout-all-members-region chats-search-result-layout-all-members'></div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/chats/search_result_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/conversations/empty"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='chat-conversations-empty-container text-color-body'>\n  <div class='icon-chat-fill-24'></div>\n  <div class='chat-conversations-empty-text'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "You don\u2019t have any active chats. Choose a member to start a conversation with!", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <a class='start-conversationstion-button mighty-btn-square-large mighty-btn-filled-theme-color-button'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Add a Chat", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/conversations/empty"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/conversations/item"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "    <span class='mighty-avatar-user-tiny conversation-last-chat-user-avatar'>\n      <img class='last-user-avatar' src=\"" + e.escapeExpression((l.applyVersionToImageUrl || a && a.applyVersionToImageUrl || l.helperMissing).call(null != a ? a :{}, null != a ? a.last_user_avatar_url :a, "tiny", {
name:"applyVersionToImageUrl",
hash:{},
data:s
})) + '">\n    </span>\n';
},
"3":function(e, a, l, n, s) {
return "        <span class='icon-bell-muted text-color-light conversation-mute-icon'></span>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<a class='navigate conversations-item' href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"link",
hash:{},
data:s
}) :i)) + "'>\n  <div class='conversation-avatar-wrapper'>\n    <span class='mighty-avatar-user-medium-small conversation-avatar'>\n      <img src=\"" + e.escapeExpression((l.applyVersionToImageUrl || a && a.applyVersionToImageUrl || l.helperMissing).call(null != a ? a :{}, null != a ? a.avatar_url :a, "medium_small", {
name:"applyVersionToImageUrl",
hash:{},
data:s
})) + '">\n    </span>\n' + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.last_user_avatar_url :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "    <div class='list-count-indicator mighty-count-indicator chat-count'></div>\n  </div>\n  <div class='conversation-info-wrapper'>\n    <div class='conversation-info'>\n      <div class='conversation-name-wrapper display-flex'>\n        <span class='conversation-name text-color-title' href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"link",
hash:{},
data:s
}) :i)) + "' title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"title",
hash:{},
data:s
}) :i)) + "'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"title",
hash:{},
data:s
}) :i)) + "</span>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_muted :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "      </div>\n      <div class='conversation-text-time-wrapper display-flex align-items-center'>\n        <span class='last-chat-text text-color-body'>" + e.escapeExpression((i = null != (i = l.last_chat_text || (null != a ? a.last_chat_text :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"last_chat_text",
hash:{},
data:s
}) :i)) + "</span><span class='middot text-color-body'>&middot;</span><span class='conversation-time text-color-body' title='" + e.escapeExpression((l.standardDateTimeLong || a && a.standardDateTimeLong || l.helperMissing).call(null != a ? a :{}, null != a ? a.last_chat_at :a, {
name:"standardDateTimeLong",
hash:{},
data:s
})) + "'>" + e.escapeExpression((i = null != (i = l.relative_time || (null != a ? a.relative_time :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"relative_time",
hash:{},
data:s
}) :i)) + "</span>\n      </div>\n    </div>\n  </div>\n</a>";
},
useData:!0
}), this.HandlebarsTemplates["chat/conversations/item"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/conversations/pair_item"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "tablet-small-hide";
},
"3":function(e, a, l, n, s) {
return "        <span class='icon-bell-muted text-color-light conversation-mute-icon'></span>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<a class='navigate conversations-item' href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"link",
hash:{},
data:s
}) :i)) + "'>\n  <div class='conversation-avatar-wrapper'>\n    <div class='avatar-group-region'></div>\n    <div class='list-count-indicator mighty-count-indicator chat-count'></div>\n    <span class='mighty-presence-indicator-medium mighty-circle-border-thick mighty-circle-border-white chat-user-presence-indicator " + e.escapeExpression((l.presenceClasses || a && a.presenceClasses || l.helperMissing).call(null != a ? a :{}, null != (t = null != a ? a.user :a) ? t.id :t, {
name:"presenceClasses",
hash:{},
data:s
})) + " " + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.is_other_user_id :a, {
name:"unless",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'></span>\n  </div>\n  <div class='conversation-info-wrapper'>\n    <div class='conversation-info " + e.escapeExpression((l.presenceClasses || a && a.presenceClasses || l.helperMissing).call(null != a ? a :{}, null != (t = null != a ? a.user :a) ? t.id :t, {
name:"presenceClasses",
hash:{},
data:s
})) + "' data-space-id='" + e.escapeExpression((i = null != (i = l.presenceSpaceId || (null != a ? a.presenceSpaceId :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"presenceSpaceId",
hash:{},
data:s
}) :i)) + "' data-user-id='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.user :a) ? t.id :t, a)) + "'>\n      <div class='conversation-name-wrapper display-flex'>\n        <span class='navigate conversation-name pair text-color-title' title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"title",
hash:{},
data:s
}) :i)) + "'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"title",
hash:{},
data:s
}) :i)) + "</span>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_muted :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "      </div>\n      <div class='conversation-text-time-wrapper display-flex align-items-center'>\n        <div class='last-chat-text text-color-body'>" + e.escapeExpression((i = null != (i = l.last_chat_text || (null != a ? a.last_chat_text :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"last_chat_text",
hash:{},
data:s
}) :i)) + "</div><span class='middot text-color-body'>&middot;</span><span class='conversation-time text-color-body' title='" + e.escapeExpression((l.standardDateTimeLong || a && a.standardDateTimeLong || l.helperMissing).call(null != a ? a :{}, null != a ? a.last_chat_at :a, {
name:"standardDateTimeLong",
hash:{},
data:s
})) + "'>" + e.escapeExpression((i = null != (i = l.relative_time || (null != a ? a.relative_time :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"relative_time",
hash:{},
data:s
}) :i)) + "</span>\n      </div>\n    </div>\n  </div>\n</a>";
},
useData:!0
}), this.HandlebarsTemplates["chat/conversations/pair_item"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/conversations_list"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<ul class='conversations-member-list-items unstyled'></ul>\n<div class='list-items-spinner mighty-spinner'></div>\n<div class='start-chat-button-container'>\n  <div class='icon-add-with-dashed-circle-56 text-color-light'></div>\n  <div class='start-chat-button-label text-color-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Start a New Chat", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/conversations_list"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/create_chat_transcript_form"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<form action='#' class='form-container' method='get' name='chat-transcript-form'>\n  <div class='transcript-chat-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Generate a New Article from this Chat using the last:", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='input-container input small-input'>\n    <div class='left-content'>\n      <input id='chat-transcript-start-date' maxlength='4' name='start_date' type='text' value='60'>\n    </div>\n    <div class='right-content'>\n      <div>\n        <div class='time-unit-label'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Minutes", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n        <div class='max-range-tip text-color-lighter'>(max " + e.escapeExpression((t = null != (t = l.max_chats || (null != a ? a.max_chats :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"max_chats",
hash:{},
data:s
}) :t)) + " Chats)</div>\n      </div>\n    </div>\n  </div>\n  <small id='ChatTranscriptTimeError'></small>\n  <div class='mighty-menu-list-divider'></div>\n  <div class='form-actions'>\n    <div class='form-actions-right'>\n      <a class='btn-form-cancel btn-form-cancel-transcript-chat mighty-btn-square-tiny mighty-btn-gray' href='#'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Cancel", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n      <a class='btn-form-submit mighty-btn-square-tiny mighty-btn-filled-theme-color-button' href='#' id='preview-chat-transcript'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Post", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n    </div>\n  </div>\n</form>";
},
useData:!0
}), this.HandlebarsTemplates["chat/create_chat_transcript_form"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/emoticons_selector"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div id='emoticons-set'>\n  <div id='emoticons-list'>" + (null != (i = null != (i = l.emoticons_list || (null != a ? a.emoticons_list :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"emoticons_list",
hash:{},
data:s
}) :i) ? t :"") + "</div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/emoticons_selector"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/empty_chat_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='empty-chat-subtext text-color-body'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "No conversation found.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/empty_chat_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/layout"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "mighty-mobile-app";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div id='participants-region'></div>\n<div class='scrollable-area " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_mighty_mobile_app :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "' id='chat-content-region'></div>\n<div class='chat-form-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/list"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "<div class='chat-list-spinner mighty-spinner'>\n  " + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "shared/_svg_spinner_icon_24", {
name:"include",
hash:{
additional_classes:"spinner-icon"
},
data:s
})) + "\n</div>\n";
},
"3":function(e, a, l, n, s) {
return "<div class='chat-list-spinner mighty-spinner'></div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_mighty_mobile_app :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.program(3, s, 0),
data:s
})) ? t :"") + "<ul class='unstyled'></ul>";
},
useData:!0
}), this.HandlebarsTemplates["chat/list"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/list_empty"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "<div class='empty-chat-subtext text-color-body'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Say hello to {first_name} and share a little something about yourself!", {
name:"translate_label",
hash:{
first_name:null != a ? a.first_name :a
},
data:s
})) + "</div>\n";
},
"3":function(e, a, l, n, s) {
return "<div class='empty-chat-subtext text-color-body'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Say hello and share a little something about yourself!", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='empty-chat-emoji'>\ud83d\udc4b</div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.first_name :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.program(3, s, 0),
data:s
})) ? t :"");
},
useData:!0
}), this.HandlebarsTemplates["chat/list_empty"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/members/presence_members_carousel/empty"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "";
},
useData:!0
}), this.HandlebarsTemplates["chat/members/presence_members_carousel/empty"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/members/presence_members_carousel/item"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "  <a class='carousel-member-delete-button text-color-light-link icon-close-16' href='#'></a>\n";
},
"3":function(e, a, l, n, s) {
return e.escapeExpression((l.makeLink || a && a.makeLink || l.helperMissing).call(null != a ? a :{}, "community_member_path", a, {
name:"makeLink",
hash:{},
data:s
}));
},
"5":function(e, a, l, n, s) {
return "    <div class='mighty-blocked-label'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Blocked", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n";
},
"7":function(e, a, l, n, s) {
var t;
return "    <div class='carousel-member-name-field'>" + e.escapeExpression((t = null != (t = l.last_name || (null != a ? a.last_name :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"last_name",
hash:{},
data:s
}) :t)) + "</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='chat-members-list-item' data-placement='bottom' rel='tooltip' title='" + e.escapeExpression((i = null != (i = l.tooltip_text || (null != a ? a.tooltip_text :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"tooltip_text",
hash:{},
data:s
}) :i)) + "'>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_delete_button :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "  <span class='mighty-presence-indicator-medium mighty-circle-border-thick mighty-circle-border-white chat-user-presence-indicator " + e.escapeExpression((l.presenceClasses || a && a.presenceClasses || l.helperMissing).call(null != a ? a :{}, null != a ? a.user_id :a, {
name:"presenceClasses",
hash:{},
data:s
})) + "' data-space-id='" + e.escapeExpression((i = null != (i = l.space_id || (null != a ? a.space_id :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"space_id",
hash:{},
data:s
}) :i)) + "' data-user-id='" + e.escapeExpression((i = null != (i = l.user_id || (null != a ? a.user_id :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"user_id",
hash:{},
data:s
}) :i)) + "'></span>\n  <a class='mighty-avatar-user-small presence-avatar navigate' href=\"" + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.show_delete_button :a, {
name:"unless",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "\">\n    <img alt='" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"name",
hash:{},
data:s
}) :i)) + "' height='40' src='" + e.escapeExpression((i = null != (i = l.avatar_url || (null != a ? a.avatar_url :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"avatar_url",
hash:{},
data:s
}) :i)) + "' width='40'>\n  </a>\n  <a class='carousel-member-name-wrapper text-color-title-link navigate' href=\"" + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.show_delete_button :a, {
name:"unless",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "\">\n    <div class='carousel-member-name-field'>" + e.escapeExpression((i = null != (i = l.first_name || (null != a ? a.first_name :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"first_name",
hash:{},
data:s
}) :i)) + "</div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.member_is_blocked :a, {
name:"if",
hash:{},
fn:e.program(5, s, 0),
inverse:e.program(7, s, 0),
data:s
})) ? t :"") + "  </a>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/members/presence_members_carousel/item"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/placeholders/participants"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "<div class='profile-placeholder'>\n  <div class='avatar-placeholder'></div>\n  <div class='name-placeholder'></div>\n  <div class='name-placeholder'></div>\n</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return (null != (t = (l.repeat || a && a.repeat || l.helperMissing).call(null != a ? a :{}, 30, {
name:"repeat",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "<div class='side-scroll'></div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/placeholders/participants"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/placeholders/title"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='avatar-placeholder'></div>\n<div class='title-placeholder'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "New Chat", {
name:"translate_label",
hash:{},
data:s
})) + "</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/placeholders/title"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/presence_members_carousel"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='chat-info-box-content'>\n  <div class='presence-members-facepile'></div>\n  <a class='side-scroll-left text-color-light-link icon-chevron-back-16 disabled' href='#'></a>\n  <a class='side-scroll-right text-color-light-link icon-chevron-forward-16 disabled' href='#'></a>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/presence_members_carousel"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/results/empty"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<span class='chat-search-no-results'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "No results", {
name:"translate_label",
hash:{},
data:s
})) + "</span>";
},
useData:!0
}), this.HandlebarsTemplates["chat/results/empty"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/results/item"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t, i;
return "<input checked='" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.checked :a, {
name:"if",
hash:{},
fn:e.program(2, s, 0),
inverse:e.program(4, s, 0),
data:s
})) ? t :"") + "' class='chat-members-search-list-item-checkbox-input hide' id='" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"id",
hash:{},
data:s
}) :i)) + "' type='checkbox'>\n  <label class='chat-members-search-list-item-label' for='" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"id",
hash:{},
data:s
}) :i)) + "'>\n    <div class='chat-members-search-list-item-wrapper display-flex align-items-center'>\n      <div class='conversation-avatar-wrapper chat-members-search-list-item-avatar-wrapper'>\n        <span class='mighty-avatar-user-xsmall conversation-avatar'>\n          <img src=\"" + e.escapeExpression((l.applyVersionToImageUrl || a && a.applyVersionToImageUrl || l.helperMissing).call(null != a ? a :{}, null != a ? a.avatar_url :a, "avatar_small", {
name:"applyVersionToImageUrl",
hash:{},
data:s
})) + "\">\n        </span>\n        <span class='mighty-presence-indicator mighty-circle-border mighty-circle-border-white chat-user-presence-indicator " + e.escapeExpression((l.presenceClasses || a && a.presenceClasses || l.helperMissing).call(null != a ? a :{}, null != a ? a.id :a, {
name:"presenceClasses",
hash:{},
data:s
})) + " " + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.is_other_user_id :a, {
name:"unless",
hash:{},
fn:e.program(6, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'></span>\n      </div>\n      <div class='conversation-info-wrapper display-flex align-items-center " + e.escapeExpression((l.presenceClasses || a && a.presenceClasses || l.helperMissing).call(null != a ? a :{}, null != a ? a.id :a, {
name:"presenceClasses",
hash:{},
data:s
})) + "' data-space-id='" + e.escapeExpression((i = null != (i = l.presenceSpaceId || (null != a ? a.presenceSpaceId :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"presenceSpaceId",
hash:{},
data:s
}) :i)) + "' data-user-id='" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"id",
hash:{},
data:s
}) :i)) + "'>\n        <span class='text-color-title-link conversation-name'>" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"name",
hash:{},
data:s
}) :i)) + "</span>\n      </div>\n    </div>\n    <span class='chat-members-search-list-item-checkbox icon-checkbox-unselected-24'></span>\n  </label>\n</input>\n";
},
"2":function(e, a, l, n, s) {
return "checked";
},
"4":function(e, a, l, n, s) {
return "false";
},
"6":function(e, a, l, n, s) {
return "tablet-small-hide";
},
"8":function(e, a, l, n, s) {
var t, i;
return "<a class='navigate conversations-item' href=\"" + e.escapeExpression((l.makeLinkWithQuerystring || a && a.makeLinkWithQuerystring || l.helperMissing).call(null != a ? a :{}, "community_new_chat_path", {
name:"makeLinkWithQuerystring",
hash:{
user_id:null != a ? a.id :a
},
data:s
})) + "\">\n  <div class='conversation-avatar-wrapper'>\n    <span class='navigate mighty-avatar-user-xsmall conversation-avatar'>\n      <img src=\"" + e.escapeExpression((l.applyVersionToImageUrl || a && a.applyVersionToImageUrl || l.helperMissing).call(null != a ? a :{}, null != a ? a.avatar_url :a, "avatar_small", {
name:"applyVersionToImageUrl",
hash:{},
data:s
})) + "\">\n    </span>\n    <span class='mighty-presence-indicator mighty-circle-border mighty-circle-border-white chat-user-presence-indicator " + e.escapeExpression((l.presenceClasses || a && a.presenceClasses || l.helperMissing).call(null != a ? a :{}, null != a ? a.id :a, {
name:"presenceClasses",
hash:{},
data:s
})) + " " + (null != (t = l.unless.call(null != a ? a :{}, null != a ? a.is_other_user_id :a, {
name:"unless",
hash:{},
fn:e.program(6, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'></span>\n  </div>\n  <div class='conversation-info-wrapper display-flex align-items-center " + e.escapeExpression((l.presenceClasses || a && a.presenceClasses || l.helperMissing).call(null != a ? a :{}, null != a ? a.id :a, {
name:"presenceClasses",
hash:{},
data:s
})) + "' data-space-id='" + e.escapeExpression((i = null != (i = l.presenceSpaceId || (null != a ? a.presenceSpaceId :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"presenceSpaceId",
hash:{},
data:s
}) :i)) + "' data-user-id='" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"id",
hash:{},
data:s
}) :i)) + "'>\n    <span class='text-color-title-link conversation-name'>" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"name",
hash:{},
data:s
}) :i)) + "</span>\n  </div>\n</a>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return null != (t = l["if"].call(null != a ? a :{}, null != a ? a.group_chat_enabled :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.program(8, s, 0),
data:s
})) ? t :"";
},
useData:!0
}), this.HandlebarsTemplates["chat/results/item"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/search_result_list"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<ul class='chat-members-search-list-items unstyled'></ul>\n<div class='list-items-spinner mighty-spinner'></div>";
},
useData:!0
}), this.HandlebarsTemplates["chat/search_result_list"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["chat/user_typing"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "";
},
useData:!0
}), this.HandlebarsTemplates["chat/user_typing"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/analytics_box_layout"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t;
return "  <div class='mighty-circle-tiny mighty-circle-border show-inline-block text-color-lighter analytics-box-help-button' rel='tooltip' title='" + e.escapeExpression((t = null != (t = l.help_button_tooltip_title || (null != a ? a.help_button_tooltip_title :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"help_button_tooltip_title",
hash:{},
data:s
}) :t)) + "'>?</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='analytics-box-head'>\n  " + e.escapeExpression((i = null != (i = l.box_title || (null != a ? a.box_title :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"box_title",
hash:{},
data:s
}) :i)) + "\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.help_button_tooltip_title :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "</div>\n<div class='analytics-box-body'>\n  <div class='analytics-box-content-region'></div>\n</div>\n<a class='navigate' href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"link",
hash:{},
data:s
}) :i)) + "'>\n  <div class='analytics-box-footer'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "SEE MORE", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n</a>";
},
useData:!0
}), this.HandlebarsTemplates["communities/analytics_box_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/bundle_buy_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='mighty-max-content-width'>\n  <div class='mighty-boxed-header'>\n    <h1 class='buy-header-title font-weight-black'>" + e.escapeExpression((t = null != (t = l.header_title || (null != a ? a.header_title :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"header_title",
hash:{},
data:s
}) :t)) + "</h1>\n  </div>\n  <div class='accordion-form-region'></div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/bundle_buy_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/bundle_products_list_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='mighty-max-content-width'>\n  <div class='about-page-section mighty-box-content-container'>\n    <div class='details-title box-content-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "What You Will Get", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='bundle-products-list-region'></div>\n  </div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/bundle_products_list_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/events_calendar_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div id='contentbar-region'></div>\n<div class='calendar-wrapper'>\n  <div class='mighty-full-page-calendar phone-hide'></div>\n  <div class='calendar-icon-region'></div>\n  <a class='phone-hide mighty-btn-square-tiny mighty-btn-filled-theme-color-button today-button' href='#'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Today", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n  <a class='phone-hide icon-contract-24 calendar-toggle-icon navigate mighty-btn-icon mighty-btn-icon-grey-5' href='" + e.escapeExpression((t = null != (t = l.collapse_button_link || (null != a ? a.collapse_button_link :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"collapse_button_link",
hash:{},
data:s
}) :t)) + "' rel='tooltip' title=\"" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Collapse", {
name:"translate_label",
hash:{},
data:s
})) + "\"></a>\n</div>\n<div class='mighty-calendar-list-wrapper phone-show'>\n  <div class='calendar-list-toggle-options'>\n    <div class='input mighty-selectable-item'>\n      <input checked class='mighty-selectable-item-input mighty-radio-btn' id='calendar-month-option' name='view-options' type='radio' value='month-view'>\n      <label class='mighty-selectable-item-input-label-container' for='calendar-month-option'>\n        <div class='mighty-selectable-item-input-label'>\n          <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Month", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n        </div>\n      </label>\n    </div>\n    <div class='input mighty-selectable-item'>\n      <input class='mighty-selectable-item-input mighty-radio-btn' id='calendar-week-option' name='view-options' type='radio' value='week-view'>\n      <label class='mighty-selectable-item-input-label-container' for='calendar-week-option'>\n        <div class='mighty-selectable-item-input-label'>\n          <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Week", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class='mighty-calendar-list phone-show'></div>\n  <div class='calendar-spinner-wrapper'>\n    <div class='mighty-spinner-gray-lighter large calendar-spinner'></div>\n  </div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/events_calendar_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/events_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='contentbar-region'></div>\n<a class='small-calendar-icon icon-calendar-32 icon-scale-16 mighty-btn-icon-square mighty-btn-filled-theme-color-button navigate secondary-button desktop-show' href=\"" + e.escapeExpression((l.pageLink || a && a.pageLink || l.helperMissing).call(null != a ? a :{}, null != a ? a.model :a, "calendar", {
name:"pageLink",
hash:{},
data:s
})) + "\"></a>\n<div class='small-calendar-wrapper desktop-hide mighty-sticky'>\n  <div class='small-calendar-actions'>\n    <a class='icon-expand-16 navigate expand-toggle mighty-btn-icon mighty-btn-icon-grey-5' href=\"" + e.escapeExpression((l.pageLink || a && a.pageLink || l.helperMissing).call(null != a ? a :{}, null != a ? a.model :a, "calendar", {
name:"pageLink",
hash:{},
data:s
})) + "\" rel='tooltip' title=\"" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Expand", {
name:"translate_label",
hash:{},
data:s
})) + "\"></a>\n    <a class='navigate mighty-btn-square-tiny mighty-btn-filled-theme-color-button small-calendar-today-button' href=\"" + e.escapeExpression((l.pageLink || a && a.pageLink || l.helperMissing).call(null != a ? a :{}, null != a ? a.model :a, "events", {
name:"pageLink",
hash:{
day_index:null != a ? a.day_index :a
},
data:s
})) + '">' + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Today", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n  </div>\n  <div class='small-calendar'></div>\n</div>\n<div id='list-region'></div>\n<div class='clear'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/events_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed_disabled"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "The Activity Feed has been disabled on this Community.", {
name:"translate_label",
hash:{},
data:s
}));
},
useData:!0
}), this.HandlebarsTemplates["communities/feed_disabled"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='feed-layout-prompts-container'>\n  <div id='host-card-prompt-region'></div>\n  <div id='post-prompt-region'></div>\n  <div id='feed-filter-region'></div>\n  <div id='onboarding-cards-region'></div>\n  <!-- / BEGIN Experiment MG-371 Block -->\n  <div id='feed-nudge-region'></div>\n  <!-- / END Experiment MG-371 Block -->\n</div>\n<div id='feed-container'>\n  <div class='new-feed-activity-notification'>\n    <a class='mighty-btn-notification mighty-btn-pill-medium mighty-btn-background-white icon-arrow-up' href='#'>\n      <span>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "New Activity", {
name:"translate_label",
hash:{},
data:s
})) + "</span>\n    </a>\n  </div>\n  <div class='list-region'></div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/flex_space_chat_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='flex-space-chat-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/flex_space_chat_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/flex_space_page_editor_layout"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t;
return "  <div class='flex-space-page-editor-empty-wrapper align-center'>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.current_user_is_host :a, {
name:"if",
hash:{},
fn:e.program(2, s, 0),
inverse:e.program(4, s, 0),
data:s
})) ? t :"") + "  </div>\n";
},
"2":function(e, a, l, n, s) {
return "    <div class='text flex-space-page-editor-empty-wrapper-description uppercase align-center'>\n      <span class='icon-eye-open-16'>\n        " + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "only visible to hosts", {
name:"translate_label",
hash:{},
data:s
})) + "\n      </span>\n    </div>\n    <div class='flex-space-page-editor-empty-wrapper-message align-center'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "This Page is just getting started! Share something amazing.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <a class='flex-space-page-editor-empty-wrapper-get-started-button mighty-btn-filled-theme-color-button mighty-btn-square-toggle-small-tiny navigate' href=\"" + e.escapeExpression((l.makeLinkWithQuerystring || a && a.makeLinkWithQuerystring || l.helperMissing).call(null != a ? a :{}, "community_new_post_path", {
name:"makeLinkWithQuerystring",
hash:{
pin_as:"space_page"
},
data:s
})) + '">' + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Get Started!", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n";
},
"4":function(e, a, l, n, s) {
return "    <div class='flex-space-page-editor-empty-wrapper-message align-center'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Nothing to see here! Come back later.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='flex-space-page-editor-region'>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.space_page_editor_is_empty :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/flex_space_page_editor_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/flex_spaces_collection_directory_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='filter-region'></div>\n<div class='spaces-list-item-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/flex_spaces_collection_directory_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/info_widget"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t;
return null != (t = l["if"].call(null != a ? a :{}, null != a ? a.can_view_content :a, {
name:"if",
hash:{},
fn:e.program(2, s, 0),
inverse:e.program(4, s, 0),
data:s
})) ? t :"";
},
"2":function(e, a, l, n, s) {
var t;
return "<a class='navigate settings-link mighty-nav-btn-external small theme-color-link-text' href='" + e.escapeExpression((t = null != (t = l.members_link || (null != a ? a.members_link :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"members_link",
hash:{},
data:s
}) :t)) + "'>\n  <span class='left-icon icon-person-circle-24 text-color-grey-5'></span>\n  <span class='display-description theme-color-link-text'>" + e.escapeExpression((t = null != (t = l.member_count_text || (null != a ? a.member_count_text :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"member_count_text",
hash:{},
data:s
}) :t)) + "</span>\n</a>\n";
},
"4":function(e, a, l, n, s) {
var t;
return "<div class='context-type container-center'>\n  <span class='left-icon icon-person-circle-24 text-color-grey-5'></span>\n  <span class='display-description text-color-grey-5 center-this'>" + e.escapeExpression((t = null != (t = l.member_count_text || (null != a ? a.member_count_text :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"member_count_text",
hash:{},
data:s
}) :t)) + "</span>\n</div>\n";
},
"6":function(e, a, l, n, s) {
var t;
return "<a class='settings-link mighty-nav-btn-external small theme-color-link-text' href='" + e.escapeExpression((t = null != (t = l.company_url || (null != a ? a.company_url :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"company_url",
hash:{},
data:s
}) :t)) + "' target='_blank' title='Visit our website'>\n  <span class='left-icon icon-link-24 text-color-grey-5'></span>\n  <span class='display-description theme-color-link-text'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Visit Our Website", {
name:"translate_label",
hash:{},
data:s
})) + "</span>\n</a>\n";
},
"8":function(e, a, l, n, s) {
var t;
return "<div class='space-location'>\n  <span class='left-icon icon-location-fill-24 text-color-grey-5'></span>\n  <span class='display-description text-color-grey-5'>" + e.escapeExpression((t = null != (t = l.location || (null != a ? a.location :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"location",
hash:{},
data:s
}) :t)) + "</span>\n</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_stats :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.company_url :a, {
name:"if",
hash:{},
fn:e.program(6, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.location :a, {
name:"if",
hash:{},
fn:e.program(8, s, 0),
inverse:e.noop,
data:s
})) ? t :"");
},
useData:!0
}), this.HandlebarsTemplates["communities/info_widget"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/live_space_chat_list_empty"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='empty-chat-emoji'>\ud83d\udc4b</div>\n<div class='empty-chat-subtext text-color-body'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Say hello to everyone!", {
name:"translate_label",
hash:{},
data:s
})) + "</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/live_space_chat_list_empty"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/live_space_countdown_panel"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='live-space-transmission-message'></div>\n<div class='submit-live-space-button-container'>\n  <a class='live-space-spinning-button mighty-btn-square-medium mighty-btn-filled-theme-color-button mighty-btn-centered disabled processing' href='#'>&nbsp;</a>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/live_space_countdown_panel"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/live_space_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='live-space'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/live_space_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/live_space_participant_item"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='participants-item'>\n  <div class='participant-avatar-wrapper'>\n    <span class='navigate mighty-avatar-user-medium-small participant-avatar'>\n      <img src=\"" + e.escapeExpression((l.applyVersionToImageUrl || a && a.applyVersionToImageUrl || l.helperMissing).call(null != a ? a :{}, null != a ? a.avatar_url :a, "avatar_small", {
name:"applyVersionToImageUrl",
hash:{},
data:s
})) + "\">\n    </span>\n  </div>\n  <div class='participant-info-wrapper display-flex align-items-center'>\n    <div class='participant-name'>" + e.escapeExpression((t = null != (t = l.name || (null != a ? a.name :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"name",
hash:{},
data:s
}) :t)) + "</div>\n  </div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/live_space_participant_item"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/live_space_participant_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='live-space-participant-layout-container scrollable-area'>\n  <div class='live-space-participant-layout-hosts-region'></div>\n  <div class='live-space-participant-layout-viewers-region'></div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/live_space_participant_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/live_space_participant_list"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='live-space-participants-header-container'>\n  <h4 class='participants-label'>" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"title",
hash:{},
data:s
}) :t)) + "</h4>\n</div>\n<ul class='live-space-participant-list-items unstyled'></ul>\n<div class='list-items-spinner mighty-spinner'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/live_space_participant_list"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/live_space_participants_wrapper"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='live-space-header'>\n  <h2 class='live-space-title-header'>" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"title",
hash:{},
data:s
}) :t)) + "</h2>\n  <div class='action-drop-down-region'></div>\n</div>\n<div id='live-space-contentbar-region'></div>\n<div id='live-space-content-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/live_space_participants_wrapper"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/live_space_settings_form"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "_blank";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='live-space-header'>\n  <h2 class='live-space-title-header'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Ready To Go?", {
name:"translate_label",
hash:{},
data:s
})) + "</h2>\n</div>\n<div class='live-space-container'>\n  <div class='mighty-boxed-section without-margin-bottom live-space-title'>\n    <div class='mighty-boxed-label'>\n      <label for='live-space-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Name Your Livestream", {
name:"translate_label",
hash:{},
data:s
})) + "</label>\n    </div>\n    <input id='live-space-title' maxlength='" + e.escapeExpression((i = null != (i = l.max_live_space_title_length || (null != a ? a.max_live_space_title_length :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"max_live_space_title_length",
hash:{},
data:s
}) :i)) + "' name='live_space_title' type='text'>\n    <div class='char-count' data-input='live-space-title' id='live-space-title-char-count'></div>\n  </div>\n  <div class='mighty-page-divider'></div>\n  <div class='mighty-boxed-section without-margin-bottom live-space-camera'>\n    <div class='mighty-boxed-label'>\n      <label for='live-space-camera'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Camera", {
name:"translate_label",
hash:{},
data:s
})) + "</label>\n    </div>\n    <div id='live-space-camera-region'></div>\n  </div>\n  <div class='mighty-boxed-section without-margin-bottom live-space-microphone'>\n    <div class='mighty-boxed-label'>\n      <label for='live-space-microphone'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Microphone", {
name:"translate_label",
hash:{},
data:s
})) + "</label>\n    </div>\n    <div id='live-space-microphone-region'></div>\n  </div>\n  <div class='mighty-boxed-section live-space-microphone-input-level'>\n    <div class='mighty-boxed-label'>\n      <label for='live-space-microphone-input-level'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Input Level", {
name:"translate_label",
hash:{},
data:s
})) + "</label>\n    </div>\n    <div id='live-space-microphone-input-level-region'></div>\n  </div>\n  <div class='mighty-page-divider'></div>\n  <div class='record-video-input-container input'>\n" + (null != (t = e.invokePartial(n["shared/modules/inputs/_mighty_icon_checkbox"], a, {
name:"shared/modules/inputs/_mighty_icon_checkbox",
hash:{
label_text:null != a ? a.record_live_video_label :a,
unchecked_icon_class:"icon-checkbox-unselected-24",
checked_icon_class:"icon-check-boxed-fill-24",
icon_classes:"mighty-boxed-label-icon",
id:"record-video-checkbox"
},
data:s,
indent:"    ",
helpers:l,
partials:n,
decorators:e.decorators
})) ? t :"") + "    <span class='icon-info-circle-16 text-color-light-link' rel='tooltip-with-touch' title='" + e.escapeExpression((i = null != (i = l.record_live_video_tooltip || (null != a ? a.record_live_video_tooltip :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"record_live_video_tooltip",
hash:{},
data:s
}) :i)) + "'></span>\n  </div>\n  <div class='notify-members-input-container input'>\n" + (null != (t = e.invokePartial(n["shared/modules/inputs/_mighty_icon_checkbox"], a, {
name:"shared/modules/inputs/_mighty_icon_checkbox",
hash:{
label_text:null != a ? a.notify_members_label :a,
checked:!0,
unchecked_icon_class:"icon-checkbox-unselected-24",
checked_icon_class:"icon-check-boxed-fill-24",
icon_classes:"mighty-boxed-label-icon",
id:"notify-members-checkbox"
},
data:s,
indent:"    ",
helpers:l,
partials:n,
decorators:e.decorators
})) ? t :"") + "    <span class='icon-info-circle-16 text-color-light-link' rel='tooltip-with-touch' title=\"" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Once you click \u2018Go Live Now\u2019, we will send a notification with your livestream link to every Host, Moderator and member of the space that you are livestreaming in.", {
name:"translate_label",
hash:{},
data:s
})) + "\"></span>\n  </div>\n</div>\n<div class='submit-live-space-button-container'>\n  <a class='submit-live-space-button mighty-btn-square-medium mighty-btn-filled-theme-color-button mighty-btn-full-width' href='#'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Go Live Now", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n</div>\n<div class='live-space-info-container'>\n  <span class='live-space-stream-hours-participants font-weight-medium'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, null != a ? a.live_streaming_hours_and_participants :a, {
name:"translate_label",
hash:{},
data:s
})) + "</span>\n  <a class='navigate font-weight-heavy' href='" + e.escapeExpression((i = null != (i = l.need_help_link || (null != a ? a.need_help_link :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"need_help_link",
hash:{},
data:s
}) :i)) + "' target='" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_pro_plan :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Need More?", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n</div>";
},
usePartial:!0,
useData:!0
}), this.HandlebarsTemplates["communities/live_space_settings_form"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/members_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='filter-bar-region'></div>\n<div class='list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/members_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/pins_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/pins_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/posts_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='contentbar-region'></div>\n<div id='list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/posts_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/presence_bar"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='presence-bar-spinner mighty-spinner'></div>\n<div class='presence-bar-content " + e.escapeExpression((t = null != (t = l.additional_content_classes || (null != a ? a.additional_content_classes :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"additional_content_classes",
hash:{},
data:s
}) :t)) + "'>\n  <a class='side-scroll-left text-color-light-link container-center' href='#'>\n    <div class='icon-chevron-back-24 unstyled center-this'></div>\n  </a>\n  <a class='side-scroll-right text-color-light-link container-center' href='#'>\n    <div class='icon-chevron-forward-24 unstyled center-this'></div>\n  </a>\n  <div class='presence-members-container'>\n    <div class='presence-list-container'>\n      <div class='presence-list-region lock-title'></div>\n    </div>\n  </div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/presence_bar"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/presence_bar_list"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<ul class='presence-members-list unstyled'></ul>";
},
useData:!0
}), this.HandlebarsTemplates["communities/presence_bar_list"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/privacy_info_widget"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='context-type container-center'>\n  <div class='mighty-avatar-tiny network-header-avatar center-this'>\n    <img src='" + e.escapeExpression((t = null != (t = l.network_avatar_url || (null != a ? a.network_avatar_url :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"network_avatar_url",
hash:{},
data:s
}) :t)) + "'>\n  </div>\n  <div class='display-description text-color-grey-5 center-this'>" + e.escapeExpression((t = null != (t = l.display_description || (null != a ? a.display_description :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"display_description",
hash:{},
data:s
}) :t)) + "</div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/privacy_info_widget"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/spaces_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='filter-bar-region'></div>\n<div class='bundle-plans-region'></div>\n<div class='community-section browse-circles'>\n  <div class='list-region'></div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/spaces_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/about/about_bundle"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "<div class='mighty-max-content-width'>\n  <a class='about-page-section mighty-box-content-container about-bundle-image display-block' style=\"background-size: cover; background-image: url('" + e.escapeExpression((l.applyVersionToImageUrl || a && a.applyVersionToImageUrl || l.helperMissing).call(null != a ? a :{}, null != a ? a.image_url :a, "post_video_thumbnail", {
name:"applyVersionToImageUrl",
hash:{},
data:s
})) + "');\" target='_blank'>\n    <div id='about-header-gradient-overlay'></div>\n    <div class='video-overlay hidden'></div>\n  </a>\n</div>\n";
},
"3":function(e, a, l, n, s) {
return e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_description", {
name:"include",
hash:{
container_class:"mighty-max-content-width"
},
data:s
})) + "\n";
},
"5":function(e, a, l, n, s) {
return e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_info_content", {
name:"include",
hash:{
space_display_name:null != a ? a.space_display_name :a,
container_class:"mighty-max-content-width"
},
data:s
})) + "\n";
},
"7":function(e, a, l, n, s) {
return "<div class='mighty-max-content-width'>\n  <div class='about-course-table-of-contents-region'></div>\n</div>\n";
},
"9":function(e, a, l, n, s) {
return e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_benefits", {
name:"include",
hash:{
container_class:"mighty-max-content-width"
},
data:s
})) + "\n";
},
"11":function(e, a, l, n, s) {
return e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_price_summary", {
name:"include",
hash:{
container_class:"mighty-max-content-width"
},
data:s
})) + "\n";
},
"13":function(e, a, l, n, s) {
return e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_footer", {
name:"include",
hash:{
mobile_buy_button_text:null != a ? a.mobile_buy_button_text :a,
buy_button_text:null != a ? a.buy_button_text :a,
navigate_links:null != a ? a.navigate_links :a,
legal_footer_text:null != a ? a.legal_footer_text :a,
show_buy:null != a ? a.show_buy :a
},
data:s
})) + "\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='header-region'></div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_header_image :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_what_you_will_get", {
name:"include",
hash:{
container_class:"mighty-max-content-width"
},
data:s
})) + "\n<div class='details-region'></div>\n" + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_hosts_bar", {
name:"include",
hash:{
container_class:"mighty-max-content-width"
},
data:s
})) + "\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_description :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_single_bundle :a, {
name:"if",
hash:{},
fn:e.program(5, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_course_table_of_contents :a, {
name:"if",
hash:{},
fn:e.program(7, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_benefits :a, {
name:"if",
hash:{},
fn:e.program(9, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_purchase_summary :a, {
name:"if",
hash:{},
fn:e.program(11, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_footer :a, {
name:"if",
hash:{},
fn:e.program(13, s, 0),
inverse:e.noop,
data:s
})) ? t :"");
},
useData:!0
}), this.HandlebarsTemplates["communities/about/about_bundle"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/about/about_bundle_landing_page"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "<div class='mighty-page-divider-short phone-hide'></div>\n" + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_description", {
name:"include",
hash:{
container_class:"max-landing-page-content-width"
},
data:s
})) + "\n";
},
"3":function(e, a, l, n, s) {
return "<div class='mighty-page-divider-short phone-hide'></div>\n" + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_info_content", {
name:"include",
hash:{
title_center:!0,
with_responsive_border:!0,
space_display_name:null != a ? a.space_display_name :a,
container_class:"max-landing-page-content-width"
},
data:s
})) + "\n";
},
"5":function(e, a, l, n, s) {
return "<div class='mighty-page-divider-short phone-hide'></div>\n" + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_benefits", {
name:"include",
hash:{
title_center:!0,
with_responsive_border:!0,
container_class:"max-landing-page-content-width"
},
data:s
})) + "\n";
},
"7":function(e, a, l, n, s) {
return e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_price_summary", {
name:"include",
hash:{
container_class:"max-landing-page-content-width landing-page-price-summary"
},
data:s
})) + "\n" + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_footer", {
name:"include",
hash:{
mobile_buy_button_text:null != a ? a.mobile_buy_button_text :a,
buy_button_text:null != a ? a.buy_button_text :a,
navigate_links:null != a ? a.navigate_links :a,
legal_footer_text:null != a ? a.legal_footer_text :a,
show_buy:null != a ? a.show_buy :a
},
data:s
})) + "\n";
},
"9":function(e, a, l, n, s) {
return "<div class='max-landing-page-content-width with-padding-bottom-large'></div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='header-region'></div>\n<div class='mighty-page-divider-short header-divider phone-hide'></div>\n" + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_what_you_will_get", {
name:"include",
hash:{
title_center:!0,
with_responsive_border:!0,
container_class:"max-landing-page-content-width"
},
data:s
})) + "\n<div class='mighty-page-divider-short phone-hide'></div>\n" + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "communities/about/partials/_hosts_bar", {
name:"include",
hash:{
title_center:!0,
with_responsive_border:!0,
container_class:"max-landing-page-content-width"
},
data:s
})) + "\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_description :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_single_bundle :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_benefits :a, {
name:"if",
hash:{},
fn:e.program(5, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_purchase_summary :a, {
name:"if",
hash:{},
fn:e.program(7, s, 0),
inverse:e.program(9, s, 0),
data:s
})) ? t :"");
},
useData:!0
}), this.HandlebarsTemplates["communities/about/about_bundle_landing_page"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/about/about_space"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t;
return "<div class='mighty-max-content-width'>\n  <div class='about-page-hosts about-page-section mighty-box-content-container'>\n    <div class='details-title box-content-title'>" + e.escapeExpression((t = null != (t = l.hosts_display_name || (null != a ? a.hosts_display_name :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"hosts_display_name",
hash:{},
data:s
}) :t)) + "</div>\n    <div class='hosts-bar-region'></div>\n  </div>\n</div>\n";
},
"3":function(e, a, l, n, s) {
return "<div class='mighty-max-content-width'>\n  <div class='about-description-region'></div>\n</div>\n";
},
"5":function(e, a, l, n, s) {
return "    <div class='about-course-table-of-contents-region'></div>\n";
},
"7":function(e, a, l, n, s) {
return "    <div class='welcome-posts about-page-section mighty-box-content-container'>\n      <ul class='unstyled'>\n        <div class='welcome-posts-region'></div>\n      </ul>\n    </div>\n";
},
"9":function(e, a, l, n, s) {
return "<div class='about-page-footer-container'>\n  <div class='plans-carousel-container'>\n    <div class='mighty-max-content-width'>\n      <div class='plans-carousel-title text-color-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Buy as Part of the Following Plans", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      <div class='plans-region'></div>\n    </div>\n  </div>\n</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='header-region'></div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_hosts :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.description :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "<div class='mighty-max-content-width'>\n  <div class='info-container'>\n    <div class='about-page-section mighty-box-content-container'>\n      <div class='box-content-title details-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "About This {displayName}", {
name:"translate_label",
hash:{
displayName:null != a ? a.space_display_name :a
},
data:s
})) + "</div>\n      <div class='info-region'></div>\n      <div class='privacy-info-region'></div>\n    </div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_course_table_of_contents :a, {
name:"if",
hash:{},
fn:e.program(5, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_welcome_posts :a, {
name:"if",
hash:{},
fn:e.program(7, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "  </div>\n</div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_plans_carousel :a, {
name:"if",
hash:{},
fn:e.program(9, s, 0),
inverse:e.noop,
data:s
})) ? t :"");
},
useData:!0
}), this.HandlebarsTemplates["communities/about/about_space"];
}.call(this), function() {
Handlebars.registerPartial("communities/about/partials/_benefits", Handlebars.template({
"1":function(e, a, l, n, s) {
return "with-border-on-responsive";
},
"3":function(e, a, l, n, s) {
return "about-section-title";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='" + e.escapeExpression((i = null != (i = l.container_class || (null != a ? a.container_class :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"container_class",
hash:{},
data:s
}) :i)) + "'>\n  <div class='about-page-section mighty-box-content-container " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.with_responsive_border :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>\n    <div class='box-content-title " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.title_center :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Benefits", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='benefits-region'></div>\n  </div>\n</div>";
},
useData:!0
}));
}.call(this), function() {
Handlebars.registerPartial("communities/about/partials/_description", Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='" + e.escapeExpression((t = null != (t = l.container_class || (null != a ? a.container_class :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"container_class",
hash:{},
data:s
}) :t)) + "'>\n  <div class='about-description-region'></div>\n</div>";
},
useData:!0
}));
}.call(this), function() {
Handlebars.registerPartial("communities/about/partials/_footer", Handlebars.template({
"1":function(e, a, l, n, s) {
var t, i;
return "<div class='about-page-footer-container'>\n  <div class='mighty-max-content-width'>\n    <a class='bundle-buy-button mighty-btn-centered mighty-btn-square-large mighty-btn-filled-theme-color-button phone-hide'>" + e.escapeExpression((i = null != (i = l.buy_button_text || (null != a ? a.buy_button_text :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"buy_button_text",
hash:{},
data:s
}) :i)) + "</a>\n    <a class='mobile-bundle-buy-button mighty-btn-centered mighty-btn-square-large mighty-btn-filled-theme-color-button phone-show'>" + e.escapeExpression((i = null != (i = l.mobile_buy_button_text || (null != a ? a.mobile_buy_button_text :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"mobile_buy_button_text",
hash:{},
data:s
}) :i)) + "</a>\n    <div class='legal-footer-text text-color-lighter'>" + (null != (i = null != (i = l.legal_footer_text || (null != a ? a.legal_footer_text :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"legal_footer_text",
hash:{},
data:s
}) :i) ? t :"") + "</div>\n  </div>\n  <div class='plans-carousel-container'>\n    <div class='mighty-page-divider-short'></div>\n    <div class='mighty-max-content-width'>\n      <div class='plans-carousel-title text-color-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Or Get Access With These Plans:", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      <div class='plans-region'></div>\n    </div>\n  </div>\n</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_buy :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"";
},
useData:!0
}));
}.call(this), function() {
Handlebars.registerPartial("communities/about/partials/_hosts_bar", Handlebars.template({
"1":function(e, a, l, n, s) {
return "with-border-on-responsive";
},
"3":function(e, a, l, n, s) {
return "about-section-title";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='" + e.escapeExpression((i = null != (i = l.container_class || (null != a ? a.container_class :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"container_class",
hash:{},
data:s
}) :i)) + "'>\n  <div class='about-page-hosts about-page-section mighty-box-content-container " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.with_responsive_border :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>\n    <div class='details-title box-content-title " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.title_center :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>" + e.escapeExpression((i = null != (i = l.hosts_display_name || (null != a ? a.hosts_display_name :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"hosts_display_name",
hash:{},
data:s
}) :i)) + "</div>\n    <div class='hosts-bar-region'></div>\n  </div>\n</div>";
},
useData:!0
}));
}.call(this), function() {
Handlebars.registerPartial("communities/about/partials/_info_content", Handlebars.template({
"1":function(e, a, l, n, s) {
return "with-border-on-responsive";
},
"3":function(e, a, l, n, s) {
return "about-section-title";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='" + e.escapeExpression((i = null != (i = l.container_class || (null != a ? a.container_class :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"container_class",
hash:{},
data:s
}) :i)) + "'>\n  <div class='info-container'>\n    <div class='about-page-section mighty-box-content-container " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.with_responsive_border :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>\n      <div class='box-content-title details-title " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.title_center :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "About This {displayName}", {
name:"translate_label",
hash:{
displayName:null != a ? a.space_display_name :a
},
data:s
})) + "</div>\n      <div class='info-region'></div>\n      <div class='privacy-info-region'></div>\n    </div>\n  </div>\n</div>";
},
useData:!0
}));
}.call(this), function() {
Handlebars.registerPartial("communities/about/partials/_price_summary", Handlebars.template({
"1":function(e, a, l, n, s) {
return "with-border-on-responsive";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='" + e.escapeExpression((i = null != (i = l.container_class || (null != a ? a.container_class :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"container_class",
hash:{},
data:s
}) :i)) + "'>\n  <div class='price-summary-container about-page-section mighty-box-content-container " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.with_responsive_border :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>\n    <div class='price-summary-region'></div>\n  </div>\n</div>";
},
useData:!0
}));
}.call(this), function() {
Handlebars.registerPartial("communities/about/partials/_what_you_will_get", Handlebars.template({
"1":function(e, a, l, n, s) {
return "with-border-on-responsive";
},
"3":function(e, a, l, n, s) {
return "about-section-title";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='" + e.escapeExpression((i = null != (i = l.container_class || (null != a ? a.container_class :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"container_class",
hash:{},
data:s
}) :i)) + "'>\n  <div class='about-page-section mighty-box-content-container " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.with_responsive_border :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>\n    <div class='box-content-title " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.title_center :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "What You Will Get", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='bundle-products-region'></div>\n  </div>\n</div>";
},
useData:!0
}));
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/announcement/layout"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "<div class='announcement-super-title text-color-lighter uppercase'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Message Regarding", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n";
},
"3":function(e, a, l, n, s) {
var t;
return "<a class='mighty-btn-square mighty-btn-filled-theme-color-button reply-button navigate' href='" + e.escapeExpression((t = null != (t = l.reply_link || (null != a ? a.reply_link :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"reply_link",
hash:{},
data:s
}) :t)) + "'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Reply", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n";
},
"5":function(e, a, l, n, s) {
var t;
return "<a class='mighty-btn-square navigate' href='" + e.escapeExpression((t = null != (t = l.post_link || (null != a ? a.post_link :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"post_link",
hash:{},
data:s
}) :t)) + "'>" + e.escapeExpression((t = null != (t = l.display_name || (null != a ? a.display_name :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"display_name",
hash:{},
data:s
}) :t)) + "</a>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_post :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "<h2 class='announcement-title text-color-title'>" + (null != (i = null != (i = l.announcement_title || (null != a ? a.announcement_title :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"announcement_title",
hash:{},
data:s
}) :i) ? t :"") + "</h2>\n<div class='chat-item'>\n  " + e.escapeExpression((l.include || a && a.include || l.helperMissing).call(null != a ? a :{}, "chat/chats/_item", {
name:"include",
hash:{},
data:s
})) + "\n</div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.reply_link :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_post :a, {
name:"if",
hash:{},
fn:e.program(5, s, 0),
inverse:e.noop,
data:s
})) ? t :"");
},
useData:!0
}), this.HandlebarsTemplates["communities/announcement/layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/announcements/layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='announcements-list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/announcements/layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/user_saved_posts/layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='saved-posts-list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/user_saved_posts/layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed/live_space_preview"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='live-space'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed/live_space_preview"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed/live_space_preview_carousel"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='live-space-carousel'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed/live_space_preview_carousel"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed/modals/community_billing_plan_started"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t;
return "<br>\n<br>\n<strong>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "+ Your Add-Ons", {
name:"translate_label",
hash:{},
data:s
})) + "</strong>\n<div class='billing-features-container'>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.has_engagement_boost :a, {
name:"if",
hash:{},
fn:e.program(2, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "</div>\n";
},
"2":function(e, a, l, n, s) {
return "  <div class='feature-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Engagement Boost", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-description'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Bring your members together with live broadcasts.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='billing-features-container'>\n  <div class='feature-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Online Courses", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-description'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Offer courses with just content, content plus community, or live.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Groups", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-description'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Use groups to set up paid membership tiers or organize your members.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Events", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-description'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Set up repeating events or run virtual conferences in your Mighty Network.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Custom Web Domain", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-description'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Use your own web domain for your Mighty Network.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Member List Download", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='feature-description'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Get member email addresses, location, interests, and who they refer.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n</div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.has_add_ons :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "<div class='subtitle'>" + e.escapeExpression((i = null != (i = l.subtitle || (null != a ? a.subtitle :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"subtitle",
hash:{},
data:s
}) :i)) + "</div>\n<a class='community-modal-action-button navigate mighty-btn-square-large mighty-btn-filled-theme-color-button' href='" + e.escapeExpression((i = null != (i = l.action_button_url || (null != a ? a.action_button_url :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"action_button_url",
hash:{},
data:s
}) :i)) + "'>" + e.escapeExpression((i = null != (i = l.action_button_text || (null != a ? a.action_button_text :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"action_button_text",
hash:{},
data:s
}) :i)) + "</a>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed/modals/community_billing_plan_started"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed/modals/community_design"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<h2>" + (null != (t = (l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "A message for hosts<br/>from Mighty Networks", {
name:"translate_label",
hash:{},
data:s
})) ? t :"") + "</h2>\n<h1>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "You Don't Want to Miss This!", {
name:"translate_label",
hash:{},
data:s
})) + "</h1>\n<div class='mighty-boxed-section'>\n  <img class='modal-video-placeholder-image' src=\"" + e.escapeExpression((l.settings || a && a.settings || l.helperMissing).call(null != a ? a :{}, "modalVideos.communityDesign.videoCoverUrl", {
name:"settings",
hash:{},
data:s
})) + "\" with='100%'>\n  <div class='video-region'></div>\n  <div class='modal-message'>" + (null != (i = null != (i = l.message || (null != a ? a.message :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"message",
hash:{},
data:s
}) :i) ? t :"") + "</div>\n</div>\n<a class='community-design-modal-action-button mighty-btn-square-large mighty-btn-filled-theme-color-button phone-hide' href='" + e.escapeExpression((i = null != (i = l.action_button_url || (null != a ? a.action_button_url :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"action_button_url",
hash:{},
data:s
}) :i)) + "' target='_blank'>" + e.escapeExpression((i = null != (i = l.action_button_text || (null != a ? a.action_button_text :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"action_button_text",
hash:{},
data:s
}) :i)) + "</a>\n<a class='community-design-modal-action-button mighty-btn-centered mighty-btn-square-large mighty-btn-filled-theme-color-button phone-show' href='" + e.escapeExpression((i = null != (i = l.action_button_url || (null != a ? a.action_button_url :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"action_button_url",
hash:{},
data:s
}) :i)) + "' target='_blank'>" + e.escapeExpression((i = null != (i = l.phone_action_button_text || (null != a ? a.phone_action_button_text :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"phone_action_button_text",
hash:{},
data:s
}) :i)) + "</a>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed/modals/community_design"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed/modals/community_free_trial_days_remaining"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='billing-features-region'></div>\n<a class='community-modal-action-button mighty-btn-square-large' href='#'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Upgrade Now", {
name:"translate_label",
hash:{},
data:s
})) + "</a>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed/modals/community_free_trial_days_remaining"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed/modals/community_free_trial_ended"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='billing-features-region'></div>\n<a class='community-modal-action-button mighty-btn-square-large' href='#'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Upgrade Now", {
name:"translate_label",
hash:{},
data:s
})) + "</a>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed/modals/community_free_trial_ended"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed/modals/community_free_trial_reprompt"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='billing-features-region'></div>\n<div class='subtitle no-credit-card-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "No Credit Card Required", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n<a class='community-modal-action-button mighty-btn-square-large mighty-btn-filled-theme-color-button' href='#'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Start Your NEW Free Trial", {
name:"translate_label",
hash:{},
data:s
})) + "</a>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed/modals/community_free_trial_reprompt"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed/modals/community_restore_free_trial"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='billing-features-region'></div>\n<div class='subtitle no-credit-card-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "No Credit Card Required", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n<a class='community-modal-action-button mighty-btn-square-large mighty-btn-filled-theme-color-button' href='#'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Start Your NEW Free Trial", {
name:"translate_label",
hash:{},
data:s
})) + "</a>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed/modals/community_restore_free_trial"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/feed/modals/tour"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='mighty-boxed-section'>\n  <img class='modal-video-placeholder-image' src='" + e.escapeExpression((t = null != (t = l.video_cover_url || (null != a ? a.video_cover_url :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"video_cover_url",
hash:{},
data:s
}) :t)) + "' width='100%'>\n  <div class='video-region'></div>\n  <div class='modal-message'>" + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"description",
hash:{},
data:s
}) :t)) + "</div>\n</div>\n<a class='tour-modal-action-button mighty-btn-centered mighty-btn-square-large mighty-btn-filled-theme-color-button' href='#'>" + e.escapeExpression((t = null != (t = l.action_button_text || (null != a ? a.action_button_text :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"action_button_text",
hash:{},
data:s
}) :t)) + "</a>";
},
useData:!0
}), this.HandlebarsTemplates["communities/feed/modals/tour"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/member_profile/about"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t, i;
return "  <div class='profile-page-about-column half'>\n    <div class='title'>\n      " + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Location", {
name:"translate_label",
hash:{},
data:s
})) + "\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.has_guessed_location :a, {
name:"if",
hash:{},
fn:e.program(2, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "    </div>\n    <div class='content'>\n      " + e.escapeExpression((i = null != (i = l.location || (null != a ? a.location :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"location",
hash:{},
data:s
}) :i)) + "\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_location_callout :a, {
name:"if",
hash:{},
fn:e.program(4, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "    </div>\n  </div>\n";
},
"2":function(e, a, l, n, s) {
return "      <span class='text-color-light-link icon-poll-question-circle-16' rel='tooltip' title=\"" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "We\u2019ve guessed your location in order to show you people nearby - but we won\u2019t show your location to anyone. Edit your profile to change it.", {
name:"translate_label",
hash:{},
data:s
})) + '"></span>\n';
},
"4":function(e, a, l, n, s) {
return "      <a class='icon-add-boxed-fill-24 text-color-light-link navigate' href=\"" + e.escapeExpression((l.makeLink || a && a.makeLink || l.helperMissing).call(null != a ? a :{}, "community_your_settings_path", "profile", {
name:"makeLink",
hash:{},
data:s
})) + '"></a>\n';
},
"6":function(e, a, l, n, s) {
var t;
return "  <div class='profile-page-about-column half'>\n    <div class='title'>" + e.escapeExpression((t = null != (t = l.segment_silo_name || (null != a ? a.segment_silo_name :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"segment_silo_name",
hash:{},
data:s
}) :t)) + "</div>\n    <div class='content'>\n      <a class='navigate' href='" + e.escapeExpression((t = null != (t = l.segment_link || (null != a ? a.segment_link :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"segment_link",
hash:{},
data:s
}) :t)) + "'>\n        " + e.escapeExpression((t = null != (t = l.segment || (null != a ? a.segment :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"segment",
hash:{},
data:s
}) :t)) + "\n      </a>\n    </div>\n  </div>\n";
},
"8":function(e, a, l, n, s) {
var t;
return "  <div class='profile-page-about-column half'>\n    <div class='title'>" + e.escapeExpression((t = null != (t = l.segment_silo_name || (null != a ? a.segment_silo_name :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"segment_silo_name",
hash:{},
data:s
}) :t)) + "</div>\n    <div class='content'>\n      <a class='icon-add-boxed-fill-24 text-color-light-link navigate' href=\"" + e.escapeExpression((l.makeLink || a && a.makeLink || l.helperMissing).call(null != a ? a :{}, "community_your_settings_path", "profile", {
name:"makeLink",
hash:{},
data:s
})) + '"></a>\n    </div>\n  </div>\n';
},
"10":function(e, a, l, n, s) {
var t;
return "      <a class='navigate' href=\"" + e.escapeExpression((l.makeLink || a && a.makeLink || l.helperMissing).call(null != a ? a :{}, "community_member_followed_users_path", a, {
name:"makeLink",
hash:{},
data:s
})) + '">' + e.escapeExpression((t = null != (t = l.followed_user_count || (null != a ? a.followed_user_count :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"followed_user_count",
hash:{},
data:s
}) :t)) + "</a>\n";
},
"12":function(e, a, l, n, s) {
return "      <span>0</span>\n";
},
"14":function(e, a, l, n, s) {
var t;
return "<div class='profile-page-about-row'>\n  <div class='profile-page-about-column'>\n    <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Introduction", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='content'>\n      " + e.escapeExpression((t = null != (t = l.introduction_text || (null != a ? a.introduction_text :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"introduction_text",
hash:{},
data:s
}) :t)) + "\n    </div>\n  </div>\n</div>\n";
},
"16":function(e, a, l, n, s) {
return "<div class='profile-page-about-row container-center'>\n  <div class='profile-page-about-column introduce-yourself center-this'>\n    <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Introduce Yourself", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='content'>\n      <a class='icon-add-boxed-fill-24 text-color-light-link navigate' href=\"" + e.escapeExpression((l.makeLink || a && a.makeLink || l.helperMissing).call(null != a ? a :{}, "community_your_settings_path", "profile", {
name:"makeLink",
hash:{},
data:s
})) + '"></a>\n    </div>\n  </div>\n</div>\n';
},
"18":function(e, a, l, n, s) {
var t;
return "<div class='profile-page-about-row' id='courses-row'>\n  <div class='profile-page-about-column'>\n    <div class='title'>" + e.escapeExpression((t = null != (t = l.course_silo_plural_name || (null != a ? a.course_silo_plural_name :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"course_silo_plural_name",
hash:{},
data:s
}) :t)) + "</div>\n    <div class='content' id='courses-region'></div>\n  </div>\n</div>\n";
},
"20":function(e, a, l, n, s) {
var t;
return "<div class='profile-page-about-row' id='circles-row'>\n  <div class='profile-page-about-column'>\n    <div class='title'>" + e.escapeExpression((t = null != (t = l.circle_silo_plural_name || (null != a ? a.circle_silo_plural_name :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"circle_silo_plural_name",
hash:{},
data:s
}) :t)) + "</div>\n    <div class='content' id='circle-region'></div>\n  </div>\n</div>\n";
},
"22":function(e, a, l, n, s) {
return "<div class='profile-page-about-row' id='topics-row'>\n  <div class='profile-page-about-column'>\n    <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Topics", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='content' id='topic-picker-region'></div>\n  </div>\n</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='profile-page-about-row badges'>\n  <div class='profile-page-about-column'>\n    <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Badges", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='content'>\n      <div class='badge-region' id='role-badge-region'></div>\n      <div class='badge-region' id='person-badge-region'></div>\n      <div class='badge-region' id='ambassador-badge-region'></div>\n    </div>\n  </div>\n</div>\n<div class='profile-page-about-row'>\n  <div class='profile-page-about-column'>\n    <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Activity", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='content'>\n      " + e.escapeExpression((i = null != (i = l.post_count || (null != a ? a.post_count :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"post_count",
hash:{},
data:s
}) :i)) + "<span class='middot'>&middot;</span>" + e.escapeExpression((i = null != (i = l.last_active || (null != a ? a.last_active :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"last_active",
hash:{},
data:s
}) :i)) + "<span class='middot'>&middot;</span><a class='navigate' href=\"" + e.escapeExpression((l.makeLink || a && a.makeLink || l.helperMissing).call(null != a ? a :{}, "community_member_feed_path", a, {
name:"makeLink",
hash:{},
data:s
})) + '">\n        ' + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "See All Activity", {
name:"translate_label",
hash:{},
data:s
})) + "\n        <span class='icon-arrow-tip-forward-16 first'></span>\n      </a>\n    </div>\n  </div>\n</div>\n<div class='profile-page-about-row'>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_location :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_segment :a, {
name:"if",
hash:{},
fn:e.program(6, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_segment_callout :a, {
name:"if",
hash:{},
fn:e.program(8, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "</div>\n<div class='profile-page-about-row'>\n  <div class='profile-page-about-column half'>\n    <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Followers", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='content' id='followers-count-region'></div>\n  </div>\n  <div class='profile-page-about-column half'>\n    <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Following", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='content'>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_followed_users_link :a, {
name:"if",
hash:{},
fn:e.program(10, s, 0),
inverse:e.program(12, s, 0),
data:s
})) ? t :"") + "    </div>\n  </div>\n</div>\n<div class='profile-page-about-row hide' id='personal-links-row'>\n  <div class='profile-page-about-column'>\n    <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Personal Links", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='content'>\n      <a class='hide edit-personal-links-icon-button icon-add-boxed-fill-24 text-color-light-link navigate' href=\"" + e.escapeExpression((l.makeLink || a && a.makeLink || l.helperMissing).call(null != a ? a :{}, "community_your_settings_path", "profile", {
name:"makeLink",
hash:{},
data:s
})) + "\"></a>\n      <div id='personal-links-region'></div>\n    </div>\n  </div>\n</div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_introduction :a, {
name:"if",
hash:{},
fn:e.program(14, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_introduction_callout :a, {
name:"if",
hash:{},
fn:e.program(16, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_courses :a, {
name:"if",
hash:{},
fn:e.program(18, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_circles :a, {
name:"if",
hash:{},
fn:e.program(20, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_topics :a, {
name:"if",
hash:{},
fn:e.program(22, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "<div class='profile-page-about-row' id='events-row'>\n  <div class='profile-page-about-column'>\n    <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Events", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n    <div class='content' id='events-region'></div>\n  </div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/member_profile/about"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/member_profile/events_list"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "<a class='see-all-events uppercase navigate' href=\"" + e.escapeExpression((l.makeLink || a && a.makeLink || l.helperMissing).call(null != a ? a :{}, "community_member_events_path", a, {
name:"makeLink",
hash:{},
data:s
})) + '">' + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "See All", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='member-profile-events-list primary'></div>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_more :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"");
},
useData:!0
}), this.HandlebarsTemplates["communities/member_profile/events_list"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/member_profile/followers_count"] = Handlebars.template({
"1":function(e, a, l, n, s) {
var t;
return "<a class='navigate' href=\"" + e.escapeExpression((l.makeLink || a && a.makeLink || l.helperMissing).call(null != a ? a :{}, "community_member_followers_path", a, {
name:"makeLink",
hash:{},
data:s
})) + "\" id='follower-count'>" + e.escapeExpression((t = null != (t = l.follower_count || (null != a ? a.follower_count :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"follower_count",
hash:{},
data:s
}) :t)) + "</a>\n";
},
"3":function(e, a, l, n, s) {
return "<span id='follower-count'>0</span>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_followers_link :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.program(3, s, 0),
data:s
})) ? t :"";
},
useData:!0
}), this.HandlebarsTemplates["communities/member_profile/followers_count"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/member_profile/layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='community-member-profile-header-region'></div>\n<div id='community-member-profile-bottom-content'>\n  <div id='community-member-profile-about-region'></div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/member_profile/layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/backfill_backstory"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/backfill_backstory"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/calendar/add_to_calendar"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "disabled";
},
"3":function(e, a, l, n, s) {
return "tooltip";
},
"5":function(e, a, l, n, s) {
var t;
return e.escapeExpression((t = null != (t = l.tooltip_title || (null != a ? a.tooltip_title :a)) ? t :l.helperMissing, 
"function" == typeof t ? t.call(null != a ? a :{}, {
name:"tooltip_title",
hash:{},
data:s
}) :t));
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='message-section'>\n  <div class='calendar-modal-title text-color-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Add to Your Calendar", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='calendar-modal-message text-color-light'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Export this event to your calendar of choice. Future changes to either the original or the copy will not be reflected in the other.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <a class='mighty-nav-btn-internal full-width google-calendar-button " + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.disable_google :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "' data-placement='bottom' href='#' rel='" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.disable_google :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "' target='_blank' title='" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.disable_google :a, {
name:"if",
hash:{},
fn:e.program(5, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + '\'>\n    <div class=\'content\'>\n      <img width="24" height="24" class="icon-label" src="https://assets1-production-mightynetworks.imgix.net/assets/icons/google-calendar-24-b0f6235b40136a8c4cef0695a5f1df6a5e264699667fb447c776278022f1a9fc.png" alt="Google calendar 24" />\n      <div class=\'right\'>\n        <div class=\'title\'>' + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Google Calendar", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      </div>\n    </div>\n  </a>\n  <a class='mighty-nav-btn-internal full-width apple-calendar-button' href='#'>\n    <div class='content'>\n      <img width=\"24\" height=\"24\" class=\"icon-label\" src=\"https://assets1-production-mightynetworks.imgix.net/assets/icons/apple-calendar-24-18b22ad7c3bfe0e8bd9a58b8f847fd40b7e95bdc528a06e843885b9d79aced04.png\" alt=\"Apple calendar 24\" />\n      <div class='right'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Apple Calendar", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      </div>\n    </div>\n  </a>\n  <a class='mighty-nav-btn-internal full-width outlook-calendar-button' href='#'>\n    <div class='content'>\n      <img width=\"24\" height=\"24\" class=\"icon-label\" src=\"https://assets1-production-mightynetworks.imgix.net/assets/icons/outlook-calendar-24-ff3dbd4073b488d320a05a6c7f141294e09615bb2006f8fb652f446d94bf0862.png\" alt=\"Outlook calendar 24\" />\n      <div class='right'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Outlook", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      </div>\n    </div>\n  </a>\n  <a class='mighty-nav-btn-internal full-width download-ics-calendar-button' download='" + e.escapeExpression((i = null != (i = l.file_name || (null != a ? a.file_name :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"file_name",
hash:{},
data:s
}) :i)) + "' href='" + e.escapeExpression((i = null != (i = l.ics_download_url || (null != a ? a.ics_download_url :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"ics_download_url",
hash:{},
data:s
}) :i)) + "'>\n    <div class='content'>\n      <div class='icon-label icon-download-24 text-color-lighter'></div>\n      <div class='right'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Download File (.ics)", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      </div>\n    </div>\n  </a>\n  <div class='calendar-modal-message calendar-bottom-subtitle text-color-light'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "When you sync your events from {space_title} to your calendar, any changes made to the original will be updated in your personal calendar at regular intervals.", {
name:"translate_label",
hash:{
space_title:null != a ? a.space_title :a
},
data:s
})) + "</div>\n  <a class='mighty-nav-btn-internal full-width sync-calendar-button' href='#'>\n    <div class='content'>\n      <div class='icon-label icon-switch-24 text-color-lighter'></div>\n      <div class='right'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Sync My Calendar", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      </div>\n    </div>\n  </a>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/calendar/add_to_calendar"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/calendar/add_to_external_calendar"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='steps-to-add mighty-numbered-list-item'>\n  <div class='text-color-white mighty-item-number'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "1", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='text-color-light mighty-item-label'>" + e.escapeExpression((i = null != (i = l.first_step_label || (null != a ? a.first_step_label :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"first_step_label",
hash:{},
data:s
}) :i)) + "</div>\n</div>\n<div class='steps-to-add mighty-numbered-list-item'>\n  <div class='text-color-white mighty-item-number'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "2", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='text-color-light mighty-item-label'>" + (null != (i = null != (i = l.second_step_label || (null != a ? a.second_step_label :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"second_step_label",
hash:{},
data:s
}) :i) ? t :"") + "</div>\n</div>\n<div class='steps-to-add mighty-numbered-list-item'>\n  <div class='text-color-white mighty-item-number'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "3", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='text-color-light mighty-item-label'>" + (null != (i = null != (i = l.third_step_label || (null != a ? a.third_step_label :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"third_step_label",
hash:{},
data:s
}) :i) ? t :"") + "</div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/calendar/add_to_external_calendar"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/calendar/recurring_add_to_calendar_choice"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='modal-container recurring-add-to-calendar-choice-container'>\n  <div class='recurring-modal-title text-color-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Add Repeat Event to Calendar", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='recurring-input-options'>\n    <div class='input mighty-selectable-item'>\n      <input checked class='mighty-selectable-item-input mighty-radio-btn' id='single-event' name='recurring-event' type='radio'>\n      <label class='mighty-selectable-item-input-label-container text-color-title calendar-modal-radio-input-label' for='single-event'>\n        <span></span>\n        <span>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Only This Event", {
name:"translate_label",
hash:{},
data:s
})) + "</span>\n      </label>\n    </div>\n    <div class='input mighty-selectable-item'>\n      <input class='mighty-selectable-item-input mighty-radio-btn' id='sync-to-calendar' name='recurring-event' type='radio'>\n      <label class='mighty-selectable-item-input-label-container text-color-title calendar-modal-radio-input-label' for='sync-to-calendar'>\n        <span></span>\n        <span>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Sync To Calendar", {
name:"translate_label",
hash:{},
data:s
})) + "</span>\n      </label>\n    </div>\n  </div>\n  <a class='mighty-btn-square-medium mighty-btn-centered mighty-btn-filled-theme-color-button submit-button'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Continue", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n  <a class='cancel-button text-color-light-link navigate' href=''>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Cancel", {
name:"translate_label",
hash:{},
data:s
})) + "</a>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/calendar/recurring_add_to_calendar_choice"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/calendar/sync_to_calendar"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='message-section'>\n  <div class='calendar-modal-title text-color-title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Sync Your Calendar", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='calendar-modal-message text-color-light'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "When you sync your events from {title} to your calendar, any changes made to the original will be updated in your personal calendar, usually at regular intervals.", {
name:"translate_label",
hash:{
title:null != a ? a.title :a
},
data:s
})) + "</div>\n  <div class='sync-to-calendar-inputs'>\n    <div class='input mighty-selectable-item'>\n      <input checked class='mighty-selectable-item-input mighty-radio-btn' id='my_rsvps' name='sync-to-calendar' type='radio' value='my_rsvps'>\n      <label class='mighty-selectable-item-input-label-container text-color-title my-rsvps-input-label' for='my_rsvps'>\n        <span></span>\n        <span class='sync-to-calendar-input-label'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Sync Only My RSVPs", {
name:"translate_label",
hash:{},
data:s
})) + "</span>\n      </label>\n    </div>\n    <div class='input mighty-selectable-item'>\n      <input class='mighty-selectable-item-input mighty-radio-btn' id='all_events' name='sync-to-calendar' type='radio' value='all_events'>\n      <label class='mighty-selectable-item-input-label-container text-color-title all-rsvps-input-label' for='all_events'>\n        <span></span>\n        <span class='sync-to-calendar-input-label'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Sync All Events", {
name:"translate_label",
hash:{},
data:s
})) + "</span>\n      </label>\n    </div>\n  </div>\n  <a class='mighty-nav-btn-internal full-width google-calendar-button' href='#' target='_blank'>\n    <div class='content'>\n      <img width=\"24\" height=\"24\" class=\"icon-label\" src=\"https://assets1-production-mightynetworks.imgix.net/assets/icons/google-calendar-24-b0f6235b40136a8c4cef0695a5f1df6a5e264699667fb447c776278022f1a9fc.png\" alt=\"Google calendar 24\" />\n      <div class='right'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Google Calendar", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      </div>\n    </div>\n  </a>\n  <a class='mighty-nav-btn-internal full-width apple-calendar-button' href='#'>\n    <div class='content'>\n      <img width=\"24\" height=\"24\" class=\"icon-label\" src=\"https://assets1-production-mightynetworks.imgix.net/assets/icons/apple-calendar-24-18b22ad7c3bfe0e8bd9a58b8f847fd40b7e95bdc528a06e843885b9d79aced04.png\" alt=\"Apple calendar 24\" />\n      <div class='right'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Apple Calendar", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      </div>\n    </div>\n  </a>\n  <a class='mighty-nav-btn-internal full-width outlook-calendar-button' href='#'>\n    <div class='content'>\n      <img width=\"24\" height=\"24\" class=\"icon-label\" src=\"https://assets1-production-mightynetworks.imgix.net/assets/icons/outlook-calendar-24-ff3dbd4073b488d320a05a6c7f141294e09615bb2006f8fb652f446d94bf0862.png\" alt=\"Outlook calendar 24\" />\n      <div class='right'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Outlook", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n      </div>\n    </div>\n  </a>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/calendar/sync_to_calendar"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/calendar/sync_with_external_calendar"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t, i;
return "<div class='steps-to-sync mighty-numbered-list-item'>\n  <div class='text-color-white mighty-item-number'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "1", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='text-color-light mighty-item-label'>" + e.escapeExpression((i = null != (i = l.first_step_label || (null != a ? a.first_step_label :a)) ? i :l.helperMissing, 
"function" == typeof i ? i.call(null != a ? a :{}, {
name:"first_step_label",
hash:{},
data:s
}) :i)) + "</div>\n</div>\n<div class='copy-link'>\n  <div class='copy-link-region'></div>\n</div>\n<div class='steps-to-sync mighty-numbered-list-item'>\n  <div class='text-color-white mighty-item-number'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "2", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='text-color-light mighty-item-label'>" + (null != (i = null != (i = l.second_step_label || (null != a ? a.second_step_label :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"second_step_label",
hash:{},
data:s
}) :i) ? t :"") + "</div>\n</div>\n<div class='steps-to-sync mighty-numbered-list-item'>\n  <div class='text-color-white mighty-item-number'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "3", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n  <div class='text-color-light mighty-item-label'>" + (null != (i = null != (i = l.third_step_label || (null != a ? a.third_step_label :a)) ? i :l.helperMissing, 
t = "function" == typeof i ? i.call(null != a ? a :{}, {
name:"third_step_label",
hash:{},
data:s
}) :i) ? t :"") + "</div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/calendar/sync_with_external_calendar"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/duplicate_post_confirmation"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "All content and settings for {lesson_plural_silo_name} contained in this {section_silo_name}", {
name:"translate_label",
hash:{
lesson_plural_silo_name:null != a ? a.lesson_plural_silo_name :a,
section_silo_name:null != a ? a.section_silo_name :a
},
data:s
})) + "</li>\n";
},
"3":function(e, a, l, n, s) {
return "  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Comments on {lesson_plural_silo_name} contained in this {section_silo_name}", {
name:"translate_label",
hash:{
lesson_plural_silo_name:null != a ? a.lesson_plural_silo_name :a,
section_silo_name:null != a ? a.section_silo_name :a
},
data:s
})) + "</li>\n";
},
"5":function(e, a, l, n, s) {
return "  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Comments", {
name:"translate_label",
hash:{},
data:s
})) + "</li>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='included-items text-color-light'>" + (null != (t = (l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "The following things [underlined: will] be carried over into your duplicated {display_name}:", {
name:"translate_label",
hash:{
display_name:null != a ? a.display_name :a
},
data:s
})) ? t :"") + "</div>\n<ul class='text-color-title mighty-styled-list medium'>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "All {display_name} content and settings", {
name:"translate_label",
hash:{
display_name:null != a ? a.display_name :a
},
data:s
})) + "</li>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_section :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "</ul>\n<div class='included-items text-color-light'>" + (null != (t = (l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "The following things [underlined: will [bold: NOT]] be carried over:", {
name:"translate_label",
hash:{},
data:s
})) ? t :"") + "</div>\n<ul class='text-color-title mighty-styled-list medium'>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "{student_silo_name} progress", {
name:"translate_label",
hash:{
student_silo_name:null != a ? a.student_silo_name :a
},
data:s
})) + "</li>\n" + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_section :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.is_lesson :a, {
name:"if",
hash:{},
fn:e.program(5, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + "</ul>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/duplicate_post_confirmation"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/duplicate_space_confirmation"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<div class='included-items text-color-light'>" + (null != (t = (l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "The following things [underlined: will] be carried over into your duplicated {space_silo_name}:", {
name:"translate_label",
hash:{
space_silo_name:null != a ? a.space_silo_name :a
},
data:s
})) ? t :"") + "</div>\n<ul class='text-color-title mighty-styled-list medium'>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "All Course Material (Overview, {section_plural_silo_name}, and {lesson_plural_silo_name} and their settings)", {
name:"translate_label",
hash:{
lesson_plural_silo_name:null != a ? a.lesson_plural_silo_name :a,
section_plural_silo_name:null != a ? a.section_plural_silo_name :a
},
data:s
})) + "</li>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "{instructor_plural_silo_name} membership", {
name:"translate_label",
hash:{
instructor_plural_silo_name:null != a ? a.instructor_plural_silo_name :a
},
data:s
})) + "</li>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "All {space_silo_name} settings", {
name:"translate_label",
hash:{
space_silo_name:null != a ? a.space_silo_name :a
},
data:s
})) + "</li>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "{space_silo_name} Topics", {
name:"translate_label",
hash:{
space_silo_name:null != a ? a.space_silo_name :a
},
data:s
})) + "</li>\n</ul>\n<div class='included-items text-color-light'>" + (null != (t = (l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "The following things [underlined: will [bold: NOT]] be carried over:", {
name:"translate_label",
hash:{},
data:s
})) ? t :"") + "</div>\n<ul class='text-color-title mighty-styled-list medium'>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "{student_plural_silo_name} membership and progress", {
name:"translate_label",
hash:{
student_plural_silo_name:null != a ? a.student_plural_silo_name :a
},
data:s
})) + "</li>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "{lesson_silo_name}, {section_silo_name} and Overview Visibility", {
name:"translate_label",
hash:{
section_silo_name:null != a ? a.section_silo_name :a,
lesson_silo_name:null != a ? a.lesson_silo_name :a
},
data:s
})) + "</li>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "All {lesson_silo_name} comments", {
name:"translate_label",
hash:{
lesson_silo_name:null != a ? a.lesson_silo_name :a
},
data:s
})) + "</li>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Paid {space_silo_name} Plans", {
name:"translate_label",
hash:{
space_silo_name:null != a ? a.space_silo_name :a
},
data:s
})) + "</li>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Scheduled Posts and Drafts", {
name:"translate_label",
hash:{},
data:s
})) + "</li>\n  <li class='mighty-styled-list-item'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Messages sent in All Member Chat", {
name:"translate_label",
hash:{},
data:s
})) + "</li>\n</ul>\n<div class='text-color-light'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "You\u2019ll get to choose what you want to do with posts in the next step.", {
name:"translate_label",
hash:{},
data:s
})) + "</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/duplicate_space_confirmation"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/duplicate_space_post_scope"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return "<fieldset class='mighty-selectable-item-group-wrapper' id='posts-options'>\n  <div class='input mighty-selectable-item'>\n    <input checked class='mighty-selectable-item-input mighty-radio-btn coursework-settings-option' id='posts-none' name='post-options' type='radio' value='none'>\n    <label class='mighty-selectable-item-input-label-container text-color-title' for='posts-none'>\n      <span></span>\n      <div class='mighty-selectable-item-input-label'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Do not duplicate any posts", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n        <div class='description'>\n          " + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Posts from the {space_silo_name} Activity Feed will not be duplicated into your new {space_silo_name}, regardless of who created them.", {
name:"translate_label",
hash:{
space_silo_name:null != a ? a.space_silo_name :a
},
data:s
})) + "\n        </div>\n      </div>\n    </label>\n  </div>\n  <div class='input mighty-selectable-item'>\n    <input class='mighty-selectable-item-input mighty-radio-btn coursework-settings-option' id='posts-host' name='post-options' type='radio' value='hosts'>\n    <label class='mighty-selectable-item-input-label-container text-color-title' for='posts-host'>\n      <span></span>\n      <div class='mighty-selectable-item-input-label'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Duplicate all Instructor posts", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n        <div class='description'>\n          " + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Any posts created by your {instructor_plural_silo_name} will be duplicated into your new {space_silo_name}.", {
name:"translate_label",
hash:{
instructor_plural_silo_name:null != a ? a.instructor_plural_silo_name :a,
space_silo_name:null != a ? a.space_silo_name :a
},
data:s
})) + "\n        </div>\n      </div>\n    </label>\n  </div>\n  <div class='input mighty-selectable-item'>\n    <input class='mighty-selectable-item-input mighty-radio-btn coursework-settings-option' id='posts-all' name='post-options' type='radio' value='all'>\n    <label class='mighty-selectable-item-input-label-container text-color-title' for='posts-all'>\n      <span></span>\n      <div class='mighty-selectable-item-input-label'>\n        <div class='title'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Duplicate all posts", {
name:"translate_label",
hash:{},
data:s
})) + "</div>\n        <div class='description'>\n          " + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "All posts, regardless of who created them, will be duplicated into your new {space_silo_name}.", {
name:"translate_label",
hash:{
space_silo_name:null != a ? a.space_silo_name :a
},
data:s
})) + "\n        </div>\n      </div>\n    </label>\n  </div>\n</fieldset>\n<div class='text-color-light align-center'>" + (null != (t = (l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Regardless of your choice above, comments, cheers, event RSVPs, poll answers, drafts, and scheduled posts [underlined: will [bold: NOT]] be duplicated.", {
name:"translate_label",
hash:{},
data:s
})) ? t :"") + "</div>\n<br>\n<div class='text-color-light align-center'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "When you\u2019re ready, click the button below to start duplicating!", {
name:"translate_label",
hash:{},
data:s
})) + "</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/duplicate_space_post_scope"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/modals/zoom_event_sync_conflict_modal"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<li>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "It appears this event is out-of-sync with the matching event at Zoom.us. This may have happened when settings were changed on the matching event at Zoom.us that aren't compatible here. Saving this event will update the settings on the event at Zoom.us to match your settings here.", {
name:"translate_label",
hash:{},
data:s
})) + "</li>";
},
useData:!0
}), this.HandlebarsTemplates["communities/modals/zoom_event_sync_conflict_modal"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/notifications/members_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/notifications/members_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/search/search_page_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='filter-region'></div>\n<div id='search-results-content'>\n  <div id='content-region'></div>\n</div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/search/search_page_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/search/sidebar_filter"] = Handlebars.template({
"1":function(e, a, l, n, s) {
return "<div class='input mine'>\n  <input id='mine' name='mine' type='checkbox' value='mine'>\n  <label for='mine'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Only in My {siloName}", {
name:"translate_label",
hash:{
siloName:null != a ? a.silo_name :a
},
data:s
})) + "</label>\n</div>\n";
},
"3":function(e, a, l, n, s) {
return "<div class='input location'>\n  <input id='location' name='location' type='checkbox' value='location'>\n  <label for='location'>" + e.escapeExpression((l.translate_label || a && a.translate_label || l.helperMissing).call(null != a ? a :{}, "Near You", {
name:"translate_label",
hash:{},
data:s
})) + "</label>\n</div>\n";
},
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
var t;
return (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_circles :a, {
name:"if",
hash:{},
fn:e.program(1, s, 0),
inverse:e.noop,
data:s
})) ? t :"") + (null != (t = l["if"].call(null != a ? a :{}, null != a ? a.show_location :a, {
name:"if",
hash:{},
fn:e.program(3, s, 0),
inverse:e.noop,
data:s
})) ? t :"");
},
useData:!0
}), this.HandlebarsTemplates["communities/search/sidebar_filter"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/segments/layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='segments-list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/segments/layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/topics/layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='topics-list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/topics/layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/courses/course_content_layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div class='coursework-progress-region'></div>\n<div class='coursework-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/courses/course_content_layout"];
}.call(this), function() {
return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["communities/recordings/layout"] = Handlebars.template({
compiler:[ 7, ">= 4.0.0" ],
main:function(e, a, l, n, s) {
return "<div id='recordings-list-region'></div>";
},
useData:!0
}), this.HandlebarsTemplates["communities/recordings/layout"];
}.call(this);