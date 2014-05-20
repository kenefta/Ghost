define("ghost/app", 
  ["ember/resolver","ghost/fixtures/init","ghost/initializers/current-user","ghost/initializers/csrf","ghost/initializers/notifications","ghost/initializers/trailing-history","ghost/utils/link-view","ghost/utils/text-field","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];

    var initFixtures = __dependency2__["default"];

    var injectCurrentUser = __dependency3__["default"];

    var injectCsrf = __dependency4__["default"];

    var registerNotifications = __dependency5__.registerNotifications;
    var injectNotifications = __dependency5__.injectNotifications;

    var registerTrailingLocationHistory = __dependency6__["default"];



    
    var App = Ember.Application.extend({
        /**
         * These are debugging flags, they are useful during development
         */
        LOG_ACTIVE_GENERATION: true,
        LOG_MODULE_RESOLVER: true,
        LOG_TRANSITIONS: true,
        LOG_TRANSITIONS_INTERNAL: true,
        LOG_VIEW_LOOKUPS: true,
        modulePrefix: 'ghost',
        Resolver: Resolver['default']
    });
    
    initFixtures();
    
    App.initializer(injectCurrentUser);
    App.initializer(injectCsrf);
    App.initializer(registerNotifications);
    App.initializer(injectNotifications);
    App.initializer(registerTrailingLocationHistory);
    
    __exports__["default"] = App;
  });
define("ghost/assets/vendor/loader", 
  [],
  function() {
    "use strict";
    var define, requireModule, require, requirejs;
    
    (function() {
      var registry = {}, seen = {}, state = {};
      var FAILED = false;
    
      define = function(name, deps, callback) {
        registry[name] = {
          deps: deps,
          callback: callback
        };
      };
    
      requirejs = require = requireModule = function(name) {
        if (state[name] !== FAILED &&
            seen.hasOwnProperty(name)) {
          return seen[name];
        }
    
        if (!registry.hasOwnProperty(name)) {
          throw new Error('Could not find module ' + name);
        }
    
        var mod = registry[name];
        var deps = mod.deps;
        var callback = mod.callback;
        var reified = [];
        var exports;
        var value;
        var loaded = false;
    
        seen[name] = { }; // enable run-time cycles
    
        try {
          for (var i=0, l=deps.length; i<l; i++) {
            if (deps[i] === 'exports') {
              reified.push(exports = {});
            } else {
              reified.push(requireModule(resolve(deps[i], name)));
            }
          }
    
          value = callback.apply(this, reified);
          loaded = true;
        } finally {
          if (!loaded) {
            state[name] = FAILED;
          }
        }
        return seen[name] = exports || value;
      };
    
      function resolve(child, name) {
        if (child.charAt(0) !== '.') { return child; }
    
        var parts = child.split('/');
        var parentBase = name.split('/').slice(0, -1);
    
        for (var i = 0, l = parts.length; i < l; i++) {
          var part = parts[i];
    
          if (part === '..') { parentBase.pop(); }
          else if (part === '.') { continue; }
          else { parentBase.push(part); }
        }
    
        return parentBase.join('/');
      }
    
      requirejs._eak_seen = registry;
      requirejs.clear = function(){
        requirejs._eak_seen = registry = {};
        seen = {};
      };
    })();
  });
define("ghost/components/-codemirror", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global CodeMirror*/
    
    var onChangeHandler = function (cm) {
        cm.component.set('value', cm.getDoc().getValue());
    };
    
    var onScrollHandler = function (cm) {
        var scrollInfo = cm.getScrollInfo(),
            percentage = scrollInfo.top / scrollInfo.height,
            component = cm.component;
    
        // throttle scroll updates
        component.throttle = Ember.run.throttle(component, function () {
            this.set('scrollPosition', percentage);
        }, 50);
    };
    
    var Codemirror = Ember.TextArea.extend({
        initCodemirror: function () {
            // create codemirror
            this.codemirror = CodeMirror.fromTextArea(this.get('element'), {
                lineWrapping: true
            });
            this.codemirror.component = this; // save reference to this
    
            // propagate changes to value property
            this.codemirror.on('change', onChangeHandler);
    
            // on scroll update scrollPosition property
            this.codemirror.on('scroll', onScrollHandler);
        }.on('didInsertElement'),
    
        removeThrottle: function () {
            Ember.run.cancel(this.throttle);
        }.on('willDestroyElement'),
    
        removeCodemirrorHandlers: function () {
            // not sure if this is needed.
            this.codemirror.off('change', onChangeHandler);
            this.codemirror.off('scroll', onScrollHandler);
        }.on('willDestroyElement')
    });
    
    __exports__["default"] = Codemirror;
  });
define("ghost/components/-markdown", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var Markdown = Ember.Component.extend({
        adjustScrollPosition: function () {
            var scrollWrapper = this.$('.entry-preview-content').get(0),
            // calculate absolute scroll position from percentage
                scrollPixel = scrollWrapper.scrollHeight * this.get('scrollPosition');
    
            scrollWrapper.scrollTop = scrollPixel; // adjust scroll position
        }.observes('scrollPosition')
    });
    
    __exports__["default"] = Markdown;
  });
define("ghost/components/activating-list-item", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Component.extend({
        tagName: 'li',
        classNameBindings: ['active'],
        active: false
    });
  });
define("ghost/components/blur-text-field", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var BlurTextField = Ember.TextField.extend({
        selectOnClick: false,
        click: function (event) {
            if (this.get('selectOnClick')) {
                event.currentTarget.select();
            }
        },
        focusOut: function () {
            this.sendAction('action', this.get('value'));
        }
    });
    
    __exports__["default"] = BlurTextField;
  });
define("ghost/components/file-upload", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var FileUpload = Ember.Component.extend({
        _file: null,
        uploadButtonText: 'Text',
        uploadButtonDisabled: true,
        change: function (event) {
            this.set('uploadButtonDisabled', false);
            this.sendAction('onAdd');
            this._file = event.target.files[0];
        },
        actions: {
            upload: function () {
                var self = this;
                if (!this.uploadButtonDisabled && self._file) {
                    self.sendAction('onUpload', self._file);
                }
    
                // Prevent double post by disabling the button.
                this.set('uploadButtonDisabled', true);
            }
        }
    });
    
    __exports__["default"] = FileUpload;
  });
define("ghost/components/gh-form", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.View.extend({
        tagName: 'form',
        attributeBindings: ['enctype'],
        reset: function () {
            this.$().get(0).reset();
        },
        didInsertElement: function () {
            this.get('controller').on('reset', this, this.reset);
        },
        willClearRender: function () {
            this.get('controller').off('reset', this, this.reset);
        }
    });
  });
define("ghost/components/ghost-notification", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var NotificationComponent = Ember.Component.extend({
        classNames: ['js-bb-notification'],
    
        didInsertElement: function () {
            var self = this;
    
            self.$().on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function (event) {
                /* jshint unused: false */
                self.notifications.removeObject(self.get('message'));
            });
        },
    
        actions: {
            closeNotification: function () {
                var self = this;
                self.notifications.removeObject(self.get('message'));
            }
        }
    });
    
    __exports__["default"] = NotificationComponent;
  });
define("ghost/components/ghost-notifications", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var NotificationsComponent = Ember.Component.extend({
        tagName: 'aside',
        classNames: 'notifications',
        messages: Ember.computed.alias('notifications')
    });
    
    __exports__["default"] = NotificationsComponent;
  });
define("ghost/components/ghost-popover", 
  ["exports"],
  function(__exports__) {
    "use strict";
    
    var GhostPopover = Ember.Component.extend({
        classNames: 'ghost-popover',
        classNameBindings: ['open'],
        open: false
    });
    
    __exports__["default"] = GhostPopover;
  });
define("ghost/components/modal-dialog", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ModalDialog = Ember.Component.extend({
        didInsertElement: function () {
            this.$('#modal-container').fadeIn(50);
    
            this.$('.modal-background').show().fadeIn(10, function () {
                $(this).addClass('in');
            });
    
            this.$('.js-modal').addClass('in');
        },
    
        willDestroyElement: function () {
    
            this.$('.js-modal').removeClass('in');
    
            this.$('.modal-background').removeClass('in');
    
            return this._super();
        },
    
        actions: {
            closeModal: function () {
                this.sendAction();
            },
            confirm: function (type) {
                var func = this.get('confirm.' + type + '.func');
                if (typeof func === 'function') {
                    func();
                }
                this.sendAction();
            }
        },
    
        klass: function () {
            var classNames = [];
    
            classNames.push(this.get('type') ? 'modal-' + this.get('type') : 'modal');
    
            if (this.get('style')) {
                this.get('style').split(',').forEach(function (style) {
                    classNames.push('modal-style-' + style);
                });
            }
    
            classNames.push(this.get('animation'));
    
            return classNames.join(' ');
        }.property('type', 'style', 'animation'),
    
        acceptButtonClass: function () {
            return this.get('confirm.accept.buttonClass') ? this.get('confirm.accept.buttonClass') : 'button-add';
        }.property('confirm.accept.buttonClass'),
    
        rejectButtonClass: function () {
            return this.get('confirm.reject.buttonClass') ? this.get('confirm.reject.buttonClass') : 'button-delete';
        }.property('confirm.reject.buttonClass')
    });
    
    __exports__["default"] = ModalDialog;
  });
