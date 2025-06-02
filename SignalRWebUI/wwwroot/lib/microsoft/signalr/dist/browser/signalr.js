(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["signalR"] = factory();
    else
        root["signalR"] = factory();
})(self, () => {
    return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                        /******/
}
                    /******/
}
                /******/
};
            /******/
})();
/******/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function () {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
                    /******/
} catch (e) {
/******/ 				if (typeof window === 'object') return window;
                    /******/
}
                /******/
})();
            /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
            /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
                /******/
};
            /******/
})();
        /******/
        /************************************************************************/
        var __webpack_exports__ = {};
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, {
            "AbortError": () => (/* reexport */ AbortError),
            "DefaultHttpClient": () => (/* reexport */ DefaultHttpClient),
            "HttpClient": () => (/* reexport */ HttpClient),
            "HttpError": () => (/* reexport */ HttpError),
            "HttpResponse": () => (/* reexport */ HttpResponse),
            "HttpTransportType": () => (/* reexport */ HttpTransportType),
            "HubConnection": () => (/* reexport */ HubConnection),
            "HubConnectionBuilder": () => (/* reexport */ HubConnectionBuilder),
            "HubConnectionState": () => (/* reexport */ HubConnectionState),
            "JsonHubProtocol": () => (/* reexport */ JsonHubProtocol),
            "LogLevel": () => (/* reexport */ LogLevel),
            "MessageType": () => (/* reexport */ MessageType),
            "NullLogger": () => (/* reexport */ NullLogger),
            "Subject": () => (/* reexport */ Subject),
            "TimeoutError": () => (/* reexport */ TimeoutError),
            "TransferFormat": () => (/* reexport */ TransferFormat),
            "VERSION": () => (/* reexport */ VERSION)
        });

        ;// CONCATENATED MODULE: ./src/Errors.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.
        /** Error thrown when an HTTP request fails. */
        class HttpError extends Error {
            /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
             *
             * @param {string} errorMessage A descriptive error message.
             * @param {number} statusCode The HTTP status code represented by this error.
             */
            constructor(errorMessage, statusCode) {
                const trueProto = new.target.prototype;
                super(`${errorMessage}: Status code '${statusCode}'`);
                this.statusCode = statusCode;
                // Workaround issue in Typescript compiler
                // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                this.__proto__ = trueProto;
            }
        }
        /** Error thrown when a timeout elapses. */
        class TimeoutError extends Error {
            /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
             *
             * @param {string} errorMessage A descriptive error message.
             */
            constructor(errorMessage = "A timeout occurred.") {
                const trueProto = new.target.prototype;
                super(errorMessage);
                // Workaround issue in Typescript compiler
                // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                this.__proto__ = trueProto;
            }
        }
        /** Error thrown when an action is aborted. */
        class AbortError extends Error {
            /** Constructs a new instance of {@link AbortError}.
             *
             * @param {string} errorMessage A descriptive error message.
             */
            constructor(errorMessage = "An abort occurred.") {
                const trueProto = new.target.prototype;
                super(errorMessage);
                // Workaround issue in Typescript compiler
                // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                this.__proto__ = trueProto;
            }
        }
        /** Error thrown when the selected transport is unsupported by the browser. */
        /** @private */
        class UnsupportedTransportError extends Error {
            /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
             *
             * @param {string} message A descriptive error message.
             * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
             */
            constructor(message, transport) {
                const trueProto = new.target.prototype;
                super(message);
                this.transport = transport;
                this.errorType = 'UnsupportedTransportError';
                // Workaround issue in Typescript compiler
                // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                this.__proto__ = trueProto;
            }
        }
        /** Error thrown when the selected transport is disabled by the browser. */
        /** @private */
        class DisabledTransportError extends Error {
            /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
             *
             * @param {string} message A descriptive error message.
             * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
             */
            constructor(message, transport) {
                const trueProto = new.target.prototype;
                super(message);
                this.transport = transport;
                this.errorType = 'DisabledTransportError';
                // Workaround issue in Typescript compiler
                // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                this.__proto__ = trueProto;
            }
        }
        /** Error thrown when the selected transport cannot be started. */
        /** @private */
        class FailedToStartTransportError extends Error {
            /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
             *
             * @param {string} message A descriptive error message.
             * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
             */
            constructor(message, transport) {
                const trueProto = new.target.prototype;
                super(message);
                this.transport = transport;
                this.errorType = 'FailedToStartTransportError';
                // Workaround issue in Typescript compiler
                // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                this.__proto__ = trueProto;
            }
        }
        /** Error thrown when the negotiation with the server failed to complete. */
        /** @private */
        class FailedToNegotiateWithServerError extends Error {
            /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
             *
             * @param {string} message A descriptive error message.
             */
            constructor(message) {
                const trueProto = new.target.prototype;
                super(message);
                this.errorType = 'FailedToNegotiateWithServerError';
                // Workaround issue in Typescript compiler
                // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                this.__proto__ = trueProto;
            }
        }
        /** Error thrown when multiple errors have occurred. */
        /** @private */
        class AggregateErrors extends Error {
            /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
             *
             * @param {string} message A descriptive error message.
             * @param {Error[]} innerErrors The collection of errors this error is aggregating.
             */
            constructor(message, innerErrors) {
                const trueProto = new.target.prototype;
                super(message);
                this.innerErrors = innerErrors;
                // Workaround issue in Typescript compiler
                // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
                this.__proto__ = trueProto;
            }
        }

        ;// CONCATENATED MODULE: ./src/HttpClient.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.
        /** Represents an HTTP response. */
        class HttpResponse {
            constructor(statusCode, statusText, content) {
                this.statusCode = statusCode;
                this.statusText = statusText;
                this.content = content;
            }
        }
        /** Abstraction over an HTTP client.
         *
         * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
         */
        class HttpClient {
            get(url, options) {
                return this.send({
                    ...options,
                    method: "GET",
                    url,
                });
            }
            post(url, options) {
                return this.send({
                    ...options,
                    method: "POST",
                    url,
                });
            }
            delete(url, options) {
                return this.send({
                    ...options,
                    method: "DELETE",
                    url,
                });
            }
            /** Gets all cookies that apply to the specified URL.
             *
             * @param url The URL that the cookies are valid for.
             * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
             */
            // @ts-ignore
            getCookieString(url) {
                return "";
            }
        }

        ;// CONCATENATED MODULE: ./src/ILogger.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.
        // These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
        /** Indicates the severity of a log message.
         *
         * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
         */
        var LogLevel;
        (function (LogLevel) {
            /** Log level for very low severity diagnostic messages. */
            LogLevel[LogLevel["Trace"] = 0] = "Trace";
            /** Log level for low severity diagnostic messages. */
            LogLevel[LogLevel["Debug"] = 1] = "Debug";
            /** Log level for informational diagnostic messages. */
            LogLevel[LogLevel["Information"] = 2] = "Information";
            /** Log level for diagnostic messages that indicate a non-fatal problem. */
            LogLevel[LogLevel["Warning"] = 3] = "Warning";
            /** Log level for diagnostic messages that indicate a failure in the current operation. */
            LogLevel[LogLevel["Error"] = 4] = "Error";
            /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
            LogLevel[LogLevel["Critical"] = 5] = "Critical";
            /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
            LogLevel[LogLevel["None"] = 6] = "None";
        })(LogLevel || (LogLevel = {}));

        ;// CONCATENATED MODULE: ./src/Loggers.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.
        /** A logger that does nothing when log messages are sent to it. */
        class NullLogger {
            constructor() { }
            /** @inheritDoc */
            // eslint-disable-next-line
            log(_logLevel, _message) {
            }
        }
        /** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
        NullLogger.instance = new NullLogger();

        ;// CONCATENATED MODULE: ./src/Utils.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.


        // Version token that will be replaced by the prepack command
        /** The version of the SignalR client. */
        const VERSION = "8.0.7";
        /** @private */
        class Arg {
            static isRequired(val, name) {
                if (val === null || val === undefined) {
                    throw new Error(`The '${name}' argument is required.`);
                }
            }
            static isNotEmpty(val, name) {
                if (!val || val.match(/^\s*$/)) {
                    throw new Error(`The '${name}' argument should not be empty.`);
                }
            }
            static isIn(val, values, name) {
                // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
                if (!(val in values)) {
                    throw new Error(`Unknown ${name} value: ${val}.`);
                }
            }
        }
        /** @private */
        class Platform {
            // react-native has a window but no document so we should check both
            static get isBrowser() {
                return !Platform.isNode && typeof window === "object" && typeof window.document === "object";
            }
            // WebWorkers don't have a window object so the isBrowser check would fail
            static get isWebWorker() {
                return !Platform.isNode && typeof self === "object" && "importScripts" in self;
            }
            // react-native has a window but no document
            static get isReactNative() {
                return !Platform.isNode && typeof window === "object" && typeof window.document === "undefined";
            }
            // Node apps shouldn't have a window object, but WebWorkers don't either
            // so we need to check for both WebWorker and window
            static get isNode() {
                return typeof process !== "undefined" && process.release && process.release.name === "node";
            }
        }
        /** @private */
        function getDataDetail(data, includeContent) {
            let detail = "";
            if (isArrayBuffer(data)) {
                detail = `Binary data of length ${data.byteLength}`;
                if (includeContent) {
                    detail += `. Content: '${formatArrayBuffer(data)}'`;
                }
            }
            else if (typeof data === "string") {
                detail = `String data of length ${data.length}`;
                if (includeContent) {
                    detail += `. Content: '${data}'`;
                }
            }
            return detail;
        }
        /** @private */
        function formatArrayBuffer(data) {
            const view = new Uint8Array(data);
            // Uint8Array.map only supports returning another Uint8Array?
            let str = "";
            view.forEach((num) => {
                const pad = num < 16 ? "0" : "";
                str += `0x${pad}${num.toString(16)} `;
            });
            // Trim of trailing space.
            return str.substr(0, str.length - 1);
        }
        // Also in signalr-protocol-msgpack/Utils.ts
        /** @private */
        function isArrayBuffer(val) {
            return val && typeof ArrayBuffer !== "undefined" &&
                (val instanceof ArrayBuffer ||
                    // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
                    (val.constructor && val.constructor.name === "ArrayBuffer"));
        }
        /** @private */
        async function sendMessage(logger, transportName, httpClient, url, content, options) {
            const headers = {};
            const [name, value] = getUserAgentHeader();
            headers[name] = value;
            logger.log(LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
            const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
            const response = await httpClient.post(url, {
                content,
                headers: { ...headers, ...options.headers },
                responseType,
                timeout: options.timeout,
                withCredentials: options.withCredentials,
            });
            logger.log(LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
        }
        /** @private */
        function createLogger(logger) {
            if (logger === undefined) {
                return new ConsoleLogger(LogLevel.Information);
            }
            if (logger === null) {
                return NullLogger.instance;
            }
            if (logger.log !== undefined) {
                return logger;
            }
            return new ConsoleLogger(logger);
        }
        /** @private */
        class SubjectSubscription {
            constructor(subject, observer) {
                this._subject = subject;
                this._observer = observer;
            }
            dispose() {
                const index = this._subject.observers.indexOf(this._observer);
                if (index > -1) {
                    this._subject.observers.splice(index, 1);
                }
                if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
                    this._subject.cancelCallback().catch((_) => { });
                }
            }
        }
        /** @private */
        class ConsoleLogger {
            constructor(minimumLogLevel) {
                this._minLevel = minimumLogLevel;
                this.out = console;
            }
            log(logLevel, message) {
                if (logLevel >= this._minLevel) {
                    const msg = `[${new Date().toISOString()}] ${LogLevel[logLevel]}: ${message}`;
                    switch (logLevel) {
                        case LogLevel.Critical:
                        case LogLevel.Error:
                            this.out.error(msg);
                            break;
                        case LogLevel.Warning:
                            this.out.warn(msg);
                            break;
                        case LogLevel.Information:
                            this.out.info(msg);
                            break;
                        default:
                            // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                            this.out.log(msg);
                            break;
                    }
                }
            }
        }
        /** @private */
        function getUserAgentHeader() {
            let userAgentHeaderName = "X-SignalR-User-Agent";
            if (Platform.isNode) {
                userAgentHeaderName = "User-Agent";
            }
            return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
        }
        /** @private */
        function constructUserAgent(version, os, runtime, runtimeVersion) {
            // Microsoft SignalR/[Version] ([Detailed Version]; [Operating System]; [Runtime]; [Runtime Version])
            let userAgent = "Microsoft SignalR/";
            const majorAndMinor = version.split(".");
            userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
            userAgent += ` (${version}; `;
            if (os && os !== "") {
                userAgent += `${os}; `;
            }
            else {
                userAgent += "Unknown OS; ";
            }
            userAgent += `${runtime}`;
            if (runtimeVersion) {
                userAgent += `; ${runtimeVersion}`;
            }
            else {
                userAgent += "; Unknown Runtime Version";
            }
            userAgent += ")";
            return userAgent;
        }
// eslint-disable-next-line spaced-comment
/*#__PURE__*/ function getOsName() {
            if (Platform.isNode) {
                switch (process.platform) {
                    case "win32":
                        return "Windows NT";
                    case "darwin":
                        return "macOS";
                    case "linux":
                        return "Linux";
                    default:
                        return process.platform;
                }
            }
            else {
                return "";
            }
        }
// eslint-disable-next-line spaced-comment
/*#__PURE__*/ function getRuntimeVersion() {
            if (Platform.isNode) {
                return process.versions.node;
            }
            return undefined;
        }
        function getRuntime() {
            if (Platform.isNode) {
                return "NodeJS";
            }
            else {
                return "Browser";
            }
        }
        /** @private */
        function getErrorString(e) {
            if (e.stack) {
                return e.stack;
            }
            else if (e.message) {
                return e.message;
            }
            return `${e}`;
        }
        /** @private */
        function getGlobalThis() {
            // globalThis is semi-new and not available in Node until v12
            if (typeof globalThis !== "undefined") {
                return globalThis;
            }
            if (typeof self !== "undefined") {
                return self;
            }
            if (typeof window !== "undefined") {
                return window;
            }
            if (typeof __webpack_require__.g !== "undefined") {
                return __webpack_require__.g;
            }
            throw new Error("could not find global");
        }

        ;// CONCATENATED MODULE: ./src/FetchHttpClient.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.




        class FetchHttpClient extends HttpClient {
            constructor(logger) {
                super();
                this._logger = logger;
                // Node added a fetch implementation to the global scope starting in v18.
                // We need to add a cookie jar in node to be able to share cookies with WebSocket
                if (typeof fetch === "undefined" || Platform.isNode) {
                    // In order to ignore the dynamic require in webpack builds we need to do this magic
                    // @ts-ignore: TS doesn't know about these names
                    const requireFunc = true ? require : 0;
                    // Cookies aren't automatically handled in Node so we need to add a CookieJar to preserve cookies across requests
                    this._jar = new (requireFunc("tough-cookie")).CookieJar();
                    if (typeof fetch === "undefined") {
                        this._fetchType = requireFunc("node-fetch");
                    }
                    else {
                        // Use fetch from Node if available
                        this._fetchType = fetch;
                    }
                    // node-fetch doesn't have a nice API for getting and setting cookies
                    // fetch-cookie will wrap a fetch implementation with a default CookieJar or a provided one
                    this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
                }
                else {
                    this._fetchType = fetch.bind(getGlobalThis());
                }
                if (typeof AbortController === "undefined") {
                    // In order to ignore the dynamic require in webpack builds we need to do this magic
                    // @ts-ignore: TS doesn't know about these names
                    const requireFunc = true ? require : 0;
                    // Node needs EventListener methods on AbortController which our custom polyfill doesn't provide
                    this._abortControllerType = requireFunc("abort-controller");
                }
                else {
                    this._abortControllerType = AbortController;
                }
            }
            /** @inheritDoc */
            async send(request) {
                // Check that abort was not signaled before calling send
                if (request.abortSignal && request.abortSignal.aborted) {
                    throw new AbortError();
                }
                if (!request.method) {
                    throw new Error("No method defined.");
                }
                if (!request.url) {
                    throw new Error("No url defined.");
                }
                const abortController = new this._abortControllerType();
                let error;
                // Hook our abortSignal into the abort controller
                if (request.abortSignal) {
                    request.abortSignal.onabort = () => {
                        abortController.abort();
                        error = new AbortError();
                    };
                }
                // If a timeout has been passed in, setup a timeout to call abort
                // Type needs to be any to fit window.setTimeout and NodeJS.setTimeout
                let timeoutId = null;
                if (request.timeout) {
                    const msTimeout = request.timeout;
                    timeoutId = setTimeout(() => {
                        abortController.abort();
                        this._logger.log(LogLevel.Warning, `Timeout from HTTP request.`);
                        error = new TimeoutError();
                    }, msTimeout);
                }
                if (request.content === "") {
                    request.content = undefined;
                }
                if (request.content) {
                    // Explicitly setting the Content-Type header for React Native on Android platform.
                    request.headers = request.headers || {};
                    if (isArrayBuffer(request.content)) {
                        request.headers["Content-Type"] = "application/octet-stream";
                    }
                    else {
                        request.headers["Content-Type"] = "text/plain;charset=UTF-8";
                    }
                }
                let response;
                try {
                    response = await this._fetchType(request.url, {
                        body: request.content,
                        cache: "no-cache",
                        credentials: request.withCredentials === true ? "include" : "same-origin",
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            ...request.headers,
                        },
                        method: request.method,
                        mode: "cors",
                        redirect: "follow",
                        signal: abortController.signal,
                    });
                }
                catch (e) {
                    if (error) {
                        throw error;
                    }
                    this._logger.log(LogLevel.Warning, `Error from HTTP request. ${e}.`);
                    throw e;
                }
                finally {
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                    if (request.abortSignal) {
                        request.abortSignal.onabort = null;
                    }
                }
                if (!response.ok) {
                    const errorMessage = await deserializeContent(response, "text");
                    throw new HttpError(errorMessage || response.statusText, response.status);
                }
                const content = deserializeContent(response, request.responseType);
                const payload = await content;
                return new HttpResponse(response.status, response.statusText, payload);
            }
            getCookieString(url) {
                let cookies = "";
                if (Platform.isNode && this._jar) {
                    // @ts-ignore: unused variable
                    this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
                }
                return cookies;
            }
        }
        function deserializeContent(response, responseType) {
            let content;
            switch (responseType) {
                case "arraybuffer":
                    content = response.arrayBuffer();
                    break;
                case "text":
                    content = response.text();
                    break;
                case "blob":
                case "document":
                case "json":
                    throw new Error(`${responseType} is not supported.`);
                default:
                    content = response.text();
                    break;
            }
            return content;
        }

        ;// CONCATENATED MODULE: ./src/XhrHttpClient.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.




        class XhrHttpClient extends HttpClient {
            constructor(logger) {
                super();
                this._logger = logger;
            }
            /** @inheritDoc */
            send(request) {
                // Check that abort was not signaled before calling send
                if (request.abortSignal && request.abortSignal.aborted) {
                    return Promise.reject(new AbortError());
                }
                if (!request.method) {
                    return Promise.reject(new Error("No method defined."));
                }
                if (!request.url) {
                    return Promise.reject(new Error("No url defined."));
                }
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open(request.method, request.url, true);
                    xhr.withCredentials = request.withCredentials === undefined ? true : request.withCredentials;
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    if (request.content === "") {
                        request.content = undefined;
                    }
                    if (request.content) {
                        // Explicitly setting the Content-Type header for React Native on Android platform.
                        if (isArrayBuffer(request.content)) {
                            xhr.setRequestHeader("Content-Type", "application/octet-stream");
                        }
                        else {
                            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                        }
                    }
                    const headers = request.headers;
                    if (headers) {
                        Object.keys(headers)
                            .forEach((header) => {
                                xhr.setRequestHeader(header, headers[header]);
                            });
                    }
                    if (request.responseType) {
                        xhr.responseType = request.responseType;
                    }
                    if (request.abortSignal) {
                        request.abortSignal.onabort = () => {
                            xhr.abort();
                            reject(new AbortError());
                        };
                    }
                    if (request.timeout) {
                        xhr.timeout = request.timeout;
                    }
                    xhr.onload = () => {
                        if (request.abortSignal) {
                            request.abortSignal.onabort = null;
                        }
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(new HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                        }
                        else {
                            reject(new HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
                        }
                    };
                    xhr.onerror = () => {
                        this._logger.log(LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
                        reject(new HttpError(xhr.statusText, xhr.status));
                    };
                    xhr.ontimeout = () => {
                        this._logger.log(LogLevel.Warning, `Timeout from HTTP request.`);
                        reject(new TimeoutError());
                    };
                    xhr.send(request.content);
                });
            }
        }

        ;// CONCATENATED MODULE: ./src/DefaultHttpClient.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.





        /** Default implementation of {@link @microsoft/signalr.HttpClient}. */
        class DefaultHttpClient extends HttpClient {
            /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
            constructor(logger) {
                super();
                if (typeof fetch !== "undefined" || Platform.isNode) {
                    this._httpClient = new FetchHttpClient(logger);
                }
                else if (typeof XMLHttpRequest !== "undefined") {
                    this._httpClient = new XhrHttpClient(logger);
                }
                else {
                    throw new Error("No usable HttpClient found.");
                }
            }
            /** @inheritDoc */
            send(request) {
                // Check that abort was not signaled before calling send
                if (request.abortSignal && request.abortSignal.aborted) {
                    return Promise.reject(new AbortError());
                }
                if (!request.method) {
                    return Promise.reject(new Error("No method defined."));
                }
                if (!request.url) {
                    return Promise.reject(new Error("No url defined."));
                }
                return this._httpClient.send(request);
            }
            getCookieString(url) {
                return this._httpClient.getCookieString(url);
            }
        }

        ;// CONCATENATED MODULE: ./src/TextMessageFormat.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.
        // Not exported from index
        /** @private */
        class TextMessageFormat {
            static write(output) {
                return `${output}${TextMessageFormat.RecordSeparator}`;
            }
            static parse(input) {
                if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
                    throw new Error("Message is incomplete.");
                }
                const messages = input.split(TextMessageFormat.RecordSeparator);
                messages.pop();
                return messages;
            }
        }
        TextMessageFormat.RecordSeparatorCode = 0x1e;
        TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);

        ;// CONCATENATED MODULE: ./src/HandshakeProtocol.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.


        /** @private */
        class HandshakeProtocol {
            // Handshake request is always JSON
            writeHandshakeRequest(handshakeRequest) {
                return TextMessageFormat.write(JSON.stringify(handshakeRequest));
            }
            parseHandshakeResponse(data) {
                let messageData;
                let remainingData;
                if (isArrayBuffer(data)) {
                    // Format is binary but still need to read JSON text from handshake response
                    const binaryData = new Uint8Array(data);
                    const separatorIndex = binaryData.indexOf(TextMessageFormat.RecordSeparatorCode);
                    if (separatorIndex === -1) {
                        throw new Error("Message is incomplete.");
                    }
                    // content before separator is handshake response
                    // optional content after is additional messages
                    const responseLength = separatorIndex + 1;
                    messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
                    remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
                }
                else {
                    const textData = data;
                    const separatorIndex = textData.indexOf(TextMessageFormat.RecordSeparator);
                    if (separatorIndex === -1) {
                        throw new Error("Message is incomplete.");
                    }
                    // content before separator is handshake response
                    // optional content after is additional messages
                    const responseLength = separatorIndex + 1;
                    messageData = textData.substring(0, responseLength);
                    remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
                }
                // At this point we should have just the single handshake message
                const messages = TextMessageFormat.parse(messageData);
                const response = JSON.parse(messages[0]);
                if (response.type) {
                    throw new Error("Expected a handshake response from the server.");
                }
                const responseMessage = response;
                // multiple messages could have arrived with handshake
                // return additional data to be parsed as usual, or null if all parsed
                return [remainingData, responseMessage];
            }
        }

        ;// CONCATENATED MODULE: ./src/IHubProtocol.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.
        /** Defines the type of a Hub Message. */
        var MessageType;
        (function (MessageType) {
            /** Indicates the message is an Invocation message and implements the {@link @microsoft/signalr.InvocationMessage} interface. */
            MessageType[MessageType["Invocation"] = 1] = "Invocation";
            /** Indicates the message is a StreamItem message and implements the {@link @microsoft/signalr.StreamItemMessage} interface. */
            MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
            /** Indicates the message is a Completion message and implements the {@link @microsoft/signalr.CompletionMessage} interface. */
            MessageType[MessageType["Completion"] = 3] = "Completion";
            /** Indicates the message is a Stream Invocation message and implements the {@link @microsoft/signalr.StreamInvocationMessage} interface. */
            MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
            /** Indicates the message is a Cancel Invocation message and implements the {@link @microsoft/signalr.CancelInvocationMessage} interface. */
            MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
            /** Indicates the message is a Ping message and implements the {@link @microsoft/signalr.PingMessage} interface. */
            MessageType[MessageType["Ping"] = 6] = "Ping";
            /** Indicates the message is a Close message and implements the {@link @microsoft/signalr.CloseMessage} interface. */
            MessageType[MessageType["Close"] = 7] = "Close";
            MessageType[MessageType["Ack"] = 8] = "Ack";
            MessageType[MessageType["Sequence"] = 9] = "Sequence";
        })(MessageType || (MessageType = {}));

        ;// CONCATENATED MODULE: ./src/Subject.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.

        /** Stream implementation to stream items to the server. */
        class Subject {
            constructor() {
                this.observers = [];
            }
            next(item) {
                for (const observer of this.observers) {
                    observer.next(item);
                }
            }
            error(err) {
                for (const observer of this.observers) {
                    if (observer.error) {
                        observer.error(err);
                    }
                }
            }
            complete() {
                for (const observer of this.observers) {
                    if (observer.complete) {
                        observer.complete();
                    }
                }
            }
            subscribe(observer) {
                this.observers.push(observer);
                return new SubjectSubscription(this, observer);
            }
        }

        ;// CONCATENATED MODULE: ./src/MessageBuffer.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.


        /** @private */
        class MessageBuffer {
            constructor(protocol, connection, bufferSize) {
                this._bufferSize = 100000;
                this._messages = [];
                this._totalMessageCount = 0;
                this._waitForSequenceMessage = false;
                // Message IDs start at 1 and always increment by 1
                this._nextReceivingSequenceId = 1;
                this._latestReceivedSequenceId = 0;
                this._bufferedByteCount = 0;
                this._reconnectInProgress = false;
                this._protocol = protocol;
                this._connection = connection;
                this._bufferSize = bufferSize;
            }
            async _send(message) {
                const serializedMessage = this._protocol.writeMessage(message);
                let backpressurePromise = Promise.resolve();
                // Only count invocation messages. Acks, pings, etc. don't need to be resent on reconnect
                if (this._isInvocationMessage(message)) {
                    this._totalMessageCount++;
                    let backpressurePromiseResolver = () => { };
                    let backpressurePromiseRejector = () => { };
                    if (isArrayBuffer(serializedMessage)) {
                        this._bufferedByteCount += serializedMessage.byteLength;
                    }
                    else {
                        this._bufferedByteCount += serializedMessage.length;
                    }
                    if (this._bufferedByteCount >= this._bufferSize) {
                        backpressurePromise = new Promise((resolve, reject) => {
                            backpressurePromiseResolver = resolve;
                            backpressurePromiseRejector = reject;
                        });
                    }
                    this._messages.push(new BufferedItem(serializedMessage, this._totalMessageCount, backpressurePromiseResolver, backpressurePromiseRejector));
                }
                try {
                    // If this is set it means we are reconnecting or resending
                    // We don't want to send on a disconnected connection
                    // And we don't want to send if resend is running since that would mean sending
                    // this message twice
                    if (!this._reconnectInProgress) {
                        await this._connection.send(serializedMessage);
                    }
                }
                catch {
                    this._disconnected();
                }
                await backpressurePromise;
            }
            _ack(ackMessage) {
                let newestAckedMessage = -1;
                // Find index of newest message being acked
                for (let index = 0; index < this._messages.length; index++) {
                    const element = this._messages[index];
                    if (element._id <= ackMessage.sequenceId) {
                        newestAckedMessage = index;
                        if (isArrayBuffer(element._message)) {
                            this._bufferedByteCount -= element._message.byteLength;
                        }
                        else {
                            this._bufferedByteCount -= element._message.length;
                        }
                        // resolve items that have already been sent and acked
                        element._resolver();
                    }
                    else if (this._bufferedByteCount < this._bufferSize) {
                        // resolve items that now fall under the buffer limit but haven't been acked
                        element._resolver();
                    }
                    else {
                        break;
                    }
                }
                if (newestAckedMessage !== -1) {
                    // We're removing everything including the message pointed to, so add 1
                    this._messages = this._messages.slice(newestAckedMessage + 1);
                }
            }
            _shouldProcessMessage(message) {
                if (this._waitForSequenceMessage) {
                    if (message.type !== MessageType.Sequence) {
                        return false;
                    }
                    else {
                        this._waitForSequenceMessage = false;
                        return true;
                    }
                }
                // No special processing for acks, pings, etc.
                if (!this._isInvocationMessage(message)) {
                    return true;
                }
                const currentId = this._nextReceivingSequenceId;
                this._nextReceivingSequenceId++;
                if (currentId <= this._latestReceivedSequenceId) {
                    if (currentId === this._latestReceivedSequenceId) {
                        // Should only hit this if we just reconnected and the server is sending
                        // Messages it has buffered, which would mean it hasn't seen an Ack for these messages
                        this._ackTimer();
                    }
                    // Ignore, this is a duplicate message
                    return false;
                }
                this._latestReceivedSequenceId = currentId;
                // Only start the timer for sending an Ack message when we have a message to ack. This also conveniently solves
                // timer throttling by not having a recursive timer, and by starting the timer via a network call (recv)
                this._ackTimer();
                return true;
            }
            _resetSequence(message) {
                if (message.sequenceId > this._nextReceivingSequenceId) {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
                    return;
                }
                this._nextReceivingSequenceId = message.sequenceId;
            }
            _disconnected() {
                this._reconnectInProgress = true;
                this._waitForSequenceMessage = true;
            }
            async _resend() {
                const sequenceId = this._messages.length !== 0
                    ? this._messages[0]._id
                    : this._totalMessageCount + 1;
                await this._connection.send(this._protocol.writeMessage({ type: MessageType.Sequence, sequenceId }));
                // Get a local variable to the _messages, just in case messages are acked while resending
                // Which would slice the _messages array (which creates a new copy)
                const messages = this._messages;
                for (const element of messages) {
                    await this._connection.send(element._message);
                }
                this._reconnectInProgress = false;
            }
            _dispose(error) {
                error !== null && error !== void 0 ? error : (error = new Error("Unable to reconnect to server."));
                // Unblock backpressure if any
                for (const element of this._messages) {
                    element._rejector(error);
                }
            }
            _isInvocationMessage(message) {
                // There is no way to check if something implements an interface.
                // So we individually check the messages in a switch statement.
                // To make sure we don't miss any message types we rely on the compiler
                // seeing the function returns a value and it will do the
                // exhaustive check for us on the switch statement, since we don't use 'case default'
                switch (message.type) {
                    case MessageType.Invocation:
                    case MessageType.StreamItem:
                    case MessageType.Completion:
                    case MessageType.StreamInvocation:
                    case MessageType.CancelInvocation:
                        return true;
                    case MessageType.Close:
                    case MessageType.Sequence:
                    case MessageType.Ping:
                    case MessageType.Ack:
                        return false;
                }
            }
            _ackTimer() {
                if (this._ackTimerHandle === undefined) {
                    this._ackTimerHandle = setTimeout(async () => {
                        try {
                            if (!this._reconnectInProgress) {
                                await this._connection.send(this._protocol.writeMessage({ type: MessageType.Ack, sequenceId: this._latestReceivedSequenceId }));
                            }
                            // Ignore errors, that means the connection is closed and we don't care about the Ack message anymore.
                        }
                        catch { }
                        clearTimeout(this._ackTimerHandle);
                        this._ackTimerHandle = undefined;
                        // 1 second delay so we don't spam Ack messages if there are many messages being received at once.
                    }, 1000);
                }
            }
        }
        class BufferedItem {
            constructor(message, id, resolver, rejector) {
                this._message = message;
                this._id = id;
                this._resolver = resolver;
                this._rejector = rejector;
            }
        }

        ;// CONCATENATED MODULE: ./src/HubConnection.ts
        // Licensed to the .NET Foundation under one or more agreements.
        // The .NET Foundation licenses this file to you under the MIT license.







        const DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
        const DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
        const DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE = 100000;
        /** Describes the current state of the {@link HubConnection} to the server. */
        var HubConnectionState;
        (function (HubConnectionState) {
            /** The hub connection is disconnected. */
            HubConnectionState["Disconnected"] = "Disconnected";
            /** The hub connection is connecting. */
            HubConnectionState["Connecting"] = "Connecting";
            /** The hub connection is connected. */
            HubConnectionState["Connected"] = "Connected";
            /** The hub connection is disconnecting. */
            HubConnectionState["Disconnecting"] = "Disconnecting";
            /** The hub connection is reconnecting. */
            HubConnectionState["Reconnecting"] = "Reconnecting";
        })(HubConnectionState || (HubConnectionState = {}));
        /** Represents a connection to a SignalR Hub. */
        class HubConnection {
            /** @internal */
            // Using a public static factory method means we can have a private constructor and an _internal_
            // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
            // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
            // public parameter-less constructor.
            static create(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
                return new HubConnection(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize);
            }
            constructor(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
                this._nextKeepAlive = 0;
                this._freezeEventListener = () => {
                    this._logger.log(LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
                };
                Arg.isRequired(connection, "connection");
                Arg.isRequired(logger, "logger");
                Arg.isRequired(protocol, "protocol");
                this.serverTimeoutInMilliseconds = serverTimeoutInMilliseconds !== null && serverTimeoutInMilliseconds !== void 0 ? serverTimeoutInMilliseconds : DEFAULT_TIMEOUT_IN_MS;
                this.keepAliveIntervalInMilliseconds = keepAliveIntervalInMilliseconds !== null && keepAliveIntervalInMilliseconds !== void 0 ? keepAliveIntervalInMilliseconds : DEFAULT_PING_INTERVAL_IN_MS;
                this._statefulReconnectBufferSize = statefulReconnectBufferSize !== null && statefulReconnectBufferSize !== void 0 ? statefulReconnectBufferSize : DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE;
                this._logger = logger;
                this._protocol = protocol;
                this.connection = connection;
                this._reconnectPolicy = reconnectPolicy;
                this._handshakeProtocol = new HandshakeProtocol();
                this.connection.onreceive = (data) => this._processIncomingData(data);
                this.connection.onclose = (error) => this._connectionClosed(error);
                this._callbacks = {};
                this._methods = {};
                this._closedCallbacks = [];
                this._reconnectingCallbacks = [];
                this._reconnectedCallbacks = [];
                this._invocationId = 0;
                this._receivedHan