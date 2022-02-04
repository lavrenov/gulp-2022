import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
        favicon: `${buildFolder}/img/favicons/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: [
            `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,tiff}`,
            `!${srcFolder}/img/favicon/*.{jpg,jpeg,png,gif,tiff}`,
        ],
        svg: `${srcFolder}/img/svg/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/html/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        favicon: `${srcFolder}/img/favicon/*.{jpg,jpeg,png,gif,tiff}`,
        data: `${srcFolder}/data/data.json`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,tiff}`,
        svg: `${srcFolder}/img/svg/*.svg`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`
}