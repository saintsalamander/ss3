const gulp = require('gulp');
gulp.task('default',(callback) => {
    console.log("Hello World!");
    return callback();
});

const sass = require('gulp-sass')(require('sass'));
gulp.task('sass',() => {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(connect.reload());
});

gulp.task('watch',()=> {
    gulp.watch('src/scss/+*/*.scss', gulp.series('sass'))
});
// PowerShellでnpm gulp watchを実行

// ファイルを軽くする（アップロード直前）
gulp.task('release',() => {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputstyle:'compressed'}))
    .pipe(gulp.dest('dist/assets/css/'));
});
// PowerShellでnpx gulp releaseを実行
// ＞style.cssが1行にまとめられる

// サーバーを立てる
// PowerShellでnpm install gulp-connect実行後
const connect = require('gulp-connect');
gulp.task('connect',function(callback){
    connect.server({
        root: 'dist',
        livereload: true,
        port: 3000
    });
    return callback()
});
// PowerShellでnpx gulp connectを実行

gulp.task('start',gulp.parallel('connect','watch'));