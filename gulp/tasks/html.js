import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";
import data from "gulp-data";
import fs from "fs";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>",
            })
        ))
        .pipe(data(function() {
            return JSON.parse(fs.readFileSync(app.path.src.data));
        }))
        .pipe(pug({
            pretty: true,
            verbose: true,
        }))
        .pipe(app.plugins.if(app.isBuild, app.plugins.replace(".css", ".min.css")))
        .pipe(app.plugins.if(app.isBuild, app.plugins.replace(".js", ".min.js")))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js',
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}