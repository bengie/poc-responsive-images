# Proof of Concept : Responsive Images

Short test case if we could use [Responsive images](https://dev.opera.com/articles/responsive-images/) in upcoming projects for De Persgroep.

## TL;DR

Yes, we can. And for mobile your page size will decrease with ±40% (tested on the included pages)

### Dependencies

We need a [polyfill](http://scottjehl.github.io/picturefill/) to make it cross-browser compatible.

### Caveats

1. IE9 needs an unsemantic element : `<!--[if IE 9]><video style="display: none;"><![endif]-->`
2. `<picture>` is for art direction
3. You can use any `[length]` value (vw, px, em, ...) for `sizes=""`

### Pro

1. You will save the end user a lot of bandwidth and thus money
2. Your page size will decrease (see table below)
3. Browser depends which image it will use depending bandwidth, screen resolution, connection speed, screen density, viewport width, ...
4. Thanks to art direction you gain a lot of control

### Contra

1. Bloated HTML
2. Inline media queries
3. Buggy behaviour in Chrome when using absolute values (px) for `sizes=""`. You need to refresh the page when you switch breakpoints to get the correct image. On initial page load the image is correct.
4. With the polyfill: No JS = no image, just an `alt=""` attribute
5. Big initial setup
6. Support for IE8
	* `picture`: the fallback syntax needs the larger desktop image so you'll probably end up with an extra media query
	* same for `sizes=""`