define("ghost/components/upload-modal", 
  ["ghost/components/modal-dialog","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /*global console */
    
    var ModalDialog = __dependency1__["default"];

    
    var UploadModal = ModalDialog.extend({
        layoutName: 'components/modal-dialog',
    
        didInsertElement: function () {
            this._super();
    
            // @TODO: get this real
            console.log('UploadController:afterRender');
            // var filestorage = $('#' + this.options.model.id).data('filestorage');
            // this.$('.js-drop-zone').upload({fileStorage: filestorage});
        },
    
        actions: {
            closeModal: function () {
                this.sendAction();
            },
            confirm: function (type) {
                var func = this.get('confirm.' + type + '.func');
                if (typeof func === 'function') {
                    func();
                }
                this.sendAction();
            }
        },
    
    });
    
    __exports__["default"] = UploadModal;
  });
define("ghost/controllers/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ApplicationController = Ember.Controller.extend({
        isSignedIn: Ember.computed.bool('user.isSignedIn'),
    
        actions: {
            toggleMenu: function () {
                this.toggleProperty('showMenu');
            }
        }
    });
    
    __exports__["default"] = ApplicationController;
  });
define("ghost/controllers/debug", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global alert, console */
    
    var Debug = Ember.Controller.extend(Ember.Evented, {
        uploadButtonText: 'Import',
        actions: {
            importData: function (file) {
                var self = this;
                this.set('uploadButtonText', 'Importing');
                this.get('model').importFrom(file)
                    .then(function (response) {
                        console.log(response);
                        alert('@TODO: success');
                    })
                    .catch(function (response) {
                        console.log(response);
                        alert('@TODO: error');
                    })
                    .finally(function () {
                        self.set('uploadButtonText', 'Import');
                        self.trigger('reset');
                    });
            },
            sendTestEmail: function () {
                this.get('model').sendTestEmail()
                    .then(function (response) {
                        console.log(response);
                        alert('@TODO: success');
                    })
                    .catch(function (response) {
                        console.log(response);
                        alert('@TODO: error');
                    });
            }
        }
    });
    
    __exports__["default"] = Debug;
  });
define("ghost/controllers/forgotten", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global console, alert */
    
    var ForgottenController = Ember.Controller.extend({
        email: '',
        actions: {
            submit: function () {
                var self = this;
                self.user.fetchForgottenPasswordFor(this.email)
                    .then(function () {
                        alert('@TODO Notification: Success');
                        self.transitionToRoute('signin');
                    })
                    .catch(function (response) {
                        alert('@TODO');
                        console.log(response);
                    });
            }
        }
    });
    
    __exports__["default"] = ForgottenController;
  });
define("ghost/controllers/modals/delete-all", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global alert */
    
    var DeleteAllController = Ember.Controller.extend({
        confirm: {
            accept: {
                func: function () {
                    // @TODO make the below real :)
                    alert('Deleting everything!');
                    // $.ajax({
                    //     url: Ghost.paths.apiRoot + '/db/',
                    //     type: 'DELETE',
                    //     headers: {
                    //         'X-CSRF-Token': $("meta[name='csrf-param']").attr('content')
                    //     },
                    //     success: function onSuccess(response) {
                    //         if (!response) {
                    //             throw new Error('No response received from server.');
                    //         }
                    //         if (!response.message) {
                    //             throw new Error(response.detail || 'Unknown error');
                    //         }
    
                    //         Ghost.notifications.addItem({
                    //             type: 'success',
                    //             message: response.message,
                    //             status: 'passive'
                    //         });
    
                    //     },
                    //     error: function onError(response) {
                    //         var responseText = JSON.parse(response.responseText),
                    //             message = responseText && responseText.error ? responseText.error : 'unknown';
                    //         Ghost.notifications.addItem({
                    //             type: 'error',
                    //             message: ['A problem was encountered while deleting content from your blog. Error: ', message].join(''),
                    //             status: 'passive'
                    //         });
    
                    //     }
                    // });
                },
                text: "Delete",
                buttonClass: "button-delete"
            },
            reject: {
                func: function () {
                    return true;
                },
                text: "Cancel",
                buttonClass: "button"
            }
        }
    });
    
    __exports__["default"] = DeleteAllController;
  });
define("ghost/controllers/modals/delete-post", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global alert */
    
    var DeletePostController = Ember.Controller.extend({
        confirm: {
            accept: {
                func: function () {
                    // @TODO: make this real
                    alert('Deleting post');
                    // self.model.destroy({
                    //     wait: true
                    // }).then(function () {
                    //     // Redirect to content screen if deleting post from editor.
                    //     if (window.location.pathname.indexOf('editor') > -1) {
                    //         window.location = Ghost.paths.subdir + '/ghost/content/';
                    //     }
                    //     Ghost.notifications.addItem({
                    //         type: 'success',
                    //         message: 'Your post has been deleted.',
                    //         status: 'passive'
                    //     });
                    // }, function () {
                    //     Ghost.notifications.addItem({
                    //         type: 'error',
                    //         message: 'Your post could not be deleted. Please try again.',
                    //         status: 'passive'
                    //     });
                    // });
                },
                text: "Delete",
                buttonClass: "button-delete"
            },
            reject: {
                func: function () {
                    return true;
                },
                text: "Cancel",
                buttonClass: "button"
            }
        },
    });
    
    __exports__["default"] = DeletePostController;
  });
define("ghost/controllers/modals/upload", 
  ["exports"],
  function(__exports__) {
    "use strict";
    
    var UploadController = Ember.Controller.extend({
        confirm: {
            reject: {
                func: function () { // The function called on rejection
                    return true;
                },
                buttonClass: true,
                text: "Cancel" // The reject button text
            }
        }
    });
    
    __exports__["default"] = UploadController;
  });
