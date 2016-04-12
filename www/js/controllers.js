angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('agendaCtrl', function($scope){
  $scope.speakers = [
    {name: 'Kyle Jensen', img: '../img/kyle_jensen_profile.jpg', title: 'Channel Account Manager', sessionTitle: 'Welcome and Introduction', track: 'sales', id: 1},
    {name: 'Kevin Chin', img: '../img/kevin_chin_profile.jpg', title: 'Solutions Architect Manager', sessionTitle: 'Welcome and Introduction', track: 'tech', id: 2},
    {name: 'Kyle Benson', img: '../img/kyle_profile.jpg', title: 'Partner Solutions Architect', sessionTitle: 'Leveraging OpenShift for DevOps',description: 'I\'m doing a (free) operating system (just a hobby, won\'t be big and professional like gnu) for 386(486) AT clones. This has been brewing since april, and is starting to get ready.', track:'tech', id: 3},
    {name: 'Adam Clater', img: '../img/adam_clater_profile.jpg', title: 'Office of the Chief Technologist', sessionTitle: 'Selling with Red Hat',description: 'A-B-C. A-Always, B-Be, C-Closing. Always be closing. ALWAYS BE CLOSING. A-I-D-A. Attention, Interest, Decision, Action. Attention - Do I have your attention?', track:'sales', id: 4},
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
