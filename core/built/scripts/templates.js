this["JST"] = this["JST"] || {};

this["JST"]["forgotten"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form id=\"forgotten\" class=\"forgotten-form\" method=\"post\" novalidate=\"novalidate\">\r\n    <div class=\"email-wrap\">\r\n        <input class=\"email\" type=\"email\" placeholder=\"Email Address\" name=\"email\" autocapitalize=\"off\" autocorrect=\"off\">\r\n    </div>\r\n    <button class=\"button-save\" type=\"submit\">Send new password</button>\r\n</form>\r\n";
  });

this["JST"]["list-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return " featured";
  }

function program3(depth0,data) {
  
  
  return " page";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.page), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "\r\n                    <span class=\"page\">Page</span>\r\n            ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n                <time datetime=\"";
  options = {hash:{
    'format': ("YYYY-MM-DD hh:mm")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, (depth0 && depth0.published_at), options) : helperMissing.call(depth0, "date", (depth0 && depth0.published_at), options)))
    + "\" class=\"date published\">\r\n                    Published ";
  options = {hash:{
    'timeago': ("True")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, (depth0 && depth0.published_at), options) : helperMissing.call(depth0, "date", (depth0 && depth0.published_at), options)))
    + "\r\n                </time>\r\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "\r\n            <span class=\"draft\">Draft</span>\r\n        ";
  }

  buffer += "<a class=\"permalink";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.featured), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.page), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\" title=\"Edit this post\">\r\n    <h3 class=\"entry-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\r\n    <section class=\"entry-meta\">\r\n        <span class=\"status\">\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </span>\r\n    </section>\r\n</a>\r\n";
  return buffer;
  });

this["JST"]["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form id=\"login\" class=\"login-form\" method=\"post\" novalidate=\"novalidate\">\r\n    <div class=\"email-wrap\">\r\n        <input class=\"email\" type=\"email\" placeholder=\"Email Address\" name=\"email\" autocapitalize=\"off\" autocorrect=\"off\">\r\n    </div>\r\n    <div class=\"password-wrap\">\r\n        <input class=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\">\r\n    </div>\r\n    <button class=\"button-save\" type=\"submit\">Log in</button>\r\n    <section class=\"meta\">\r\n        <a class=\"forgotten-password\" href=\"";
  if (stack1 = helpers.admin_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.admin_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/forgotten/\">Forgotten password?</a>\r\n    </section>\r\n</form>\r\n";
  return buffer;
  });

this["JST"]["modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program3(depth0,data) {
  
  var stack1, stack2;
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.style), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  }
function program4(depth0,data) {
  
  var buffer = "";
  buffer += "modal-style-"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<header class=\"modal-header\"><h1>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1></header>";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "<a class=\"close\" href=\"#\" title=\"Close\"><span class=\"hidden\">Close</span></a>";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n        <footer class=\"modal-footer\">\r\n            <button class=\"js-button-accept ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.confirm)),stack1 == null || stack1 === false ? stack1 : stack1.accept)),stack1 == null || stack1 === false ? stack1 : stack1.buttonClass), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.confirm)),stack1 == null || stack1 === false ? stack1 : stack1.accept)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n            <button class=\"js-button-reject ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.confirm)),stack1 == null || stack1 === false ? stack1 : stack1.reject)),stack1 == null || stack1 === false ? stack1 : stack1.buttonClass), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.confirm)),stack1 == null || stack1 === false ? stack1 : stack1.reject)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n        </footer>\r\n        ";
  return buffer;
  }
function program11(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.confirm)),stack1 == null || stack1 === false ? stack1 : stack1.accept)),stack1 == null || stack1 === false ? stack1 : stack1.buttonClass)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program13(depth0,data) {
  
  
  return "button-add";
  }

function program15(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.confirm)),stack1 == null || stack1 === false ? stack1 : stack1.reject)),stack1 == null || stack1 === false ? stack1 : stack1.buttonClass)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program17(depth0,data) {
  
  
  return "button-delete";
  }

  buffer += "<article class=\"modal";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.type), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.style), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.animation)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " js-modal\">\r\n    <section class=\"modal-content\">\r\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.close), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        <section class=\"modal-body\">\r\n        </section>\r\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.confirm), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    </section>\r\n</article>";
  return buffer;
  });

