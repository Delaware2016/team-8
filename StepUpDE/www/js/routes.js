angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('stepUpDE.donations', {
    url: '/donate',
    views: {
      'tab4': {
        templateUrl: 'templates/donations.html',
        controller: 'donationsCtrl'
      }
    }
  })

  .state('stepUpDE.volunteering', {
    url: '/volunteer',
    views: {
      'tab3': {
        templateUrl: 'templates/volunteering.html',
        controller: 'volunteeringCtrl'
      }
    }
  })

  .state('stepUpDE.socialFeed', {
    url: '/social',
    views: {
      'tab5': {
        templateUrl: 'templates/socialFeed.html',
        controller: 'socialFeedCtrl'
      }
    }
  })

  .state('stepUpDE', {
    url: '/page1',
    templateUrl: 'templates/stepUpDE.html',
    abstract:true
  })

  .state('stepUpDE.reward', {
    url: '/rewards',
    views: {
      'tab6': {
        templateUrl: 'templates/reward.html',
        controller: 'rewardCtrl'
      }
    }
  })

  .state('stepUpDE.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('volunteerPreferences', {
    url: '/volunteer-preferences',
    templateUrl: 'templates/volunteerPreferences.html',
    controller: 'volunteerPreferencesCtrl'
  })

  .state('stepUpDE.badges', {
    url: '/badges',
    views: {
      'tab6': {
        templateUrl: 'templates/badges.html',
        controller: 'badgesCtrl'
      }
    }
  })

  .state('stepUpDE.rewardStore', {
    url: '/store',
    views: {
      'tab6': {
        templateUrl: 'templates/rewardStore.html',
        controller: 'rewardStoreCtrl'
      }
    }
  })

  .state('organizations', {
    url: '/oraganizations',
    templateUrl: 'templates/organizations.html',
    controller: 'organizationsCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});