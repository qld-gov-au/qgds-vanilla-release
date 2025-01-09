"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/prismjs/prism.js
  var require_prism = __commonJS({
    "node_modules/prismjs/prism.js"(exports, module2) {
      var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(_self2) {
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _ = {
          /**
           * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
           * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
           * additional languages or plugins yourself.
           *
           * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
           *
           * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.manual = true;
           * // add a new <script> to load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          manual: _self2.Prism && _self2.Prism.manual,
          /**
           * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
           * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
           * own worker, you don't want it to do this.
           *
           * By setting this value to `true`, Prism will not add its own listeners to the worker.
           *
           * You obviously have to change this value before Prism executes. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.disableWorkerMessageHandler = true;
           * // Load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
          /**
           * A namespace for utility methods.
           *
           * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
           * change or disappear at any time.
           *
           * @namespace
           * @memberof Prism
           */
          util: {
            encode: function encode(tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, encode(tokens.content), tokens.alias);
              } else if (Array.isArray(tokens)) {
                return tokens.map(encode);
              } else {
                return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              }
            },
            /**
             * Returns the name of the type of the given value.
             *
             * @param {any} o
             * @returns {string}
             * @example
             * type(null)      === 'Null'
             * type(undefined) === 'Undefined'
             * type(123)       === 'Number'
             * type('foo')     === 'String'
             * type(true)      === 'Boolean'
             * type([1, 2])    === 'Array'
             * type({})        === 'Object'
             * type(String)    === 'Function'
             * type(/abc+/)    === 'RegExp'
             */
            type: function(o) {
              return Object.prototype.toString.call(o).slice(8, -1);
            },
            /**
             * Returns a unique number for the given object. Later calls will still return the same number.
             *
             * @param {Object} obj
             * @returns {number}
             */
            objId: function(obj) {
              if (!obj["__id"]) {
                Object.defineProperty(obj, "__id", { value: ++uniqueId });
              }
              return obj["__id"];
            },
            /**
             * Creates a deep clone of the given object.
             *
             * The main intended use of this function is to clone language definitions.
             *
             * @param {T} o
             * @param {Record<number, any>} [visited]
             * @returns {T}
             * @template T
             */
            clone: function deepClone(o, visited) {
              visited = visited || {};
              var clone;
              var id;
              switch (_.util.type(o)) {
                case "Object":
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = /** @type {Record<string, any>} */
                  {};
                  visited[id] = clone;
                  for (var key in o) {
                    if (o.hasOwnProperty(key)) {
                      clone[key] = deepClone(o[key], visited);
                    }
                  }
                  return (
                    /** @type {any} */
                    clone
                  );
                case "Array":
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = [];
                  visited[id] = clone;
                  /** @type {Array} */
                  /** @type {any} */
                  o.forEach(function(v, i) {
                    clone[i] = deepClone(v, visited);
                  });
                  return (
                    /** @type {any} */
                    clone
                  );
                default:
                  return o;
              }
            },
            /**
             * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
             *
             * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
             *
             * @param {Element} element
             * @returns {string}
             */
            getLanguage: function(element) {
              while (element) {
                var m = lang.exec(element.className);
                if (m) {
                  return m[1].toLowerCase();
                }
                element = element.parentElement;
              }
              return "none";
            },
            /**
             * Sets the Prism `language-xxxx` class of the given element.
             *
             * @param {Element} element
             * @param {string} language
             * @returns {void}
             */
            setLanguage: function(element, language) {
              element.className = element.className.replace(RegExp(lang, "gi"), "");
              element.classList.add("language-" + language);
            },
            /**
             * Returns the script element that is currently executing.
             *
             * This does __not__ work for line script element.
             *
             * @returns {HTMLScriptElement | null}
             */
            currentScript: function() {
              if (typeof document === "undefined") {
                return null;
              }
              if ("currentScript" in document && 1 < 2) {
                return (
                  /** @type {any} */
                  document.currentScript
                );
              }
              try {
                throw new Error();
              } catch (err) {
                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                if (src) {
                  var scripts = document.getElementsByTagName("script");
                  for (var i in scripts) {
                    if (scripts[i].src == src) {
                      return scripts[i];
                    }
                  }
                }
                return null;
              }
            },
            /**
             * Returns whether a given class is active for `element`.
             *
             * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
             * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
             * given class is just the given class with a `no-` prefix.
             *
             * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
             * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
             * ancestors have the given class or the negated version of it, then the default activation will be returned.
             *
             * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
             * version of it, the class is considered active.
             *
             * @param {Element} element
             * @param {string} className
             * @param {boolean} [defaultActivation=false]
             * @returns {boolean}
             */
            isActive: function(element, className, defaultActivation) {
              var no = "no-" + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no)) {
                  return false;
                }
                element = element.parentElement;
              }
              return !!defaultActivation;
            }
          },
          /**
           * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
           *
           * @namespace
           * @memberof Prism
           * @public
           */
          languages: {
            /**
             * The grammar for plain, unformatted text.
             */
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            /**
             * Creates a deep copy of the language with the given id and appends the given tokens.
             *
             * If a token in `redef` also appears in the copied language, then the existing token in the copied language
             * will be overwritten at its original position.
             *
             * ## Best practices
             *
             * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
             * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
             * understand the language definition because, normally, the order of tokens matters in Prism grammars.
             *
             * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
             * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
             *
             * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
             * @param {Grammar} redef The new tokens to append.
             * @returns {Grammar} The new language created.
             * @public
             * @example
             * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
             *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
             *     // at its original position
             *     'comment': { ... },
             *     // CSS doesn't have a 'color' token, so this token will be appended
             *     'color': /\b(?:red|green|blue)\b/
             * });
             */
            extend: function(id, redef) {
              var lang2 = _.util.clone(_.languages[id]);
              for (var key in redef) {
                lang2[key] = redef[key];
              }
              return lang2;
            },
            /**
             * Inserts tokens _before_ another token in a language definition or any other grammar.
             *
             * ## Usage
             *
             * This helper method makes it easy to modify existing languages. For example, the CSS language definition
             * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
             * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
             * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
             * this:
             *
             * ```js
             * Prism.languages.markup.style = {
             *     // token
             * };
             * ```
             *
             * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
             * before existing tokens. For the CSS example above, you would use it like this:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'cdata', {
             *     'style': {
             *         // token
             *     }
             * });
             * ```
             *
             * ## Special cases
             *
             * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
             * will be ignored.
             *
             * This behavior can be used to insert tokens after `before`:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'comment', {
             *     'comment': Prism.languages.markup.comment,
             *     // tokens after 'comment'
             * });
             * ```
             *
             * ## Limitations
             *
             * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
             * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
             * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
             * deleting properties which is necessary to insert at arbitrary positions.
             *
             * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
             * Instead, it will create a new object and replace all references to the target object with the new one. This
             * can be done without temporarily deleting properties, so the iteration order is well-defined.
             *
             * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
             * you hold the target object in a variable, then the value of the variable will not change.
             *
             * ```js
             * var oldMarkup = Prism.languages.markup;
             * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
             *
             * assert(oldMarkup !== Prism.languages.markup);
             * assert(newMarkup === Prism.languages.markup);
             * ```
             *
             * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
             * object to be modified.
             * @param {string} before The key to insert before.
             * @param {Grammar} insert An object containing the key-value pairs to be inserted.
             * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
             * object to be modified.
             *
             * Defaults to `Prism.languages`.
             * @returns {Grammar} The new grammar object.
             * @public
             */
            insertBefore: function(inside, before, insert, root) {
              root = root || /** @type {any} */
              _.languages;
              var grammar = root[inside];
              var ret = {};
              for (var token in grammar) {
                if (grammar.hasOwnProperty(token)) {
                  if (token == before) {
                    for (var newToken in insert) {
                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }
                  if (!insert.hasOwnProperty(token)) {
                    ret[token] = grammar[token];
                  }
                }
              }
              var old = root[inside];
              root[inside] = ret;
              _.languages.DFS(_.languages, function(key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
              visited = visited || {};
              var objId = _.util.objId;
              for (var i in o) {
                if (o.hasOwnProperty(i)) {
                  callback.call(o, i, o[i], type || i);
                  var property = o[i];
                  var propertyType = _.util.type(property);
                  if (propertyType === "Object" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === "Array" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i, visited);
                  }
                }
              }
            }
          },
          plugins: {},
          /**
           * This is the most high-level function in Prism’s API.
           * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
           * each one of them.
           *
           * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
           *
           * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
           * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
           * @memberof Prism
           * @public
           */
          highlightAll: function(async, callback) {
            _.highlightAllUnder(document, async, callback);
          },
          /**
           * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
           * {@link Prism.highlightElement} on each one of them.
           *
           * The following hooks will be run:
           * 1. `before-highlightall`
           * 2. `before-all-elements-highlight`
           * 3. All hooks of {@link Prism.highlightElement} for each element.
           *
           * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
           * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
           * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
           * @memberof Prism
           * @public
           */
          highlightAllUnder: function(container, async, callback) {
            var env = {
              callback,
              container,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run("before-highlightall", env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _.hooks.run("before-all-elements-highlight", env);
            for (var i = 0, element; element = env.elements[i++]; ) {
              _.highlightElement(element, async === true, env.callback);
            }
          },
          /**
           * Highlights the code inside a single element.
           *
           * The following hooks will be run:
           * 1. `before-sanity-check`
           * 2. `before-highlight`
           * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
           * 4. `before-insert`
           * 5. `after-highlight`
           * 6. `complete`
           *
           * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
           * the element's language.
           *
           * @param {Element} element The element containing the code.
           * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
           * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
           * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
           * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
           *
           * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
           * asynchronous highlighting to work. You can build your own bundle on the
           * [Download page](https://prismjs.com/download.html).
           * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
           * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
           * @memberof Prism
           * @public
           */
          highlightElement: function(element, async, callback) {
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];
            _.util.setLanguage(element, language);
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") {
              _.util.setLanguage(parent, language);
            }
            var code = element.textContent;
            var env = {
              element,
              language,
              grammar,
              code
            };
            function insertHighlightedCode(highlightedCode) {
              env.highlightedCode = highlightedCode;
              _.hooks.run("before-insert", env);
              env.element.innerHTML = env.highlightedCode;
              _.hooks.run("after-highlight", env);
              _.hooks.run("complete", env);
              callback && callback.call(env.element);
            }
            _.hooks.run("before-sanity-check", env);
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
              parent.setAttribute("tabindex", "0");
            }
            if (!env.code) {
              _.hooks.run("complete", env);
              callback && callback.call(env.element);
              return;
            }
            _.hooks.run("before-highlight", env);
            if (!env.grammar) {
              insertHighlightedCode(_.util.encode(env.code));
              return;
            }
            if (async && _self2.Worker) {
              var worker = new Worker(_.filename);
              worker.onmessage = function(evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
            }
          },
          /**
           * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
           * and the language definitions to use, and returns a string with the HTML produced.
           *
           * The following hooks will be run:
           * 1. `before-tokenize`
           * 2. `after-tokenize`
           * 3. `wrap`: On each {@link Token}.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @param {string} language The name of the language definition passed to `grammar`.
           * @returns {string} The highlighted HTML.
           * @memberof Prism
           * @public
           * @example
           * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
           */
          highlight: function(text, grammar, language) {
            var env = {
              code: text,
              grammar,
              language
            };
            _.hooks.run("before-tokenize", env);
            if (!env.grammar) {
              throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run("after-tokenize", env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
          },
          /**
           * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
           * and the language definitions to use, and returns an array with the tokenized code.
           *
           * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
           *
           * This method could be useful in other contexts as well, as a very crude parser.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @returns {TokenStream} An array of strings and tokens, a token stream.
           * @memberof Prism
           * @public
           * @example
           * let code = `var foo = 0;`;
           * let tokens = Prism.tokenize(code, Prism.languages.javascript);
           * tokens.forEach(token => {
           *     if (token instanceof Prism.Token && token.type === 'number') {
           *         console.log(`Found numeric literal: ${token.content}`);
           *     }
           * });
           */
          tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }
              delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
          },
          /**
           * @namespace
           * @memberof Prism
           * @public
           */
          hooks: {
            all: {},
            /**
             * Adds the given callback to the list of callbacks for the given hook.
             *
             * The callback will be invoked when the hook it is registered for is run.
             * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
             *
             * One callback function can be registered to multiple hooks and the same hook multiple times.
             *
             * @param {string} name The name of the hook.
             * @param {HookCallback} callback The callback function which is given environment variables.
             * @public
             */
            add: function(name, callback) {
              var hooks = _.hooks.all;
              hooks[name] = hooks[name] || [];
              hooks[name].push(callback);
            },
            /**
             * Runs a hook invoking all registered callbacks with the given environment variables.
             *
             * Callbacks will be invoked synchronously and in the order in which they were registered.
             *
             * @param {string} name The name of the hook.
             * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
             * @public
             */
            run: function(name, env) {
              var callbacks = _.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i = 0, callback; callback = callbacks[i++]; ) {
                callback(env);
              }
            }
          },
          Token
        };
        _self2.Prism = _;
        function Token(type, content, alias, matchedStr) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          this.length = (matchedStr || "").length | 0;
        }
        Token.stringify = function stringify(o, language) {
          if (typeof o == "string") {
            return o;
          }
          if (Array.isArray(o)) {
            var s = "";
            o.forEach(function(e) {
              s += stringify(e, language);
            });
            return s;
          }
          var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: "span",
            classes: ["token", o.type],
            attributes: {},
            language
          };
          var aliases = o.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env.classes, aliases);
            } else {
              env.classes.push(aliases);
            }
          }
          _.hooks.run("wrap", env);
          var attributes = "";
          for (var name in env.attributes) {
            attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
          }
          return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
        };
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match = pattern.exec(text);
          if (match && lookbehind && match[1]) {
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
          }
          return match;
        }
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];
            for (var j = 0; j < patterns.length; ++j) {
              if (rematch && rematch.cause == token + "," + j) {
                return;
              }
              var patternObj = patterns[j];
              var inside = patternObj.inside;
              var lookbehind = !!patternObj.lookbehind;
              var greedy = !!patternObj.greedy;
              var alias = patternObj.alias;
              if (greedy && !patternObj.pattern.global) {
                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
              }
              var pattern = patternObj.pattern || patternObj;
              for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                if (rematch && pos >= rematch.reach) {
                  break;
                }
                var str = currentNode.value;
                if (tokenList.length > text.length) {
                  return;
                }
                if (str instanceof Token) {
                  continue;
                }
                var removeCount = 1;
                var match;
                if (greedy) {
                  match = matchPattern(pattern, pos, text, lookbehind);
                  if (!match || match.index >= text.length) {
                    break;
                  }
                  var from = match.index;
                  var to = match.index + match[0].length;
                  var p = pos;
                  p += currentNode.value.length;
                  while (from >= p) {
                    currentNode = currentNode.next;
                    p += currentNode.value.length;
                  }
                  p -= currentNode.value.length;
                  pos = p;
                  if (currentNode.value instanceof Token) {
                    continue;
                  }
                  for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                    removeCount++;
                    p += k.value.length;
                  }
                  removeCount--;
                  str = text.slice(pos, p);
                  match.index -= pos;
                } else {
                  match = matchPattern(pattern, 0, str, lookbehind);
                  if (!match) {
                    continue;
                  }
                }
                var from = match.index;
                var matchStr = match[0];
                var before = str.slice(0, from);
                var after = str.slice(from + matchStr.length);
                var reach = pos + str.length;
                if (rematch && reach > rematch.reach) {
                  rematch.reach = reach;
                }
                var removeFrom = currentNode.prev;
                if (before) {
                  removeFrom = addAfter(tokenList, removeFrom, before);
                  pos += before.length;
                }
                removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  var nestedRematch = {
                    cause: token + "," + j,
                    reach
                  };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                  if (rematch && nestedRematch.reach > rematch.reach) {
                    rematch.reach = nestedRematch.reach;
                  }
                }
              }
            }
          }
        }
        function LinkedList() {
          var head = { value: null, prev: null, next: null };
          var tail = { value: null, prev: head, next: null };
          head.next = tail;
          this.head = head;
          this.tail = tail;
          this.length = 0;
        }
        function addAfter(list, node, value) {
          var next = node.next;
          var newNode = { value, prev: node, next };
          node.next = newNode;
          next.prev = newNode;
          list.length++;
          return newNode;
        }
        function removeRange(list, node, count) {
          var next = node.next;
          for (var i = 0; i < count && next !== list.tail; i++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i;
        }
        function toArray(list) {
          var array = [];
          var node = list.head.next;
          while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
          }
          return array;
        }
        if (!_self2.document) {
          if (!_self2.addEventListener) {
            return _;
          }
          if (!_.disableWorkerMessageHandler) {
            _self2.addEventListener("message", function(evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
              if (immediateClose) {
                _self2.close();
              }
            }, false);
          }
          return _;
        }
        var script = _.util.currentScript();
        if (script) {
          _.filename = script.src;
          if (script.hasAttribute("data-manual")) {
            _.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_.manual) {
            _.highlightAll();
          }
        }
        if (!_.manual) {
          var readyState = document.readyState;
          if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
            document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
          } else {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
              window.setTimeout(highlightAutomaticallyCallback, 16);
            }
          }
        }
        return _;
      }(_self);
      if (typeof module2 !== "undefined" && module2.exports) {
        module2.exports = Prism2;
      }
      if (typeof global !== "undefined") {
        global.Prism = Prism2;
      }
      Prism2.languages.markup = {
        "comment": {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        "prolog": {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        "doctype": {
          // https://www.w3.org/TR/xml/#NT-doctypedecl
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            "internal-subset": {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null
              // see below
            },
            "string": {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            "punctuation": /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            "name": /[^\s<>'"]+/
          }
        },
        "cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        "tag": {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            "tag": {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                "punctuation": /^<\/?/,
                "namespace": /^[^\s>\/:]+:/
              }
            },
            "special-attr": [],
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  {
                    pattern: /^(\s*)["']|["']$/,
                    lookbehind: true
                  }
                ]
              }
            },
            "punctuation": /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: {
                "namespace": /^[^\s>\/:]+:/
              }
            }
          }
        },
        "entity": [
          {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
          },
          /&#x?[\da-f]{1,8};/i
        ]
      };
      Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
      Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
      Prism2.hooks.add("wrap", function(env) {
        if (env.type === "entity") {
          env.attributes["title"] = env.content.replace(/&amp;/, "&");
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside["language-" + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism2.languages[lang]
          };
          includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside["language-" + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism2.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
              return tagName;
            }), "i"),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism2.languages.insertBefore("markup", "cdata", def);
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
        /**
         * Adds an pattern to highlight languages embedded in HTML attributes.
         *
         * An example of an inlined language is CSS with `style` attributes.
         *
         * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addAttribute('style', 'css');
         */
        value: function(attrName, lang) {
          Prism2.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(
              /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
              "i"
            ),
            lookbehind: true,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  "value": {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, "language-" + lang],
                    inside: Prism2.languages[lang]
                  },
                  "punctuation": [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    /"|'/
                  ]
                }
              }
            }
          });
        }
      });
      Prism2.languages.html = Prism2.languages.markup;
      Prism2.languages.mathml = Prism2.languages.markup;
      Prism2.languages.svg = Prism2.languages.markup;
      Prism2.languages.xml = Prism2.languages.extend("markup", {});
      Prism2.languages.ssml = Prism2.languages.xml;
      Prism2.languages.atom = Prism2.languages.xml;
      Prism2.languages.rss = Prism2.languages.xml;
      (function(Prism3) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism3.languages.css = {
          "comment": /\/\*[\s\S]*?\*\//,
          "atrule": {
            pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
            inside: {
              "rule": /^@[\w-]+/,
              "selector-function-argument": {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: "selector"
              },
              "keyword": {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
              // See rest below
            }
          },
          "url": {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: true,
            inside: {
              "function": /^url/i,
              "punctuation": /^\(|\)$/,
              "string": {
                pattern: RegExp("^" + string.source + "$"),
                alias: "url"
              }
            }
          },
          "selector": {
            pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
            lookbehind: true
          },
          "string": {
            pattern: string,
            greedy: true
          },
          "property": {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          "important": /!important\b/i,
          "function": {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          "punctuation": /[(){};:,]/
        };
        Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
        var markup = Prism3.languages.markup;
        if (markup) {
          markup.tag.addInlined("style", "css");
          markup.tag.addAttribute("style", "css");
        }
      })(Prism2);
      Prism2.languages.clike = {
        "comment": [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "string": {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            "punctuation": /[.\\]/
          }
        },
        "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        "boolean": /\b(?:false|true)\b/,
        "function": /\b\w+(?=\()/,
        "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        "punctuation": /[{}[\];(),.:]/
      };
      Prism2.languages.javascript = Prism2.languages.extend("clike", {
        "class-name": [
          Prism2.languages.clike["class-name"],
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
          }
        ],
        "keyword": [
          {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
          },
          {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
          }
        ],
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        "number": {
          pattern: RegExp(
            /(^|[^\w$])/.source + "(?:" + // constant
            (/NaN|Infinity/.source + "|" + // binary integer
            /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
            /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
          ),
          lookbehind: true
        },
        "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
      Prism2.languages.insertBefore("javascript", "keyword", {
        "regex": {
          pattern: RegExp(
            // lookbehind
            // eslint-disable-next-line regexp/no-dupe-characters-character-class
            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
            // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
            // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
            // with the only syntax, so we have to define 2 different regex patterns.
            /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: "language-regex",
              inside: Prism2.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        "parameter": [
          {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          }
        ],
        "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism2.languages.insertBefore("javascript", "string", {
        "hashbang": {
          pattern: /^#!.*/,
          greedy: true,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            "interpolation": {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism2.languages.javascript
              }
            },
            "string": /[\s\S]+/
          }
        },
        "string-property": {
          pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: true,
          greedy: true,
          alias: "property"
        }
      });
      Prism2.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: true,
          alias: "property"
        }
      });
      if (Prism2.languages.markup) {
        Prism2.languages.markup.tag.addInlined("script", "javascript");
        Prism2.languages.markup.tag.addAttribute(
          /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
          "javascript"
        );
      }
      Prism2.languages.js = Prism2.languages.javascript;
      (function() {
        if (typeof Prism2 === "undefined" || typeof document === "undefined") {
          return;
        }
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        var LOADING_MESSAGE = "Loading\u2026";
        var FAILURE_MESSAGE = function(status, message) {
          return "\u2716 Error " + status + " while fetching file: " + message;
        };
        var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
        var EXTENSIONS = {
          "js": "javascript",
          "py": "python",
          "rb": "ruby",
          "ps1": "powershell",
          "psm1": "powershell",
          "sh": "bash",
          "bat": "batch",
          "h": "c",
          "tex": "latex"
        };
        var STATUS_ATTR = "data-src-status";
        var STATUS_LOADING = "loading";
        var STATUS_LOADED = "loaded";
        var STATUS_FAILED = "failed";
        var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
        function loadFile(src, success, error) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", src, true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                success(xhr.responseText);
              } else {
                if (xhr.status >= 400) {
                  error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                } else {
                  error(FAILURE_EMPTY_MESSAGE);
                }
              }
            }
          };
          xhr.send(null);
        }
        function parseRange(range) {
          var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
          if (m) {
            var start = Number(m[1]);
            var comma = m[2];
            var end = m[3];
            if (!comma) {
              return [start, start];
            }
            if (!end) {
              return [start, void 0];
            }
            return [start, Number(end)];
          }
          return void 0;
        }
        Prism2.hooks.add("before-highlightall", function(env) {
          env.selector += ", " + SELECTOR;
        });
        Prism2.hooks.add("before-sanity-check", function(env) {
          var pre = (
            /** @type {HTMLPreElement} */
            env.element
          );
          if (pre.matches(SELECTOR)) {
            env.code = "";
            pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
            var code = pre.appendChild(document.createElement("CODE"));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute("data-src");
            var language = env.language;
            if (language === "none") {
              var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
              language = EXTENSIONS[extension] || extension;
            }
            Prism2.util.setLanguage(code, language);
            Prism2.util.setLanguage(pre, language);
            var autoloader = Prism2.plugins.autoloader;
            if (autoloader) {
              autoloader.loadLanguages(language);
            }
            loadFile(
              src,
              function(text) {
                pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                var range = parseRange(pre.getAttribute("data-range"));
                if (range) {
                  var lines = text.split(/\r\n?|\n/g);
                  var start = range[0];
                  var end = range[1] == null ? lines.length : range[1];
                  if (start < 0) {
                    start += lines.length;
                  }
                  start = Math.max(0, Math.min(start - 1, lines.length));
                  if (end < 0) {
                    end += lines.length;
                  }
                  end = Math.max(0, Math.min(end, lines.length));
                  text = lines.slice(start, end).join("\n");
                  if (!pre.hasAttribute("data-start")) {
                    pre.setAttribute("data-start", String(start + 1));
                  }
                }
                code.textContent = text;
                Prism2.highlightElement(code);
              },
              function(error) {
                pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                code.textContent = error;
              }
            );
          }
        });
        Prism2.plugins.fileHighlight = {
          /**
           * Executes the File Highlight plugin for all matching `pre` elements under the given container.
           *
           * Note: Elements which are already loaded or currently loading will not be touched by this method.
           *
           * @param {ParentNode} [container=document]
           */
          highlight: function highlight(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);
            for (var i = 0, element; element = elements[i++]; ) {
              Prism2.highlightElement(element);
            }
          }
        };
        var logged = false;
        Prism2.fileHighlight = function() {
          if (!logged) {
            console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
            logged = true;
          }
          Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
        };
      })();
    }
  });

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module2) {
      (function(global2, factory) {
        "use strict";
        if (typeof module2 === "object" && typeof module2.exports === "object") {
          module2.exports = global2.document ? factory(global2, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global2);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery3 = function(selector, context) {
          return new jQuery3.fn.init(selector, context);
        };
        jQuery3.fn = jQuery3.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery3,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery3.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery3.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery3.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery3.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery3.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery3.extend = jQuery3.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery3.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery3.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery3.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery3.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // Retrieve the text value of an array of DOM nodes
          text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i++]) {
                ret += jQuery3.text(node);
              }
            }
            if (nodeType === 1 || nodeType === 11) {
              return elem.textContent;
            }
            if (nodeType === 9) {
              return elem.documentElement.textContent;
            }
            if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery3.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery3.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery3.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery3.contains = function(a, b) {
          var bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
          // IE doesn't have `contains` on SVG.
          (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery3.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push;
        (function() {
          var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery3.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push2.apply(
              arr = slice.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: function(target, els) {
                pushNative.apply(target, slice.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice.call(arguments, 1));
              }
            };
          }
          function find(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          push2.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext != context || !support.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = jQuery3.escapeSelector(nid);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery3.isXMLDoc(document3);
            matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert(function(el) {
              documentElement2.appendChild(el).id = jQuery3.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery3.expando).length;
            });
            support.disconnectedMatch = assert(function(el) {
              return matches.call(el, "*");
            });
            support.scope = assert(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else {
                return context.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return jQuery3.contains(context, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery3.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                splice.call(results, duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery3.fn.uniqueSort = function() {
            return this.pushStack(jQuery3.uniqueSort(slice.apply(this)));
          };
          Expr = jQuery3.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              CHILD: function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    find.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  find.error(match[0]);
                }
                return match;
              },
              PSEUDO: function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr.CHILD.test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        cache = outerCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf.call(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              not: markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector) {
                return function(elem) {
                  return find(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery3.text(elem)).indexOf(text) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // https://www.w3.org/TR/selectors/#lang-pseudo
              lang: markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  find.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              target: function(elem) {
                var hash = window2.location && window2.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              // Element/input types
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr;
                return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear
                // with elem.type === "text"
                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              // Position-in-collection
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2;
                if (argument < 0) {
                  i2 = argument + length;
                } else if (argument > length) {
                  i2 = length;
                } else {
                  i2 = argument;
                }
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          }
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      if (skip && nodeName(elem, skip)) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        outerCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              find(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                );
                matcher(matcherIn, matcherOut, context, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      push2.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery3.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          }
          function select(selector, context, results, seed) {
            var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          }
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          setDocument();
          support.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery3.find = find;
          jQuery3.expr[":"] = jQuery3.expr.pseudos;
          jQuery3.unique = jQuery3.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.tokenize = tokenize;
          find.escape = jQuery3.escapeSelector;
          find.getText = jQuery3.text;
          find.isXML = jQuery3.isXMLDoc;
          find.selectors = jQuery3.expr;
          find.support = jQuery3.support;
          find.uniqueSort = jQuery3.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery3(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery3.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery3.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery3.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery3.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery3.filter(qualifier, elements, not);
        }
        jQuery3.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery3.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery3.find.matches(expr, jQuery3.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery3.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self2 = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery3(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery3.contains(self2[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery3.find(selector, self2[i], ret);
            }
            return len > 1 ? jQuery3.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery3(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init2 = jQuery3.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery3 ? context[0] : context;
                jQuery3.merge(this, jQuery3.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery3.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery3)
            );
          }
          return jQuery3.makeArray(selector, this);
        };
        init2.prototype = jQuery3.fn;
        rootjQuery = jQuery3(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery3.fn.extend({
          has: function(target) {
            var targets = jQuery3(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery3.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery3(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to jQuery#find
                    cur.nodeType === 1 && jQuery3.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery3.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery3(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery3.uniqueSort(
                jQuery3.merge(this.get(), jQuery3(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery3.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery3.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery3.fn[name] = function(until, selector) {
            var matched = jQuery3.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery3.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery3.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery3.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery3.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery3.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self2 = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery3.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery3.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery3.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery3.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery3.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery3.Callbacks("memory"),
                jQuery3.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery3.Callbacks("once memory"),
                jQuery3.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery3.Callbacks("once memory"),
                jQuery3.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery3.Deferred(function(newDefer) {
                  jQuery3.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery3.Deferred.exceptionHook) {
                          jQuery3.Deferred.exceptionHook(
                            e,
                            process.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery3.Deferred.getErrorHook) {
                        process.error = jQuery3.Deferred.getErrorHook();
                      } else if (jQuery3.Deferred.getStackHook) {
                        process.error = jQuery3.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery3.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery3.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery3.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery3.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery3.Deferred.exceptionHook = function(error, asyncError) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error.message,
              error.stack,
              asyncError
            );
          }
        };
        jQuery3.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery3.Deferred();
        jQuery3.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery3.readyException(error);
          });
          return this;
        };
        jQuery3.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery3.readyWait : jQuery3.isReady) {
              return;
            }
            jQuery3.isReady = true;
            if (wait !== true && --jQuery3.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery3]);
          }
        });
        jQuery3.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery3.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery3.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery3(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery3.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery3.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery3.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery3.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery3.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery3.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery3.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery3.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery3._queueHooks(elem, type), next = function() {
              jQuery3.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery3.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery3.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery3.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery3.queue(this, type, data);
              jQuery3._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery3.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery3.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery3.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery3.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery3.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery3.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery3.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery3.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery3.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery3.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery3.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery3.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery3.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery3.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery3(this).show();
              } else {
                jQuery3(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery3.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery3.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery3.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery3.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery3.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event2) {
              jQuery3().off(event2);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery3.guid++);
          }
          return elem.each(function() {
            jQuery3.event.add(this, types, fn, data, selector);
          });
        }
        jQuery3.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery3.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery3.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery3 !== "undefined" && jQuery3.event.triggered !== e.type ? jQuery3.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery3.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery3.event.special[type] || {};
              handleObj = jQuery3.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery3.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery3.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery3.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery3.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery3.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery3.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event2 = jQuery3.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event2.type] || [], special = jQuery3.event.special[event2.type] || {};
            args[0] = event2;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event2.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event2) === false) {
              return;
            }
            handlerQueue = jQuery3.event.handlers.call(this, event2, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event2.isPropagationStopped()) {
              event2.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event2.isImmediatePropagationStopped()) {
                if (!event2.rnamespace || handleObj.namespace === false || event2.rnamespace.test(handleObj.namespace)) {
                  event2.handleObj = handleObj;
                  event2.data = handleObj.data;
                  ret = ((jQuery3.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event2.result = ret) === false) {
                      event2.preventDefault();
                      event2.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event2);
            }
            return event2.result;
          },
          handlers: function(event2, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event2.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event2.type === "click" && event2.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event2.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery3(sel, this).index(cur) > -1 : jQuery3.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery3.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery3.expando] ? originalEvent : new jQuery3.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event2) {
                var target = event2.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event2) {
                if (event2.result !== void 0 && event2.originalEvent) {
                  event2.originalEvent.returnValue = event2.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery3.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery3.event.add(el, type, {
            namespace: false,
            handler: function(event2) {
              var result, saved = dataPriv.get(this, type);
              if (event2.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event2.stopImmediatePropagation();
                    event2.preventDefault();
                    return result;
                  }
                } else if ((jQuery3.event.special[type] || {}).delegateType) {
                  event2.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery3.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event2.stopPropagation();
                event2.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery3.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery3.Event = function(src, props) {
          if (!(this instanceof jQuery3.Event)) {
            return new jQuery3.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery3.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery3.expando] = true;
        };
        jQuery3.Event.prototype = {
          constructor: jQuery3.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery3.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery3.event.addProp);
        jQuery3.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event2 = jQuery3.event.fix(nativeEvent);
              event2.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event2.isSimulated = true;
              handle(nativeEvent);
              if (event2.target === event2.currentTarget) {
                handle(event2);
              }
            } else {
              jQuery3.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery3.event.fix(nativeEvent)
              );
            }
          }
          jQuery3.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event2) {
              return dataPriv.get(event2.target, type);
            },
            delegateType
          };
          jQuery3.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery3.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery3.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event2) {
              var ret, target = this, related = event2.relatedTarget, handleObj = event2.handleObj;
              if (!related || related !== target && !jQuery3.contains(target, related)) {
                event2.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event2.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery3.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery3(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery3.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery3(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery3.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery3.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery3.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery3.clone(node, true, true);
                  if (hasScripts) {
                    jQuery3.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery3.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery3.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery3._evalUrl && !node.noModule) {
                        jQuery3._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery3.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery3.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery3.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery3.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery3.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery3.event.remove(elem, type);
                      } else {
                        jQuery3.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery3.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery3.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery3.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery3.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery3.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery3.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery3.inArray(this, ignored) < 0) {
                jQuery3.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery3.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery3.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery3(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery3(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery3.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "box-sizing:content-box;border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery3.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery3.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              marginDelta += jQuery3.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery3.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery3.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery3.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery3.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery3.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery3.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery3.cssHooks[name] || jQuery3.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery3.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery3.cssHooks[name] || jQuery3.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery3.each(["height", "width"], function(_i, dimension) {
          jQuery3.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery3.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery3.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery3.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery3.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery3.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery3.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery3.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery3.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery3.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery3.style(elem, name2, value2) : jQuery3.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery3.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery3.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery3.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery3.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery3.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery3.fx.step[tween.prop]) {
                jQuery3.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery3.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery3.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery3.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery3.fx = Tween.prototype.init;
        jQuery3.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery3.fx.interval);
            }
            jQuery3.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery3._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery3.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery3.style(elem, prop);
            }
          }
          propTween = !jQuery3.isEmptyObject(props);
          if (!propTween && jQuery3.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery3.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery3.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery3.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery3.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery3.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery3.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery3.extend({}, properties),
            opts: jQuery3.extend(true, {
              specialEasing: {},
              easing: jQuery3.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery3.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery3._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery3.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery3.fx.timer(
            jQuery3.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery3.Animation = jQuery3.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery3.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery3.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery3.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery3.fx.speeds) {
                opt.duration = jQuery3.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery3.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery3.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery3.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery3.isEmptyObject(prop), optall = jQuery3.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery3.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery3.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery3.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery3.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery3.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery3.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery3.fn[name];
          jQuery3.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery3.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery3.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery3.timers = [];
        jQuery3.fx.tick = function() {
          var timer, i = 0, timers = jQuery3.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery3.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery3.fx.timer = function(timer) {
          jQuery3.timers.push(timer);
          jQuery3.fx.start();
        };
        jQuery3.fx.interval = 13;
        jQuery3.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery3.fx.stop = function() {
          inProgress = null;
        };
        jQuery3.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery3.fn.delay = function(time, type) {
          time = jQuery3.fx ? jQuery3.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery3.expr.attrHandle;
        jQuery3.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery3.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery3.removeAttr(this, name);
            });
          }
        });
        jQuery3.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery3.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery3.isXMLDoc(elem)) {
              hooks = jQuery3.attrHooks[name.toLowerCase()] || (jQuery3.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery3.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery3.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery3.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery3.each(jQuery3.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery3.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery3.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery3.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery3.propFix[name] || name];
            });
          }
        });
        jQuery3.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery3.isXMLDoc(elem)) {
              name = jQuery3.propFix[name] || name;
              hooks = jQuery3.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery3.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery3.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery3.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery3.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery3.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery3(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery3(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery3(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self2 = jQuery3(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery3.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery3.valHooks[elem.type] || jQuery3.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery3(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery3.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery3.valHooks[this.type] || jQuery3.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery3.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery3.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery3.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery3(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery3.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery3.inArray(jQuery3.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery3.each(["radio", "checkbox"], function() {
          jQuery3.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery3.inArray(jQuery3(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery3.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery3.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery3.error("Invalid XML: " + (parserErrorElem ? jQuery3.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery3.extend(jQuery3.event, {
          trigger: function(event2, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event2, "type") ? event2.type : event2, namespaces = hasOwn.call(event2, "namespace") ? event2.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery3.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event2 = event2[jQuery3.expando] ? event2 : new jQuery3.Event(type, typeof event2 === "object" && event2);
            event2.isTrigger = onlyHandlers ? 2 : 3;
            event2.namespace = namespaces.join(".");
            event2.rnamespace = event2.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event2.result = void 0;
            if (!event2.target) {
              event2.target = elem;
            }
            data = data == null ? [event2] : jQuery3.makeArray(data, [event2]);
            special = jQuery3.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event2.isPropagationStopped()) {
              lastElement = cur;
              event2.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event2.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event2.result = handle.apply(cur, data);
                if (event2.result === false) {
                  event2.preventDefault();
                }
              }
            }
            event2.type = type;
            if (!onlyHandlers && !event2.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery3.event.triggered = type;
                  if (event2.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event2.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery3.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event2.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event2) {
            var e = jQuery3.extend(
              new jQuery3.Event(),
              event2,
              {
                type,
                isSimulated: true
              }
            );
            jQuery3.event.trigger(e, null, elem);
          }
        });
        jQuery3.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery3.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery3.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery3.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery3.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery3.isPlainObject(a)) {
            jQuery3.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery3.fn.extend({
          serialize: function() {
            return jQuery3.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery3.prop(this, "elements");
              return elements ? jQuery3.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery3(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery3(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery3.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery3.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery3.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery3.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery3.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery3.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery3.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery3.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery3.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery3(callbackContext) : jQuery3.event, deferred = jQuery3.Deferred(), completeDeferred = jQuery3.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery3.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery3.event && s.global;
            if (fireGlobals && jQuery3.active++ === 0) {
              jQuery3.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery3.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery3.lastModified[cacheURL]);
              }
              if (jQuery3.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery3.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery3.inArray("script", s.dataTypes) > -1 && jQuery3.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery3.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery3.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery3.active) {
                  jQuery3.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery3.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery3.get(url, void 0, callback, "script");
          }
        });
        jQuery3.each(["get", "post"], function(_i, method) {
          jQuery3[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery3.ajax(jQuery3.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery3.isPlainObject(url) && url));
          };
        });
        jQuery3.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery3._evalUrl = function(url, options, doc) {
          return jQuery3.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery3.globalEval(response, options, doc);
            }
          });
        };
        jQuery3.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery3(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery3(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self2 = jQuery3(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery3(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery3(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery3.expr.pseudos.hidden = function(elem) {
          return !jQuery3.expr.pseudos.visible(elem);
        };
        jQuery3.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery3.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery3.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery3.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery3.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery3.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery3.globalEval(text);
              return text;
            }
          }
        });
        jQuery3.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery3.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery3("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery3.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery3.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery3.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery3.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery3(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery3.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery3(scripts).remove();
          }
          return jQuery3.merge([], parsed.childNodes);
        };
        jQuery3.fn.load = function(url, params, callback) {
          var selector, type, response, self2 = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery3.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery3("<div>").append(jQuery3.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery3.expr.pseudos.animated = function(elem) {
          return jQuery3.grep(jQuery3.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery3.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery3.css(elem, "position"), curElem = jQuery3(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery3.css(elem, "top");
            curCSSLeft = jQuery3.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery3.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery3.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery3.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery3.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery3.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery3(offsetParent).offset();
                parentOffset.top += jQuery3.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery3.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery3.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery3.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery3.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery3.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery3.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery3.each(["top", "left"], function(_i, prop) {
          jQuery3.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery3(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery3.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery3.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery3.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery3.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery3.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery3.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery3.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery3.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
          }
        });
        jQuery3.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery3.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery3.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery3.guid++;
          return proxy;
        };
        jQuery3.holdReady = function(hold) {
          if (hold) {
            jQuery3.readyWait++;
          } else {
            jQuery3.ready(true);
          }
        };
        jQuery3.isArray = Array.isArray;
        jQuery3.parseJSON = JSON.parse;
        jQuery3.nodeName = nodeName;
        jQuery3.isFunction = isFunction;
        jQuery3.isWindow = isWindow;
        jQuery3.camelCase = camelCase;
        jQuery3.type = toType;
        jQuery3.now = Date.now;
        jQuery3.isNumeric = function(obj) {
          var type = jQuery3.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery3.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery3;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery3.noConflict = function(deep) {
          if (window2.$ === jQuery3) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery3) {
            window2.jQuery = _jQuery;
          }
          return jQuery3;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery3;
        }
        return jQuery3;
      });
    }
  });

  // node_modules/jquery-validation/dist/jquery.validate.js
  var require_jquery_validate = __commonJS({
    "node_modules/jquery-validation/dist/jquery.validate.js"(exports, module2) {
      (function(factory) {
        if (typeof define === "function" && define.amd) {
          define(["jquery"], factory);
        } else if (typeof module2 === "object" && module2.exports) {
          module2.exports = factory(require_jquery());
        } else {
          factory(jQuery);
        }
      })(function($4) {
        $4.extend($4.fn, {
          // https://jqueryvalidation.org/validate/
          validate: function(options) {
            if (!this.length) {
              if (options && options.debug && window.console) {
                console.warn("Nothing selected, can't validate, returning nothing.");
              }
              return;
            }
            var validator = $4.data(this[0], "validator");
            if (validator) {
              return validator;
            }
            this.attr("novalidate", "novalidate");
            validator = new $4.validator(options, this[0]);
            $4.data(this[0], "validator", validator);
            if (validator.settings.onsubmit) {
              this.on("click.validate", ":submit", function(event2) {
                validator.submitButton = event2.currentTarget;
                if ($4(this).hasClass("cancel")) {
                  validator.cancelSubmit = true;
                }
                if ($4(this).attr("formnovalidate") !== void 0) {
                  validator.cancelSubmit = true;
                }
              });
              this.on("submit.validate", function(event2) {
                if (validator.settings.debug) {
                  event2.preventDefault();
                }
                function handle() {
                  var hidden, result;
                  if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
                    hidden = $4("<input type='hidden'/>").attr("name", validator.submitButton.name).val($4(validator.submitButton).val()).appendTo(validator.currentForm);
                  }
                  if (validator.settings.submitHandler && !validator.settings.debug) {
                    result = validator.settings.submitHandler.call(validator, validator.currentForm, event2);
                    if (hidden) {
                      hidden.remove();
                    }
                    if (result !== void 0) {
                      return result;
                    }
                    return false;
                  }
                  return true;
                }
                if (validator.cancelSubmit) {
                  validator.cancelSubmit = false;
                  return handle();
                }
                if (validator.form()) {
                  if (validator.pendingRequest) {
                    validator.formSubmitted = true;
                    return false;
                  }
                  return handle();
                } else {
                  validator.focusInvalid();
                  return false;
                }
              });
            }
            return validator;
          },
          // https://jqueryvalidation.org/valid/
          valid: function() {
            var valid, validator, errorList;
            if ($4(this[0]).is("form")) {
              valid = this.validate().form();
            } else {
              errorList = [];
              valid = true;
              validator = $4(this[0].form).validate();
              this.each(function() {
                valid = validator.element(this) && valid;
                if (!valid) {
                  errorList = errorList.concat(validator.errorList);
                }
              });
              validator.errorList = errorList;
            }
            return valid;
          },
          // https://jqueryvalidation.org/rules/
          rules: function(command, argument) {
            var element = this[0], isContentEditable = typeof this.attr("contenteditable") !== "undefined" && this.attr("contenteditable") !== "false", settings, staticRules, existingRules, data, param, filtered;
            if (element == null) {
              return;
            }
            if (!element.form && isContentEditable) {
              element.form = this.closest("form")[0];
              element.name = this.attr("name");
            }
            if (element.form == null) {
              return;
            }
            if (command) {
              settings = $4.data(element.form, "validator").settings;
              staticRules = settings.rules;
              existingRules = $4.validator.staticRules(element);
              switch (command) {
                case "add":
                  $4.extend(existingRules, $4.validator.normalizeRule(argument));
                  delete existingRules.messages;
                  staticRules[element.name] = existingRules;
                  if (argument.messages) {
                    settings.messages[element.name] = $4.extend(settings.messages[element.name], argument.messages);
                  }
                  break;
                case "remove":
                  if (!argument) {
                    delete staticRules[element.name];
                    return existingRules;
                  }
                  filtered = {};
                  $4.each(argument.split(/\s/), function(index, method) {
                    filtered[method] = existingRules[method];
                    delete existingRules[method];
                  });
                  return filtered;
              }
            }
            data = $4.validator.normalizeRules(
              $4.extend(
                {},
                $4.validator.classRules(element),
                $4.validator.attributeRules(element),
                $4.validator.dataRules(element),
                $4.validator.staticRules(element)
              ),
              element
            );
            if (data.required) {
              param = data.required;
              delete data.required;
              data = $4.extend({ required: param }, data);
            }
            if (data.remote) {
              param = data.remote;
              delete data.remote;
              data = $4.extend(data, { remote: param });
            }
            return data;
          }
        });
        var trim = function(str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
        $4.extend($4.expr.pseudos || $4.expr[":"], {
          // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support
          // https://jqueryvalidation.org/blank-selector/
          blank: function(a) {
            return !trim("" + $4(a).val());
          },
          // https://jqueryvalidation.org/filled-selector/
          filled: function(a) {
            var val = $4(a).val();
            return val !== null && !!trim("" + val);
          },
          // https://jqueryvalidation.org/unchecked-selector/
          unchecked: function(a) {
            return !$4(a).prop("checked");
          }
        });
        $4.validator = function(options, form) {
          this.settings = $4.extend(true, {}, $4.validator.defaults, options);
          this.currentForm = form;
          this.init();
        };
        $4.validator.format = function(source, params) {
          if (arguments.length === 1) {
            return function() {
              var args = $4.makeArray(arguments);
              args.unshift(source);
              return $4.validator.format.apply(this, args);
            };
          }
          if (params === void 0) {
            return source;
          }
          if (arguments.length > 2 && params.constructor !== Array) {
            params = $4.makeArray(arguments).slice(1);
          }
          if (params.constructor !== Array) {
            params = [params];
          }
          $4.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
              return n;
            });
          });
          return source;
        };
        $4.extend($4.validator, {
          defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: $4([]),
            errorLabelContainer: $4([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            customElements: [],
            onfocusin: function(element) {
              this.lastActive = element;
              if (this.settings.focusCleanup) {
                if (this.settings.unhighlight) {
                  this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                }
                this.hideThese(this.errorsFor(element));
              }
            },
            onfocusout: function(element) {
              if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                this.element(element);
              }
            },
            onkeyup: function(element, event2) {
              var excludedKeys = [
                16,
                17,
                18,
                20,
                35,
                36,
                37,
                38,
                39,
                40,
                45,
                144,
                225
              ];
              if (event2.which === 9 && this.elementValue(element) === "" || $4.inArray(event2.keyCode, excludedKeys) !== -1) {
                return;
              } else if (element.name in this.submitted || element.name in this.invalid) {
                this.element(element);
              }
            },
            onclick: function(element) {
              if (element.name in this.submitted) {
                this.element(element);
              } else if (element.parentNode.name in this.submitted) {
                this.element(element.parentNode);
              }
            },
            highlight: function(element, errorClass, validClass) {
              if (element.type === "radio") {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
              } else {
                $4(element).addClass(errorClass).removeClass(validClass);
              }
            },
            unhighlight: function(element, errorClass, validClass) {
              if (element.type === "radio") {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
              } else {
                $4(element).removeClass(errorClass).addClass(validClass);
              }
            }
          },
          // https://jqueryvalidation.org/jQuery.validator.setDefaults/
          setDefaults: function(settings) {
            $4.extend($4.validator.defaults, settings);
          },
          messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: $4.validator.format("Please enter no more than {0} characters."),
            minlength: $4.validator.format("Please enter at least {0} characters."),
            rangelength: $4.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $4.validator.format("Please enter a value between {0} and {1}."),
            max: $4.validator.format("Please enter a value less than or equal to {0}."),
            min: $4.validator.format("Please enter a value greater than or equal to {0}."),
            step: $4.validator.format("Please enter a multiple of {0}.")
          },
          autoCreateRanges: false,
          prototype: {
            init: function() {
              this.labelContainer = $4(this.settings.errorLabelContainer);
              this.errorContext = this.labelContainer.length && this.labelContainer || $4(this.currentForm);
              this.containers = $4(this.settings.errorContainer).add(this.settings.errorLabelContainer);
              this.submitted = {};
              this.valueCache = {};
              this.pendingRequest = 0;
              this.pending = {};
              this.invalid = {};
              this.reset();
              var currentForm = this.currentForm, groups = this.groups = {}, rules;
              $4.each(this.settings.groups, function(key, value) {
                if (typeof value === "string") {
                  value = value.split(/\s/);
                }
                $4.each(value, function(index, name) {
                  groups[name] = key;
                });
              });
              rules = this.settings.rules;
              $4.each(rules, function(key, value) {
                rules[key] = $4.validator.normalizeRule(value);
              });
              function delegate(event2) {
                var isContentEditable = typeof $4(this).attr("contenteditable") !== "undefined" && $4(this).attr("contenteditable") !== "false";
                if (!this.form && isContentEditable) {
                  this.form = $4(this).closest("form")[0];
                  this.name = $4(this).attr("name");
                }
                if (currentForm !== this.form) {
                  return;
                }
                var validator = $4.data(this.form, "validator"), eventType = "on" + event2.type.replace(/^validate/, ""), settings = validator.settings;
                if (settings[eventType] && !$4(this).is(settings.ignore)) {
                  settings[eventType].call(validator, this, event2);
                }
              }
              var focusListeners = [
                ":text",
                "[type='password']",
                "[type='file']",
                "select",
                "textarea",
                "[type='number']",
                "[type='search']",
                "[type='tel']",
                "[type='url']",
                "[type='email']",
                "[type='datetime']",
                "[type='date']",
                "[type='month']",
                "[type='week']",
                "[type='time']",
                "[type='datetime-local']",
                "[type='range']",
                "[type='color']",
                "[type='radio']",
                "[type='checkbox']",
                "[contenteditable]",
                "[type='button']"
              ];
              var clickListeners = ["select", "option", "[type='radio']", "[type='checkbox']"];
              $4(this.currentForm).on("focusin.validate focusout.validate keyup.validate", focusListeners.concat(this.settings.customElements).join(", "), delegate).on("click.validate", clickListeners.concat(this.settings.customElements).join(", "), delegate);
              if (this.settings.invalidHandler) {
                $4(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
              }
            },
            // https://jqueryvalidation.org/Validator.form/
            form: function() {
              this.checkForm();
              $4.extend(this.submitted, this.errorMap);
              this.invalid = $4.extend({}, this.errorMap);
              if (!this.valid()) {
                $4(this.currentForm).triggerHandler("invalid-form", [this]);
              }
              this.showErrors();
              return this.valid();
            },
            checkForm: function() {
              this.prepareForm();
              for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
                this.check(elements[i]);
              }
              return this.valid();
            },
            // https://jqueryvalidation.org/Validator.element/
            element: function(element) {
              var cleanElement = this.clean(element), checkElement = this.validationTargetFor(cleanElement), v = this, result = true, rs, group;
              if (checkElement === void 0) {
                delete this.invalid[cleanElement.name];
              } else {
                this.prepareElement(checkElement);
                this.currentElements = $4(checkElement);
                group = this.groups[checkElement.name];
                if (group) {
                  $4.each(this.groups, function(name, testgroup) {
                    if (testgroup === group && name !== checkElement.name) {
                      cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                      if (cleanElement && cleanElement.name in v.invalid) {
                        v.currentElements.push(cleanElement);
                        result = v.check(cleanElement) && result;
                      }
                    }
                  });
                }
                rs = this.check(checkElement) !== false;
                result = result && rs;
                if (rs) {
                  this.invalid[checkElement.name] = false;
                } else {
                  this.invalid[checkElement.name] = true;
                }
                if (!this.numberOfInvalids()) {
                  this.toHide = this.toHide.add(this.containers);
                }
                this.showErrors();
                $4(element).attr("aria-invalid", !rs);
              }
              return result;
            },
            // https://jqueryvalidation.org/Validator.showErrors/
            showErrors: function(errors) {
              if (errors) {
                var validator = this;
                $4.extend(this.errorMap, errors);
                this.errorList = $4.map(this.errorMap, function(message, name) {
                  return {
                    message,
                    element: validator.findByName(name)[0]
                  };
                });
                this.successList = $4.grep(this.successList, function(element) {
                  return !(element.name in errors);
                });
              }
              if (this.settings.showErrors) {
                this.settings.showErrors.call(this, this.errorMap, this.errorList);
              } else {
                this.defaultShowErrors();
              }
            },
            // https://jqueryvalidation.org/Validator.resetForm/
            resetForm: function() {
              if ($4.fn.resetForm) {
                $4(this.currentForm).resetForm();
              }
              this.invalid = {};
              this.submitted = {};
              this.prepareForm();
              this.hideErrors();
              var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
              this.resetElements(elements);
            },
            resetElements: function(elements) {
              var i;
              if (this.settings.unhighlight) {
                for (i = 0; elements[i]; i++) {
                  this.settings.unhighlight.call(
                    this,
                    elements[i],
                    this.settings.errorClass,
                    ""
                  );
                  this.findByName(elements[i].name).removeClass(this.settings.validClass);
                }
              } else {
                elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
              }
            },
            numberOfInvalids: function() {
              return this.objectLength(this.invalid);
            },
            objectLength: function(obj) {
              var count = 0, i;
              for (i in obj) {
                if (obj[i] !== void 0 && obj[i] !== null && obj[i] !== false) {
                  count++;
                }
              }
              return count;
            },
            hideErrors: function() {
              this.hideThese(this.toHide);
            },
            hideThese: function(errors) {
              errors.not(this.containers).text("");
              this.addWrapper(errors).hide();
            },
            valid: function() {
              return this.size() === 0;
            },
            size: function() {
              return this.errorList.length;
            },
            focusInvalid: function() {
              if (this.settings.focusInvalid) {
                try {
                  $4(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
                } catch (e) {
                }
              }
            },
            findLastActive: function() {
              var lastActive = this.lastActive;
              return lastActive && $4.grep(this.errorList, function(n) {
                return n.element.name === lastActive.name;
              }).length === 1 && lastActive;
            },
            elements: function() {
              var validator = this, rulesCache = {}, selectors = ["input", "select", "textarea", "[contenteditable]"];
              return $4(this.currentForm).find(selectors.concat(this.settings.customElements).join(", ")).not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                var name = this.name || $4(this).attr("name");
                var isContentEditable = typeof $4(this).attr("contenteditable") !== "undefined" && $4(this).attr("contenteditable") !== "false";
                if (!name && validator.settings.debug && window.console) {
                  console.error("%o has no name assigned", this);
                }
                if (isContentEditable) {
                  this.form = $4(this).closest("form")[0];
                  this.name = name;
                }
                if (this.form !== validator.currentForm) {
                  return false;
                }
                if (name in rulesCache || !validator.objectLength($4(this).rules())) {
                  return false;
                }
                rulesCache[name] = true;
                return true;
              });
            },
            clean: function(selector) {
              return $4(selector)[0];
            },
            errors: function() {
              var errorClass = this.settings.errorClass.split(" ").join(".");
              return $4(this.settings.errorElement + "." + errorClass, this.errorContext);
            },
            resetInternals: function() {
              this.successList = [];
              this.errorList = [];
              this.errorMap = {};
              this.toShow = $4([]);
              this.toHide = $4([]);
            },
            reset: function() {
              this.resetInternals();
              this.currentElements = $4([]);
            },
            prepareForm: function() {
              this.reset();
              this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(element) {
              this.reset();
              this.toHide = this.errorsFor(element);
            },
            elementValue: function(element) {
              var $element = $4(element), type = element.type, isContentEditable = typeof $element.attr("contenteditable") !== "undefined" && $element.attr("contenteditable") !== "false", val, idx;
              if (type === "radio" || type === "checkbox") {
                return this.findByName(element.name).filter(":checked").val();
              } else if (type === "number" && typeof element.validity !== "undefined") {
                return element.validity.badInput ? "NaN" : $element.val();
              }
              if (isContentEditable) {
                val = $element.text();
              } else {
                val = $element.val();
              }
              if (type === "file") {
                if (val.substr(0, 12) === "C:\\fakepath\\") {
                  return val.substr(12);
                }
                idx = val.lastIndexOf("/");
                if (idx >= 0) {
                  return val.substr(idx + 1);
                }
                idx = val.lastIndexOf("\\");
                if (idx >= 0) {
                  return val.substr(idx + 1);
                }
                return val;
              }
              if (typeof val === "string") {
                return val.replace(/\r/g, "");
              }
              return val;
            },
            check: function(element) {
              element = this.validationTargetFor(this.clean(element));
              var rules = $4(element).rules(), rulesCount = $4.map(rules, function(n, i) {
                return i;
              }).length, dependencyMismatch = false, val = this.elementValue(element), result, method, rule, normalizer;
              this.abortRequest(element);
              if (typeof rules.normalizer === "function") {
                normalizer = rules.normalizer;
              } else if (typeof this.settings.normalizer === "function") {
                normalizer = this.settings.normalizer;
              }
              if (normalizer) {
                val = normalizer.call(element, val);
                delete rules.normalizer;
              }
              for (method in rules) {
                rule = { method, parameters: rules[method] };
                try {
                  result = $4.validator.methods[method].call(this, val, element, rule.parameters);
                  if (result === "dependency-mismatch" && rulesCount === 1) {
                    dependencyMismatch = true;
                    continue;
                  }
                  dependencyMismatch = false;
                  if (result === "pending") {
                    this.toHide = this.toHide.not(this.errorsFor(element));
                    return;
                  }
                  if (!result) {
                    this.formatAndAdd(element, rule);
                    return false;
                  }
                } catch (e) {
                  if (this.settings.debug && window.console) {
                    console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                  }
                  if (e instanceof TypeError) {
                    e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                  }
                  throw e;
                }
              }
              if (dependencyMismatch) {
                return;
              }
              if (this.objectLength(rules)) {
                this.successList.push(element);
              }
              return true;
            },
            // Return the custom message for the given element and validation method
            // specified in the element's HTML5 data attribute
            // return the generic message if present and no method specific message is present
            customDataMessage: function(element, method) {
              return $4(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $4(element).data("msg");
            },
            // Return the custom message for the given element name and validation method
            customMessage: function(name, method) {
              var m = this.settings.messages[name];
              return m && (m.constructor === String ? m : m[method]);
            },
            // Return the first defined argument, allowing empty strings
            findDefined: function() {
              for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== void 0) {
                  return arguments[i];
                }
              }
              return void 0;
            },
            // The second parameter 'rule' used to be a string, and extended to an object literal
            // of the following form:
            // rule = {
            //     method: "method name",
            //     parameters: "the given method parameters"
            // }
            //
            // The old behavior still supported, kept to maintain backward compatibility with
            // old code, and will be removed in the next major release.
            defaultMessage: function(element, rule) {
              if (typeof rule === "string") {
                rule = { method: rule };
              }
              var message = this.findDefined(
                this.customMessage(element.name, rule.method),
                this.customDataMessage(element, rule.method),
                // 'title' is never undefined, so handle empty string as undefined
                !this.settings.ignoreTitle && element.title || void 0,
                $4.validator.messages[rule.method],
                "<strong>Warning: No message defined for " + element.name + "</strong>"
              ), theregex = /\$?\{(\d+)\}/g;
              if (typeof message === "function") {
                message = message.call(this, rule.parameters, element);
              } else if (theregex.test(message)) {
                message = $4.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
              }
              return message;
            },
            formatAndAdd: function(element, rule) {
              var message = this.defaultMessage(element, rule);
              this.errorList.push({
                message,
                element,
                method: rule.method
              });
              this.errorMap[element.name] = message;
              this.submitted[element.name] = message;
            },
            addWrapper: function(toToggle) {
              if (this.settings.wrapper) {
                toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
              }
              return toToggle;
            },
            defaultShowErrors: function() {
              var i, elements, error;
              for (i = 0; this.errorList[i]; i++) {
                error = this.errorList[i];
                if (this.settings.highlight) {
                  this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                }
                this.showLabel(error.element, error.message);
              }
              if (this.errorList.length) {
                this.toShow = this.toShow.add(this.containers);
              }
              if (this.settings.success) {
                for (i = 0; this.successList[i]; i++) {
                  this.showLabel(this.successList[i]);
                }
              }
              if (this.settings.unhighlight) {
                for (i = 0, elements = this.validElements(); elements[i]; i++) {
                  this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                }
              }
              this.toHide = this.toHide.not(this.toShow);
              this.hideErrors();
              this.addWrapper(this.toShow).show();
            },
            validElements: function() {
              return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
              return $4(this.errorList).map(function() {
                return this.element;
              });
            },
            showLabel: function(element, message) {
              var place, group, errorID, v, error = this.errorsFor(element), elementID = this.idOrName(element), describedBy = $4(element).attr("aria-describedby");
              if (error.length) {
                error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                if (this.settings && this.settings.escapeHtml) {
                  error.text(message || "");
                } else {
                  error.html(message || "");
                }
              } else {
                error = $4("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass);
                if (this.settings && this.settings.escapeHtml) {
                  error.text(message || "");
                } else {
                  error.html(message || "");
                }
                place = error;
                if (this.settings.wrapper) {
                  place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                }
                if (this.labelContainer.length) {
                  this.labelContainer.append(place);
                } else if (this.settings.errorPlacement) {
                  this.settings.errorPlacement.call(this, place, $4(element));
                } else {
                  place.insertAfter(element);
                }
                if (error.is("label")) {
                  error.attr("for", elementID);
                } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
                  errorID = error.attr("id");
                  if (!describedBy) {
                    describedBy = errorID;
                  } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
                    describedBy += " " + errorID;
                  }
                  $4(element).attr("aria-describedby", describedBy);
                  group = this.groups[element.name];
                  if (group) {
                    v = this;
                    $4.each(v.groups, function(name, testgroup) {
                      if (testgroup === group) {
                        $4("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                      }
                    });
                  }
                }
              }
              if (!message && this.settings.success) {
                error.text("");
                if (typeof this.settings.success === "string") {
                  error.addClass(this.settings.success);
                } else {
                  this.settings.success(error, element);
                }
              }
              this.toShow = this.toShow.add(error);
            },
            errorsFor: function(element) {
              var name = this.escapeCssMeta(this.idOrName(element)), describer = $4(element).attr("aria-describedby"), selector = "label[for='" + name + "'], label[for='" + name + "'] *";
              if (describer) {
                selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
              }
              return this.errors().filter(selector);
            },
            // See https://api.jquery.com/category/selectors/, for CSS
            // meta-characters that should be escaped in order to be used with JQuery
            // as a literal part of a name/id or any selector.
            escapeCssMeta: function(string) {
              if (string === void 0) {
                return "";
              }
              return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
            },
            idOrName: function(element) {
              return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
            },
            validationTargetFor: function(element) {
              if (this.checkable(element)) {
                element = this.findByName(element.name);
              }
              return $4(element).not(this.settings.ignore)[0];
            },
            checkable: function(element) {
              return /radio|checkbox/i.test(element.type);
            },
            findByName: function(name) {
              return $4(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
            },
            getLength: function(value, element) {
              switch (element.nodeName.toLowerCase()) {
                case "select":
                  return $4("option:selected", element).length;
                case "input":
                  if (this.checkable(element)) {
                    return this.findByName(element.name).filter(":checked").length;
                  }
              }
              return value.length;
            },
            depend: function(param, element) {
              return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
            },
            dependTypes: {
              "boolean": function(param) {
                return param;
              },
              "string": function(param, element) {
                return !!$4(param, element.form).length;
              },
              "function": function(param, element) {
                return param(element);
              }
            },
            optional: function(element) {
              var val = this.elementValue(element);
              return !$4.validator.methods.required.call(this, val, element) && "dependency-mismatch";
            },
            elementAjaxPort: function(element) {
              return "validate" + element.name;
            },
            startRequest: function(element) {
              if (!this.pending[element.name]) {
                this.pendingRequest++;
                $4(element).addClass(this.settings.pendingClass);
                this.pending[element.name] = true;
              }
            },
            stopRequest: function(element, valid) {
              this.pendingRequest--;
              if (this.pendingRequest < 0) {
                this.pendingRequest = 0;
              }
              delete this.pending[element.name];
              $4(element).removeClass(this.settings.pendingClass);
              if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form() && this.pendingRequest === 0) {
                $4(this.currentForm).trigger("submit");
                if (this.submitButton) {
                  $4("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
                }
                this.formSubmitted = false;
              } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                $4(this.currentForm).triggerHandler("invalid-form", [this]);
                this.formSubmitted = false;
              }
            },
            abortRequest: function(element) {
              var port;
              if (this.pending[element.name]) {
                port = this.elementAjaxPort(element);
                $4.ajaxAbort(port);
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                  this.pendingRequest = 0;
                }
                delete this.pending[element.name];
                $4(element).removeClass(this.settings.pendingClass);
              }
            },
            previousValue: function(element, method) {
              method = typeof method === "string" && method || "remote";
              return $4.data(element, "previousValue") || $4.data(element, "previousValue", {
                old: null,
                valid: true,
                message: this.defaultMessage(element, { method })
              });
            },
            // Cleans up all forms and elements, removes validator-specific events
            destroy: function() {
              this.resetForm();
              $4(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
            }
          },
          classRuleSettings: {
            required: { required: true },
            email: { email: true },
            url: { url: true },
            date: { date: true },
            dateISO: { dateISO: true },
            number: { number: true },
            digits: { digits: true },
            creditcard: { creditcard: true }
          },
          addClassRules: function(className, rules) {
            if (className.constructor === String) {
              this.classRuleSettings[className] = rules;
            } else {
              $4.extend(this.classRuleSettings, className);
            }
          },
          classRules: function(element) {
            var rules = {}, classes = $4(element).attr("class");
            if (classes) {
              $4.each(classes.split(" "), function() {
                if (this in $4.validator.classRuleSettings) {
                  $4.extend(rules, $4.validator.classRuleSettings[this]);
                }
              });
            }
            return rules;
          },
          normalizeAttributeRule: function(rules, type, method, value) {
            if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
              value = Number(value);
              if (isNaN(value)) {
                value = void 0;
              }
            }
            if (value || value === 0) {
              rules[method] = value;
            } else if (type === method && type !== "range") {
              rules[type === "date" ? "dateISO" : method] = true;
            }
          },
          attributeRules: function(element) {
            var rules = {}, $element = $4(element), type = element.getAttribute("type"), method, value;
            for (method in $4.validator.methods) {
              if (method === "required") {
                value = element.getAttribute(method);
                if (value === "") {
                  value = true;
                }
                value = !!value;
              } else {
                value = $element.attr(method);
              }
              this.normalizeAttributeRule(rules, type, method, value);
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
              delete rules.maxlength;
            }
            return rules;
          },
          dataRules: function(element) {
            var rules = {}, $element = $4(element), type = element.getAttribute("type"), method, value;
            for (method in $4.validator.methods) {
              value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
              if (value === "") {
                value = true;
              }
              this.normalizeAttributeRule(rules, type, method, value);
            }
            return rules;
          },
          staticRules: function(element) {
            var rules = {}, validator = $4.data(element.form, "validator");
            if (validator.settings.rules) {
              rules = $4.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            }
            return rules;
          },
          normalizeRules: function(rules, element) {
            $4.each(rules, function(prop, val) {
              if (val === false) {
                delete rules[prop];
                return;
              }
              if (val.param || val.depends) {
                var keepRule = true;
                switch (typeof val.depends) {
                  case "string":
                    keepRule = !!$4(val.depends, element.form).length;
                    break;
                  case "function":
                    keepRule = val.depends.call(element, element);
                    break;
                }
                if (keepRule) {
                  rules[prop] = val.param !== void 0 ? val.param : true;
                } else {
                  $4.data(element.form, "validator").resetElements($4(element));
                  delete rules[prop];
                }
              }
            });
            $4.each(rules, function(rule, parameter) {
              rules[rule] = typeof parameter === "function" && rule !== "normalizer" ? parameter(element) : parameter;
            });
            $4.each(["minlength", "maxlength"], function() {
              if (rules[this]) {
                rules[this] = Number(rules[this]);
              }
            });
            $4.each(["rangelength", "range"], function() {
              var parts;
              if (rules[this]) {
                if (Array.isArray(rules[this])) {
                  rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                } else if (typeof rules[this] === "string") {
                  parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                  rules[this] = [Number(parts[0]), Number(parts[1])];
                }
              }
            });
            if ($4.validator.autoCreateRanges) {
              if (rules.min != null && rules.max != null) {
                rules.range = [rules.min, rules.max];
                delete rules.min;
                delete rules.max;
              }
              if (rules.minlength != null && rules.maxlength != null) {
                rules.rangelength = [rules.minlength, rules.maxlength];
                delete rules.minlength;
                delete rules.maxlength;
              }
            }
            return rules;
          },
          // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
          normalizeRule: function(data) {
            if (typeof data === "string") {
              var transformed = {};
              $4.each(data.split(/\s/), function() {
                transformed[this] = true;
              });
              data = transformed;
            }
            return data;
          },
          // https://jqueryvalidation.org/jQuery.validator.addMethod/
          addMethod: function(name, method, message) {
            $4.validator.methods[name] = method;
            $4.validator.messages[name] = message !== void 0 ? message : $4.validator.messages[name];
            if (method.length < 3) {
              $4.validator.addClassRules(name, $4.validator.normalizeRule(name));
            }
          },
          // https://jqueryvalidation.org/jQuery.validator.methods/
          methods: {
            // https://jqueryvalidation.org/required-method/
            required: function(value, element, param) {
              if (!this.depend(param, element)) {
                return "dependency-mismatch";
              }
              if (element.nodeName.toLowerCase() === "select") {
                var val = $4(element).val();
                return val && val.length > 0;
              }
              if (this.checkable(element)) {
                return this.getLength(value, element) > 0;
              }
              return value !== void 0 && value !== null && value.length > 0;
            },
            // https://jqueryvalidation.org/email-method/
            email: function(value, element) {
              return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
            },
            // https://jqueryvalidation.org/url-method/
            url: function(value, element) {
              return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
            },
            // https://jqueryvalidation.org/date-method/
            date: /* @__PURE__ */ function() {
              var called = false;
              return function(value, element) {
                if (!called) {
                  called = true;
                  if (this.settings.debug && window.console) {
                    console.warn(
                      "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                    );
                  }
                }
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
              };
            }(),
            // https://jqueryvalidation.org/dateISO-method/
            dateISO: function(value, element) {
              return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
            },
            // https://jqueryvalidation.org/number-method/
            number: function(value, element) {
              return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:-?\.\d+)?$/.test(value);
            },
            // https://jqueryvalidation.org/digits-method/
            digits: function(value, element) {
              return this.optional(element) || /^\d+$/.test(value);
            },
            // https://jqueryvalidation.org/minlength-method/
            minlength: function(value, element, param) {
              var length = Array.isArray(value) ? value.length : this.getLength(value, element);
              return this.optional(element) || length >= param;
            },
            // https://jqueryvalidation.org/maxlength-method/
            maxlength: function(value, element, param) {
              var length = Array.isArray(value) ? value.length : this.getLength(value, element);
              return this.optional(element) || length <= param;
            },
            // https://jqueryvalidation.org/rangelength-method/
            rangelength: function(value, element, param) {
              var length = Array.isArray(value) ? value.length : this.getLength(value, element);
              return this.optional(element) || length >= param[0] && length <= param[1];
            },
            // https://jqueryvalidation.org/min-method/
            min: function(value, element, param) {
              return this.optional(element) || value >= param;
            },
            // https://jqueryvalidation.org/max-method/
            max: function(value, element, param) {
              return this.optional(element) || value <= param;
            },
            // https://jqueryvalidation.org/range-method/
            range: function(value, element, param) {
              return this.optional(element) || value >= param[0] && value <= param[1];
            },
            // https://jqueryvalidation.org/step-method/
            step: function(value, element, param) {
              var type = $4(element).attr("type"), errorMessage = "Step attribute on input type " + type + " is not supported.", supportedTypes = ["text", "number", "range"], re = new RegExp("\\b" + type + "\\b"), notSupported = type && !re.test(supportedTypes.join()), decimalPlaces = function(num) {
                var match = ("" + num).match(/(?:\.(\d+))?$/);
                if (!match) {
                  return 0;
                }
                return match[1] ? match[1].length : 0;
              }, toInt = function(num) {
                return Math.round(num * Math.pow(10, decimals));
              }, valid = true, decimals;
              if (notSupported) {
                throw new Error(errorMessage);
              }
              decimals = decimalPlaces(param);
              if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
                valid = false;
              }
              return this.optional(element) || valid;
            },
            // https://jqueryvalidation.org/equalTo-method/
            equalTo: function(value, element, param) {
              var target = $4(param);
              if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
                target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                  $4(element).valid();
                });
              }
              return value === target.val();
            },
            // https://jqueryvalidation.org/remote-method/
            remote: function(value, element, param, method) {
              if (this.optional(element)) {
                return "dependency-mismatch";
              }
              method = typeof method === "string" && method || "remote";
              var previous = this.previousValue(element, method), validator, data, optionDataString;
              if (!this.settings.messages[element.name]) {
                this.settings.messages[element.name] = {};
              }
              previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
              this.settings.messages[element.name][method] = previous.message;
              param = typeof param === "string" && { url: param } || param;
              optionDataString = $4.param($4.extend({ data: value }, param.data));
              if (previous.valid !== null && previous.old === optionDataString) {
                return previous.valid;
              }
              previous.old = optionDataString;
              previous.valid = null;
              validator = this;
              this.startRequest(element);
              data = {};
              data[element.name] = value;
              $4.ajax($4.extend(true, {
                mode: "abort",
                port: this.elementAjaxPort(element),
                dataType: "json",
                data,
                context: validator.currentForm,
                success: function(response) {
                  var valid = response === true || response === "true", errors, message, submitted;
                  validator.settings.messages[element.name][method] = previous.originalMessage;
                  if (valid) {
                    submitted = validator.formSubmitted;
                    validator.toHide = validator.errorsFor(element);
                    validator.formSubmitted = submitted;
                    validator.successList.push(element);
                    validator.invalid[element.name] = false;
                    validator.showErrors();
                  } else {
                    errors = {};
                    message = response || validator.defaultMessage(element, { method, parameters: value });
                    errors[element.name] = previous.message = message;
                    validator.invalid[element.name] = true;
                    validator.showErrors(errors);
                  }
                  previous.valid = valid;
                  validator.stopRequest(element, valid);
                }
              }, param));
              return "pending";
            }
          }
        });
        var pendingRequests = {}, ajax;
        if ($4.ajaxPrefilter) {
          $4.ajaxPrefilter(function(settings, _, xhr) {
            var port = settings.port;
            if (settings.mode === "abort") {
              $4.ajaxAbort(port);
              pendingRequests[port] = xhr;
            }
          });
        } else {
          ajax = $4.ajax;
          $4.ajax = function(settings) {
            var mode = ("mode" in settings ? settings : $4.ajaxSettings).mode, port = ("port" in settings ? settings : $4.ajaxSettings).port;
            if (mode === "abort") {
              $4.ajaxAbort(port);
              pendingRequests[port] = ajax.apply(this, arguments);
              return pendingRequests[port];
            }
            return ajax.apply(this, arguments);
          };
        }
        $4.ajaxAbort = function(port) {
          if (pendingRequests[port]) {
            pendingRequests[port].abort();
            delete pendingRequests[port];
          }
        };
        return $4;
      });
    }
  });

  // src/components/_global/js/animate/global.js
  function global_default(QLD) {
    var animate = {};
    function CalculateAnimationSpecs(initialSize, endSize, speed) {
      if (initialSize === endSize) {
        return {
          stepSize: 0,
          steps: 0,
          intervalTime: 0
        };
      }
      var distance = endSize - initialSize;
      var intervalTime = speed / distance;
      var stepSize = distance < 0 ? -1 : 1;
      var steps = Math.abs(distance / stepSize);
      intervalTime = speed / steps;
      if (Math.abs(intervalTime) < 1e3 / 60) {
        intervalTime = 1e3 / 60;
        steps = Math.ceil(Math.abs(speed / intervalTime));
        stepSize = distance / steps;
      }
      return {
        stepSize,
        steps: steps - 1,
        intervalTime
      };
    }
    if (typeof module !== "undefined") {
      animate.CalculateAnimationSpecs = CalculateAnimationSpecs;
    }
    animate.GetCSSPropertyBecauseIE = function(element, property) {
      if (typeof getComputedStyle !== "undefined") {
        return window.getComputedStyle(element)[property];
      } else {
        var space = element.currentStyle[property];
        if (space === "auto") {
          space = QLD.animate.CalculateAuto(element, property);
        }
        return space;
      }
    };
    animate.CalculateAuto = function(element, dimension) {
      var initialSize;
      var endSize;
      if (dimension === "height") {
        initialSize = element.clientHeight;
        element.style[dimension] = "auto";
        endSize = element.clientHeight;
        element.style[dimension] = initialSize + "px";
      } else {
        initialSize = element.clientWidth;
        element.style[dimension] = "auto";
        endSize = element.clientWidth;
        element.style[dimension] = initialSize + "px";
      }
      return parseInt(endSize);
    };
    animate.Stop = function(element) {
      clearInterval(element.QLDanimation);
    };
    animate.Run = function(options) {
      var elements = options.element;
      var speed = options.speed || 250;
      if (elements.length === void 0) {
        elements = [elements];
      }
      if (typeof options.callback !== "function") {
        options.callback = function() {
        };
      }
      elements[0].QLDinteration = 0;
      elements[0].QLDinterations = elements.length;
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        QLD.animate.Stop(element);
        var initialSize = parseInt(QLD.animate.GetCSSPropertyBecauseIE(element, options.property));
        var endSize = options.endSize;
        if (options.endSize === "auto") {
          endSize = QLD.animate.CalculateAuto(element, options.property);
        }
        var animationSpecs = CalculateAnimationSpecs(initialSize, endSize, speed);
        var iterateCounter = initialSize;
        if (animationSpecs.stepSize < 0) {
          element.QLDtoggleState = "closing";
        } else if (animationSpecs.stepSize > 0) {
          element.QLDtoggleState = "opening";
        }
        (function(element2, initialSize2, iterateCounter2, animationSpecs2, endSize2) {
          element2.QLDanimation = setInterval(function() {
            if (initialSize2 === endSize2 || animationSpecs2.steps === 0) {
              QLD.animate.Stop(element2);
              element2.style[options.property] = endSize2 + "px";
              element2.QLDtoggleState = "";
              elements[0].QLDinteration++;
              if (options.endSize === "auto") {
                element2.style[options.property] = "";
              }
              if (elements[0].QLDinteration >= elements[0].QLDinterations) {
                return options.callback();
              }
            } else {
              iterateCounter2 += animationSpecs2.stepSize;
              element2.style[options.property] = iterateCounter2 + "px";
              animationSpecs2.steps--;
            }
          }, Math.abs(animationSpecs2.intervalTime));
        })(element, initialSize, iterateCounter, animationSpecs, endSize);
      }
    };
    animate.Toggle = function(options) {
      var elements = options.element;
      var property = options.property || "height";
      var speed = options.speed || 250;
      var closeSize = options.closeSize === void 0 ? 0 : options.closeSize;
      var openSize = options.openSize === void 0 ? "auto" : options.openSize;
      if (elements.length === void 0) {
        elements = [elements];
      }
      if (typeof options.prefunction !== "function") {
        options.prefunction = function() {
        };
      }
      if (typeof options.postfunction !== "function") {
        options.postfunction = function() {
        };
      }
      if (typeof options.callback !== "function") {
        options.callback = function() {
        };
      }
      elements[0].QLDtoggleInteration = 0;
      elements[0].QLDtoggleInterations = elements.length;
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        QLD.animate.Stop(element);
        var targetSize;
        var preState = "";
        var postState = "";
        var currentSize = parseInt(QLD.animate.GetCSSPropertyBecauseIE(element, options.property));
        console.log(currentSize);
        if (currentSize === closeSize || element.QLDtoggleState === "closing") {
          targetSize = openSize;
          preState = "opening";
          postState = "open";
        } else if (currentSize !== closeSize || element.QLDtoggleState === "opening") {
          targetSize = closeSize;
          preState = "closing";
          postState = "closed";
        } else {
          throw new Error("QLD.animate.Toggle cannot determine state of element");
        }
        options.prefunction(element, preState);
        QLD.animate.Run({
          element,
          endSize: targetSize,
          property,
          speed,
          callback: function() {
            elements[0].QLDtoggleInteration++;
            if (elements[0].QLDtoggleInteration === elements[0].QLDinterations) {
              var returnParam = options.callback(element, postState);
              options.postfunction(element, postState);
              return returnParam;
            }
            options.postfunction(element, postState);
          }
        });
      }
    };
    QLD.animate = animate;
  }

  // src/components/_global/js/forms/global.js
  function global_default2(QLD) {
    "use strict";
    var forms = {};
    forms.init = function() {
      $.validator.addMethod("nospaces", function(value, element) {
        return this.optional(element) || value.indexOf(" ") === -1;
      });
      $.validator.addMethod("postcode", function(value, element) {
        return this.optional(element) || !isNaN(value) && value.length === 4;
      });
      $(".qld__form--validate").each(function() {
        var $form = $(this);
        $form.validate({
          // Error properties
          errorElement: "p",
          errorClass: "qld__input--error",
          errorAttribute: "tabindex=\u201D0\u2033",
          // Place error appropriately in DOM
          errorPlacement: function(error, element) {
            if (element.closest(".sq-form-question-answer").length > 0) {
              var errorPlacement = element.closest(".sq-form-question-answer").parent();
              var errorID = "#" + error[0].id.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1");
              error.attr("tabindex", "0");
              if (errorPlacement.find(errorID).length === 0) {
                if (element.closest(".qld__form-file-wrapper").length > 0) {
                  element.closest(".qld__form-file-wrapper").before(error);
                } else {
                  error.prependTo(errorPlacement);
                }
              }
              error.focus();
            } else if (element.closest(".qld__form-group").length > 0) {
              error.attr("tabindex", "0");
              error.prependTo(element.closest(".qld__form-group"));
              error.focus();
            }
          },
          // Set valid class
          validClass: "qld__input--valid",
          // Check validation on focus out
          onfocusout: function(element) {
            $(element).valid();
          },
          // Check validation on click
          onclick: function(element) {
            if (element.type === "radio" || element.type === "checkbox") {
              $(element).valid();
            }
          },
          // Highlight invalid
          highlight: function(element, errorClass, validClass) {
            if (element.type === "radio" || element.type === "checkbox") {
              this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else if (element.type === "file" && element.classList.contains("qld__file-input")) {
              $(element).closest(".qld__form-file-dropzone").addClass(errorClass).removeClass(validClass);
            } else {
              $(element).addClass(errorClass).removeClass(validClass);
            }
          },
          // Highlight valid
          unhighlight: function(element, errorClass, validClass) {
            if (element.type === "radio" || element.type === "checkbox") {
              if (this.findByName(element.name).is(":checked") || this.findByName(element.name).is(":selected")) {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
              }
            } else if (element.type === "file" && element.classList.contains("qld__file-input")) {
              $(element).closest(".qld__form-file-dropzone").removeClass(errorClass).addClass(validClass);
            } else {
              if ($(element).val().length > 0) {
                $(element).removeClass(errorClass).addClass(validClass);
              }
            }
          }
        });
        if (typeof addCustomRules !== "undefined") {
          addCustomRules();
        }
        updateRequiredLabels($form);
        $form.on("change", function() {
          updateRequiredLabels($(this));
        });
        updateHelperText($form);
        dobFieldAutocomplete($form);
        $form.find("select").on("change", function() {
          console.log("select change");
          $(this).valid();
        });
      });
      $("[data-displayif-show]").each(function() {
        displayCheck($(this));
      });
    };
    QLD.forms = forms;
    document.addEventListener("DOMContentLoaded", function(event2) {
      QLD.forms.init();
    });
    function updateRequiredLabels($form) {
      var $requiredFields = $form.find("[required]");
      $requiredFields.each(function() {
        var $field = $(this);
        var $question = $field.closest(".sq-form-question");
        if ($question.length > 0) {
          var $requiredLabel = $question.find(".sq-form-required-field");
          if ($requiredLabel.length === 0) {
            var $title = $question.find(".sq-form-question-title");
            $title.append(' <abbr class="sq-form-required-field" title="required">*</abbr>');
          }
        }
      });
    }
    ;
    function updateHelperText($form) {
      var $allFields = $form.find("input:not([type=hidden])");
      $allFields.each(function() {
        var currentField = $(this);
        var currentID = $(this).attr("id");
        if (currentField.parents(".sq-form-question-answer").siblings(".sq-form-question-note").length) {
          currentField.attr("aria-describedby", currentID + "_description");
          currentField.parents(".sq-form-question-answer").siblings(".sq-form-question-note").attr("id", currentID + "_description");
        }
      });
    }
    ;
    function dobFieldAutocomplete($form) {
      var $dateFieldWrapper = $form.find(".sq-form-question-datetime");
      if ($dateFieldWrapper.length) {
        var $dateFieldWrapperId = $form.find(".sq-form-question-datetime").attr("id");
        var $dateFieldLegend = $dateFieldWrapper.find("legend");
        var $dateFieldLegendId = $dateFieldWrapperId.replace(/(wrapper)/g, "legend");
        var $dateField = $dateFieldWrapper.find("input:not([type=hidden])");
        var $dateHelperTextId = $dateFieldWrapper.find("em.sq-form-question-note").attr("id");
        $dateFieldLegend.attr("id", $dateFieldLegendId);
        $dateFieldLegend.attr("aria-labeledby", $dateFieldLegendId + " " + $dateHelperTextId);
        if ($dateFieldWrapper.find(".sq-form-question-title").text().toLowerCase().indexOf("birth") >= 0) {
          $dateField.each(function() {
            var currentField = $(this);
            var currentID = $(this).attr("id");
            if (currentID.toLowerCase().indexOf("value_d") >= 0) {
              currentField.attr("autocomplete", "bday-day");
            } else if (currentID.toLowerCase().indexOf("value_m") >= 0) {
              currentField.attr("autocomplete", "bday-month");
            } else if (currentID.toLowerCase().indexOf("value_y") >= 0) {
              currentField.attr("autocomplete", "bday-year");
            }
          });
        }
      }
    }
    ;
    function displayCheck(field) {
      var show_hide = field[0].dataset.displayifShow;
      var logic_operator = field[0].dataset.displayifOperator;
      var rules = field[0].dataset.displayifRule.replaceAll("}{", "},{");
      rules = JSON.parse(rules);
      var rulesPassed = 0;
      var ruleCount = rules.length;
      for (var j = 0; j < ruleCount; j++) {
        var rule = rules[j];
        var fieldName = rule.field;
        var operator = rule.operator;
        var ruleValue = rule.value;
        var dependantOnField = $("#" + fieldName);
        var fieldValue = dependantOnField.val();
        if (fieldName.indexOf(":") !== -1) {
          dependantOnField = $(`[name="${fieldName}"]`);
          fieldValue = $(`[name="${fieldName}"]:checked`).val();
        }
        dependantOnField.on("change", function() {
          displayCheck(field);
        });
        if (dependantOnField.is(`input[type="checkbox"]`)) {
          if (!dependantOnField.is(":checked")) {
            fieldValue = "";
          }
        }
        if (operator == "equals") {
          if (fieldValue == ruleValue) {
            rulesPassed++;
          }
        } else if (operator == "less_than") {
          var dependantNumber = Number(fieldValue);
          var valueNumber = Number(ruleValue);
          if (!Number.isNaN(dependantNumber) && !Number.isNaN(valueNumber)) {
            if (dependantNumber < valueNumber) {
              rulesPassed++;
            }
          }
        } else if (operator == "greater_than") {
          var dependantNumber = Number(fieldValue);
          var valueNumber = Number(ruleValue);
          if (!Number.isNaN(dependantNumber) && !Number.isNaN(valueNumber)) {
            if (dependantNumber > valueNumber) {
              rulesPassed++;
            }
          }
        } else if (operator == "contains") {
          if (fieldValue.indexOf(ruleValue) !== -1) {
            rulesPassed++;
          }
        }
      }
      if (logic_operator === "AND") {
        if (rulesPassed === ruleCount) {
          showHideField($(field).closest(".sq-form-question"), show_hide);
        } else {
          showHideField($(field).closest(".sq-form-question"), !show_hide);
        }
      } else if (logic_operator === "OR") {
        if (rulesPassed > 0) {
          showHideField($(field).closest(".sq-form-question"), show_hide);
        } else {
          showHideField($(field).closest(".sq-form-question"), !show_hide);
        }
      }
    }
    function showHideField(field, show_hide) {
      if (show_hide) {
        $(field).removeClass("hidden");
      } else {
        $(field).addClass("hidden");
      }
    }
  }

  // src/components/_global/js/global.js
  function global_default3(QLD) {
    "use strict";
    QLD.utils = {
      /**
       * Add 'js' body class if JS is enabled on the page
       *
       * @memberof module:_global
       */
      "browserJS": function() {
        document.querySelector("html").classList.remove("no-js");
        document.querySelector("html").classList.add("js");
      },
      /**
       * Returns a function, that, as long as it continues to be invoked, will not
       * be triggered. The function will be called after it stops being called for
       * N milliseconds. If `immediate` is passed, trigger the function on the
       * leading edge, instead of the trailing.
       * https://davidwalsh.name/javascript-debounce-function
       *
       * @memberof module:_global
       *
       * @param {function} func
       * @param {number} wait
       * @param {boolean} immediate
       *
       * @returns {function}
       */
      "debounce": function(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      },
      /**
       * Convert nodeList to Array (for IE11)
       *
       * @memberof module:_global
       *
       * @param {*} node_list
       *
       * @returns {Node[]}
       */
      "listToArray": function(node_list) {
        return Array.prototype.slice.call(node_list);
      },
      /**
       * Set browser cookie
       *
       * @memberof module:_global
       *
       * @param {string} cookie_name
       * @param {string} cookie_value
       */
      "setCookie": function(cookie_name, cookie_value) {
        var cookie_entry = cookie_name + "=" + encodeURIComponent(cookie_value) + ";";
        document.cookie = cookie_entry + "; path=/;";
      },
      /**
       * Get browser cookie
       *
       * @memberof module:_global
       *
       * @param {string} cookie_name
       *
       * @returns {c_value}
       */
      "getCookie": function(cookie_name) {
        var c_value = " " + document.cookie;
        var c_start = c_value.indexOf(" " + cookie_name + "=");
        if (c_start == -1) {
          c_value = null;
        } else {
          c_start = c_value.indexOf("=", c_start) + 1;
          var c_end = c_value.indexOf(";", c_start);
          if (c_end == -1) {
            c_end = c_value.length;
          }
          c_value = unescape(c_value.substring(c_start, c_end));
        }
        return c_value;
      },
      /**
       * Set browser local storage
       *
       * @memberof module:_global
       *
       * @param {string} storage_key
       * @param {string} storage_value
       */
      "setLocalStorage": function(storage_key, storage_value) {
        if (typeof storage_value !== "string") {
          storage_value = JSON.stringify(storage_value);
        }
        localStorage.setItem(storage_key, storage_value);
      },
      /**
       * Get browser local storage from key
       *
       * @memberof module:_global
       *
       * @param {string} storage_key
       *
       * @returns {localStorage.getItem(storage_key)}
       */
      "getLocalStorage": function(storage_key) {
        return localStorage.getItem(storage_key);
      },
      /**
       * Remove browser local storage item by key
       *
       * @memberof module:_global
       *
       * @param {string} storage_key
       */
      "removeLocalStorage": function(storage_key) {
        localStorage.removeItem(storage_key);
      },
      /**
       * Determine the location of the user using HTML5 geolocation
       *
       * @memberof module:_global
       *
       * @param {Boolean} override
       * @param {function} errorCallback
       */
      "geolocateUser": function(override, errorCallback) {
        var userLocationStorage = QLD.utils.getLocalStorage("qld_user_location");
        if (userLocationStorage !== null && !override) {
          return JSON.parse(userLocationStorage);
        }
        if (navigator.geolocation) {
          QLD.utils.setLoadingState(true);
          navigator.geolocation.getCurrentPosition(function(position) {
            var location2 = {
              "latitude": position.coords.latitude,
              "longitude": position.coords.longitude,
              "isGeolocated": true,
              "location": ""
            };
            QLD.utils.setUserLocation(location2);
            QLD.utils.removeLocalStorage("deny-location");
            return `${position.coords.latitude},${position.coords.longitude}`;
          }, function(error) {
            console.log(error);
            QLD.utils.setLoadingState(false);
            if (errorCallback) {
              errorCallback();
            }
            return false;
          }, { timeout: 1e4 });
        } else {
          console.log("Unable to locate");
          if (errorCallback) {
            errorCallback();
          }
          return false;
        }
      },
      /**
       * Set the user location, including the HHS
       *
       * @memberof module:_global
       *
       * @param {object} location
       */
      "setUserLocation": function(location2, refresh = true) {
        var hhsDiv = document.getElementById("qld__hhs");
        if (hhsDiv !== null && typeof serviceFinderData !== "undefined") {
          var hhsId = hhsDiv.getAttribute("data-hhs");
          serviceFinderData.collection("hhs").doc(hhsId).get().then((response) => {
            location2.hhs_id = hhsId;
            location2.hhs_name = response.name;
            QLD.utils.setUserLocationInStorage(location2, refresh);
          });
        } else {
          QLD.utils.setUserLocationInStorage(location2, refresh);
        }
      },
      /**
       * Set the 'qld_user_location' cookie based on a provided location object
       *
       * @memberof module:_global
       *
       */
      "setUserLocationInStorage": function(newLocation, refresh) {
        QLD.utils.setLocalStorage("qld_user_location", JSON.stringify(newLocation));
        if (refresh) {
          QLD.utils.setLoadingState(true);
          setTimeout(function() {
            window.location.reload(false);
          }, 300);
        }
      },
      /**
       * Check the 'qld_user_location' cookie to determine
       * whether the user is geolocated
       *
       * @memberof module:_global
       *
       * @return {boolean}
       *
       */
      "isGeolocated": function() {
        var userLocationStorage = QLD.utils.getLocalStorage("qld_user_location");
        var userLocationData = {};
        if (userLocationStorage !== null) {
          userLocationData = JSON.parse(userLocationStorage);
        }
        if (Object.keys(userLocationData).length > 0) {
          return userLocationData.isGeolocated;
        }
        return false;
      },
      /**
       * Set the loading state of the page. If 'true',
       * this will show a loader animation overlay over
       * the entire page. Use 'false' to remove this
       * same animation
       *
       * @memberof module:_global
       *
       * @param {Boolean} isLoading
       */
      "setLoadingState": function(isLoading) {
        var loader = document.querySelector(".loader");
        if (loader === null) {
          loader = document.createElement("div");
          loader.classList.add("loader");
          var parentNode = document.querySelector(".main");
          parentNode.insertBefore(loader, parentNode.firstChild);
        }
        if (isLoading) {
          loader.parentNode.classList.add("loading");
        } else {
          document.querySelector(".loading").classList.remove("loading");
        }
      },
      /**
       * Get Paramater from URL by name
       *
       * @memberof module:_global
       *
       * @param {*} name
       */
      "getParamaterByName": function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
          return "";
        else
          return decodeURIComponent(results[1].replace(/\+/g, " "));
      }
    };
    QLD.utils.browserJS();
  }

  // src/components/_global/js/modal/global.js
  function global_default4(QLD) {
    var Modal = {
      // Vars
      "events": {},
      "callbackFns": {},
      /**
       * Initialise a specific modal
       *
       * @memberof module:Modal
       *
       * @param {Node} modalBtn The modal button element
       */
      "init": function(modalBtn) {
        if (typeof modalBtn !== "undefined") {
          modalBtn.addEventListener("click", Modal.open);
        } else {
          var modalBtns = document.querySelectorAll(".qld__open-modal");
          modalBtns.forEach((modalBtn2) => {
            modalBtn2.addEventListener("click", Modal.open);
          });
        }
      },
      /**
       * Open the modal
       *
       * @memberof module:Modal
       *
       * @param {Document.event} e
       */
      "open": function(e) {
        let modalOpenBtn = e.currentTarget ? e.currentTarget : null;
        if (modalOpenBtn !== null) {
          var modalTarget = modalOpenBtn.getAttribute("data-modaltarget");
          var modalEl = document.querySelector(`#${modalTarget}`);
          var modalCloseBtns = modalEl.querySelectorAll('button[data-action="close"]');
          var modalUnderlay = modalEl.querySelector(".qld__modal__underlay");
        } else {
          var modalEl = e.get(0);
          var modalCloseBtns = modalEl.querySelectorAll('button[data-action="close"], button[data-action="deny-location"]');
          var modalUnderlay = modalEl.querySelector(".qld__modal__underlay");
        }
        let focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        let firstFocusableElement = modalEl.querySelectorAll(focusableElements)[0];
        let focusableContent = modalEl.querySelectorAll(focusableElements);
        let lastFocusableElement = focusableContent[focusableContent.length - 1];
        Modal.events.keydown = Modal.addEvent(document, "keydown", function(e2) {
          if (e2.keyCode === 27) {
            modalOpenBtn.focus();
            Modal.close(e2);
            return;
          }
          let isTabPressed = e2.key === "Tab" || e2.keyCode === 9;
          if (!isTabPressed) {
            return;
          }
          if (e2.shiftKey) {
            if (document.activeElement === firstFocusableElement || document.activeElement === modalEl) {
              lastFocusableElement.focus();
              e2.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e2.preventDefault();
            }
          }
        });
        modalEl.classList.add("active");
        modalEl.focus();
        modalCloseBtns.forEach(function(button2, index) {
          Modal.events["close-" + index] = Modal.addEvent(button2, "click", function(e2) {
            modalOpenBtn !== null ? modalOpenBtn.focus() : null;
            Modal.close(e2);
          });
        });
        if (modalUnderlay) {
          Modal.events.underlay = Modal.addEvent(modalUnderlay, "click", Modal.close);
        }
        for (var key in Modal.callbackFns) {
          var button = modalEl.querySelector('button[data-callback="' + key + '"]');
          if (button !== null) {
            Modal.events["callback-" + key] = Modal.addEvent(button, "click", function(e2) {
              Modal.close(e2);
              var callbackKey = e2.target.getAttribute("data-callback");
              Modal.callbackFns[callbackKey](e2);
            });
          }
        }
      },
      /**
       * Close the modal
       *
       * @memberof module:Modal
       *
       * @param {Document.event} e
       */
      "close": function(e) {
        console.log("close");
        var modalEl = e.target.closest(".qld__modal");
        modalEl.classList.remove("active");
        for (var i in Modal.events) {
          var event2 = Modal.events[i];
          Modal.removeEvent(event2);
        }
      },
      /**
       * Object representing an event listener
       *
       * @typedef {Object} event
       * @property {Node} element             Element the event is attached to
       * @property {function} handler         Event handler function
       * @property {document#event} event     DOM event to listen for
       */
      /**
       * Add event listener
       *
       * @memberof module:Modal
       * @instance
       * @private
       *
       * @param {Node} element            DOM element to add event to
       * @param {document#event} event    The event to listen for
       * @param {function} rawHandler     The raw handler function
       * @return {event}
       */
      "addEvent": function(element, event2, rawHandler) {
        function listenHandler(event3) {
          var handler = rawHandler.apply(this, arguments);
          if (handler === false) {
            event3.stopPropagation();
            event3.preventDefault();
          }
          return handler;
        }
        function attachHandler() {
          var handler = rawHandler.call(element, window.event);
          if (handler === false) {
            window.event.returnValue = false;
            window.event.cancelBubble = true;
          }
          return handler;
        }
        if (element.addEventListener) {
          element.addEventListener(event2, listenHandler, false);
          return {
            element,
            handler: listenHandler,
            event: event2
          };
        } else {
          element.attachEvent("on" + event2, attachHandler);
          return {
            element,
            handler: attachHandler,
            event: event2
          };
        }
      },
      /**
       * Remove event listener
       *
       * @memberof module:Modal
       * @instance
       * @private
       *
       * @param {event} token     The event to remove
       */
      "removeEvent": function(token) {
        if (token.element.removeEventListener) {
          token.element.removeEventListener(token.event, token.handler);
        } else {
          token.element.detachEvent("on" + token.event, token.handler);
        }
      }
    };
    var QLD = QLD ? QLD : {};
    QLD.Modal = Modal;
    window.QLD = QLD;
    window.addEventListener("DOMContentLoaded", function() {
      if (document.querySelector(".qld__open-modal") !== null) {
        QLD.Modal.init();
      }
    });
  }

  // src/components/_global/js/tabs/global.js
  function global_default5(QLD) {
    var keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      delete: 46
    };
    var direction = {
      37: -1,
      38: -1,
      39: 1,
      40: 1
    };
    var tabs = {
      // Vars
      "buttons": null,
      /**
       * Initialise any tab components on the page
       *
       * @memberof module:tabs
       */
      "init": function() {
        tabs.buttons = QLD.utils.listToArray(document.querySelectorAll('[role="tab"]'));
        for (var i = 0; i < tabs.buttons.length; i++) {
          addListeners(i);
        }
        ;
      }
    };
    function addListeners(index) {
      var tab = tabs.buttons[index];
      tab.addEventListener("click", clickEventListener);
      tab.addEventListener("keydown", keydownEventListener);
      tab.addEventListener("keyup", keyupEventListener);
      tab.index = index;
    }
    ;
    function clickEventListener(event2) {
      var tab = event2.target;
      activateTab(tab, false);
    }
    ;
    function keydownEventListener(event2) {
      var key = event2.keyCode;
      var tab = event2.target;
      var tablist = tab.parentNode;
      var siblingTabs = QLD.utils.listToArray(tablist.querySelectorAll('[role="tab"]'));
      var firstTab = siblingTabs[0];
      var lastTab = siblingTabs[siblingTabs.length - 1];
      switch (key) {
        case keys.end:
          event2.preventDefault();
          activateTab(lastTab);
          break;
        case keys.home:
          event2.preventDefault();
          activateTab(firstTab);
          break;
        // Up and down are in keydown
        // because we need to prevent page scroll >:)
        case keys.up:
        case keys.down:
          determineOrientation(event2);
          break;
      }
      ;
    }
    ;
    function keyupEventListener(event2) {
      var key = event2.keyCode;
      switch (key) {
        case keys.left:
        case keys.right:
          determineOrientation(event2);
          break;
      }
      ;
    }
    ;
    function determineOrientation(event2) {
      var key = event2.keyCode;
      var tab = event2.target;
      var tablist = tab.parentNode;
      var vertical = tablist.getAttribute("aria-orientation") == "vertical";
      var proceed = false;
      if (vertical) {
        if (key === keys.up || key === keys.down) {
          event2.preventDefault();
          proceed = true;
        }
        ;
      } else {
        if (key === keys.left || key === keys.right) {
          proceed = true;
        }
        ;
      }
      ;
      if (proceed) {
        switchTabOnArrowPress(event2);
      }
      ;
    }
    ;
    function switchTabOnArrowPress(event2) {
      var pressed = event2.keyCode;
      var tab = event2.target;
      var tablist = tab.parentNode;
      var siblingTabs = QLD.utils.listToArray(tablist.querySelectorAll('[role="tab"]'));
      var firstTabIndex = siblingTabs[0].index;
      for (var x = 0; x < siblingTabs.length; x++) {
        siblingTabs[x].addEventListener("focus", focusEventHandler);
      }
      ;
      if (direction[pressed]) {
        if (tab.index !== void 0) {
          var newIndex = tab.index - firstTabIndex + direction[pressed];
          if (siblingTabs[newIndex]) {
            siblingTabs[newIndex].focus();
          } else if (pressed === keys.left || pressed === keys.up) {
            siblingTabs[0].focus();
          } else if (pressed === keys.right || pressed == keys.down) {
            siblingTabs[siblingTabs.length - 1].focus();
          }
          ;
        }
        ;
      }
      ;
    }
    ;
    function activateTab(tab, setFocus) {
      setFocus = setFocus || true;
      deactivatetabs(tab);
      tab.removeAttribute("tabindex");
      tab.setAttribute("aria-selected", "true");
      var controls = tab.getAttribute("aria-controls");
      document.getElementById(controls).removeAttribute("hidden");
      if (setFocus) {
        tab.focus();
      }
      ;
    }
    ;
    function deactivatetabs(tab) {
      var tablist = tab.parentNode;
      var siblingTabs = QLD.utils.listToArray(tablist.querySelectorAll('[role="tab"]'));
      for (var t = 0; t < siblingTabs.length; t++) {
        var tab = siblingTabs[t];
        tab.setAttribute("tabindex", "-1");
        tab.setAttribute("aria-selected", "false");
        tab.removeEventListener("focus", focusEventHandler);
        var controls = tab.getAttribute("aria-controls");
        var panel = document.getElementById(controls);
        panel.setAttribute("hidden", "hidden");
      }
      ;
    }
    ;
    function focusEventHandler(event2) {
      var target = event2.target;
      setTimeout(checkTabFocus, 300, target);
    }
    ;
    function checkTabFocus(target) {
      var focused = document.activeElement;
      if (target === focused) {
        activateTab(target, false);
      }
      ;
    }
    ;
    var QLD = QLD ? QLD : {};
    QLD.tabs = tabs;
    window.QLD = QLD;
    window.addEventListener("DOMContentLoaded", function() {
      QLD.tabs.init();
    });
  }

  // src/components/a-z_listing/js/global.js
  function global_default6(QLD) {
    "use strict";
    window.addEventListener("DOMContentLoaded", function() {
      function checkIfAzSelected() {
        var hash = window.location.hash;
        if (hash) {
          setTimeout(function() {
            var $servicesAZOptions = $(".qld__a-z_listing__options__item__link");
            var $servicesAZHeaders = $(".qld__a-z_listing__list__item__header");
            $servicesAZOptions.each(function() {
              $(this).removeClass("active");
            });
            $servicesAZHeaders.each(function() {
              $(this).removeClass("active");
            });
            $(`a[href^="${hash}"].qld__a-z_listing__options__item__link`).addClass("active");
            $(`.qld__a-z_listing__list__item__header ${hash}`).parent().addClass("active");
            $("html, body").animate({
              scrollTop: $(hash).offset().top - 20
            }, 400);
          }, 100);
        }
      }
      $(document).on("click", 'a[href^="#"].qld__a-z_listing__options__item__link', function(event2) {
        var $servicesAZOptions = $(".qld__a-z_listing__options__item__link");
        var $servicesAZHeaders = $(".qld__a-z_listing__list__item__header");
        var target = $.attr(this, "href");
        event2.preventDefault();
        $servicesAZOptions.each(function() {
          $(this).removeClass("active");
        });
        $servicesAZHeaders.each(function() {
          $(this).removeClass("active");
        });
        $(this).addClass("active");
        $(`.qld__a-z_listing__list__item__header ${target}`).parent().addClass("active");
        $("html, body").animate({
          scrollTop: $(target).offset().top - 20
        }, 400);
        window.location.hash = target;
      });
      $(window).on("hashchange", function() {
        checkIfAzSelected();
      });
      checkIfAzSelected();
    });
  }

  // src/components/accordion/js/global.js
  function global_default7(QLD) {
    var accordion = {};
    function setAriaRoles(element, target, state) {
      if (state === "closing") {
        element.setAttribute("aria-expanded", false);
      } else {
        element.setAttribute("aria-expanded", true);
      }
    }
    function toggleClasses(element, state, openingClass, closingClass) {
      var oldClass;
      var newClass;
      if (state === "opening" || state === "open") {
        oldClass = openingClass || "qld__accordion--closed";
        newClass = closingClass || "qld__accordion--open";
      } else {
        oldClass = closingClass || "qld__accordion--open";
        newClass = openingClass || "qld__accordion--closed";
      }
      removeClass(element, oldClass);
      addClass(element, newClass);
    }
    function removeClass(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else {
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
    }
    function addClass(element, className) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        element.className = element.className + " " + className;
      }
    }
    accordion.Toggle = function(elements, speed, callbacks) {
      try {
        window.event.cancelBubble = true;
        event.stopPropagation();
      } catch (error) {
      }
      if (elements.length === void 0) {
        elements = [elements];
      }
      if (typeof callbacks != "object") {
        callbacks = {};
      }
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var targetId = element.getAttribute("aria-controls");
        var target = document.getElementById(targetId);
        if (target == null) {
          throw new Error(
            "accordion.Toggle cannot find the target to be toggled from inside aria-controls.\nMake sure the first argument you give accordion.Toggle is the DOM element (a button or a link) that has an aria-controls attribute that points to a div that you want to toggle."
          );
        }
        target.style.display = "block";
        (function(element2) {
          QLD.animate.Toggle({
            element: target,
            property: "height",
            speed: speed || 250,
            prefunction: function(target2, state) {
              if (state === "opening") {
                target2.style.display = "block";
                if (typeof callbacks.onOpen === "function") {
                  callbacks.onOpen();
                }
              } else {
                if (typeof callbacks.onClose === "function") {
                  callbacks.onClose();
                }
              }
              setAriaRoles(element2, target2, state);
              toggleClasses(element2, state);
            },
            postfunction: function(target2, state) {
              if (state === "closed") {
                target2.style.display = "";
                target2.style.height = "";
                if (typeof window.dataLayer !== "undefined") {
                  window.dataLayer.push({
                    event: "accordion closed",
                    category: "accordion",
                    action: "close",
                    label: targetId
                  });
                }
                if (typeof callbacks.afterClose === "function") {
                  callbacks.afterClose();
                }
              } else {
                target2.style.display = "";
                target2.style.height = "";
                if (typeof window.dataLayer !== "undefined") {
                  window.dataLayer.push({
                    event: "accordion open",
                    category: "accordion",
                    action: "open",
                    label: targetId
                  });
                }
                if (typeof callbacks.afterOpen === "function") {
                  callbacks.afterOpen();
                }
                if (target2.classList.contains("qld__overflow_menu")) {
                  var overFlowLinks = [];
                  overFlowLinks = target2.querySelectorAll("a.qld__overflow_menu_list-item-link");
                  if (overFlowLinks[0]) {
                    setTimeout(function() {
                      overFlowLinks[0].focus();
                    }, 10);
                  }
                }
              }
              toggleClasses(target2, state);
            },
            callback: function(target2, state) {
              const controller = new AbortController();
              function toggleNavOnDocumentClick(event2) {
                if (!event2.target.closest(".qld__main-nav__menu-sub.qld__accordion__body.qld__accordion--open")) {
                  controller.abort();
                  if (elements[0].classList.contains("qld__accordion--open")) {
                    accordion.Toggle(elements, speed, callbacks);
                  }
                }
              }
              if (state === "open" || state === "opening") {
                if (this.element.classList.contains("qld__main-nav__menu-sub") || this.element.classList.contains("qld__overflow_menu")) {
                  document.addEventListener(
                    "click",
                    toggleNavOnDocumentClick,
                    { signal: controller.signal }
                  );
                }
              } else {
                if (this.element.classList.contains("qld__main-nav__menu-sub") || this.element.classList.contains("qld__overflow_menu")) {
                  document.removeEventListener(
                    "click",
                    toggleNavOnDocumentClick,
                    { signal: controller.signal }
                  );
                  controller.abort();
                }
              }
            }
          });
        })(element);
      }
      return false;
    };
    accordion.ToggleAll = function(elements, speed, callbacks) {
      try {
        window.event.cancelBubble = true;
        event.stopPropagation();
      } catch (error) {
      }
      var toogleAllButton = elements;
      var wrapper = toogleAllButton.closest(".qld__accordion-group");
      var accordionButtons = wrapper.querySelectorAll(".qld__accordion__title");
      if (typeof callbacks != "object") {
        callbacks = {};
      }
      if (toogleAllButton.classList.contains("qld__accordion__toggle-btn--closed")) {
        toogleAllButton.classList.remove("qld__accordion__toggle-btn--closed");
        toogleAllButton.classList.add("qld__accordion__toggle-btn--open");
        toogleAllButton.textContent = "Close all";
        accordion.Open(accordionButtons);
      } else if (toogleAllButton.classList.contains("qld__accordion__toggle-btn--open")) {
        toogleAllButton.classList.remove("qld__accordion__toggle-btn--open");
        toogleAllButton.classList.add("qld__accordion__toggle-btn--closed");
        toogleAllButton.textContent = "Open all";
        accordion.Close(accordionButtons);
      }
      return false;
    };
    accordion.Open = function(elements, speed) {
      try {
        window.event.cancelBubble = true;
        event.stopPropagation();
      } catch (error) {
      }
      if (elements.length === void 0) {
        elements = [elements];
      }
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var targetId = element.getAttribute("aria-controls");
        var target = document.getElementById(targetId);
        var height = 0;
        if (typeof getComputedStyle !== "undefined") {
          height = window.getComputedStyle(target).height;
        } else {
          height = target.currentStyle.height;
        }
        if (parseInt(height) === 0) {
          target.style.height = "0px";
        }
        target.style.display = "";
        toggleClasses(target, "opening");
        toggleClasses(element, "opening");
        setAriaRoles(element, target, "opening");
        if (typeof window.dataLayer !== "undefined") {
          window.dataLayer.push({
            event: "accordion open",
            category: "accordion",
            action: "close",
            label: targetId
          });
        }
        (function(target2, speed2, element2) {
          QLD.animate.Run({
            element: target2,
            property: "height",
            endSize: "auto",
            speed: speed2 || 250,
            callback: function() {
              toggleClasses(element2, "opening");
            }
          });
        })(target, speed, element);
      }
    };
    accordion.Close = function(elements, speed) {
      try {
        window.event.cancelBubble = true;
        event.stopPropagation();
      } catch (error) {
      }
      if (elements.length === void 0) {
        elements = [elements];
      }
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var targetId = element.getAttribute("aria-controls");
        var target = document.getElementById(targetId);
        toggleClasses(element, "closing");
        setAriaRoles(element, target, "closing");
        if (typeof window.dataLayer !== "undefined") {
          window.dataLayer.push({
            event: "accordion close",
            category: "accordion",
            action: "close",
            label: targetId
          });
        }
        (function(target2, speed2) {
          QLD.animate.Run({
            element: target2,
            property: "height",
            endSize: 0,
            speed: speed2 || 250,
            callback: function() {
              target2.style.display = "";
              toggleClasses(target2, "close");
            }
          });
        })(target, speed);
      }
    };
    accordion.init = function(element) {
      if (element == "overflow") {
        var overflowMenuButtons = document.querySelectorAll(".qld__overflow_menu__btn");
        overflowMenuButtons.forEach(function(button) {
          button.addEventListener("click", function() {
            accordion.Toggle(button);
          });
        });
      } else {
        var accordionButtons = document.querySelectorAll(".qld__accordion__title");
        accordionButtons.forEach(function(button) {
          button.addEventListener("click", function() {
            accordion.Toggle(button);
          });
        });
        var accordionAllButtton = document.querySelectorAll(".qld__accordion__toggle-btn");
        accordionAllButtton.forEach(function(button) {
          button.addEventListener("click", function() {
            accordion.ToggleAll(button);
          });
        });
      }
    };
    QLD.accordion = accordion;
    window.addEventListener("DOMContentLoaded", function() {
      QLD.accordion.init();
    });
  }

  // src/components/basic_search/js/global.js
  function global_default8(QLD) {
    var basicSearch = {};
    basicSearch.init = function() {
      var searchForm = document.querySelector(".qld__banner__search .qld__search-form");
      if (searchForm) {
        searchForm.querySelector(".qld__btn--search").setAttribute("type", "submit");
        searchForm.querySelectorAll(".qld__btn--search, .qld__text-input").forEach((el) => {
          el.removeAttribute("disabled");
        });
        checkHoneypot(searchForm);
      }
      if (document.querySelector(".qld__search__sort #search-sort")) {
        var selectElement = document.getElementById("search-sort");
        var currentUrl = new URL(window.location.href);
        var searchParams = new URLSearchParams(currentUrl.search);
        if (searchParams.has("sort")) {
          selectElement.value = searchParams.get("sort");
        }
        selectElement.addEventListener("change", function() {
          var selectedValue = this.value;
          searchParams.set("sort", selectedValue);
          currentUrl.search = searchParams.toString();
          window.location.href = currentUrl.toString();
        });
      }
      ;
    };
    function checkHoneypot(searchForm) {
      var honeypot = searchForm.querySelector(".qld__text-input--validation");
      honeypot.value = "";
      searchForm.addEventListener("submit", function(event2) {
        if (honeypot.value !== "") {
          event2.preventDefault();
        } else {
          honeypot.removeAttribute("name");
        }
      });
    }
    QLD.basicSearch = basicSearch;
    window.addEventListener("DOMContentLoaded", function() {
      QLD.basicSearch.init();
    });
  }

  // src/components/breadcrumbs/js/global.js
  function global_default9(QLD) {
    "use strict";
    var breadcrumb = {};
    var originalBreadCrumbUl = null;
    function getTheElements(resized = false) {
      const bannerBreadCrumbsAll = document.querySelectorAll(
        "nav.qld__banner__breadcrumbs--desktop"
      );
      const bodyBreadCrumbsAll = document.querySelectorAll(
        "section.qld__body--breadcrumb nav.qld__breadcrumbs"
      );
      const bannerBreadCrumbArray = [...bannerBreadCrumbsAll, ...bodyBreadCrumbsAll];
      const bannerBreadCrumb = bannerBreadCrumbArray.find(
        (breadcrumb2) => {
          return breadcrumb2.offsetWidth > 0;
        }
      );
      if (bannerBreadCrumb) {
        const containerFluid = bannerBreadCrumb.closest(".container-fluid");
        const containerFluidStyle = window.getComputedStyle(containerFluid);
        const paddings = parseFloat(containerFluidStyle.getPropertyValue("padding-right").replace(/[^\d.]/g, "")) + parseFloat(containerFluidStyle.getPropertyValue("padding-left").replace(/[^\d.]/g, ""));
        bannerBreadCrumb.style.maxWidth = containerFluid.offsetWidth - paddings + "px";
        if (!originalBreadCrumbUl) {
          originalBreadCrumbUl = bannerBreadCrumb.querySelector("ul.qld__link-list").cloneNode(true);
        }
        if (resized) {
          bannerBreadCrumb.querySelector("ul.qld__link-list").innerHTML = originalBreadCrumbUl.innerHTML;
        }
        const breadCrumbsUl = bannerBreadCrumb.querySelector("ul.qld__link-list");
        breadCrumbsUl.style.maxWidth = containerFluid.offsetWidth - paddings + "px";
        return {
          bannerBreadCrumb,
          breadCrumbsUl
        };
      }
    }
    function createOverFlow() {
      const overFlowWrapper = document.createElement("div");
      overFlowWrapper.className = "qld__overflow_menu_wrapper";
      const button = document.createElement("button");
      button.className = "qld__btn qld__btn--toggle qld__overflow_menu__btn qld__accordion--closed";
      button.setAttribute("href", "#");
      button.setAttribute("aria-controls", "overflow-menu--");
      button.setAttribute("aria-expanded", "false");
      const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      svg.classList.add("qld__icon");
      svg.classList.add("qld__icon--lg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("viewBox", "0 0 448 512");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      svg.setAttribute("width", "24");
      svg.setAttribute("height", "32");
      svg.setAttribute("role", "img");
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("fill", "currentColor");
      path.setAttribute(
        "d",
        "M352 256C352 238.3 366.3 224 384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256z"
      );
      svg.appendChild(path);
      button.appendChild(svg);
      overFlowWrapper.appendChild(button);
      const div = document.createElement("div");
      div.className = "qld__overflow_menu qld__accordion--closed";
      div.setAttribute("id", "overflow-menu--");
      const ul = document.createElement("ul");
      ul.className = "qld__overflow_menu_list";
      ul.setAttribute("aria-label", "qld__overflow_menu qld__link-columns");
      div.appendChild(ul);
      overFlowWrapper.appendChild(div);
      return overFlowWrapper;
    }
    function insertOverFlowButton(overFlowWrapper, element) {
      const newElement = document.createElement("div");
      newElement.className = "qld__overflow_menu_list-item";
      const link = element.querySelector("a");
      link.classList.add("qld__overflow_menu_list-item-link");
      link.setAttribute("tabindex", "0");
      newElement.appendChild(link);
      const ul = overFlowWrapper.querySelector("ul");
      ul.appendChild(newElement);
      return overFlowWrapper;
    }
    function truncateLastLi(breadCrumbsUlLis) {
      breadCrumbsUlLis[breadCrumbsUlLis.length - 1].style.overflow = "hidden";
    }
    function appendOverflow(breadCrumbsUlLis, overflowMenu, breadcrumbUL) {
      breadCrumbsUlLis[1].innerHTML = "";
      breadCrumbsUlLis[1].className = "qld__overflow_menu--breadcrumbs";
      breadCrumbsUlLis[1].appendChild(overflowMenu);
      breadCrumbsUlLis[1].style.display = "flex";
    }
    breadcrumb.init = function() {
      if (getTheElements()) {
        const { breadCrumbsUl } = getTheElements();
        const breadCrumbsUlLis = breadCrumbsUl.querySelectorAll("li");
        if (breadCrumbsUlLis.length > 2 && breadCrumbsUlLis[0].offsetHeight > 0) {
          const overflowMenu = createOverFlow();
          let breadcrumbLisLength = breadCrumbsUlLis.length;
          let i = 1;
          let totalLisOffsetWidth = 0;
          for (let i2 = 0; i2 < breadCrumbsUlLis.length; i2++) {
            totalLisOffsetWidth += breadCrumbsUlLis[i2].offsetWidth;
          }
          if (breadcrumbLisLength > 5) {
            insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
            breadCrumbsUlLis[1].style.display = "none";
            appendOverflow(breadCrumbsUlLis, overflowMenu, breadCrumbsUl);
            i = 2;
            while (i < breadCrumbsUlLis.length - 2) {
              insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
              breadCrumbsUlLis[i].style.display = "none";
              i++;
            }
          } else if (breadCrumbsUl.offsetHeight > breadCrumbsUlLis[0].offsetHeight * 1.9) {
            if (breadcrumbLisLength > 3) {
              insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
              breadCrumbsUlLis[1].style.display = "none";
              appendOverflow(breadCrumbsUlLis, overflowMenu, breadCrumbsUl);
            }
            i = 2;
            while (breadCrumbsUl.offsetHeight > breadCrumbsUlLis[0].offsetHeight * 1.9 && i < breadcrumbLisLength - 2) {
              insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
              breadCrumbsUlLis[i].style.display = "none";
              i++;
            }
          } else if (parseFloat(breadCrumbsUl.style.maxWidth.replace(/[^\d.]/g, "")) < totalLisOffsetWidth) {
            if (breadcrumbLisLength > 3) {
              insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
              breadCrumbsUlLis[1].style.display = "none";
              appendOverflow(breadCrumbsUlLis, overflowMenu, breadCrumbsUl);
            }
            i = 2;
            while (parseFloat(breadCrumbsUl.style.maxWidth.replace(/[^\d.]/g, "")) < totalLisOffsetWidth && i < breadcrumbLisLength - 2) {
              insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
              breadCrumbsUlLis[i].style.display = "none";
              i++;
            }
          }
          truncateLastLi(breadCrumbsUlLis, breadCrumbsUl);
        }
      }
    };
    QLD.breadcrumb = breadcrumb;
    window.addEventListener("DOMContentLoaded", function() {
      QLD.breadcrumb.init();
      QLD.accordion.init("overflow");
    });
    window.addEventListener("resize", function() {
      getTheElements(true);
      QLD.breadcrumb.init();
      QLD.accordion.init("overflow");
    });
  }

  // src/components/card_multi_action/js/global.js
  function global_default10(QLD) {
    "use strict";
    let multiActionCards = {};
    multiActionCards.init = function() {
      let cards = document.querySelectorAll(".qld__card__multi-action");
      cards.forEach(function(card) {
        let imageLink = card.querySelector(".qld__card__image-link");
        let link = card.querySelector(".qld__card__title .qld__card--clickable__link");
        if (imageLink) {
          imageLink.addEventListener("mouseover", () => {
            link.classList.add("qld__card--clickable__link--active");
          });
          imageLink.addEventListener("mouseout", () => {
            link.classList.remove("qld__card--clickable__link--active");
          });
          link.addEventListener("mouseover", () => {
            imageLink.classList.add("qld__card__image-link--active");
          });
          link.addEventListener("mouseout", () => {
            imageLink.classList.remove("qld__card__image-link--active");
          });
        }
      });
    };
    QLD.multiActionCards = multiActionCards;
    document.addEventListener("DOMContentLoaded", QLD.multiActionCards.init);
  }

  // src/components/code/js/global.js
  var import_prismjs = __toESM(require_prism(), 1);

  // node_modules/prismjs/components/prism-markup-templating.js
  (function(Prism2) {
    function getPlaceholder(language, index) {
      return "___" + language.toUpperCase() + index + "___";
    }
    Object.defineProperties(Prism2.languages["markup-templating"] = {}, {
      buildPlaceholders: {
        /**
         * Tokenize all inline templating expressions matching `placeholderPattern`.
         *
         * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
         * `true` will be replaced.
         *
         * @param {object} env The environment of the `before-tokenize` hook.
         * @param {string} language The language id.
         * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
         * @param {(match: string) => boolean} [replaceFilter]
         */
        value: function(env, language, placeholderPattern, replaceFilter) {
          if (env.language !== language) {
            return;
          }
          var tokenStack = env.tokenStack = [];
          env.code = env.code.replace(placeholderPattern, function(match) {
            if (typeof replaceFilter === "function" && !replaceFilter(match)) {
              return match;
            }
            var i = tokenStack.length;
            var placeholder;
            while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
              ++i;
            }
            tokenStack[i] = match;
            return placeholder;
          });
          env.grammar = Prism2.languages.markup;
        }
      },
      tokenizePlaceholders: {
        /**
         * Replace placeholders with proper tokens after tokenizing.
         *
         * @param {object} env The environment of the `after-tokenize` hook.
         * @param {string} language The language id.
         */
        value: function(env, language) {
          if (env.language !== language || !env.tokenStack) {
            return;
          }
          env.grammar = Prism2.languages[language];
          var j = 0;
          var keys = Object.keys(env.tokenStack);
          function walkTokens(tokens) {
            for (var i = 0; i < tokens.length; i++) {
              if (j >= keys.length) {
                break;
              }
              var token = tokens[i];
              if (typeof token === "string" || token.content && typeof token.content === "string") {
                var k = keys[j];
                var t = env.tokenStack[k];
                var s = typeof token === "string" ? token : token.content;
                var placeholder = getPlaceholder(language, k);
                var index = s.indexOf(placeholder);
                if (index > -1) {
                  ++j;
                  var before = s.substring(0, index);
                  var middle = new Prism2.Token(language, Prism2.tokenize(t, env.grammar), "language-" + language, t);
                  var after = s.substring(index + placeholder.length);
                  var replacement = [];
                  if (before) {
                    replacement.push.apply(replacement, walkTokens([before]));
                  }
                  replacement.push(middle);
                  if (after) {
                    replacement.push.apply(replacement, walkTokens([after]));
                  }
                  if (typeof token === "string") {
                    tokens.splice.apply(tokens, [i, 1].concat(replacement));
                  } else {
                    token.content = replacement;
                  }
                }
              } else if (token.content) {
                walkTokens(token.content);
              }
            }
            return tokens;
          }
          walkTokens(env.tokens);
        }
      }
    });
  })(Prism);

  // node_modules/prismjs/components/prism-php.js
  (function(Prism2) {
    var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
    var constant = [
      {
        pattern: /\b(?:false|true)\b/i,
        alias: "boolean"
      },
      {
        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
        greedy: true,
        lookbehind: true
      },
      {
        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
        greedy: true,
        lookbehind: true
      },
      /\b(?:null)\b/i,
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/
    ];
    var number = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i;
    var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
    var punctuation = /[{}\[\](),:;]/;
    Prism2.languages.php = {
      "delimiter": {
        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
        alias: "important"
      },
      "comment": comment,
      "variable": /\$+(?:\w+\b|(?=\{))/,
      "package": {
        pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        lookbehind: true,
        inside: {
          "punctuation": /\\/
        }
      },
      "class-name-definition": {
        pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
        lookbehind: true,
        alias: "class-name"
      },
      "function-definition": {
        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
        lookbehind: true,
        alias: "function"
      },
      "keyword": [
        {
          pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
          alias: "type-casting",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
          alias: "type-hint",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
          alias: "return-type",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
          alias: "type-declaration",
          greedy: true
        },
        {
          pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
          alias: "type-declaration",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /\b(?:parent|self|static)(?=\s*::)/i,
          alias: "static-context",
          greedy: true
        },
        {
          // yield from
          pattern: /(\byield\s+)from\b/i,
          lookbehind: true
        },
        // `class` is always a keyword unlike other keywords
        /\bclass\b/i,
        {
          // https://www.php.net/manual/en/reserved.keywords.php
          //
          // keywords cannot be preceded by "->"
          // the complex lookbehind means `(?<!(?:->|::)\s*)`
          pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
          lookbehind: true
        }
      ],
      "argument-name": {
        pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
        lookbehind: true
      },
      "class-name": [
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
          greedy: true
        },
        {
          pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
          alias: "class-name-fully-qualified",
          greedy: true,
          lookbehind: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
          alias: "class-name-fully-qualified",
          greedy: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: "class-name-fully-qualified",
          greedy: true,
          lookbehind: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*\$)/i,
          alias: "type-declaration",
          greedy: true
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-declaration"],
          greedy: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*::)/i,
          alias: "static-context",
          greedy: true
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
          alias: ["class-name-fully-qualified", "static-context"],
          greedy: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
          alias: "type-hint",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-hint"],
          greedy: true,
          lookbehind: true,
          inside: {
            "punctuation": /\\/
          }
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
          alias: "return-type",
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: ["class-name-fully-qualified", "return-type"],
          greedy: true,
          lookbehind: true,
          inside: {
            "punctuation": /\\/
          }
        }
      ],
      "constant": constant,
      "function": {
        pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
        lookbehind: true,
        inside: {
          "punctuation": /\\/
        }
      },
      "property": {
        pattern: /(->\s*)\w+/,
        lookbehind: true
      },
      "number": number,
      "operator": operator,
      "punctuation": punctuation
    };
    var string_interpolation = {
      pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: true,
      inside: Prism2.languages.php
    };
    var string = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: "nowdoc-string",
        greedy: true,
        inside: {
          "delimiter": {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              "punctuation": /^<<<'?|[';]$/
            }
          }
        }
      },
      {
        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: "heredoc-string",
        greedy: true,
        inside: {
          "delimiter": {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              "punctuation": /^<<<"?|[";]$/
            }
          },
          "interpolation": string_interpolation
        }
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: "backtick-quoted-string",
        greedy: true
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: "single-quoted-string",
        greedy: true
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: "double-quoted-string",
        greedy: true,
        inside: {
          "interpolation": string_interpolation
        }
      }
    ];
    Prism2.languages.insertBefore("php", "variable", {
      "string": string,
      "attribute": {
        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: true,
        inside: {
          "attribute-content": {
            pattern: /^(#\[)[\s\S]+(?=\]$)/,
            lookbehind: true,
            // inside can appear subset of php
            inside: {
              "comment": comment,
              "string": string,
              "attribute-class-name": [
                {
                  pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                  alias: "class-name",
                  greedy: true,
                  lookbehind: true
                },
                {
                  pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                  alias: [
                    "class-name",
                    "class-name-fully-qualified"
                  ],
                  greedy: true,
                  lookbehind: true,
                  inside: {
                    "punctuation": /\\/
                  }
                }
              ],
              "constant": constant,
              "number": number,
              "operator": operator,
              "punctuation": punctuation
            }
          },
          "delimiter": {
            pattern: /^#\[|\]$/,
            alias: "punctuation"
          }
        }
      }
    });
    Prism2.hooks.add("before-tokenize", function(env) {
      if (!/<\?/.test(env.code)) {
        return;
      }
      var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
      Prism2.languages["markup-templating"].buildPlaceholders(env, "php", phpPattern);
    });
    Prism2.hooks.add("after-tokenize", function(env) {
      Prism2.languages["markup-templating"].tokenizePlaceholders(env, "php");
    });
  })(Prism);

  // node_modules/prismjs/components/prism-java.js
  (function(Prism2) {
    var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;
    var classNamePrefix = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;
    var className = {
      pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: true,
      inside: {
        "namespace": {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            "punctuation": /\./
          }
        },
        "punctuation": /\./
      }
    };
    Prism2.languages.java = Prism2.languages.extend("clike", {
      "string": {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
        lookbehind: true,
        greedy: true
      },
      "class-name": [
        className,
        {
          // variables, parameters, and constructor references
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
          lookbehind: true,
          inside: className.inside
        },
        {
          // class names based on keyword
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + classNamePrefix + /[A-Z]\w*\b/.source),
          lookbehind: true,
          inside: className.inside
        }
      ],
      "keyword": keywords,
      "function": [
        Prism2.languages.clike.function,
        {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: true
        }
      ],
      "number": /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      "operator": {
        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: true
      },
      "constant": /\b[A-Z][A-Z_\d]+\b/
    });
    Prism2.languages.insertBefore("java", "string", {
      "triple-quoted-string": {
        // http://openjdk.java.net/jeps/355#Description
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: true,
        alias: "string"
      },
      "char": {
        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
        greedy: true
      }
    });
    Prism2.languages.insertBefore("java", "class-name", {
      "annotation": {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: true,
        alias: "punctuation"
      },
      "generics": {
        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          "class-name": className,
          "keyword": keywords,
          "punctuation": /[<>(),.:]/,
          "operator": /[?&|]/
        }
      },
      "import": [
        {
          pattern: RegExp(/(\bimport\s+)/.source + classNamePrefix + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
          lookbehind: true,
          inside: {
            "namespace": className.inside.namespace,
            "punctuation": /\./,
            "operator": /\*/,
            "class-name": /\w+/
          }
        },
        {
          pattern: RegExp(/(\bimport\s+static\s+)/.source + classNamePrefix + /(?:\w+|\*)(?=\s*;)/.source),
          lookbehind: true,
          alias: "static",
          inside: {
            "namespace": className.inside.namespace,
            "static": /\b\w+$/,
            "punctuation": /\./,
            "operator": /\*/,
            "class-name": /\w+/
          }
        }
      ],
      "namespace": {
        pattern: RegExp(
          /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
            return keywords.source;
          })
        ),
        lookbehind: true,
        inside: {
          "punctuation": /\./
        }
      }
    });
  })(Prism);

  // src/components/code/js/global.js
  function global_default11(QLD) {
    var code = {};
    code.init = function() {
      const codes = document.querySelectorAll("code");
      const inlinecodes = document.querySelectorAll("code:not(.qld__code-body)");
      const copyButtons = document.querySelectorAll(".qld__code-copy--button");
      const showToggle = document.querySelectorAll(".qld__code-toggle-button");
      const colorButtons = document.querySelectorAll(".qld__code-preview-colours input[type=radio]");
      if (codes.length) {
        codes.forEach(function(code2) {
          code2.innerHTML = Prism.highlight(code2.innerText, Prism.languages.html, "html");
        });
      }
      if (inlinecodes.length) {
        inlinecodes.forEach(function(inlinecode) {
          const codeWrap = document.createElement("div");
          codeWrap.classList.add("qld__code--inline");
          inlinecode.replaceWith(codeWrap);
          codeWrap.appendChild(inlinecode);
          const tooltip = document.createElement("span");
          const tooltipText = document.createTextNode("Copy");
          tooltip.appendChild(tooltipText);
          tooltip.classList.add("qld__code-tooltip");
          inlinecode.after(tooltip);
          inlinecode.setAttribute("tabindex", 0);
          inlinecode.addEventListener("click", function() {
            copyButtonAction(this);
          });
          inlinecode.addEventListener("keypress", function(event2) {
            if (event2.key === "Enter") {
              event2.preventDefault();
              copyButtonAction(this);
            }
          });
        });
      }
      if (copyButtons.length) {
        copyButtons.forEach(function(copyButton) {
          copyButton.addEventListener("click", function() {
            copyButtonAction(this);
          });
        });
      }
      if (showToggle.length) {
        showToggle.forEach(function(showToggleButton) {
          const parent = showToggleButton.closest(".qld__code");
          const target = parent.querySelector("code");
          target.style.height = "120px";
          showToggleButton.addEventListener("click", function() {
            if (this.innerText.indexOf("more") > -1) {
              this.innerHTML = 'Show less<i class="fa-regular fa-chevron-up"></i>';
            } else {
              this.innerHTML = 'Show more<i class="fa-regular fa-chevron-up"></i>';
            }
            QLD.animate.Toggle({
              element: target,
              property: "height",
              speed: 250,
              closeSize: 120,
              prefunction: function() {
                parent.classList.toggle("show_less");
              }
            });
          });
        });
      }
      if (colorButtons.length) {
        colorButtons.forEach(function(colorButton) {
          colorButton.addEventListener("change", function() {
            const body = colorButton.closest(".qld__code").querySelector(".qld__code-preview-body");
            body.classList.remove("qld__body--light", "qld__body--alt", "qld__body--dark", "qld__body--dark-alt");
            if (this.value) {
              body.classList.add(this.value);
            }
            const toggle = colorButton.closest(".qld__code").querySelector(".qld__code-toggle");
            if (typeof toggle !== "undefined") {
              toggle.classList.remove("qld__body--light", "qld__body--alt", "qld__body--dark", "qld__body--dark-alt");
              if (this.value) {
                toggle.classList.add(this.value);
              }
            }
          });
        });
      }
    };
    function copyButtonAction(button) {
      if (button.classList.contains("qld__code-copy--button")) {
        const parent = button.closest(".qld__code");
        copyTextToClipboard(parent.querySelector("code").innerText);
        button.classList.add("copied");
        setTimeout(() => {
          button.classList.remove("copied");
        }, "1500");
      } else {
        copyTextToClipboard(button.innerText);
        button.nextElementSibling.innerText = "Copied";
        button.addEventListener("blur", function() {
          button.nextElementSibling.innerText = "Copy";
        });
      }
    }
    function fallbackCopyTextToClipboard(text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand("copy");
        const msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
    }
    function copyTextToClipboard(text) {
      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
      }
      navigator.clipboard.writeText(text).then(function() {
        console.log("Async: Copying to clipboard was successful!");
      }, function(err) {
        console.error("Async: Could not copy text: ", err);
      });
    }
    QLD.code = code;
    document.addEventListener("DOMContentLoaded", QLD.code.init);
  }

  // node_modules/datatables.net/js/dataTables.mjs
  var import_jquery = __toESM(require_jquery(), 1);
  var $2 = import_jquery.default;
  var DataTable = function(selector, options) {
    if (DataTable.factory(selector, options)) {
      return DataTable;
    }
    if (this instanceof DataTable) {
      return $2(selector).DataTable(options);
    } else {
      options = selector;
    }
    var _that = this;
    var emptyInit = options === void 0;
    var len = this.length;
    if (emptyInit) {
      options = {};
    }
    this.api = function() {
      return new _Api(this);
    };
    this.each(function() {
      var o = {};
      var oInit = len > 1 ? (
        // optimisation for single table case
        _fnExtend(o, options, true)
      ) : options;
      var i = 0, iLen;
      var sId = this.getAttribute("id");
      var defaults = DataTable.defaults;
      var $this = $2(this);
      if (this.nodeName.toLowerCase() != "table") {
        _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
        return;
      }
      $2(this).trigger("options.dt", oInit);
      _fnCompatOpts(defaults);
      _fnCompatCols(defaults.column);
      _fnCamelToHungarian(defaults, defaults, true);
      _fnCamelToHungarian(defaults.column, defaults.column, true);
      _fnCamelToHungarian(defaults, $2.extend(oInit, $this.data()), true);
      var allSettings = DataTable.settings;
      for (i = 0, iLen = allSettings.length; i < iLen; i++) {
        var s = allSettings[i];
        if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
          var bRetrieve = oInit.bRetrieve !== void 0 ? oInit.bRetrieve : defaults.bRetrieve;
          var bDestroy = oInit.bDestroy !== void 0 ? oInit.bDestroy : defaults.bDestroy;
          if (emptyInit || bRetrieve) {
            return s.oInstance;
          } else if (bDestroy) {
            new DataTable.Api(s).destroy();
            break;
          } else {
            _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
            return;
          }
        }
        if (s.sTableId == this.id) {
          allSettings.splice(i, 1);
          break;
        }
      }
      if (sId === null || sId === "") {
        sId = "DataTables_Table_" + DataTable.ext._unique++;
        this.id = sId;
      }
      var oSettings = $2.extend(true, {}, DataTable.models.oSettings, {
        "sDestroyWidth": $this[0].style.width,
        "sInstance": sId,
        "sTableId": sId,
        colgroup: $2("<colgroup>").prependTo(this),
        fastData: function(row, column, type) {
          return _fnGetCellData(oSettings, row, column, type);
        }
      });
      oSettings.nTable = this;
      oSettings.oInit = oInit;
      allSettings.push(oSettings);
      oSettings.api = new _Api(oSettings);
      oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();
      _fnCompatOpts(oInit);
      if (oInit.aLengthMenu && !oInit.iDisplayLength) {
        oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : $2.isPlainObject(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0].value : oInit.aLengthMenu[0];
      }
      oInit = _fnExtend($2.extend(true, {}, defaults), oInit);
      _fnMap(oSettings.oFeatures, oInit, [
        "bPaginate",
        "bLengthChange",
        "bFilter",
        "bSort",
        "bSortMulti",
        "bInfo",
        "bProcessing",
        "bAutoWidth",
        "bSortClasses",
        "bServerSide",
        "bDeferRender"
      ]);
      _fnMap(oSettings, oInit, [
        "ajax",
        "fnFormatNumber",
        "sServerMethod",
        "aaSorting",
        "aaSortingFixed",
        "aLengthMenu",
        "sPaginationType",
        "iStateDuration",
        "bSortCellsTop",
        "iTabIndex",
        "sDom",
        "fnStateLoadCallback",
        "fnStateSaveCallback",
        "renderer",
        "searchDelay",
        "rowId",
        "caption",
        "layout",
        "orderDescReverse",
        "typeDetect",
        ["iCookieDuration", "iStateDuration"],
        // backwards compat
        ["oSearch", "oPreviousSearch"],
        ["aoSearchCols", "aoPreSearchCols"],
        ["iDisplayLength", "_iDisplayLength"]
      ]);
      _fnMap(oSettings.oScroll, oInit, [
        ["sScrollX", "sX"],
        ["sScrollXInner", "sXInner"],
        ["sScrollY", "sY"],
        ["bScrollCollapse", "bCollapse"]
      ]);
      _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
      _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback);
      _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams);
      _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams);
      _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded);
      _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback);
      _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow);
      _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback);
      _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback);
      _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete);
      _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback);
      oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
      _fnBrowserDetect(oSettings);
      var oClasses = oSettings.oClasses;
      $2.extend(oClasses, DataTable.ext.classes, oInit.oClasses);
      $this.addClass(oClasses.table);
      if (!oSettings.oFeatures.bPaginate) {
        oInit.iDisplayStart = 0;
      }
      if (oSettings.iInitDisplayStart === void 0) {
        oSettings.iInitDisplayStart = oInit.iDisplayStart;
        oSettings._iDisplayStart = oInit.iDisplayStart;
      }
      var defer = oInit.iDeferLoading;
      if (defer !== null) {
        oSettings.deferLoading = true;
        var tmp = Array.isArray(defer);
        oSettings._iRecordsDisplay = tmp ? defer[0] : defer;
        oSettings._iRecordsTotal = tmp ? defer[1] : defer;
      }
      var columnsInit = [];
      var thead = this.getElementsByTagName("thead");
      var initHeaderLayout = _fnDetectHeader(oSettings, thead[0]);
      if (oInit.aoColumns) {
        columnsInit = oInit.aoColumns;
      } else if (initHeaderLayout.length) {
        for (i = 0, iLen = initHeaderLayout[0].length; i < iLen; i++) {
          columnsInit.push(null);
        }
      }
      for (i = 0, iLen = columnsInit.length; i < iLen; i++) {
        _fnAddColumn(oSettings);
      }
      _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, columnsInit, initHeaderLayout, function(iCol, oDef) {
        _fnColumnOptions(oSettings, iCol, oDef);
      });
      var rowOne = $this.children("tbody").find("tr").eq(0);
      if (rowOne.length) {
        var a = function(cell, name) {
          return cell.getAttribute("data-" + name) !== null ? name : null;
        };
        $2(rowOne[0]).children("th, td").each(function(i2, cell) {
          var col = oSettings.aoColumns[i2];
          if (!col) {
            _fnLog(oSettings, 0, "Incorrect column count", 18);
          }
          if (col.mData === i2) {
            var sort = a(cell, "sort") || a(cell, "order");
            var filter = a(cell, "filter") || a(cell, "search");
            if (sort !== null || filter !== null) {
              col.mData = {
                _: i2 + ".display",
                sort: sort !== null ? i2 + ".@data-" + sort : void 0,
                type: sort !== null ? i2 + ".@data-" + sort : void 0,
                filter: filter !== null ? i2 + ".@data-" + filter : void 0
              };
              col._isArrayHost = true;
              _fnColumnOptions(oSettings, i2);
            }
          }
        });
      }
      _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState);
      var features = oSettings.oFeatures;
      if (oInit.bStateSave) {
        features.bStateSave = true;
      }
      if (oInit.aaSorting === void 0) {
        var sorting = oSettings.aaSorting;
        for (i = 0, iLen = sorting.length; i < iLen; i++) {
          sorting[i][1] = oSettings.aoColumns[i].asSorting[0];
        }
      }
      _fnSortingClasses(oSettings);
      _fnCallbackReg(oSettings, "aoDrawCallback", function() {
        if (oSettings.bSorted || _fnDataSource(oSettings) === "ssp" || features.bDeferRender) {
          _fnSortingClasses(oSettings);
        }
      });
      var caption = $this.children("caption");
      if (oSettings.caption) {
        if (caption.length === 0) {
          caption = $2("<caption/>").appendTo($this);
        }
        caption.html(oSettings.caption);
      }
      if (caption.length) {
        caption[0]._captionSide = caption.css("caption-side");
        oSettings.captionNode = caption[0];
      }
      if (thead.length === 0) {
        thead = $2("<thead/>").appendTo($this);
      }
      oSettings.nTHead = thead[0];
      var tbody = $this.children("tbody");
      if (tbody.length === 0) {
        tbody = $2("<tbody/>").insertAfter(thead);
      }
      oSettings.nTBody = tbody[0];
      var tfoot = $this.children("tfoot");
      if (tfoot.length === 0) {
        tfoot = $2("<tfoot/>").appendTo($this);
      }
      oSettings.nTFoot = tfoot[0];
      oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
      oSettings.bInitialised = true;
      var oLanguage = oSettings.oLanguage;
      $2.extend(true, oLanguage, oInit.oLanguage);
      if (oLanguage.sUrl) {
        $2.ajax({
          dataType: "json",
          url: oLanguage.sUrl,
          success: function(json) {
            _fnCamelToHungarian(defaults.oLanguage, json);
            $2.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
            _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
            _fnInitialise(oSettings);
          },
          error: function() {
            _fnLog(oSettings, 0, "i18n file loading error", 21);
            _fnInitialise(oSettings);
          }
        });
      } else {
        _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
        _fnInitialise(oSettings);
      }
    });
    _that = null;
    return this;
  };
  DataTable.ext = _ext = {
    /**
     * Buttons. For use with the Buttons extension for DataTables. This is
     * defined here so other extensions can define buttons regardless of load
     * order. It is _not_ used by DataTables core.
     *
     *  @type object
     *  @default {}
     */
    buttons: {},
    /**
     * Element class names
     *
     *  @type object
     *  @default {}
     */
    classes: {},
    /**
     * DataTables build type (expanded by the download builder)
     *
     *  @type string
     */
    builder: "-source-",
    /**
     * Error reporting.
     * 
     * How should DataTables report an error. Can take the value 'alert',
     * 'throw', 'none' or a function.
     *
     *  @type string|function
     *  @default alert
     */
    errMode: "alert",
    /**
     * Legacy so v1 plug-ins don't throw js errors on load
     */
    feature: [],
    /**
     * Feature plug-ins.
     * 
     * This is an object of callbacks which provide the features for DataTables
     * to be initialised via the `layout` option.
     */
    features: {},
    /**
     * Row searching.
     * 
     * This method of searching is complimentary to the default type based
     * searching, and a lot more comprehensive as it allows you complete control
     * over the searching logic. Each element in this array is a function
     * (parameters described below) that is called for every row in the table,
     * and your logic decides if it should be included in the searching data set
     * or not.
     *
     * Searching functions have the following input parameters:
     *
     * 1. `{object}` DataTables settings object: see
     *    {@link DataTable.models.oSettings}
     * 2. `{array|object}` Data for the row to be processed (same as the
     *    original format that was passed in as the data source, or an array
     *    from a DOM data source
     * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
     *    can be useful to retrieve the `TR` element if you need DOM interaction.
     *
     * And the following return is expected:
     *
     * * {boolean} Include the row in the searched result set (true) or not
     *   (false)
     *
     * Note that as with the main search ability in DataTables, technically this
     * is "filtering", since it is subtractive. However, for consistency in
     * naming we call it searching here.
     *
     *  @type array
     *  @default []
     *
     *  @example
     *    // The following example shows custom search being applied to the
     *    // fourth column (i.e. the data[3] index) based on two input values
     *    // from the end-user, matching the data in a certain range.
     *    $.fn.dataTable.ext.search.push(
     *      function( settings, data, dataIndex ) {
     *        var min = document.getElementById('min').value * 1;
     *        var max = document.getElementById('max').value * 1;
     *        var version = data[3] == "-" ? 0 : data[3]*1;
     *
     *        if ( min == "" && max == "" ) {
     *          return true;
     *        }
     *        else if ( min == "" && version < max ) {
     *          return true;
     *        }
     *        else if ( min < version && "" == max ) {
     *          return true;
     *        }
     *        else if ( min < version && version < max ) {
     *          return true;
     *        }
     *        return false;
     *      }
     *    );
     */
    search: [],
    /**
     * Selector extensions
     *
     * The `selector` option can be used to extend the options available for the
     * selector modifier options (`selector-modifier` object data type) that
     * each of the three built in selector types offer (row, column and cell +
     * their plural counterparts). For example the Select extension uses this
     * mechanism to provide an option to select only rows, columns and cells
     * that have been marked as selected by the end user (`{selected: true}`),
     * which can be used in conjunction with the existing built in selector
     * options.
     *
     * Each property is an array to which functions can be pushed. The functions
     * take three attributes:
     *
     * * Settings object for the host table
     * * Options object (`selector-modifier` object type)
     * * Array of selected item indexes
     *
     * The return is an array of the resulting item indexes after the custom
     * selector has been applied.
     *
     *  @type object
     */
    selector: {
      cell: [],
      column: [],
      row: []
    },
    /**
     * Legacy configuration options. Enable and disable legacy options that
     * are available in DataTables.
     *
     *  @type object
     */
    legacy: {
      /**
       * Enable / disable DataTables 1.9 compatible server-side processing
       * requests
       *
       *  @type boolean
       *  @default null
       */
      ajax: null
    },
    /**
     * Pagination plug-in methods.
     * 
     * Each entry in this object is a function and defines which buttons should
     * be shown by the pagination rendering method that is used for the table:
     * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
     * buttons are displayed in the document, while the functions here tell it
     * what buttons to display. This is done by returning an array of button
     * descriptions (what each button will do).
     *
     * Pagination types (the four built in options and any additional plug-in
     * options defined here) can be used through the `paginationType`
     * initialisation parameter.
     *
     * The functions defined take two parameters:
     *
     * 1. `{int} page` The current page index
     * 2. `{int} pages` The number of pages in the table
     *
     * Each function is expected to return an array where each element of the
     * array can be one of:
     *
     * * `first` - Jump to first page when activated
     * * `last` - Jump to last page when activated
     * * `previous` - Show previous page when activated
     * * `next` - Show next page when activated
     * * `{int}` - Show page of the index given
     * * `{array}` - A nested array containing the above elements to add a
     *   containing 'DIV' element (might be useful for styling).
     *
     * Note that DataTables v1.9- used this object slightly differently whereby
     * an object with two functions would be defined for each plug-in. That
     * ability is still supported by DataTables 1.10+ to provide backwards
     * compatibility, but this option of use is now decremented and no longer
     * documented in DataTables 1.10+.
     *
     *  @type object
     *  @default {}
     *
     *  @example
     *    // Show previous, next and current page buttons only
     *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
     *      return [ 'previous', page, 'next' ];
     *    };
     */
    pager: {},
    renderer: {
      pageButton: {},
      header: {}
    },
    /**
     * Ordering plug-ins - custom data source
     * 
     * The extension options for ordering of data available here is complimentary
     * to the default type based ordering that DataTables typically uses. It
     * allows much greater control over the the data that is being used to
     * order a column, but is necessarily therefore more complex.
     * 
     * This type of ordering is useful if you want to do ordering based on data
     * live from the DOM (for example the contents of an 'input' element) rather
     * than just the static string that DataTables knows of.
     * 
     * The way these plug-ins work is that you create an array of the values you
     * wish to be ordering for the column in question and then return that
     * array. The data in the array much be in the index order of the rows in
     * the table (not the currently ordering order!). Which order data gathering
     * function is run here depends on the `dt-init columns.orderDataType`
     * parameter that is used for the column (if any).
     *
     * The functions defined take two parameters:
     *
     * 1. `{object}` DataTables settings object: see
     *    {@link DataTable.models.oSettings}
     * 2. `{int}` Target column index
     *
     * Each function is expected to return an array:
     *
     * * `{array}` Data for the column to be ordering upon
     *
     *  @type array
     *
     *  @example
     *    // Ordering using `input` node values
     *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
     *    {
     *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
     *        return $('input', td).val();
     *      } );
     *    }
     */
    order: {},
    /**
     * Type based plug-ins.
     *
     * Each column in DataTables has a type assigned to it, either by automatic
     * detection or by direct assignment using the `type` option for the column.
     * The type of a column will effect how it is ordering and search (plug-ins
     * can also make use of the column type if required).
     *
     * @namespace
     */
    type: {
      /**
       * Automatic column class assignment
       */
      className: {},
      /**
       * Type detection functions.
       *
       * The functions defined in this object are used to automatically detect
       * a column's type, making initialisation of DataTables super easy, even
       * when complex data is in the table.
       *
       * The functions defined take two parameters:
       *
          *  1. `{*}` Data from the column cell to be analysed
          *  2. `{settings}` DataTables settings object. This can be used to
          *     perform context specific type detection - for example detection
          *     based on language settings such as using a comma for a decimal
          *     place. Generally speaking the options from the settings will not
          *     be required
       *
       * Each function is expected to return:
       *
       * * `{string|null}` Data type detected, or null if unknown (and thus
       *   pass it on to the other type detection functions.
       *
       *  @type array
       *
       *  @example
       *    // Currency type detection plug-in:
       *    $.fn.dataTable.ext.type.detect.push(
       *      function ( data, settings ) {
       *        // Check the numeric part
       *        if ( ! data.substring(1).match(/[0-9]/) ) {
       *          return null;
       *        }
       *
       *        // Check prefixed by currency
       *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
       *          return 'currency';
       *        }
       *        return null;
       *      }
       *    );
       */
      detect: [],
      /**
       * Automatic renderer assignment
       */
      render: {},
      /**
       * Type based search formatting.
       *
       * The type based searching functions can be used to pre-format the
       * data to be search on. For example, it can be used to strip HTML
       * tags or to de-format telephone numbers for numeric only searching.
       *
       * Note that is a search is not defined for a column of a given type,
       * no search formatting will be performed.
       * 
       * Pre-processing of searching data plug-ins - When you assign the sType
       * for a column (or have it automatically detected for you by DataTables
       * or a type detection plug-in), you will typically be using this for
       * custom sorting, but it can also be used to provide custom searching
       * by allowing you to pre-processing the data and returning the data in
       * the format that should be searched upon. This is done by adding
       * functions this object with a parameter name which matches the sType
       * for that target column. This is the corollary of <i>afnSortData</i>
       * for searching data.
       *
       * The functions defined take a single parameter:
       *
          *  1. `{*}` Data from the column cell to be prepared for searching
       *
       * Each function is expected to return:
       *
       * * `{string|null}` Formatted string that will be used for the searching.
       *
       *  @type object
       *  @default {}
       *
       *  @example
       *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
       *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
       *    }
       */
      search: {},
      /**
       * Type based ordering.
       *
       * The column type tells DataTables what ordering to apply to the table
       * when a column is sorted upon. The order for each type that is defined,
       * is defined by the functions available in this object.
       *
       * Each ordering option can be described by three properties added to
       * this object:
       *
       * * `{type}-pre` - Pre-formatting function
       * * `{type}-asc` - Ascending order function
       * * `{type}-desc` - Descending order function
       *
       * All three can be used together, only `{type}-pre` or only
       * `{type}-asc` and `{type}-desc` together. It is generally recommended
       * that only `{type}-pre` is used, as this provides the optimal
       * implementation in terms of speed, although the others are provided
       * for compatibility with existing Javascript sort functions.
       *
       * `{type}-pre`: Functions defined take a single parameter:
       *
          *  1. `{*}` Data from the column cell to be prepared for ordering
       *
       * And return:
       *
       * * `{*}` Data to be sorted upon
       *
       * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
       * functions, taking two parameters:
       *
          *  1. `{*}` Data to compare to the second parameter
          *  2. `{*}` Data to compare to the first parameter
       *
       * And returning:
       *
       * * `{*}` Ordering match: <0 if first parameter should be sorted lower
       *   than the second parameter, ===0 if the two parameters are equal and
       *   >0 if the first parameter should be sorted height than the second
       *   parameter.
       * 
       *  @type object
       *  @default {}
       *
       *  @example
       *    // Numeric ordering of formatted numbers with a pre-formatter
       *    $.extend( $.fn.dataTable.ext.type.order, {
       *      "string-pre": function(x) {
       *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
       *        return parseFloat( a );
       *      }
       *    } );
       *
       *  @example
       *    // Case-sensitive string ordering, with no pre-formatting method
       *    $.extend( $.fn.dataTable.ext.order, {
       *      "string-case-asc": function(x,y) {
       *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
       *      },
       *      "string-case-desc": function(x,y) {
       *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
       *      }
       *    } );
       */
      order: {}
    },
    /**
     * Unique DataTables instance counter
     *
     * @type int
     * @private
     */
    _unique: 0,
    //
    // Depreciated
    // The following properties are retained for backwards compatibility only.
    // The should not be used in new projects and will be removed in a future
    // version
    //
    /**
     * Version check function.
     *  @type function
     *  @depreciated Since 1.10
     */
    fnVersionCheck: DataTable.fnVersionCheck,
    /**
     * Index for what 'this' index API functions should use
     *  @type int
     *  @deprecated Since v1.10
     */
    iApiIndex: 0,
    /**
     * Software version
     *  @type string
     *  @deprecated Since v1.10
     */
    sVersion: DataTable.version
  };
  $2.extend(_ext, {
    afnFiltering: _ext.search,
    aTypes: _ext.type.detect,
    ofnSearch: _ext.type.search,
    oSort: _ext.type.order,
    afnSortData: _ext.order,
    aoFeatures: _ext.feature,
    oStdClasses: _ext.classes,
    oPagination: _ext.pager
  });
  $2.extend(DataTable.ext.classes, {
    container: "dt-container",
    empty: {
      row: "dt-empty"
    },
    info: {
      container: "dt-info"
    },
    layout: {
      row: "dt-layout-row",
      cell: "dt-layout-cell",
      tableRow: "dt-layout-table",
      tableCell: "",
      start: "dt-layout-start",
      end: "dt-layout-end",
      full: "dt-layout-full"
    },
    length: {
      container: "dt-length",
      select: "dt-input"
    },
    order: {
      canAsc: "dt-orderable-asc",
      canDesc: "dt-orderable-desc",
      isAsc: "dt-ordering-asc",
      isDesc: "dt-ordering-desc",
      none: "dt-orderable-none",
      position: "sorting_"
    },
    processing: {
      container: "dt-processing"
    },
    scrolling: {
      body: "dt-scroll-body",
      container: "dt-scroll",
      footer: {
        self: "dt-scroll-foot",
        inner: "dt-scroll-footInner"
      },
      header: {
        self: "dt-scroll-head",
        inner: "dt-scroll-headInner"
      }
    },
    search: {
      container: "dt-search",
      input: "dt-input"
    },
    table: "dataTable",
    tbody: {
      cell: "",
      row: ""
    },
    thead: {
      cell: "",
      row: ""
    },
    tfoot: {
      cell: "",
      row: ""
    },
    paging: {
      active: "current",
      button: "dt-paging-button",
      container: "dt-paging",
      disabled: "disabled",
      nav: ""
    }
  });
  var _ext;
  var _Api;
  var _api_register;
  var _api_registerPlural;
  var _re_dic = {};
  var _re_new_lines = /[\r\n\u2028]/g;
  var _re_html = /<([^>]*>)/g;
  var _max_str_len = Math.pow(2, 28);
  var _re_date = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/;
  var _re_escape_regex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g");
  var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
  var _empty = function(d) {
    return !d || d === true || d === "-" ? true : false;
  };
  var _intVal = function(s) {
    var integer = parseInt(s, 10);
    return !isNaN(integer) && isFinite(s) ? integer : null;
  };
  var _numToDecimal = function(num, decimalPoint) {
    if (!_re_dic[decimalPoint]) {
      _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g");
    }
    return typeof num === "string" && decimalPoint !== "." ? num.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num;
  };
  var _isNumber = function(d, decimalPoint, formatted, allowEmpty) {
    var type = typeof d;
    var strType = type === "string";
    if (type === "number" || type === "bigint") {
      return true;
    }
    if (allowEmpty && _empty(d)) {
      return true;
    }
    if (decimalPoint && strType) {
      d = _numToDecimal(d, decimalPoint);
    }
    if (formatted && strType) {
      d = d.replace(_re_formatted_numeric, "");
    }
    return !isNaN(parseFloat(d)) && isFinite(d);
  };
  var _isHtml = function(d) {
    return _empty(d) || typeof d === "string";
  };
  var _htmlNumeric = function(d, decimalPoint, formatted, allowEmpty) {
    if (allowEmpty && _empty(d)) {
      return true;
    }
    if (typeof d === "string" && d.match(/<(input|select)/i)) {
      return null;
    }
    var html = _isHtml(d);
    return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted, allowEmpty) ? true : null;
  };
  var _pluck = function(a, prop, prop2) {
    var out = [];
    var i = 0, ien = a.length;
    if (prop2 !== void 0) {
      for (; i < ien; i++) {
        if (a[i] && a[i][prop]) {
          out.push(a[i][prop][prop2]);
        }
      }
    } else {
      for (; i < ien; i++) {
        if (a[i]) {
          out.push(a[i][prop]);
        }
      }
    }
    return out;
  };
  var _pluck_order = function(a, order, prop, prop2) {
    var out = [];
    var i = 0, ien = order.length;
    if (prop2 !== void 0) {
      for (; i < ien; i++) {
        if (a[order[i]] && a[order[i]][prop]) {
          out.push(a[order[i]][prop][prop2]);
        }
      }
    } else {
      for (; i < ien; i++) {
        if (a[order[i]]) {
          out.push(a[order[i]][prop]);
        }
      }
    }
    return out;
  };
  var _range = function(len, start) {
    var out = [];
    var end;
    if (start === void 0) {
      start = 0;
      end = len;
    } else {
      end = start;
      start = len;
    }
    for (var i = start; i < end; i++) {
      out.push(i);
    }
    return out;
  };
  var _removeEmpty = function(a) {
    var out = [];
    for (var i = 0, ien = a.length; i < ien; i++) {
      if (a[i]) {
        out.push(a[i]);
      }
    }
    return out;
  };
  var _stripHtml = function(input) {
    if (!input || typeof input !== "string") {
      return input;
    }
    if (input.length > _max_str_len) {
      throw new Error("Exceeded max str len");
    }
    var previous;
    input = input.replace(_re_html, "");
    do {
      previous = input;
      input = input.replace(/<script/i, "");
    } while (input !== previous);
    return previous;
  };
  var _escapeHtml = function(d) {
    if (Array.isArray(d)) {
      d = d.join(",");
    }
    return typeof d === "string" ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d;
  };
  var _normalize = function(str, both) {
    if (typeof str !== "string") {
      return str;
    }
    var res = str.normalize ? str.normalize("NFD") : str;
    return res.length !== str.length ? (both === true ? str + " " : "") + res.replace(/[\u0300-\u036f]/g, "") : res;
  };
  var _areAllUnique = function(src) {
    if (src.length < 2) {
      return true;
    }
    var sorted = src.slice().sort();
    var last = sorted[0];
    for (var i = 1, ien = sorted.length; i < ien; i++) {
      if (sorted[i] === last) {
        return false;
      }
      last = sorted[i];
    }
    return true;
  };
  var _unique = function(src) {
    if (Array.from && Set) {
      return Array.from(new Set(src));
    }
    if (_areAllUnique(src)) {
      return src.slice();
    }
    var out = [], val, i, ien = src.length, j, k = 0;
    again: for (i = 0; i < ien; i++) {
      val = src[i];
      for (j = 0; j < k; j++) {
        if (out[j] === val) {
          continue again;
        }
      }
      out.push(val);
      k++;
    }
    return out;
  };
  var _flatten = function(out, val) {
    if (Array.isArray(val)) {
      for (var i = 0; i < val.length; i++) {
        _flatten(out, val[i]);
      }
    } else {
      out.push(val);
    }
    return out;
  };
  function _addClass(el, name) {
    if (name) {
      name.split(" ").forEach(function(n) {
        if (n) {
          el.classList.add(n);
        }
      });
    }
  }
  DataTable.util = {
    /**
     * Return a string with diacritic characters decomposed
     * @param {*} mixed Function or string to normalize
     * @param {*} both Return original string and the normalized string
     * @returns String or undefined
     */
    diacritics: function(mixed, both) {
      var type = typeof mixed;
      if (type !== "function") {
        return _normalize(mixed, both);
      }
      _normalize = mixed;
    },
    /**
     * Debounce a function
     *
     * @param {function} fn Function to be called
     * @param {integer} freq Call frequency in mS
     * @return {function} Wrapped function
     */
    debounce: function(fn, timeout) {
      var timer;
      return function() {
        var that = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
          fn.apply(that, args);
        }, timeout || 250);
      };
    },
    /**
     * Throttle the calls to a function. Arguments and context are maintained
     * for the throttled function.
     *
     * @param {function} fn Function to be called
     * @param {integer} freq Call frequency in mS
     * @return {function} Wrapped function
     */
    throttle: function(fn, freq) {
      var frequency = freq !== void 0 ? freq : 200, last, timer;
      return function() {
        var that = this, now = +/* @__PURE__ */ new Date(), args = arguments;
        if (last && now < last + frequency) {
          clearTimeout(timer);
          timer = setTimeout(function() {
            last = void 0;
            fn.apply(that, args);
          }, frequency);
        } else {
          last = now;
          fn.apply(that, args);
        }
      };
    },
    /**
     * Escape a string such that it can be used in a regular expression
     *
     *  @param {string} val string to escape
     *  @returns {string} escaped string
     */
    escapeRegex: function(val) {
      return val.replace(_re_escape_regex, "\\$1");
    },
    /**
     * Create a function that will write to a nested object or array
     * @param {*} source JSON notation string
     * @returns Write function
     */
    set: function(source) {
      if ($2.isPlainObject(source)) {
        return DataTable.util.set(source._);
      } else if (source === null) {
        return function() {
        };
      } else if (typeof source === "function") {
        return function(data, val, meta) {
          source(data, "set", val, meta);
        };
      } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
        var setData = function(data, val, src) {
          var a = _fnSplitObjNotation(src), b;
          var aLast = a[a.length - 1];
          var arrayNotation, funcNotation, o, innerSrc;
          for (var i = 0, iLen = a.length - 1; i < iLen; i++) {
            if (a[i] === "__proto__" || a[i] === "constructor") {
              throw new Error("Cannot set prototype values");
            }
            arrayNotation = a[i].match(__reArray);
            funcNotation = a[i].match(__reFn);
            if (arrayNotation) {
              a[i] = a[i].replace(__reArray, "");
              data[a[i]] = [];
              b = a.slice();
              b.splice(0, i + 1);
              innerSrc = b.join(".");
              if (Array.isArray(val)) {
                for (var j = 0, jLen = val.length; j < jLen; j++) {
                  o = {};
                  setData(o, val[j], innerSrc);
                  data[a[i]].push(o);
                }
              } else {
                data[a[i]] = val;
              }
              return;
            } else if (funcNotation) {
              a[i] = a[i].replace(__reFn, "");
              data = data[a[i]](val);
            }
            if (data[a[i]] === null || data[a[i]] === void 0) {
              data[a[i]] = {};
            }
            data = data[a[i]];
          }
          if (aLast.match(__reFn)) {
            data = data[aLast.replace(__reFn, "")](val);
          } else {
            data[aLast.replace(__reArray, "")] = val;
          }
        };
        return function(data, val) {
          return setData(data, val, source);
        };
      } else {
        return function(data, val) {
          data[source] = val;
        };
      }
    },
    /**
     * Create a function that will read nested objects from arrays, based on JSON notation
     * @param {*} source JSON notation string
     * @returns Value read
     */
    get: function(source) {
      if ($2.isPlainObject(source)) {
        var o = {};
        $2.each(source, function(key, val) {
          if (val) {
            o[key] = DataTable.util.get(val);
          }
        });
        return function(data, type, row, meta) {
          var t = o[type] || o._;
          return t !== void 0 ? t(data, type, row, meta) : data;
        };
      } else if (source === null) {
        return function(data) {
          return data;
        };
      } else if (typeof source === "function") {
        return function(data, type, row, meta) {
          return source(data, type, row, meta);
        };
      } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
        var fetchData = function(data, type, src) {
          var arrayNotation, funcNotation, out, innerSrc;
          if (src !== "") {
            var a = _fnSplitObjNotation(src);
            for (var i = 0, iLen = a.length; i < iLen; i++) {
              arrayNotation = a[i].match(__reArray);
              funcNotation = a[i].match(__reFn);
              if (arrayNotation) {
                a[i] = a[i].replace(__reArray, "");
                if (a[i] !== "") {
                  data = data[a[i]];
                }
                out = [];
                a.splice(0, i + 1);
                innerSrc = a.join(".");
                if (Array.isArray(data)) {
                  for (var j = 0, jLen = data.length; j < jLen; j++) {
                    out.push(fetchData(data[j], type, innerSrc));
                  }
                }
                var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
                data = join === "" ? out : out.join(join);
                break;
              } else if (funcNotation) {
                a[i] = a[i].replace(__reFn, "");
                data = data[a[i]]();
                continue;
              }
              if (data === null || data[a[i]] === null) {
                return null;
              } else if (data === void 0 || data[a[i]] === void 0) {
                return void 0;
              }
              data = data[a[i]];
            }
          }
          return data;
        };
        return function(data, type) {
          return fetchData(data, type, source);
        };
      } else {
        return function(data) {
          return data[source];
        };
      }
    },
    stripHtml: function(mixed) {
      var type = typeof mixed;
      if (type === "function") {
        _stripHtml = mixed;
        return;
      } else if (type === "string") {
        return _stripHtml(mixed);
      }
      return mixed;
    },
    escapeHtml: function(mixed) {
      var type = typeof mixed;
      if (type === "function") {
        _escapeHtml = mixed;
        return;
      } else if (type === "string" || Array.isArray(mixed)) {
        return _escapeHtml(mixed);
      }
      return mixed;
    },
    unique: _unique
  };
  function _fnHungarianMap(o) {
    var hungarian = "a aa ai ao as b fn i m o s ", match, newKey, map = {};
    $2.each(o, function(key) {
      match = key.match(/^([^A-Z]+?)([A-Z])/);
      if (match && hungarian.indexOf(match[1] + " ") !== -1) {
        newKey = key.replace(match[0], match[2].toLowerCase());
        map[newKey] = key;
        if (match[1] === "o") {
          _fnHungarianMap(o[key]);
        }
      }
    });
    o._hungarianMap = map;
  }
  function _fnCamelToHungarian(src, user, force) {
    if (!src._hungarianMap) {
      _fnHungarianMap(src);
    }
    var hungarianKey;
    $2.each(user, function(key) {
      hungarianKey = src._hungarianMap[key];
      if (hungarianKey !== void 0 && (force || user[hungarianKey] === void 0)) {
        if (hungarianKey.charAt(0) === "o") {
          if (!user[hungarianKey]) {
            user[hungarianKey] = {};
          }
          $2.extend(true, user[hungarianKey], user[key]);
          _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
        } else {
          user[hungarianKey] = user[key];
        }
      }
    });
  }
  var _fnCompatMap = function(o, knew, old) {
    if (o[knew] !== void 0) {
      o[old] = o[knew];
    }
  };
  function _fnCompatOpts(init2) {
    _fnCompatMap(init2, "ordering", "bSort");
    _fnCompatMap(init2, "orderMulti", "bSortMulti");
    _fnCompatMap(init2, "orderClasses", "bSortClasses");
    _fnCompatMap(init2, "orderCellsTop", "bSortCellsTop");
    _fnCompatMap(init2, "order", "aaSorting");
    _fnCompatMap(init2, "orderFixed", "aaSortingFixed");
    _fnCompatMap(init2, "paging", "bPaginate");
    _fnCompatMap(init2, "pagingType", "sPaginationType");
    _fnCompatMap(init2, "pageLength", "iDisplayLength");
    _fnCompatMap(init2, "searching", "bFilter");
    if (typeof init2.sScrollX === "boolean") {
      init2.sScrollX = init2.sScrollX ? "100%" : "";
    }
    if (typeof init2.scrollX === "boolean") {
      init2.scrollX = init2.scrollX ? "100%" : "";
    }
    var searchCols = init2.aoSearchCols;
    if (searchCols) {
      for (var i = 0, ien = searchCols.length; i < ien; i++) {
        if (searchCols[i]) {
          _fnCamelToHungarian(DataTable.models.oSearch, searchCols[i]);
        }
      }
    }
    if (init2.serverSide && !init2.searchDelay) {
      init2.searchDelay = 400;
    }
  }
  function _fnCompatCols(init2) {
    _fnCompatMap(init2, "orderable", "bSortable");
    _fnCompatMap(init2, "orderData", "aDataSort");
    _fnCompatMap(init2, "orderSequence", "asSorting");
    _fnCompatMap(init2, "orderDataType", "sortDataType");
    var dataSort = init2.aDataSort;
    if (typeof dataSort === "number" && !Array.isArray(dataSort)) {
      init2.aDataSort = [dataSort];
    }
  }
  function _fnBrowserDetect(settings) {
    if (!DataTable.__browser) {
      var browser = {};
      DataTable.__browser = browser;
      var n = $2("<div/>").css({
        position: "fixed",
        top: 0,
        left: -1 * window.pageXOffset,
        // allow for scrolling
        height: 1,
        width: 1,
        overflow: "hidden"
      }).append(
        $2("<div/>").css({
          position: "absolute",
          top: 1,
          left: 1,
          width: 100,
          overflow: "scroll"
        }).append(
          $2("<div/>").css({
            width: "100%",
            height: 10
          })
        )
      ).appendTo("body");
      var outer = n.children();
      var inner = outer.children();
      browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
      browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;
      n.remove();
    }
    $2.extend(settings.oBrowser, DataTable.__browser);
    settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
  }
  function _fnAddColumn(oSettings) {
    var oDefaults = DataTable.defaults.column;
    var iCol = oSettings.aoColumns.length;
    var oCol = $2.extend({}, DataTable.models.oColumn, oDefaults, {
      "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
      "mData": oDefaults.mData ? oDefaults.mData : iCol,
      idx: iCol,
      searchFixed: {},
      colEl: $2("<col>").attr("data-dt-column", iCol)
    });
    oSettings.aoColumns.push(oCol);
    var searchCols = oSettings.aoPreSearchCols;
    searchCols[iCol] = $2.extend({}, DataTable.models.oSearch, searchCols[iCol]);
  }
  function _fnColumnOptions(oSettings, iCol, oOptions) {
    var oCol = oSettings.aoColumns[iCol];
    if (oOptions !== void 0 && oOptions !== null) {
      _fnCompatCols(oOptions);
      _fnCamelToHungarian(DataTable.defaults.column, oOptions, true);
      if (oOptions.mDataProp !== void 0 && !oOptions.mData) {
        oOptions.mData = oOptions.mDataProp;
      }
      if (oOptions.sType) {
        oCol._sManualType = oOptions.sType;
      }
      if (oOptions.className && !oOptions.sClass) {
        oOptions.sClass = oOptions.className;
      }
      var origClass = oCol.sClass;
      $2.extend(oCol, oOptions);
      _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
      if (origClass !== oCol.sClass) {
        oCol.sClass = origClass + " " + oCol.sClass;
      }
      if (oOptions.iDataSort !== void 0) {
        oCol.aDataSort = [oOptions.iDataSort];
      }
      _fnMap(oCol, oOptions, "aDataSort");
    }
    var mDataSrc = oCol.mData;
    var mData = _fnGetObjectDataFn(mDataSrc);
    if (oCol.mRender && Array.isArray(oCol.mRender)) {
      var copy = oCol.mRender.slice();
      var name = copy.shift();
      oCol.mRender = DataTable.render[name].apply(window, copy);
    }
    oCol._render = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
    var attrTest = function(src) {
      return typeof src === "string" && src.indexOf("@") !== -1;
    };
    oCol._bAttrSrc = $2.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
    oCol._setter = null;
    oCol.fnGetData = function(rowData, type, meta) {
      var innerData = mData(rowData, type, void 0, meta);
      return oCol._render && type ? oCol._render(innerData, type, rowData, meta) : innerData;
    };
    oCol.fnSetData = function(rowData, val, meta) {
      return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
    };
    if (typeof mDataSrc !== "number" && !oCol._isArrayHost) {
      oSettings._rowReadObject = true;
    }
    if (!oSettings.oFeatures.bSort) {
      oCol.bSortable = false;
    }
  }
  function _fnAdjustColumnSizing(settings) {
    _fnCalculateColumnWidths(settings);
    _fnColumnSizes(settings);
    var scroll = settings.oScroll;
    if (scroll.sY !== "" || scroll.sX !== "") {
      _fnScrollDraw(settings);
    }
    _fnCallbackFire(settings, null, "column-sizing", [settings]);
  }
  function _fnColumnSizes(settings) {
    var cols = settings.aoColumns;
    for (var i = 0; i < cols.length; i++) {
      var width = _fnColumnsSumWidth(settings, [i], false, false);
      cols[i].colEl.css("width", width);
      if (settings.oScroll.sX) {
        cols[i].colEl.css("min-width", width);
      }
    }
  }
  function _fnVisibleToColumnIndex(oSettings, iMatch) {
    var aiVis = _fnGetColumns(oSettings, "bVisible");
    return typeof aiVis[iMatch] === "number" ? aiVis[iMatch] : null;
  }
  function _fnColumnIndexToVisible(oSettings, iMatch) {
    var aiVis = _fnGetColumns(oSettings, "bVisible");
    var iPos = aiVis.indexOf(iMatch);
    return iPos !== -1 ? iPos : null;
  }
  function _fnVisbleColumns(settings) {
    var layout = settings.aoHeader;
    var columns = settings.aoColumns;
    var vis = 0;
    if (layout.length) {
      for (var i = 0, ien = layout[0].length; i < ien; i++) {
        if (columns[i].bVisible && $2(layout[0][i].cell).css("display") !== "none") {
          vis++;
        }
      }
    }
    return vis;
  }
  function _fnGetColumns(oSettings, sParam) {
    var a = [];
    oSettings.aoColumns.map(function(val, i) {
      if (val[sParam]) {
        a.push(i);
      }
    });
    return a;
  }
  function _typeResult(typeDetect, res) {
    return res === true ? typeDetect._name : res;
  }
  function _fnColumnTypes(settings) {
    var columns = settings.aoColumns;
    var data = settings.aoData;
    var types = DataTable.ext.type.detect;
    var i, ien, j, jen, k, ken;
    var col, detectedType, cache;
    for (i = 0, ien = columns.length; i < ien; i++) {
      col = columns[i];
      cache = [];
      if (!col.sType && col._sManualType) {
        col.sType = col._sManualType;
      } else if (!col.sType) {
        if (!settings.typeDetect) {
          return;
        }
        for (j = 0, jen = types.length; j < jen; j++) {
          var typeDetect = types[j];
          var oneOf = typeDetect.oneOf;
          var allOf = typeDetect.allOf || typeDetect;
          var init2 = typeDetect.init;
          var one = false;
          detectedType = null;
          if (init2) {
            detectedType = _typeResult(typeDetect, init2(settings, col, i));
            if (detectedType) {
              col.sType = detectedType;
              break;
            }
          }
          for (k = 0, ken = data.length; k < ken; k++) {
            if (!data[k]) {
              continue;
            }
            if (cache[k] === void 0) {
              cache[k] = _fnGetCellData(settings, k, i, "type");
            }
            if (oneOf && !one) {
              one = _typeResult(typeDetect, oneOf(cache[k], settings));
            }
            detectedType = _typeResult(typeDetect, allOf(cache[k], settings));
            if (!detectedType && j !== types.length - 3) {
              break;
            }
            if (detectedType === "html" && !_empty(cache[k])) {
              break;
            }
          }
          if (oneOf && one && detectedType || !oneOf && detectedType) {
            col.sType = detectedType;
            break;
          }
        }
        if (!col.sType) {
          col.sType = "string";
        }
      }
      var autoClass = _ext.type.className[col.sType];
      if (autoClass) {
        _columnAutoClass(settings.aoHeader, i, autoClass);
        _columnAutoClass(settings.aoFooter, i, autoClass);
      }
      var renderer = _ext.type.render[col.sType];
      if (renderer && !col._render) {
        col._render = DataTable.util.get(renderer);
        _columnAutoRender(settings, i);
      }
    }
  }
  function _columnAutoRender(settings, colIdx) {
    var data = settings.aoData;
    for (var i = 0; i < data.length; i++) {
      if (data[i].nTr) {
        var display = _fnGetCellData(settings, i, colIdx, "display");
        data[i].displayData[colIdx] = display;
        _fnWriteCell(data[i].anCells[colIdx], display);
      }
    }
  }
  function _columnAutoClass(container, colIdx, className) {
    container.forEach(function(row) {
      if (row[colIdx] && row[colIdx].unique) {
        _addClass(row[colIdx].cell, className);
      }
    });
  }
  function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, headerLayout, fn) {
    var i, iLen, j, jLen, k, kLen, def;
    var columns = oSettings.aoColumns;
    if (aoCols) {
      for (i = 0, iLen = aoCols.length; i < iLen; i++) {
        if (aoCols[i] && aoCols[i].name) {
          columns[i].sName = aoCols[i].name;
        }
      }
    }
    if (aoColDefs) {
      for (i = aoColDefs.length - 1; i >= 0; i--) {
        def = aoColDefs[i];
        var aTargets = def.target !== void 0 ? def.target : def.targets !== void 0 ? def.targets : def.aTargets;
        if (!Array.isArray(aTargets)) {
          aTargets = [aTargets];
        }
        for (j = 0, jLen = aTargets.length; j < jLen; j++) {
          var target = aTargets[j];
          if (typeof target === "number" && target >= 0) {
            while (columns.length <= target) {
              _fnAddColumn(oSettings);
            }
            fn(target, def);
          } else if (typeof target === "number" && target < 0) {
            fn(columns.length + target, def);
          } else if (typeof target === "string") {
            for (k = 0, kLen = columns.length; k < kLen; k++) {
              if (target === "_all") {
                fn(k, def);
              } else if (target.indexOf(":name") !== -1) {
                if (columns[k].sName === target.replace(":name", "")) {
                  fn(k, def);
                }
              } else {
                headerLayout.forEach(function(row) {
                  if (row[k]) {
                    var cell = $2(row[k].cell);
                    if (target.match(/^[a-z][\w-]*$/i)) {
                      target = "." + target;
                    }
                    if (cell.is(target)) {
                      fn(k, def);
                    }
                  }
                });
              }
            }
          }
        }
      }
    }
    if (aoCols) {
      for (i = 0, iLen = aoCols.length; i < iLen; i++) {
        fn(i, aoCols[i]);
      }
    }
  }
  function _fnColumnsSumWidth(settings, targets, original, incVisible) {
    if (!Array.isArray(targets)) {
      targets = _fnColumnsFromHeader(targets);
    }
    var sum = 0;
    var unit;
    var columns = settings.aoColumns;
    for (var i = 0, ien = targets.length; i < ien; i++) {
      var column = columns[targets[i]];
      var definedWidth = original ? column.sWidthOrig : column.sWidth;
      if (!incVisible && column.bVisible === false) {
        continue;
      }
      if (definedWidth === null || definedWidth === void 0) {
        return null;
      } else if (typeof definedWidth === "number") {
        unit = "px";
        sum += definedWidth;
      } else {
        var matched = definedWidth.match(/([\d\.]+)([^\d]*)/);
        if (matched) {
          sum += matched[1] * 1;
          unit = matched.length === 3 ? matched[2] : "px";
        }
      }
    }
    return sum + unit;
  }
  function _fnColumnsFromHeader(cell) {
    var attr = $2(cell).closest("[data-dt-column]").attr("data-dt-column");
    if (!attr) {
      return [];
    }
    return attr.split(",").map(function(val) {
      return val * 1;
    });
  }
  function _fnAddData(settings, dataIn, tr, tds) {
    var rowIdx = settings.aoData.length;
    var rowModel = $2.extend(true, {}, DataTable.models.oRow, {
      src: tr ? "dom" : "data",
      idx: rowIdx
    });
    rowModel._aData = dataIn;
    settings.aoData.push(rowModel);
    var columns = settings.aoColumns;
    for (var i = 0, iLen = columns.length; i < iLen; i++) {
      columns[i].sType = null;
    }
    settings.aiDisplayMaster.push(rowIdx);
    var id = settings.rowIdFn(dataIn);
    if (id !== void 0) {
      settings.aIds[id] = rowModel;
    }
    if (tr || !settings.oFeatures.bDeferRender) {
      _fnCreateTr(settings, rowIdx, tr, tds);
    }
    return rowIdx;
  }
  function _fnAddTr(settings, trs) {
    var row;
    if (!(trs instanceof $2)) {
      trs = $2(trs);
    }
    return trs.map(function(i, el) {
      row = _fnGetRowElements(settings, el);
      return _fnAddData(settings, row.data, el, row.cells);
    });
  }
  function _fnGetCellData(settings, rowIdx, colIdx, type) {
    if (type === "search") {
      type = "filter";
    } else if (type === "order") {
      type = "sort";
    }
    var row = settings.aoData[rowIdx];
    if (!row) {
      return void 0;
    }
    var draw = settings.iDraw;
    var col = settings.aoColumns[colIdx];
    var rowData = row._aData;
    var defaultContent = col.sDefaultContent;
    var cellData = col.fnGetData(rowData, type, {
      settings,
      row: rowIdx,
      col: colIdx
    });
    if (type !== "display" && cellData && typeof cellData === "object" && cellData.nodeName) {
      cellData = cellData.innerHTML;
    }
    if (cellData === void 0) {
      if (settings.iDrawError != draw && defaultContent === null) {
        _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == "function" ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
        settings.iDrawError = draw;
      }
      return defaultContent;
    }
    if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== void 0) {
      cellData = defaultContent;
    } else if (typeof cellData === "function") {
      return cellData.call(rowData);
    }
    if (cellData === null && type === "display") {
      return "";
    }
    if (type === "filter") {
      var fomatters = DataTable.ext.type.search;
      if (fomatters[col.sType]) {
        cellData = fomatters[col.sType](cellData);
      }
    }
    return cellData;
  }
  function _fnSetCellData(settings, rowIdx, colIdx, val) {
    var col = settings.aoColumns[colIdx];
    var rowData = settings.aoData[rowIdx]._aData;
    col.fnSetData(rowData, val, {
      settings,
      row: rowIdx,
      col: colIdx
    });
  }
  function _fnWriteCell(td, val) {
    if (val && typeof val === "object" && val.nodeName) {
      $2(td).empty().append(val);
    } else {
      td.innerHTML = val;
    }
  }
  var __reArray = /\[.*?\]$/;
  var __reFn = /\(\)$/;
  function _fnSplitObjNotation(str) {
    var parts = str.match(/(\\.|[^.])+/g) || [""];
    return parts.map(function(s) {
      return s.replace(/\\\./g, ".");
    });
  }
  var _fnGetObjectDataFn = DataTable.util.get;
  var _fnSetObjectDataFn = DataTable.util.set;
  function _fnGetDataMaster(settings) {
    return _pluck(settings.aoData, "_aData");
  }
  function _fnClearTable(settings) {
    settings.aoData.length = 0;
    settings.aiDisplayMaster.length = 0;
    settings.aiDisplay.length = 0;
    settings.aIds = {};
  }
  function _fnInvalidate(settings, rowIdx, src, colIdx) {
    var row = settings.aoData[rowIdx];
    var i, ien;
    row._aSortData = null;
    row._aFilterData = null;
    row.displayData = null;
    if (src === "dom" || (!src || src === "auto") && row.src === "dom") {
      row._aData = _fnGetRowElements(
        settings,
        row,
        colIdx,
        colIdx === void 0 ? void 0 : row._aData
      ).data;
    } else {
      var cells = row.anCells;
      var display = _fnGetRowDisplay(settings, rowIdx);
      if (cells) {
        if (colIdx !== void 0) {
          _fnWriteCell(cells[colIdx], display[colIdx]);
        } else {
          for (i = 0, ien = cells.length; i < ien; i++) {
            _fnWriteCell(cells[i], display[i]);
          }
        }
      }
    }
    var cols = settings.aoColumns;
    if (colIdx !== void 0) {
      cols[colIdx].sType = null;
      cols[colIdx].maxLenString = null;
    } else {
      for (i = 0, ien = cols.length; i < ien; i++) {
        cols[i].sType = null;
        cols[i].maxLenString = null;
      }
      _fnRowAttributes(settings, row);
    }
  }
  function _fnGetRowElements(settings, row, colIdx, d) {
    var tds = [], td = row.firstChild, name, col, i = 0, contents, columns = settings.aoColumns, objectRead = settings._rowReadObject;
    d = d !== void 0 ? d : objectRead ? {} : [];
    var attr = function(str, td2) {
      if (typeof str === "string") {
        var idx = str.indexOf("@");
        if (idx !== -1) {
          var attr2 = str.substring(idx + 1);
          var setter = _fnSetObjectDataFn(str);
          setter(d, td2.getAttribute(attr2));
        }
      }
    };
    var cellProcess = function(cell) {
      if (colIdx === void 0 || colIdx === i) {
        col = columns[i];
        contents = cell.innerHTML.trim();
        if (col && col._bAttrSrc) {
          var setter = _fnSetObjectDataFn(col.mData._);
          setter(d, contents);
          attr(col.mData.sort, cell);
          attr(col.mData.type, cell);
          attr(col.mData.filter, cell);
        } else {
          if (objectRead) {
            if (!col._setter) {
              col._setter = _fnSetObjectDataFn(col.mData);
            }
            col._setter(d, contents);
          } else {
            d[i] = contents;
          }
        }
      }
      i++;
    };
    if (td) {
      while (td) {
        name = td.nodeName.toUpperCase();
        if (name == "TD" || name == "TH") {
          cellProcess(td);
          tds.push(td);
        }
        td = td.nextSibling;
      }
    } else {
      tds = row.anCells;
      for (var j = 0, jen = tds.length; j < jen; j++) {
        cellProcess(tds[j]);
      }
    }
    var rowNode = row.firstChild ? row : row.nTr;
    if (rowNode) {
      var id = rowNode.getAttribute("id");
      if (id) {
        _fnSetObjectDataFn(settings.rowId)(d, id);
      }
    }
    return {
      data: d,
      cells: tds
    };
  }
  function _fnGetRowDisplay(settings, rowIdx) {
    var rowModal = settings.aoData[rowIdx];
    var columns = settings.aoColumns;
    if (!rowModal.displayData) {
      rowModal.displayData = [];
      for (var colIdx = 0, len = columns.length; colIdx < len; colIdx++) {
        rowModal.displayData.push(
          _fnGetCellData(settings, rowIdx, colIdx, "display")
        );
      }
    }
    return rowModal.displayData;
  }
  function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
    var row = oSettings.aoData[iRow], rowData = row._aData, cells = [], nTr, nTd, oCol, i, iLen, create, trClass = oSettings.oClasses.tbody.row;
    if (row.nTr === null) {
      nTr = nTrIn || document.createElement("tr");
      row.nTr = nTr;
      row.anCells = cells;
      _addClass(nTr, trClass);
      nTr._DT_RowIndex = iRow;
      _fnRowAttributes(oSettings, row);
      for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
        oCol = oSettings.aoColumns[i];
        create = nTrIn && anTds[i] ? false : true;
        nTd = create ? document.createElement(oCol.sCellType) : anTds[i];
        if (!nTd) {
          _fnLog(oSettings, 0, "Incorrect column count", 18);
        }
        nTd._DT_CellIndex = {
          row: iRow,
          column: i
        };
        cells.push(nTd);
        var display = _fnGetRowDisplay(oSettings, iRow);
        if (create || (oCol.mRender || oCol.mData !== i) && (!$2.isPlainObject(oCol.mData) || oCol.mData._ !== i + ".display")) {
          _fnWriteCell(nTd, display[i]);
        }
        _addClass(nTd, oCol.sClass);
        if (oCol.bVisible && create) {
          nTr.appendChild(nTd);
        } else if (!oCol.bVisible && !create) {
          nTd.parentNode.removeChild(nTd);
        }
        if (oCol.fnCreatedCell) {
          oCol.fnCreatedCell.call(
            oSettings.oInstance,
            nTd,
            _fnGetCellData(oSettings, iRow, i),
            rowData,
            iRow,
            i
          );
        }
      }
      _fnCallbackFire(oSettings, "aoRowCreatedCallback", "row-created", [nTr, rowData, iRow, cells]);
    } else {
      _addClass(row.nTr, trClass);
    }
  }
  function _fnRowAttributes(settings, row) {
    var tr = row.nTr;
    var data = row._aData;
    if (tr) {
      var id = settings.rowIdFn(data);
      if (id) {
        tr.id = id;
      }
      if (data.DT_RowClass) {
        var a = data.DT_RowClass.split(" ");
        row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
        $2(tr).removeClass(row.__rowc.join(" ")).addClass(data.DT_RowClass);
      }
      if (data.DT_RowAttr) {
        $2(tr).attr(data.DT_RowAttr);
      }
      if (data.DT_RowData) {
        $2(tr).data(data.DT_RowData);
      }
    }
  }
  function _fnBuildHead(settings, side) {
    var classes = settings.oClasses;
    var columns = settings.aoColumns;
    var i, ien, row;
    var target = side === "header" ? settings.nTHead : settings.nTFoot;
    var titleProp = side === "header" ? "sTitle" : side;
    if (!target) {
      return;
    }
    if (side === "header" || _pluck(settings.aoColumns, titleProp).join("")) {
      row = $2("tr", target);
      if (!row.length) {
        row = $2("<tr/>").appendTo(target);
      }
      if (row.length === 1) {
        var cellCount = 0;
        $2("td, th", row).each(function() {
          cellCount += this.colSpan;
        });
        for (i = cellCount, ien = columns.length; i < ien; i++) {
          $2("<th/>").html(columns[i][titleProp] || "").appendTo(row);
        }
      }
    }
    var detected = _fnDetectHeader(settings, target, true);
    if (side === "header") {
      settings.aoHeader = detected;
      $2("tr", target).addClass(classes.thead.row);
    } else {
      settings.aoFooter = detected;
      $2("tr", target).addClass(classes.tfoot.row);
    }
    $2(target).children("tr").children("th, td").each(function() {
      _fnRenderer(settings, side)(
        settings,
        $2(this),
        classes
      );
    });
  }
  function _fnHeaderLayout(settings, source, incColumns) {
    var row, column, cell;
    var local = [];
    var structure = [];
    var columns = settings.aoColumns;
    var columnCount = columns.length;
    var rowspan, colspan;
    if (!source) {
      return;
    }
    if (!incColumns) {
      incColumns = _range(columnCount).filter(function(idx) {
        return columns[idx].bVisible;
      });
    }
    for (row = 0; row < source.length; row++) {
      local[row] = source[row].slice().filter(function(cell2, i) {
        return incColumns.includes(i);
      });
      structure.push([]);
    }
    for (row = 0; row < local.length; row++) {
      for (column = 0; column < local[row].length; column++) {
        rowspan = 1;
        colspan = 1;
        if (structure[row][column] === void 0) {
          cell = local[row][column].cell;
          while (local[row + rowspan] !== void 0 && local[row][column].cell == local[row + rowspan][column].cell) {
            structure[row + rowspan][column] = null;
            rowspan++;
          }
          while (local[row][column + colspan] !== void 0 && local[row][column].cell == local[row][column + colspan].cell) {
            for (var k = 0; k < rowspan; k++) {
              structure[row + k][column + colspan] = null;
            }
            colspan++;
          }
          var titleSpan = $2("span.dt-column-title", cell);
          structure[row][column] = {
            cell,
            colspan,
            rowspan,
            title: titleSpan.length ? titleSpan.html() : $2(cell).html()
          };
        }
      }
    }
    return structure;
  }
  function _fnDrawHead(settings, source) {
    var layout = _fnHeaderLayout(settings, source);
    var tr, n;
    for (var row = 0; row < source.length; row++) {
      tr = source[row].row;
      if (tr) {
        while (n = tr.firstChild) {
          tr.removeChild(n);
        }
      }
      for (var column = 0; column < layout[row].length; column++) {
        var point = layout[row][column];
        if (point) {
          $2(point.cell).appendTo(tr).attr("rowspan", point.rowspan).attr("colspan", point.colspan);
        }
      }
    }
  }
  function _fnDraw(oSettings, ajaxComplete) {
    _fnStart(oSettings);
    var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [oSettings]);
    if (aPreDraw.indexOf(false) !== -1) {
      _fnProcessingDisplay(oSettings, false);
      return;
    }
    var anRows = [];
    var iRowCount = 0;
    var bServerSide = _fnDataSource(oSettings) == "ssp";
    var aiDisplay = oSettings.aiDisplay;
    var iDisplayStart = oSettings._iDisplayStart;
    var iDisplayEnd = oSettings.fnDisplayEnd();
    var columns = oSettings.aoColumns;
    var body = $2(oSettings.nTBody);
    oSettings.bDrawing = true;
    if (oSettings.deferLoading) {
      oSettings.deferLoading = false;
      oSettings.iDraw++;
      _fnProcessingDisplay(oSettings, false);
    } else if (!bServerSide) {
      oSettings.iDraw++;
    } else if (!oSettings.bDestroying && !ajaxComplete) {
      if (oSettings.iDraw === 0) {
        body.empty().append(_emptyRow(oSettings));
      }
      _fnAjaxUpdate(oSettings);
      return;
    }
    if (aiDisplay.length !== 0) {
      var iStart = bServerSide ? 0 : iDisplayStart;
      var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
      for (var j = iStart; j < iEnd; j++) {
        var iDataIndex = aiDisplay[j];
        var aoData = oSettings.aoData[iDataIndex];
        if (aoData.nTr === null) {
          _fnCreateTr(oSettings, iDataIndex);
        }
        var nRow = aoData.nTr;
        for (var i = 0; i < columns.length; i++) {
          var col = columns[i];
          var td = aoData.anCells[i];
          _addClass(td, _ext.type.className[col.sType]);
          _addClass(td, oSettings.oClasses.tbody.cell);
        }
        _fnCallbackFire(
          oSettings,
          "aoRowCallback",
          null,
          [nRow, aoData._aData, iRowCount, j, iDataIndex]
        );
        anRows.push(nRow);
        iRowCount++;
      }
    } else {
      anRows[0] = _emptyRow(oSettings);
    }
    _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [
      $2(oSettings.nTHead).children("tr")[0],
      _fnGetDataMaster(oSettings),
      iDisplayStart,
      iDisplayEnd,
      aiDisplay
    ]);
    _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [
      $2(oSettings.nTFoot).children("tr")[0],
      _fnGetDataMaster(oSettings),
      iDisplayStart,
      iDisplayEnd,
      aiDisplay
    ]);
    if (body[0].replaceChildren) {
      body[0].replaceChildren.apply(body[0], anRows);
    } else {
      body.children().detach();
      body.append($2(anRows));
    }
    $2(oSettings.nTableWrapper).toggleClass("dt-empty-footer", $2("tr", oSettings.nTFoot).length === 0);
    _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [oSettings], true);
    oSettings.bSorted = false;
    oSettings.bFiltered = false;
    oSettings.bDrawing = false;
  }
  function _fnReDraw(settings, holdPosition, recompute) {
    var features = settings.oFeatures, sort = features.bSort, filter = features.bFilter;
    if (recompute === void 0 || recompute === true) {
      _fnColumnTypes(settings);
      if (sort) {
        _fnSort(settings);
      }
      if (filter) {
        _fnFilterComplete(settings, settings.oPreviousSearch);
      } else {
        settings.aiDisplay = settings.aiDisplayMaster.slice();
      }
    }
    if (holdPosition !== true) {
      settings._iDisplayStart = 0;
    }
    settings._drawHold = holdPosition;
    _fnDraw(settings);
    settings._drawHold = false;
  }
  function _emptyRow(settings) {
    var oLang = settings.oLanguage;
    var zero = oLang.sZeroRecords;
    var dataSrc = _fnDataSource(settings);
    if (settings.iDraw < 1 && dataSrc === "ssp" || settings.iDraw <= 1 && dataSrc === "ajax") {
      zero = oLang.sLoadingRecords;
    } else if (oLang.sEmptyTable && settings.fnRecordsTotal() === 0) {
      zero = oLang.sEmptyTable;
    }
    return $2("<tr/>").append($2("<td />", {
      "colSpan": _fnVisbleColumns(settings),
      "class": settings.oClasses.empty.row
    }).html(zero))[0];
  }
  function _layoutItems(row, align, items) {
    if (Array.isArray(items)) {
      for (var i = 0; i < items.length; i++) {
        _layoutItems(row, align, items[i]);
      }
      return;
    }
    var rowCell = row[align];
    if ($2.isPlainObject(items)) {
      if (items.features) {
        if (items.rowId) {
          row.id = items.rowId;
        }
        if (items.rowClass) {
          row.className = items.rowClass;
        }
        rowCell.id = items.id;
        rowCell.className = items.className;
        _layoutItems(row, align, items.features);
      } else {
        Object.keys(items).map(function(key) {
          rowCell.contents.push({
            feature: key,
            opts: items[key]
          });
        });
      }
    } else {
      rowCell.contents.push(items);
    }
  }
  function _layoutGetRow(rows, rowNum, align) {
    var row;
    for (var i = 0; i < rows.length; i++) {
      row = rows[i];
      if (row.rowNum === rowNum) {
        if (align === "full" && row.full || (align === "start" || align === "end") && (row.start || row.end)) {
          if (!row[align]) {
            row[align] = {
              contents: []
            };
          }
          return row;
        }
      }
    }
    row = {
      rowNum
    };
    row[align] = {
      contents: []
    };
    rows.push(row);
    return row;
  }
  function _layoutArray(settings, layout, side) {
    var rows = [];
    $2.each(layout, function(pos, items) {
      if (items === null) {
        return;
      }
      var parts = pos.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/);
      var rowNum = parts[2] ? parts[2] * 1 : 0;
      var align = parts[3] ? parts[3].toLowerCase() : "full";
      if (parts[1] !== side) {
        return;
      }
      var row2 = _layoutGetRow(rows, rowNum, align);
      _layoutItems(row2, align, items);
    });
    rows.sort(function(a, b) {
      var order1 = a.rowNum;
      var order2 = b.rowNum;
      if (order1 === order2) {
        var ret = a.full && !b.full ? -1 : 1;
        return side === "bottom" ? ret * -1 : ret;
      }
      return order2 - order1;
    });
    if (side === "bottom") {
      rows.reverse();
    }
    for (var row = 0; row < rows.length; row++) {
      delete rows[row].rowNum;
      _layoutResolve(settings, rows[row]);
    }
    return rows;
  }
  function _layoutResolve(settings, row) {
    var getFeature = function(feature, opts) {
      if (!_ext.features[feature]) {
        _fnLog(settings, 0, "Unknown feature: " + feature);
      }
      return _ext.features[feature].apply(this, [settings, opts]);
    };
    var resolve = function(item) {
      if (!row[item]) {
        return;
      }
      var line = row[item].contents;
      for (var i = 0, ien = line.length; i < ien; i++) {
        if (!line[i]) {
          continue;
        } else if (typeof line[i] === "string") {
          line[i] = getFeature(line[i], null);
        } else if ($2.isPlainObject(line[i])) {
          line[i] = getFeature(line[i].feature, line[i].opts);
        } else if (typeof line[i].node === "function") {
          line[i] = line[i].node(settings);
        } else if (typeof line[i] === "function") {
          var inst = line[i](settings);
          line[i] = typeof inst.node === "function" ? inst.node() : inst;
        }
      }
    };
    resolve("start");
    resolve("end");
    resolve("full");
  }
  function _fnAddOptionsHtml(settings) {
    var classes = settings.oClasses;
    var table = $2(settings.nTable);
    var insert = $2("<div/>").attr({
      id: settings.sTableId + "_wrapper",
      "class": classes.container
    }).insertBefore(table);
    settings.nTableWrapper = insert[0];
    if (settings.sDom) {
      _fnLayoutDom(settings, settings.sDom, insert);
    } else {
      var top = _layoutArray(settings, settings.layout, "top");
      var bottom = _layoutArray(settings, settings.layout, "bottom");
      var renderer = _fnRenderer(settings, "layout");
      top.forEach(function(item) {
        renderer(settings, insert, item);
      });
      renderer(settings, insert, {
        full: {
          table: true,
          contents: [_fnFeatureHtmlTable(settings)]
        }
      });
      bottom.forEach(function(item) {
        renderer(settings, insert, item);
      });
    }
    _processingHtml(settings);
  }
  function _fnLayoutDom(settings, dom, insert) {
    var parts = dom.match(/(".*?")|('.*?')|./g);
    var featureNode, option, newNode, next, attr;
    for (var i = 0; i < parts.length; i++) {
      featureNode = null;
      option = parts[i];
      if (option == "<") {
        newNode = $2("<div/>");
        next = parts[i + 1];
        if (next[0] == "'" || next[0] == '"') {
          attr = next.replace(/['"]/g, "");
          var id = "", className;
          if (attr.indexOf(".") != -1) {
            var split = attr.split(".");
            id = split[0];
            className = split[1];
          } else if (attr[0] == "#") {
            id = attr;
          } else {
            className = attr;
          }
          newNode.attr("id", id.substring(1)).addClass(className);
          i++;
        }
        insert.append(newNode);
        insert = newNode;
      } else if (option == ">") {
        insert = insert.parent();
      } else if (option == "t") {
        featureNode = _fnFeatureHtmlTable(settings);
      } else {
        DataTable.ext.feature.forEach(function(feature) {
          if (option == feature.cFeature) {
            featureNode = feature.fnInit(settings);
          }
        });
      }
      if (featureNode) {
        insert.append(featureNode);
      }
    }
  }
  function _fnDetectHeader(settings, thead, write) {
    var columns = settings.aoColumns;
    var rows = $2(thead).children("tr");
    var row, cell;
    var i, k, l, iLen, shifted, column, colspan, rowspan;
    var isHeader = thead && thead.nodeName.toLowerCase() === "thead";
    var layout = [];
    var unique;
    var shift = function(a, i2, j) {
      var k2 = a[i2];
      while (k2[j]) {
        j++;
      }
      return j;
    };
    for (i = 0, iLen = rows.length; i < iLen; i++) {
      layout.push([]);
    }
    for (i = 0, iLen = rows.length; i < iLen; i++) {
      row = rows[i];
      column = 0;
      cell = row.firstChild;
      while (cell) {
        if (cell.nodeName.toUpperCase() == "TD" || cell.nodeName.toUpperCase() == "TH") {
          var cols = [];
          colspan = cell.getAttribute("colspan") * 1;
          rowspan = cell.getAttribute("rowspan") * 1;
          colspan = !colspan || colspan === 0 || colspan === 1 ? 1 : colspan;
          rowspan = !rowspan || rowspan === 0 || rowspan === 1 ? 1 : rowspan;
          shifted = shift(layout, i, column);
          unique = colspan === 1 ? true : false;
          if (write) {
            if (unique) {
              _fnColumnOptions(settings, shifted, $2(cell).data());
              var columnDef = columns[shifted];
              var width = cell.getAttribute("width") || null;
              var t = cell.style.width.match(/width:\s*(\d+[pxem%]+)/);
              if (t) {
                width = t[1];
              }
              columnDef.sWidthOrig = columnDef.sWidth || width;
              if (isHeader) {
                if (columnDef.sTitle !== null && !columnDef.autoTitle) {
                  cell.innerHTML = columnDef.sTitle;
                }
                if (!columnDef.sTitle && unique) {
                  columnDef.sTitle = _stripHtml(cell.innerHTML);
                  columnDef.autoTitle = true;
                }
              } else {
                if (columnDef.footer) {
                  cell.innerHTML = columnDef.footer;
                }
              }
              if (!columnDef.ariaTitle) {
                columnDef.ariaTitle = $2(cell).attr("aria-label") || columnDef.sTitle;
              }
              if (columnDef.className) {
                $2(cell).addClass(columnDef.className);
              }
            }
            if ($2("span.dt-column-title", cell).length === 0) {
              $2("<span>").addClass("dt-column-title").append(cell.childNodes).appendTo(cell);
            }
            if (isHeader && $2("span.dt-column-order", cell).length === 0) {
              $2("<span>").addClass("dt-column-order").appendTo(cell);
            }
          }
          for (l = 0; l < colspan; l++) {
            for (k = 0; k < rowspan; k++) {
              layout[i + k][shifted + l] = {
                cell,
                unique
              };
              layout[i + k].row = row;
            }
            cols.push(shifted + l);
          }
          cell.setAttribute("data-dt-column", _unique(cols).join(","));
        }
        cell = cell.nextSibling;
      }
    }
    return layout;
  }
  function _fnStart(oSettings) {
    var bServerSide = _fnDataSource(oSettings) == "ssp";
    var iInitDisplayStart = oSettings.iInitDisplayStart;
    if (iInitDisplayStart !== void 0 && iInitDisplayStart !== -1) {
      oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
      oSettings.iInitDisplayStart = -1;
    }
  }
  function _fnBuildAjax(oSettings, data, fn) {
    var ajaxData;
    var ajax = oSettings.ajax;
    var instance = oSettings.oInstance;
    var callback = function(json) {
      var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
      if (json === null || typeof status === "number" && status == 204) {
        json = {};
        _fnAjaxDataSrc(oSettings, json, []);
      }
      var error = json.error || json.sError;
      if (error) {
        _fnLog(oSettings, 0, error);
      }
      if (json.d && typeof json.d === "string") {
        try {
          json = JSON.parse(json.d);
        } catch (e) {
        }
      }
      oSettings.json = json;
      _fnCallbackFire(oSettings, null, "xhr", [oSettings, json, oSettings.jqXHR], true);
      fn(json);
    };
    if ($2.isPlainObject(ajax) && ajax.data) {
      ajaxData = ajax.data;
      var newData = typeof ajaxData === "function" ? ajaxData(data, oSettings) : (
        // fn can manipulate data or return
        ajaxData
      );
      data = typeof ajaxData === "function" && newData ? newData : $2.extend(true, data, newData);
      delete ajax.data;
    }
    var baseAjax = {
      "url": typeof ajax === "string" ? ajax : "",
      "data": data,
      "success": callback,
      "dataType": "json",
      "cache": false,
      "type": oSettings.sServerMethod,
      "error": function(xhr, error) {
        var ret = _fnCallbackFire(oSettings, null, "xhr", [oSettings, null, oSettings.jqXHR], true);
        if (ret.indexOf(true) === -1) {
          if (error == "parsererror") {
            _fnLog(oSettings, 0, "Invalid JSON response", 1);
          } else if (xhr.readyState === 4) {
            _fnLog(oSettings, 0, "Ajax error", 7);
          }
        }
        _fnProcessingDisplay(oSettings, false);
      }
    };
    if ($2.isPlainObject(ajax)) {
      $2.extend(baseAjax, ajax);
    }
    oSettings.oAjaxData = data;
    _fnCallbackFire(oSettings, null, "preXhr", [oSettings, data, baseAjax], true);
    if (typeof ajax === "function") {
      oSettings.jqXHR = ajax.call(instance, data, callback, oSettings);
    } else if (ajax.url === "") {
      var empty = {};
      DataTable.util.set(ajax.dataSrc)(empty, []);
      callback(empty);
    } else {
      oSettings.jqXHR = $2.ajax(baseAjax);
    }
    if (ajaxData) {
      ajax.data = ajaxData;
    }
  }
  function _fnAjaxUpdate(settings) {
    settings.iDraw++;
    _fnProcessingDisplay(settings, true);
    _fnBuildAjax(
      settings,
      _fnAjaxParameters(settings),
      function(json) {
        _fnAjaxUpdateDraw(settings, json);
      }
    );
  }
  function _fnAjaxParameters(settings) {
    var columns = settings.aoColumns, features = settings.oFeatures, preSearch = settings.oPreviousSearch, preColSearch = settings.aoPreSearchCols, colData = function(idx, prop) {
      return typeof columns[idx][prop] === "function" ? "function" : columns[idx][prop];
    };
    return {
      draw: settings.iDraw,
      columns: columns.map(function(column, i) {
        return {
          data: colData(i, "mData"),
          name: column.sName,
          searchable: column.bSearchable,
          orderable: column.bSortable,
          search: {
            value: preColSearch[i].search,
            regex: preColSearch[i].regex,
            fixed: Object.keys(column.searchFixed).map(function(name) {
              return {
                name,
                term: column.searchFixed[name].toString()
              };
            })
          }
        };
      }),
      order: _fnSortFlatten(settings).map(function(val) {
        return {
          column: val.col,
          dir: val.dir,
          name: colData(val.col, "sName")
        };
      }),
      start: settings._iDisplayStart,
      length: features.bPaginate ? settings._iDisplayLength : -1,
      search: {
        value: preSearch.search,
        regex: preSearch.regex,
        fixed: Object.keys(settings.searchFixed).map(function(name) {
          return {
            name,
            term: settings.searchFixed[name].toString()
          };
        })
      }
    };
  }
  function _fnAjaxUpdateDraw(settings, json) {
    var data = _fnAjaxDataSrc(settings, json);
    var draw = _fnAjaxDataSrcParam(settings, "draw", json);
    var recordsTotal = _fnAjaxDataSrcParam(settings, "recordsTotal", json);
    var recordsFiltered = _fnAjaxDataSrcParam(settings, "recordsFiltered", json);
    if (draw !== void 0) {
      if (draw * 1 < settings.iDraw) {
        return;
      }
      settings.iDraw = draw * 1;
    }
    if (!data) {
      data = [];
    }
    _fnClearTable(settings);
    settings._iRecordsTotal = parseInt(recordsTotal, 10);
    settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
    for (var i = 0, ien = data.length; i < ien; i++) {
      _fnAddData(settings, data[i]);
    }
    settings.aiDisplay = settings.aiDisplayMaster.slice();
    _fnColumnTypes(settings);
    _fnDraw(settings, true);
    _fnInitComplete(settings);
    _fnProcessingDisplay(settings, false);
  }
  function _fnAjaxDataSrc(settings, json, write) {
    var dataProp = "data";
    if ($2.isPlainObject(settings.ajax) && settings.ajax.dataSrc !== void 0) {
      var dataSrc = settings.ajax.dataSrc;
      if (typeof dataSrc === "string" || typeof dataSrc === "function") {
        dataProp = dataSrc;
      } else if (dataSrc.data !== void 0) {
        dataProp = dataSrc.data;
      }
    }
    if (!write) {
      if (dataProp === "data") {
        return json.aaData || json[dataProp];
      }
      return dataProp !== "" ? _fnGetObjectDataFn(dataProp)(json) : json;
    }
    _fnSetObjectDataFn(dataProp)(json, write);
  }
  function _fnAjaxDataSrcParam(settings, param, json) {
    var dataSrc = $2.isPlainObject(settings.ajax) ? settings.ajax.dataSrc : null;
    if (dataSrc && dataSrc[param]) {
      return _fnGetObjectDataFn(dataSrc[param])(json);
    }
    var old = "";
    if (param === "draw") {
      old = "sEcho";
    } else if (param === "recordsTotal") {
      old = "iTotalRecords";
    } else if (param === "recordsFiltered") {
      old = "iTotalDisplayRecords";
    }
    return json[old] !== void 0 ? json[old] : json[param];
  }
  function _fnFilterComplete(settings, input) {
    var columnsSearch = settings.aoPreSearchCols;
    if (_fnDataSource(settings) != "ssp") {
      _fnFilterData(settings);
      settings.aiDisplay = settings.aiDisplayMaster.slice();
      _fnFilter(settings.aiDisplay, settings, input.search, input);
      $2.each(settings.searchFixed, function(name, term) {
        _fnFilter(settings.aiDisplay, settings, term, {});
      });
      for (var i = 0; i < columnsSearch.length; i++) {
        var col = columnsSearch[i];
        _fnFilter(
          settings.aiDisplay,
          settings,
          col.search,
          col,
          i
        );
        $2.each(settings.aoColumns[i].searchFixed, function(name, term) {
          _fnFilter(settings.aiDisplay, settings, term, {}, i);
        });
      }
      _fnFilterCustom(settings);
    }
    settings.bFiltered = true;
    _fnCallbackFire(settings, null, "search", [settings]);
  }
  function _fnFilterCustom(settings) {
    var filters = DataTable.ext.search;
    var displayRows = settings.aiDisplay;
    var row, rowIdx;
    for (var i = 0, ien = filters.length; i < ien; i++) {
      var rows = [];
      for (var j = 0, jen = displayRows.length; j < jen; j++) {
        rowIdx = displayRows[j];
        row = settings.aoData[rowIdx];
        if (filters[i](settings, row._aFilterData, rowIdx, row._aData, j)) {
          rows.push(rowIdx);
        }
      }
      displayRows.length = 0;
      _fnArrayApply(displayRows, rows);
    }
  }
  function _fnFilter(searchRows, settings, input, options, column) {
    if (input === "") {
      return;
    }
    var i = 0;
    var matched = [];
    var searchFunc = typeof input === "function" ? input : null;
    var rpSearch = input instanceof RegExp ? input : searchFunc ? null : _fnFilterCreateSearch(input, options);
    for (i = 0; i < searchRows.length; i++) {
      var row = settings.aoData[searchRows[i]];
      var data = column === void 0 ? row._sFilterRow : row._aFilterData[column];
      if (searchFunc && searchFunc(data, row._aData, searchRows[i], column) || rpSearch && rpSearch.test(data)) {
        matched.push(searchRows[i]);
      }
    }
    searchRows.length = matched.length;
    for (i = 0; i < matched.length; i++) {
      searchRows[i] = matched[i];
    }
  }
  function _fnFilterCreateSearch(search, inOpts) {
    var not = [];
    var options = $2.extend({}, {
      boundary: false,
      caseInsensitive: true,
      exact: false,
      regex: false,
      smart: true
    }, inOpts);
    if (typeof search !== "string") {
      search = search.toString();
    }
    search = _normalize(search);
    if (options.exact) {
      return new RegExp(
        "^" + _fnEscapeRegex(search) + "$",
        options.caseInsensitive ? "i" : ""
      );
    }
    search = options.regex ? search : _fnEscapeRegex(search);
    if (options.smart) {
      var parts = search.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""];
      var a = parts.map(function(word) {
        var negative = false;
        var m;
        if (word.charAt(0) === "!") {
          negative = true;
          word = word.substring(1);
        }
        if (word.charAt(0) === '"') {
          m = word.match(/^"(.*)"$/);
          word = m ? m[1] : word;
        } else if (word.charAt(0) === "\u201C") {
          m = word.match(/^\u201C(.*)\u201D$/);
          word = m ? m[1] : word;
        }
        if (negative) {
          if (word.length > 1) {
            not.push("(?!" + word + ")");
          }
          word = "";
        }
        return word.replace(/"/g, "");
      });
      var match = not.length ? not.join("") : "";
      var boundary = options.boundary ? "\\b" : "";
      search = "^(?=.*?" + boundary + a.join(")(?=.*?" + boundary) + ")(" + match + ".)*$";
    }
    return new RegExp(search, options.caseInsensitive ? "i" : "");
  }
  var _fnEscapeRegex = DataTable.util.escapeRegex;
  var __filter_div = $2("<div>")[0];
  var __filter_div_textContent = __filter_div.textContent !== void 0;
  function _fnFilterData(settings) {
    var columns = settings.aoColumns;
    var data = settings.aoData;
    var column;
    var j, jen, filterData, cellData, row;
    var wasInvalidated = false;
    for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
      if (!data[rowIdx]) {
        continue;
      }
      row = data[rowIdx];
      if (!row._aFilterData) {
        filterData = [];
        for (j = 0, jen = columns.length; j < jen; j++) {
          column = columns[j];
          if (column.bSearchable) {
            cellData = _fnGetCellData(settings, rowIdx, j, "filter");
            if (cellData === null) {
              cellData = "";
            }
            if (typeof cellData !== "string" && cellData.toString) {
              cellData = cellData.toString();
            }
          } else {
            cellData = "";
          }
          if (cellData.indexOf && cellData.indexOf("&") !== -1) {
            __filter_div.innerHTML = cellData;
            cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
          }
          if (cellData.replace) {
            cellData = cellData.replace(/[\r\n\u2028]/g, "");
          }
          filterData.push(cellData);
        }
        row._aFilterData = filterData;
        row._sFilterRow = filterData.join("  ");
        wasInvalidated = true;
      }
    }
    return wasInvalidated;
  }
  function _fnInitialise(settings) {
    var i;
    var init2 = settings.oInit;
    var deferLoading = settings.deferLoading;
    var dataSrc = _fnDataSource(settings);
    if (!settings.bInitialised) {
      setTimeout(function() {
        _fnInitialise(settings);
      }, 200);
      return;
    }
    _fnBuildHead(settings, "header");
    _fnBuildHead(settings, "footer");
    _fnLoadState(settings, init2, function() {
      _fnDrawHead(settings, settings.aoHeader);
      _fnDrawHead(settings, settings.aoFooter);
      var iAjaxStart = settings.iInitDisplayStart;
      if (init2.aaData) {
        for (i = 0; i < init2.aaData.length; i++) {
          _fnAddData(settings, init2.aaData[i]);
        }
      } else if (deferLoading || dataSrc == "dom") {
        _fnAddTr(settings, $2(settings.nTBody).children("tr"));
      }
      settings.aiDisplay = settings.aiDisplayMaster.slice();
      _fnAddOptionsHtml(settings);
      _fnSortInit(settings);
      _colGroup(settings);
      _fnProcessingDisplay(settings, true);
      _fnCallbackFire(settings, null, "preInit", [settings], true);
      _fnReDraw(settings);
      if (dataSrc != "ssp" || deferLoading) {
        if (dataSrc == "ajax") {
          _fnBuildAjax(settings, {}, function(json) {
            var aData = _fnAjaxDataSrc(settings, json);
            for (i = 0; i < aData.length; i++) {
              _fnAddData(settings, aData[i]);
            }
            settings.iInitDisplayStart = iAjaxStart;
            _fnReDraw(settings);
            _fnProcessingDisplay(settings, false);
            _fnInitComplete(settings);
          }, settings);
        } else {
          _fnInitComplete(settings);
          _fnProcessingDisplay(settings, false);
        }
      }
    });
  }
  function _fnInitComplete(settings) {
    if (settings._bInitComplete) {
      return;
    }
    var args = [settings, settings.json];
    settings._bInitComplete = true;
    _fnAdjustColumnSizing(settings);
    _fnCallbackFire(settings, null, "plugin-init", args, true);
    _fnCallbackFire(settings, "aoInitComplete", "init", args, true);
  }
  function _fnLengthChange(settings, val) {
    var len = parseInt(val, 10);
    settings._iDisplayLength = len;
    _fnLengthOverflow(settings);
    _fnCallbackFire(settings, null, "length", [settings, len]);
  }
  function _fnPageChange(settings, action, redraw) {
    var start = settings._iDisplayStart, len = settings._iDisplayLength, records = settings.fnRecordsDisplay();
    if (records === 0 || len === -1) {
      start = 0;
    } else if (typeof action === "number") {
      start = action * len;
      if (start > records) {
        start = 0;
      }
    } else if (action == "first") {
      start = 0;
    } else if (action == "previous") {
      start = len >= 0 ? start - len : 0;
      if (start < 0) {
        start = 0;
      }
    } else if (action == "next") {
      if (start + len < records) {
        start += len;
      }
    } else if (action == "last") {
      start = Math.floor((records - 1) / len) * len;
    } else if (action === "ellipsis") {
      return;
    } else {
      _fnLog(settings, 0, "Unknown paging action: " + action, 5);
    }
    var changed = settings._iDisplayStart !== start;
    settings._iDisplayStart = start;
    _fnCallbackFire(settings, null, changed ? "page" : "page-nc", [settings]);
    if (changed && redraw) {
      _fnDraw(settings);
    }
    return changed;
  }
  function _processingHtml(settings) {
    var table = settings.nTable;
    var scrolling = settings.oScroll.sX !== "" || settings.oScroll.sY !== "";
    if (settings.oFeatures.bProcessing) {
      var n = $2("<div/>", {
        "id": settings.sTableId + "_processing",
        "class": settings.oClasses.processing.container,
        "role": "status"
      }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");
      if (scrolling) {
        n.prependTo($2("div.dt-scroll", settings.nTableWrapper));
      } else {
        n.insertBefore(table);
      }
      $2(table).on("processing.dt.DT", function(e, s, show) {
        n.css("display", show ? "block" : "none");
      });
    }
  }
  function _fnProcessingDisplay(settings, show) {
    if (settings.bDrawing && show === false) {
      return;
    }
    _fnCallbackFire(settings, null, "processing", [settings, show]);
  }
  function _fnProcessingRun(settings, enable, run) {
    if (!enable) {
      run();
    } else {
      _fnProcessingDisplay(settings, true);
      setTimeout(function() {
        run();
        _fnProcessingDisplay(settings, false);
      }, 0);
    }
  }
  function _fnFeatureHtmlTable(settings) {
    var table = $2(settings.nTable);
    var scroll = settings.oScroll;
    if (scroll.sX === "" && scroll.sY === "") {
      return settings.nTable;
    }
    var scrollX = scroll.sX;
    var scrollY = scroll.sY;
    var classes = settings.oClasses.scrolling;
    var caption = settings.captionNode;
    var captionSide = caption ? caption._captionSide : null;
    var headerClone = $2(table[0].cloneNode(false));
    var footerClone = $2(table[0].cloneNode(false));
    var footer = table.children("tfoot");
    var _div = "<div/>";
    var size = function(s) {
      return !s ? null : _fnStringToCss(s);
    };
    if (!footer.length) {
      footer = null;
    }
    var scroller = $2(_div, { "class": classes.container }).append(
      $2(_div, { "class": classes.header.self }).css({
        overflow: "hidden",
        position: "relative",
        border: 0,
        width: scrollX ? size(scrollX) : "100%"
      }).append(
        $2(_div, { "class": classes.header.inner }).css({
          "box-sizing": "content-box",
          width: scroll.sXInner || "100%"
        }).append(
          headerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "top" ? caption : null).append(
            table.children("thead")
          )
        )
      )
    ).append(
      $2(_div, { "class": classes.body }).css({
        position: "relative",
        overflow: "auto",
        width: size(scrollX)
      }).append(table)
    );
    if (footer) {
      scroller.append(
        $2(_div, { "class": classes.footer.self }).css({
          overflow: "hidden",
          border: 0,
          width: scrollX ? size(scrollX) : "100%"
        }).append(
          $2(_div, { "class": classes.footer.inner }).append(
            footerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "bottom" ? caption : null).append(
              table.children("tfoot")
            )
          )
        )
      );
    }
    var children = scroller.children();
    var scrollHead = children[0];
    var scrollBody = children[1];
    var scrollFoot = footer ? children[2] : null;
    $2(scrollBody).on("scroll.DT", function() {
      var scrollLeft = this.scrollLeft;
      scrollHead.scrollLeft = scrollLeft;
      if (footer) {
        scrollFoot.scrollLeft = scrollLeft;
      }
    });
    $2("th, td", scrollHead).on("focus", function() {
      var scrollLeft = scrollHead.scrollLeft;
      scrollBody.scrollLeft = scrollLeft;
      if (footer) {
        scrollBody.scrollLeft = scrollLeft;
      }
    });
    $2(scrollBody).css("max-height", scrollY);
    if (!scroll.bCollapse) {
      $2(scrollBody).css("height", scrollY);
    }
    settings.nScrollHead = scrollHead;
    settings.nScrollBody = scrollBody;
    settings.nScrollFoot = scrollFoot;
    settings.aoDrawCallback.push(_fnScrollDraw);
    return scroller[0];
  }
  function _fnScrollDraw(settings) {
    var scroll = settings.oScroll, barWidth = scroll.iBarWidth, divHeader = $2(settings.nScrollHead), divHeaderInner = divHeader.children("div"), divHeaderTable = divHeaderInner.children("table"), divBodyEl = settings.nScrollBody, divBody = $2(divBodyEl), divFooter = $2(settings.nScrollFoot), divFooterInner = divFooter.children("div"), divFooterTable = divFooterInner.children("table"), header = $2(settings.nTHead), table = $2(settings.nTable), footer = settings.nTFoot && $2("th, td", settings.nTFoot).length ? $2(settings.nTFoot) : null, browser = settings.oBrowser, headerCopy, footerCopy;
    var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
    if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== void 0) {
      settings.scrollBarVis = scrollBarVis;
      _fnAdjustColumnSizing(settings);
      return;
    } else {
      settings.scrollBarVis = scrollBarVis;
    }
    table.children("thead, tfoot").remove();
    headerCopy = header.clone().prependTo(table);
    headerCopy.find("th, td").removeAttr("tabindex");
    headerCopy.find("[id]").removeAttr("id");
    if (footer) {
      footerCopy = footer.clone().prependTo(table);
      footerCopy.find("[id]").removeAttr("id");
    }
    if (settings.aiDisplay.length) {
      var firstTr = null;
      var start = _fnDataSource(settings) !== "ssp" ? settings._iDisplayStart : 0;
      for (i = start; i < start + settings.aiDisplay.length; i++) {
        var idx = settings.aiDisplay[i];
        var tr = settings.aoData[idx].nTr;
        if (tr) {
          firstTr = tr;
          break;
        }
      }
      if (firstTr) {
        var colSizes = $2(firstTr).children("th, td").map(function(vis) {
          return {
            idx: _fnVisibleToColumnIndex(settings, vis),
            width: $2(this).outerWidth()
          };
        });
        for (var i = 0; i < colSizes.length; i++) {
          var colEl = settings.aoColumns[colSizes[i].idx].colEl[0];
          var colWidth = colEl.style.width.replace("px", "");
          if (colWidth !== colSizes[i].width) {
            colEl.style.width = colSizes[i].width + "px";
            if (scroll.sX) {
              colEl.style.minWidth = colSizes[i].width + "px";
            }
          }
        }
      }
    }
    divHeaderTable.find("colgroup").remove();
    divHeaderTable.append(settings.colgroup.clone());
    if (footer) {
      divFooterTable.find("colgroup").remove();
      divFooterTable.append(settings.colgroup.clone());
    }
    $2("th, td", headerCopy).each(function() {
      $2(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
    });
    if (footer) {
      $2("th, td", footerCopy).each(function() {
        $2(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
      });
    }
    var isScrolling = Math.floor(table.height()) > divBodyEl.clientHeight || divBody.css("overflow-y") == "scroll";
    var paddingSide = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
    var outerWidth = table.outerWidth();
    divHeaderTable.css("width", _fnStringToCss(outerWidth));
    divHeaderInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
    if (footer) {
      divFooterTable.css("width", _fnStringToCss(outerWidth));
      divFooterInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
    }
    table.children("colgroup").prependTo(table);
    divBody.trigger("scroll");
    if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
      divBodyEl.scrollTop = 0;
    }
  }
  function _fnCalculateColumnWidths(settings) {
    if (!settings.oFeatures.bAutoWidth) {
      return;
    }
    var table = settings.nTable, columns = settings.aoColumns, scroll = settings.oScroll, scrollY = scroll.sY, scrollX = scroll.sX, scrollXInner = scroll.sXInner, visibleColumns = _fnGetColumns(settings, "bVisible"), tableWidthAttr = table.getAttribute("width"), tableContainer = table.parentNode, i, column, columnIdx;
    var styleWidth = table.style.width;
    if (!styleWidth && !tableWidthAttr) {
      table.style.width = "100%";
      styleWidth = "100%";
    }
    if (styleWidth && styleWidth.indexOf("%") !== -1) {
      tableWidthAttr = styleWidth;
    }
    _fnCallbackFire(
      settings,
      null,
      "column-calc",
      { visible: visibleColumns },
      false
    );
    var tmpTable = $2(table.cloneNode()).css("visibility", "hidden").removeAttr("id");
    tmpTable.append("<tbody>");
    var tr = $2("<tr/>").appendTo(tmpTable.find("tbody"));
    tmpTable.append($2(settings.nTHead).clone()).append($2(settings.nTFoot).clone());
    tmpTable.find("tfoot th, tfoot td").css("width", "");
    tmpTable.find("thead th, thead td").each(function() {
      var width = _fnColumnsSumWidth(settings, this, true, false);
      if (width) {
        this.style.width = width;
        if (scrollX) {
          this.style.minWidth = width;
          $2(this).append($2("<div/>").css({
            width,
            margin: 0,
            padding: 0,
            border: 0,
            height: 1
          }));
        }
      } else {
        this.style.width = "";
      }
    });
    for (i = 0; i < visibleColumns.length; i++) {
      columnIdx = visibleColumns[i];
      column = columns[columnIdx];
      var longest = _fnGetMaxLenString(settings, columnIdx);
      var autoClass = _ext.type.className[column.sType];
      var text = longest + column.sContentPadding;
      var insert = longest.indexOf("<") === -1 ? document.createTextNode(text) : text;
      $2("<td/>").addClass(autoClass).addClass(column.sClass).append(insert).appendTo(tr);
    }
    $2("[name]", tmpTable).removeAttr("name");
    var holder = $2("<div/>").css(
      scrollX || scrollY ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}
    ).append(tmpTable).appendTo(tableContainer);
    if (scrollX && scrollXInner) {
      tmpTable.width(scrollXInner);
    } else if (scrollX) {
      tmpTable.css("width", "auto");
      tmpTable.removeAttr("width");
      if (tmpTable.width() < tableContainer.clientWidth && tableWidthAttr) {
        tmpTable.width(tableContainer.clientWidth);
      }
    } else if (scrollY) {
      tmpTable.width(tableContainer.clientWidth);
    } else if (tableWidthAttr) {
      tmpTable.width(tableWidthAttr);
    }
    var total = 0;
    var bodyCells = tmpTable.find("tbody tr").eq(0).children();
    for (i = 0; i < visibleColumns.length; i++) {
      var bounding = bodyCells[i].getBoundingClientRect().width;
      total += bounding;
      columns[visibleColumns[i]].sWidth = _fnStringToCss(bounding);
    }
    table.style.width = _fnStringToCss(total);
    holder.remove();
    if (tableWidthAttr) {
      table.style.width = _fnStringToCss(tableWidthAttr);
    }
    if ((tableWidthAttr || scrollX) && !settings._reszEvt) {
      var wrapperWidth = function() {
        return $2(settings.nTableWrapper).is(":visible") ? $2(settings.nTableWrapper).width() : 0;
      };
      settings.containerWidth = wrapperWidth();
      var resize = DataTable.util.throttle(function() {
        var newWidth = wrapperWidth();
        if (!settings.bDestroying && settings.containerWidth !== newWidth && newWidth !== 0) {
          _fnAdjustColumnSizing(settings);
          settings.containerWidth = newWidth;
        }
      });
      if (window.ResizeObserver) {
        settings.resizeObserver = new ResizeObserver(function(e) {
          var box = e[0].contentBoxSize;
          var size = Array.isArray(box) ? box[0].inlineSize : box.inlineSize;
          if (size < settings.containerWidth) {
            return;
          }
          resize();
        });
        settings.resizeObserver.observe(settings.nTableWrapper);
      } else {
        $2(window).on("resize.DT-" + settings.sInstance, resize);
      }
      settings._reszEvt = true;
    }
  }
  function _fnGetMaxLenString(settings, colIdx) {
    var column = settings.aoColumns[colIdx];
    if (!column.maxLenString) {
      var s, max = "", maxLen = -1;
      for (var i = 0, ien = settings.aiDisplayMaster.length; i < ien; i++) {
        var rowIdx = settings.aiDisplayMaster[i];
        var data = _fnGetRowDisplay(settings, rowIdx)[colIdx];
        var cellString = data && typeof data === "object" && data.nodeType ? data.innerHTML : data + "";
        cellString = cellString.replace(/id=".*?"/g, "").replace(/name=".*?"/g, "");
        s = _stripHtml(cellString).replace(/&nbsp;/g, " ");
        if (s.length > maxLen) {
          max = cellString;
          maxLen = s.length;
        }
      }
      column.maxLenString = max;
    }
    return column.maxLenString;
  }
  function _fnStringToCss(s) {
    if (s === null) {
      return "0px";
    }
    if (typeof s == "number") {
      return s < 0 ? "0px" : s + "px";
    }
    return s.match(/\d$/) ? s + "px" : s;
  }
  function _colGroup(settings) {
    var cols = settings.aoColumns;
    settings.colgroup.empty();
    for (i = 0; i < cols.length; i++) {
      if (cols[i].bVisible) {
        settings.colgroup.append(cols[i].colEl);
      }
    }
  }
  function _fnSortInit(settings) {
    var target = settings.nTHead;
    var headerRows = target.querySelectorAll("tr");
    var legacyTop = settings.bSortCellsTop;
    var notSelector = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
    if (legacyTop === true) {
      target = headerRows[0];
    } else if (legacyTop === false) {
      target = headerRows[headerRows.length - 1];
    }
    _fnSortAttachListener(
      settings,
      target,
      target === settings.nTHead ? "tr" + notSelector + " th" + notSelector + ", tr" + notSelector + " td" + notSelector : "th" + notSelector + ", td" + notSelector
    );
    var order = [];
    _fnSortResolve(settings, order, settings.aaSorting);
    settings.aaSorting = order;
  }
  function _fnSortAttachListener(settings, node, selector, column, callback) {
    _fnBindAction(node, selector, function(e) {
      var run = false;
      var columns = column === void 0 ? _fnColumnsFromHeader(e.target) : [column];
      if (columns.length) {
        for (var i = 0, ien = columns.length; i < ien; i++) {
          var ret = _fnSortAdd(settings, columns[i], i, e.shiftKey);
          if (ret !== false) {
            run = true;
          }
          if (settings.aaSorting.length === 1 && settings.aaSorting[0][1] === "") {
            break;
          }
        }
        if (run) {
          _fnProcessingRun(settings, true, function() {
            _fnSort(settings);
            _fnSortDisplay(settings, settings.aiDisplay);
            _fnReDraw(settings, false, false);
            if (callback) {
              callback();
            }
          });
        }
      }
    });
  }
  function _fnSortDisplay(settings, display) {
    if (display.length < 2) {
      return;
    }
    var master = settings.aiDisplayMaster;
    var masterMap = {};
    var map = {};
    var i;
    for (i = 0; i < master.length; i++) {
      masterMap[master[i]] = i;
    }
    for (i = 0; i < display.length; i++) {
      map[display[i]] = masterMap[display[i]];
    }
    display.sort(function(a, b) {
      return map[a] - map[b];
    });
  }
  function _fnSortResolve(settings, nestedSort, sort) {
    var push = function(a) {
      if ($2.isPlainObject(a)) {
        if (a.idx !== void 0) {
          nestedSort.push([a.idx, a.dir]);
        } else if (a.name) {
          var cols = _pluck(settings.aoColumns, "sName");
          var idx = cols.indexOf(a.name);
          if (idx !== -1) {
            nestedSort.push([idx, a.dir]);
          }
        }
      } else {
        nestedSort.push(a);
      }
    };
    if ($2.isPlainObject(sort)) {
      push(sort);
    } else if (sort.length && typeof sort[0] === "number") {
      push(sort);
    } else if (sort.length) {
      for (var z = 0; z < sort.length; z++) {
        push(sort[z]);
      }
    }
  }
  function _fnSortFlatten(settings) {
    var i, k, kLen, aSort = [], extSort = DataTable.ext.type.order, aoColumns = settings.aoColumns, aDataSort, iCol, sType, srcCol, fixed = settings.aaSortingFixed, fixedObj = $2.isPlainObject(fixed), nestedSort = [];
    if (!settings.oFeatures.bSort) {
      return aSort;
    }
    if (Array.isArray(fixed)) {
      _fnSortResolve(settings, nestedSort, fixed);
    }
    if (fixedObj && fixed.pre) {
      _fnSortResolve(settings, nestedSort, fixed.pre);
    }
    _fnSortResolve(settings, nestedSort, settings.aaSorting);
    if (fixedObj && fixed.post) {
      _fnSortResolve(settings, nestedSort, fixed.post);
    }
    for (i = 0; i < nestedSort.length; i++) {
      srcCol = nestedSort[i][0];
      if (aoColumns[srcCol]) {
        aDataSort = aoColumns[srcCol].aDataSort;
        for (k = 0, kLen = aDataSort.length; k < kLen; k++) {
          iCol = aDataSort[k];
          sType = aoColumns[iCol].sType || "string";
          if (nestedSort[i]._idx === void 0) {
            nestedSort[i]._idx = aoColumns[iCol].asSorting.indexOf(nestedSort[i][1]);
          }
          if (nestedSort[i][1]) {
            aSort.push({
              src: srcCol,
              col: iCol,
              dir: nestedSort[i][1],
              index: nestedSort[i]._idx,
              type: sType,
              formatter: extSort[sType + "-pre"],
              sorter: extSort[sType + "-" + nestedSort[i][1]]
            });
          }
        }
      }
    }
    return aSort;
  }
  function _fnSort(oSettings, col, dir) {
    var i, ien, iLen, aiOrig = [], extSort = DataTable.ext.type.order, aoData = oSettings.aoData, sortCol, displayMaster = oSettings.aiDisplayMaster, aSort;
    if (col !== void 0) {
      var srcCol = oSettings.aoColumns[col];
      aSort = [{
        src: col,
        col,
        dir,
        index: 0,
        type: srcCol.sType,
        formatter: extSort[srcCol.sType + "-pre"],
        sorter: extSort[srcCol.sType + "-" + dir]
      }];
      displayMaster = displayMaster.slice();
    } else {
      aSort = _fnSortFlatten(oSettings);
    }
    for (i = 0, ien = aSort.length; i < ien; i++) {
      sortCol = aSort[i];
      _fnSortData(oSettings, sortCol.col);
    }
    if (_fnDataSource(oSettings) != "ssp" && aSort.length !== 0) {
      for (i = 0, iLen = displayMaster.length; i < iLen; i++) {
        aiOrig[i] = i;
      }
      if (aSort.length && aSort[0].dir === "desc" && oSettings.orderDescReverse) {
        aiOrig.reverse();
      }
      displayMaster.sort(function(a, b) {
        var x, y, k, test, sort, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
        for (k = 0; k < len; k++) {
          sort = aSort[k];
          x = dataA[sort.col];
          y = dataB[sort.col];
          if (sort.sorter) {
            test = sort.sorter(x, y);
            if (test !== 0) {
              return test;
            }
          } else {
            test = x < y ? -1 : x > y ? 1 : 0;
            if (test !== 0) {
              return sort.dir === "asc" ? test : -test;
            }
          }
        }
        x = aiOrig[a];
        y = aiOrig[b];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else if (aSort.length === 0) {
      displayMaster.sort(function(x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
    if (col === void 0) {
      oSettings.bSorted = true;
      oSettings.sortDetails = aSort;
      _fnCallbackFire(oSettings, null, "order", [oSettings, aSort]);
    }
    return displayMaster;
  }
  function _fnSortAdd(settings, colIdx, addIndex, shift) {
    var col = settings.aoColumns[colIdx];
    var sorting = settings.aaSorting;
    var asSorting = col.asSorting;
    var nextSortIdx;
    var next = function(a, overflow) {
      var idx = a._idx;
      if (idx === void 0) {
        idx = asSorting.indexOf(a[1]);
      }
      return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
    };
    if (!col.bSortable) {
      return false;
    }
    if (typeof sorting[0] === "number") {
      sorting = settings.aaSorting = [sorting];
    }
    if ((shift || addIndex) && settings.oFeatures.bSortMulti) {
      var sortIdx = _pluck(sorting, "0").indexOf(colIdx);
      if (sortIdx !== -1) {
        nextSortIdx = next(sorting[sortIdx], true);
        if (nextSortIdx === null && sorting.length === 1) {
          nextSortIdx = 0;
        }
        if (nextSortIdx === null) {
          sorting.splice(sortIdx, 1);
        } else {
          sorting[sortIdx][1] = asSorting[nextSortIdx];
          sorting[sortIdx]._idx = nextSortIdx;
        }
      } else if (shift) {
        sorting.push([colIdx, asSorting[0], 0]);
        sorting[sorting.length - 1]._idx = 0;
      } else {
        sorting.push([colIdx, sorting[0][1], 0]);
        sorting[sorting.length - 1]._idx = 0;
      }
    } else if (sorting.length && sorting[0][0] == colIdx) {
      nextSortIdx = next(sorting[0]);
      sorting.length = 1;
      sorting[0][1] = asSorting[nextSortIdx];
      sorting[0]._idx = nextSortIdx;
    } else {
      sorting.length = 0;
      sorting.push([colIdx, asSorting[0]]);
      sorting[0]._idx = 0;
    }
  }
  function _fnSortingClasses(settings) {
    var oldSort = settings.aLastSort;
    var sortClass = settings.oClasses.order.position;
    var sort = _fnSortFlatten(settings);
    var features = settings.oFeatures;
    var i, ien, colIdx;
    if (features.bSort && features.bSortClasses) {
      for (i = 0, ien = oldSort.length; i < ien; i++) {
        colIdx = oldSort[i].src;
        $2(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i < 2 ? i + 1 : 3));
      }
      for (i = 0, ien = sort.length; i < ien; i++) {
        colIdx = sort[i].src;
        $2(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i < 2 ? i + 1 : 3));
      }
    }
    settings.aLastSort = sort;
  }
  function _fnSortData(settings, colIdx) {
    var column = settings.aoColumns[colIdx];
    var customSort = DataTable.ext.order[column.sSortDataType];
    var customData;
    if (customSort) {
      customData = customSort.call(
        settings.oInstance,
        settings,
        colIdx,
        _fnColumnIndexToVisible(settings, colIdx)
      );
    }
    var row, cellData;
    var formatter = DataTable.ext.type.order[column.sType + "-pre"];
    var data = settings.aoData;
    for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
      if (!data[rowIdx]) {
        continue;
      }
      row = data[rowIdx];
      if (!row._aSortData) {
        row._aSortData = [];
      }
      if (!row._aSortData[colIdx] || customSort) {
        cellData = customSort ? customData[rowIdx] : (
          // If there was a custom sort function, use data from there
          _fnGetCellData(settings, rowIdx, colIdx, "sort")
        );
        row._aSortData[colIdx] = formatter ? formatter(cellData, settings) : cellData;
      }
    }
  }
  function _fnSaveState(settings) {
    if (settings._bLoadingState) {
      return;
    }
    var sorting = [];
    _fnSortResolve(settings, sorting, settings.aaSorting);
    var columns = settings.aoColumns;
    var state = {
      time: +/* @__PURE__ */ new Date(),
      start: settings._iDisplayStart,
      length: settings._iDisplayLength,
      order: sorting.map(function(sort) {
        return columns[sort[0]] && columns[sort[0]].sName ? [columns[sort[0]].sName, sort[1]] : sort.slice();
      }),
      search: $2.extend({}, settings.oPreviousSearch),
      columns: settings.aoColumns.map(function(col, i) {
        return {
          name: col.sName,
          visible: col.bVisible,
          search: $2.extend({}, settings.aoPreSearchCols[i])
        };
      })
    };
    settings.oSavedState = state;
    _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [settings, state]);
    if (settings.oFeatures.bStateSave && !settings.bDestroying) {
      settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
    }
  }
  function _fnLoadState(settings, init2, callback) {
    if (!settings.oFeatures.bStateSave) {
      callback();
      return;
    }
    var loaded = function(state2) {
      _fnImplementState(settings, state2, callback);
    };
    var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
    if (state !== void 0) {
      _fnImplementState(settings, state, callback);
    }
    return true;
  }
  function _fnImplementState(settings, s, callback) {
    var i, ien;
    var columns = settings.aoColumns;
    var currentNames = _pluck(settings.aoColumns, "sName");
    settings._bLoadingState = true;
    var api = settings._bInitComplete ? new DataTable.Api(settings) : null;
    if (!s || !s.time) {
      settings._bLoadingState = false;
      callback();
      return;
    }
    var duration = settings.iStateDuration;
    if (duration > 0 && s.time < +/* @__PURE__ */ new Date() - duration * 1e3) {
      settings._bLoadingState = false;
      callback();
      return;
    }
    var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [settings, s]);
    if (abStateLoad.indexOf(false) !== -1) {
      settings._bLoadingState = false;
      callback();
      return;
    }
    settings.oLoadedState = $2.extend(true, {}, s);
    _fnCallbackFire(settings, null, "stateLoadInit", [settings, s], true);
    if (s.length !== void 0) {
      if (api) {
        api.page.len(s.length);
      } else {
        settings._iDisplayLength = s.length;
      }
    }
    if (s.start !== void 0) {
      if (api === null) {
        settings._iDisplayStart = s.start;
        settings.iInitDisplayStart = s.start;
      } else {
        _fnPageChange(settings, s.start / settings._iDisplayLength);
      }
    }
    if (s.order !== void 0) {
      settings.aaSorting = [];
      $2.each(s.order, function(i2, col2) {
        var set2 = [col2[0], col2[1]];
        if (typeof col2[0] === "string") {
          var idx2 = currentNames.indexOf(col2[0]);
          set2[0] = idx2 >= 0 ? idx2 : 0;
        } else if (set2[0] >= columns.length) {
          set2[0] = 0;
        }
        settings.aaSorting.push(set2);
      });
    }
    if (s.search !== void 0) {
      $2.extend(settings.oPreviousSearch, s.search);
    }
    if (s.columns) {
      var set = s.columns;
      var incoming = _pluck(s.columns, "name");
      if (incoming.join("").length && incoming.join("") !== currentNames.join("")) {
        set = [];
        for (i = 0; i < currentNames.length; i++) {
          if (currentNames[i] != "") {
            var idx = incoming.indexOf(currentNames[i]);
            if (idx >= 0) {
              set.push(s.columns[idx]);
            } else {
              set.push({});
            }
          } else {
            set.push({});
          }
        }
      }
      if (set.length === columns.length) {
        for (i = 0, ien = set.length; i < ien; i++) {
          var col = set[i];
          if (col.visible !== void 0) {
            if (api) {
              api.column(i).visible(col.visible, false);
            } else {
              columns[i].bVisible = col.visible;
            }
          }
          if (col.search !== void 0) {
            $2.extend(settings.aoPreSearchCols[i], col.search);
          }
        }
        if (api) {
          api.columns.adjust();
        }
      }
    }
    settings._bLoadingState = false;
    _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [settings, s]);
    callback();
  }
  function _fnLog(settings, level, msg, tn) {
    msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
    if (tn) {
      msg += ". For more information about this error, please see https://datatables.net/tn/" + tn;
    }
    if (!level) {
      var ext = DataTable.ext;
      var type = ext.sErrMode || ext.errMode;
      if (settings) {
        _fnCallbackFire(settings, null, "dt-error", [settings, tn, msg], true);
      }
      if (type == "alert") {
        alert(msg);
      } else if (type == "throw") {
        throw new Error(msg);
      } else if (typeof type == "function") {
        type(settings, tn, msg);
      }
    } else if (window.console && console.log) {
      console.log(msg);
    }
  }
  function _fnMap(ret, src, name, mappedName) {
    if (Array.isArray(name)) {
      $2.each(name, function(i, val) {
        if (Array.isArray(val)) {
          _fnMap(ret, src, val[0], val[1]);
        } else {
          _fnMap(ret, src, val);
        }
      });
      return;
    }
    if (mappedName === void 0) {
      mappedName = name;
    }
    if (src[name] !== void 0) {
      ret[mappedName] = src[name];
    }
  }
  function _fnExtend(out, extender, breakRefs) {
    var val;
    for (var prop in extender) {
      if (Object.prototype.hasOwnProperty.call(extender, prop)) {
        val = extender[prop];
        if ($2.isPlainObject(val)) {
          if (!$2.isPlainObject(out[prop])) {
            out[prop] = {};
          }
          $2.extend(true, out[prop], val);
        } else if (breakRefs && prop !== "data" && prop !== "aaData" && Array.isArray(val)) {
          out[prop] = val.slice();
        } else {
          out[prop] = val;
        }
      }
    }
    return out;
  }
  function _fnBindAction(n, selector, fn) {
    $2(n).on("click.DT", selector, function(e) {
      fn(e);
    }).on("keypress.DT", selector, function(e) {
      if (e.which === 13) {
        e.preventDefault();
        fn(e);
      }
    }).on("selectstart.DT", selector, function() {
      return false;
    });
  }
  function _fnCallbackReg(settings, store, fn) {
    if (fn) {
      settings[store].push(fn);
    }
  }
  function _fnCallbackFire(settings, callbackArr, eventName, args, bubbles) {
    var ret = [];
    if (callbackArr) {
      ret = settings[callbackArr].slice().reverse().map(function(val) {
        return val.apply(settings.oInstance, args);
      });
    }
    if (eventName !== null) {
      var e = $2.Event(eventName + ".dt");
      var table = $2(settings.nTable);
      e.dt = settings.api;
      table[bubbles ? "trigger" : "triggerHandler"](e, args);
      if (bubbles && table.parents("body").length === 0) {
        $2("body").trigger(e, args);
      }
      ret.push(e.result);
    }
    return ret;
  }
  function _fnLengthOverflow(settings) {
    var start = settings._iDisplayStart, end = settings.fnDisplayEnd(), len = settings._iDisplayLength;
    if (start >= end) {
      start = end - len;
    }
    start -= start % len;
    if (len === -1 || start < 0) {
      start = 0;
    }
    settings._iDisplayStart = start;
  }
  function _fnRenderer(settings, type) {
    var renderer = settings.renderer;
    var host = DataTable.ext.renderer[type];
    if ($2.isPlainObject(renderer) && renderer[type]) {
      return host[renderer[type]] || host._;
    } else if (typeof renderer === "string") {
      return host[renderer] || host._;
    }
    return host._;
  }
  function _fnDataSource(settings) {
    if (settings.oFeatures.bServerSide) {
      return "ssp";
    } else if (settings.ajax) {
      return "ajax";
    }
    return "dom";
  }
  function _fnMacros(settings, str, entries) {
    var formatter = settings.fnFormatNumber, start = settings._iDisplayStart + 1, len = settings._iDisplayLength, vis = settings.fnRecordsDisplay(), max = settings.fnRecordsTotal(), all = len === -1;
    return str.replace(/_START_/g, formatter.call(settings, start)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, max)).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len))).replace(/_ENTRIES_/g, settings.api.i18n("entries", "", entries)).replace(/_ENTRIES-MAX_/g, settings.api.i18n("entries", "", max)).replace(/_ENTRIES-TOTAL_/g, settings.api.i18n("entries", "", vis));
  }
  function _fnArrayApply(arr, data) {
    if (!data) {
      return;
    }
    if (data.length < 1e4) {
      arr.push.apply(arr, data);
    } else {
      for (i = 0; i < data.length; i++) {
        arr.push(data[i]);
      }
    }
  }
  var __apiStruct = [];
  var __arrayProto = Array.prototype;
  var _toSettings = function(mixed) {
    var idx, jq;
    var settings = DataTable.settings;
    var tables = _pluck(settings, "nTable");
    if (!mixed) {
      return [];
    } else if (mixed.nTable && mixed.oFeatures) {
      return [mixed];
    } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === "table") {
      idx = tables.indexOf(mixed);
      return idx !== -1 ? [settings[idx]] : null;
    } else if (mixed && typeof mixed.settings === "function") {
      return mixed.settings().toArray();
    } else if (typeof mixed === "string") {
      jq = $2(mixed).get();
    } else if (mixed instanceof $2) {
      jq = mixed.get();
    }
    if (jq) {
      return settings.filter(function(v, idx2) {
        return jq.includes(tables[idx2]);
      });
    }
  };
  _Api = function(context, data) {
    if (!(this instanceof _Api)) {
      return new _Api(context, data);
    }
    var i;
    var settings = [];
    var ctxSettings = function(o) {
      var a = _toSettings(o);
      if (a) {
        settings.push.apply(settings, a);
      }
    };
    if (Array.isArray(context)) {
      for (i = 0; i < context.length; i++) {
        ctxSettings(context[i]);
      }
    } else {
      ctxSettings(context);
    }
    this.context = settings.length > 1 ? _unique(settings) : settings;
    _fnArrayApply(this, data);
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };
    _Api.extend(this, this, __apiStruct);
  };
  DataTable.Api = _Api;
  $2.extend(_Api.prototype, {
    any: function() {
      return this.count() !== 0;
    },
    context: [],
    // array of table settings objects
    count: function() {
      return this.flatten().length;
    },
    each: function(fn) {
      for (var i = 0, ien = this.length; i < ien; i++) {
        fn.call(this, this[i], i, this);
      }
      return this;
    },
    eq: function(idx) {
      var ctx = this.context;
      return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null;
    },
    filter: function(fn) {
      var a = __arrayProto.filter.call(this, fn, this);
      return new _Api(this.context, a);
    },
    flatten: function() {
      var a = [];
      return new _Api(this.context, a.concat.apply(a, this.toArray()));
    },
    get: function(idx) {
      return this[idx];
    },
    join: __arrayProto.join,
    includes: function(find) {
      return this.indexOf(find) === -1 ? false : true;
    },
    indexOf: __arrayProto.indexOf,
    iterator: function(flatten, type, fn, alwaysNew) {
      var a = [], ret, i, ien, j, jen, context = this.context, rows, items, item, selector = this.selector;
      if (typeof flatten === "string") {
        alwaysNew = fn;
        fn = type;
        type = flatten;
        flatten = false;
      }
      for (i = 0, ien = context.length; i < ien; i++) {
        var apiInst = new _Api(context[i]);
        if (type === "table") {
          ret = fn.call(apiInst, context[i], i);
          if (ret !== void 0) {
            a.push(ret);
          }
        } else if (type === "columns" || type === "rows") {
          ret = fn.call(apiInst, context[i], this[i], i);
          if (ret !== void 0) {
            a.push(ret);
          }
        } else if (type === "every" || type === "column" || type === "column-rows" || type === "row" || type === "cell") {
          items = this[i];
          if (type === "column-rows") {
            rows = _selector_row_indexes(context[i], selector.opts);
          }
          for (j = 0, jen = items.length; j < jen; j++) {
            item = items[j];
            if (type === "cell") {
              ret = fn.call(apiInst, context[i], item.row, item.column, i, j);
            } else {
              ret = fn.call(apiInst, context[i], item, i, j, rows);
            }
            if (ret !== void 0) {
              a.push(ret);
            }
          }
        }
      }
      if (a.length || alwaysNew) {
        var api = new _Api(context, flatten ? a.concat.apply([], a) : a);
        var apiSelector = api.selector;
        apiSelector.rows = selector.rows;
        apiSelector.cols = selector.cols;
        apiSelector.opts = selector.opts;
        return api;
      }
      return this;
    },
    lastIndexOf: __arrayProto.lastIndexOf,
    length: 0,
    map: function(fn) {
      var a = __arrayProto.map.call(this, fn, this);
      return new _Api(this.context, a);
    },
    pluck: function(prop) {
      var fn = DataTable.util.get(prop);
      return this.map(function(el) {
        return fn(el);
      });
    },
    pop: __arrayProto.pop,
    push: __arrayProto.push,
    reduce: __arrayProto.reduce,
    reduceRight: __arrayProto.reduceRight,
    reverse: __arrayProto.reverse,
    // Object with rows, columns and opts
    selector: null,
    shift: __arrayProto.shift,
    slice: function() {
      return new _Api(this.context, this);
    },
    sort: __arrayProto.sort,
    splice: __arrayProto.splice,
    toArray: function() {
      return __arrayProto.slice.call(this);
    },
    to$: function() {
      return $2(this);
    },
    toJQuery: function() {
      return $2(this);
    },
    unique: function() {
      return new _Api(this.context, _unique(this.toArray()));
    },
    unshift: __arrayProto.unshift
  });
  function _api_scope(scope, fn, struc) {
    return function() {
      var ret = fn.apply(scope || this, arguments);
      _Api.extend(ret, ret, struc.methodExt);
      return ret;
    };
  }
  function _api_find(src, name) {
    for (var i = 0, ien = src.length; i < ien; i++) {
      if (src[i].name === name) {
        return src[i];
      }
    }
    return null;
  }
  window.__apiStruct = __apiStruct;
  _Api.extend = function(scope, obj, ext) {
    if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) {
      return;
    }
    var i, ien, struct;
    for (i = 0, ien = ext.length; i < ien; i++) {
      struct = ext[i];
      if (struct.name === "__proto__") {
        continue;
      }
      obj[struct.name] = struct.type === "function" ? _api_scope(scope, struct.val, struct) : struct.type === "object" ? {} : struct.val;
      obj[struct.name].__dt_wrapper = true;
      _Api.extend(scope, obj[struct.name], struct.propExt);
    }
  };
  _Api.register = _api_register = function(name, val) {
    if (Array.isArray(name)) {
      for (var j = 0, jen = name.length; j < jen; j++) {
        _Api.register(name[j], val);
      }
      return;
    }
    var i, ien, heir = name.split("."), struct = __apiStruct, key, method;
    for (i = 0, ien = heir.length; i < ien; i++) {
      method = heir[i].indexOf("()") !== -1;
      key = method ? heir[i].replace("()", "") : heir[i];
      var src = _api_find(struct, key);
      if (!src) {
        src = {
          name: key,
          val: {},
          methodExt: [],
          propExt: [],
          type: "object"
        };
        struct.push(src);
      }
      if (i === ien - 1) {
        src.val = val;
        src.type = typeof val === "function" ? "function" : $2.isPlainObject(val) ? "object" : "other";
      } else {
        struct = method ? src.methodExt : src.propExt;
      }
    }
  };
  _Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
    _Api.register(pluralName, val);
    _Api.register(singularName, function() {
      var ret = val.apply(this, arguments);
      if (ret === this) {
        return this;
      } else if (ret instanceof _Api) {
        return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : (
          // Array results are 'enhanced'
          ret[0]
        ) : void 0;
      }
      return ret;
    });
  };
  var __table_selector = function(selector, a) {
    if (Array.isArray(selector)) {
      var result = [];
      selector.forEach(function(sel) {
        var inner = __table_selector(sel, a);
        _fnArrayApply(result, inner);
      });
      return result.filter(function(item) {
        return item;
      });
    }
    if (typeof selector === "number") {
      return [a[selector]];
    }
    var nodes = a.map(function(el) {
      return el.nTable;
    });
    return $2(nodes).filter(selector).map(function() {
      var idx = nodes.indexOf(this);
      return a[idx];
    }).toArray();
  };
  _api_register("tables()", function(selector) {
    return selector !== void 0 && selector !== null ? new _Api(__table_selector(selector, this.context)) : this;
  });
  _api_register("table()", function(selector) {
    var tables = this.tables(selector);
    var ctx = tables.context;
    return ctx.length ? new _Api(ctx[0]) : tables;
  });
  [
    ["nodes", "node", "nTable"],
    ["body", "body", "nTBody"],
    ["header", "header", "nTHead"],
    ["footer", "footer", "nTFoot"]
  ].forEach(function(item) {
    _api_registerPlural(
      "tables()." + item[0] + "()",
      "table()." + item[1] + "()",
      function() {
        return this.iterator("table", function(ctx) {
          return ctx[item[2]];
        }, 1);
      }
    );
  });
  [
    ["header", "aoHeader"],
    ["footer", "aoFooter"]
  ].forEach(function(item) {
    _api_register("table()." + item[0] + ".structure()", function(selector) {
      var indexes = this.columns(selector).indexes().flatten();
      var ctx = this.context[0];
      return _fnHeaderLayout(ctx, ctx[item[1]], indexes);
    });
  });
  _api_registerPlural("tables().containers()", "table().container()", function() {
    return this.iterator("table", function(ctx) {
      return ctx.nTableWrapper;
    }, 1);
  });
  _api_register("tables().every()", function(fn) {
    var that = this;
    return this.iterator("table", function(s, i) {
      fn.call(that.table(i), i);
    });
  });
  _api_register("caption()", function(value, side) {
    var context = this.context;
    if (value === void 0) {
      var caption = context[0].captionNode;
      return caption && context.length ? caption.innerHTML : null;
    }
    return this.iterator("table", function(ctx) {
      var table = $2(ctx.nTable);
      var caption2 = $2(ctx.captionNode);
      var container = $2(ctx.nTableWrapper);
      if (!caption2.length) {
        caption2 = $2("<caption/>").html(value);
        ctx.captionNode = caption2[0];
        if (!side) {
          table.prepend(caption2);
          side = caption2.css("caption-side");
        }
      }
      caption2.html(value);
      if (side) {
        caption2.css("caption-side", side);
        caption2[0]._captionSide = side;
      }
      if (container.find("div.dataTables_scroll").length) {
        var selector = side === "top" ? "Head" : "Foot";
        container.find("div.dataTables_scroll" + selector + " table").prepend(caption2);
      } else {
        table.prepend(caption2);
      }
    }, 1);
  });
  _api_register("caption.node()", function() {
    var ctx = this.context;
    return ctx.length ? ctx[0].captionNode : null;
  });
  _api_register("draw()", function(paging) {
    return this.iterator("table", function(settings) {
      if (paging === "page") {
        _fnDraw(settings);
      } else {
        if (typeof paging === "string") {
          paging = paging === "full-hold" ? false : true;
        }
        _fnReDraw(settings, paging === false);
      }
    });
  });
  _api_register("page()", function(action) {
    if (action === void 0) {
      return this.page.info().page;
    }
    return this.iterator("table", function(settings) {
      _fnPageChange(settings, action);
    });
  });
  _api_register("page.info()", function() {
    if (this.context.length === 0) {
      return void 0;
    }
    var settings = this.context[0], start = settings._iDisplayStart, len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1, visRecords = settings.fnRecordsDisplay(), all = len === -1;
    return {
      "page": all ? 0 : Math.floor(start / len),
      "pages": all ? 1 : Math.ceil(visRecords / len),
      "start": start,
      "end": settings.fnDisplayEnd(),
      "length": len,
      "recordsTotal": settings.fnRecordsTotal(),
      "recordsDisplay": visRecords,
      "serverSide": _fnDataSource(settings) === "ssp"
    };
  });
  _api_register("page.len()", function(len) {
    if (len === void 0) {
      return this.context.length !== 0 ? this.context[0]._iDisplayLength : void 0;
    }
    return this.iterator("table", function(settings) {
      _fnLengthChange(settings, len);
    });
  });
  var __reload = function(settings, holdPosition, callback) {
    if (callback) {
      var api = new _Api(settings);
      api.one("draw", function() {
        callback(api.ajax.json());
      });
    }
    if (_fnDataSource(settings) == "ssp") {
      _fnReDraw(settings, holdPosition);
    } else {
      _fnProcessingDisplay(settings, true);
      var xhr = settings.jqXHR;
      if (xhr && xhr.readyState !== 4) {
        xhr.abort();
      }
      _fnBuildAjax(settings, {}, function(json) {
        _fnClearTable(settings);
        var data = _fnAjaxDataSrc(settings, json);
        for (var i = 0, ien = data.length; i < ien; i++) {
          _fnAddData(settings, data[i]);
        }
        _fnReDraw(settings, holdPosition);
        _fnInitComplete(settings);
        _fnProcessingDisplay(settings, false);
      });
    }
  };
  _api_register("ajax.json()", function() {
    var ctx = this.context;
    if (ctx.length > 0) {
      return ctx[0].json;
    }
  });
  _api_register("ajax.params()", function() {
    var ctx = this.context;
    if (ctx.length > 0) {
      return ctx[0].oAjaxData;
    }
  });
  _api_register("ajax.reload()", function(callback, resetPaging) {
    return this.iterator("table", function(settings) {
      __reload(settings, resetPaging === false, callback);
    });
  });
  _api_register("ajax.url()", function(url) {
    var ctx = this.context;
    if (url === void 0) {
      if (ctx.length === 0) {
        return void 0;
      }
      ctx = ctx[0];
      return $2.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax;
    }
    return this.iterator("table", function(settings) {
      if ($2.isPlainObject(settings.ajax)) {
        settings.ajax.url = url;
      } else {
        settings.ajax = url;
      }
    });
  });
  _api_register("ajax.url().load()", function(callback, resetPaging) {
    return this.iterator("table", function(ctx) {
      __reload(ctx, resetPaging === false, callback);
    });
  });
  var _selector_run = function(type, selector, selectFn, settings, opts) {
    var out = [], res, a, i, ien, j, jen, selectorType = typeof selector;
    if (!selector || selectorType === "string" || selectorType === "function" || selector.length === void 0) {
      selector = [selector];
    }
    for (i = 0, ien = selector.length; i < ien; i++) {
      a = selector[i] && selector[i].split && !selector[i].match(/[[(:]/) ? selector[i].split(",") : [selector[i]];
      for (j = 0, jen = a.length; j < jen; j++) {
        res = selectFn(typeof a[j] === "string" ? a[j].trim() : a[j]);
        res = res.filter(function(item) {
          return item !== null && item !== void 0;
        });
        if (res && res.length) {
          out = out.concat(res);
        }
      }
    }
    var ext = _ext.selector[type];
    if (ext.length) {
      for (i = 0, ien = ext.length; i < ien; i++) {
        out = ext[i](settings, opts, out);
      }
    }
    return _unique(out);
  };
  var _selector_opts = function(opts) {
    if (!opts) {
      opts = {};
    }
    if (opts.filter && opts.search === void 0) {
      opts.search = opts.filter;
    }
    return $2.extend({
      search: "none",
      order: "current",
      page: "all"
    }, opts);
  };
  var _selector_first = function(old) {
    var inst = new _Api(old.context[0]);
    if (old.length) {
      inst.push(old[0]);
    }
    inst.selector = old.selector;
    if (inst.length && inst[0].length > 1) {
      inst[0].splice(1);
    }
    return inst;
  };
  var _selector_row_indexes = function(settings, opts) {
    var i, ien, tmp, a = [], displayFiltered = settings.aiDisplay, displayMaster = settings.aiDisplayMaster;
    var search = opts.search, order = opts.order, page = opts.page;
    if (_fnDataSource(settings) == "ssp") {
      return search === "removed" ? [] : _range(0, displayMaster.length);
    }
    if (page == "current") {
      for (i = settings._iDisplayStart, ien = settings.fnDisplayEnd(); i < ien; i++) {
        a.push(displayFiltered[i]);
      }
    } else if (order == "current" || order == "applied") {
      if (search == "none") {
        a = displayMaster.slice();
      } else if (search == "applied") {
        a = displayFiltered.slice();
      } else if (search == "removed") {
        var displayFilteredMap = {};
        for (i = 0, ien = displayFiltered.length; i < ien; i++) {
          displayFilteredMap[displayFiltered[i]] = null;
        }
        displayMaster.forEach(function(item) {
          if (!Object.prototype.hasOwnProperty.call(displayFilteredMap, item)) {
            a.push(item);
          }
        });
      }
    } else if (order == "index" || order == "original") {
      for (i = 0, ien = settings.aoData.length; i < ien; i++) {
        if (!settings.aoData[i]) {
          continue;
        }
        if (search == "none") {
          a.push(i);
        } else {
          tmp = displayFiltered.indexOf(i);
          if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
            a.push(i);
          }
        }
      }
    } else if (typeof order === "number") {
      var ordered = _fnSort(settings, order, "asc");
      if (search === "none") {
        a = ordered;
      } else {
        for (i = 0; i < ordered.length; i++) {
          tmp = displayFiltered.indexOf(ordered[i]);
          if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
            a.push(ordered[i]);
          }
        }
      }
    }
    return a;
  };
  var __row_selector = function(settings, selector, opts) {
    var rows;
    var run = function(sel) {
      var selInt = _intVal(sel);
      var aoData = settings.aoData;
      if (selInt !== null && !opts) {
        return [selInt];
      }
      if (!rows) {
        rows = _selector_row_indexes(settings, opts);
      }
      if (selInt !== null && rows.indexOf(selInt) !== -1) {
        return [selInt];
      } else if (sel === null || sel === void 0 || sel === "") {
        return rows;
      }
      if (typeof sel === "function") {
        return rows.map(function(idx) {
          var row = aoData[idx];
          return sel(idx, row._aData, row.nTr) ? idx : null;
        });
      }
      if (sel.nodeName) {
        var rowIdx = sel._DT_RowIndex;
        var cellIdx = sel._DT_CellIndex;
        if (rowIdx !== void 0) {
          return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [rowIdx] : [];
        } else if (cellIdx) {
          return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [cellIdx.row] : [];
        } else {
          var host = $2(sel).closest("*[data-dt-row]");
          return host.length ? [host.data("dt-row")] : [];
        }
      }
      if (typeof sel === "string" && sel.charAt(0) === "#") {
        var rowObj = settings.aIds[sel.replace(/^#/, "")];
        if (rowObj !== void 0) {
          return [rowObj.idx];
        }
      }
      var nodes = _removeEmpty(
        _pluck_order(settings.aoData, rows, "nTr")
      );
      return $2(nodes).filter(sel).map(function() {
        return this._DT_RowIndex;
      }).toArray();
    };
    var matched = _selector_run("row", selector, run, settings, opts);
    if (opts.order === "current" || opts.order === "applied") {
      _fnSortDisplay(settings, matched);
    }
    return matched;
  };
  _api_register("rows()", function(selector, opts) {
    if (selector === void 0) {
      selector = "";
    } else if ($2.isPlainObject(selector)) {
      opts = selector;
      selector = "";
    }
    opts = _selector_opts(opts);
    var inst = this.iterator("table", function(settings) {
      return __row_selector(settings, selector, opts);
    }, 1);
    inst.selector.rows = selector;
    inst.selector.opts = opts;
    return inst;
  });
  _api_register("rows().nodes()", function() {
    return this.iterator("row", function(settings, row) {
      return settings.aoData[row].nTr || void 0;
    }, 1);
  });
  _api_register("rows().data()", function() {
    return this.iterator(true, "rows", function(settings, rows) {
      return _pluck_order(settings.aoData, rows, "_aData");
    }, 1);
  });
  _api_registerPlural("rows().cache()", "row().cache()", function(type) {
    return this.iterator("row", function(settings, row) {
      var r = settings.aoData[row];
      return type === "search" ? r._aFilterData : r._aSortData;
    }, 1);
  });
  _api_registerPlural("rows().invalidate()", "row().invalidate()", function(src) {
    return this.iterator("row", function(settings, row) {
      _fnInvalidate(settings, row, src);
    });
  });
  _api_registerPlural("rows().indexes()", "row().index()", function() {
    return this.iterator("row", function(settings, row) {
      return row;
    }, 1);
  });
  _api_registerPlural("rows().ids()", "row().id()", function(hash) {
    var a = [];
    var context = this.context;
    for (var i = 0, ien = context.length; i < ien; i++) {
      for (var j = 0, jen = this[i].length; j < jen; j++) {
        var id = context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);
        a.push((hash === true ? "#" : "") + id);
      }
    }
    return new _Api(context, a);
  });
  _api_registerPlural("rows().remove()", "row().remove()", function() {
    this.iterator("row", function(settings, row) {
      var data = settings.aoData;
      var rowData = data[row];
      var idx = settings.aiDisplayMaster.indexOf(row);
      if (idx !== -1) {
        settings.aiDisplayMaster.splice(idx, 1);
      }
      if (settings._iRecordsDisplay > 0) {
        settings._iRecordsDisplay--;
      }
      _fnLengthOverflow(settings);
      var id = settings.rowIdFn(rowData._aData);
      if (id !== void 0) {
        delete settings.aIds[id];
      }
      data[row] = null;
    });
    return this;
  });
  _api_register("rows.add()", function(rows) {
    var newRows = this.iterator("table", function(settings) {
      var row, i, ien;
      var out = [];
      for (i = 0, ien = rows.length; i < ien; i++) {
        row = rows[i];
        if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
          out.push(_fnAddTr(settings, row)[0]);
        } else {
          out.push(_fnAddData(settings, row));
        }
      }
      return out;
    }, 1);
    var modRows = this.rows(-1);
    modRows.pop();
    _fnArrayApply(modRows, newRows);
    return modRows;
  });
  _api_register("row()", function(selector, opts) {
    return _selector_first(this.rows(selector, opts));
  });
  _api_register("row().data()", function(data) {
    var ctx = this.context;
    if (data === void 0) {
      return ctx.length && this.length && this[0].length ? ctx[0].aoData[this[0]]._aData : void 0;
    }
    var row = ctx[0].aoData[this[0]];
    row._aData = data;
    if (Array.isArray(data) && row.nTr && row.nTr.id) {
      _fnSetObjectDataFn(ctx[0].rowId)(data, row.nTr.id);
    }
    _fnInvalidate(ctx[0], this[0], "data");
    return this;
  });
  _api_register("row().node()", function() {
    var ctx = this.context;
    if (ctx.length && this.length && this[0].length) {
      var row = ctx[0].aoData[this[0]];
      if (row && row.nTr) {
        return row.nTr;
      }
    }
    return null;
  });
  _api_register("row.add()", function(row) {
    if (row instanceof $2 && row.length) {
      row = row[0];
    }
    var rows = this.iterator("table", function(settings) {
      if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
        return _fnAddTr(settings, row)[0];
      }
      return _fnAddData(settings, row);
    });
    return this.row(rows[0]);
  });
  $2(document).on("plugin-init.dt", function(e, context) {
    var api = new _Api(context);
    api.on("stateSaveParams.DT", function(e2, settings, d) {
      var idFn = settings.rowIdFn;
      var rows = settings.aiDisplayMaster;
      var ids = [];
      for (var i = 0; i < rows.length; i++) {
        var rowIdx = rows[i];
        var data = settings.aoData[rowIdx];
        if (data._detailsShow) {
          ids.push("#" + idFn(data._aData));
        }
      }
      d.childRows = ids;
    });
    api.on("stateLoaded.DT", function(e2, settings, state) {
      __details_state_load(api, state);
    });
    __details_state_load(api, api.state.loaded());
  });
  var __details_state_load = function(api, state) {
    if (state && state.childRows) {
      api.rows(state.childRows.map(function(id) {
        return id.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:");
      })).every(function() {
        _fnCallbackFire(api.settings()[0], null, "requestChild", [this]);
      });
    }
  };
  var __details_add = function(ctx, row, data, klass) {
    var rows = [];
    var addRow = function(r, k) {
      if (Array.isArray(r) || r instanceof $2) {
        for (var i = 0, ien = r.length; i < ien; i++) {
          addRow(r[i], k);
        }
        return;
      }
      if (r.nodeName && r.nodeName.toLowerCase() === "tr") {
        r.setAttribute("data-dt-row", row.idx);
        rows.push(r);
      } else {
        var created = $2("<tr><td></td></tr>").attr("data-dt-row", row.idx).addClass(k);
        $2("td", created).addClass(k).html(r)[0].colSpan = _fnVisbleColumns(ctx);
        rows.push(created[0]);
      }
    };
    addRow(data, klass);
    if (row._details) {
      row._details.detach();
    }
    row._details = $2(rows);
    if (row._detailsShow) {
      row._details.insertAfter(row.nTr);
    }
  };
  var __details_state = DataTable.util.throttle(
    function(ctx) {
      _fnSaveState(ctx[0]);
    },
    500
  );
  var __details_remove = function(api, idx) {
    var ctx = api.context;
    if (ctx.length) {
      var row = ctx[0].aoData[idx !== void 0 ? idx : api[0]];
      if (row && row._details) {
        row._details.remove();
        row._detailsShow = void 0;
        row._details = void 0;
        $2(row.nTr).removeClass("dt-hasChild");
        __details_state(ctx);
      }
    }
  };
  var __details_display = function(api, show) {
    var ctx = api.context;
    if (ctx.length && api.length) {
      var row = ctx[0].aoData[api[0]];
      if (row._details) {
        row._detailsShow = show;
        if (show) {
          row._details.insertAfter(row.nTr);
          $2(row.nTr).addClass("dt-hasChild");
        } else {
          row._details.detach();
          $2(row.nTr).removeClass("dt-hasChild");
        }
        _fnCallbackFire(ctx[0], null, "childRow", [show, api.row(api[0])]);
        __details_events(ctx[0]);
        __details_state(ctx);
      }
    }
  };
  var __details_events = function(settings) {
    var api = new _Api(settings);
    var namespace = ".dt.DT_details";
    var drawEvent = "draw" + namespace;
    var colvisEvent = "column-sizing" + namespace;
    var destroyEvent = "destroy" + namespace;
    var data = settings.aoData;
    api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
    if (_pluck(data, "_details").length > 0) {
      api.on(drawEvent, function(e, ctx) {
        if (settings !== ctx) {
          return;
        }
        api.rows({ page: "current" }).eq(0).each(function(idx) {
          var row = data[idx];
          if (row._detailsShow) {
            row._details.insertAfter(row.nTr);
          }
        });
      });
      api.on(colvisEvent, function(e, ctx) {
        if (settings !== ctx) {
          return;
        }
        var row, visible = _fnVisbleColumns(ctx);
        for (var i = 0, ien = data.length; i < ien; i++) {
          row = data[i];
          if (row && row._details) {
            row._details.each(function() {
              var el = $2(this).children("td");
              if (el.length == 1) {
                el.attr("colspan", visible);
              }
            });
          }
        }
      });
      api.on(destroyEvent, function(e, ctx) {
        if (settings !== ctx) {
          return;
        }
        for (var i = 0, ien = data.length; i < ien; i++) {
          if (data[i] && data[i]._details) {
            __details_remove(api, i);
          }
        }
      });
    }
  };
  var _emp = "";
  var _child_obj = _emp + "row().child";
  var _child_mth = _child_obj + "()";
  _api_register(_child_mth, function(data, klass) {
    var ctx = this.context;
    if (data === void 0) {
      return ctx.length && this.length && ctx[0].aoData[this[0]] ? ctx[0].aoData[this[0]]._details : void 0;
    } else if (data === true) {
      this.child.show();
    } else if (data === false) {
      __details_remove(this);
    } else if (ctx.length && this.length) {
      __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass);
    }
    return this;
  });
  _api_register([
    _child_obj + ".show()",
    _child_mth + ".show()"
    // only when `child()` was called with parameters (without
  ], function() {
    __details_display(this, true);
    return this;
  });
  _api_register([
    _child_obj + ".hide()",
    _child_mth + ".hide()"
    // only when `child()` was called with parameters (without
  ], function() {
    __details_display(this, false);
    return this;
  });
  _api_register([
    _child_obj + ".remove()",
    _child_mth + ".remove()"
    // only when `child()` was called with parameters (without
  ], function() {
    __details_remove(this);
    return this;
  });
  _api_register(_child_obj + ".isShown()", function() {
    var ctx = this.context;
    if (ctx.length && this.length && ctx[0].aoData[this[0]]) {
      return ctx[0].aoData[this[0]]._detailsShow || false;
    }
    return false;
  });
  var __re_column_selector = /^([^:]+)?:(name|title|visIdx|visible)$/;
  var __columnData = function(settings, column, r1, r2, rows, type) {
    var a = [];
    for (var row = 0, ien = rows.length; row < ien; row++) {
      a.push(_fnGetCellData(settings, rows[row], column, type));
    }
    return a;
  };
  var __column_header = function(settings, column, row) {
    var header = settings.aoHeader;
    var target = row !== void 0 ? row : settings.bSortCellsTop ? 0 : header.length - 1;
    return header[target][column].cell;
  };
  var __column_selector = function(settings, selector, opts) {
    var columns = settings.aoColumns, names = _pluck(columns, "sName"), titles = _pluck(columns, "sTitle"), cells = DataTable.util.get("[].[].cell")(settings.aoHeader), nodes = _unique(_flatten([], cells));
    var run = function(s) {
      var selInt = _intVal(s);
      if (s === "") {
        return _range(columns.length);
      }
      if (selInt !== null) {
        return [
          selInt >= 0 ? selInt : (
            // Count from left
            columns.length + selInt
          )
          // Count from right (+ because its a negative value)
        ];
      }
      if (typeof s === "function") {
        var rows = _selector_row_indexes(settings, opts);
        return columns.map(function(col, idx2) {
          return s(
            idx2,
            __columnData(settings, idx2, 0, 0, rows),
            __column_header(settings, idx2)
          ) ? idx2 : null;
        });
      }
      var match = typeof s === "string" ? s.match(__re_column_selector) : "";
      if (match) {
        switch (match[2]) {
          case "visIdx":
          case "visible":
            if (match[1] && match[1].match(/^\d+$/)) {
              var idx = parseInt(match[1], 10);
              if (idx < 0) {
                var visColumns = columns.map(function(col, i) {
                  return col.bVisible ? i : null;
                });
                return [visColumns[visColumns.length + idx]];
              }
              return [_fnVisibleToColumnIndex(settings, idx)];
            }
            return columns.map(function(col, idx2) {
              if (!col.bVisible) {
                return null;
              }
              if (match[1]) {
                return $2(nodes[idx2]).filter(match[1]).length > 0 ? idx2 : null;
              }
              return idx2;
            });
          case "name":
            return names.map(function(name, i) {
              return name === match[1] ? i : null;
            });
          case "title":
            return titles.map(function(title, i) {
              return title === match[1] ? i : null;
            });
          default:
            return [];
        }
      }
      if (s.nodeName && s._DT_CellIndex) {
        return [s._DT_CellIndex.column];
      }
      var jqResult = $2(nodes).filter(s).map(function() {
        return _fnColumnsFromHeader(this);
      }).toArray().sort(function(a, b) {
        return a - b;
      });
      if (jqResult.length || !s.nodeName) {
        return jqResult;
      }
      var host = $2(s).closest("*[data-dt-column]");
      return host.length ? [host.data("dt-column")] : [];
    };
    return _selector_run("column", selector, run, settings, opts);
  };
  var __setColumnVis = function(settings, column, vis) {
    var cols = settings.aoColumns, col = cols[column], data = settings.aoData, cells, i, ien, tr;
    if (vis === void 0) {
      return col.bVisible;
    }
    if (col.bVisible === vis) {
      return false;
    }
    if (vis) {
      var insertBefore = _pluck(cols, "bVisible").indexOf(true, column + 1);
      for (i = 0, ien = data.length; i < ien; i++) {
        if (data[i]) {
          tr = data[i].nTr;
          cells = data[i].anCells;
          if (tr) {
            tr.insertBefore(cells[column], cells[insertBefore] || null);
          }
        }
      }
    } else {
      $2(_pluck(settings.aoData, "anCells", column)).detach();
    }
    col.bVisible = vis;
    _colGroup(settings);
    return true;
  };
  _api_register("columns()", function(selector, opts) {
    if (selector === void 0) {
      selector = "";
    } else if ($2.isPlainObject(selector)) {
      opts = selector;
      selector = "";
    }
    opts = _selector_opts(opts);
    var inst = this.iterator("table", function(settings) {
      return __column_selector(settings, selector, opts);
    }, 1);
    inst.selector.cols = selector;
    inst.selector.opts = opts;
    return inst;
  });
  _api_registerPlural("columns().header()", "column().header()", function(row) {
    return this.iterator("column", function(settings, column) {
      return __column_header(settings, column, row);
    }, 1);
  });
  _api_registerPlural("columns().footer()", "column().footer()", function(row) {
    return this.iterator("column", function(settings, column) {
      var footer = settings.aoFooter;
      if (!footer.length) {
        return null;
      }
      return settings.aoFooter[row !== void 0 ? row : 0][column].cell;
    }, 1);
  });
  _api_registerPlural("columns().data()", "column().data()", function() {
    return this.iterator("column-rows", __columnData, 1);
  });
  _api_registerPlural("columns().render()", "column().render()", function(type) {
    return this.iterator("column-rows", function(settings, column, i, j, rows) {
      return __columnData(settings, column, i, j, rows, type);
    }, 1);
  });
  _api_registerPlural("columns().dataSrc()", "column().dataSrc()", function() {
    return this.iterator("column", function(settings, column) {
      return settings.aoColumns[column].mData;
    }, 1);
  });
  _api_registerPlural("columns().cache()", "column().cache()", function(type) {
    return this.iterator("column-rows", function(settings, column, i, j, rows) {
      return _pluck_order(
        settings.aoData,
        rows,
        type === "search" ? "_aFilterData" : "_aSortData",
        column
      );
    }, 1);
  });
  _api_registerPlural("columns().init()", "column().init()", function() {
    return this.iterator("column", function(settings, column) {
      return settings.aoColumns[column];
    }, 1);
  });
  _api_registerPlural("columns().nodes()", "column().nodes()", function() {
    return this.iterator("column-rows", function(settings, column, i, j, rows) {
      return _pluck_order(settings.aoData, rows, "anCells", column);
    }, 1);
  });
  _api_registerPlural("columns().titles()", "column().title()", function(title, row) {
    return this.iterator("column", function(settings, column) {
      if (typeof title === "number") {
        row = title;
        title = void 0;
      }
      var span = $2("span.dt-column-title", this.column(column).header(row));
      if (title !== void 0) {
        span.html(title);
        return this;
      }
      return span.html();
    }, 1);
  });
  _api_registerPlural("columns().types()", "column().type()", function() {
    return this.iterator("column", function(settings, column) {
      var type = settings.aoColumns[column].sType;
      if (!type) {
        _fnColumnTypes(settings);
      }
      return type;
    }, 1);
  });
  _api_registerPlural("columns().visible()", "column().visible()", function(vis, calc) {
    var that = this;
    var changed = [];
    var ret = this.iterator("column", function(settings, column) {
      if (vis === void 0) {
        return settings.aoColumns[column].bVisible;
      }
      if (__setColumnVis(settings, column, vis)) {
        changed.push(column);
      }
    });
    if (vis !== void 0) {
      this.iterator("table", function(settings) {
        _fnDrawHead(settings, settings.aoHeader);
        _fnDrawHead(settings, settings.aoFooter);
        if (!settings.aiDisplay.length) {
          $2(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisbleColumns(settings));
        }
        _fnSaveState(settings);
        that.iterator("column", function(settings2, column) {
          if (changed.includes(column)) {
            _fnCallbackFire(settings2, null, "column-visibility", [settings2, column, vis, calc]);
          }
        });
        if (changed.length && (calc === void 0 || calc)) {
          that.columns.adjust();
        }
      });
    }
    return ret;
  });
  _api_registerPlural("columns().widths()", "column().width()", function() {
    var columns = this.columns(":visible").count();
    var row = $2("<tr>").html("<td>" + Array(columns).join("</td><td>") + "</td>");
    $2(this.table().body()).append(row);
    var widths = row.children().map(function() {
      return $2(this).outerWidth();
    });
    row.remove();
    return this.iterator("column", function(settings, column) {
      var visIdx = _fnColumnIndexToVisible(settings, column);
      return visIdx !== null ? widths[visIdx] : 0;
    }, 1);
  });
  _api_registerPlural("columns().indexes()", "column().index()", function(type) {
    return this.iterator("column", function(settings, column) {
      return type === "visible" ? _fnColumnIndexToVisible(settings, column) : column;
    }, 1);
  });
  _api_register("columns.adjust()", function() {
    return this.iterator("table", function(settings) {
      _fnAdjustColumnSizing(settings);
    }, 1);
  });
  _api_register("column.index()", function(type, idx) {
    if (this.context.length !== 0) {
      var ctx = this.context[0];
      if (type === "fromVisible" || type === "toData") {
        return _fnVisibleToColumnIndex(ctx, idx);
      } else if (type === "fromData" || type === "toVisible") {
        return _fnColumnIndexToVisible(ctx, idx);
      }
    }
  });
  _api_register("column()", function(selector, opts) {
    return _selector_first(this.columns(selector, opts));
  });
  var __cell_selector = function(settings, selector, opts) {
    var data = settings.aoData;
    var rows = _selector_row_indexes(settings, opts);
    var cells = _removeEmpty(_pluck_order(data, rows, "anCells"));
    var allCells = $2(_flatten([], cells));
    var row;
    var columns = settings.aoColumns.length;
    var a, i, ien, j, o, host;
    var run = function(s) {
      var fnSelector = typeof s === "function";
      if (s === null || s === void 0 || fnSelector) {
        a = [];
        for (i = 0, ien = rows.length; i < ien; i++) {
          row = rows[i];
          for (j = 0; j < columns; j++) {
            o = {
              row,
              column: j
            };
            if (fnSelector) {
              host = data[row];
              if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
                a.push(o);
              }
            } else {
              a.push(o);
            }
          }
        }
        return a;
      }
      if ($2.isPlainObject(s)) {
        return s.column !== void 0 && s.row !== void 0 && rows.indexOf(s.row) !== -1 ? [s] : [];
      }
      var jqResult = allCells.filter(s).map(function(i2, el) {
        return {
          // use a new object, in case someone changes the values
          row: el._DT_CellIndex.row,
          column: el._DT_CellIndex.column
        };
      }).toArray();
      if (jqResult.length || !s.nodeName) {
        return jqResult;
      }
      host = $2(s).closest("*[data-dt-row]");
      return host.length ? [{
        row: host.data("dt-row"),
        column: host.data("dt-column")
      }] : [];
    };
    return _selector_run("cell", selector, run, settings, opts);
  };
  _api_register("cells()", function(rowSelector, columnSelector, opts) {
    if ($2.isPlainObject(rowSelector)) {
      if (rowSelector.row === void 0) {
        opts = rowSelector;
        rowSelector = null;
      } else {
        opts = columnSelector;
        columnSelector = null;
      }
    }
    if ($2.isPlainObject(columnSelector)) {
      opts = columnSelector;
      columnSelector = null;
    }
    if (columnSelector === null || columnSelector === void 0) {
      return this.iterator("table", function(settings) {
        return __cell_selector(settings, rowSelector, _selector_opts(opts));
      });
    }
    var internalOpts = opts ? {
      page: opts.page,
      order: opts.order,
      search: opts.search
    } : {};
    var columns = this.columns(columnSelector, internalOpts);
    var rows = this.rows(rowSelector, internalOpts);
    var i, ien, j, jen;
    var cellsNoOpts = this.iterator("table", function(settings, idx) {
      var a = [];
      for (i = 0, ien = rows[idx].length; i < ien; i++) {
        for (j = 0, jen = columns[idx].length; j < jen; j++) {
          a.push({
            row: rows[idx][i],
            column: columns[idx][j]
          });
        }
      }
      return a;
    }, 1);
    var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
    $2.extend(cells.selector, {
      cols: columnSelector,
      rows: rowSelector,
      opts
    });
    return cells;
  });
  _api_registerPlural("cells().nodes()", "cell().node()", function() {
    return this.iterator("cell", function(settings, row, column) {
      var data = settings.aoData[row];
      return data && data.anCells ? data.anCells[column] : void 0;
    }, 1);
  });
  _api_register("cells().data()", function() {
    return this.iterator("cell", function(settings, row, column) {
      return _fnGetCellData(settings, row, column);
    }, 1);
  });
  _api_registerPlural("cells().cache()", "cell().cache()", function(type) {
    type = type === "search" ? "_aFilterData" : "_aSortData";
    return this.iterator("cell", function(settings, row, column) {
      return settings.aoData[row][type][column];
    }, 1);
  });
  _api_registerPlural("cells().render()", "cell().render()", function(type) {
    return this.iterator("cell", function(settings, row, column) {
      return _fnGetCellData(settings, row, column, type);
    }, 1);
  });
  _api_registerPlural("cells().indexes()", "cell().index()", function() {
    return this.iterator("cell", function(settings, row, column) {
      return {
        row,
        column,
        columnVisible: _fnColumnIndexToVisible(settings, column)
      };
    }, 1);
  });
  _api_registerPlural("cells().invalidate()", "cell().invalidate()", function(src) {
    return this.iterator("cell", function(settings, row, column) {
      _fnInvalidate(settings, row, src, column);
    });
  });
  _api_register("cell()", function(rowSelector, columnSelector, opts) {
    return _selector_first(this.cells(rowSelector, columnSelector, opts));
  });
  _api_register("cell().data()", function(data) {
    var ctx = this.context;
    var cell = this[0];
    if (data === void 0) {
      return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : void 0;
    }
    _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);
    _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
    return this;
  });
  _api_register("order()", function(order, dir) {
    var ctx = this.context;
    var args = Array.prototype.slice.call(arguments);
    if (order === void 0) {
      return ctx.length !== 0 ? ctx[0].aaSorting : void 0;
    }
    if (typeof order === "number") {
      order = [[order, dir]];
    } else if (args.length > 1) {
      order = args;
    }
    return this.iterator("table", function(settings) {
      settings.aaSorting = Array.isArray(order) ? order.slice() : order;
    });
  });
  _api_register("order.listener()", function(node, column, callback) {
    return this.iterator("table", function(settings) {
      _fnSortAttachListener(settings, node, {}, column, callback);
    });
  });
  _api_register("order.fixed()", function(set) {
    if (!set) {
      var ctx = this.context;
      var fixed = ctx.length ? ctx[0].aaSortingFixed : void 0;
      return Array.isArray(fixed) ? { pre: fixed } : fixed;
    }
    return this.iterator("table", function(settings) {
      settings.aaSortingFixed = $2.extend(true, {}, set);
    });
  });
  _api_register([
    "columns().order()",
    "column().order()"
  ], function(dir) {
    var that = this;
    if (!dir) {
      return this.iterator("column", function(settings, idx) {
        var sort = _fnSortFlatten(settings);
        for (var i = 0, ien = sort.length; i < ien; i++) {
          if (sort[i].col === idx) {
            return sort[i].dir;
          }
        }
        return null;
      }, 1);
    } else {
      return this.iterator("table", function(settings, i) {
        settings.aaSorting = that[i].map(function(col) {
          return [col, dir];
        });
      });
    }
  });
  _api_registerPlural("columns().orderable()", "column().orderable()", function(directions) {
    return this.iterator("column", function(settings, idx) {
      var col = settings.aoColumns[idx];
      return directions ? col.asSorting : col.bSortable;
    }, 1);
  });
  _api_register("processing()", function(show) {
    return this.iterator("table", function(ctx) {
      _fnProcessingDisplay(ctx, show);
    });
  });
  _api_register("search()", function(input, regex, smart, caseInsen) {
    var ctx = this.context;
    if (input === void 0) {
      return ctx.length !== 0 ? ctx[0].oPreviousSearch.search : void 0;
    }
    return this.iterator("table", function(settings) {
      if (!settings.oFeatures.bFilter) {
        return;
      }
      if (typeof regex === "object") {
        _fnFilterComplete(settings, $2.extend(settings.oPreviousSearch, regex, {
          search: input
        }));
      } else {
        _fnFilterComplete(settings, $2.extend(settings.oPreviousSearch, {
          search: input,
          regex: regex === null ? false : regex,
          smart: smart === null ? true : smart,
          caseInsensitive: caseInsen === null ? true : caseInsen
        }));
      }
    });
  });
  _api_register("search.fixed()", function(name, search) {
    var ret = this.iterator(true, "table", function(settings) {
      var fixed = settings.searchFixed;
      if (!name) {
        return Object.keys(fixed);
      } else if (search === void 0) {
        return fixed[name];
      } else if (search === null) {
        delete fixed[name];
      } else {
        fixed[name] = search;
      }
      return this;
    });
    return name !== void 0 && search === void 0 ? ret[0] : ret;
  });
  _api_registerPlural(
    "columns().search()",
    "column().search()",
    function(input, regex, smart, caseInsen) {
      return this.iterator("column", function(settings, column) {
        var preSearch = settings.aoPreSearchCols;
        if (input === void 0) {
          return preSearch[column].search;
        }
        if (!settings.oFeatures.bFilter) {
          return;
        }
        if (typeof regex === "object") {
          $2.extend(preSearch[column], regex, {
            search: input
          });
        } else {
          $2.extend(preSearch[column], {
            search: input,
            regex: regex === null ? false : regex,
            smart: smart === null ? true : smart,
            caseInsensitive: caseInsen === null ? true : caseInsen
          });
        }
        _fnFilterComplete(settings, settings.oPreviousSearch);
      });
    }
  );
  _api_register(
    [
      "columns().search.fixed()",
      "column().search.fixed()"
    ],
    function(name, search) {
      var ret = this.iterator(true, "column", function(settings, colIdx) {
        var fixed = settings.aoColumns[colIdx].searchFixed;
        if (!name) {
          return Object.keys(fixed);
        } else if (search === void 0) {
          return fixed[name];
        } else if (search === null) {
          delete fixed[name];
        } else {
          fixed[name] = search;
        }
        return this;
      });
      return name !== void 0 && search === void 0 ? ret[0] : ret;
    }
  );
  _api_register("state()", function(set, ignoreTime) {
    if (!set) {
      return this.context.length ? this.context[0].oSavedState : null;
    }
    var setMutate = $2.extend(true, {}, set);
    return this.iterator("table", function(settings) {
      if (ignoreTime !== false) {
        setMutate.time = +/* @__PURE__ */ new Date() + 100;
      }
      _fnImplementState(settings, setMutate, function() {
      });
    });
  });
  _api_register("state.clear()", function() {
    return this.iterator("table", function(settings) {
      settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
    });
  });
  _api_register("state.loaded()", function() {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  _api_register("state.save()", function() {
    return this.iterator("table", function(settings) {
      _fnSaveState(settings);
    });
  });
  var __bootstrap;
  var __foundation;
  DataTable.use = function(arg1, arg2) {
    var module2 = typeof arg1 === "string" ? arg2 : arg1;
    var type = typeof arg2 === "string" ? arg2 : arg1;
    if (module2 === void 0 && typeof type === "string") {
      switch (type) {
        case "lib":
        case "jq":
          return $2;
        case "win":
          return window;
        case "datetime":
          return DataTable.DateTime;
        case "luxon":
          return __luxon;
        case "moment":
          return __moment;
        case "bootstrap":
          return __bootstrap || window.bootstrap;
        case "foundation":
          return __foundation || window.Foundation;
        default:
          return null;
      }
    }
    if (type === "lib" || type === "jq" || module2 && module2.fn && module2.fn.jquery) {
      $2 = module2;
    } else if (type === "win" || module2 && module2.document) {
      window = module2;
      document = module2.document;
    } else if (type === "datetime" || module2 && module2.type === "DateTime") {
      DataTable.DateTime = module2;
    } else if (type === "luxon" || module2 && module2.FixedOffsetZone) {
      __luxon = module2;
    } else if (type === "moment" || module2 && module2.isMoment) {
      __moment = module2;
    } else if (type === "bootstrap" || module2 && module2.Modal && module2.Modal.NAME === "modal") {
      __bootstrap = module2;
    } else if (type === "foundation" || module2 && module2.Reveal) {
      __foundation = module2;
    }
  };
  DataTable.factory = function(root, jq) {
    var is = false;
    if (root && root.document) {
      window = root;
      document = root.document;
    }
    if (jq && jq.fn && jq.fn.jquery) {
      $2 = jq;
      is = true;
    }
    return is;
  };
  DataTable.versionCheck = function(version, version2) {
    var aThis = version2 ? version2.split(".") : DataTable.version.split(".");
    var aThat = version.split(".");
    var iThis, iThat;
    for (var i = 0, iLen = aThat.length; i < iLen; i++) {
      iThis = parseInt(aThis[i], 10) || 0;
      iThat = parseInt(aThat[i], 10) || 0;
      if (iThis === iThat) {
        continue;
      }
      return iThis > iThat;
    }
    return true;
  };
  DataTable.isDataTable = function(table) {
    var t = $2(table).get(0);
    var is = false;
    if (table instanceof DataTable.Api) {
      return true;
    }
    $2.each(DataTable.settings, function(i, o) {
      var head = o.nScrollHead ? $2("table", o.nScrollHead)[0] : null;
      var foot = o.nScrollFoot ? $2("table", o.nScrollFoot)[0] : null;
      if (o.nTable === t || head === t || foot === t) {
        is = true;
      }
    });
    return is;
  };
  DataTable.tables = function(visible) {
    var api = false;
    if ($2.isPlainObject(visible)) {
      api = visible.api;
      visible = visible.visible;
    }
    var a = DataTable.settings.filter(function(o) {
      return !visible || visible && $2(o.nTable).is(":visible") ? true : false;
    }).map(function(o) {
      return o.nTable;
    });
    return api ? new _Api(a) : a;
  };
  DataTable.camelToHungarian = _fnCamelToHungarian;
  _api_register("$()", function(selector, opts) {
    var rows = this.rows(opts).nodes(), jqRows = $2(rows);
    return $2([].concat(
      jqRows.filter(selector).toArray(),
      jqRows.find(selector).toArray()
    ));
  });
  $2.each(["on", "one", "off"], function(i, key) {
    _api_register(key + "()", function() {
      var args = Array.prototype.slice.call(arguments);
      args[0] = args[0].split(/\s/).map(function(e) {
        return !e.match(/\.dt\b/) ? e + ".dt" : e;
      }).join(" ");
      var inst = $2(this.tables().nodes());
      inst[key].apply(inst, args);
      return this;
    });
  });
  _api_register("clear()", function() {
    return this.iterator("table", function(settings) {
      _fnClearTable(settings);
    });
  });
  _api_register("error()", function(msg) {
    return this.iterator("table", function(settings) {
      _fnLog(settings, 0, msg);
    });
  });
  _api_register("settings()", function() {
    return new _Api(this.context, this.context);
  });
  _api_register("init()", function() {
    var ctx = this.context;
    return ctx.length ? ctx[0].oInit : null;
  });
  _api_register("data()", function() {
    return this.iterator("table", function(settings) {
      return _pluck(settings.aoData, "_aData");
    }).flatten();
  });
  _api_register("trigger()", function(name, args, bubbles) {
    return this.iterator("table", function(settings) {
      return _fnCallbackFire(settings, null, name, args, bubbles);
    }).flatten();
  });
  _api_register("ready()", function(fn) {
    var ctx = this.context;
    if (!fn) {
      return ctx.length ? ctx[0]._bInitComplete || false : null;
    }
    return this.tables().every(function() {
      if (this.context[0]._bInitComplete) {
        fn.call(this);
      } else {
        this.on("init.dt.DT", function() {
          fn.call(this);
        });
      }
    });
  });
  _api_register("destroy()", function(remove) {
    remove = remove || false;
    return this.iterator("table", function(settings) {
      var classes = settings.oClasses;
      var table = settings.nTable;
      var tbody = settings.nTBody;
      var thead = settings.nTHead;
      var tfoot = settings.nTFoot;
      var jqTable = $2(table);
      var jqTbody = $2(tbody);
      var jqWrapper = $2(settings.nTableWrapper);
      var rows = settings.aoData.map(function(r) {
        return r ? r.nTr : null;
      });
      var orderClasses = classes.order;
      settings.bDestroying = true;
      _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings], true);
      if (!remove) {
        new _Api(settings).columns().visible(true);
      }
      if (settings.resizeObserver) {
        settings.resizeObserver.disconnect();
      }
      jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
      $2(window).off(".DT-" + settings.sInstance);
      if (table != thead.parentNode) {
        jqTable.children("thead").detach();
        jqTable.append(thead);
      }
      if (tfoot && table != tfoot.parentNode) {
        jqTable.children("tfoot").detach();
        jqTable.append(tfoot);
      }
      settings.colgroup.remove();
      settings.aaSorting = [];
      settings.aaSortingFixed = [];
      _fnSortingClasses(settings);
      $2("th, td", thead).removeClass(
        orderClasses.canAsc + " " + orderClasses.canDesc + " " + orderClasses.isAsc + " " + orderClasses.isDesc
      ).css("width", "");
      jqTbody.children().detach();
      jqTbody.append(rows);
      var orig = settings.nTableWrapper.parentNode;
      var insertBefore = settings.nTableWrapper.nextSibling;
      var removedMethod = remove ? "remove" : "detach";
      jqTable[removedMethod]();
      jqWrapper[removedMethod]();
      if (!remove && orig) {
        orig.insertBefore(table, insertBefore);
        jqTable.css("width", settings.sDestroyWidth).removeClass(classes.table);
      }
      var idx = DataTable.settings.indexOf(settings);
      if (idx !== -1) {
        DataTable.settings.splice(idx, 1);
      }
    });
  });
  $2.each(["column", "row", "cell"], function(i, type) {
    _api_register(type + "s().every()", function(fn) {
      var opts = this.selector.opts;
      var api = this;
      var inst;
      var counter = 0;
      return this.iterator("every", function(settings, selectedIdx, tableIdx) {
        inst = api[type](selectedIdx, opts);
        if (type === "cell") {
          fn.call(inst, inst[0][0].row, inst[0][0].column, tableIdx, counter);
        } else {
          fn.call(inst, selectedIdx, tableIdx, counter);
        }
        counter++;
      });
    });
  });
  _api_register("i18n()", function(token, def, plural) {
    var ctx = this.context[0];
    var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
    if (resolved === void 0) {
      resolved = def;
    }
    if ($2.isPlainObject(resolved)) {
      resolved = plural !== void 0 && resolved[plural] !== void 0 ? resolved[plural] : resolved._;
    }
    return typeof resolved === "string" ? resolved.replace("%d", plural) : resolved;
  });
  DataTable.version = "2.2.0";
  DataTable.settings = [];
  DataTable.models = {};
  DataTable.models.oSearch = {
    /**
     * Flag to indicate if the filtering should be case insensitive or not
     */
    "caseInsensitive": true,
    /**
     * Applied search term
     */
    "search": "",
    /**
     * Flag to indicate if the search term should be interpreted as a
     * regular expression (true) or not (false) and therefore and special
     * regex characters escaped.
     */
    "regex": false,
    /**
     * Flag to indicate if DataTables is to use its smart filtering or not.
     */
    "smart": true,
    /**
     * Flag to indicate if DataTables should only trigger a search when
     * the return key is pressed.
     */
    "return": false
  };
  DataTable.models.oRow = {
    /**
     * TR element for the row
     */
    "nTr": null,
    /**
     * Array of TD elements for each row. This is null until the row has been
     * created.
     */
    "anCells": null,
    /**
     * Data object from the original data source for the row. This is either
     * an array if using the traditional form of DataTables, or an object if
     * using mData options. The exact type will depend on the passed in
     * data from the data source, or will be an array if using DOM a data
     * source.
     */
    "_aData": [],
    /**
     * Sorting data cache - this array is ostensibly the same length as the
     * number of columns (although each index is generated only as it is
     * needed), and holds the data that is used for sorting each column in the
     * row. We do this cache generation at the start of the sort in order that
     * the formatting of the sort data need be done only once for each cell
     * per sort. This array should not be read from or written to by anything
     * other than the master sorting methods.
     */
    "_aSortData": null,
    /**
     * Per cell filtering data cache. As per the sort data cache, used to
     * increase the performance of the filtering in DataTables
     */
    "_aFilterData": null,
    /**
     * Filtering data cache. This is the same as the cell filtering cache, but
     * in this case a string rather than an array. This is easily computed with
     * a join on `_aFilterData`, but is provided as a cache so the join isn't
     * needed on every search (memory traded for performance)
     */
    "_sFilterRow": null,
    /**
     * Denote if the original data source was from the DOM, or the data source
     * object. This is used for invalidating data, so DataTables can
     * automatically read data from the original source, unless uninstructed
     * otherwise.
     */
    "src": null,
    /**
     * Index in the aoData array. This saves an indexOf lookup when we have the
     * object, but want to know the index
     */
    "idx": -1,
    /**
     * Cached display value
     */
    displayData: null
  };
  DataTable.models.oColumn = {
    /**
     * Column index.
     */
    "idx": null,
    /**
     * A list of the columns that sorting should occur on when this column
     * is sorted. That this property is an array allows multi-column sorting
     * to be defined for a column (for example first name / last name columns
     * would benefit from this). The values are integers pointing to the
     * columns to be sorted on (typically it will be a single integer pointing
     * at itself, but that doesn't need to be the case).
     */
    "aDataSort": null,
    /**
     * Define the sorting directions that are applied to the column, in sequence
     * as the column is repeatedly sorted upon - i.e. the first value is used
     * as the sorting direction when the column if first sorted (clicked on).
     * Sort it again (click again) and it will move on to the next index.
     * Repeat until loop.
     */
    "asSorting": null,
    /**
     * Flag to indicate if the column is searchable, and thus should be included
     * in the filtering or not.
     */
    "bSearchable": null,
    /**
     * Flag to indicate if the column is sortable or not.
     */
    "bSortable": null,
    /**
     * Flag to indicate if the column is currently visible in the table or not
     */
    "bVisible": null,
    /**
     * Store for manual type assignment using the `column.type` option. This
     * is held in store so we can manipulate the column's `sType` property.
     */
    "_sManualType": null,
    /**
     * Flag to indicate if HTML5 data attributes should be used as the data
     * source for filtering or sorting. True is either are.
     */
    "_bAttrSrc": false,
    /**
     * Developer definable function that is called whenever a cell is created (Ajax source,
     * etc) or processed for input (DOM source). This can be used as a compliment to mRender
     * allowing you to modify the DOM element (add background colour for example) when the
     * element is available.
     */
    "fnCreatedCell": null,
    /**
     * Function to get data from a cell in a column. You should <b>never</b>
     * access data directly through _aData internally in DataTables - always use
     * the method attached to this property. It allows mData to function as
     * required. This function is automatically assigned by the column
     * initialisation method
     */
    "fnGetData": null,
    /**
     * Function to set data for a cell in the column. You should <b>never</b>
     * set the data directly to _aData internally in DataTables - always use
     * this method. It allows mData to function as required. This function
     * is automatically assigned by the column initialisation method
     */
    "fnSetData": null,
    /**
     * Property to read the value for the cells in the column from the data
     * source array / object. If null, then the default content is used, if a
     * function is given then the return from the function is used.
     */
    "mData": null,
    /**
     * Partner property to mData which is used (only when defined) to get
     * the data - i.e. it is basically the same as mData, but without the
     * 'set' option, and also the data fed to it is the result from mData.
     * This is the rendering method to match the data method of mData.
     */
    "mRender": null,
    /**
     * The class to apply to all TD elements in the table's TBODY for the column
     */
    "sClass": null,
    /**
     * When DataTables calculates the column widths to assign to each column,
     * it finds the longest string in each column and then constructs a
     * temporary table and reads the widths from that. The problem with this
     * is that "mmm" is much wider then "iiii", but the latter is a longer
     * string - thus the calculation can go wrong (doing it properly and putting
     * it into an DOM object and measuring that is horribly(!) slow). Thus as
     * a "work around" we provide this option. It will append its value to the
     * text that is found to be the longest string for the column - i.e. padding.
     */
    "sContentPadding": null,
    /**
     * Allows a default value to be given for a column's data, and will be used
     * whenever a null data source is encountered (this can be because mData
     * is set to null, or because the data source itself is null).
     */
    "sDefaultContent": null,
    /**
     * Name for the column, allowing reference to the column by name as well as
     * by index (needs a lookup to work by name).
     */
    "sName": null,
    /**
     * Custom sorting data type - defines which of the available plug-ins in
     * afnSortData the custom sorting will use - if any is defined.
     */
    "sSortDataType": "std",
    /**
     * Class to be applied to the header element when sorting on this column
     */
    "sSortingClass": null,
    /**
     * Title of the column - what is seen in the TH element (nTh).
     */
    "sTitle": null,
    /**
     * Column sorting and filtering type
     */
    "sType": null,
    /**
     * Width of the column
     */
    "sWidth": null,
    /**
     * Width of the column when it was first "encountered"
     */
    "sWidthOrig": null,
    /** Cached string which is the longest in the column */
    maxLenString: null,
    /**
     * Store for named searches
     */
    searchFixed: null
  };
  DataTable.defaults = {
    /**
     * An array of data to use for the table, passed in at initialisation which
     * will be used in preference to any data which is already in the DOM. This is
     * particularly useful for constructing tables purely in Javascript, for
     * example with a custom Ajax call.
     */
    "aaData": null,
    /**
     * If ordering is enabled, then DataTables will perform a first pass sort on
     * initialisation. You can define which column(s) the sort is performed
     * upon, and the sorting direction, with this variable. The `sorting` array
     * should contain an array for each column to be sorted initially containing
     * the column's index and a direction string ('asc' or 'desc').
     */
    "aaSorting": [[0, "asc"]],
    /**
     * This parameter is basically identical to the `sorting` parameter, but
     * cannot be overridden by user interaction with the table. What this means
     * is that you could have a column (visible or hidden) which the sorting
     * will always be forced on first - any sorting after that (from the user)
     * will then be performed as required. This can be useful for grouping rows
     * together.
     */
    "aaSortingFixed": [],
    /**
     * DataTables can be instructed to load data to display in the table from a
     * Ajax source. This option defines how that Ajax call is made and where to.
     *
     * The `ajax` property has three different modes of operation, depending on
     * how it is defined. These are:
     *
     * * `string` - Set the URL from where the data should be loaded from.
     * * `object` - Define properties for `jQuery.ajax`.
     * * `function` - Custom data get function
     *
     * `string`
     * --------
     *
     * As a string, the `ajax` property simply defines the URL from which
     * DataTables will load data.
     *
     * `object`
     * --------
     *
     * As an object, the parameters in the object are passed to
     * [jQuery.ajax](https://api.jquery.com/jQuery.ajax/) allowing fine control
     * of the Ajax request. DataTables has a number of default parameters which
     * you can override using this option. Please refer to the jQuery
     * documentation for a full description of the options available, although
     * the following parameters provide additional options in DataTables or
     * require special consideration:
     *
     * * `data` - As with jQuery, `data` can be provided as an object, but it
     *   can also be used as a function to manipulate the data DataTables sends
     *   to the server. The function takes a single parameter, an object of
     *   parameters with the values that DataTables has readied for sending. An
     *   object may be returned which will be merged into the DataTables
     *   defaults, or you can add the items to the object that was passed in and
     *   not return anything from the function. This supersedes `fnServerParams`
     *   from DataTables 1.9-.
     *
     * * `dataSrc` - By default DataTables will look for the property `data` (or
     *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
     *   from an Ajax source or for server-side processing - this parameter
     *   allows that property to be changed. You can use Javascript dotted
     *   object notation to get a data source for multiple levels of nesting, or
     *   it my be used as a function. As a function it takes a single parameter,
     *   the JSON returned from the server, which can be manipulated as
     *   required, with the returned value being that used by DataTables as the
     *   data source for the table.
     *
     * * `success` - Should not be overridden it is used internally in
     *   DataTables. To manipulate / transform the data returned by the server
     *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
     *
     * `function`
     * ----------
     *
     * As a function, making the Ajax call is left up to yourself allowing
     * complete control of the Ajax request. Indeed, if desired, a method other
     * than Ajax could be used to obtain the required data, such as Web storage
     * or an AIR database.
     *
     * The function is given four parameters and no return is required. The
     * parameters are:
     *
     * 1. _object_ - Data to send to the server
     * 2. _function_ - Callback function that must be executed when the required
     *    data has been obtained. That data should be passed into the callback
     *    as the only parameter
     * 3. _object_ - DataTables settings object for the table
     */
    "ajax": null,
    /**
     * This parameter allows you to readily specify the entries in the length drop
     * down menu that DataTables shows when pagination is enabled. It can be
     * either a 1D array of options which will be used for both the displayed
     * option and the value, or a 2D array which will use the array in the first
     * position as the value, and the array in the second position as the
     * displayed options (useful for language strings such as 'All').
     *
     * Note that the `pageLength` property will be automatically set to the
     * first value given in this array, unless `pageLength` is also provided.
     */
    "aLengthMenu": [10, 25, 50, 100],
    /**
     * The `columns` option in the initialisation parameter allows you to define
     * details about the way individual columns behave. For a full list of
     * column options that can be set, please see
     * {@link DataTable.defaults.column}. Note that if you use `columns` to
     * define your columns, you must have an entry in the array for every single
     * column that you have in your table (these can be null if you don't which
     * to specify any options).
     */
    "aoColumns": null,
    /**
     * Very similar to `columns`, `columnDefs` allows you to target a specific
     * column, multiple columns, or all columns, using the `targets` property of
     * each object in the array. This allows great flexibility when creating
     * tables, as the `columnDefs` arrays can be of any length, targeting the
     * columns you specifically want. `columnDefs` may use any of the column
     * options available: {@link DataTable.defaults.column}, but it _must_
     * have `targets` defined in each object in the array. Values in the `targets`
     * array may be:
     *   <ul>
     *     <li>a string - class name will be matched on the TH for the column</li>
     *     <li>0 or a positive integer - column index counting from the left</li>
     *     <li>a negative integer - column index counting from the right</li>
     *     <li>the string "_all" - all columns (i.e. assign a default)</li>
     *   </ul>
     */
    "aoColumnDefs": null,
    /**
     * Basically the same as `search`, this parameter defines the individual column
     * filtering state at initialisation time. The array must be of the same size
     * as the number of columns, and each element be an object with the parameters
     * `search` and `escapeRegex` (the latter is optional). 'null' is also
     * accepted and the default will be used.
     */
    "aoSearchCols": [],
    /**
     * Enable or disable automatic column width calculation. This can be disabled
     * as an optimisation (it takes some time to calculate the widths) if the
     * tables widths are passed in using `columns`.
     */
    "bAutoWidth": true,
    /**
     * Deferred rendering can provide DataTables with a huge speed boost when you
     * are using an Ajax or JS data source for the table. This option, when set to
     * true, will cause DataTables to defer the creation of the table elements for
     * each row until they are needed for a draw - saving a significant amount of
     * time.
     */
    "bDeferRender": true,
    /**
     * Replace a DataTable which matches the given selector and replace it with
     * one which has the properties of the new initialisation object passed. If no
     * table matches the selector, then the new DataTable will be constructed as
     * per normal.
     */
    "bDestroy": false,
    /**
     * Enable or disable filtering of data. Filtering in DataTables is "smart" in
     * that it allows the end user to input multiple words (space separated) and
     * will match a row containing those words, even if not in the order that was
     * specified (this allow matching across multiple columns). Note that if you
     * wish to use filtering in DataTables this must remain 'true' - to remove the
     * default filtering input box and retain filtering abilities, please use
     * {@link DataTable.defaults.dom}.
     */
    "bFilter": true,
    /**
     * Used only for compatiblity with DT1
     * @deprecated
     */
    "bInfo": true,
    /**
     * Used only for compatiblity with DT1
     * @deprecated
     */
    "bLengthChange": true,
    /**
     * Enable or disable pagination.
     */
    "bPaginate": true,
    /**
     * Enable or disable the display of a 'processing' indicator when the table is
     * being processed (e.g. a sort). This is particularly useful for tables with
     * large amounts of data where it can take a noticeable amount of time to sort
     * the entries.
     */
    "bProcessing": false,
    /**
     * Retrieve the DataTables object for the given selector. Note that if the
     * table has already been initialised, this parameter will cause DataTables
     * to simply return the object that has already been set up - it will not take
     * account of any changes you might have made to the initialisation object
     * passed to DataTables (setting this parameter to true is an acknowledgement
     * that you understand this). `destroy` can be used to reinitialise a table if
     * you need.
     */
    "bRetrieve": false,
    /**
     * When vertical (y) scrolling is enabled, DataTables will force the height of
     * the table's viewport to the given height at all times (useful for layout).
     * However, this can look odd when filtering data down to a small data set,
     * and the footer is left "floating" further down. This parameter (when
     * enabled) will cause DataTables to collapse the table's viewport down when
     * the result set will fit within the given Y height.
     */
    "bScrollCollapse": false,
    /**
     * Configure DataTables to use server-side processing. Note that the
     * `ajax` parameter must also be given in order to give DataTables a
     * source to obtain the required data for each draw.
     */
    "bServerSide": false,
    /**
     * Enable or disable sorting of columns. Sorting of individual columns can be
     * disabled by the `sortable` option for each column.
     */
    "bSort": true,
    /**
     * Enable or display DataTables' ability to sort multiple columns at the
     * same time (activated by shift-click by the user).
     */
    "bSortMulti": true,
    /**
     * Allows control over whether DataTables should use the top (true) unique
     * cell that is found for a single column, or the bottom (false - default).
     * This is useful when using complex headers.
     */
    "bSortCellsTop": null,
    /**
     * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
     * `sorting\_3` to the columns which are currently being sorted on. This is
     * presented as a feature switch as it can increase processing time (while
     * classes are removed and added) so for large data sets you might want to
     * turn this off.
     */
    "bSortClasses": true,
    /**
     * Enable or disable state saving. When enabled HTML5 `localStorage` will be
     * used to save table display information such as pagination information,
     * display length, filtering and sorting. As such when the end user reloads
     * the page the display display will match what thy had previously set up.
     */
    "bStateSave": false,
    /**
     * This function is called when a TR element is created (and all TD child
     * elements have been inserted), or registered if using a DOM source, allowing
     * manipulation of the TR element (adding classes etc).
     */
    "fnCreatedRow": null,
    /**
     * This function is called on every 'draw' event, and allows you to
     * dynamically modify any aspect you want about the created DOM.
     */
    "fnDrawCallback": null,
    /**
     * Identical to fnHeaderCallback() but for the table footer this function
     * allows you to modify the table footer on every 'draw' event.
     */
    "fnFooterCallback": null,
    /**
     * When rendering large numbers in the information element for the table
     * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
     * to have a comma separator for the 'thousands' units (e.g. 1 million is
     * rendered as "1,000,000") to help readability for the end user. This
     * function will override the default method DataTables uses.
     */
    "fnFormatNumber": function(toFormat) {
      return toFormat.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g,
        this.oLanguage.sThousands
      );
    },
    /**
     * This function is called on every 'draw' event, and allows you to
     * dynamically modify the header row. This can be used to calculate and
     * display useful information about the table.
     */
    "fnHeaderCallback": null,
    /**
     * The information element can be used to convey information about the current
     * state of the table. Although the internationalisation options presented by
     * DataTables are quite capable of dealing with most customisations, there may
     * be times where you wish to customise the string further. This callback
     * allows you to do exactly that.
     */
    "fnInfoCallback": null,
    /**
     * Called when the table has been initialised. Normally DataTables will
     * initialise sequentially and there will be no need for this function,
     * however, this does not hold true when using external language information
     * since that is obtained using an async XHR call.
     */
    "fnInitComplete": null,
    /**
     * Called at the very start of each table draw and can be used to cancel the
     * draw by returning false, any other return (including undefined) results in
     * the full draw occurring).
     */
    "fnPreDrawCallback": null,
    /**
     * This function allows you to 'post process' each row after it have been
     * generated for each table draw, but before it is rendered on screen. This
     * function might be used for setting the row class name etc.
     */
    "fnRowCallback": null,
    /**
     * Load the table state. With this function you can define from where, and how, the
     * state of a table is loaded. By default DataTables will load from `localStorage`
     * but you might wish to use a server-side database or cookies.
     */
    "fnStateLoadCallback": function(settings) {
      try {
        return JSON.parse(
          (settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
            "DataTables_" + settings.sInstance + "_" + location.pathname
          )
        );
      } catch (e) {
        return {};
      }
    },
    /**
     * Callback which allows modification of the saved state prior to loading that state.
     * This callback is called when the table is loading state from the stored data, but
     * prior to the settings object being modified by the saved state. Note that for
     * plug-in authors, you should use the `stateLoadParams` event to load parameters for
     * a plug-in.
     */
    "fnStateLoadParams": null,
    /**
     * Callback that is called when the state has been loaded from the state saving method
     * and the DataTables settings object has been modified as a result of the loaded state.
     */
    "fnStateLoaded": null,
    /**
     * Save the table state. This function allows you to define where and how the state
     * information for the table is stored By default DataTables will use `localStorage`
     * but you might wish to use a server-side database or cookies.
     */
    "fnStateSaveCallback": function(settings, data) {
      try {
        (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
          "DataTables_" + settings.sInstance + "_" + location.pathname,
          JSON.stringify(data)
        );
      } catch (e) {
      }
    },
    /**
     * Callback which allows modification of the state to be saved. Called when the table
     * has changed state a new state save is required. This method allows modification of
     * the state saving object prior to actually doing the save, including addition or
     * other state properties or modification. Note that for plug-in authors, you should
     * use the `stateSaveParams` event to save parameters for a plug-in.
     */
    "fnStateSaveParams": null,
    /**
     * Duration for which the saved state information is considered valid. After this period
     * has elapsed the state will be returned to the default.
     * Value is given in seconds.
     */
    "iStateDuration": 7200,
    /**
     * Number of rows to display on a single page when using pagination. If
     * feature enabled (`lengthChange`) then the end user will be able to override
     * this to a custom setting using a pop-up menu.
     */
    "iDisplayLength": 10,
    /**
     * Define the starting point for data display when using DataTables with
     * pagination. Note that this parameter is the number of records, rather than
     * the page number, so if you have 10 records per page and want to start on
     * the third page, it should be "20".
     */
    "iDisplayStart": 0,
    /**
     * By default DataTables allows keyboard navigation of the table (sorting, paging,
     * and filtering) by adding a `tabindex` attribute to the required elements. This
     * allows you to tab through the controls and press the enter key to activate them.
     * The tabindex is default 0, meaning that the tab follows the flow of the document.
     * You can overrule this using this parameter if you wish. Use a value of -1 to
     * disable built-in keyboard navigation.
     */
    "iTabIndex": 0,
    /**
     * Classes that DataTables assigns to the various components and features
     * that it adds to the HTML table. This allows classes to be configured
     * during initialisation in addition to through the static
     * {@link DataTable.ext.oStdClasses} object).
     */
    "oClasses": {},
    /**
     * All strings that DataTables uses in the user interface that it creates
     * are defined in this object, allowing you to modified them individually or
     * completely replace them all as required.
     */
    "oLanguage": {
      /**
       * Strings that are used for WAI-ARIA labels and controls only (these are not
       * actually visible on the page, but will be read by screenreaders, and thus
       * must be internationalised as well).
       */
      "oAria": {
        /**
         * ARIA label that is added to the table headers when the column may be sorted
         */
        "orderable": ": Activate to sort",
        /**
         * ARIA label that is added to the table headers when the column is currently being sorted
         */
        "orderableReverse": ": Activate to invert sorting",
        /**
         * ARIA label that is added to the table headers when the column is currently being 
         * sorted and next step is to remove sorting
         */
        "orderableRemove": ": Activate to remove sorting",
        paginate: {
          first: "First",
          last: "Last",
          next: "Next",
          previous: "Previous",
          number: ""
        }
      },
      /**
       * Pagination string used by DataTables for the built-in pagination
       * control types.
       */
      "oPaginate": {
        /**
         * Label and character for first page button («)
         */
        "sFirst": "\xAB",
        /**
         * Last page button (»)
         */
        "sLast": "\xBB",
        /**
         * Next page button (›)
         */
        "sNext": "\u203A",
        /**
         * Previous page button (‹)
         */
        "sPrevious": "\u2039"
      },
      /**
       * Plural object for the data type the table is showing
       */
      entries: {
        _: "entries",
        1: "entry"
      },
      /**
       * This string is shown in preference to `zeroRecords` when the table is
       * empty of data (regardless of filtering). Note that this is an optional
       * parameter - if it is not given, the value of `zeroRecords` will be used
       * instead (either the default or given value).
       */
      "sEmptyTable": "No data available in table",
      /**
       * This string gives information to the end user about the information
       * that is current on display on the page. The following tokens can be
       * used in the string and will be dynamically replaced as the table
       * display updates. This tokens can be placed anywhere in the string, or
       * removed as needed by the language requires:
       *
       * * `\_START\_` - Display index of the first record on the current page
       * * `\_END\_` - Display index of the last record on the current page
       * * `\_TOTAL\_` - Number of records in the table after filtering
       * * `\_MAX\_` - Number of records in the table without filtering
       * * `\_PAGE\_` - Current page number
       * * `\_PAGES\_` - Total number of pages of data in the table
       */
      "sInfo": "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
      /**
       * Display information string for when the table is empty. Typically the
       * format of this string should match `info`.
       */
      "sInfoEmpty": "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
      /**
       * When a user filters the information in a table, this string is appended
       * to the information (`info`) to give an idea of how strong the filtering
       * is. The variable _MAX_ is dynamically updated.
       */
      "sInfoFiltered": "(filtered from _MAX_ total _ENTRIES-MAX_)",
      /**
       * If can be useful to append extra information to the info string at times,
       * and this variable does exactly that. This information will be appended to
       * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
       * being used) at all times.
       */
      "sInfoPostFix": "",
      /**
       * This decimal place operator is a little different from the other
       * language options since DataTables doesn't output floating point
       * numbers, so it won't ever use this for display of a number. Rather,
       * what this parameter does is modify the sort methods of the table so
       * that numbers which are in a format which has a character other than
       * a period (`.`) as a decimal place will be sorted numerically.
       *
       * Note that numbers with different decimal places cannot be shown in
       * the same table and still be sortable, the table must be consistent.
       * However, multiple different tables on the page can use different
       * decimal place characters.
       */
      "sDecimal": "",
      /**
       * DataTables has a build in number formatter (`formatNumber`) which is
       * used to format large numbers that are used in the table information.
       * By default a comma is used, but this can be trivially changed to any
       * character you wish with this parameter.
       */
      "sThousands": ",",
      /**
       * Detail the action that will be taken when the drop down menu for the
       * pagination length option is changed. The '_MENU_' variable is replaced
       * with a default select list of 10, 25, 50 and 100, and can be replaced
       * with a custom select box if required.
       */
      "sLengthMenu": "_MENU_ _ENTRIES_ per page",
      /**
       * When using Ajax sourced data and during the first draw when DataTables is
       * gathering the data, this message is shown in an empty row in the table to
       * indicate to the end user the the data is being loaded. Note that this
       * parameter is not used when loading data by server-side processing, just
       * Ajax sourced data with client-side processing.
       */
      "sLoadingRecords": "Loading...",
      /**
       * Text which is displayed when the table is processing a user action
       * (usually a sort command or similar).
       */
      "sProcessing": "",
      /**
       * Details the actions that will be taken when the user types into the
       * filtering input text box. The variable "_INPUT_", if used in the string,
       * is replaced with the HTML text box for the filtering input allowing
       * control over where it appears in the string. If "_INPUT_" is not given
       * then the input box is appended to the string automatically.
       */
      "sSearch": "Search:",
      /**
       * Assign a `placeholder` attribute to the search `input` element
       *  @type string
       *  @default 
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.searchPlaceholder
       */
      "sSearchPlaceholder": "",
      /**
       * All of the language information can be stored in a file on the
       * server-side, which DataTables will look up if this parameter is passed.
       * It must store the URL of the language file, which is in a JSON format,
       * and the object has the same properties as the oLanguage object in the
       * initialiser object (i.e. the above parameters). Please refer to one of
       * the example language files to see how this works in action.
       */
      "sUrl": "",
      /**
       * Text shown inside the table records when the is no information to be
       * displayed after filtering. `emptyTable` is shown when there is simply no
       * information in the table at all (regardless of filtering).
       */
      "sZeroRecords": "No matching records found"
    },
    /** The initial data order is reversed when `desc` ordering */
    orderDescReverse: true,
    /**
     * This parameter allows you to have define the global filtering state at
     * initialisation time. As an object the `search` parameter must be
     * defined, but all other parameters are optional. When `regex` is true,
     * the search string will be treated as a regular expression, when false
     * (default) it will be treated as a straight string. When `smart`
     * DataTables will use it's smart filtering methods (to word match at
     * any point in the data), when false this will not be done.
     */
    "oSearch": $2.extend({}, DataTable.models.oSearch),
    /**
     * Table and control layout. This replaces the legacy `dom` option.
     */
    layout: {
      topStart: "pageLength",
      topEnd: "search",
      bottomStart: "info",
      bottomEnd: "paging"
    },
    /**
     * Legacy DOM layout option
     */
    "sDom": null,
    /**
     * Search delay option. This will throttle full table searches that use the
     * DataTables provided search input element (it does not effect calls to
     * `dt-api search()`, providing a delay before the search is made.
     */
    "searchDelay": null,
    /**
     * DataTables features six different built-in options for the buttons to
     * display for pagination control:
     *
     * * `numbers` - Page number buttons only
     * * `simple` - 'Previous' and 'Next' buttons only
     * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
     * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
     * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
     * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
     */
    "sPaginationType": "",
    /**
     * Enable horizontal scrolling. When a table is too wide to fit into a
     * certain layout, or you have a large number of columns in the table, you
     * can enable x-scrolling to show the table in a viewport, which can be
     * scrolled. This property can be `true` which will allow the table to
     * scroll horizontally when needed, or any CSS unit, or a number (in which
     * case it will be treated as a pixel measurement). Setting as simply `true`
     * is recommended.
     */
    "sScrollX": "",
    /**
     * This property can be used to force a DataTable to use more width than it
     * might otherwise do when x-scrolling is enabled. For example if you have a
     * table which requires to be well spaced, this parameter is useful for
     * "over-sizing" the table, and thus forcing scrolling. This property can by
     * any CSS unit, or a number (in which case it will be treated as a pixel
     * measurement).
     */
    "sScrollXInner": "",
    /**
     * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
     * to the given height, and enable scrolling for any data which overflows the
     * current viewport. This can be used as an alternative to paging to display
     * a lot of data in a small area (although paging and scrolling can both be
     * enabled at the same time). This property can be any CSS unit, or a number
     * (in which case it will be treated as a pixel measurement).
     */
    "sScrollY": "",
    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     * Set the HTTP method that is used to make the Ajax call for server-side
     * processing or Ajax sourced data.
     */
    "sServerMethod": "GET",
    /**
     * DataTables makes use of renderers when displaying HTML elements for
     * a table. These renderers can be added or modified by plug-ins to
     * generate suitable mark-up for a site. For example the Bootstrap
     * integration plug-in for DataTables uses a paging button renderer to
     * display pagination buttons in the mark-up required by Bootstrap.
     *
     * For further information about the renderers available see
     * DataTable.ext.renderer
     */
    "renderer": null,
    /**
     * Set the data property name that DataTables should use to get a row's id
     * to set as the `id` property in the node.
     */
    "rowId": "DT_RowId",
    /**
     * Caption value
     */
    "caption": null,
    /**
     * For server-side processing - use the data from the DOM for the first draw
     */
    iDeferLoading: null
  };
  _fnHungarianMap(DataTable.defaults);
  DataTable.defaults.column = {
    /**
     * Define which column(s) an order will occur on for this column. This
     * allows a column's ordering to take multiple columns into account when
     * doing a sort or use the data from a different column. For example first
     * name / last name columns make sense to do a multi-column sort over the
     * two columns.
     */
    "aDataSort": null,
    "iDataSort": -1,
    ariaTitle: "",
    /**
     * You can control the default ordering direction, and even alter the
     * behaviour of the sort handler (i.e. only allow ascending ordering etc)
     * using this parameter.
     */
    "asSorting": ["asc", "desc", ""],
    /**
     * Enable or disable filtering on the data in this column.
     */
    "bSearchable": true,
    /**
     * Enable or disable ordering on this column.
     */
    "bSortable": true,
    /**
     * Enable or disable the display of this column.
     */
    "bVisible": true,
    /**
     * Developer definable function that is called whenever a cell is created (Ajax source,
     * etc) or processed for input (DOM source). This can be used as a compliment to mRender
     * allowing you to modify the DOM element (add background colour for example) when the
     * element is available.
     */
    "fnCreatedCell": null,
    /**
     * This property can be used to read data from any data source property,
     * including deeply nested objects / properties. `data` can be given in a
     * number of different ways which effect its behaviour:
     *
     * * `integer` - treated as an array index for the data source. This is the
     *   default that DataTables uses (incrementally increased for each column).
     * * `string` - read an object property from the data source. There are
     *   three 'special' options that can be used in the string to alter how
     *   DataTables reads the data from the source object:
     *    * `.` - Dotted Javascript notation. Just as you use a `.` in
     *      Javascript to read from nested objects, so to can the options
     *      specified in `data`. For example: `browser.version` or
     *      `browser.name`. If your object parameter name contains a period, use
     *      `\\` to escape it - i.e. `first\\.name`.
     *    * `[]` - Array notation. DataTables can automatically combine data
     *      from and array source, joining the data with the characters provided
     *      between the two brackets. For example: `name[, ]` would provide a
     *      comma-space separated list from the source array. If no characters
     *      are provided between the brackets, the original array source is
     *      returned.
     *    * `()` - Function notation. Adding `()` to the end of a parameter will
     *      execute a function of the name given. For example: `browser()` for a
     *      simple function on the data source, `browser.version()` for a
     *      function in a nested property or even `browser().version` to get an
     *      object property if the function called returns an object. Note that
     *      function notation is recommended for use in `render` rather than
     *      `data` as it is much simpler to use as a renderer.
     * * `null` - use the original data source for the row rather than plucking
     *   data directly from it. This action has effects on two other
     *   initialisation options:
     *    * `defaultContent` - When null is given as the `data` option and
     *      `defaultContent` is specified for the column, the value defined by
     *      `defaultContent` will be used for the cell.
     *    * `render` - When null is used for the `data` option and the `render`
     *      option is specified for the column, the whole data source for the
     *      row is used for the renderer.
     * * `function` - the function given will be executed whenever DataTables
     *   needs to set or get the data for a cell in the column. The function
     *   takes three parameters:
     *    * Parameters:
     *      * `{array|object}` The data source for the row
     *      * `{string}` The type call data requested - this will be 'set' when
     *        setting data or 'filter', 'display', 'type', 'sort' or undefined
     *        when gathering data. Note that when `undefined` is given for the
     *        type DataTables expects to get the raw data for the object back<
     *      * `{*}` Data to set when the second parameter is 'set'.
     *    * Return:
     *      * The return value from the function is not required when 'set' is
     *        the type of call, but otherwise the return is what will be used
     *        for the data requested.
     *
     * Note that `data` is a getter and setter option. If you just require
     * formatting of data for output, you will likely want to use `render` which
     * is simply a getter and thus simpler to use.
     *
     * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
     * name change reflects the flexibility of this property and is consistent
     * with the naming of mRender. If 'mDataProp' is given, then it will still
     * be used by DataTables, as it automatically maps the old name to the new
     * if required.
     */
    "mData": null,
    /**
     * This property is the rendering partner to `data` and it is suggested that
     * when you want to manipulate data for display (including filtering,
     * sorting etc) without altering the underlying data for the table, use this
     * property. `render` can be considered to be the the read only companion to
     * `data` which is read / write (then as such more complex). Like `data`
     * this option can be given in a number of different ways to effect its
     * behaviour:
     *
     * * `integer` - treated as an array index for the data source. This is the
     *   default that DataTables uses (incrementally increased for each column).
     * * `string` - read an object property from the data source. There are
     *   three 'special' options that can be used in the string to alter how
     *   DataTables reads the data from the source object:
     *    * `.` - Dotted Javascript notation. Just as you use a `.` in
     *      Javascript to read from nested objects, so to can the options
     *      specified in `data`. For example: `browser.version` or
     *      `browser.name`. If your object parameter name contains a period, use
     *      `\\` to escape it - i.e. `first\\.name`.
     *    * `[]` - Array notation. DataTables can automatically combine data
     *      from and array source, joining the data with the characters provided
     *      between the two brackets. For example: `name[, ]` would provide a
     *      comma-space separated list from the source array. If no characters
     *      are provided between the brackets, the original array source is
     *      returned.
     *    * `()` - Function notation. Adding `()` to the end of a parameter will
     *      execute a function of the name given. For example: `browser()` for a
     *      simple function on the data source, `browser.version()` for a
     *      function in a nested property or even `browser().version` to get an
     *      object property if the function called returns an object.
     * * `object` - use different data for the different data types requested by
     *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
     *   of the object is the data type the property refers to and the value can
     *   defined using an integer, string or function using the same rules as
     *   `render` normally does. Note that an `_` option _must_ be specified.
     *   This is the default value to use if you haven't specified a value for
     *   the data type requested by DataTables.
     * * `function` - the function given will be executed whenever DataTables
     *   needs to set or get the data for a cell in the column. The function
     *   takes three parameters:
     *    * Parameters:
     *      * {array|object} The data source for the row (based on `data`)
     *      * {string} The type call data requested - this will be 'filter',
     *        'display', 'type' or 'sort'.
     *      * {array|object} The full data source for the row (not based on
     *        `data`)
     *    * Return:
     *      * The return value from the function is what will be used for the
     *        data requested.
     */
    "mRender": null,
    /**
     * Change the cell type created for the column - either TD cells or TH cells. This
     * can be useful as TH cells have semantic meaning in the table body, allowing them
     * to act as a header for a row (you may wish to add scope='row' to the TH elements).
     */
    "sCellType": "td",
    /**
     * Class to give to each cell in this column.
     */
    "sClass": "",
    /**
     * When DataTables calculates the column widths to assign to each column,
     * it finds the longest string in each column and then constructs a
     * temporary table and reads the widths from that. The problem with this
     * is that "mmm" is much wider then "iiii", but the latter is a longer
     * string - thus the calculation can go wrong (doing it properly and putting
     * it into an DOM object and measuring that is horribly(!) slow). Thus as
     * a "work around" we provide this option. It will append its value to the
     * text that is found to be the longest string for the column - i.e. padding.
     * Generally you shouldn't need this!
     */
    "sContentPadding": "",
    /**
     * Allows a default value to be given for a column's data, and will be used
     * whenever a null data source is encountered (this can be because `data`
     * is set to null, or because the data source itself is null).
     */
    "sDefaultContent": null,
    /**
     * This parameter is only used in DataTables' server-side processing. It can
     * be exceptionally useful to know what columns are being displayed on the
     * client side, and to map these to database fields. When defined, the names
     * also allow DataTables to reorder information from the server if it comes
     * back in an unexpected order (i.e. if you switch your columns around on the
     * client-side, your server-side code does not also need updating).
     */
    "sName": "",
    /**
     * Defines a data source type for the ordering which can be used to read
     * real-time information from the table (updating the internally cached
     * version) prior to ordering. This allows ordering to occur on user
     * editable elements such as form inputs.
     */
    "sSortDataType": "std",
    /**
     * The title of this column.
     */
    "sTitle": null,
    /**
     * The type allows you to specify how the data for this column will be
     * ordered. Four types (string, numeric, date and html (which will strip
     * HTML tags before ordering)) are currently available. Note that only date
     * formats understood by Javascript's Date() object will be accepted as type
     * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
     * 'numeric', 'date' or 'html' (by default). Further types can be adding
     * through plug-ins.
     */
    "sType": null,
    /**
     * Defining the width of the column, this parameter may take any CSS value
     * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
     * been given a specific width through this interface ensuring that the table
     * remains readable.
     */
    "sWidth": null
  };
  _fnHungarianMap(DataTable.defaults.column);
  DataTable.models.oSettings = {
    /**
     * Primary features of DataTables and their enablement state.
     */
    "oFeatures": {
      /**
       * Flag to say if DataTables should automatically try to calculate the
       * optimum table and columns widths (true) or not (false).
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bAutoWidth": null,
      /**
       * Delay the creation of TR and TD elements until they are actually
       * needed by a driven page draw. This can give a significant speed
       * increase for Ajax source and Javascript source data, but makes no
       * difference at all for DOM and server-side processing tables.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bDeferRender": null,
      /**
       * Enable filtering on the table or not. Note that if this is disabled
       * then there is no filtering at all on the table, including fnFilter.
       * To just remove the filtering input use sDom and remove the 'f' option.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bFilter": null,
      /**
       * Used only for compatiblity with DT1
       * @deprecated
       */
      "bInfo": true,
      /**
       * Used only for compatiblity with DT1
       * @deprecated
       */
      "bLengthChange": true,
      /**
       * Pagination enabled or not. Note that if this is disabled then length
       * changing must also be disabled.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bPaginate": null,
      /**
       * Processing indicator enable flag whenever DataTables is enacting a
       * user request - typically an Ajax request for server-side processing.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bProcessing": null,
      /**
       * Server-side processing enabled flag - when enabled DataTables will
       * get all data from the server for every draw - there is no filtering,
       * sorting or paging done on the client-side.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bServerSide": null,
      /**
       * Sorting enablement flag.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bSort": null,
      /**
       * Multi-column sorting
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bSortMulti": null,
      /**
       * Apply a class to the columns which are being sorted to provide a
       * visual highlight or not. This can slow things down when enabled since
       * there is a lot of DOM interaction.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bSortClasses": null,
      /**
       * State saving enablement flag.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bStateSave": null
    },
    /**
     * Scrolling settings for a table.
     */
    "oScroll": {
      /**
       * When the table is shorter in height than sScrollY, collapse the
       * table container down to the height of the table (when true).
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "bCollapse": null,
      /**
       * Width of the scrollbar for the web-browser's platform. Calculated
       * during table initialisation.
       */
      "iBarWidth": 0,
      /**
       * Viewport width for horizontal scrolling. Horizontal scrolling is
       * disabled if an empty string.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "sX": null,
      /**
       * Width to expand the table to when using x-scrolling. Typically you
       * should not need to use this.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @deprecated
       */
      "sXInner": null,
      /**
       * Viewport height for vertical scrolling. Vertical scrolling is disabled
       * if an empty string.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       */
      "sY": null
    },
    /**
     * Language information for the table.
     */
    "oLanguage": {
      /**
       * Information callback function. See
       * {@link DataTable.defaults.fnInfoCallback}
       */
      "fnInfoCallback": null
    },
    /**
     * Browser support parameters
     */
    "oBrowser": {
      /**
       * Determine if the vertical scrollbar is on the right or left of the
       * scrolling container - needed for rtl language layout, although not
       * all browsers move the scrollbar (Safari).
       */
      "bScrollbarLeft": false,
      /**
       * Browser scrollbar width
       */
      "barWidth": 0
    },
    "ajax": null,
    /**
     * Array referencing the nodes which are used for the features. The
     * parameters of this object match what is allowed by sDom - i.e.
     *   <ul>
     *     <li>'l' - Length changing</li>
     *     <li>'f' - Filtering input</li>
     *     <li>'t' - The table!</li>
     *     <li>'i' - Information</li>
     *     <li>'p' - Pagination</li>
     *     <li>'r' - pRocessing</li>
     *   </ul>
     */
    "aanFeatures": [],
    /**
     * Store data information - see {@link DataTable.models.oRow} for detailed
     * information.
     */
    "aoData": [],
    /**
     * Array of indexes which are in the current display (after filtering etc)
     */
    "aiDisplay": [],
    /**
     * Array of indexes for display - no filtering
     */
    "aiDisplayMaster": [],
    /**
     * Map of row ids to data indexes
     */
    "aIds": {},
    /**
     * Store information about each column that is in use
     */
    "aoColumns": [],
    /**
     * Store information about the table's header
     */
    "aoHeader": [],
    /**
     * Store information about the table's footer
     */
    "aoFooter": [],
    /**
     * Store the applied global search information in case we want to force a
     * research or compare the old search to a new one.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "oPreviousSearch": {},
    /**
     * Store for named searches
     */
    searchFixed: {},
    /**
     * Store the applied search for each column - see
     * {@link DataTable.models.oSearch} for the format that is used for the
     * filtering information for each column.
     */
    "aoPreSearchCols": [],
    /**
     * Sorting that is applied to the table. Note that the inner arrays are
     * used in the following manner:
     * <ul>
     *   <li>Index 0 - column number</li>
     *   <li>Index 1 - current sorting direction</li>
     * </ul>
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "aaSorting": null,
    /**
     * Sorting that is always applied to the table (i.e. prefixed in front of
     * aaSorting).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "aaSortingFixed": [],
    /**
     * If restoring a table - we should restore its width
     */
    "sDestroyWidth": 0,
    /**
     * Callback functions array for every time a row is inserted (i.e. on a draw).
     */
    "aoRowCallback": [],
    /**
     * Callback functions for the header on each draw.
     */
    "aoHeaderCallback": [],
    /**
     * Callback function for the footer on each draw.
     */
    "aoFooterCallback": [],
    /**
     * Array of callback functions for draw callback functions
     */
    "aoDrawCallback": [],
    /**
     * Array of callback functions for row created function
     */
    "aoRowCreatedCallback": [],
    /**
     * Callback functions for just before the table is redrawn. A return of
     * false will be used to cancel the draw.
     */
    "aoPreDrawCallback": [],
    /**
     * Callback functions for when the table has been initialised.
     */
    "aoInitComplete": [],
    /**
     * Callbacks for modifying the settings to be stored for state saving, prior to
     * saving state.
     */
    "aoStateSaveParams": [],
    /**
     * Callbacks for modifying the settings that have been stored for state saving
     * prior to using the stored values to restore the state.
     */
    "aoStateLoadParams": [],
    /**
     * Callbacks for operating on the settings object once the saved state has been
     * loaded
     */
    "aoStateLoaded": [],
    /**
     * Cache the table ID for quick access
     */
    "sTableId": "",
    /**
     * The TABLE node for the main table
     */
    "nTable": null,
    /**
     * Permanent ref to the thead element
     */
    "nTHead": null,
    /**
     * Permanent ref to the tfoot element - if it exists
     */
    "nTFoot": null,
    /**
     * Permanent ref to the tbody element
     */
    "nTBody": null,
    /**
     * Cache the wrapper node (contains all DataTables controlled elements)
     */
    "nTableWrapper": null,
    /**
     * Indicate if all required information has been read in
     */
    "bInitialised": false,
    /**
     * Information about open rows. Each object in the array has the parameters
     * 'nTr' and 'nParent'
     */
    "aoOpenRows": [],
    /**
     * Dictate the positioning of DataTables' control elements - see
     * {@link DataTable.model.oInit.sDom}.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "sDom": null,
    /**
     * Search delay (in mS)
     */
    "searchDelay": null,
    /**
     * Which type of pagination should be used.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "sPaginationType": "two_button",
    /**
     * Number of paging controls on the page. Only used for backwards compatibility
     */
    pagingControls: 0,
    /**
     * The state duration (for `stateSave`) in seconds.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "iStateDuration": 0,
    /**
     * Array of callback functions for state saving. Each array element is an
     * object with the following parameters:
     *   <ul>
     *     <li>function:fn - function to call. Takes two parameters, oSettings
     *       and the JSON string to save that has been thus far created. Returns
     *       a JSON string to be inserted into a json object
     *       (i.e. '"param": [ 0, 1, 2]')</li>
     *     <li>string:sName - name of callback</li>
     *   </ul>
     */
    "aoStateSave": [],
    /**
     * Array of callback functions for state loading. Each array element is an
     * object with the following parameters:
     *   <ul>
     *     <li>function:fn - function to call. Takes two parameters, oSettings
     *       and the object stored. May return false to cancel state loading</li>
     *     <li>string:sName - name of callback</li>
     *   </ul>
     */
    "aoStateLoad": [],
    /**
     * State that was saved. Useful for back reference
     */
    "oSavedState": null,
    /**
     * State that was loaded. Useful for back reference
     */
    "oLoadedState": null,
    /**
     * Note if draw should be blocked while getting data
     */
    "bAjaxDataGet": true,
    /**
     * The last jQuery XHR object that was used for server-side data gathering.
     * This can be used for working with the XHR information in one of the
     * callbacks
     */
    "jqXHR": null,
    /**
     * JSON returned from the server in the last Ajax request
     */
    "json": void 0,
    /**
     * Data submitted as part of the last Ajax request
     */
    "oAjaxData": void 0,
    /**
     * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
     * required).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "sServerMethod": null,
    /**
     * Format numbers for display.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "fnFormatNumber": null,
    /**
     * List of options that can be used for the user selectable length menu.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "aLengthMenu": null,
    /**
     * Counter for the draws that the table does. Also used as a tracker for
     * server-side processing
     */
    "iDraw": 0,
    /**
     * Indicate if a redraw is being done - useful for Ajax
     */
    "bDrawing": false,
    /**
     * Draw index (iDraw) of the last error when parsing the returned data
     */
    "iDrawError": -1,
    /**
     * Paging display length
     */
    "_iDisplayLength": 10,
    /**
     * Paging start point - aiDisplay index
     */
    "_iDisplayStart": 0,
    /**
     * Server-side processing - number of records in the result set
     * (i.e. before filtering), Use fnRecordsTotal rather than
     * this property to get the value of the number of records, regardless of
     * the server-side processing setting.
     */
    "_iRecordsTotal": 0,
    /**
     * Server-side processing - number of records in the current display set
     * (i.e. after filtering). Use fnRecordsDisplay rather than
     * this property to get the value of the number of records, regardless of
     * the server-side processing setting.
     */
    "_iRecordsDisplay": 0,
    /**
     * The classes to use for the table
     */
    "oClasses": {},
    /**
     * Flag attached to the settings object so you can check in the draw
     * callback if filtering has been done in the draw. Deprecated in favour of
     * events.
     *  @deprecated
     */
    "bFiltered": false,
    /**
     * Flag attached to the settings object so you can check in the draw
     * callback if sorting has been done in the draw. Deprecated in favour of
     * events.
     *  @deprecated
     */
    "bSorted": false,
    /**
     * Indicate that if multiple rows are in the header and there is more than
     * one unique cell per column, if the top one (true) or bottom one (false)
     * should be used for sorting / title by DataTables.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bSortCellsTop": null,
    /**
     * Initialisation object that is used for the table
     */
    "oInit": null,
    /**
     * Destroy callback functions - for plug-ins to attach themselves to the
     * destroy so they can clean up markup and events.
     */
    "aoDestroyCallback": [],
    /**
     * Get the number of records in the current record set, before filtering
     */
    "fnRecordsTotal": function() {
      return _fnDataSource(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
    },
    /**
     * Get the number of records in the current record set, after filtering
     */
    "fnRecordsDisplay": function() {
      return _fnDataSource(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
    },
    /**
     * Get the display end point - aiDisplay index
     */
    "fnDisplayEnd": function() {
      var len = this._iDisplayLength, start = this._iDisplayStart, calc = start + len, records = this.aiDisplay.length, features = this.oFeatures, paginate = features.bPaginate;
      if (features.bServerSide) {
        return paginate === false || len === -1 ? start + records : Math.min(start + len, this._iRecordsDisplay);
      } else {
        return !paginate || calc > records || len === -1 ? records : calc;
      }
    },
    /**
     * The DataTables object for this table
     */
    "oInstance": null,
    /**
     * Unique identifier for each instance of the DataTables object. If there
     * is an ID on the table node, then it takes that value, otherwise an
     * incrementing internal counter is used.
     */
    "sInstance": null,
    /**
     * tabindex attribute value that is added to DataTables control elements, allowing
     * keyboard navigation of the table and its controls.
     */
    "iTabIndex": 0,
    /**
     * DIV container for the footer scrolling table if scrolling
     */
    "nScrollHead": null,
    /**
     * DIV container for the footer scrolling table if scrolling
     */
    "nScrollFoot": null,
    /**
     * Last applied sort
     */
    "aLastSort": [],
    /**
     * Stored plug-in instances
     */
    "oPlugins": {},
    /**
     * Function used to get a row's id from the row's data
     */
    "rowIdFn": null,
    /**
     * Data location where to store a row's id
     */
    "rowId": null,
    caption: "",
    captionNode: null,
    colgroup: null,
    /** Delay loading of data */
    deferLoading: null,
    /** Allow auto type detection */
    typeDetect: true,
    /** ResizeObserver for the container div */
    resizeObserver: null,
    /** Keep a record of the last size of the container, so we can skip duplicates */
    containerWidth: 0
  };
  var extPagination = DataTable.ext.pager;
  $2.extend(extPagination, {
    simple: function() {
      return ["previous", "next"];
    },
    full: function() {
      return ["first", "previous", "next", "last"];
    },
    numbers: function() {
      return ["numbers"];
    },
    simple_numbers: function() {
      return ["previous", "numbers", "next"];
    },
    full_numbers: function() {
      return ["first", "previous", "numbers", "next", "last"];
    },
    first_last: function() {
      return ["first", "last"];
    },
    first_last_numbers: function() {
      return ["first", "numbers", "last"];
    },
    // For testing and plug-ins to use
    _numbers: _pagingNumbers,
    // Number of number buttons - legacy, use `numbers` option for paging feature
    numbers_length: 7
  });
  $2.extend(true, DataTable.ext.renderer, {
    pagingButton: {
      _: function(settings, buttonType, content, active, disabled) {
        var classes = settings.oClasses.paging;
        var btnClasses = [classes.button];
        var btn;
        if (active) {
          btnClasses.push(classes.active);
        }
        if (disabled) {
          btnClasses.push(classes.disabled);
        }
        if (buttonType === "ellipsis") {
          btn = $2('<span class="ellipsis"></span>').html(content)[0];
        } else {
          btn = $2("<button>", {
            class: btnClasses.join(" "),
            role: "link",
            type: "button"
          }).html(content);
        }
        return {
          display: btn,
          clicker: btn
        };
      }
    },
    pagingContainer: {
      _: function(settings, buttons) {
        return buttons;
      }
    }
  });
  var _filterString = function(stripHtml, normalize) {
    return function(str) {
      if (_empty(str) || typeof str !== "string") {
        return str;
      }
      str = str.replace(_re_new_lines, " ");
      if (stripHtml) {
        str = _stripHtml(str);
      }
      if (normalize) {
        str = _normalize(str, false);
      }
      return str;
    };
  };
  function __mld(dtLib, momentFn, luxonFn, dateFn, arg1) {
    if (__moment) {
      return dtLib[momentFn](arg1);
    } else if (__luxon) {
      return dtLib[luxonFn](arg1);
    }
    return dateFn ? dtLib[dateFn](arg1) : dtLib;
  }
  var __mlWarning = false;
  var __luxon;
  var __moment;
  function resolveWindowLibs() {
    if (window.luxon && !__luxon) {
      __luxon = window.luxon;
    }
    if (window.moment && !__moment) {
      __moment = window.moment;
    }
  }
  function __mldObj(d, format, locale) {
    var dt;
    resolveWindowLibs();
    if (__moment) {
      dt = __moment.utc(d, format, locale, true);
      if (!dt.isValid()) {
        return null;
      }
    } else if (__luxon) {
      dt = format && typeof d === "string" ? __luxon.DateTime.fromFormat(d, format) : __luxon.DateTime.fromISO(d);
      if (!dt.isValid) {
        return null;
      }
      dt = dt.setLocale(locale);
    } else if (!format) {
      dt = new Date(d);
    } else {
      if (!__mlWarning) {
        alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17");
      }
      __mlWarning = true;
    }
    return dt;
  }
  function __mlHelper(localeString) {
    return function(from, to, locale, def) {
      if (arguments.length === 0) {
        locale = "en";
        to = null;
        from = null;
      } else if (arguments.length === 1) {
        locale = "en";
        to = from;
        from = null;
      } else if (arguments.length === 2) {
        locale = to;
        to = from;
        from = null;
      }
      var typeName = "datetime" + (to ? "-" + to : "");
      if (!DataTable.ext.type.order[typeName + "-pre"]) {
        DataTable.type(typeName, {
          detect: function(d) {
            return d === typeName ? typeName : false;
          },
          order: {
            pre: function(d) {
              return d.valueOf();
            }
          },
          className: "dt-right"
        });
      }
      return function(d, type) {
        if (d === null || d === void 0) {
          if (def === "--now") {
            var local = /* @__PURE__ */ new Date();
            d = new Date(Date.UTC(
              local.getFullYear(),
              local.getMonth(),
              local.getDate(),
              local.getHours(),
              local.getMinutes(),
              local.getSeconds()
            ));
          } else {
            d = "";
          }
        }
        if (type === "type") {
          return typeName;
        }
        if (d === "") {
          return type !== "sort" ? "" : __mldObj("0000-01-01 00:00:00", null, locale);
        }
        if (to !== null && from === to && type !== "sort" && type !== "type" && !(d instanceof Date)) {
          return d;
        }
        var dt = __mldObj(d, from, locale);
        if (dt === null) {
          return d;
        }
        if (type === "sort") {
          return dt;
        }
        var formatted = to === null ? __mld(dt, "toDate", "toJSDate", "")[localeString]() : __mld(dt, "format", "toFormat", "toISOString", to);
        return type === "display" ? _escapeHtml(formatted) : formatted;
      };
    };
  }
  var __thousands = ",";
  var __decimal = ".";
  if (window.Intl !== void 0) {
    try {
      num = new Intl.NumberFormat().formatToParts(100000.1);
      for (i = 0; i < num.length; i++) {
        if (num[i].type === "group") {
          __thousands = num[i].value;
        } else if (num[i].type === "decimal") {
          __decimal = num[i].value;
        }
      }
    } catch (e) {
    }
  }
  var num;
  var i;
  DataTable.datetime = function(format, locale) {
    var typeName = "datetime-" + format;
    if (!locale) {
      locale = "en";
    }
    if (!DataTable.ext.type.order[typeName]) {
      DataTable.type(typeName, {
        detect: function(d) {
          var dt = __mldObj(d, format, locale);
          return d === "" || dt ? typeName : false;
        },
        order: {
          pre: function(d) {
            return __mldObj(d, format, locale) || 0;
          }
        },
        className: "dt-right"
      });
    }
  };
  DataTable.render = {
    date: __mlHelper("toLocaleDateString"),
    datetime: __mlHelper("toLocaleString"),
    time: __mlHelper("toLocaleTimeString"),
    number: function(thousands, decimal, precision, prefix, postfix) {
      if (thousands === null || thousands === void 0) {
        thousands = __thousands;
      }
      if (decimal === null || decimal === void 0) {
        decimal = __decimal;
      }
      return {
        display: function(d) {
          if (typeof d !== "number" && typeof d !== "string") {
            return d;
          }
          if (d === "" || d === null) {
            return d;
          }
          var negative = d < 0 ? "-" : "";
          var flo = parseFloat(d);
          var abs = Math.abs(flo);
          if (abs >= 1e11 || abs < 1e-4 && abs !== 0) {
            var exp = flo.toExponential(precision).split(/e\+?/);
            return exp[0] + " x 10<sup>" + exp[1] + "</sup>";
          }
          if (isNaN(flo)) {
            return _escapeHtml(d);
          }
          flo = flo.toFixed(precision);
          d = Math.abs(flo);
          var intPart = parseInt(d, 10);
          var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
          if (intPart === 0 && parseFloat(floatPart) === 0) {
            negative = "";
          }
          return negative + (prefix || "") + intPart.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g,
            thousands
          ) + floatPart + (postfix || "");
        }
      };
    },
    text: function() {
      return {
        display: _escapeHtml,
        filter: _escapeHtml
      };
    }
  };
  var _extTypes = DataTable.ext.type;
  DataTable.type = function(name, prop, val) {
    if (!prop) {
      return {
        className: _extTypes.className[name],
        detect: _extTypes.detect.find(function(fn) {
          return fn._name === name;
        }),
        order: {
          pre: _extTypes.order[name + "-pre"],
          asc: _extTypes.order[name + "-asc"],
          desc: _extTypes.order[name + "-desc"]
        },
        render: _extTypes.render[name],
        search: _extTypes.search[name]
      };
    }
    var setProp = function(prop2, propVal) {
      _extTypes[prop2][name] = propVal;
    };
    var setDetect = function(detect) {
      Object.defineProperty(detect, "_name", { value: name });
      var idx = _extTypes.detect.findIndex(function(item) {
        return item._name === name;
      });
      if (idx === -1) {
        _extTypes.detect.unshift(detect);
      } else {
        _extTypes.detect.splice(idx, 1, detect);
      }
    };
    var setOrder = function(obj) {
      _extTypes.order[name + "-pre"] = obj.pre;
      _extTypes.order[name + "-asc"] = obj.asc;
      _extTypes.order[name + "-desc"] = obj.desc;
    };
    if (val === void 0) {
      val = prop;
      prop = null;
    }
    if (prop === "className") {
      setProp("className", val);
    } else if (prop === "detect") {
      setDetect(val);
    } else if (prop === "order") {
      setOrder(val);
    } else if (prop === "render") {
      setProp("render", val);
    } else if (prop === "search") {
      setProp("search", val);
    } else if (!prop) {
      if (val.className) {
        setProp("className", val.className);
      }
      if (val.detect !== void 0) {
        setDetect(val.detect);
      }
      if (val.order) {
        setOrder(val.order);
      }
      if (val.render !== void 0) {
        setProp("render", val.render);
      }
      if (val.search !== void 0) {
        setProp("search", val.search);
      }
    }
  };
  DataTable.types = function() {
    return _extTypes.detect.map(function(fn) {
      return fn._name;
    });
  };
  var __diacriticSort = function(a, b) {
    a = a !== null && a !== void 0 ? a.toString().toLowerCase() : "";
    b = b !== null && b !== void 0 ? b.toString().toLowerCase() : "";
    return a.localeCompare(b, navigator.languages[0] || navigator.language, {
      numeric: true,
      ignorePunctuation: true
    });
  };
  var __diacriticHtmlSort = function(a, b) {
    a = _stripHtml(a);
    b = _stripHtml(b);
    return __diacriticSort(a, b);
  };
  DataTable.type("string", {
    detect: function() {
      return "string";
    },
    order: {
      pre: function(a) {
        return _empty(a) && typeof a !== "boolean" ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString();
      }
    },
    search: _filterString(false, true)
  });
  DataTable.type("string-utf8", {
    detect: {
      allOf: function(d) {
        return true;
      },
      oneOf: function(d) {
        return !_empty(d) && navigator.languages && typeof d === "string" && d.match(/[^\x00-\x7F]/);
      }
    },
    order: {
      asc: __diacriticSort,
      desc: function(a, b) {
        return __diacriticSort(a, b) * -1;
      }
    },
    search: _filterString(false, true)
  });
  DataTable.type("html", {
    detect: {
      allOf: function(d) {
        return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1;
      },
      oneOf: function(d) {
        return !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1;
      }
    },
    order: {
      pre: function(a) {
        return _empty(a) ? "" : a.replace ? _stripHtml(a).trim().toLowerCase() : a + "";
      }
    },
    search: _filterString(true, true)
  });
  DataTable.type("html-utf8", {
    detect: {
      allOf: function(d) {
        return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1;
      },
      oneOf: function(d) {
        return navigator.languages && !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1 && typeof d === "string" && d.match(/[^\x00-\x7F]/);
      }
    },
    order: {
      asc: __diacriticHtmlSort,
      desc: function(a, b) {
        return __diacriticHtmlSort(a, b) * -1;
      }
    },
    search: _filterString(true, true)
  });
  DataTable.type("date", {
    className: "dt-type-date",
    detect: {
      allOf: function(d) {
        if (d && !(d instanceof Date) && !_re_date.test(d)) {
          return null;
        }
        var parsed = Date.parse(d);
        return parsed !== null && !isNaN(parsed) || _empty(d);
      },
      oneOf: function(d) {
        return d instanceof Date || typeof d === "string" && _re_date.test(d);
      }
    },
    order: {
      pre: function(d) {
        var ts = Date.parse(d);
        return isNaN(ts) ? -Infinity : ts;
      }
    }
  });
  DataTable.type("html-num-fmt", {
    className: "dt-type-numeric",
    detect: {
      allOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _htmlNumeric(d, decimal, true, false);
      },
      oneOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _htmlNumeric(d, decimal, true, false);
      }
    },
    order: {
      pre: function(d, s) {
        var dp = s.oLanguage.sDecimal;
        return __numericReplace(d, dp, _re_html, _re_formatted_numeric);
      }
    },
    search: _filterString(true, true)
  });
  DataTable.type("html-num", {
    className: "dt-type-numeric",
    detect: {
      allOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _htmlNumeric(d, decimal, false, true);
      },
      oneOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _htmlNumeric(d, decimal, false, false);
      }
    },
    order: {
      pre: function(d, s) {
        var dp = s.oLanguage.sDecimal;
        return __numericReplace(d, dp, _re_html);
      }
    },
    search: _filterString(true, true)
  });
  DataTable.type("num-fmt", {
    className: "dt-type-numeric",
    detect: {
      allOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _isNumber(d, decimal, true, true);
      },
      oneOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _isNumber(d, decimal, true, false);
      }
    },
    order: {
      pre: function(d, s) {
        var dp = s.oLanguage.sDecimal;
        return __numericReplace(d, dp, _re_formatted_numeric);
      }
    }
  });
  DataTable.type("num", {
    className: "dt-type-numeric",
    detect: {
      allOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _isNumber(d, decimal, false, true);
      },
      oneOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _isNumber(d, decimal, false, false);
      }
    },
    order: {
      pre: function(d, s) {
        var dp = s.oLanguage.sDecimal;
        return __numericReplace(d, dp);
      }
    }
  });
  var __numericReplace = function(d, decimalPlace, re1, re2) {
    if (d !== 0 && (!d || d === "-")) {
      return -Infinity;
    }
    var type = typeof d;
    if (type === "number" || type === "bigint") {
      return d;
    }
    if (decimalPlace) {
      d = _numToDecimal(d, decimalPlace);
    }
    if (d.replace) {
      if (re1) {
        d = d.replace(re1, "");
      }
      if (re2) {
        d = d.replace(re2, "");
      }
    }
    return d * 1;
  };
  $2.extend(true, DataTable.ext.renderer, {
    footer: {
      _: function(settings, cell, classes) {
        cell.addClass(classes.tfoot.cell);
      }
    },
    header: {
      _: function(settings, cell, classes) {
        cell.addClass(classes.thead.cell);
        if (!settings.oFeatures.bSort) {
          cell.addClass(classes.order.none);
        }
        var legacyTop = settings.bSortCellsTop;
        var headerRows = cell.closest("thead").find("tr");
        var rowIdx = cell.parent().index();
        if (
          // Cells and rows which have the attribute to disable the icons
          cell.attr("data-dt-order") === "disable" || cell.parent().attr("data-dt-order") === "disable" || // Legacy support for `orderCellsTop`. If it is set, then cells
          // which are not in the top or bottom row of the header (depending
          // on the value) do not get the sorting classes applied to them
          legacyTop === true && rowIdx !== 0 || legacyTop === false && rowIdx !== headerRows.length - 1
        ) {
          return;
        }
        $2(settings.nTable).on("order.dt.DT column-visibility.dt.DT", function(e, ctx) {
          if (settings !== ctx) {
            return;
          }
          var sorting = ctx.sortDetails;
          if (!sorting) {
            return;
          }
          var i;
          var orderClasses = classes.order;
          var columns = ctx.api.columns(cell);
          var col = settings.aoColumns[columns.flatten()[0]];
          var orderable = columns.orderable().includes(true);
          var ariaType = "";
          var indexes = columns.indexes();
          var sortDirs = columns.orderable(true).flatten();
          var orderedColumns = _pluck(sorting, "col");
          var tabIndex = settings.iTabIndex;
          cell.removeClass(
            orderClasses.isAsc + " " + orderClasses.isDesc
          ).toggleClass(orderClasses.none, !orderable).toggleClass(orderClasses.canAsc, orderable && sortDirs.includes("asc")).toggleClass(orderClasses.canDesc, orderable && sortDirs.includes("desc"));
          var isOrdering = true;
          for (i = 0; i < indexes.length; i++) {
            if (!orderedColumns.includes(indexes[i])) {
              isOrdering = false;
            }
          }
          if (isOrdering) {
            var orderDirs = columns.order();
            cell.addClass(
              orderDirs.includes("asc") ? orderClasses.isAsc : "" + orderDirs.includes("desc") ? orderClasses.isDesc : ""
            );
          }
          var firstVis = -1;
          for (i = 0; i < orderedColumns.length; i++) {
            if (settings.aoColumns[orderedColumns[i]].bVisible) {
              firstVis = orderedColumns[i];
              break;
            }
          }
          if (indexes[0] == firstVis) {
            var firstSort = sorting[0];
            var sortOrder = col.asSorting;
            cell.attr("aria-sort", firstSort.dir === "asc" ? "ascending" : "descending");
            ariaType = !sortOrder[firstSort.index + 1] ? "Remove" : "Reverse";
          } else {
            cell.removeAttr("aria-sort");
          }
          cell.attr(
            "aria-label",
            orderable ? col.ariaTitle + ctx.api.i18n("oAria.orderable" + ariaType) : col.ariaTitle
          );
          if (orderable) {
            var orderSpan = cell.find(".dt-column-order");
            orderSpan.attr("role", "button");
            if (tabIndex !== -1) {
              orderSpan.attr("tabindex", tabIndex);
            }
          }
        });
      }
    },
    layout: {
      _: function(settings, container, items) {
        var classes = settings.oClasses.layout;
        var row = $2("<div/>").attr("id", items.id || null).addClass(items.className || classes.row).appendTo(container);
        DataTable.ext.renderer.layout._forLayoutRow(items, function(key, val) {
          if (key === "id" || key === "className") {
            return;
          }
          var klass = "";
          if (val.table) {
            row.addClass(classes.tableRow);
            klass += classes.tableCell + " ";
          }
          if (key === "start") {
            klass += classes.start;
          } else if (key === "end") {
            klass += classes.end;
          } else {
            klass += classes.full;
          }
          $2("<div/>").attr({
            id: val.id || null,
            "class": val.className ? val.className : classes.cell + " " + klass
          }).append(val.contents).appendTo(row);
        });
      },
      // Shared for use by the styling frameworks
      _forLayoutRow: function(items, fn) {
        var layoutEnum = function(x) {
          switch (x) {
            case "":
              return 0;
            case "start":
              return 1;
            case "end":
              return 2;
            default:
              return 3;
          }
        };
        Object.keys(items).sort(function(a, b) {
          return layoutEnum(a) - layoutEnum(b);
        }).forEach(function(key) {
          fn(key, items[key]);
        });
      }
    }
  });
  DataTable.feature = {};
  DataTable.feature.register = function(name, cb, legacy) {
    DataTable.ext.features[name] = cb;
    if (legacy) {
      _ext.feature.push({
        cFeature: legacy,
        fnInit: cb
      });
    }
  };
  function _divProp(el, prop, val) {
    if (val) {
      el[prop] = val;
    }
  }
  DataTable.feature.register("div", function(settings, opts) {
    var n = $2("<div>")[0];
    if (opts) {
      _divProp(n, "className", opts.className);
      _divProp(n, "id", opts.id);
      _divProp(n, "innerHTML", opts.html);
      _divProp(n, "textContent", opts.text);
    }
    return n;
  });
  DataTable.feature.register("info", function(settings, opts) {
    if (!settings.oFeatures.bInfo) {
      return null;
    }
    var lang = settings.oLanguage, tid = settings.sTableId, n = $2("<div/>", {
      "class": settings.oClasses.info.container
    });
    opts = $2.extend({
      callback: lang.fnInfoCallback,
      empty: lang.sInfoEmpty,
      postfix: lang.sInfoPostFix,
      search: lang.sInfoFiltered,
      text: lang.sInfo
    }, opts);
    settings.aoDrawCallback.push(function(s) {
      _fnUpdateInfo(s, opts, n);
    });
    if (!settings._infoEl) {
      n.attr({
        "aria-live": "polite",
        id: tid + "_info",
        role: "status"
      });
      $2(settings.nTable).attr("aria-describedby", tid + "_info");
      settings._infoEl = n;
    }
    return n;
  }, "i");
  function _fnUpdateInfo(settings, opts, node) {
    var start = settings._iDisplayStart + 1, end = settings.fnDisplayEnd(), max = settings.fnRecordsTotal(), total = settings.fnRecordsDisplay(), out = total ? opts.text : opts.empty;
    if (total !== max) {
      out += " " + opts.search;
    }
    out += opts.postfix;
    out = _fnMacros(settings, out);
    if (opts.callback) {
      out = opts.callback.call(
        settings.oInstance,
        settings,
        start,
        end,
        max,
        total,
        out
      );
    }
    node.html(out);
    _fnCallbackFire(settings, null, "info", [settings, node[0], out]);
  }
  var __searchCounter = 0;
  DataTable.feature.register("search", function(settings, opts) {
    if (!settings.oFeatures.bFilter) {
      return null;
    }
    var classes = settings.oClasses.search;
    var tableId = settings.sTableId;
    var language = settings.oLanguage;
    var previousSearch = settings.oPreviousSearch;
    var input = '<input type="search" class="' + classes.input + '"/>';
    opts = $2.extend({
      placeholder: language.sSearchPlaceholder,
      processing: false,
      text: language.sSearch
    }, opts);
    if (opts.text.indexOf("_INPUT_") === -1) {
      opts.text += "_INPUT_";
    }
    opts.text = _fnMacros(settings, opts.text);
    var end = opts.text.match(/_INPUT_$/);
    var start = opts.text.match(/^_INPUT_/);
    var removed = opts.text.replace(/_INPUT_/, "");
    var str = "<label>" + opts.text + "</label>";
    if (start) {
      str = "_INPUT_<label>" + removed + "</label>";
    } else if (end) {
      str = "<label>" + removed + "</label>_INPUT_";
    }
    var filter = $2("<div>").addClass(classes.container).append(str.replace(/_INPUT_/, input));
    filter.find("label").attr("for", "dt-search-" + __searchCounter);
    filter.find("input").attr("id", "dt-search-" + __searchCounter);
    __searchCounter++;
    var searchFn = function(event2) {
      var val = this.value;
      if (previousSearch.return && event2.key !== "Enter") {
        return;
      }
      if (val != previousSearch.search) {
        _fnProcessingRun(settings, opts.processing, function() {
          previousSearch.search = val;
          _fnFilterComplete(settings, previousSearch);
          settings._iDisplayStart = 0;
          _fnDraw(settings);
        });
      }
    };
    var searchDelay = settings.searchDelay !== null ? settings.searchDelay : 0;
    var jqFilter = $2("input", filter).val(previousSearch.search).attr("placeholder", opts.placeholder).on(
      "keyup.DT search.DT input.DT paste.DT cut.DT",
      searchDelay ? DataTable.util.debounce(searchFn, searchDelay) : searchFn
    ).on("mouseup.DT", function(e) {
      setTimeout(function() {
        searchFn.call(jqFilter[0], e);
      }, 10);
    }).on("keypress.DT", function(e) {
      if (e.keyCode == 13) {
        return false;
      }
    }).attr("aria-controls", tableId);
    $2(settings.nTable).on("search.dt.DT", function(ev, s) {
      if (settings === s && jqFilter[0] !== document.activeElement) {
        jqFilter.val(
          typeof previousSearch.search !== "function" ? previousSearch.search : ""
        );
      }
    });
    return filter;
  }, "f");
  DataTable.feature.register("paging", function(settings, opts) {
    if (!settings.oFeatures.bPaginate) {
      return null;
    }
    opts = $2.extend({
      buttons: DataTable.ext.pager.numbers_length,
      type: settings.sPaginationType,
      boundaryNumbers: true,
      firstLast: true,
      previousNext: true,
      numbers: true
    }, opts);
    var host = $2("<div/>").addClass(settings.oClasses.paging.container + (opts.type ? " paging_" + opts.type : "")).append(
      $2("<nav>").attr("aria-label", "pagination").addClass(settings.oClasses.paging.nav)
    );
    var draw = function() {
      _pagingDraw(settings, host.children(), opts);
    };
    settings.aoDrawCallback.push(draw);
    $2(settings.nTable).on("column-sizing.dt.DT", draw);
    return host;
  }, "p");
  function _pagingDynamic(opts) {
    var out = [];
    if (opts.numbers) {
      out.push("numbers");
    }
    if (opts.previousNext) {
      out.unshift("previous");
      out.push("next");
    }
    if (opts.firstLast) {
      out.unshift("first");
      out.push("last");
    }
    return out;
  }
  function _pagingDraw(settings, host, opts) {
    if (!settings._bInitComplete) {
      return;
    }
    var plugin = opts.type ? DataTable.ext.pager[opts.type] : _pagingDynamic, aria = settings.oLanguage.oAria.paginate || {}, start = settings._iDisplayStart, len = settings._iDisplayLength, visRecords = settings.fnRecordsDisplay(), all = len === -1, page = all ? 0 : Math.ceil(start / len), pages = all ? 1 : Math.ceil(visRecords / len), buttons = [], buttonEls = [], buttonsNested = plugin(opts).map(function(val) {
      return val === "numbers" ? _pagingNumbers(page, pages, opts.buttons, opts.boundaryNumbers) : val;
    });
    buttons = buttons.concat.apply(buttons, buttonsNested);
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      var btnInfo = _pagingButtonInfo(settings, button, page, pages);
      var btn = _fnRenderer(settings, "pagingButton")(
        settings,
        button,
        btnInfo.display,
        btnInfo.active,
        btnInfo.disabled
      );
      var ariaLabel = typeof button === "string" ? aria[button] : aria.number ? aria.number + (button + 1) : null;
      $2(btn.clicker).attr({
        "aria-controls": settings.sTableId,
        "aria-disabled": btnInfo.disabled ? "true" : null,
        "aria-current": btnInfo.active ? "page" : null,
        "aria-label": ariaLabel,
        "data-dt-idx": button,
        "tabIndex": btnInfo.disabled ? -1 : settings.iTabIndex && btn.clicker[0].nodeName.toLowerCase() !== "span" ? settings.iTabIndex : null
        // `0` doesn't need a tabIndex since it is the default
      });
      if (typeof button !== "number") {
        $2(btn.clicker).addClass(button);
      }
      _fnBindAction(
        btn.clicker,
        { action: button },
        function(e) {
          e.preventDefault();
          _fnPageChange(settings, e.data.action, true);
        }
      );
      buttonEls.push(btn.display);
    }
    var wrapped = _fnRenderer(settings, "pagingContainer")(
      settings,
      buttonEls
    );
    var activeEl = host.find(document.activeElement).data("dt-idx");
    host.empty().append(wrapped);
    if (activeEl !== void 0) {
      host.find("[data-dt-idx=" + activeEl + "]").trigger("focus");
    }
    if (buttonEls.length) {
      var outerHeight = $2(buttonEls[0]).outerHeight();
      if (opts.buttons > 1 && // prevent infinite
      outerHeight > 0 && // will be 0 if hidden
      $2(host).height() >= outerHeight * 2 - 10) {
        _pagingDraw(settings, host, $2.extend({}, opts, { buttons: opts.buttons - 2 }));
      }
    }
  }
  function _pagingButtonInfo(settings, button, page, pages) {
    var lang = settings.oLanguage.oPaginate;
    var o = {
      display: "",
      active: false,
      disabled: false
    };
    switch (button) {
      case "ellipsis":
        o.display = "&#x2026;";
        break;
      case "first":
        o.display = lang.sFirst;
        if (page === 0) {
          o.disabled = true;
        }
        break;
      case "previous":
        o.display = lang.sPrevious;
        if (page === 0) {
          o.disabled = true;
        }
        break;
      case "next":
        o.display = lang.sNext;
        if (pages === 0 || page === pages - 1) {
          o.disabled = true;
        }
        break;
      case "last":
        o.display = lang.sLast;
        if (pages === 0 || page === pages - 1) {
          o.disabled = true;
        }
        break;
      default:
        if (typeof button === "number") {
          o.display = settings.fnFormatNumber(button + 1);
          if (page === button) {
            o.active = true;
          }
        }
        break;
    }
    return o;
  }
  function _pagingNumbers(page, pages, buttons, addFirstLast) {
    var numbers = [], half = Math.floor(buttons / 2), before = addFirstLast ? 2 : 1, after = addFirstLast ? 1 : 0;
    if (pages <= buttons) {
      numbers = _range(0, pages);
    } else if (buttons === 1) {
      numbers = [page];
    } else if (buttons === 3) {
      if (page <= 1) {
        numbers = [0, 1, "ellipsis"];
      } else if (page >= pages - 2) {
        numbers = _range(pages - 2, pages);
        numbers.unshift("ellipsis");
      } else {
        numbers = ["ellipsis", page, "ellipsis"];
      }
    } else if (page <= half) {
      numbers = _range(0, buttons - before);
      numbers.push("ellipsis");
      if (addFirstLast) {
        numbers.push(pages - 1);
      }
    } else if (page >= pages - 1 - half) {
      numbers = _range(pages - (buttons - before), pages);
      numbers.unshift("ellipsis");
      if (addFirstLast) {
        numbers.unshift(0);
      }
    } else {
      numbers = _range(page - half + before, page + half - after);
      numbers.push("ellipsis");
      numbers.unshift("ellipsis");
      if (addFirstLast) {
        numbers.push(pages - 1);
        numbers.unshift(0);
      }
    }
    return numbers;
  }
  var __lengthCounter = 0;
  DataTable.feature.register("pageLength", function(settings, opts) {
    var features = settings.oFeatures;
    if (!features.bPaginate || !features.bLengthChange) {
      return null;
    }
    opts = $2.extend({
      menu: settings.aLengthMenu,
      text: settings.oLanguage.sLengthMenu
    }, opts);
    var classes = settings.oClasses.length, tableId = settings.sTableId, menu = opts.menu, lengths = [], language = [], i;
    if (Array.isArray(menu[0])) {
      lengths = menu[0];
      language = menu[1];
    } else {
      for (i = 0; i < menu.length; i++) {
        if ($2.isPlainObject(menu[i])) {
          lengths.push(menu[i].value);
          language.push(menu[i].label);
        } else {
          lengths.push(menu[i]);
          language.push(menu[i]);
        }
      }
    }
    var end = opts.text.match(/_MENU_$/);
    var start = opts.text.match(/^_MENU_/);
    var removed = opts.text.replace(/_MENU_/, "");
    var str = "<label>" + opts.text + "</label>";
    if (start) {
      str = "_MENU_<label>" + removed + "</label>";
    } else if (end) {
      str = "<label>" + removed + "</label>_MENU_";
    }
    var tmpId = "tmp-" + +/* @__PURE__ */ new Date();
    var div = $2("<div/>").addClass(classes.container).append(
      str.replace("_MENU_", '<span id="' + tmpId + '"></span>')
    );
    var textNodes = [];
    Array.prototype.slice.call(div.find("label")[0].childNodes).forEach(function(el) {
      if (el.nodeType === Node.TEXT_NODE) {
        textNodes.push({
          el,
          text: el.textContent
        });
      }
    });
    var updateEntries = function(len) {
      textNodes.forEach(function(node) {
        node.el.textContent = _fnMacros(settings, node.text, len);
      });
    };
    var select = $2("<select/>", {
      "aria-controls": tableId,
      "class": classes.select
    });
    for (i = 0; i < lengths.length; i++) {
      select[0][i] = new Option(
        typeof language[i] === "number" ? settings.fnFormatNumber(language[i]) : language[i],
        lengths[i]
      );
    }
    div.find("label").attr("for", "dt-length-" + __lengthCounter);
    select.attr("id", "dt-length-" + __lengthCounter);
    __lengthCounter++;
    div.find("#" + tmpId).replaceWith(select);
    $2("select", div).val(settings._iDisplayLength).on("change.DT", function() {
      _fnLengthChange(settings, $2(this).val());
      _fnDraw(settings);
    });
    $2(settings.nTable).on("length.dt.DT", function(e, s, len) {
      if (settings === s) {
        $2("select", div).val(len);
        updateEntries(len);
      }
    });
    updateEntries(settings._iDisplayLength);
    return div;
  }, "l");
  $2.fn.dataTable = DataTable;
  DataTable.$ = $2;
  $2.fn.dataTableSettings = DataTable.settings;
  $2.fn.dataTableExt = DataTable.ext;
  $2.fn.DataTable = function(opts) {
    return $2(this).dataTable(opts).api();
  };
  $2.each(DataTable, function(prop, val) {
    $2.fn.DataTable[prop] = val;
  });

  // src/components/data_table/js/global.js
  function global_default12(QLD) {
    "use strict";
    var dataTable = {};
    function readCSVFile(url, callback) {
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching CSV file.");
        }
        return response.text();
      }).then((data) => {
        const tableLines = data.split("\n");
        callback(null, tableLines);
      }).catch((error) => {
        callback(error);
      });
    }
    function getTableHeaderAndFooter(tableLines = []) {
      let tableColumnHeads = [];
      let tableFooterData = [];
      if (tableLines.length > 0) {
        tableColumnHeads = tableLines.shift().split(",");
      }
      return {
        header: tableColumnHeads,
        // footer: tableFooterData,
        footer: tableColumnHeads
      };
    }
    function getTableData(tableLines = [], tableColumnHeads) {
      let returnArray = [];
      let tableLength = tableLines.length - 1;
      for (let i = 0; i < tableLength; i++) {
        let unprocessedLine = tableLines.shift();
        let line = unprocessedLine.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g).map((cell) => {
          return cell.replace(/^"(.+(?="$))"$/, "$1");
        });
        let obj = {};
        for (let j = 0; j < line.length; j++) {
          obj[tableColumnHeads[j]] = line[j].replace(/\r/g, "");
        }
        returnArray.push(obj);
      }
      return [...returnArray];
    }
    function dataTableCsv(tableDiv) {
      let tableDivId = tableDiv.attr("id");
      tableDivId = "#" + tableDivId;
      const csvTable = tableDiv.children("#qld_data-table_csv");
      csvTable.css("display", "table");
      const csvFileURL = csvTable.attr("data-csv-source");
      readCSVFile(csvFileURL, (err, tableLines) => {
        if (err) {
          console.log("Error: ", err);
          csvTable.css("display", "none");
        }
        let tableHeaderAndFooter = getTableHeaderAndFooter(tableLines);
        let tableColumnHeads = tableHeaderAndFooter.header;
        let tableFooterData = tableHeaderAndFooter.footer;
        var tableData = getTableData(tableLines, tableColumnHeads);
        let tableColumns = tableColumnHeads.map((column) => {
          return { data: column, title: column };
        });
        let footerHasContent = false;
        const QLD_DataTable = $(csvTable).DataTable({
          "sScrollX": "100%",
          "sScrollXInner": "100%",
          "bScrollCollapse": true,
          data: tableData ? tableData : [],
          columns: tableColumns ? tableColumns : [],
          dom: '<"top"if>rt<"bottom"lp><"clear">',
          pagingType: "simple_numbers",
          pagingTag: "li",
          language: {
            paginate: {
              previous: `<a rel="prev"
                        aria-label="Next page of results" class="qld__search-pagination_link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false"
                            width="16" height="16" role="img">
                            <path fill="currentColor"
                                d="M448 256C448 264.8 440.6 272 431.4 272H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59C190.5 446.6 186.5 448 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094c6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3C440.6 240 448 247.2 448 256z">
                            </path>
                        </svg><span>Back</span>
                    </a>`,
              next: `<a rel="next" aria-label="Next page of results" class="qld__search-pagination_link">
                            <span>Next</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false" width="16" height="16" role="img"><path fill="currentColor" d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z"></path></svg>
                            </a>`
            },
            sEmptyTable: "No data available in table",
            sInfo: "<span class='qld__data-table-item-numbers'><span class='qld__data-table-item-numbers-heading'>Showing:</span> _START_-_END_ of <span class='qld__data-table-item-numbers-total'>_TOTAL_ entries</span></span>",
            sInfoEmpty: "<span class='qld__data-table-item-numbers'><span class='qld__data-table-item-numbers-heading'>Showing:</span> 0-0 of <span class='qld__data-table-item-numbers-total'>0 entries</span></span>",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "<span>Items per page</span> _MENU_",
            sLoadingRecords: "Loading...",
            sProcessing: "",
            sSearch: `Search:<input type="search" id="qld__data-table__search-field" name="query" class="qld__text-input" autocomplete="off" value=""></input>`,
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
          },
          columnDefs: [
            {
              targets: -1,
              className: "dt-body-right"
            }
          ],
          oClasses: {
            sFilterInput: "qld__text-input",
            sPageButton: "qld__search-pagination_link ",
            sPageButtonActive: "active",
            sPageButtonDisabled: "disabled",
            sPaging: "dataTables_paginate paging_ qld__search-pagination "
          },
          drawCallback: function(settings) {
            var parentDiv = $(tableDivId + " div.qld__search-pagination");
            var ulElement = $(
              '<ul class="qld__search-pagination__list"></ul>'
            );
            parentDiv.children().appendTo(ulElement);
            ulElement.appendTo(parentDiv);
            $(".qld__search-pagination_link").each(function() {
              var $this = $(this);
              if ($this.children("a").length === 0 && $this.children("span").length === 0 && $this.children("svg").length === 0) {
                var textContent = $this.text();
                $this.html(
                  '<a class="num">' + textContent + "</a>"
                );
              }
            });
            $(".qld__search-pagination__list span:not([class])").each(
              function() {
                var $span = $(this);
                $span.before($span.contents());
                $span.remove();
              }
            );
            $("li.previous").addClass("prev");
          }
        });
        QLD_DataTable.on("order.dt", function() {
          let order = QLD_DataTable.order()[0];
          let columns = QLD_DataTable.columns();
          $(`${tableDivId} > #qld_data-table_csv tfoot th`).removeClass(
            "sorting_asc sorting_desc sorting sorting_1"
          );
          $(
            tableDivId + " > #qld_data-table_csv tfoot th:nth-child(" + (order[0] + 1) + ")"
          ).addClass("sorting_1");
        });
        if (footerHasContent) {
          $(`${tableDivId} > #qld_data-table_csv`).append(
            $("<tfoot class='qld__data-table-footer' />").append(
              tableFooter
            )
          ).addClass("qld__table");
        }
      });
    }
    function dataTableHtml(tableDiv) {
      let tableDivId = tableDiv.attr("id");
      tableDivId = "#" + tableDivId;
      const htmlTable = tableDiv.children("#qld_data-table_html");
      htmlTable.css("display", "block");
      const tableElement = $(tableDivId + " #qld_data-table_html table");
      const QLD_DataTable = tableElement.DataTable({
        "sScrollX": "100%",
        "sScrollXInner": "100%",
        "bScrollCollapse": true,
        dom: '<"top"if>rt<"bottom"lp><"clear">',
        pagingType: "simple_numbers",
        pagingTag: "li",
        language: {
          paginate: {
            previous: `<a rel="prev"
                        aria-label="Next page of results" class="qld__search-pagination_link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false"
                            width="16" height="16" role="img">
                            <path fill="currentColor"
                                d="M448 256C448 264.8 440.6 272 431.4 272H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59C190.5 446.6 186.5 448 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094c6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3C440.6 240 448 247.2 448 256z">
                            </path>
                        </svg><span>Back</span>
                    </a>`,
            next: `<a rel="next" aria-label="Next page of results" class="qld__search-pagination_link">
                            <span>Next</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false" width="16" height="16" role="img"><path fill="currentColor" d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z"></path></svg>
                            </a>`
          },
          sEmptyTable: "No data available in table",
          sInfo: "<span class='qld__data-table-item-numbers'><span class='qld__data-table-item-numbers-heading'>Showing:</span> _START_-_END_ of <span class='qld__data-table-item-numbers-total'>_TOTAL_ entries</span></span>",
          sInfoEmpty: "<span class='qld__data-table-item-numbers'><span class='qld__data-table-item-numbers-heading'>Showing:</span> 0-0 of <span class='qld__data-table-item-numbers-total'>0 entries</span></span>",
          sInfoFiltered: "(filtered from _MAX_ total entries)",
          sInfoPostFix: "",
          sDecimal: "",
          sThousands: ",",
          sLengthMenu: "<span>Items per page</span> _MENU_",
          sLoadingRecords: "Loading...",
          sProcessing: "",
          sSearch: `Search:<input type="search" id="qld__data-table__search-field" name="query" class="qld__text-input" autocomplete="off" value=""></input>`,
          sSearchPlaceholder: "",
          sUrl: "",
          sZeroRecords: "No matching records found"
        },
        columnDefs: [
          {
            targets: -1,
            className: "dt-body-right"
          }
        ],
        oClasses: {
          sFilterInput: "qld__text-input",
          sPageButton: "qld__search-pagination_link ",
          sPageButtonActive: "active",
          sPageButtonDisabled: "disabled",
          sPaging: "dataTables_paginate paging_ qld__search-pagination "
        },
        drawCallback: function(settings) {
          var parentDiv = $(tableDivId + " div.qld__search-pagination");
          var ulElement = $(
            '<ul class="qld__search-pagination__list"></ul>'
          );
          parentDiv.children().appendTo(ulElement);
          ulElement.appendTo(parentDiv);
          $(".qld__search-pagination_link").each(function() {
            var $this = $(this);
            if ($this.children("a").length === 0 && $this.children("span").length === 0 && $this.children("svg").length === 0) {
              var textContent = $this.text();
              $this.html('<a class="num">' + textContent + "</a>");
            }
          });
          $(".qld__search-pagination__list span:not([class])").each(
            function() {
              var $span = $(this);
              $span.before($span.contents());
              $span.remove();
            }
          );
          $("li.previous").addClass("prev");
        }
      });
      $(
        // this line enforces the correct sorting class to the html table's first column's footer.
        tableDivId + " #qld_table_html tfoot tr th:first-child"
      ).addClass("sorting_1");
      QLD_DataTable.on("order.dt", function() {
        let order = QLD_DataTable.order()[0];
        $(tableDivId + " #qld_table_html tfoot tr th").removeClass(
          "sorting_asc sorting_desc sorting sorting_1"
        );
        $(
          tableDivId + " #qld_table_html tfoot tr th:nth-child(" + (order[0] + 1) + ")"
        ).addClass("sorting_1");
      });
    }
    function triggerFunctionBasedOnClass(tableDiv) {
      if (tableDiv.hasClass("qld__data-table--csv")) {
        dataTableCsv(tableDiv);
      } else if (tableDiv.hasClass("qld__data-table--html")) {
        dataTableHtml(tableDiv);
      }
    }
    dataTable.init = function() {
      const tableDivs = $(".qld__data-table");
      for (let tableDiv of tableDivs) {
        triggerFunctionBasedOnClass($(tableDiv));
      }
    };
    QLD.dataTable = dataTable;
    document.addEventListener("DOMContentLoaded", QLD.dataTable.init);
  }

  // src/components/date_picker/js/global.js
  function global_default13(QLD) {
    "use strict";
    let datePickers = {};
    datePickers.init = () => {
      let $dateInputs = document.querySelectorAll("div.flatpickr > input[type=text].qld__text-input");
      $dateInputs.forEach(($input) => {
        let flatpickrSettings = {};
        const dataAttributes = $input.dataset;
        for (let key in dataAttributes) {
          flatpickrSettings[key] = dataAttributes[key];
        }
        initDatePicker($input, flatpickrSettings);
      });
    };
    const initDatePicker = ($input, settings) => {
      const wrapper = $input.parentElement;
      const toggleBtn = wrapper.querySelector(".calendar-toggle");
      const defaultSettings = {
        // Prevents the date picker from opening when the text input is clicked
        clickOpens: false,
        // Allow a user to manually enter a date into the text input
        allowInput: true,
        locale: {
          firstDayOfWeek: 1
        },
        // Wraps the elements inside the element with the .flatpickr class
        wrap: true
      };
      const allSettings = __spreadValues(__spreadValues({}, settings), defaultSettings);
      const fp = flatpickr(wrapper, allSettings);
      $(toggleBtn).on("click", (e) => {
        fp.toggle();
      });
    };
    QLD.datePickers = datePickers;
    document.addEventListener("DOMContentLoaded", function() {
      QLD.datePickers.init();
    });
  }

  // src/components/file_upload/js/global.js
  function global_default14(QLD) {
    "use strict";
    let fileUploads = {
      "inputs": {}
    };
    const loadingTemplate = function(file) {
      const fileName = file.name;
      const fileTemplate = document.createElement("div");
      fileTemplate.classList.add("qld__form-file");
      fileTemplate.innerHTML = `<div class="qld__form-file-info-wrapper"><div class="qld__form-file-loader">
                            <div class="qld__loading_spinner qld__loading_spinner--landscape" role="status">
                                <span class="qld__loading_spinner-wheel"></span>
                            </div>
                        </div>
                        <div class="qld__form-file-info">
                            <p class="qld__display-xs qld__form-file-info-name">${fileName}</p>
                            <span class="qld__form-file-info-status">Uploading...</span>
                        </div></div>
                        <div class="qld__form-file-actions"></div>`;
      return fileTemplate;
    };
    const successTemplate = function(file) {
      const fileName = file.name;
      const fileTemplate = document.createElement("div");
      let fileSize = null;
      const fileId = file.id != void 0 ? file.id : fileName;
      let fileType = file.type != void 0 ? getAssetType(file.type) : "";
      if (file && file.size) {
        fileSize = Math.ceil(file.size / 1e3);
      }
      fileTemplate.classList.add("qld__form-file", "qld__form-file--success");
      fileTemplate.innerHTML = `<div class="qld__form-file-info-wrapper"><div class="qld__form-file-loader">
                                        <i class="fa-light fa-2x fa-file${fileType !== "" ? fileType.fontAwesomeClass : ""}" aria-hidden="true"></i>
                                    </div>
                                    <div class="qld__form-file-info">
                                        <p class="qld__display-xs qld__form-file-info-name">${fileName}</p>
                                        <span class="qld__form-file-info-status"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="#339D37"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.82788 11.064L6.85666 9.26039L5.73438 10.4866L8.87877 13.3638L14.2677 7.97482L13.0929 6.80005L8.82788 11.064Z" fill="white"></path></svg>Upload successful${fileSize !== null ? `, ${fileSize}KB` : ""}</span>
                                    </div></div>
                                    <div class="qld__form-file-actions">
                                        <button class="qld__btn qld__btn--tertiary qld__btn--icon-lead qld__form-file-delete-btn" data-file-id="${fileId}">
                                            <i class="fa-light fa-trash" aria-hidden="true"></i>Remove
                                        </button>
                                    </div>`;
      return fileTemplate;
    };
    const errorTemplate = function(file, error) {
      const fileName = file.name;
      const fileTemplate = document.createElement("div");
      const fileId = file.id != void 0 ? file.id : fileName;
      fileTemplate.classList.add("qld__form-file", "qld__form-file--error");
      fileTemplate.innerHTML = `<div class="qld__form-file-info-wrapper"><div class="qld__form-file-loader">
                                        <i class="fa-light fa-2x fa-file-exclamation" aria-hidden="true"></i>
                                    </div>
                                    <div class="qld__form-file-info">
                                        <p class="qld__display-xs qld__form-file-info-name">${fileName}</p>
                                        <span class="qld__form-file-info-status"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" fill="#E22339"></circle><path d="M10 13C9.41667 13 9 13.5357 9 14C9 14.5 9.41667 15 10 15C10.5417 15 11 14.5 11 14C11 13.5357 10.5417 13 10 13ZM10 12C10.8044 12 11 11.3214 11 11V6C11 5.5 10.5 5 10 5C9.5 5 9 5.5 9 6V11C9 11.3214 9.1956 12 10 12Z" fill="white"></path></svg>${error}</span>
                                    </div></div>
                                    <div class="qld__form-file-actions">
                                        <button class="qld__btn qld__btn--tertiary qld__btn--icon-lead qld__form-file-delete-btn" data-file-id="${fileId}">
                                            <i class="fa-light fa-trash" aria-hidden="true"></i>Remove
                                        </button>
                                    </div>`;
      return fileTemplate;
    };
    const getAssetType = function(type) {
      let assetType = { "type": "file", "fontAwesomeClass": "" };
      let typeLowerCase = type.toLowerCase();
      switch (true) {
        case typeLowerCase.indexOf("pdf") != -1:
          assetType = { "type": "pdf_file", "fontAwesomeClass": "-pdf" };
          break;
        case typeLowerCase.indexOf("word") != -1:
          assetType = { "type": "word_doc", "fontAwesomeClass": "-word" };
          break;
        case typeLowerCase.indexOf("image") != -1:
          assetType = { "type": "image", "fontAwesomeClass": "-image" };
          break;
        case typeLowerCase.indexOf("excel") != -1:
          assetType = { "type": "excel_doc", "fontAwesomeClass": "-spreadsheet" };
          break;
        default:
          break;
      }
      return assetType;
    };
    const isFileValid = function(file, input_field_settings) {
      const currentFiles = input_field_settings.files;
      const totalFiles = currentFiles.length;
      const maxFiles = input_field_settings.max_files;
      const maxFileSize = input_field_settings.max_file_size;
      const fileTypes = input_field_settings.file_types.split(",");
      const fileSize = file.size;
      const fileName = file.name;
      const illegalFileNameCharacters = /[<>:"/\\|?*\x00-\x1F]/;
      if (currentFiles.some(function(item) {
        return file.id == item.id;
      })) {
        console.error("Duplicate file name");
        return "Filename: '" + fileName + "' already in use. Please rename file before trying again.";
      }
      if (!fileTypes.some(function(type) {
        return file.type.match(type);
      })) {
        console.error("Incorrect file type");
        return "The selected file must be a " + fileTypes.join(",");
      }
      if (fileSize / (1024 * 1024) > maxFileSize) {
        console.error("Max file size " + maxFileSize + " exceeded.");
        return "The selected file must be smaller than " + maxFileSize + "MB";
      }
      if (totalFiles >= maxFiles) {
        console.error("Max number of files reached");
        return "You can only select up to " + maxFiles + " files at the same time";
      }
      if (!(fileSize > 0)) {
        console.error("The selected file is empty");
        return "The selected file is empty";
      }
      if (illegalFileNameCharacters.test(fileName)) {
        console.error("Unsupported characters in file name. Only use letters, numbers, space, and special characters: -_(\u2019");
        return "The selected file is empty";
      }
      return true;
    };
    fileUploads.init = function() {
      let $file_inputs = QLD.utils.listToArray(document.querySelectorAll("input[type=file].qld__file-input"));
      for (let i = 0; i < $file_inputs.length; i++) {
        const $input = $file_inputs[i];
        const $dropzone_element = $input.closest(".qld__form-file-wrapper").querySelector(".qld__form-file-dropzone");
        const $file_list = $input.closest(".qld__form-file-wrapper").querySelector(".qld__form-file-preview");
        fileUploads.inputs[$input.id] = {
          "id": $input.id,
          "input_element": $input,
          "create_location": $input.dataset["createLocation"],
          "files": $input.dataset["files"] !== "" ? JSON.parse($input.dataset["files"]) : [],
          "max_file_size": $input.dataset["maxSize"],
          "file_types": $input.dataset["fileTypes"],
          "max_files": $input.dataset["maxFiles"],
          "file_list_element": $file_list,
          "dropzone_element": $dropzone_element,
          "js_api_key": $input.dataset["jsApiKey"],
          "displayFiles": displayExistingFiles
        };
        addListeners(fileUploads.inputs[$input.id]);
        if (fileUploads.inputs[$input.id].js_api_key !== void 0 && fileUploads.inputs[$input.id].input_element.hasAttribute("required")) {
          addValidation(fileUploads.inputs[$input.id]);
        }
        if (fileUploads.inputs[$input.id].js_api_key !== void 0 && fileUploads.inputs[$input.id].create_location !== void 0) {
          fileUploads.inputs[$input.id].jsApi = jsApi(fileUploads.inputs[$input.id].js_api_key);
        }
      }
      ;
    };
    const addValidation = function(input_field_settings) {
      const $input = input_field_settings.input_element;
      $input.removeAttribute("required");
      if (!$.validator.methods.requiredFileInteraction) {
        $.validator.addMethod("requiredFileInteraction", function(value, element) {
          if ($(element).data("interacted")) {
            return element.dataset["files"] !== "[]" && element.dataset["files"] !== "";
          } else {
            return value.trim() !== "";
          }
        }, "This field is required.");
      }
      $($input).rules("add", {
        requiredFileInteraction: true
      });
    };
    const addListeners = function(input_field_settings) {
      const $fileInput = input_field_settings.input_element;
      const $fileInputWrapper = $fileInput.closest(".qld__form-file-wrapper");
      const $dropArea = $fileInputWrapper.querySelector(".qld__form-file-dropzone");
      const disabledClasses = ["qld__form-file-dropzone--disabled", "qld__form-file-dropzone--updating"];
      $fileInputWrapper.addEventListener("click", function(event2) {
        if (event2.target.matches(".qld__form-file-delete-btn")) {
          event2.preventDefault();
          const fileId = event2.srcElement.dataset["fileId"];
          const $fileInfoWrapper = event2.target.closest(".qld__form-file");
          deleteFile(input_field_settings, fileId, $fileInfoWrapper);
        }
      });
      $fileInput.addEventListener("change", function(event2) {
        event2.preventDefault();
        $fileInput.dataset["interacted"] = true;
        if (!disabledClasses.some(function(className) {
          return $dropArea.classList.contains(className);
        })) {
          var files = event2.target.files;
          handleFiles(files, input_field_settings);
        }
      });
      $dropArea.addEventListener("dragover", function(event2) {
        event2.preventDefault();
        if (!disabledClasses.some(function(className) {
          return $dropArea.classList.contains(className);
        })) {
          $dropArea.classList.add("qld__form-file-dropzone--dragged-over");
        }
      });
      $dropArea.addEventListener("dragleave", function(event2) {
        event2.preventDefault();
        $dropArea.classList.remove("qld__form-file-dropzone--dragged-over");
      });
      $dropArea.addEventListener("drop", function(event2) {
        event2.preventDefault();
        $fileInput.dataset["interacted"] = true;
        if (!disabledClasses.some(function(className) {
          return $dropArea.classList.contains(className);
        })) {
          var files = event2.dataTransfer.files;
          handleFiles(files, input_field_settings);
        }
        $dropArea.classList.remove("qld__form-file-dropzone--dragged-over");
      });
    };
    const deleteFile = function(input_field_settings, fileId, $fileInfo) {
      return __async(this, null, function* () {
        const currentFiles = input_field_settings.files;
        const isError = $fileInfo.matches(".qld__form-file--error");
        const usingJsApi = input_field_settings.jsApi !== void 0;
        const index = currentFiles.findIndex(function(obj) {
          if (typeof obj === "string") {
            return JSON.parse(obj).id === fileId;
          } else {
            return obj.id === fileId;
          }
        });
        if (index !== -1 && !isError) {
          currentFiles.splice(index, 1);
          input_field_settings.files = currentFiles;
          if (!usingJsApi) {
            updateFileInputFileList(input_field_settings);
          } else {
            try {
              yield deleteAssetFromMatrix(fileId, $fileInfo, input_field_settings);
              setFilesDataAttribute(input_field_settings);
            } catch (error) {
              console.log(error);
            }
          }
        }
        $(input_field_settings.input_element).valid();
        $fileInfo.remove();
      });
    };
    const deleteAssetFromMatrix = function(fileId, $fileInfo, input_field_settings) {
      return __async(this, null, function* () {
        try {
          const name = $fileInfo.querySelector(".qld__form-file-info-name").innerText;
          const file = { "name": name };
          const $loading = loadingTemplate(file);
          const jsApi2 = input_field_settings.jsApi;
          $loading.querySelector(".qld__form-file-info-status").innerText = "Deleting...";
          $fileInfo.replaceWith($loading);
          let trashedAsset = yield jsApi2.trashAsset({
            "asset_ids": fileId
          });
          if (!trashedAsset.hasOwnProperty("error")) {
            $loading.remove();
            return trashedAsset;
          } else {
            throw file;
          }
        } catch (file) {
          const $error = errorTemplate(file, "Unable to delete file");
          $fileInfo.replaceWith($error);
        }
      });
    };
    const toggleDropzoneClass = function($dropZone, status) {
      const classNames = status.split(",");
      classNames.forEach(function(className) {
        $dropZone.classList.toggle(`qld__form-file-dropzone--${className}`);
      });
    };
    const handleFiles = function(files, input_field_settings) {
      return __async(this, null, function* () {
        const $fileList = input_field_settings.file_list_element;
        const usingJsApi = input_field_settings.jsApi !== void 0;
        const $dropZone = input_field_settings.dropzone_element;
        let promiseArray = [];
        toggleDropzoneClass($dropZone, "updating");
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          file.id = file.id !== void 0 ? file.id : file.name;
          let isValid = isFileValid(file, input_field_settings);
          let $fileInfo = loadingTemplate(file);
          $fileList.appendChild($fileInfo);
          if (isValid === true) {
            if (usingJsApi) {
              promiseArray.push(uploadFileJsApi(file, $fileInfo, input_field_settings));
            } else {
              input_field_settings.files.push(file);
              promiseArray.push(simulateFileUpload(file, $fileInfo));
            }
          } else {
            $fileInfo.replaceWith(errorTemplate(file, isValid));
          }
        }
        if (!usingJsApi) {
          updateFileInputFileList(input_field_settings);
        }
        try {
          yield Promise.all(promiseArray);
        } catch (error) {
          console.error(error);
        } finally {
          toggleDropzoneClass($dropZone, "updating");
          $(input_field_settings.input_element).valid();
        }
      });
    };
    const updateFileInputFileList = function(input_field_settings) {
      const files = input_field_settings.files;
      const $inputField = input_field_settings.input_element;
      let dataTransfer = new DataTransfer();
      files.forEach(function(file) {
        dataTransfer.items.add(file);
      });
      $inputField.files = dataTransfer.files;
    };
    const simulateFileUpload = function(file, $fileInfo) {
      return new Promise(function(resolve, reject) {
        let success = successTemplate(file);
        let text = success.querySelector(".qld__form-file-info-status");
        let newText = success.querySelector(".qld__form-file-info-status").textContent.replace("successful", "complete");
        for (var i = 0; i < text.childNodes.length; i++) {
          var node = text.childNodes[i];
          if (node.nodeType === Node.TEXT_NODE && node.textContent.includes("successful")) {
            node.textContent = newText;
          }
        }
        success.classList.remove("qld__form-file--success");
        success.classList.add("qld__form-file--complete");
        $fileInfo.replaceWith(success);
        resolve();
      });
    };
    const jsApi = function(key) {
      let options = new Array();
      options["key"] = key;
      let js_api = new Squiz_Matrix_API(options);
      return js_api;
    };
    const uploadFileJsApi = function(file, $fileInfo, input_field_settings) {
      return __async(this, null, function* () {
        const reader = new FileReader();
        const jsApi2 = input_field_settings.jsApi;
        let fileContent;
        reader.readAsDataURL(file);
        reader.onload = function() {
          fileContent = reader.result.split(",")[1];
        };
        try {
          let newFileAsset = yield createFileAsset(file, input_field_settings);
          if (!newFileAsset.hasOwnProperty("error")) {
            let updatedFileAsset = yield updateFileContents(newFileAsset, fileContent, input_field_settings);
            if (!updatedFileAsset.hasOwnProperty("error")) {
              let newFileInfo = yield jsApi2.getGeneral({
                "asset_id": updatedFileAsset.assetid,
                "get_attributes": 1
              });
              if (!newFileInfo.hasOwnProperty("error")) {
                newFileInfo.size = file.size;
                const $success = successTemplate(newFileInfo);
                $fileInfo.replaceWith($success);
                setFilesDataAttribute(input_field_settings, newFileInfo);
                return newFileInfo;
              } else {
                if (newFileInfo.errorDetails.length > 0) {
                  let err = {};
                  err.error = newFileInfo.errorDetails[0];
                  throw err.error;
                }
              }
            } else {
              throw updatedFileAsset.error;
            }
          } else {
            throw newFileAsset.error;
          }
        } catch (error) {
          const $error = errorTemplate(file, error);
          $fileInfo.replaceWith($error);
          return error;
        }
      });
    };
    const createFileAsset = function(file, input_field_settings) {
      return __async(this, null, function* () {
        const createLocation = input_field_settings.create_location;
        const assetType = getAssetType(file.type);
        const fileName = file.name;
        const jsApi2 = input_field_settings.jsApi;
        try {
          const newFile = yield jsApi2.createFileAsset({
            "parentID": createLocation,
            "type_code": assetType.type,
            "friendly_name": fileName,
            "link_type": "SQ_LINK_TYPE_1"
          });
          if (!newFile.hasOwnProperty("error")) {
            return newFile;
          } else {
            if (newFile.errorDetails.length > 0) {
              let err = {};
              err.error = newFile.errorDetails[0].includes("web path already exists") ? "Filename already in use. Please rename file before trying again." : newFile.errorDetails[0];
              throw err;
            }
          }
        } catch (error) {
          return error;
        }
      });
    };
    const updateFileContents = function(asset, fileContent, input_field_settings) {
      return __async(this, null, function* () {
        const assetId = Object.keys(asset)[0];
        const jsApi2 = input_field_settings.jsApi;
        try {
          let locks = yield jsApi2.acquireLock({
            "asset_id": assetId,
            "screen_name": "attributes",
            "dependants_only": 0,
            "force_acquire": 1
          });
          let updatedFile = yield jsApi2.updateFileAssetContent({
            "asset_id": assetId,
            "content": fileContent
          });
          if (!updatedFile.hasOwnProperty("error")) {
            return updatedFile;
          } else {
            if (updatedFile.errorDetails.length > 0) {
              let err = {};
              err.error = updatedFile.errorDetails[0];
              throw err;
            }
          }
        } catch (error) {
          return error;
        }
      });
    };
    const displayExistingFiles = function() {
      return __async(this, null, function* () {
        const files = this.files.length ? this.files : [];
        const $fileInfoArea = this.file_list_element;
        const displayed = this.files_displayed;
        const usingJsApi = this.js_api_key !== void 0;
        const jsApi2 = this.jsApi;
        if (files.length > 0 && displayed !== true) {
          this.files_displayed = true;
          if (fileUploads.jsApi !== null && usingJsApi) {
            for (let file of files) {
              try {
                let currentFile = yield jsApi2.getGeneral({
                  "asset_id": JSON.parse(file).id,
                  "get_attributes": 1
                });
                if (currentFile.error === void 0) {
                  displayFile(currentFile, $fileInfoArea);
                } else {
                  throw new Error("displayExistingFiles: Could not retrieve asset attributes.");
                }
              } catch (error) {
                console.log(error);
              }
            }
          } else {
            if (files.length > 0) {
              for (let file of files) {
                displayFile(file, $fileInfoArea);
              }
            }
          }
        } else {
          console.log(`All exisiting files already displaying for #${this.id}`);
        }
      });
    };
    const displayFile = function(file, $fileInfoArea) {
      const parsedFile = typeof file === "string" ? JSON.parse(file) : file;
      const $fileInfoBox = successTemplate(parsedFile);
      $fileInfoArea.appendChild($fileInfoBox);
    };
    const setFilesDataAttribute = function(input_field_settings, newFileInfo = null) {
      let files = input_field_settings.files;
      if (newFileInfo) {
        const fileObj = {
          "id": newFileInfo.id,
          "name": newFileInfo.name
        };
        if (files.findIndex(function(file) {
          return file.id === newFileInfo.id;
        }) === -1) {
          files.push(JSON.stringify(fileObj));
        }
      }
      input_field_settings.input_element.dataset["files"] = JSON.stringify(files);
    };
    QLD.fileUploads = fileUploads;
    window.addEventListener("DOMContentLoaded", function() {
      QLD.fileUploads.init();
    });
  }

  // src/components/global_alert/js/global.js
  function global_default15(QLD) {
    "use strict";
    function initGlobalAlert() {
      let alerts = document.getElementsByClassName("qld__global-alert") || [];
      let siteName = null;
      if (document.querySelector(".qld__global-alert__include") && document.querySelector(".qld__global-alert__include").alertContainer) {
        siteName = document.querySelector(".qld__global-alert__include").alertContainer.getAttribute("data-name");
      }
      if (siteName == null) {
        siteName = "global_alert_dev";
      }
      for (let index = 0; index < alerts.length; index++) {
        let alert2 = alerts[index];
        let alertSeen = QLD.utils.getCookie(`${siteName}_alertSeen_${index}`);
        if (alertSeen !== null) {
          alert2.style.maxHeight = "0";
          alert2.style.display = "none";
        }
        let closeButton = alert2.querySelector(".qld__global-alert__close button");
        if (closeButton !== null) {
          closeButton.addEventListener(
            "click",
            function() {
              alert2.style.maxHeight = "0";
              alert2.style.display = "none";
              QLD.utils.setCookie(`${siteName}_alertSeen_${index}`, "true");
            },
            false
          );
        }
      }
    }
    initGlobalAlert();
  }

  // src/components/header/js/global.js
  function global_default16(QLD) {
    var searchToggle = document.querySelector(".qld__main-nav__toggle-search");
    var searchForm = document.querySelector(".qld__header__search .qld__search-form");
    var headerSearchEvents = {};
    if (searchForm) {
      searchForm.querySelector(".qld__btn--search").setAttribute("type", "submit");
      searchForm.querySelectorAll(".qld__btn--search, .qld__text-input").forEach((el) => {
        el.removeAttribute("disabled");
      });
      checkHoneypot();
    }
    if (searchToggle) {
      searchToggle.addEventListener("click", toggleHeaderSearch);
    }
    function checkHoneypot() {
      var honeypot = searchForm.querySelector(".qld__text-input--validation");
      honeypot.value = "";
      searchForm.addEventListener("submit", function(event2) {
        if (honeypot.value !== "") {
          event2.preventDefault();
        } else {
          honeypot.removeAttribute("name");
        }
      });
    }
    function toggleHeaderSearch() {
      var targetId = searchToggle.getAttribute("aria-controls");
      var target = document.getElementById(targetId);
      var focustrapTop = target.querySelector(".qld__main-nav__focus-trap-top");
      var focustrapBottom = target.querySelector(".qld__main-nav__focus-trap-bottom");
      var isExpanded = searchToggle.getAttribute("aria-expanded");
      if (isExpanded === "false") {
        searchToggle.setAttribute("aria-expanded", true);
        searchToggle.classList.remove("qld__main-nav__toggle-search--open");
        searchToggle.classList.add("qld__main-nav__toggle-search--close");
        searchToggle.querySelector(".qld__main-nav__toggle-text").innerHTML = "Close";
        target.style.display = "block";
        setTimeout(function() {
          target.classList.add("qld__main-nav__search--open");
          target.querySelector(".qld__text-input").focus();
          headerSearchEvents.background = addEvent(document, "click", function() {
            var event2 = event2 || window.event;
            if (!target.contains(event2.target)) {
              console.log("toggling");
              toggleHeaderSearch();
            }
          });
        }, 0);
        focustrapTop.setAttribute("tabindex", 0);
        focustrapBottom.setAttribute("tabindex", 0);
        headerSearchEvents.focusTop = addEvent(focustrapTop, "focus", function() {
          target.querySelector("button").focus();
        });
        headerSearchEvents.focusBottom = addEvent(focustrapBottom, "focus", function() {
          target.querySelector("input").focus();
        });
        var menuToggle = document.querySelector('button[aria-controls="main-nav"]');
        headerSearchEvents.menu = addEvent(menuToggle, "click", function() {
          toggleHeaderSearch();
        });
        headerSearchEvents.escKey = addEvent(document, "keyup", function() {
          var event2 = event2 || window.event;
          if (event2.keyCode === 27) {
            toggleHeaderSearch();
          }
        });
      } else {
        searchToggle.setAttribute("aria-expanded", false);
        searchToggle.classList.remove("qld__main-nav__toggle-search--close");
        searchToggle.classList.add("qld__main-nav__toggle-search--open");
        searchToggle.querySelector(".qld__main-nav__toggle-text").innerHTML = "Search";
        searchToggle.focus();
        target.classList.remove("qld__main-nav__search--open");
        target.style.display = "none";
        focustrapTop.removeAttribute("tabindex");
        focustrapBottom.removeAttribute("tabindex");
        removeEvent(headerSearchEvents.focusTop);
        removeEvent(headerSearchEvents.focusBottom);
        removeEvent(headerSearchEvents.background);
        removeEvent(headerSearchEvents.menu);
        removeEvent(headerSearchEvents.escKey);
      }
    }
    function addEvent(element, event2, rawHandler) {
      function listenHandler(event3) {
        var handler = rawHandler.apply(this, arguments);
        if (handler === false) {
          event3.stopPropagation();
          event3.preventDefault();
        }
        return handler;
      }
      function attachHandler() {
        var handler = rawHandler.call(element, window.event);
        if (handler === false) {
          window.event.returnValue = false;
          window.event.cancelBubble = true;
        }
        return handler;
      }
      if (element.addEventListener) {
        element.addEventListener(event2, listenHandler, false);
        return {
          element,
          handler: listenHandler,
          event: event2
        };
      } else {
        element.attachEvent("on" + event2, attachHandler);
        return {
          element,
          handler: attachHandler,
          event: event2
        };
      }
    }
    function removeEvent(token) {
      if (token.element.removeEventListener) {
        token.element.removeEventListener(token.event, token.handler);
      } else {
        token.element.detachEvent("on" + token.event, token.handler);
      }
    }
  }

  // src/components/in_page_navigation/js/global.js
  function global_default17(QLD) {
    var inPageNav = {};
    inPageNav.init = function() {
      var navs = document.querySelectorAll(".qld__inpage-nav-links");
      var mainEl = document.querySelector("main.main");
      var isLandingPage = mainEl && mainEl.classList.contains("landing");
      navs.forEach(function(nav) {
        var headingSelector = nav.getAttribute("data-headingType") ? nav.getAttribute("data-headingType") : "h2";
        var pageContent = isLandingPage ? mainEl : document.getElementById("content");
        var headings = pageContent.querySelectorAll(headingSelector + ":not(.qld__inpage-nav-links__heading):not(.banner__heading)");
        var list = nav.querySelector(".qld__link-list");
        list.innerHTML = "";
        if (headings.length === 0) {
          nav.style.display = "none";
        }
        headings.forEach(function(heading) {
          var title = heading.innerText;
          var id = "section__" + title.toLowerCase().replace(/\s+/g, "-");
          heading.setAttribute("id", id);
          heading.setAttribute("tabindex", -1);
          var link = '<li><a href="#' + id + '">' + title + "</a></li>";
          if (list.querySelector('a[href="#' + id + '"') === null) {
            list.insertAdjacentHTML("beforeend", link);
          }
        });
      });
    };
    QLD.inPageNav = inPageNav;
    document.addEventListener("DOMContentLoaded", QLD.inPageNav.init);
  }

  // src/components/left_hand_navigation/js/global.js
  function global_default18(QLD) {
    "use strict";
    window.addEventListener("DOMContentLoaded", function() {
      var itemToggles = document.querySelectorAll(".qld__left-nav__item-toggle");
      itemToggles.forEach(function(button) {
        button.addEventListener("click", function() {
          if (button.className.split(" ").indexOf("qld__accordion--closed") >= 0) {
            button.classList.replace("qld__accordion--closed", "qld__accordion--open");
            button.parentNode.querySelector(".qld__left-nav__item-link").classList.add("qld__left-nav__item-link--open");
            button.parentNode.querySelector(".qld__accordion__body").classList.replace("qld__accordion--closed", "qld__accordion--open");
          } else {
            button.classList.replace("qld__accordion--open", "qld__accordion--closed");
            button.parentNode.querySelector(".qld__left-nav__item-link").classList.remove("qld__left-nav__item-link--open");
            button.parentNode.querySelector(".qld__accordion__body").classList.replace("qld__accordion--open", "qld__accordion--closed");
          }
        });
      });
    });
  }

  // src/components/main_navigation/js/global.js
  function global_default19(QLD) {
    var mobileNav = {};
    var mobileNavEvents = {};
    var mobileNavAnimating = false;
    function toggleClasses(element, state, openingClass, closingClass) {
      if (state === "opening" || state === "open") {
        var oldClass = openingClass || "qld__main-nav__content--closed";
        var newClass = closingClass || "qld__main-nav__content--open";
      } else {
        var oldClass = closingClass || "qld__main-nav__content--open";
        var newClass = openingClass || "qld__main-nav__content--closed";
      }
      removeClass(element, oldClass);
      addClass(element, newClass);
    }
    function removeClass(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else {
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
    }
    function addClass(element, className) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        element.className = element.className + " " + className;
      }
    }
    function addEvent(element, event2, rawHandler) {
      function listenHandler(event3) {
        var handler = rawHandler.apply(this, arguments);
        if (handler === false) {
          event3.stopPropagation();
          event3.preventDefault();
        }
        return handler;
      }
      function attachHandler() {
        var handler = rawHandler.call(element, window.event);
        if (handler === false) {
          window.event.returnValue = false;
          window.event.cancelBubble = true;
        }
        return handler;
      }
      if (element.addEventListener) {
        element.addEventListener(event2, listenHandler, false);
        return {
          element,
          handler: listenHandler,
          event: event2
        };
      } else {
        element.attachEvent("on" + event2, attachHandler);
        return {
          element,
          handler: attachHandler,
          event: event2
        };
      }
    }
    function removeEvent(token) {
      if (token.element.removeEventListener) {
        token.element.removeEventListener(token.event, token.handler);
      } else {
        token.element.detachEvent("on" + token.event, token.handler);
      }
    }
    function getStyle(element, property) {
      return (typeof getComputedStyle !== "undefined" ? getComputedStyle(element, null) : element.currentStyle)[property];
    }
    mobileNav.Toggle = function(element, speed, callbacks) {
      if (mobileNavAnimating) {
        return;
      }
      mobileNavAnimating = true;
      try {
        window.event.cancelBubble = true;
        event.stopPropagation();
      } catch (error) {
      }
      if (typeof callbacks != "object") {
        callbacks = {};
      }
      var targetId = element.getAttribute("aria-controls");
      var target = document.getElementById(targetId);
      var menu = target.querySelector(".qld__main-nav__menu");
      var overlay = target.querySelector(".qld__main-nav__overlay");
      var closeButton = target.querySelector(".qld__main-nav__toggle--close");
      var openButton = document.querySelector(".qld__main-nav__toggle--open");
      var focustrapTop = menu.querySelector(".qld__main-nav__focus-trap-top");
      var focustrapBottom = menu.querySelector(".qld__main-nav__focus-trap-bottom");
      var focusContent = menu.querySelectorAll("a, .qld__main-nav__toggle");
      var closed = target.className.indexOf("qld__main-nav__content--open") === -1;
      var header = document.querySelector(".qld__header");
      var body = document.querySelector(".main");
      var footer = document.querySelector(".qld__footer");
      var menuWidth = menu.offsetWidth;
      var state = closed ? "opening" : "";
      overlay.style.display = "block";
      (function(target2, speed2) {
        QLD.animate.Toggle({
          element: menu,
          property: "right",
          openSize: 0,
          closeSize: -1 * menuWidth,
          speed: speed2 || 250,
          prefunction: function() {
            if (state === "opening") {
              menu.style.display = "block";
              overlay.style.right = 0;
              overlay.style.opacity = 0.5;
              if (typeof callbacks.onOpen === "function") {
                callbacks.onOpen();
              }
            } else {
              overlay.style.opacity = "0";
              if (typeof callbacks.onClose === "function") {
                callbacks.onClose();
              }
            }
          },
          postfunction: function() {
            if (state === "opening") {
              closeButton.focus();
              openButton.setAttribute("aria-expanded", true);
              closeButton.setAttribute("aria-expanded", true);
              focustrapTop.setAttribute("tabindex", 0);
              focustrapBottom.setAttribute("tabindex", 0);
              header.setAttribute("aria-hidden", true);
              body.setAttribute("aria-hidden", true);
              footer.setAttribute("aria-hidden", true);
              mobileNavEvents.focusTop = addEvent(focustrapTop, "focus", function() {
                focusContent[focusContent.length - 1].focus();
              });
              mobileNavEvents.focusBottom = addEvent(focustrapBottom, "focus", function() {
                focusContent[0].focus();
              });
              mobileNavEvents.escKey = addEvent(document, "keyup", function() {
                var event2 = event2 || window.event;
                var overlayOpen = getStyle(overlay, "display");
                if (event2.keyCode === 27 && overlayOpen === "block") {
                  mobileNav.Toggle(element, speed2, callbacks);
                }
              });
              if (typeof callbacks.afterOpen === "function") {
                callbacks.afterOpen();
              }
            } else {
              openButton.focus();
              openButton.setAttribute("aria-expanded", false);
              closeButton.setAttribute("aria-expanded", false);
              focustrapTop.removeAttribute("tabindex");
              focustrapBottom.removeAttribute("tabindex");
              header.removeAttribute("aria-hidden");
              body.removeAttribute("aria-hidden");
              footer.removeAttribute("aria-hidden");
              removeEvent(mobileNavEvents.focusTop);
              removeEvent(mobileNavEvents.focusBottom);
              removeEvent(mobileNavEvents.escKey);
              if (typeof callbacks.afterClose === "function") {
                callbacks.afterClose();
              }
            }
            toggleClasses(target2, state);
            toggleClasses(
              document.body,
              state,
              "qld__main-nav__scroll--unlocked",
              "qld__main-nav__scroll--locked"
            );
            menu.style.display = "";
            menu.style.right = "";
            overlay.style.display = "";
            overlay.style.right = "";
            overlay.style.opacity = "";
            mobileNavAnimating = false;
          }
        });
      })(target, speed);
    };
    window.addEventListener("DOMContentLoaded", function() {
      var navToggles = document.querySelectorAll('*[aria-controls="main-nav"]');
      navToggles.forEach(function(button) {
        button.addEventListener("click", function() {
          mobileNav.Toggle(button);
        });
      });
      var itemToggles = document.querySelectorAll(".qld__main-nav__item-toggle");
      itemToggles.forEach(function(button) {
        button.addEventListener("click", function() {
          if (button.className.split(" ").indexOf("qld__accordion--closed") >= 0) {
            button.parentNode.querySelector(".qld__main-nav__item-link").classList.add("qld__main-nav__item-link--open");
            itemToggles.forEach(function(item) {
              if (item.className.split(" ").indexOf("qld__accordion--open") >= 0) {
                item.parentNode.querySelector(".qld__main-nav__item-link").classList.remove("qld__main-nav__item-link--open");
                QLD.accordion.Close(item);
              }
            });
          } else {
            button.parentNode.querySelector(".qld__main-nav__item-link").classList.remove("qld__main-nav__item-link--open");
          }
          QLD.accordion.Toggle(button);
        });
      });
    });
  }

  // src/components/mega_main_navigation/js/global.js
  function global_default20(QLD) {
    var megaMenu = {
      /**
       * Initialise the mega menu listeners for keyboard navigation
       *
       * @memberof module:megaMenu
       */
      "init": function() {
        var topNavItems = document.querySelectorAll(".qld__main-nav__item-title > a");
        topNavItems.forEach(function(item) {
          item.addEventListener("keydown", handleTopNavKeydown);
          item.addEventListener("focusin", toggleMenu);
          item.addEventListener("focusout", handleTopNavFocusout);
        });
        var menuItems = document.querySelectorAll(".qld__main-nav__menu-sub a");
        menuItems.forEach(function(item) {
          item.addEventListener("keydown", handleMenuKeypress);
        });
      }
    };
    function handleTopNavKeydown(e) {
      var key = e.keyCode;
      if (key === 27 || key == 38) {
        toggleMenu(e);
      }
    }
    function handleTopNavFocusout(e) {
      var link = e.target;
      var navItem = link.closest(".qld__main-nav__item");
      var expanded = navItem.classList.contains("expanded") ? true : false;
      var menu = navItem.querySelector(".qld__main-nav__menu-sub");
      setTimeout(function() {
        var menuHasFocus = menu.contains(document.activeElement) ? true : false;
        if (!menuHasFocus && expanded) {
          toggleMenu(e);
        }
      }, 20);
    }
    function toggleMenu(e) {
      var link = e.target;
      var navItem = link.closest(".qld__main-nav__item");
      var expanded = navItem.classList.contains("expanded") ? true : false;
      if (!expanded) {
        navItem.classList.add("expanded");
        setTimeout(function() {
          document.addEventListener("click", handleBackgroundClick);
        }, 30);
      } else {
        navItem.classList.remove("expanded");
        document.removeEventListener("click", handleBackgroundClick);
      }
    }
    function handleBackgroundClick(e) {
      var target = e.target;
      var nav = document.querySelector(".qld__main-nav__menu-inner");
      if (!nav.contains(target)) {
        document.querySelectorAll(".qld__main-nav__item.expanded").forEach(function(item) {
          item.classList.remove("expanded");
        });
        document.removeEventListener("click", handleBackgroundClick);
      }
    }
    function handleMenuKeypress(e) {
      var link = e.target;
      var key = e.keyCode;
      var navItem = link.closest(".qld__main-nav__item");
      var menu = link.closest(".qld__main-nav__menu-sub");
      if (key === 27 || key == 38) {
        navItem.querySelector(".qld__main-nav__item-title > a").focus();
      }
      if (key === 9 && !e.shiftKey) {
        setTimeout(function() {
          var menuHasFocus = menu.contains(document.activeElement) ? true : false;
          if (!menuHasFocus) {
            toggleMenu(e);
          }
        }, 20);
      }
    }
    window.addEventListener("DOMContentLoaded", function() {
      megaMenu.init();
    });
  }

  // src/components/promo_panel/js/global.js
  function global_default21(QLD) {
    "use strict";
    var initPromoPanel = {};
    initPromoPanel.init = function() {
      if ($(".qld__promo_panel").length > 0) {
        $("section").each(function() {
          if ($(this).hasClass("qld__promo_panel") && !$(this).hasClass("qld__promo_panel--no-image")) {
            var next = $(this).next();
            if ($(this).next().is("data")) {
              next = $(this).next().next();
            }
            if ($(next).hasClass("qld__body--alt")) {
              $(this).addClass("qld__body--alt-half");
            }
            if ($(next).hasClass("qld__body--dark")) {
              $(this).addClass("qld__body--dark-half");
            }
            if ($(next).hasClass("qld__body--alt-dark")) {
              $(this).addClass("qld__body--alt-dark-half");
            }
          }
        });
      }
    };
    QLD.initPromoPanel = initPromoPanel;
    document.addEventListener("DOMContentLoaded", initPromoPanel.init);
  }

  // src/components/tab/js/global.js
  function global_default22(QLD) {
    "use strict";
    var tab = {};
    const SCROLL_AMOUNT = 500;
    function scrollRight(tabList, ScrollRightBtn, ScrollLeftBtn) {
      if (tabList.scrollLeft + SCROLL_AMOUNT >= tabList.scrollWidth - tabList.clientWidth) {
        ScrollRightBtn.style.display = "none";
      }
      tabList.scrollLeft += SCROLL_AMOUNT;
      ScrollLeftBtn.style.display = "block";
    }
    function scrollLeft(tabList, ScrollRightBtn, ScrollLeftBtn) {
      if (tabList.scrollLeft - SCROLL_AMOUNT <= 0) {
        ScrollLeftBtn.style.display = "none";
      }
      tabList.scrollLeft -= SCROLL_AMOUNT;
      ScrollRightBtn.style.display = "block";
    }
    function overflow(TabHeader, tabList, ScrollRightBtn, ScrollLeftBtn) {
      const cusidEle = tabList.querySelectorAll(".qld__tab-button");
      const menuWidth = TabHeader.clientWidth;
      let totalWidth = 0;
      for (let i = 0; i < cusidEle.length; i++) {
        totalWidth += cusidEle[i].offsetWidth;
      }
      if (totalWidth > menuWidth) {
        ScrollRightBtn.style.display = "block";
        tabList.scrollLeft -= SCROLL_AMOUNT;
        ScrollLeftBtn.style.display = "none";
      } else {
        ScrollRightBtn.style.display = "none";
        ScrollLeftBtn.style.display = "none";
      }
    }
    function debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
    tab.init = function() {
      const tabComponents = document.querySelectorAll(".qld__tab-container");
      tabComponents.forEach((tabComponent) => {
        const tabHeadings = tabComponent.querySelectorAll(".qld__tab-button");
        if (tabHeadings.length) {
          tabHeadings[0].setAttribute("tabindex", "0");
          tabHeadings[0].setAttribute("aria-selected", "true");
          const tabContentId = tabHeadings[0].getAttribute("data-tab");
          tabHeadings[0].classList.add("active");
          const tabContent = tabComponent.querySelector(
            `.qld__tab-content[data-tab="${tabContentId}"]`
          );
          if (tabContent.length) {
            tabContent.setAttribute("tabindex", "0");
            tabContent.setAttribute("aria-hidden", "false");
            tabContent.classList.add("active");
          }
        }
        tabHeadings.forEach((tabHeading) => {
          tabHeading.addEventListener("click", (event2) => {
            const tabHeadings2 = tabComponent.querySelectorAll(".qld__tab-button");
            tabHeadings2.forEach((tabHeading2) => {
              tabHeading2.classList.remove("active");
              tabHeading2.setAttribute("aria-selected", "false");
              tabHeading2.setAttribute("tabindex", "-1");
            });
            const tabContents = tabComponent.querySelectorAll(".qld__tab-content");
            tabContents.forEach((tabContent2) => {
              tabContent2.classList.remove("active");
              tabContent2.setAttribute("aria-hidden", "true");
              tabContent2.setAttribute("tabindex", "-1");
            });
            event2.currentTarget.classList.add("active");
            event2.currentTarget.setAttribute("aria-selected", "true");
            event2.currentTarget.setAttribute("tabindex", "0");
            const tabContentId = event2.currentTarget.getAttribute("data-tab");
            const tabContent = tabComponent.querySelector(
              `.qld__tab-content[data-tab="${tabContentId}"]`
            );
            tabContent.classList.add("active");
            tabContent.setAttribute("aria-hidden", "false");
            tabContent.setAttribute("tabindex", "0");
          });
        });
        let currentTabIndex = 0;
        tabHeadings.forEach((tabHeading, index) => {
          tabHeading.addEventListener("keydown", (event2) => {
            if (event2.key === "Enter" || event2.key === "Space") {
              event2.preventDefault();
              event2.currentTarget.click();
            }
            if (event2.key === "ArrowLeft") {
              if (currentTabIndex > 0) {
                event2.preventDefault();
                const previousTabHeading = tabHeadings[index - 1];
                if (previousTabHeading) {
                  currentTabIndex = index - 1;
                  previousTabHeading.focus();
                }
              }
            }
            if (event2.key === "ArrowRight") {
              if (currentTabIndex < tabHeadings.length - 1) {
                event2.preventDefault();
                const nextTabHeading = tabHeadings[index + 1];
                if (nextTabHeading) {
                  currentTabIndex = index + 1;
                  nextTabHeading.focus();
                }
              }
            }
          });
          tabHeading.addEventListener("focus", (event2) => {
            const tabContentId = event2.currentTarget.getAttribute("data-tab");
            const tabContent = tabComponent.querySelector(
              `.qld__tab-content[data-tab="${tabContentId}"]`
            );
            tabContent.classList.add("focused");
          });
          tabHeading.addEventListener("blur", (event2) => {
            const tabContentId = event2.currentTarget.getAttribute("data-tab");
            const tabContent = tabComponent.querySelector(
              `.qld__tab-content[data-tab="${tabContentId}"]`
            );
            tabContent.classList.remove("focused");
          });
        });
      });
      const TabHeaders = document.getElementsByClassName("qld__tab-container__fixed");
      const tabLists = [];
      for (let i = 0; i < TabHeaders.length; i++) {
        const tabs = TabHeaders[i].getElementsByClassName("qld__tabs");
        tabLists.push(tabs[0]);
      }
      for (let i = 0; i < TabHeaders.length; i++) {
        const TabHeader = TabHeaders[i];
        const tabList = tabLists[i];
        const ScrollRightBtn = TabHeader.querySelector(
          ".tab-overflow-nav-button-right"
        );
        const ScrollLeftBtn = TabHeader.querySelector(
          ".tab-overflow-nav-button-left"
        );
        window.addEventListener(
          "load",
          () => overflow(TabHeader, tabList, ScrollRightBtn, ScrollLeftBtn)
        );
        window.addEventListener(
          "resize",
          debounce(
            () => overflow(TabHeader, tabList, ScrollRightBtn, ScrollLeftBtn),
            250
          )
        );
        ScrollRightBtn.addEventListener(
          "click",
          () => scrollRight(tabList, ScrollRightBtn, ScrollLeftBtn)
        );
        ScrollLeftBtn.addEventListener(
          "click",
          () => scrollLeft(tabList, ScrollRightBtn, ScrollLeftBtn)
        );
      }
    };
    QLD.tab = tab;
    window.addEventListener("DOMContentLoaded", function() {
      QLD.tab.init();
    });
  }

  // src/js/globals.rollup.js
  function init(QLD) {
    global_default(QLD);
    global_default2(QLD);
    global_default3(QLD);
    global_default4(QLD);
    global_default5(QLD);
    global_default6(QLD);
    global_default7(QLD);
    global_default8(QLD);
    global_default9(QLD);
    global_default10(QLD);
    global_default11(QLD);
    global_default12(QLD);
    global_default13(QLD);
    global_default14(QLD);
    global_default15(QLD);
    global_default16(QLD);
    global_default17(QLD);
    global_default18(QLD);
    global_default19(QLD);
    global_default20(QLD);
    global_default21(QLD);
    global_default22(QLD);
  }

  // src/js/main.js
  var import_jquery2 = __toESM(require_jquery(), 1);
  var import_jquery_validation = __toESM(require_jquery_validate(), 1);
  if (!window.jQuery || window.$) {
    window.jQuery = window.$ = import_jquery2.default;
  }
  if (!window.QLD) {
    QLD = QLD ? QLD : {};
    window.QLD = QLD;
    init(QLD);
    console.log("QLD globals loaded");
  } else {
    console.log("QLD globals already loaded");
  }
  var QLD;
})();
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

jquery-validation/dist/jquery.validate.js:
  (*!
   * jQuery Validation Plugin v1.21.0
   *
   * https://jqueryvalidation.org/
   *
   * Copyright (c) 2024 Jörn Zaefferer
   * Released under the MIT license
   *)

datatables.net/js/dataTables.mjs:
  (*! DataTables 2.2.0
   * © SpryMedia Ltd - datatables.net/license
   *)
*/
//# sourceMappingURL=main.js.map