define("ghost/controllers/posts/post", 
  ["ghost/utils/date-formatting","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var parseDateString = __dependency1__.parseDateString;
    var formatDate = __dependency1__.formatDate;

    
    var equal = Ember.computed.equal;
    
    var PostController = Ember.ObjectController.extend({
    
        isPublished: equal('status', 'published'),
        isDraft: equal('status', 'draft'),
        isEditingSettings: false,
        isStaticPage: function (key, val) {
            if (arguments.length > 1) {
                this.set('model.page', val ? 1 : 0);
                this.get('model').save('page').then(function () {
                    this.notifications.showSuccess('Succesfully converted ' + (val ? 'to static page' : 'to post'));
                }, this.notifications.showErrors);
            }
            return !!this.get('model.page');
        }.property('model.page'),
    
        isOnServer: function () {
            return this.get('model.id') !== undefined;
        }.property('model.id'),
    
        newSlugBinding: Ember.Binding.oneWay('model.slug'),
        slugPlaceholder: null,
        // Requests a new slug when the title was changed
        updateSlugPlaceholder: function () {
            var model,
                self = this,
                title = this.get('title');
    
            // If there's a title present we want to
            // validate it against existing slugs in the db
            // and then update the placeholder value.
            if (title) {
                model = self.get('model');
                model.generateSlug().then(function (slug) {
                    self.set('slugPlaceholder', slug);
                }, function () {
                    self.notifications.showWarn('Unable to generate a slug for "' + title + '"');
                });
            } else {
                // If there's no title set placeholder to blank
                // and don't make an ajax request to server
                // for a proper slug (as there won't be any).
                self.set('slugPlaceholder', '');
            }
        }.observes('model.title'),
    
        publishedAt: null,
        publishedAtChanged: function () {
            this.set('publishedAt', formatDate(this.get('model.published_at')));
        }.observes('model.published_at'),
            
        actions: {
            editSettings: function () {
                this.toggleProperty('isEditingSettings');
                if (this.get('isEditingSettings')) {
                    //Stop editing if the user clicks outside the settings view
                    Ember.run.next(this, function () {
                        var self = this;
                        // @TODO has a race condition with click on the editSettings action
                        $(document).one('click', function () {
                            self.toggleProperty('isEditingSettings');
                        });
                    });
                }
            },
            updateSlug: function () {
                var newSlug = this.get('newSlug'),
                    slug = this.get('model.slug'),
                    placeholder = this.get('slugPlaceholder'),
                    self = this;
                
                newSlug = (!newSlug && placeholder) ? placeholder : newSlug;
                
                // Ignore unchanged slugs
                if (slug === newSlug) {
                    return;
                }
                //reset to model's slug on empty string
                if (!newSlug) {
                    this.set('newSlug', slug);
                    return;
                }
    
                //Validation complete
                this.set('model.slug', newSlug);
    
                // If the model doesn't currently
                // exist on the server
                // then just update the model's value
                if (!this.get('isOnServer')) {
                    return;
                }
                
                this.get('model').save('slug').then(function () {
                    self.notifications.showSuccess('Permalink successfully changed to <strong>' + this.get('model.slug') + '</strong>.');
                }, this.notifications.showErrors);
            },
    
            updatePublishedAt: function (userInput) {
                var errMessage = '',
                    newPubDate = formatDate(parseDateString(userInput)),
                    pubDate = this.get('publishedAt'),
                    newPubDateMoment,
                    pubDateMoment;
    
                // if there is no new pub date, mark that until the post is published,
                //    when we'll fill in with the current time.
                if (!newPubDate) {
                    this.set('publishedAt', '');
                    return;
                }
    
                // Check for missing time stamp on new data
                // If no time specified, add a 12:00
                if (newPubDate && !newPubDate.slice(-5).match(/\d+:\d\d/)) {
                    newPubDate += " 12:00";
                }
    
                newPubDateMoment = parseDateString(newPubDate);
    
                // If there was a published date already set
                if (pubDate) {
                    // Check for missing time stamp on current model
                    // If no time specified, add a 12:00
                    if (!pubDate.slice(-5).match(/\d+:\d\d/)) {
                        pubDate += " 12:00";
                    }
    
                    pubDateMoment = parseDateString(pubDate);
    
                    // Quit if the new date is the same
                    if (pubDateMoment.isSame(newPubDateMoment)) {
                        return;
                    }
                }
    
                // Validate new Published date
                if (!newPubDateMoment.isValid() || newPubDate.substr(0, 12) === "Invalid date") {
                    errMessage = 'Published Date must be a valid date with format: DD MMM YY @ HH:mm (e.g. 6 Dec 14 @ 15:00)';
                }
    
                if (newPubDateMoment.diff(new Date(), 'h') > 0) {
                    errMessage = 'Published Date cannot currently be in the future.';
                }
    
                if (errMessage) {
                    // Show error message
                    this.notifications.showError(errMessage);
                    //Hack to push a "change" when it's actually staying
                    //  the same.
                    //This alerts the listener on post-settings-menu
                    this.notifyPropertyChange('publishedAt');
                    return;
                }
    
                //Validation complete
                this.set('model.published_at', newPubDateMoment.toDate());
    
                // If the model doesn't currently
                // exist on the server
                // then just update the model's value
                if (!this.get('isOnServer')) {
                    return;
                }
                
                this.get('model').save('published_at').then(function () {
                    this.notifications.showSuccess('Publish date successfully changed to <strong>' + this.get('publishedAt') + '</strong>.');
                }, this.notifications.showErrors);
            }
        }
    });
    
    __exports__["default"] = PostController;
  });
define("ghost/controllers/reset", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global alert, console */
    var ResetController = Ember.Controller.extend({
        passwords: {
            newPassword: '',
            ne2Password: ''
        },
        token: '',
        submitButtonDisabled: false,
        actions: {
            submit: function () {
                var self = this;
                this.set('submitButtonDisabled', true);
                
                this.user.resetPassword(this.passwords, this.token)
                    .then(function () {
                        alert('@TODO Notification : Success');
                        self.transitionToRoute('signin');
                    })
                    .catch(function (response) {
                        alert('@TODO Notification : Failure');
                        console.log(response);
                    })
                    .finally(function () {
                        self.set('submitButtonDisabled', false);
                    });
            }
        }
    });
    
    __exports__["default"] = ResetController;
  });
define("ghost/controllers/settings/general", 
  ["exports"],
  function(__exports__) {
    "use strict";
    
    var elementLookup = {
        title: '#blog-title',
        description: '#blog-description',
        email: '#email-address',
        postsPerPage: '#postsPerPage'
    };
    
    var SettingsGeneralController = Ember.ObjectController.extend({
        isDatedPermalinks: function (key, value) {
            // setter
            if (arguments.length > 1) {
                this.set('permalinks', value ? '/:year/:month/:day/:slug/' : '/:slug/');
            }
    
            // getter
            var slugForm = this.get('permalinks');
    
            return slugForm !== '/:slug/';
        }.property('permalinks'),
    
        actions: {
            'save': function () {
                // Validate and save settings
                var model = this.get('model'),
                    // @TODO: Don't know how to scope this to this controllers view because this.view is null
                    errs = model.validate();
    
                if (errs.length > 0) {
                    // Set the actual element from this view based on the error
                    errs.forEach(function (err) {
                        // @TODO: Probably should still be scoped to this controllers root element.
                        err.el = $(elementLookup[err.el]);
                    });
    
                    // Let the applicationRoute handle validation errors
                    this.send('handleValidationErrors', errs);
                } else {
                    model.save().then(function () {
                        // @TODO: Notification of success
                        window.alert('Saved data!');
                    }, function () {
                        // @TODO: Notification of error
                        window.alert('Error saving data');
                    });
                }
            },
    
            'uploadLogo': function () {
                // @TODO: Integrate with Modal component
            },
    
            'uploadCover': function () {
                // @TODO: Integrate with Modal component
            }
        }
    });
    
    __exports__["default"] = SettingsGeneralController;
  });
define("ghost/controllers/settings/user", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global alert */
    
    var SettingsUserController = Ember.Controller.extend({
        cover: function () {
            // @TODO: add {{asset}} subdir path
            return this.user.getWithDefault('cover', '/shared/img/user-cover.png');
        }.property('user.cover'),
    
        coverTitle: function () {
            return this.get('user.name') + '\'s Cover Image';
        }.property('user.name'),
    
        image: function () {
            // @TODO: add {{asset}} subdir path
            return 'background-image: url(' + this.user.getWithDefault('image', '/shared/img/user-image.png') + ')';
        }.property('user.image'),
    
        actions: {
            save: function () {
                alert('@TODO: Saving user...');
    
                if (this.user.validate().get('isValid')) {
                    this.user.save().then(function (response) {
                        alert('Done saving' + JSON.stringify(response));
                    }, function () {
                        alert('Error saving.');
                    });
                } else {
                    alert('Errors found! ' + JSON.stringify(this.user.get('errors')));
                }
            },
    
            password: function () {
                alert('@TODO: Changing password...');
                var passwordProperties = this.getProperties('password', 'newPassword', 'ne2Password');
    
                if (this.user.validatePassword(passwordProperties).get('passwordIsValid')) {
                    this.user.saveNewPassword(passwordProperties).then(function () {
                        alert('Success!');
                        // Clear properties from view
                        this.setProperties({
                            'password': '',
                            'newpassword': '',
                            'ne2password': ''
                        });
                    }.bind(this), function (errors) {
                        alert('Errors ' + JSON.stringify(errors));
                    });
                } else {
                    alert('Errors found! ' + JSON.stringify(this.user.get('passwordErrors')));
                }
            }
        }
    
    });
    
    __exports__["default"] = SettingsUserController;
  });
define("ghost/fixtures/init", 
  ["ghost/fixtures/posts","ghost/fixtures/users","ghost/fixtures/settings","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var postFixtures = __dependency1__["default"];

    var userFixtures = __dependency2__["default"];

    var settingsFixtures = __dependency3__["default"];

    
    var response = function (responseBody, status) {
        status = status || 200;
        var textStatus = (status === 200) ? 'success' : 'error';
    
        return {
            response: responseBody,
            jqXHR: { status: status },
            textStatus: textStatus
        };
    };
    
    var user = function (status) {
        return response(userFixtures.findBy('id', 1), status);
    };
    
    var post = function (id, status) {
        return response(postFixtures.findBy('id', id), status);
    };
    
    var posts = function (status) {
        return response({
            'posts': postFixtures,
            'page': 1,
            'limit': 15,
            'pages': 1,
            'total': 2
        }, status);
    };
    
    var settings = function (status) {
        return response(settingsFixtures, status);
    };
    
    var defineFixtures = function (status) {
        ic.ajax.defineFixture('/ghost/api/v0.1/posts', posts(status));
        ic.ajax.defineFixture('/ghost/api/v0.1/posts/1', post(1, status));
        ic.ajax.defineFixture('/ghost/api/v0.1/posts/2', post(2, status));
        ic.ajax.defineFixture('/ghost/api/v0.1/posts/3', post(3, status));
        ic.ajax.defineFixture('/ghost/api/v0.1/posts/4', post(4, status));
        ic.ajax.defineFixture('/ghost/api/v0.1/posts/slug/test%20title/', response('generated-slug', status));
    
        ic.ajax.defineFixture('/ghost/api/v0.1/users/me/', user(status));
        ic.ajax.defineFixture('/ghost/changepw/', response({
            msg: 'Password changed successfully'
        }));
        ic.ajax.defineFixture('/ghost/api/v0.1/forgotten/', response({
            redirect: '/ghost/signin/'
        }));
        ic.ajax.defineFixture('/ghost/api/v0.1/reset/', response({
            msg: 'Password changed successfully'
        }));
        ic.ajax.defineFixture('/ghost/api/v0.1/settings/?type=blog,theme,app', settings(status));
    };
    
    __exports__["default"] = defineFixtures;
  });
