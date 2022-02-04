import svgSprite from "gulp-svg-sprite"

export const svg = () => {
    return app.gulp.src(app.path.src.svg)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>",
            })
        ))
        .pipe(svgSprite({
            shape: {
                dest: "svg"
            },
            mode: {
                stack: {
                    sprite: "../sprites/sprite.svg",
                    example: app.isDev,
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.build.images))
}