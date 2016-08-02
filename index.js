/**
 * Created by zam on 2016/8/1.
 */
'use strict';

let NODE_EVN = process.env.NODE_EVN;

if(NODE_EVN == 'dev'){
    require('./src/app.js');
}else {
    require('.dist/app.js');
}