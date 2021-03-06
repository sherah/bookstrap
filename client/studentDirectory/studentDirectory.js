Meteor.subscribe("profiles");

Template.table.profileStuff = function(){
  return Profiles.find().fetch()
};

Template.profileInfo.events({
  'click .btn' : function(e){
    e.preventDefault();
    var name   = document.getElementById('name').value;
    var phone  = document.getElementById('phone').value;
    var email  = document.getElementById('email').value;
    var blog   = document.getElementById('blog').value;
    var handle = document.getElementById('handle').value;

    if(name === "" || phone === "" || email === "" || blog === "" || handle === ""){
      console.log('not submitted')
    } else {   
      var profileId = Profiles.insert({ 
        name   : name,
        phone  : phone,
        email  : email,
        blog   : blog,
        handle : handle
      });
    }
  }
});
