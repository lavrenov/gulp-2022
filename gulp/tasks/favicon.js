import favicons from "gulp-favicons";

export const favicon = () => {
    return app.gulp.src(app.path.src.favicon)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FAVICON",
                message: "Error: <%= error.message %>",
            })
        ))
        .pipe(favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe(app.gulp.dest(app.path.build.favicon))
}