define("ghost/fixtures/posts", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var posts = [
        {
            "id": 4,
            "uuid": "4dc16b9e-bf90-44c9-97c5-40a0a81e8297",
            "title": "This post is featured",
            "slug": "this-post-is-featured",
            "markdown": "Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Fusce id felis nec est suscipit scelerisque vitae eu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Sed pellentesque metus vel velit tincidunt aliquet. Nunc condimentum tempus convallis. Sed tincidunt, leo et congue blandit, lorem tortor imperdiet sapien, et porttitor turpis nisl sed tellus. In ultrices urna sit amet mauris suscipit adipiscing.",
            "html": "<p>Lorem <strong>ipsum<\/strong> dolor sit amet, consectetur adipiscing elit. Fusce id felis nec est suscipit scelerisque vitae eu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Sed pellentesque metus vel velit tincidunt aliquet. Nunc condimentum tempus convallis. Sed tincidunt, leo et congue blandit, lorem tortor imperdiet sapien, et porttitor turpis nisl sed tellus. In ultrices urna sit amet mauris suscipit adipiscing.<\/p>",
            "image": null,
            "featured": 1,
            "page": 0,
            "status": "published",
            "language": "en_US",
            "meta_title": null,
            "meta_description": null,
            "author_id": 1,
            "created_at": "2014-02-15T23:27:08.000Z",
            "created_by": 1,
            "updated_at": "2014-02-15T23:27:08.000Z",
            "updated_by": 1,
            "published_at": "2014-02-15T23:27:08.000Z",
            "published_by": 1,
            "author": {
                "id": 1,
                "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
                "name": "Bill Murray",
                "slug": "manuel_mitasch",
                "email": "manuel@cms.mine.nu",
                "image": null,
                "cover": null,
                "bio": null,
                "website": null,
                "location": null,
                "accessibility": null,
                "status": "active",
                "language": "en_US",
                "meta_title": null,
                "meta_description": null,
                "created_at": "2014-02-15T20:02:25.000Z",
                "updated_at": "2014-02-15T20:02:25.000Z"
            },
            "user": {
                "id": 1,
                "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
                "name": "manuel_mitasch",
                "slug": "manuel_mitasch",
                "email": "manuel@cms.mine.nu",
                "image": null,
                "cover": null,
                "bio": null,
                "website": null,
                "location": null,
                "accessibility": null,
                "status": "active",
                "language": "en_US",
                "meta_title": null,
                "meta_description": null,
                "created_at": "2014-02-15T20:02:25.000Z",
                "updated_at": "2014-02-15T20:02:25.000Z"
            },
            "tags": [
    
            ]
        },
        {
            "id": 3,
            "uuid": "4dc16b9e-bf90-44c9-97c5-40a0a81e8297",
            "title": "Example page entry",
            "slug": "example-page-entry",
            "markdown": "Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Fusce id felis nec est suscipit scelerisque vitae eu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Sed pellentesque metus vel velit tincidunt aliquet. Nunc condimentum tempus convallis. Sed tincidunt, leo et congue blandit, lorem tortor imperdiet sapien, et porttitor turpis nisl sed tellus. In ultrices urna sit amet mauris suscipit adipiscing.",
            "html": "<p>Lorem <strong>ipsum<\/strong> dolor sit amet, consectetur adipiscing elit. Fusce id felis nec est suscipit scelerisque vitae eu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Sed pellentesque metus vel velit tincidunt aliquet. Nunc condimentum tempus convallis. Sed tincidunt, leo et congue blandit, lorem tortor imperdiet sapien, et porttitor turpis nisl sed tellus. In ultrices urna sit amet mauris suscipit adipiscing.<\/p>",
            "image": null,
            "featured": 0,
            "page": 1,
            "status": "published",
            "language": "en_US",
            "meta_title": null,
            "meta_description": null,
            "author_id": 1,
            "created_at": "2014-02-15T23:27:08.000Z",
            "created_by": 1,
            "updated_at": "2014-02-15T23:27:08.000Z",
            "updated_by": 1,
            "published_at": null,
            "published_by": null,
            "author": {
                "id": 1,
                "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
                "name": "Slimer",
                "slug": "manuel_mitasch",
                "email": "manuel@cms.mine.nu",
                "image": null,
                "cover": null,
                "bio": null,
                "website": null,
                "location": null,
                "accessibility": null,
                "status": "active",
                "language": "en_US",
                "meta_title": null,
                "meta_description": null,
                "created_at": "2014-02-15T20:02:25.000Z",
                "updated_at": "2014-02-15T20:02:25.000Z"
            },
            "user": {
                "id": 1,
                "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
                "name": "manuel_mitasch",
                "slug": "manuel_mitasch",
                "email": "manuel@cms.mine.nu",
                "image": null,
                "cover": null,
                "bio": null,
                "website": null,
                "location": null,
                "accessibility": null,
                "status": "active",
                "language": "en_US",
                "meta_title": null,
                "meta_description": null,
                "created_at": "2014-02-15T20:02:25.000Z",
                "updated_at": "2014-02-15T20:02:25.000Z"
            },
            "tags": [
    
            ]
        },
        {
            "id": 2,
            "uuid": "4dc1cb9e-bf90-44c9-97c5-40a8381e8297",
            "title": "Dummy draft post",
            "slug": "dummy-draft-post",
            "markdown": "Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Fusce id felis nec est suscipit scelerisque vitae eu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Sed pellentesque metus vel velit tincidunt aliquet. Nunc condimentum tempus convallis. Sed tincidunt, leo et congue blandit, lorem tortor imperdiet sapien, et porttitor turpis nisl sed tellus. In ultrices urna sit amet mauris suscipit adipiscing.",
            "html": "<p>Lorem <strong>ipsum<\/strong> dolor sit amet, consectetur adipiscing elit. Fusce id felis nec est suscipit scelerisque vitae eu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Sed pellentesque metus vel velit tincidunt aliquet. Nunc condimentum tempus convallis. Sed tincidunt, leo et congue blandit, lorem tortor imperdiet sapien, et porttitor turpis nisl sed tellus. In ultrices urna sit amet mauris suscipit adipiscing.<\/p>",
            "image": null,
            "featured": 0,
            "page": 0,
            "status": "draft",
            "language": "en_US",
            "meta_title": null,
            "meta_description": null,
            "author_id": 1,
            "created_at": "2014-02-15T23:27:08.000Z",
            "created_by": 1,
            "updated_at": "2014-02-15T23:27:08.000Z",
            "updated_by": 1,
            "published_at": null,
            "published_by": null,
            "author": {
                "id": 1,
                "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
                "name": "manuel_mitasch",
                "slug": "manuel_mitasch",
                "email": "manuel@cms.mine.nu",
                "image": null,
                "cover": null,
                "bio": null,
                "website": null,
                "location": null,
                "accessibility": null,
                "status": "active",
                "language": "en_US",
                "meta_title": null,
                "meta_description": null,
                "created_at": "2014-02-15T20:02:25.000Z",
                "updated_at": "2014-02-15T20:02:25.000Z"
            },
            "user": {
                "id": 1,
                "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
                "name": "manuel_mitasch",
                "slug": "manuel_mitasch",
                "email": "manuel@cms.mine.nu",
                "image": null,
                "cover": null,
                "bio": null,
                "website": null,
                "location": null,
                "accessibility": null,
                "status": "active",
                "language": "en_US",
                "meta_title": null,
                "meta_description": null,
                "created_at": "2014-02-15T20:02:25.000Z",
                "updated_at": "2014-02-15T20:02:25.000Z"
            },
            "tags": [
    
            ]
        },
        {
            "id": 1,
            "uuid": "4b96025d-050c-47ff-8bd4-047e4843b302",
            "title": "Welcome to Ghost",
            "slug": "welcome-to-ghost",
            "markdown": "You're live! Nice. We've put together a little post to introduce you to the Ghost editor and get you started. You can manage your content by signing in to the admin area at `<your blog URL>\/ghost\/`. When you arrive, you can select this post from a list on the left and see a preview of it on the right. Click the little pencil icon at the top of the preview to edit this post and read the next section!\n\n## Getting Started\n\nGhost uses something called Markdown for writing. Essentially, it's a shorthand way to manage your post formatting as you write!\n\nWriting in Markdown is really easy. In the left hand panel of Ghost, you simply write as you normally would. Where appropriate, you can use *shortcuts* to **style** your content. For example, a list:\n\n* Item number one\n* Item number two\n    * A nested item\n* A final item\n\nor with numbers!\n\n1. Remember to buy some milk\n2. Drink the milk\n3. Tweet that I remembered to buy the milk, and drank it\n\n### Links\n\nWant to link to a source? No problem. If you paste in url, like http:\/\/ghost.org - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here's a link to [the Ghost website](http:\/\/ghost.org). Neat.\n\n### What about Images?\n\nImages work too! Already know the URL of the image you want to include in your article? Simply paste it in like this to make it show up:\n\n![The Ghost Logo](https:\/\/ghost.org\/images\/ghost.png)\n\nNot sure which image you want to use yet? That's ok too. Leave yourself a descriptive placeholder and keep writing. Come back later and drag and drop the image in to upload:\n\n![A bowl of bananas]\n\n\n### Quoting\n\nSometimes a link isn't enough, you want to quote someone on what they've said. It was probably very wisdomous. Is wisdomous a word? Find out in a future release when we introduce spellcheck! For now - it's definitely a word.\n\n> Wisdomous - it's definitely a word.\n\n### Working with Code\n\nGot a streak of geek? We've got you covered there, too. You can write inline `<code>` blocks really easily with back ticks. Want to show off something more comprehensive? 4 spaces of indentation gets you there.\n\n    .awesome-thing {\n        display: block;\n        width: 100%;\n    }\n\n### Ready for a Break? \n\nThrow 3 or more dashes down on any new line and you've got yourself a fancy new divider. Aw yeah.\n\n---\n\n### Advanced Usage\n\nThere's one fantastic secret about Markdown. If you want, you can  write plain old HTML and it'll still work! Very flexible.\n\n<input type=\"text\" placeholder=\"I'm an input field!\" \/>\n\nThat should be enough to get you started. Have fun - and let us know what you think :)",
            "html": "<p>You're live! Nice. We've put together a little post to introduce you to the Ghost editor and get you started. You can manage your content by signing in to the admin area at <code>&lt;your blog URL&gt;\/ghost\/<\/code>. When you arrive, you can select this post from a list on the left and see a preview of it on the right. Click the little pencil icon at the top of the preview to edit this post and read the next section!<\/p>\n\n<h2 id=\"gettingstarted\">Getting Started<\/h2>\n\n<p>Ghost uses something called Markdown for writing. Essentially, it's a shorthand way to manage your post formatting as you write!<\/p>\n\n<p>Writing in Markdown is really easy. In the left hand panel of Ghost, you simply write as you normally would. Where appropriate, you can use <em>shortcuts<\/em> to <strong>style<\/strong> your content. For example, a list:<\/p>\n\n<ul>\n<li>Item number one<\/li>\n<li>Item number two\n<ul><li>A nested item<\/li><\/ul><\/li>\n<li>A final item<\/li>\n<\/ul>\n\n<p>or with numbers!<\/p>\n\n<ol>\n<li>Remember to buy some milk  <\/li>\n<li>Drink the milk  <\/li>\n<li>Tweet that I remembered to buy the milk, and drank it<\/li>\n<\/ol>\n\n<h3 id=\"links\">Links<\/h3>\n\n<p>Want to link to a source? No problem. If you paste in url, like <a href='http:\/\/ghost.org'>http:\/\/ghost.org<\/a> - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here's a link to <a href=\"http:\/\/ghost.org\">the Ghost website<\/a>. Neat.<\/p>\n\n<h3 id=\"whataboutimages\">What about Images?<\/h3>\n\n<p>Images work too! Already know the URL of the image you want to include in your article? Simply paste it in like this to make it show up:<\/p>\n\n<p><img src=\"https:\/\/ghost.org\/images\/ghost.png\" alt=\"The Ghost Logo\" \/><\/p>\n\n<p>Not sure which image you want to use yet? That's ok too. Leave yourself a descriptive placeholder and keep writing. Come back later and drag and drop the image in to upload:<\/p>\n\n<h3 id=\"quoting\">Quoting<\/h3>\n\n<p>Sometimes a link isn't enough, you want to quote someone on what they've said. It was probably very wisdomous. Is wisdomous a word? Find out in a future release when we introduce spellcheck! For now - it's definitely a word.<\/p>\n\n<blockquote>\n  <p>Wisdomous - it's definitely a word.<\/p>\n<\/blockquote>\n\n<h3 id=\"workingwithcode\">Working with Code<\/h3>\n\n<p>Got a streak of geek? We've got you covered there, too. You can write inline <code>&lt;code&gt;<\/code> blocks really easily with back ticks. Want to show off something more comprehensive? 4 spaces of indentation gets you there.<\/p>\n\n<pre><code>.awesome-thing {\n    display: block;\n    width: 100%;\n}\n<\/code><\/pre>\n\n<h3 id=\"readyforabreak\">Ready for a Break?<\/h3>\n\n<p>Throw 3 or more dashes down on any new line and you've got yourself a fancy new divider. Aw yeah.<\/p>\n\n<hr \/>\n\n<h3 id=\"advancedusage\">Advanced Usage<\/h3>\n\n<p>There's one fantastic secret about Markdown. If you want, you can  write plain old HTML and it'll still work! Very flexible.<\/p>\n\n<p><input type=\"text\" placeholder=\"I'm an input field!\" \/><\/p>\n\n<p>That should be enough to get you started. Have fun - and let us know what you think :)<\/p>",
            "image": null,
            "featured": 0,
            "page": 0,
            "status": "published",
            "language": "en_US",
            "meta_title": null,
            "meta_description": null,
            "author_id": 1,
            "created_at": "2014-02-15T20:02:01.000Z",
            "created_by": 1,
            "updated_at": "2014-02-15T20:02:01.000Z",
            "updated_by": 1,
            "published_at": "2014-02-15T20:02:01.000Z",
            "published_by": 1,
            "author": {
                "id": 1,
                "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
                "name": "manuel_mitasch",
                "slug": "manuel_mitasch",
                "email": "manuel@cms.mine.nu",
                "image": null,
                "cover": null,
                "bio": null,
                "website": null,
                "location": null,
                "accessibility": null,
                "status": "active",
                "language": "en_US",
                "meta_title": null,
                "meta_description": null,
                "created_at": "2014-02-15T20:02:25.000Z",
                "updated_at": "2014-02-15T20:02:25.000Z"
            },
            "user": {
                "id": 1,
                "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
                "name": "manuel_mitasch",
                "slug": "manuel_mitasch",
                "email": "manuel@cms.mine.nu",
                "image": null,
                "cover": null,
                "bio": null,
                "website": null,
                "location": null,
                "accessibility": null,
                "status": "active",
                "language": "en_US",
                "meta_title": null,
                "meta_description": null,
                "created_at": "2014-02-15T20:02:25.000Z",
                "updated_at": "2014-02-15T20:02:25.000Z"
            },
            "tags": [
                {
                    "id": 1,
                    "uuid": "406edaaf-5b1c-4199-b297-2af90b1de1a7",
                    "name": "Getting Started",
                    "slug": "getting-started",
                    "description": null,
                    "parent_id": null,
                    "meta_title": null,
                    "meta_description": null,
                    "created_at": "2014-02-15T20:02:01.000Z",
                    "created_by": 1,
                    "updated_at": "2014-02-15T20:02:01.000Z",
                    "updated_by": 1
                }
            ]
        }
    ];
    
    __exports__["default"] = posts;
  });
