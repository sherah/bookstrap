Meteor.pages({
  '/'                     : { to: 'home', as: 'root' },
  '/curriculum'           : { to: 'curriculumlist' },
  '/curriculum/:filename' : { to: 'curriculumfile' },
  '/'                     : { to: 'home', as: 'root', nav: 'home'},
  '/curriculum'           : { to: 'curriculumlist', nav: 'curriculum' },
  '/curriculum/:filename' : { to: 'curriculumfile', nav: 'curriculum' },
  '/directory'            : { to: 'profileInfo', nav: 'directory' },
  '/sprintToDos'          : { to: 'sprintToDos', nav: 'todos' },
  '/tests'                : { to: 'tests' },
  '/reflections'          : { to: 'reflections' },
  '*'                     : { to: 'not_found' }
});
