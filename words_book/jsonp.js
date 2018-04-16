/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */
var jsonp = {
  count: 0,
  res: function(url, data, options, fn) {
    this.url = url;
    this.data = data;
    if (typeof options == "function") {
      fn = options;
      options = {};
    }
    this.fn = fn;

    if (options.name) {
      var callback = this.count + options.name
    } else {
      var callback = "_jsonp" + this.count;
    }

    window[callback] = fn;

    this.url = url + "?" + this.stringData(data) + "&callback=" + callback;

    console.log(this.url);

    this.createScript();
  },
  stringData: function(data) {
    let urlData = "";
    for (let key in data) {
      urlData += key + "=" + data[key] + "&"
    };
    urlData = urlData.substring(0, urlData.length - 1);
    return urlData;
  },
  createScript: function() {
    let script = document.createElement('script');
    script.src = this.url;
    document.body.appendChild(script);
    script.remove();
  }
}