define('ghost/templates/-floating-header', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Published");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Written");
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "author.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program7(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "author.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\r\n            <span class=\"hidden\">Edit Post</span>\r\n        ");
  }

  data.buffer.push("<header class=\"floatingheader\">\r\n    <button class=\"button-back\" href=\"#\">Back</button>\r\n    \r\n    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("featured:featured:unfeatured")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" href=\"#\" title=\"Feature this post\">\r\n        <span class=\"hidden\">Star</span>\r\n    </a>\r\n    <small>\r\n        \r\n        <span class=\"status\">");
  stack1 = helpers['if'].call(depth0, "published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n        <span class=\"normal\">by</span>\r\n        <span class=\"author\">");
  stack1 = helpers['if'].call(depth0, "author.name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n    </small>\r\n    <section class=\"post-controls\">\r\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("post-edit"),
    'title': ("Edit Post")
  },hashTypes:{'class': "STRING",'title': "STRING"},hashContexts:{'class': depth0,'title': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "editor", "", options) : helperMissing.call(depth0, "link-to", "editor", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        <a class=\"post-settings\" title=\"Post Settings\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editSettings", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">Post Settings</span></a>\r\n        <!-- @TODO use Ghost Popover (#2565) --->\r\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "post-settings-menu-view", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\r\n    </section>\r\n</header>\r\n");
  return buffer;
  
}); });

define('ghost/templates/-navbar', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <ul class=\"overlay\">\r\n                        <li class=\"usermenu-profile\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.user", options) : helperMissing.call(depth0, "link-to", "settings.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n                        <li class=\"divider\"></li>\r\n                        <li class=\"usermenu-help\"><a href=\"http://ghost.org/forum/\">Help / Support</a></li>\r\n                        <li class=\"divider\"></li>\r\n                        <li class=\"usermenu-signout\"><a href=\"#\">Sign Out</a></li>\r\n                    </ul>\r\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Your Profile");
  }

  data.buffer.push("<header id=\"global-header\" class=\"navbar\">\r\n    <a class=\"ghost-logo\" href=\"/\" data-off-canvas=\"left\" title=\"/\">\r\n        <span class=\"hidden\">Ghost</span>\r\n    </a>\r\n    <nav id=\"global-nav\" role=\"navigation\">\r\n        <ul id=\"main-menu\" >\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers['activating-list-item'] || (depth0 && depth0['activating-list-item']),options={hash:{
    'route': ("posts"),
    'title': ("Content"),
    'classNames': ("content")
  },hashTypes:{'route': "STRING",'title': "STRING",'classNames': "STRING"},hashContexts:{'route': depth0,'title': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "activating-list-item", options))));
  data.buffer.push("\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers['activating-list-item'] || (depth0 && depth0['activating-list-item']),options={hash:{
    'route': ("new"),
    'title': ("New post"),
    'classNames': ("editor")
  },hashTypes:{'route': "STRING",'title': "STRING",'classNames': "STRING"},hashContexts:{'route': depth0,'title': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "activating-list-item", options))));
  data.buffer.push("\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers['activating-list-item'] || (depth0 && depth0['activating-list-item']),options={hash:{
    'route': ("settings"),
    'title': ("Settings"),
    'classNames': ("settings")
  },hashTypes:{'route': "STRING",'title': "STRING",'classNames': "STRING"},hashContexts:{'route': depth0,'title': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "activating-list-item", options))));
  data.buffer.push("\r\n\r\n            <li id=\"usermenu\" class=\"usermenu subnav\">\r\n                <a href=\"javascript:void(0);\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMenu", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"dropdown\">\r\n                    <img class=\"avatar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.image")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"Avatar\" />\r\n                    <span class=\"name\">");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n                </a>\r\n                \r\n                ");
  stack1 = (helper = helpers['ghost-popover'] || (depth0 && depth0['ghost-popover']),options={hash:{
    'open': ("showMenu")
  },hashTypes:{'open': "ID"},hashContexts:{'open': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ghost-popover", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</header>\r\n");
  return buffer;
  
}); });