this["JST"]["modals/blank"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, stack2, functionType="function";


  stack2 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });

this["JST"]["modals/copyToHTML"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Press Ctrl / Cmd + C to copy the following HTML.\r\n<pre>\r\n<code class=\"modal-copyToHTML-content\"></code>\r\n</pre>";
  });

this["JST"]["modals/markdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"markdown-help-container\">\r\n    <table class=\"modal-markdown-help-table\">\r\n        <thead>\r\n        <tr>\r\n            <th>Result</th>\r\n            <th>Markdown</th>\r\n            <th>Shortcut</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr>\r\n            <td><strong>Bold</strong></td>\r\n            <td>**text**</td>\r\n            <td>Ctrl / Cmd + B</td>\r\n        </tr>\r\n        <tr>\r\n            <td><em>Emphasize</em></td>\r\n            <td>*text*</td>\r\n            <td>Ctrl / Cmd + I</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Strike-through</td>\r\n            <td>~~text~~</td>\r\n            <td>Ctrl + Alt + U</td>\r\n        </tr>\r\n        <tr>\r\n            <td><a href=\"#\">Link</a></td>\r\n            <td>[title](http://)</td>\r\n            <td>Ctrl + Shift + L</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Image</td>\r\n            <td>![alt](http://)</td>\r\n            <td>Ctrl + Shift + I</td>\r\n        </tr>\r\n        <tr>\r\n            <td>List</td>\r\n            <td>* item</td>\r\n            <td>Ctrl + L</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Blockquote</td>\r\n            <td>> quote</td>\r\n            <td>Ctrl + Q</td>\r\n        </tr>\r\n        <tr>\r\n            <td>H1</td>\r\n            <td># Heading</td>\r\n            <td>Ctrl + Alt + 1</td>\r\n        </tr>\r\n        <tr>\r\n            <td>H2</td>\r\n            <td>## Heading</td>\r\n            <td>Ctrl + Alt + 2</td>\r\n        </tr>\r\n        <tr>\r\n            <td>H3</td>\r\n            <td>### Heading</td>\r\n            <td>Ctrl + Alt + 3</td>\r\n        </tr>\r\n        <tr>\r\n            <td><code>Inline Code</code></td>\r\n            <td>`code`</td>\r\n            <td>Cmd + K / Ctrl + Shift + K</td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    For further Markdown syntax reference: <a href=\"http://daringfireball.net/projects/markdown/syntax\" target=\"_blank\">Markdown Documentation</a>\r\n</section>";
  });

this["JST"]["modals/uploadImage"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " style=\"display: none\"";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "accept=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.acceptEncoding)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

  buffer += "<section class=\"js-drop-zone\">\r\n    <img class=\"js-upload-target\" src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  stack2 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.src), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " alt=\"logo\">\r\n    <input data-url=\"upload\" class=\"js-fileupload main\" type=\"file\" name=\"uploadimage\" ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.acceptEncoding), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\r\n</section>\r\n";
  return buffer;
  });

this["JST"]["notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.type); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

  buffer += "<section class=\"notification";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.type), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " notification-";
  if (stack1 = helpers.status) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.status); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " js-notification\">\r\n    ";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.message); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    <a class=\"close\" href=\"#\"><span class=\"hidden\">Close</span></a>\r\n</section>\r\n";
  return buffer;
  });

this["JST"]["preview"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "featured";
  }

function program3(depth0,data) {
  
  
  return "unfeatured";
  }

function program5(depth0,data) {
  
  
  return "Unfeature";
  }

function program7(depth0,data) {
  
  
  return "Feature";
  }

function program9(depth0,data) {
  
  
  return "Published";
  }

function program11(depth0,data) {
  
  
  return "Written";
  }