define("ghost/fixtures/settings", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var settings = {
        "title": "Ghost",
        "description": "Just a blogging platform.",
        "email": "ghost@tryghost.org",
        "logo": "",
        "cover": "",
        "defaultLang": "en_US",
        "postsPerPage": "6",
        "forceI18n": "true",
        "permalinks": "/:slug/",
        "activeTheme": "casper",
        "activeApps": "[]",
        "installedApps": "[]",
        "availableThemes": [
            {
                "name": "casper",
                "package": false,
                "active": true
            }
        ],
        "availableApps": []
    };
    
    __exports__["default"] = settings;
  });
define("ghost/fixtures/users", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var users = [
        {
            "id": 1,
            "uuid": "ba9c67e4-8046-4b8c-9349-0eed3cca7529",
            "name": "some-user",
            "slug": "some-user",
            "email": "some@email.com",
            "image": undefined,
            "cover": undefined,
            "bio": "Example bio",
            "website": "",
            "location": "Imaginationland",
            "accessibility": undefined,
            "status": "active",
            "language": "en_US",
            "meta_title": undefined,
            "meta_description": undefined,
            "created_at": "2014-02-15T20:02:25.000Z",
            "updated_at": "2014-03-11T14:06:43.000Z"
        }
    ];
    
    __exports__["default"] = users;
  });
