define(["handlebars"],function(a){return a.template({1:function(a,b,c,d){var e;return"    <li>\r\n        <h5>"+this.escapeExpression(this.lambda(null!=a?a.date:a,a))+"</h5>\r\n"+(null!=(e=b["if"].call(a,null!=(e=null!=(e=null!=a?a.daily:a)?e.does:e)?e.length:e,{name:"if",hash:{},fn:this.program(2,d,0),inverse:this.noop,data:d}))?e:"")+(null!=(e=b["if"].call(a,null!=(e=null!=(e=null!=a?a.daily:a)?e.todo:e)?e.length:e,{name:"if",hash:{},fn:this.program(5,d,0),inverse:this.noop,data:d}))?e:"")+"    </li>\r\n"},2:function(a,b,c,d){var e;return"            <label>Done:</label><br/>\r\n            <ol>\r\n"+(null!=(e=b.each.call(a,null!=(e=null!=a?a.daily:a)?e.does:e,{name:"each",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+"            </ol>\r\n"},3:function(a,b,c,d){return"                    <li>"+this.escapeExpression(this.lambda(a,a))+"</li>\r\n"},5:function(a,b,c,d){var e;return"            <label>Todo:</label><br/>\r\n            <ol>\r\n"+(null!=(e=b.each.call(a,null!=(e=null!=a?a.daily:a)?e.todo:e,{name:"each",hash:{},fn:this.program(6,d,0),inverse:this.noop,data:d}))?e:"")+"            </ol>\r\n"},6:function(a,b,c,d){var e;return null!=(e=b["if"].call(a,null!=a?a.href:a,{name:"if",hash:{},fn:this.program(7,d,0),inverse:this.program(10,d,0),data:d}))?e:""},7:function(a,b,c,d){var e,f=this.lambda,g=this.escapeExpression;return"						<li "+(null!=(e=b.unless.call(a,null!=a?a.finished:a,{name:"unless",hash:{},fn:this.program(8,d,0),inverse:this.noop,data:d}))?e:"")+">\r\n							<a href='"+g(f(null!=a?a.href:a,a))+"' target='_blank'>"+g(f(null!=a?a.content:a,a))+"</a>\r\n						</li>\r\n"},8:function(a,b,c,d){return'class="unfinished"'},10:function(a,b,c,d){var e;return"						<li "+(null!=(e=b.unless.call(a,null!=a?a.finished:a,{name:"unless",hash:{},fn:this.program(8,d,0),inverse:this.noop,data:d}))?e:"")+">"+this.escapeExpression(this.lambda(null!=a?a.content:a,a))+"</li>\r\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return null!=(e=b.each.call(a,null!=a?a.daily:a,{name:"each",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:""},useData:!0})});