define('ghost/templates/-publish-bar', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<footer id=\"publish-bar\">\r\n    <nav>\r\n        <section id=\"entry-tags\" href=\"#\" class=\"left\">\r\n            <label class=\"tag-label\" for=\"tags\" title=\"Tags\"><span class=\"hidden\">Tags</span></label>\r\n            <div class=\"tags\"></div>\r\n            <input type=\"hidden\" class=\"tags-holder\" id=\"tags-holder\">\r\n            <input class=\"tag-input\" id=\"tags\" type=\"text\" data-input-behaviour=\"tag\" />\r\n            <ul class=\"suggestions overlay\"></ul>\r\n        </section>\r\n        <div class=\"right\">\r\n\r\n            <section id=\"entry-controls\">\r\n                <a class=\"post-settings\" title=\"Post Settings\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editSettings", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">Post Settings</span></a>\r\n                <!-- @TODO Use Ghost Popover (#2565) and style arrow down -->\r\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "post-settings-menu-view", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\r\n            </section>\r\n\r\n            <section id=\"entry-actions\" class=\"js-publish-splitbutton splitbutton-save\">\r\n                <button type=\"button\" class=\"js-publish-button button-save\">Save Draft</button>\r\n                <a class=\"options up\" data-toggle=\"ul\" href=\"#\" title=\"Post Settings\"><span class=\"hidden\">Post Settings</span></a>\r\n                \r\n                <ul class=\"editor-options overlay\" style=\"display:none\">\r\n                    <li data-set-status=\"published\"><a href=\"#\"></a></li>\r\n                    <li data-set-status=\"draft\"><a href=\"#\"></a></li>\r\n                </ul>\r\n            </section>\r\n        </div>\r\n    </nav>\r\n</footer>\r\n");
  return buffer;
  
}); });

define('ghost/templates/application', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "partial", "navbar", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isSignedIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n<main role=\"main\" id=\"main\">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "ghost-notifications", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    \r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</main>\r\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  return buffer;
  
}); });

define('ghost/templates/components/-markdown', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"rendered-markdown\">\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "markdown", options) : helperMissing.call(depth0, "format-markdown", "markdown", options))));
  data.buffer.push("\r\n</div>\r\n");
  return buffer;
  
}); });

define('ghost/templates/components/activating-list-item', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'alternateActive': ("active")
  },hashTypes:{'alternateActive': "ID"},hashContexts:{'alternateActive': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
}); });

define('ghost/templates/components/file-upload', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<input type=\"file\" class=\"button-add\" />\r\n<button type=\"submit\" class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("uploadButtonDisabled")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "uploadButtonText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\r\n");
  return buffer;
  
}); });

define('ghost/templates/components/ghost-notification', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<section ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":js-notification message.typeClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "message.message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    <a class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeNotification", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">Close</span></a>\r\n</section>");
  return buffer;
  
}); });

define('ghost/templates/components/ghost-notifications', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['ghost-notification'] || (depth0 && depth0['ghost-notification']),options={hash:{
    'message': ("")
  },hashTypes:{'message': "ID"},hashContexts:{'message': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ghost-notification", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
}); });

define('ghost/templates/components/modal-dialog', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<header class=\"modal-header\"><h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1></header>");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<a class=\"close\" href=\"\" title=\"Close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">Close</span></a>");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <footer class=\"modal-footer\">\r\n                <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("acceptButtonClass :js-button-accept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", "accept", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "confirm.accept.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </button>\r\n                <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("rejectButtonClass :js-button-reject")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", "reject", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "confirm.reject.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </button>\r\n            </footer>\r\n            ");
  return buffer;
  }

  data.buffer.push("<div id=\"modal-container\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, {hash:{
    'bubbles': (false),
    'preventDefault': (false)
  },hashTypes:{'bubbles': "BOOLEAN",'preventDefault': "BOOLEAN"},hashContexts:{'bubbles': depth0,'preventDefault': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    <article ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("klass :js-modal")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n        <section class=\"modal-content\">\r\n            ");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "showClose", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <section class=\"modal-body\">\r\n                ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </section>\r\n            ");
  stack1 = helpers['if'].call(depth0, "confirm", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </section>\r\n    </article>\r\n</div>\r\n<div class=\"modal-background fade\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></div>\r\n");
  return buffer;
  
}); });