define("ghost/helpers/count-words", 
  ["ghost/utils/word-count","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var count = __dependency1__["default"];

    
    var countWords = Ember.Handlebars.makeBoundHelper(function (markdown) {
        return count(markdown || '');
    });
    
    __exports__["default"] = countWords;
  });
define("ghost/helpers/format-markdown", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global Showdown, Handlebars */
    var showdown = new Showdown.converter();
    
    var formatMarkdown = Ember.Handlebars.makeBoundHelper(function (markdown) {
        return new Handlebars.SafeString(showdown.makeHtml(markdown || ''));
    });
    
    __exports__["default"] = formatMarkdown;
  });
define("ghost/helpers/format-timeago", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global moment */
    var formatTimeago = Ember.Handlebars.makeBoundHelper(function (timeago) {
        return moment(timeago).fromNow();
        // stefanpenner says cool for small number of timeagos.
        // For large numbers moment sucks => single Ember.Object based clock better
        // https://github.com/manuelmitasch/ghost-admin-ember-demo/commit/fba3ab0a59238290c85d4fa0d7c6ed1be2a8a82e#commitcomment-5396524
    });
    
    __exports__["default"] = formatTimeago;
  });
define("ghost/initializers/csrf", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = {
        name: 'csrf',
    
        initialize: function (container) {
            container.register('csrf:current', $('meta[name="csrf-param"]').attr('content'), { instantiate: false });
    
            container.injection('route', 'csrf', 'csrf:current');
            container.injection('controller', 'csrf', 'csrf:current');
        }
    };
  });
define("ghost/initializers/current-user", 
  ["ghost/models/user","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var User = __dependency1__["default"];

    
    __exports__["default"] = {
        name: 'currentUser',
    
        initialize: function (container, application) {
            var user = User.create(application.get('user') || {});
    
            container.register('user:current', user, { instantiate: false });
    
            container.injection('route', 'user', 'user:current');
            container.injection('controller', 'user', 'user:current');
        }
    };
  });
define("ghost/initializers/notifications", 
  ["ghost/utils/notifications","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Notifications = __dependency1__["default"];

    
    var registerNotifications = {
        name: 'registerNotifications',
    
        initialize: function (container, application) {
            application.register('notifications:main', Notifications);
        }
    };
    
    var injectNotifications = {
        name: 'injectNotifications',
    
        initialize: function (container, application) {
            application.inject('controller', 'notifications', 'notifications:main');
            application.inject('component', 'notifications', 'notifications:main');
            application.inject('route', 'notifications', 'notifications:main');
        }
    };
    
    __exports__.registerNotifications = registerNotifications;
    __exports__.injectNotifications = injectNotifications;
  });
define("ghost/initializers/trailing-history", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global Ember */
    
    var trailingHistory = Ember.HistoryLocation.extend({
        setURL: function (path) {
            var state = this.getState();
            path = this.formatURL(path);
            path = path.replace(/\/?$/, '/');
    
            if (state && state.path !== path) {
                this.pushState(path);
            }
        }
    });
    
    var registerTrailingLocationHistory = {
        name: 'registerTrailingLocationHistory',
    
        initialize: function (container, application) {
            application.register('location:trailing-history', trailingHistory);
        }
    };
    
    __exports__["default"] = registerTrailingLocationHistory;
  });
define("ghost/mixins/style-body", 
  ["exports"],
  function(__exports__) {
    "use strict";
    // mixin used for routes that need to set a css className on the body tag
    
    var styleBody = Ember.Mixin.create({
        activate: function () {
            var cssClasses = this.get('classNames');
    
            if (cssClasses) {
                Ember.run.schedule('afterRender', null, function () {
                    cssClasses.forEach(function (curClass) {
                        Ember.$('body').addClass(curClass);
                    });
                });
            }
        },
    
        deactivate: function () {
            var cssClasses = this.get('classNames');
    
            Ember.run.schedule('afterRender', null, function () {
                cssClasses.forEach(function (curClass) {
                    Ember.$('body').removeClass(curClass);
                });
            });
        }
    });
    
    __exports__["default"] = styleBody;
  });
define("ghost/models/base", 
  ["exports"],
  function(__exports__) {
    "use strict";
    
    function ghostPaths() {
        var path = window.location.pathname,
            subdir = path.substr(0, path.search('/ghost/'));
    
        return {
            subdir: subdir,
            adminRoot: subdir + '/ghost',
            apiRoot: subdir + '/ghost/api/v0.1'
        };
    }
    
    var BaseModel = Ember.Object.extend({
    
        fetch: function () {
            return ic.ajax.request(this.url, {
                type: 'GET'
            });
        },
    
        save: function () {
            return ic.ajax.request(this.url, {
                type: 'PUT',
                dataType: 'json',
                // @TODO: This is passing _oldWillDestory and _willDestroy and should not.
                data: JSON.stringify(this.getProperties(Ember.keys(this)))
            });
        }
    });
    
    BaseModel.apiRoot = ghostPaths().apiRoot;
    BaseModel.subdir = ghostPaths().subdir;
    BaseModel.adminRoot = ghostPaths().adminRoot;
    
    __exports__["default"] = BaseModel;
  });
define("ghost/models/post", 
  ["ghost/models/base","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var BaseModel = __dependency1__["default"];

    
    var PostModel = BaseModel.extend({
        url: BaseModel.apiRoot + '/posts/',
    
        generateSlug: function () {
            // @TODO Make this request use this.get('title') once we're an actual user
            var url = this.get('url') + 'slug/' + encodeURIComponent('test title') + '/';
            return ic.ajax.request(url, {
                type: 'GET'
            });
        },
    
        save: function (properties) {
            var url = this.url,
                self = this,
                type,
                validationErrors = this.validate();
    
            if (validationErrors.length) {
                return Ember.RSVP.Promise(function (resolve, reject) {
                    return reject(validationErrors);
                });
            }
    
            //If specific properties are being saved,
            //this is an edit. Otherwise, it's an add.
            if (properties && properties.length > 0) {
                type = 'PUT';
                url += this.get('id');
            } else {
                type = 'POST';
                properties = Ember.keys(this);
            }
    
            return ic.ajax.request(url, {
                type: type,
                data: this.getProperties(properties)
            }).then(function (model) {
                return self.setProperties(model);
            });
        },
        validate: function () {
            var validationErrors = [];
    
            if (!(this.get('title') && this.get('title').length)) {
                validationErrors.push({
                    message: "You must specify a title for the post."
                });
            }
    
            return validationErrors;
        }
    });
    
    __exports__["default"] = PostModel;
  });
define("ghost/models/settings", 
  ["ghost/models/base","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var validator = window.validator;
    
    var BaseModel = __dependency1__["default"];

    
    var SettingsModel = BaseModel.extend({
        url: BaseModel.apiRoot + '/settings/?type=blog,theme,app',
    
        title: null,
        description: null,
        email: null,
        logo: null,
        cover: null,
        defaultLang: null,
        postsPerPage: null,
        forceI18n: null,
        permalinks: null,
        activeTheme: null,
        activeApps: null,
        installedApps: null,
        availableThemes: null,
        availableApps: null,
    
        validate: function () {
            var validationErrors = [],
                postsPerPage;
    
            if (!validator.isLength(this.get('title'), 0, 150)) {
                validationErrors.push({message: "Title is too long", el: 'title'});
            }
    
            if (!validator.isLength(this.get('description'), 0, 200)) {
                validationErrors.push({message: "Description is too long", el: 'description'});
            }
    
            if (!validator.isEmail(this.get('email')) || !validator.isLength(this.get('email'), 0, 254)) {
                validationErrors.push({message: "Please supply a valid email address", el: 'email'});
            }
    
            postsPerPage = this.get('postsPerPage');
            if (!validator.isInt(postsPerPage) || postsPerPage > 1000) {
                validationErrors.push({message: "Please use a number less than 1000", el: 'postsPerPage'});
            }
    
            if (!validator.isInt(postsPerPage) || postsPerPage < 0) {
                validationErrors.push({message: "Please use a number greater than 0", el: 'postsPerPage'});
            }
    
            return validationErrors;
        },
        exportPath: BaseModel.adminRoot + '/export/',
        importFrom: function (file) {
            var formData = new FormData();
            formData.append('importfile', file);
            return ic.ajax.request(BaseModel.apiRoot + '/db/', {
                headers: {
                    'X-CSRF-Token': $('meta[name="csrf-param"]').attr('content')
                },
                type: 'POST',
                data: formData,
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false
            });
        },
        sendTestEmail: function () {
            return ic.ajax.request(BaseModel.apiRoot + '/mail/test/', {
                type: 'POST',
                headers: {
                    'X-CSRF-Token': $('meta[name="csrf-param"]').attr('content')
                }
            });
        }
    });
    
    __exports__["default"] = SettingsModel;
  });
