Template.MainNav.events({
  'click .login-toggle': ()=> {
    Session.set('nav-toggle','open'); //setting nav-toggle to be open
  },
  'click .logout': ()=> {
    AccountsTemplates.logout();
  }
});
