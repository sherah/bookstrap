Template.toDosStudentView.toDos = function(){
	return ToDos.find({},{sort: {sprintName: 1}});
}

Template.toDosAdminView.sprints = function(){
	return Sprints.find({},{sort: {sprint: 1}});
}

Template.toDosAdminView.events({
  'submit': function(event){
    event.preventDefault();

    var chosenSprintNames = [];

    $("#multiple :selected").each(function() {
      chosenSprintNames.push($(this).text());
    });

    var theSprintIDs = $.map(chosenSprintNames, function(value){
      ToDos.insert({
        sprintID: Sprints.findOne({sprintName:value}, {_id:1})._id,
        sprintName: value,
        description: $('#theToDoItem').val()
      });
      //todo: figure out if a todo item has already been added for this sprint and don't allow it to be duplicated
    });
  },
})

Template.toDosStudentView.events({
	'click .donebox': function(event){
		var row = event.target.parentElement.parentElement.parentElement;
		$(row).hide();

		//todo: remove this todo item from the user's todo items list (figure out how we are to handle the todos per user)

	}
})

Template.toDosStudentView.helpers({
	student: function(){return true;}
});

