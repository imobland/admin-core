(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.Cache = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const NodeCache = require("node-cache");

  class Cache {
    constructor(ttlSeconds) {
      this.cache = new NodeCache({
        stdTTL: ttlSeconds,
        checkperiod: ttlSeconds * 0.2,
        useClones: false
      });
    }

    get(key, storeFunction) {
      const value = this.cache.get(key);

      if (value) {
        return Promise.resolve(value);
      }

      if (!storeFunction) {
        return null;
      }

      console.log(`\n\n >>>>> FETCH '${key}'`);
      const response = storeFunction();
      this.cache.set(key, response);
      return response;
    }

    mget(keys) {
      return this.cache.mget(keys);
    }

    del(keys) {
      this.cache.del(keys);
    }

    set(key, value) {
      return this.cache.set(key, value);
    }

    has(keys) {
      return this.cache.has(keys);
    }

    delStartWith(startStr = "") {
      if (!startStr) {
        return;
      }

      const keys = this.cache.keys();

      for (const key of keys) {
        if (key.indexOf(startStr) === 0) {
          this.del(key);
        }
      }
    }

    flush() {
      this.cache.flushAll();
    }

  }

  module.exports = new Cache(60 * 60 * 1);
});