function program13(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program15(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"no-posts-box\">\r\n        <div class=\"no-posts\">\r\n            <h3>You Haven't Written Any Posts Yet!</h3>\r\n            <form action=\"";
  if (stack1 = helpers.admin_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.admin_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/editor/\"><button class=\"button-add large\" title=\"New Post\">Write a new Post</button></form>\r\n        </div>\r\n    </div>\r\n";
  return buffer;
  }

  buffer += "<header class=\"floatingheader\">\r\n    <button class=\"button-back\" href=\"#\">Back</button>\r\n    <a class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.featured), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\" title=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.featured), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " this post\">\r\n        <span class=\"hidden\">Star</span>\r\n    </a>\r\n    <small>\r\n        <span class=\"status\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n        <span class=\"normal\">by</span>\r\n        <span class=\"author\">";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\r\n    </small>\r\n    <section class=\"post-controls\">\r\n        <a class=\"post-edit\" href=\"#\" title=\"Edit Post\"><span class=\"hidden\">Edit Post</span></a>\r\n        <a class=\"post-settings\" href=\"#\" data-toggle=\".post-settings-menu\" title=\"Post Settings\"><span class=\"hidden\">Post Settings</span></a>\r\n        <div class=\"post-settings-menu menu-drop-right overlay\">\r\n            <form>\r\n                <table class=\"plain\">\r\n                    <tr class=\"post-setting\">\r\n                        <td class=\"post-setting-label\">\r\n                            <label for=\"url\">URL</label>\r\n                        </td>\r\n                        <td class=\"post-setting-field\">\r\n                            <input id=\"url\" class=\"post-setting-slug\" type=\"text\" value=\"\" />\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"post-setting\">\r\n                        <td class=\"post-setting-label\">\r\n                            <label for=\"pub-date\">Pub Date</label>\r\n                        </td>\r\n                        <td class=\"post-setting-field\">\r\n                            <input id=\"pub-date\" class=\"post-setting-date\" type=\"text\" value=\"\"><!--<span class=\"post-setting-calendar\"></span>-->\r\n                        </td>\r\n                    </tr>\r\n                    <tr class=\"post-setting\">\r\n                        <td class=\"post-setting-label\">\r\n                            <span class=\"label\">Static Page</span>\r\n                        </td>\r\n                        <td class=\"post-setting-item\">\r\n                            <input id=\"static-page\" class=\"post-setting-static-page\" type=\"checkbox\" value=\"\">\r\n                            <label class=\"checkbox\" for=\"static-page\"></label>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </form>\r\n            <a class=\"delete\" href=\"#\">Delete This Post</a>\r\n        </div>\r\n    </section>\r\n</header>\r\n<section class=\"content-preview-content\">\r\n    <div class=\"wrapper\"><h1>";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.title); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</h1>";
  if (stack2 = helpers.html) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.html); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\r\n</section>\r\n";
  stack2 = helpers.unless.call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["reset"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form id=\"reset\" class=\"reset-form\" method=\"post\" novalidate=\"novalidate\">\r\n    <div class=\"password-wrap\">\r\n        <input class=\"password\" type=\"password\" placeholder=\"Password\" name=\"newpassword\" />\r\n    </div>\r\n    <div class=\"password-wrap\">\r\n        <input class=\"password\" type=\"password\" placeholder=\"Confirm Password\" name=\"ne2password\" />\r\n    </div>\r\n    <button class=\"button-save\" type=\"submit\">Reset Password</button>\r\n</form>\r\n";
  });

this["JST"]["settings/apps"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <li>\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['package']), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            <button data-app=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\r\n        </li>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0['package'])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0['package'])),stack1 == null || stack1 === false ? stack1 : stack1.version)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " - package.json missing :(";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "button-delete js-button-deactivate js-button-active\">Deactivate";
  }

function program8(depth0,data) {
  
  
  return "button-add js-button-activate\">Activate";
  }

  buffer += "<header>\r\n    <button class=\"button-back\">Back</button>\r\n    <h2 class=\"title\">Apps</h2>\r\n</header>\r\n\r\n<section class=\"content\">\r\n    <ul class=\"js-apps\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.availableApps), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n</section>";
  return buffer;
  });

