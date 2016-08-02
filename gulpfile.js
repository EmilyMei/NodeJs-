/**
 * Created by zam on 2016/8/1.
 */
"use strict";

const gulp = require('gulp');
const gulpbabel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('default',['es6toes5','cleancss','imagemin','htmlmin','copyfile'],()=>{
	console.log('gulp自动化完毕');
});
/*将es6转成es5，压缩js文件*/
gulp.task('es6toes5',()=>{
	gulp.src(['./src/controllers/*.js',
			'./src/models/*.js','./src/routes/*.js'],{base:'src'})
		.pipe(gulpbabel({presets:['es2015']}))
		.pipe(uglify())/*压缩Js*/
		.pipe(gulp.dest('dist'));
	console.log('es6toes5执行完毕');
});

/*压缩css文件*/
const cleancss = require('gulp-clean-css');
const rev = require('gulp-rev');

gulp.task('cleancss',()=>{
	gulp.src(['./src/statics/css/*.css'],{base:'src'})
		.pipe(cleancss({compatibility: 'ie8'}))
		.pipe(rev())
		.pipe(gulp.dest('dist'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('./src/rev'));
	console.log('css压缩ok');
});

/*压缩图片*/

const imagemin = require('gulp-imagemin');
gulp.task('imagemin',()=>{
	gulp.src('./src/statics/images/*.*',{base:'src'})
		.pipe(imagemin())
		.pipe(gulp.dest('dist'));
});

/*压缩html*/

const htmlmin = require('gulp-htmlmin');
const revcollector = require('gulp-rev-collector');
gulp.task('htmlmin',()=>{
	gulp.src(['./src/views/*.html','./src/rev/*.json'],{base:'src'})
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(revcollector())
		.pipe(gulp.dest('dist'));
});

/*文件拷贝*/

const copyfile = require('gulp-copy');
gulp.task('copyfile',()=>{
	gulp.src(['./src/statics/bowersrc/**/*.*','./src/app.js'],{base:'src'})
		.pipe(copyfile('dist',{prefix:1}));
	console.log('拷贝文件完毕');
});



