if (Meteor.isClient) {
    $(document).ready(function() {
	    init_canvas(document.getElementById("wysiwym"), prepare_doc(test_doc)); });}