define('ghost/templates/debug', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                <fieldset>\r\n                    <div class=\"form-group\">\r\n                        <label>Import</label>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['file-upload'] || (depth0 && depth0['file-upload']),options={hash:{
    'onUpload': ("importData"),
    'uploadButtonText': ("uploadButtonText")
  },hashTypes:{'onUpload': "STRING",'uploadButtonText': "ID"},hashContexts:{'onUpload': depth0,'uploadButtonText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "file-upload", options))));
  data.buffer.push("\r\n                        <p>Import from another Ghost installation. If you import a user, this will replace the current user & log you out.</p>\r\n                    </div>\r\n                </fieldset>\r\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"wrapper\">\r\n    <aside class=\"settings-sidebar\" role=\"complementary\">\r\n        <header>\r\n            <h1 class=\"title\">Ugly Debug Tools</h1>\r\n        </header>\r\n        <nav class=\"settings-menu\">\r\n            <ul>\r\n                <li class=\"general\"><a href=\"javascript:void(0);\">General</a></li>\r\n            </ul>\r\n        </nav>\r\n    </aside>\r\n\r\n    <section class=\"settings-content active\">\r\n        <header>\r\n            <h2 class=\"title\">General</h2>\r\n        </header>\r\n        <section class=\"content\">\r\n            <form id=\"settings-export\">\r\n                <fieldset>\r\n                    <div class=\"form-group\">\r\n                        <label>Export</label>\r\n                        <a class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("model.exportPath")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Export</a>\r\n                        <p>Export the blog settings and data.</p>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n            ");
  stack1 = (helper = helpers['gh-form'] || (depth0 && depth0['gh-form']),options={hash:{
    'id': ("settings-import"),
    'enctype': ("multipart/form-data")
  },hashTypes:{'id': "STRING",'enctype': "STRING"},hashContexts:{'id': depth0,'enctype': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gh-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <form id=\"settings-resetdb\">\r\n                <fieldset>\r\n                    <div class=\"form-group\">\r\n                        <label>Delete all Content</label>\r\n                        <a href=\"javascript:void(0);\" class=\"button-delete js-delete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "deleteAll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Delete</a>\r\n                        <p>Delete all posts and tags from the database.</p>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n            <form id=\"settings-testmail\">\r\n                <fieldset>\r\n                    <div class=\"form-group\">\r\n                        <label>Send a test email</label>\r\n                        <button type=\"submit\" id=\"sendtestmail\" class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendTestEmail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Send</button>\r\n                        <p>Sends a test email to your address.</p>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n        </section>\r\n    </section>\r\n</div>\r\n");
  return buffer;
  
}); });

define('ghost/templates/editor', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"entry-container\">\r\n    <header>\r\n        <section class=\"box entry-title\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'id': ("entry-title"),
    'placeholder': ("Your Post Title"),
    'value': ("title"),
    'tabindex': ("1")
  },hashTypes:{'type': "STRING",'id': "STRING",'placeholder': "STRING",'value': "ID",'tabindex': "STRING"},hashContexts:{'type': depth0,'id': depth0,'placeholder': depth0,'value': depth0,'tabindex': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n        </section>\r\n    </header>\r\n\r\n    <section class=\"entry-markdown active\">\r\n        <header class=\"floatingheader\">\r\n            <small>Markdown</small>\r\n            <a class=\"markdown-help\" href=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "markdown", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">What is Markdown?</span></a>\r\n        </header>\r\n        <section id=\"entry-markdown-content\" class=\"entry-markdown-content\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers['-codemirror'] || (depth0 && depth0['-codemirror']),options={hash:{
    'value': ("markdown"),
    'scrollPosition': ("view.scrollPosition")
  },hashTypes:{'value': "ID",'scrollPosition': "ID"},hashContexts:{'value': depth0,'scrollPosition': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "-codemirror", options))));
  data.buffer.push("\r\n        </section>\r\n    </section>\r\n\r\n    <section class=\"entry-preview\">\r\n        <header class=\"floatingheader\">\r\n            <small>Preview <span class=\"entry-word-count js-entry-word-count\">");
  data.buffer.push(escapeExpression((helper = helpers['count-words'] || (depth0 && depth0['count-words']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "markdown", options) : helperMissing.call(depth0, "count-words", "markdown", options))));
  data.buffer.push(" words</span></small>\r\n        </header>\r\n        <section class=\"entry-preview-content\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers['-markdown'] || (depth0 && depth0['-markdown']),options={hash:{
    'markdown': ("markdown"),
    'scrollPosition': ("view.scrollPosition")
  },hashTypes:{'markdown': "ID",'scrollPosition': "ID"},hashContexts:{'markdown': depth0,'scrollPosition': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "-markdown", options))));
  data.buffer.push("\r\n        </section>\r\n    </section>\r\n</section>\r\n\r\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "publish-bar", options) : helperMissing.call(depth0, "partial", "publish-bar", options))));
  return buffer;
  
}); });

define('ghost/templates/error', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<h1>Sorry, Something went wrong</h1>\r\n");
  stack1 = helpers._triageMustache.call(depth0, "message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<pre>\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "stack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</pre>\r\n");
  return buffer;
  
}); });

define('ghost/templates/forgotten', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<section class=\"forgotten-box js-forgotten-box fade-in\">\r\n    <form id=\"forgotten\" class=\"forgotten-form\" method=\"post\" novalidate=\"novalidate\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n        <div class=\"email-wrap\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email"),
    'class': ("email"),
    'type': ("email"),
    'placeholder': ("Email Address"),
    'name': ("email"),
    'autofocus': ("autofocus"),
    'autocapitalize': ("off"),
    'autocorrect': ("off")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING",'autofocus': "STRING",'autocapitalize': "STRING",'autocorrect': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0,'autofocus': depth0,'autocapitalize': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n        </div>\r\n        <button class=\"button-save\" type=\"submit\">Send new password</button>\r\n    </form>\r\n</section>\r\n");
  return buffer;
  
}); });

