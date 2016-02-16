define(["handlebars"],function(a){return a.template({1:function(a,b,c,d){return" cur"},3:function(a,b,c,d){return"class='cur'"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return'<a class="logo" href="index.html">ZJDGX</a>\r\n<div class="category">\r\n    <div class="frontend item'+(null!=(e=b["if"].call(a,null!=a?a.frontend:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'">\r\n        <label>Frontend</label>\r\n        <ul>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.css:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="css.html">CSS</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.html:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="html.html">HTML5</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.mobile:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="mobile.html">Mobile</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.javascript:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="javascript.html">Javascript</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class="backend item'+(null!=(e=b["if"].call(a,null!=a?a.backend:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'">\r\n        <label>Backend</label>\r\n        <ul>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.java:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="java.html">Java</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.nodejs:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="nodejs.html">Nodejs</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.android:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="android.html">Android</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class="database item'+(null!=(e=b["if"].call(a,null!=a?a.database:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'">\r\n        <label>Database</label>\r\n        <ul>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.mysql:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="mysql.html">MySQL</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.mongodb:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="mongodb.html">MongoDB</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class="framework item'+(null!=(e=b["if"].call(a,null!=a?a.framework:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'">\r\n        <label>Framework</label>\r\n        <ul>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.backbone:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="backbone.html">Backbone</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.react:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="react.html">React</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.redux:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="redux.html">Redux</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class="tools item'+(null!=(e=b["if"].call(a,null!=a?a.tools:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'">\r\n        <label><a href="tools.html">Tools</a></label>\r\n        <ul>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.gulp:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="gulp.html">Gulp</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.grunt:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="grunt.html">Grunt</a></li>\r\n            <li '+(null!=(e=b["if"].call(a,null!=a?a.webpack:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+'><a href="webpack.html">webpack</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class="notes item'+(null!=(e=b["if"].call(a,null!=a?a.notes:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'">\r\n        <label><a href="notes.html">Notes</a></label>\r\n    </div>\r\n	<div class="source item'+(null!=(e=b["if"].call(a,null!=a?a.source:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'"><label><a href="source.html">Source</a></label></div>\r\n</div>'},useData:!0})});