define("ghost/models/user", 
  ["ghost/models/base","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var BaseModel = __dependency1__["default"];

    
    var UserModel = BaseModel.extend({
        id: null,
        name: null,
        image: null,
    
        isSignedIn: Ember.computed.bool('id'),
    
        url: BaseModel.apiRoot + '/users/me/',
        forgottenUrl: BaseModel.apiRoot + '/forgotten/',
        resetUrl: BaseModel.apiRoot + '/reset/',
    
        save: function () {
            return ic.ajax.request(this.url, {
                type: 'POST',
                data: this.getProperties(Ember.keys(this))
            });
        },
    
        validate: function () {
            var validationErrors = [];
    
            if (!validator.isLength(this.get('name'), 0, 150)) {
                validationErrors.push({message: "Name is too long"});
            }
    
            if (!validator.isLength(this.get('bio'), 0, 200)) {
                validationErrors.push({message: "Bio is too long"});
            }
    
            if (!validator.isEmail(this.get('email'))) {
                validationErrors.push({message: "Please supply a valid email address"});
            }
    
            if (!validator.isLength(this.get('location'), 0, 150)) {
                validationErrors.push({message: "Location is too long"});
            }
    
            if (this.get('website').length) {
                if (!validator.isURL(this.get('website'), { protocols: ['http', 'https'], require_protocol: true }) ||
                    !validator.isLength(this.get('website'), 0, 2000)) {
                    validationErrors.push({message: "Please use a valid url"});
                }
            }
    
            if (validationErrors.length > 0) {
                this.set('isValid', false);
            } else {
                this.set('isValid', true);
            }
    
            this.set('errors', validationErrors);
    
            return this;
        },
    
        saveNewPassword: function (password) {
            return ic.ajax.request(BaseModel.subdir + '/ghost/changepw/', {
                type: 'POST',
                data: password
            });
        },
    
        validatePassword: function (password) {
            var validationErrors = [];
    
            if (!validator.equals(password.newPassword, password.ne2Password)) {
                validationErrors.push("Your new passwords do not match");
            }
    
            if (!validator.isLength(password.newPassword, 8)) {
                validationErrors.push("Your password is not long enough. It must be at least 8 characters long.");
            }
    
            if (validationErrors.length > 0) {
                this.set('passwordIsValid', false);
            } else {
                this.set('passwordIsValid', true);
            }
    
            this.set('passwordErrors', validationErrors);
    
            return this;
        },
    
        fetchForgottenPasswordFor: function (email) {
            var self = this;
            return new Ember.RSVP.Promise(function (resolve, reject) {
                if (!validator.isEmail(email)) {
                    reject(new Error('Please enter a correct email address.'));
                } else {
                    resolve(ic.ajax.request(self.forgottenUrl, {
                        type: 'POST',
                        headers: {
                            // @TODO Find a more proper way to do this.
                            'X-CSRF-Token': $('meta[name="csrf-param"]').attr('content')
                        },
                        data: {
                            email: email
                        }
                    }));
                }
            });
        },
    
        resetPassword: function (passwords, token) {
            var self = this;
            return new Ember.RSVP.Promise(function (resolve, reject) {
                if (!self.validatePassword(passwords).get('passwordIsValid')) {
                    reject(new Error('Errors found! ' + JSON.stringify(self.get('passwordErrors'))));
                } else {
                    resolve(ic.ajax.request(self.resetUrl, {
                        type: 'POST',
                        headers: {
                            // @TODO: find a more proper way to do this.
                            'X-CSRF-Token': $('meta[name="csrf-param"]').attr('content')
                        },
                        data: {
                            newpassword: passwords.newPassword,
                            ne2password: passwords.ne2Password,
                            token: token
                        }
                    }));
                }
            });
        }
    });
    
    __exports__["default"] = UserModel;
  });
define("ghost/router", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*global Ember */
    
    // ensure we don't share routes between all Router instances
    var Router = Ember.Router.extend();
    
    Router.reopen({
        location: 'trailing-history', // use HTML5 History API instead of hash-tag based URLs
        rootURL: '/ghost/ember/' // admin interface lives under sub-directory /ghost
    });
    
    Router.map(function () {
        this.route('signin');
        this.route('signup');
        this.route('forgotten');
        this.route('reset', { path: '/reset/:token' });
        this.resource('posts', { path: '/' }, function () {
            this.route('post', { path: ':post_id' });
        });
        this.resource('editor', { path: '/editor/:post_id' });
        this.route('new', { path: '/editor' });
        this.resource('settings', function () {
            this.route('general');
            this.route('user');
            this.route('apps');
        });
        this.route('debug');
        //Redirect legacy content to posts
        this.route('content');
    });
    
    __exports__["default"] = Router;
  });
define("ghost/routes/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ApplicationRoute = Ember.Route.extend({
        actions: {
            signedIn: function (user) {
                this.container.lookup('user:current').setProperties(user);
            },
    
            signedOut: function () {
                this.container.lookup('user:current').setProperties({
                    id: null,
                    name: null,
                    image: null
                });
            },
    
            openModal: function (modalName, model) {
                modalName = 'modals/' + modalName;
                // We don't always require a modal to have a controller
                // so we're skipping asserting if one exists
                if (this.controllerFor(modalName, true)) {
                    this.controllerFor(modalName).set('model', model);
                }
                return this.render(modalName, {
                    into: 'application',
                    outlet: 'modal'
                });
            },
    
            closeModal: function () {
                return this.disconnectOutlet({
                    outlet: 'modal',
                    parentView: 'application'
                });
            },
    
            handleErrors: function (errors) {
                this.notifications.clear();
                errors.forEach(function (errorObj) {
                    this.notifications.showError(errorObj.message || errorObj);
    
                    if (errorObj.hasOwnProperty('el')) {
                        errorObj.el.addClass('input-error');
                    }
                });
            }
        }
    });
    
    __exports__["default"] = ApplicationRoute;
  });
define("ghost/routes/authenticated", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var AuthenticatedRoute = Ember.Route.extend({
        beforeModel: function () {
            if (!this.get('user.isSignedIn')) {
                this.notifications.showError('Please sign in');
    
                this.transitionTo('signin');
            }
        },
    
        actions: {
            error: function (error) {
                if (error.jqXHR.status === 401) {
                    this.transitionTo('signin');
                }
            }
        }
    });
    
    __exports__["default"] = AuthenticatedRoute;
  });
define("ghost/routes/content", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ContentRoute = Ember.Route.extend({
        beforeModel: function () {
            this.transitionTo('posts');
        }
    });
    
    __exports__["default"] = ContentRoute;
  });
define("ghost/routes/debug", 
  ["ghost/mixins/style-body","ghost/models/settings","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];

    var SettingsModel = __dependency2__["default"];

    
    var settingsModel = SettingsModel.create();
    
    var DebugRoute = Ember.Route.extend(styleBody, {
        classNames: ['settings'],
        model: function () {
            return settingsModel;
        }
    });
    
    __exports__["default"] = DebugRoute;
  });
define("ghost/routes/editor", 
  ["ghost/utils/ajax","ghost/mixins/style-body","ghost/routes/authenticated","ghost/models/post","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var ajax = __dependency1__["default"];

    var styleBody = __dependency2__["default"];

    var AuthenticatedRoute = __dependency3__["default"];

    var Post = __dependency4__["default"];

    var EditorRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['editor'],
        controllerName: 'posts.post',
        model: function (params) {
            return ajax('/ghost/api/v0.1/posts/' + params.post_id).then(function (post) {
                return Post.create(post);
            });
        }
    });
    
    __exports__["default"] = EditorRoute;
  });
define("ghost/routes/forgotten", 
  ["ghost/mixins/style-body","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];

    
    var ForgottenRoute = Ember.Route.extend(styleBody, {
        classNames: ['ghost-forgotten']
    });
    
    __exports__["default"] = ForgottenRoute;
  });
define("ghost/routes/new", 
  ["ghost/mixins/style-body","ghost/routes/authenticated","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];

    var AuthenticatedRoute = __dependency2__["default"];

    
    var NewRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['editor'],
    
        renderTemplate: function () {
            this.render('editor');
        }
    });
    
    __exports__["default"] = NewRoute;
  });
define("ghost/routes/posts", 
  ["ghost/utils/ajax","ghost/mixins/style-body","ghost/routes/authenticated","ghost/models/post","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var ajax = __dependency1__["default"];

    var styleBody = __dependency2__["default"];

    var AuthenticatedRoute = __dependency3__["default"];

    var Post = __dependency4__["default"];

    
    var PostsRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['manage'],
    
        model: function () {
            return ajax('/ghost/api/v0.1/posts').then(function (response) {
                return response.posts.map(function (post) {
                    return Post.create(post);
                });
            });
        },
    
        actions: {
            openEditor: function (post) {
                this.transitionTo('editor', post);
            }
        }
    });
    
    __exports__["default"] = PostsRoute;
  });