define('ghost/templates/loading', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Loading...</h1>\r\n");
  
}); });

define('ghost/templates/modals/delete-all', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n\r\n    <p>This is permanent! No backups, no restores, no magic undo button. <br /> We warned you, ok?</p>\r\n\r\n");
  }

  stack1 = (helper = helpers['modal-dialog'] || (depth0 && depth0['modal-dialog']),options={hash:{
    'action': ("closeModal"),
    'type': ("action"),
    'style': ("wide,centered"),
    'animation': ("fade"),
    'title': ("Would you really like to delete all content from your blog?"),
    'confirm': ("confirm")
  },hashTypes:{'action': "STRING",'type': "STRING",'style': "STRING",'animation': "STRING",'title': "STRING",'confirm': "ID"},hashContexts:{'action': depth0,'type': depth0,'style': depth0,'animation': depth0,'title': depth0,'confirm': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
}); });

define('ghost/templates/modals/delete-post', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n\r\n    <p>This is permanent! No backups, no restores, no magic undo button. <br /> We warned you, ok?</p>\r\n\r\n");
  }

  stack1 = (helper = helpers['modal-dialog'] || (depth0 && depth0['modal-dialog']),options={hash:{
    'action': ("closeModal"),
    'showClose': (true),
    'type': ("action"),
    'style': ("wide,centered"),
    'animation': ("fade"),
    'title': ("Are you sure you want to delete this post?"),
    'confirm': ("confirm")
  },hashTypes:{'action': "STRING",'showClose': "BOOLEAN",'type': "STRING",'style': "STRING",'animation': "STRING",'title': "STRING",'confirm': "ID"},hashContexts:{'action': depth0,'showClose': depth0,'type': depth0,'style': depth0,'animation': depth0,'title': depth0,'confirm': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
}); });

define('ghost/templates/modals/markdown', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n    <section class=\"markdown-help-container\">\r\n        <table class=\"modal-markdown-help-table\">\r\n            <thead>\r\n            <tr>\r\n                <th>Result</th>\r\n                <th>Markdown</th>\r\n                <th>Shortcut</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td><strong>Bold</strong></td>\r\n                <td>**text**</td>\r\n                <td>Ctrl / Cmd + B</td>\r\n            </tr>\r\n            <tr>\r\n                <td><em>Emphasize</em></td>\r\n                <td>*text*</td>\r\n                <td>Ctrl / Cmd + I</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Strike-through</td>\r\n                <td>~~text~~</td>\r\n                <td>Ctrl + Alt + U</td>\r\n            </tr>\r\n            <tr>\r\n                <td><a href=\"#\">Link</a></td>\r\n                <td>[title](http://)</td>\r\n                <td>Ctrl + Shift + L</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Image</td>\r\n                <td>![alt](http://)</td>\r\n                <td>Ctrl + Shift + I</td>\r\n            </tr>\r\n            <tr>\r\n                <td>List</td>\r\n                <td>* item</td>\r\n                <td>Ctrl + L</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Blockquote</td>\r\n                <td>> quote</td>\r\n                <td>Ctrl + Q</td>\r\n            </tr>\r\n            <tr>\r\n                <td>H1</td>\r\n                <td># Heading</td>\r\n                <td>Ctrl + Alt + 1</td>\r\n            </tr>\r\n            <tr>\r\n                <td>H2</td>\r\n                <td>## Heading</td>\r\n                <td>Ctrl + Alt + 2</td>\r\n            </tr>\r\n            <tr>\r\n                <td>H3</td>\r\n                <td>### Heading</td>\r\n                <td>Ctrl + Alt + 3</td>\r\n            </tr>\r\n            <tr>\r\n                <td><code>Inline Code</code></td>\r\n                <td>`code`</td>\r\n                <td>Cmd + K / Ctrl + Shift + K</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n        For further Markdown syntax reference: <a href=\"http://daringfireball.net/projects/markdown/syntax\" target=\"_blank\">Markdown Documentation</a>\r\n    </section>\r\n");
  }

  stack1 = (helper = helpers['modal-dialog'] || (depth0 && depth0['modal-dialog']),options={hash:{
    'action': ("closeModal"),
    'showClose': (true),
    'style': ("wide"),
    'animation': ("fade"),
    'title': ("Markdown Help")
  },hashTypes:{'action': "STRING",'showClose': "BOOLEAN",'style': "STRING",'animation': "STRING",'title': "STRING"},hashContexts:{'action': depth0,'showClose': depth0,'style': depth0,'animation': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
}); });

