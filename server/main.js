Meteor.methods({
  getFileSync: function (target) {
    var text = fs.readFileSync(target, 'utf-8');
    return text;
  },
  getDirContentsSync: function (directory) {
    var list = fs.readdirSync(directory, 'utf-8');
    return list;
  }
});

Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},
                           {fields: {'services': 1 }});
});

Meteor.publish("profiles", function () {
  return Profiles.find({}, {fields: {secretInfo: 0}});
});

Meteor.publish("specresults", function () {
  return SpecResults.find({});
});

Meteor.publish("sprints", function () {
  return Sprints.find({}, {fields: {secretInfo: 0}});
});

Meteor.publish("todos", function () {
  return Sprints.find({}, {fields: {secretInfo: 0}});
});

Meteor.publish("calendar", function () {
  return Sprints.find({}, {fields: {secretInfo: 0}});
});
