var test_doc = {
    margin-top: [0.75, 'in'],
    margin-left: [0.75, 'in'],
    margin-right: [0.75, 'in'],
    margin-bottom: [0.75, 'in'],
    paper-width: [8.5, 'in'],
    paper-height: [11, 'in'],
    theme: {
	root_style: {
	    align: ['right', 'left', 'center'],
	    font: "PT Serif",
	    text-indent: [1, 'em'],
	    margin-left: [0, 'em'],
	    margin-top: [0, 'em'],
	    margin-right: [0, 'em'],
	    margin-bottom: [0, 'em'],
	    padding-left: [0, 'em'],
	    padding-top: [0, 'em'],
	    padding-right: [0, 'em'],
	    padding-bottom: [0, 'em'],
	    leading: 1.6,
	    tracking: 0,
	    ligatures: true,
	    font-size: [14, 'pt'],
	    text-style: {
		smallcaps: false,
		allcaps: false,
		bold: false,
		italicized: false,
		underlined: false,
		strikethrough: false,
		subscript: false,
		superscript: false},
	    baseline-shift: [0, 'pt'],
	    scale-vertical: 100,
	    scale-horizantal: 100},
	styles: {}},
    body: [{type: 'heading',
	    body: ["This", "is", "a", {type: 'italics', body: ["Heading"]}]},
	    {type: 'paragraph',
		    body: ["By:", "David Karn"]},
	    {type: 'paragraph',
	     body: ["Blah", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"]},
	    {type: 'paragraph',
	     body: ["Blah", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"]}]};
/*
var style_schema = {align: ['right', 'left', 'center'],
		    font: url,
		    text-indent: distance,
		    *		    margin-left: distance,
		    margin-top: distance,
		    margin-right: distance,
		    margin-bottom: distance,
		    padding-left: distance,
		    padding-top: distance,
		    padding-right: distance,
		    padding-bottom: distance,
		    leading: float,
		    tracking: float,
		    ligatures: bool,
		    font-size: distance,
		    text-style: text-style,
		    baseline-shift: distance,
		    scale-vertical: percent,
		    scale-horizantal: percent,
		    /*		    background: color,
		    border-top: border,
		    border-bottom: border,
		    border-right: border,
		    border-left: border,
		    shadow: shadow,
		    glow: glow,
		    gradient-overlay: gradient,
		    color-overlay: color}

distance: float, [em,en,pt,in,cm]

var theme_schema = {
    root_style: style,
    styles: {block_type_name: style...}};


var document_schema = {
    margin-top: distance,
    margin-left: distance, 
 margin-right: distance,
    Margin-bottom: distance,
    paper-width: distance,
    paper-height: distance,
    theme: theme,
    blocks: [blocks...]}

block_type_name: paragraph, heading, blockquote, subheading, 
  
var block_schema = {
    type: block_type_name,
    title: section title,
    body: [block...]};
  

var text_style_schema = {
    smallcaps: bool,
    allcaps: bool,
    bold: bool,
    italicized: bool,
    underlined: bool,
    strikethrough: bool,
    subscript: bool,
    superscript: bool};*/  

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to wrytyr.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