define('ghost/templates/modals/upload', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n  <section class=\"js-drop-zone\">\r\n      <img class=\"js-upload-target\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("src")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"logo\">\r\n      <input data-url=\"upload\" class=\"js-fileupload main\" type=\"file\" name=\"uploadimage\" ");
  stack1 = helpers['if'].call(depth0, "options.acceptEncoding", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(">\r\n  </section>\r\n\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("accept=\"");
  stack1 = helpers._triageMustache.call(depth0, "options.acceptEncoding", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"");
  return buffer;
  }

  stack1 = (helper = helpers['upload-modal'] || (depth0 && depth0['upload-modal']),options={hash:{
    'action': ("closeModal"),
    'close': (true),
    'type': ("action"),
    'style': ("wide"),
    'animation': ("fade")
  },hashTypes:{'action': "STRING",'close': "BOOLEAN",'type': "STRING",'style': "STRING",'animation': "STRING"},hashContexts:{'action': depth0,'close': depth0,'type': depth0,'style': depth0,'animation': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "upload-modal", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
}); });

define('ghost/templates/new', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("TODO");
  
}); });

define('ghost/templates/post-settings-menu', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<form>\r\n    <table class=\"plain\">\r\n        <tbody>\r\n            <tr class=\"post-setting\">\r\n                <td class=\"post-setting-label\">\r\n                    <label for=\"url\">URL</label>\r\n                </td>\r\n                <td class=\"post-setting-field\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['blur-text-field'] || (depth0 && depth0['blur-text-field']),options={hash:{
    'class': ("post-setting-slug"),
    'id': ("url"),
    'value': ("newSlug"),
    'action': ("updateSlug"),
    'placeholder': ("slugPlaceholder"),
    'selectOnClick': ("true")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID",'action': "STRING",'placeholder': "ID",'selectOnClick': "STRING"},hashContexts:{'class': depth0,'id': depth0,'value': depth0,'action': depth0,'placeholder': depth0,'selectOnClick': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "blur-text-field", options))));
  data.buffer.push("\r\n                </td>\r\n            </tr>\r\n            <tr class=\"post-setting\">\r\n                <td class=\"post-setting-label\">\r\n                    <label for=\"pub-date\">Pub Date</label>\r\n                </td>\r\n                <td class=\"post-setting-field\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['blur-text-field'] || (depth0 && depth0['blur-text-field']),options={hash:{
    'class': ("post-setting-date"),
    'value': ("view.publishedAt"),
    'action': ("updatePublishedAt"),
    'placeholder': ("view.datePlaceholder")
  },hashTypes:{'class': "STRING",'value': "ID",'action': "STRING",'placeholder': "ID"},hashContexts:{'class': depth0,'value': depth0,'action': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "blur-text-field", options))));
  data.buffer.push("\r\n                </td>\r\n            </tr>\r\n            <tr class=\"post-setting\">\r\n                <td class=\"post-setting-label\">\r\n                    <label class=\"label\" for=\"static-page\">Static Page</label>\r\n                </td>\r\n                <td class=\"post-setting-item\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'name': ("static-page"),
    'id': ("static-page"),
    'class': ("post-setting-static-page"),
    'checked': ("isStaticPage")
  },hashTypes:{'type': "STRING",'name': "STRING",'id': "STRING",'class': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'name': depth0,'id': depth0,'class': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <label class=\"checkbox\" for=\"static-page\"></label>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</form>\r\n<a class=\"delete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "delete-post", "post", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data})));
  data.buffer.push(">Delete This Post</a>\r\n");
  return buffer;
  
}); });

define('ghost/templates/posts', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<span class=\"hidden\">New Post</span>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    \r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("permalink"),
    'title': ("Edit this post")
  },hashTypes:{'class': "STRING",'title': "STRING"},hashContexts:{'class': depth0,'title': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "posts.post", "", options) : helperMissing.call(depth0, "link-to", "posts.post", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <h3 class=\"entry-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\r\n                        <section class=\"entry-meta\">\r\n                            <span class=\"status\">\r\n                                ");
  stack1 = helpers['if'].call(depth0, "isPublished", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </span>\r\n                        </section>\r\n                    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                    ");
  stack1 = helpers['if'].call(depth0, "page", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\r\n                                            <span class=\"page\">Page</span>\r\n                                    ");
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                                        <time datetime=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "published_at", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"date published\">\r\n                                            Published ");
  data.buffer.push(escapeExpression((helper = helpers['format-timeago'] || (depth0 && depth0['format-timeago']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "published_at", options) : helperMissing.call(depth0, "format-timeago", "published_at", options))));
  data.buffer.push("\r\n                                        </time>\r\n                                    ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\r\n                                    <span class=\"draft\">Draft</span>\r\n                                ");
  }

  data.buffer.push("<section class=\"content-view-container\">\r\n    <section class=\"content-list js-content-list\">\r\n        <header class=\"floatingheader\">\r\n            <section class=\"content-filter\">\r\n                <small>All Posts</small>\r\n            </section>\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("button button-add"),
    'title': ("New Post")
  },hashTypes:{'class': "STRING",'title': "STRING"},hashContexts:{'class': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "new", options) : helperMissing.call(depth0, "link-to", "new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </header>\r\n        <section class=\"content-list-content\">\r\n            <ol class=\"posts-list\">\r\n                ");
  stack1 = helpers.each.call(depth0, {hash:{
    'itemController': ("posts/post"),
    'itemView': ("post-item-view"),
    'itemTagName': ("li")
  },hashTypes:{'itemController': "STRING",'itemView': "STRING",'itemTagName': "STRING"},hashContexts:{'itemController': depth0,'itemView': depth0,'itemTagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </ol>\r\n        </section>\r\n    </section>\r\n    <section class=\"content-preview js-content-preview\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </section>\r\n</section>\r\n");
  return buffer;
  
}); });