this["JST"]["settings/general"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <a class=\"js-modal-logo\" href=\"#\"><img id=\"blog-logo\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.logo); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"logo\"></a>\r\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n                    <a class=\"button-add js-modal-logo\" >Upload Image</a>\r\n                ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <a class=\"js-modal-cover\" href=\"#\"><img id=\"blog-cover\" src=\"";
  if (stack1 = helpers.cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.cover); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"cover photo\"></a>\r\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\r\n                    <a class=\"button-add js-modal-cover\">Upload Image</a>\r\n                ";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        <option value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['package']), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\r\n                        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0['package']), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "selected";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0['package'])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0['package'])),stack1 == null || stack1 === false ? stack1 : stack1.version)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program14(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  return escapeExpression(stack1);
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<script>console.log('Hi! The theme named \"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" does not have a package.json file or it\\'s malformed. This will be required in the future. For more info, see http://docs.ghost.org/themes/.');</script>";
  return buffer;
  }

  buffer += "<header>\r\n    <button class=\"button-back\">Back</button>\r\n    <h2 class=\"title\">General</h2>\r\n    <section class=\"page-actions\">\r\n        <button class=\"button-save\">Save</button>\r\n    </section>\r\n</header>\r\n\r\n<section class=\"content\">\r\n    <form id=\"settings-general\" novalidate=\"novalidate\">\r\n        <fieldset>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"blog-title\">Blog Title</label>\r\n                <input id=\"blog-title\" name=\"general[title]\" type=\"text\" value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n                <p>The name of your blog</p>\r\n            </div>\r\n\r\n            <div class=\"form-group description-container\">\r\n                <label for=\"blog-description\">Blog Description</label>\r\n                <textarea id=\"blog-description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\r\n                <p>\r\n                    Describe what your blog is about\r\n                    <span class=\"word-count\">0</span>\r\n                </p>\r\n\r\n            </div>\r\n        </fieldset>\r\n            <div class=\"form-group\">\r\n                <label for=\"blog-logo\">Blog Logo</label>\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.logo), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <p>Display a sexy logo for your publication</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"blog-cover\">Blog Cover</label>\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.cover), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <p>Display a cover image on your site</p>\r\n            </div>\r\n        <fieldset>\r\n            <div class=\"form-group\">\r\n                <label for=\"email-address\">Email Address</label>\r\n                <input id=\"email-address\" name=\"general[email-address]\" type=\"email\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.email); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" autocapitalize=\"off\" autocorrect=\"off\" />\r\n                <p>Address to use for admin notifications</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"postsPerPage\">Posts per page</label>\r\n                <input id=\"postsPerPage\" name=\"general[postsPerPage]\" type=\"number\" value=\"";
  if (stack1 = helpers.postsPerPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.postsPerPage); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n                <p>How many posts should be displayed on each page</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"permalinks\">Dated Permalinks</label>\r\n                <input id=\"permalinks\" name=\"general[permalinks]\" type=\"checkbox\" value='permalink'/>\r\n                <label class=\"checkbox\" for=\"permalinks\"></label>\r\n                <p>Include the date in your post URLs</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"activeTheme\">Theme</label>\r\n                <select id=\"activeTheme\" name=\"general[activeTheme]\">\r\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.availableThemes), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </select>\r\n                <p>Select a theme for your blog</p>\r\n            </div>\r\n\r\n        </fieldset>\r\n    </form>\r\n</section>\r\n";
  return buffer;
  });

this["JST"]["settings/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\r\n    <h1 class=\"title\">Settings</h1>\r\n</header>\r\n<nav class=\"settings-menu\">\r\n    <ul>\r\n        <li class=\"general\"><a href=\"#general\">General</a></li>\r\n        <li class=\"users\"><a href=\"#user\">User</a></li>\r\n        <li class=\"apps\"><a href=\"#apps\">Apps</a></li>\r\n    </ul>\r\n</nav>";
  });

this["JST"]["settings/user-profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.cover) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.cover); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  var stack1, options;
  options = {hash:{},data:data};
  return escapeExpression(((stack1 = helpers.asset || (depth0 && depth0.asset)),stack1 ? stack1.call(depth0, "shared/img/user-cover.png", options) : helperMissing.call(depth0, "asset", "shared/img/user-cover.png", options)));
  }

