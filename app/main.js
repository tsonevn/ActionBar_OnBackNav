var observableArray = require("data/observable-array");
var frameModule = require("ui/frame")
var absoluteLayoutModule = require("ui/layouts/absolute-layout");
var dockModule = require("ui/layouts/dock-layout");
var gridModule = require("ui/layouts/grid-layout");
var colorModule = require("color");
var labelModule = require("ui/label");
var button = require("ui/button");
var listViewModule = require("ui/list-view");

var listView;

exports.load=function(args) {
     var page = args.object;
     listView = page.getViewById("list");
     
    var titles = new observableArray.ObservableArray();
    titles.push({title:"Title1"});
    titles.push({title:"Title2"});
    titles.push({title:"Title3"});
    titles.push({title:"Title4"});
    titles.push({title:"Title5"});
    
     page.bindingContext = {myItems: titles};
    
};

function redirect(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/page");
};

exports.onTap =function(){
    redirect();
}