define('ghost/templates/posts/post', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "floating-header", options) : helperMissing.call(depth0, "partial", "floating-header", options))));
  data.buffer.push("\r\n\r\n  <section class=\"content-preview-content\">\r\n      <div class=\"wrapper\">\r\n          <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "markdown", options) : helperMissing.call(depth0, "format-markdown", "markdown", options))));
  data.buffer.push("\r\n      </div>\r\n  </section>\r\n\r\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n\r\n    <div class=\"no-posts-box\">\r\n        <div class=\"no-posts\">\r\n            <h3>You Haven't Written Any Posts Yet!</h3>\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "new", options) : helperMissing.call(depth0, "link-to", "new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n\r\n");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("<button class=\"button-add large\" title=\"New Post\">Write a new Post</button>");
  }

  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
}); });

define('ghost/templates/reset', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<section class=\"reset-box js-reset-box fade-in\">\r\n    <form id=\"reset\" class=\"reset-form\" method=\"post\" novalidate=\"novalidate\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n        <div class=\"password-wrap\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("passwords.newPassword"),
    'class': ("password"),
    'type': ("password"),
    'placeholder': ("Password"),
    'name': ("newpassword"),
    'autofocus': ("autofocus")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING",'autofocus': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0,'autofocus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n        </div>\r\n        <div class=\"password-wrap\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("passwords.ne2Password"),
    'class': ("password"),
    'type': ("password"),
    'placeholder': ("Confirm Password"),
    'name': ("ne2password")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n        </div>\r\n        <button class=\"button-save\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("submitButtonDisabled")
  },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Reset Password</button>\r\n    </form>\r\n</section>\r\n");
  return buffer;
  
}); });

define('ghost/templates/settings', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("General");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("User");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Apps");
  }

  data.buffer.push("<div class=\"wrapper\">\r\n    <aside class=\"settings-sidebar\" role=\"complementary\">\r\n        <header>\r\n            <h1 class=\"title\">Settings</h1>\r\n        </header>\r\n        <nav class=\"settings-menu\">\r\n            <ul>\r\n                <li class=\"general\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.general", options) : helperMissing.call(depth0, "link-to", "settings.general", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n                <li class=\"users\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.user", options) : helperMissing.call(depth0, "link-to", "settings.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n                <li class=\"apps\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.apps", options) : helperMissing.call(depth0, "link-to", "settings.apps", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n            </ul>\r\n        </nav>\r\n    </aside>\r\n\r\n    <section class=\"settings-content active\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </section>\r\n</div>\r\n");
  return buffer;
  
}); });

define('ghost/templates/settings/apps', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <li>\r\n            ");
  stack1 = helpers['if'].call(depth0, "package", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <button data-app=\"");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\" class=\"");
  stack1 = helpers['if'].call(depth0, "active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\r\n        </li>\r\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "package.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "package.version", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - package.json missing :(");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("button-delete js-button-deactivate js-button-active\">Deactivate");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("button-add js-button-activate\">Activate");
  }

  data.buffer.push("<header class=\"fade-in\">\r\n    <button class=\"button-back\">Back</button>\r\n    <h2 class=\"title\">Apps</h2>\r\n</header>\r\n\r\n<section class=\"content fade-in\">\r\n    <ul class=\"js-apps\">\r\n        ");
  stack1 = helpers.each.call(depth0, "availableApps", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </ul>\r\n</section>");
  return buffer;
  
}); });