define("ghost/routes/posts/index", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var PostsIndexRoute = Ember.Route.extend({
        // redirect to first post subroute
        redirect: function () {
            var firstPost = (this.modelFor('posts') || []).get('firstObject');
    
            if (firstPost) {
                this.transitionTo('posts.post', firstPost);
            }
        }
    });
    
    __exports__["default"] = PostsIndexRoute;
  });
define("ghost/routes/posts/post", 
  ["ghost/models/post","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /*global ajax */
    var Post = __dependency1__["default"];

    var PostsPostRoute = Ember.Route.extend({
        model: function (params) {
            return ajax('/ghost/api/v0.1/posts/' + params.post_id).then(function (post) {
                return Post.create(post);
            });
        }
    });
    
    __exports__["default"] = PostsPostRoute;
  });
define("ghost/routes/reset", 
  ["ghost/mixins/style-body","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];

    
    var ResetRoute = Ember.Route.extend(styleBody, {
        classNames: ['ghost-reset'],
        setupController: function (controller, params) {
            controller.token = params.token;
        }
    });
    
    __exports__["default"] = ResetRoute;
  });
define("ghost/routes/settings", 
  ["ghost/mixins/style-body","ghost/routes/authenticated","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];

    var AuthenticatedRoute = __dependency2__["default"];

    
    var SettingsRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['settings']
    });
    
    __exports__["default"] = SettingsRoute;
  });
define("ghost/routes/settings/general", 
  ["ghost/utils/ajax","ghost/routes/authenticated","ghost/models/settings","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var ajax = __dependency1__["default"];

    var AuthenticatedRoute = __dependency2__["default"];

    var SettingsModel = __dependency3__["default"];

    
    var SettingsGeneralRoute = AuthenticatedRoute.extend({
        model: function () {
            return ajax('/ghost/api/v0.1/settings/?type=blog,theme,app').then(function (resp) {
                return SettingsModel.create(resp);
            });
        }
    });
    
    __exports__["default"] = SettingsGeneralRoute;
  });
define("ghost/routes/settings/index", 
  ["ghost/routes/authenticated","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var AuthenticatedRoute = __dependency1__["default"];

    
    var SettingsIndexRoute = AuthenticatedRoute.extend({
        // redirect to general tab
        redirect: function () {
            this.transitionTo('settings.general');
        }
    });
    
    __exports__["default"] = SettingsIndexRoute;
  });
define("ghost/routes/signin", 
  ["ghost/utils/ajax","ghost/mixins/style-body","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var ajax = __dependency1__["default"];

    var styleBody = __dependency2__["default"];

    
    var isEmpty = Ember.isEmpty;
    
    var SigninRoute = Ember.Route.extend(styleBody, {
        classNames: ['ghost-login'],
    
        actions: {
            login: function () {
                var self = this,
                    controller = this.get('controller'),
                    data = controller.getProperties('email', 'password');
    
                if (!isEmpty(data.email) && !isEmpty(data.password)) {
    
                    ajax({
                        url: '/ghost/signin/',
                        type: 'POST',
                        headers: {
                            "X-CSRF-Token": this.get('csrf')
                        },
                        data: data
                    }).then(
                        function (response) {
                            self.send('signedIn', response.userData);
    
                            self.notifications.clear();
    
                            self.transitionTo('posts');
                        }, function (resp) {
                            // This path is ridiculous, should be a helper in notifications; e.g. notifications.showAPIError
                            self.notifications.showAPIError(resp, 'There was a problem logging in, please try again.');
                        }
                    );
                } else {
                    this.notifications.clear();
    
                    this.notifications.showError('Must enter email + password');
                }
            }
        }
    });
    
    __exports__["default"] = SigninRoute;
  });
define("ghost/routes/signup", 
  ["ghost/mixins/style-body","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];

    
    var SignupRoute = Ember.Route.extend(styleBody, {
        classNames: ['ghost-signup']
    });
    
    __exports__["default"] = SignupRoute;
  });
define("ghost/utils/ajax", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global ic */
    __exports__["default"] = window.ajax = function () {
        return ic.ajax.request.apply(null, arguments);
    };
  });
define("ghost/utils/date-formatting", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global moment */
    var parseDateFormats = ["DD MMM YY HH:mm",
                            "DD MMM YYYY HH:mm",
                            "DD/MM/YY HH:mm",
                            "DD/MM/YYYY HH:mm",
                            "DD-MM-YY HH:mm",
                            "DD-MM-YYYY HH:mm",
                            "YYYY-MM-DD HH:mm"],
        displayDateFormat = 'DD MMM YY @ HH:mm';
    
    //Parses a string to a Moment
    var parseDateString = function (value) {
        return value ? moment(value, parseDateFormats) : '';
    };
    
    //Formats a Date or Moment
    var formatDate = function (value) {
        return value ? moment(value).format(displayDateFormat) : '';
    };
    
    __exports__.parseDateString = parseDateString;
    __exports__.formatDate = formatDate;
  });
define("ghost/utils/link-view", 
  [],
  function() {
    "use strict";
    Ember.LinkView.reopen({
        active: Ember.computed('resolvedParams', 'routeArgs', function () {
            var isActive = this._super();
    
            Ember.set(this, 'alternateActive', isActive);
    
            return isActive;
        })
    });
  });
define("ghost/utils/notifications", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var Notifications = Ember.ArrayProxy.extend({
        content: Ember.A(),
        timeout: 3000,
        pushObject: function (object) {
            object.typeClass = 'notification-' + object.type;
            // This should be somewhere else.
            if (object.type === 'success') {
                object.typeClass = object.typeClass + " notification-passive";
            }
            this._super(object);
        },
        showError: function (message) {
            this.pushObject({
                type: 'error',
                message: message
            });
        },
        showErrors: function (errors) {
            for (var i = 0; i < errors.length; i += 1) {
                this.showError(errors[i].message || errors[i]);
            }
        },
        showAPIError: function (resp, defaultErrorText) {
            defaultErrorText = defaultErrorText || 'There was a problem on the server, please try again.';
    
            if (resp && resp.jqXHR && resp.jqXHR.responseJSON && resp.jqXHR.responseJSON.error) {
                this.showError(resp.jqXHR.responseJSON.error);
            } else {
                this.showError(defaultErrorText);
            }
        },
        showInfo: function (message) {
            this.pushObject({
                type: 'info',
                message: message
            });
        },
        showSuccess: function (message) {
            this.pushObject({
                type: 'success',
                message: message
            });
        },
        showWarn: function (message) {
            this.pushObject({
                type: 'warn',
                message: message
            });
        }
    });
    
    __exports__["default"] = Notifications;
  });
define("ghost/utils/text-field", 
  [],
  function() {
    "use strict";
    Ember.TextField.reopen({
        attributeBindings: ['autofocus']
    });
  });
define("ghost/utils/word-count", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = function (s) {
        s = s.replace(/(^\s*)|(\s*$)/gi, ""); // exclude  start and end white-space
        s = s.replace(/[ ]{2,}/gi, " "); // 2 or more space to 1
        s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
        return s.split(' ').length;
    }
  });
define("ghost/views/editor", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.View.extend({
        scrollPosition: 0  // percentage of scroll position
    });
  });
define("ghost/views/item-view", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.View.extend({
        classNameBindings: ['active'],
    
        active: function () {
            return this.get('childViews.firstObject.active');
        }.property('childViews.firstObject.active')
    });
  });
define("ghost/views/post-item-view", 
  ["ghost/views/item-view","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var itemView = __dependency1__["default"];

    
    var PostItemView = itemView.extend({
        openEditor: function () {
            this.get('controller').send('openEditor', this.get('controller.model'));  // send action to handle transition to editor route
        }.on("doubleClick")
    });
    
    __exports__["default"] = PostItemView;
  });
define("ghost/views/post-settings-menu-view", 
  ["ghost/utils/date-formatting","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /* global moment */
    var formatDate = __dependency1__.formatDate;

    
    var PostSettingsMenuView = Ember.View.extend({
        templateName: 'post-settings-menu',
        classNames: ['post-settings-menu', 'menu-drop-right', 'overlay'],
        classNameBindings: ['controller.isEditingSettings::hidden'],
        publishedAtBinding: Ember.Binding.oneWay('controller.publishedAt'),
        click: function (event) {
            //Stop click propagation to prevent window closing
            event.stopPropagation();
        },
        datePlaceholder: function () {
            return formatDate(moment());
        }.property('controller.publishedAt')
    });
    
    __exports__["default"] = PostSettingsMenuView;
  });
//# sourceMappingURL=ghost-dev-ember.js.map