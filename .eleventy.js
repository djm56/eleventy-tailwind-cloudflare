const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setTemplateFormats([
        "svg",
        "njk",
        "md"
        //"js",
        //"css"
    ]);
    eleventyConfig.addPassthroughCopy('src/images')
    eleventyConfig.addPassthroughCopy('admin')

    const {
        DateTime
    } = require("luxon");

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat('yy-MM-dd');
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat("dd-MM-yy");
    });

    return {
        dir: { input: 'src', output: '_site' }
    };
};