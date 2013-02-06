Template.curriculumfile.getMarkdown = function () {
  var path = window.location.pathname
  var filename = path.split('/').slice(-1);
  Meteor.call('getFileSync', 'assets/readmes/' + filename, function (error, result) {
    Session.set('fileText', result)
  });
};

Template.curriculumfile.displayMarkdown = function () {
  return Session.get('fileText');
};