define('ghost/templates/settings/general', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                    <a class=\"js-modal-logo\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("><img id=\"blog-logo\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("logo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"logo\"></a>\r\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                    <a class=\"button-add js-modal-logo\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Upload Image</a>\r\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                    <a class=\"js-modal-cover\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("><img id=\"blog-cover\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("logo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"cover photo\"></a>\r\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                    <a class=\"button-add js-modal-cover\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Upload Image</a>\r\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <option value=\"");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\" ");
  stack1 = helpers['if'].call(depth0, "active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(">");
  stack1 = helpers['if'].call(depth0, "package", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\r\n                    ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("selected");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "package.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "package.version", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program14(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<header class=\"fade-in\">\r\n    <button class=\"button-back\">Back</button>\r\n    <h2 class=\"title\">General</h2>\r\n    <section class=\"page-actions\">\r\n        <button class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\r\n    </section>\r\n</header>\r\n\r\n<section class=\"content fade-in\">\r\n    <form id=\"settings-general\" novalidate=\"novalidate\">\r\n        <fieldset>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"blog-title\">Blog Title</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("blog-title"),
    'name': ("general[title]"),
    'type': ("text"),
    'value': ("title")
  },hashTypes:{'id': "STRING",'name': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'id': depth0,'name': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                <p>The name of your blog</p>\r\n            </div>\r\n\r\n            <div class=\"form-group description-container\">\r\n                <label for=\"blog-description\">Blog Description</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("blog-description"),
    'value': ("description")
  },hashTypes:{'id': "STRING",'value': "ID"},hashContexts:{'id': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n                <p>\r\n                    Describe what your blog is about\r\n                    <span class=\"word-count\">");
  data.buffer.push(escapeExpression((helper = helpers['count-words'] || (depth0 && depth0['count-words']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "description", options) : helperMissing.call(depth0, "count-words", "description", options))));
  data.buffer.push("</span>\r\n                </p>\r\n\r\n            </div>\r\n        </fieldset>\r\n            <div class=\"form-group\">\r\n                <label for=\"blog-logo\">Blog Logo</label>\r\n                ");
  stack1 = helpers['if'].call(depth0, "logo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p>Display a sexy logo for your publication</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"blog-cover\">Blog Cover</label>\r\n                ");
  stack1 = helpers['if'].call(depth0, "cover", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p>Display a cover image on your site</p>\r\n            </div>\r\n        <fieldset>\r\n            <div class=\"form-group\">\r\n                <label for=\"email-address\">Email Address</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("email-address"),
    'name': ("general[email-address]"),
    'type': ("email"),
    'value': ("email"),
    'autocapitalize': ("off"),
    'autocorrect': ("off")
  },hashTypes:{'id': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'autocapitalize': "STRING",'autocorrect': "STRING"},hashContexts:{'id': depth0,'name': depth0,'type': depth0,'value': depth0,'autocapitalize': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                <p>Address to use for admin notifications</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"postsPerPage\">Posts per page</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("postsPerPage"),
    'name': ("general[postsPerPage]"),
    'type': ("number"),
    'value': ("postsPerPage")
  },hashTypes:{'id': "STRING",'name': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'id': depth0,'name': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                <p>How many posts should be displayed on each page</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"permalinks\">Dated Permalinks</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("permalinks"),
    'name': ("general[permalinks]"),
    'type': ("checkbox"),
    'checked': ("isDatedPermalinks")
  },hashTypes:{'id': "STRING",'name': "STRING",'type': "STRING",'checked': "ID"},hashContexts:{'id': depth0,'name': depth0,'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                <label class=\"checkbox\" for=\"permalinks\"></label>\r\n                <p>Include the date in your post URLs</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"activeTheme\">Theme</label>\r\n                <select id=\"activeTheme\" name=\"general[activeTheme]\">\r\n                    ");
  stack1 = helpers.each.call(depth0, "availableThemes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </select>\r\n                <p>Select a theme for your blog</p>\r\n            </div>\r\n\r\n        </fieldset>\r\n    </form>\r\n</section>\r\n");
  return buffer;
  
}); });