function program5(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  var stack1, options;
  options = {hash:{},data:data};
  return escapeExpression(((stack1 = helpers.asset || (depth0 && depth0.asset)),stack1 ? stack1.call(depth0, "shared/img/user-image.png", options) : helperMissing.call(depth0, "asset", "shared/img/user-image.png", options)));
  }

  buffer += "<header>\r\n    <button class=\"button-back\">Back</button>\r\n    <h2 class=\"title\">Your Profile</h2>\r\n    <section class=\"page-actions\">\r\n        <button class=\"button-save\">Save</button>\r\n    </section>\r\n</header>\r\n\r\n<section class=\"content no-padding\">\r\n\r\n    <header class=\"user-profile-header\">\r\n        <img id=\"user-cover\" class=\"cover-image\" src=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.cover), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'s Cover Image\"/>\r\n\r\n        <a class=\"edit-cover-image js-modal-cover button\" href=\"#\">Change Cover</a>\r\n    </header>\r\n\r\n    <form class=\"user-profile\" novalidate=\"novalidate\">\r\n\r\n        <fieldset class=\"user-details-top\">\r\n\r\n            <figure class=\"user-image\">\r\n                <div id=\"user-image\" class=\"img\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\" href=\"#\"><span class=\"hidden\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'s Picture</span></div>\r\n                <a href=\"#\" class=\"edit-user-image js-modal-image\">Edit Picture</a>\r\n            </figure>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-name\" class=\"hidden\">Full Name</label>\r\n                <input type=\"text\" value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"user-name\" placeholder=\"Full Name\" autocorrect=\"off\" />\r\n                <p>Use your real name so people can recognise you</p>\r\n            </div>\r\n\r\n        </fieldset>\r\n\r\n        <fieldset class=\"user-details-bottom\">\r\n\r\n            <div class=\"form-group\">\r\n                <label for\"user-email\">Email</label>\r\n                <input type=\"email\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.email); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"user-email\" placeholder=\"Email Address\" autocapitalize=\"off\" autocorrect=\"off\" />\r\n                <p>Used for notifications</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-location\">Location</label>\r\n                <input type=\"text\" value=\"";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.location); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"user-location\" />\r\n                <p>Where in the world do you live?</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-website\">Website</label>\r\n                <input type=\"url\" value=\"";
  if (stack1 = helpers.website) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.website); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"user-website\" autocapitalize=\"off\" autocorrect=\"off\" />\r\n                <p>Have a website or blog other than this one? Link it!</p>\r\n            </div>\r\n\r\n            <div class=\"form-group bio-container\">\r\n                <label for=\"user-bio\">Bio</label>\r\n                <textarea id=\"user-bio\">";
  if (stack1 = helpers.bio) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.bio); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\r\n                <p>\r\n                    Write about you, in 200 characters or less.\r\n                    <span class=\"word-count\">0</span>\r\n                </p>\r\n            </div>\r\n\r\n            <hr />\r\n\r\n        </fieldset>\r\n\r\n        <fieldset>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-password-old\">Old Password</label>\r\n                <input type=\"password\" id=\"user-password-old\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-password-new\">New Password</label>\r\n                <input type=\"password\" id=\"user-password-new\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"user-new-password-verification\">Verify Password</label>\r\n                <input type=\"password\" id=\"user-new-password-verification\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"button\" class=\"button-delete button-change-password\">Change Password</button>\r\n            </div>\r\n\r\n        </fieldset>\r\n\r\n    </form>\r\n</section>\r\n";
  return buffer;
  });

this["JST"]["signup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form id=\"signup\" class=\"signup-form\" method=\"post\" novalidate=\"novalidate\">\r\n    <div class=\"name-wrap\">\r\n        <input class=\"name\" type=\"text\" placeholder=\"Full Name\" name=\"name\" autocorrect=\"off\" />\r\n    </div>\r\n    <div class=\"email-wrap\">\r\n        <input class=\"email\" type=\"email\" placeholder=\"Email Address\" name=\"email\" autocapitalize=\"off\" autocorrect=\"off\" />\r\n    </div>\r\n    <div class=\"password-wrap\">\r\n        <input class=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\" />\r\n    </div>\r\n    <button class=\"button-save\" type=\"submit\">Sign Up</button>\r\n</form>\r\n";
  });