define('ghost/templates/settings/user', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<header class=\"fade-in\">\r\n    <button class=\"button-back\">Back</button>\r\n    <h2 class=\"title\">Your Profile</h2>\r\n    <section class=\"page-actions\">\r\n        <button class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\r\n    </section>\r\n</header>\r\n\r\n<section class=\"content no-padding fade-in\">\r\n\r\n    <header class=\"user-profile-header\">\r\n        <img id=\"user-cover\" class=\"cover-image\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("cover"),
    'title': ("coverTitle")
  },hashTypes:{'src': "ID",'title': "ID"},hashContexts:{'src': depth0,'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\r\n\r\n        <a class=\"edit-cover-image js-modal-cover button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Change Cover</a>\r\n    </header>\r\n\r\n    <form class=\"user-profile\" novalidate=\"novalidate\">\r\n\r\n        <fieldset class=\"user-details-top\">\r\n\r\n            <figure class=\"user-image\">\r\n                <div id=\"user-image\" class=\"img\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("image")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" href=\"#\"><span class=\"hidden\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("'s Picture</span></div>\r\n                <a href=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"edit-user-image js-modal-image\">Edit Picture</a>\r\n            </figure>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-name\" class=\"hidden\">Full Name</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("user.name"),
    'id': ("user-name"),
    'placeholder': ("Full Name"),
    'autocorrect': ("off")
  },hashTypes:{'value': "ID",'id': "STRING",'placeholder': "STRING",'autocorrect': "STRING"},hashContexts:{'value': depth0,'id': depth0,'placeholder': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                <p>Use your real name so people can recognise you</p>\r\n            </div>\r\n\r\n        </fieldset>\r\n\r\n        <fieldset class=\"user-details-bottom\">\r\n\r\n            <div class=\"form-group\">\r\n                <label for\"user-email\">Email</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'value': ("user.email"),
    'id': ("user-email"),
    'placeholder': ("Email Address"),
    'autocapitalize': ("off"),
    'autocorrect': ("off")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING",'autocapitalize': "STRING",'autocorrect': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0,'autocapitalize': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                <p>Used for notifications</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-location\">Location</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("user.location"),
    'id': ("user-location")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                <p>Where in the world do you live?</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-website\">Website</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("url"),
    'value': ("user.website"),
    'id': ("user-website"),
    'placeholder': ("http://www.ghost.org/"),
    'autocapitalize': ("off"),
    'autocorrect': ("off")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING",'autocapitalize': "STRING",'autocorrect': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0,'autocapitalize': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                <p>Have a website or blog other than this one? Link it!</p>\r\n            </div>\r\n\r\n            <div class=\"form-group bio-container\">\r\n                <label for=\"user-bio\">Bio</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("user-bio"),
    'value': ("user.bio")
  },hashTypes:{'id': "STRING",'value': "ID"},hashContexts:{'id': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n                <p>\r\n                    Write about you, in 200 characters or less.\r\n                    <span class=\"word-count\">");
  data.buffer.push(escapeExpression((helper = helpers['count-words'] || (depth0 && depth0['count-words']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user.bio", options) : helperMissing.call(depth0, "count-words", "user.bio", options))));
  data.buffer.push("</span>\r\n                </p>\r\n            </div>\r\n\r\n            <hr />\r\n\r\n        </fieldset>\r\n\r\n        <fieldset>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-password-old\">Old Password</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("password"),
    'type': ("password"),
    'id': ("user-password-old")
  },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-password-new\">New Password</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("newPassword"),
    'type': ("password"),
    'id': ("user-password-new")
  },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-new-password-verification\">Verify Password</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("ne2Password"),
    'type': ("password"),
    'id': ("user-new-password-verification")
  },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"button\" class=\"button-delete button-change-password\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "password", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Change Password</button>\r\n            </div>\r\n\r\n        </fieldset>\r\n\r\n    </form>\r\n</section>\r\n");
  return buffer;
  
}); });

define('ghost/templates/signin', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Forgotten password?");
  }

  data.buffer.push("<section class=\"login-box js-login-box fade-in\">\r\n    <form id=\"login\" class=\"login-form\" method=\"post\" novalidate=\"novalidate\">\r\n        <div class=\"email-wrap\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("email"),
    'type': ("email"),
    'placeholder': ("Email Address"),
    'name': ("email"),
    'autofocus': ("autofocus"),
    'autocapitalize': ("off"),
    'autocorrect': ("off"),
    'value': ("email")
  },hashTypes:{'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING",'autofocus': "STRING",'autocapitalize': "STRING",'autocorrect': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0,'autofocus': depth0,'autocapitalize': depth0,'autocorrect': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n        </div>\r\n        <div class=\"password-wrap\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("password"),
    'type': ("password"),
    'placeholder': ("Password"),
    'name': ("password"),
    'value': ("password")
  },hashTypes:{'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n        </div>\r\n        <button class=\"button-save\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Log in</button>\r\n        <section class=\"meta\">\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("forgotten-password")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "forgotten", options) : helperMissing.call(depth0, "link-to", "forgotten", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </section>\r\n    </form>\r\n</section>\r\n");
  return buffer;
  
}); });

define('ghost/templates/signup', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"signup-box js-signup-box fade-in\">\r\n    <form id=\"signup\" class=\"signup-form\" method=\"post\" novalidate=\"novalidate\">\r\n        <div class=\"name-wrap\">\r\n            <input class=\"name\" type=\"text\" placeholder=\"Full Name\" name=\"name\" autofocus autocorrect=\"off\" />\r\n        </div>\r\n        <div class=\"email-wrap\">\r\n            <input class=\"email\" type=\"email\" placeholder=\"Email Address\" name=\"email\" autocapitalize=\"off\" autocorrect=\"off\" />\r\n        </div>\r\n        <div class=\"password-wrap\">\r\n            <input class=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\" />\r\n        </div>\r\n        <button class=\"button-save\" type=\"submit\">Sign Up</button>\r\n    </form>\r\n</section>\r\n");
  
}); });