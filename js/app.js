'use strict';
/* global angular */


/**
 * @ngdoc overview
 * @name conferenceMgmtApp
 * @description
 * # conferenceMgmtApp
 *
 * Main module of the application.
 */

angular.module('uxdxApp', [
    'ngAnimate',
    'ngMessages',
    'ngSanitize',
    'ngAria',
    'ui.router',
    'ui.router.title',
    'duScroll',
    'templates',
    'constants',
    'app.services',
    'collapse',
    'imageDimension',
    'angularLoad',
    'btford.markdown',

    'home',
    'terms',
    'tickets',
    'survey',
    'about',
    'agenda',
    'speaker',
    'exhibition'
  ])

  .config(function($httpProvider, $urlRouterProvider) {
    'ngInject';

    // allow cors requests
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope, $window, $location) {
      'ngInject';


    // google analytics
    $rootScope.$on('$stateChangeSuccess',
      function(){
        if (!$window.ga){return;}
        $window.ga('send', 'pageview', { page: $location.path() });
      }
    )

    $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
        if(toState.name === 'home') {
          $rootScope.navClass = '';
        }
        else {
          $rootScope.navClass = 'affix';
        }
    });
  })


  .controller('AppCtrl', function ($rootScope, $scope, $window, $state) {
    'ngInject';

    this.isCollapsed = true;

    angular.element($window).bind('scroll', function() {
      if($window.pageYOffset >= 100) {
        $rootScope.navClass = 'affix';
      } else if($state.current.name === 'home') {
        $rootScope.navClass = '';
      }
      $scope.$apply();
    });

  })
  ;
angular.module('templates', []);


// var API_URL = 'http://localhost:3000';
var API_URL = 'https://conf.initiate.network';
var CONFERENCE_ID = '577e8f18db0a20bfde9ce9f9';
var BLOG_URL = 'https://latest.uxdxconf.com'
var BLOG_ID= '35e2d4887693';
var GOOGLE_MAPS_API = 'AIzaSyBGHCrNb5QsyxahDhL3xcBJNMZGNWudGDc';

angular.module('constants', [])

  .constant('API', API_URL + '/api/v1')
  .constant('CONFERENCE_URL', '/conferences/' + CONFERENCE_ID)
  .constant('BLOG_URL', BLOG_URL)
  .constant('BLOG_API', BLOG_URL + '/ghost/api/v0.1/posts/?limit=3&client_id=ghost-frontend&client_secret=' + BLOG_ID)
  .constant('eventTimeZone', '-0000')

  .constant ('partnerLevels', [{
          code: 1,
          name: 'Platinum'
        }, {
          code: 2,
          name: 'Gold'
        }, {
          code: 3,
          name: 'Silver'
        }, {
          code: 4,
          name: 'Bronze'
        }])
  // .value('imageHost', 'https://res.cloudinary.com/export-leadership/image')

  .value('cloudinaryDetails', {
      cloud_name: 'export-leadership',
      upload_preset: 'p5tkabh8',
      api_key: 191375691518452
  })

  .value('mapDetails', {
      map: {
        center: {
          latitude: 53.360907,
          longitude: -6.251571
        },
        zoom: 15,
        options: {
          scrollwheel: false,
          panControl: false,
          zoomControlOptions: {
            // style: 'LARGE'
          }
        }
      },
      crokeParkLocation: {
        coords: {
          latitude: 53.360907,
          longitude: -6.251166
        },
        id: 'croke',
        options: {
          labelContent: '<h3>10 -11 February 2016</h3><h4>Croke Park, Jones\' Road, Dublin 3</h4>',
          labelAnchor: '170 -20',
          labelClass: 'mapLabel',
          icon: 'images/map-marker.png'
        }
      }
    })

  .value('countries', [
      {code: 'AF', country: 'AFGHANISTAN'},
      {code: 'AX', country: 'ÅLAND ISLANDS'},
      {code: 'AL', country: 'ALBANIA'},
      {code: 'DZ', country: 'ALGERIA'},
      {code: 'AS', country: 'AMERICAN SAMOA'},
      {code: 'AD', country: 'ANDORRA'},
      {code: 'AO', country: 'ANGOLA'},
      {code: 'AI', country: 'ANGUILLA'},
      {code: 'AQ', country: 'ANTARCTICA'},
      {code: 'AG', country: 'ANTIGUA AND BARBUDA'},
      {code: 'AR', country: 'ARGENTINA'},
      {code: 'AM', country: 'ARMENIA'},
      {code: 'AW', country: 'ARUBA'},
      {code: 'AU', country: 'AUSTRALIA'},
      {code: 'AT', country: 'AUSTRIA'},
      {code: 'AZ', country: 'AZERBAIJAN'},
      {code: 'BS', country: 'BAHAMAS'},
      {code: 'BH', country: 'BAHRAIN'},
      {code: 'BD', country: 'BANGLADESH'},
      {code: 'BB', country: 'BARBADOS'},
      {code: 'BY', country: 'BELARUS'},
      {code: 'BE', country: 'BELGIUM'},
      {code: 'BZ', country: 'BELIZE'},
      {code: 'BJ', country: 'BENIN'},
      {code: 'BM', country: 'BERMUDA'},
      {code: 'BT', country: 'BHUTAN'},
      {code: 'BO', country: 'BOLIVIA, PLURINATIONAL STATE OF'},
      {code: 'BQ', country: 'BONAIRE, SINT EUSTATIUS AND SABA'},
      {code: 'BA', country: 'BOSNIA AND HERZEGOVINA'},
      {code: 'BW', country: 'BOTSWANA'},
      {code: 'BV', country: 'BOUVET ISLAND'},
      {code: 'BR', country: 'BRAZIL'},
      {code: 'IO', country: 'BRITISH INDIAN OCEAN TERRITORY'},
      {code: 'BN', country: 'BRUNEI DARUSSALAM'},
      {code: 'BG', country: 'BULGARIA'},
      {code: 'BF', country: 'BURKINA FASO'},
      {code: 'BI', country: 'BURUNDI'},
      {code: 'KH', country: 'CAMBODIA'},
      {code: 'CM', country: 'CAMEROON'},
      {code: 'CA', country: 'CANADA'},
      {code: 'CV', country: 'CAPE VERDE'},
      {code: 'KY', country: 'CAYMAN ISLANDS'},
      {code: 'CF', country: 'CENTRAL AFRICAN REPUBLIC'},
      {code: 'TD', country: 'CHAD'},
      {code: 'CL', country: 'CHILE'},
      {code: 'CN', country: 'CHINA'},
      {code: 'CX', country: 'CHRISTMAS ISLAND'},
      {code: 'CC', country: 'COCOS (KEELING) ISLANDS'},
      {code: 'CO', country: 'COLOMBIA'},
      {code: 'KM', country: 'COMOROS'},
      {code: 'CG', country: 'CONGO'},
      {code: 'CD', country: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE'},
      {code: 'CK', country: 'COOK ISLANDS'},
      {code: 'CR', country: 'COSTA RICA'},
      {code: 'CI', country: 'CÔTE D\'IVOIRE'},
      {code: 'HR', country: 'CROATIA'},
      {code: 'CU', country: 'CUBA'},
      {code: 'CW', country: 'CURAÇAO'},
      {code: 'CY', country: 'CYPRUS'},
      {code: 'CZ', country: 'CZECH REPUBLIC'},
      {code: 'DK', country: 'DENMARK'},
      {code: 'DJ', country: 'DJIBOUTI'},
      {code: 'DM', country: 'DOMINICA'},
      {code: 'DO', country: 'DOMINICAN REPUBLIC'},
      {code: 'EC', country: 'ECUADOR'},
      {code: 'EG', country: 'EGYPT'},
      {code: 'SV', country: 'EL SALVADOR'},
      {code: 'GQ', country: 'EQUATORIAL GUINEA'},
      {code: 'ER', country: 'ERITREA'},
      {code: 'EE', country: 'ESTONIA'},
      {code: 'ET', country: 'ETHIOPIA'},
      {code: 'FK', country: 'FALKLAND ISLANDS (MALVINAS)'},
      {code: 'FO', country: 'FAROE ISLANDS'},
      {code: 'FJ', country: 'FIJI'},
      {code: 'FI', country: 'FINLAND'},
      {code: 'FR', country: 'FRANCE'},
      {code: 'GF', country: 'FRENCH GUIANA'},
      {code: 'PF', country: 'FRENCH POLYNESIA'},
      {code: 'TF', country: 'FRENCH SOUTHERN TERRITORIES'},
      {code: 'GA', country: 'GABON'},
      {code: 'GM', country: 'GAMBIA'},
      {code: 'GE', country: 'GEORGIA'},
      {code: 'DE', country: 'GERMANY'},
      {code: 'GH', country: 'GHANA'},
      {code: 'GI', country: 'GIBRALTAR'},
      {code: 'GR', country: 'GREECE'},
      {code: 'GL', country: 'GREENLAND'},
      {code: 'GD', country: 'GRENADA'},
      {code: 'GP', country: 'GUADELOUPE'},
      {code: 'GU', country: 'GUAM'},
      {code: 'GT', country: 'GUATEMALA'},
      {code: 'GG', country: 'GUERNSEY'},
      {code: 'GN', country: 'GUINEA'},
      {code: 'GW', country: 'GUINEA-BISSAU'},
      {code: 'GY', country: 'GUYANA'},
      {code: 'HT', country: 'HAITI'},
      {code: 'HM', country: 'HEARD ISLAND AND MCDONALD ISLANDS'},
      {code: 'VA', country: 'HOLY SEE (VATICAN CITY STATE)'},
      {code: 'HN', country: 'HONDURAS'},
      {code: 'HK', country: 'HONG KONG'},
      {code: 'HU', country: 'HUNGARY'},
      {code: 'IS', country: 'ICELAND'},
      {code: 'IN', country: 'INDIA'},
      {code: 'ID', country: 'INDONESIA'},
      {code: 'IR', country: 'IRAN, ISLAMIC REPUBLIC OF'},
      {code: 'IQ', country: 'IRAQ'},
      {code: 'IE', country: 'IRELAND'},
      {code: 'IM', country: 'ISLE OF MAN'},
      {code: 'IL', country: 'ISRAEL'},
      {code: 'IT', country: 'ITALY'},
      {code: 'JM', country: 'JAMAICA'},
      {code: 'JP', country: 'JAPAN'},
      {code: 'JE', country: 'JERSEY'},
      {code: 'JO', country: 'JORDAN'},
      {code: 'KZ', country: 'KAZAKHSTAN'},
      {code: 'KE', country: 'KENYA'},
      {code: 'KI', country: 'KIRIBATI'},
      {code: 'KP', country: 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF'},
      {code: 'KR', country: 'KOREA, REPUBLIC OF'},
      {code: 'KW', country: 'KUWAIT'},
      {code: 'KG', country: 'KYRGYZSTAN'},
      {code: 'LA', country: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC'},
      {code: 'LV', country: 'LATVIA'},
      {code: 'LB', country: 'LEBANON'},
      {code: 'LS', country: 'LESOTHO'},
      {code: 'LR', country: 'LIBERIA'},{code: 'LY', country: 'LIBYA'},{code: 'LI', country: 'LIECHTENSTEIN'},{code: 'LT', country: 'LITHUANIA'},{code: 'LU', country: 'LUXEMBOURG'},{code: 'MO', country: 'MACAO'},{code: 'MK', country: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF'},{code: 'MG', country: 'MADAGASCAR'},{code: 'MW', country: 'MALAWI'},{code: 'MY', country: 'MALAYSIA'},{code: 'MV', country: 'MALDIVES'},{code: 'ML', country: 'MALI'},{code: 'MT', country: 'MALTA'},{code: 'MH', country: 'MARSHALL ISLANDS'},{code: 'MQ', country: 'MARTINIQUE'},{code: 'MR', country: 'MAURITANIA'},{code: 'MU', country: 'MAURITIUS'},{code: 'YT', country: 'MAYOTTE'},{code: 'MX', country: 'MEXICO'},{code: 'FM', country: 'MICRONESIA, FEDERATED STATES OF'},{code: 'MD', country: 'MOLDOVA, REPUBLIC OF'},{code: 'MC', country: 'MONACO'},{code: 'MN', country: 'MONGOLIA'},{code: 'ME', country: 'MONTENEGRO'},{code: 'MS', country: 'MONTSERRAT'},{code: 'MA', country: 'MOROCCO'},{code: 'MZ', country: 'MOZAMBIQUE'},{code: 'MM', country: 'MYANMAR'},{code: 'NA', country: 'NAMIBIA'},{code: 'NR', country: 'NAURU'},{code: 'NP', country: 'NEPAL'},{code: 'NL', country: 'NETHERLANDS'},{code: 'NC', country: 'NEW CALEDONIA'},{code: 'NZ', country: 'NEW ZEALAND'},{code: 'NI', country: 'NICARAGUA'},{code: 'NE', country: 'NIGER'},{code: 'NG', country: 'NIGERIA'},{code: 'NU', country: 'NIUE'},{code: 'NF', country: 'NORFOLK ISLAND'},{code: 'MP', country: 'NORTHERN MARIANA ISLANDS'},{code: 'NO', country: 'NORWAY'},{code: 'OM', country: 'OMAN'},{code: 'PK', country: 'PAKISTAN'},{code: 'PW', country: 'PALAU'},{code: 'PS', country: 'PALESTINE, STATE OF'},{code: 'PA', country: 'PANAMA'},{code: 'PG', country: 'PAPUA NEW GUINEA'},{code: 'PY', country: 'PARAGUAY'},{code: 'PE', country: 'PERU'},{code: 'PH', country: 'PHILIPPINES'},{code: 'PN', country: 'PITCAIRN'},{code: 'PL', country: 'POLAND'},{code: 'PT', country: 'PORTUGAL'},{code: 'PR', country: 'PUERTO RICO'},{code: 'QA', country: 'QATAR'},{code: 'RE', country: 'RÉUNION'},{code: 'RO', country: 'ROMANIA'},{code: 'RU', country: 'RUSSIAN FEDERATION'},{code: 'RW', country: 'RWANDA'},{code: 'BL', country: 'SAINT BARTHÉLEMY'},{code: 'SH', country: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA'},{code: 'KN', country: 'SAINT KITTS AND NEVIS'},{code: 'LC', country: 'SAINT LUCIA'},{code: 'MF', country: 'SAINT MARTIN (FRENCH PART)'},{code: 'PM', country: 'SAINT PIERRE AND MIQUELON'},{code: 'VC', country: 'SAINT VINCENT AND THE GRENADINES'},{code: 'WS', country: 'SAMOA'},{code: 'SM', country: 'SAN MARINO'},{code: 'ST', country: 'SAO TOME AND PRINCIPE'},{code: 'SA', country: 'SAUDI ARABIA'},{code: 'SN', country: 'SENEGAL'},{code: 'RS', country: 'SERBIA'},{code: 'SC', country: 'SEYCHELLES'},{code: 'SL', country: 'SIERRA LEONE'},{code: 'SG', country: 'SINGAPORE'},{code: 'SX', country: 'SINT MAARTEN (DUTCH PART)'},{code: 'SK', country: 'SLOVAKIA'},{code: 'SI', country: 'SLOVENIA'},{code: 'SB', country: 'SOLOMON ISLANDS'},{code: 'SO', country: 'SOMALIA'},{code: 'ZA', country: 'SOUTH AFRICA'},{code: 'GS', country: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS'},{code: 'SS', country: 'SOUTH SUDAN'},{code: 'ES', country: 'SPAIN'},{code: 'LK', country: 'SRI LANKA'},{code: 'SD', country: 'SUDAN'},{code: 'SR', country: 'SURINAME'},{code: 'SJ', country: 'SVALBARD AND JAN MAYEN'},{code: 'SZ', country: 'SWAZILAND'},{code: 'SE', country: 'SWEDEN'},{code: 'CH', country: 'SWITZERLAND'},{code: 'SY', country: 'SYRIAN ARAB REPUBLIC'},{code: 'TW', country: 'TAIWAN, PROVINCE OF CHINA'},{code: 'TJ', country: 'TAJIKISTAN'},{code: 'TZ', country: 'TANZANIA, UNITED REPUBLIC OF'},{code: 'TH', country: 'THAILAND'},{code: 'TL', country: 'TIMOR-LESTE'},{code: 'TG', country: 'TOGO'},{code: 'TK', country: 'TOKELAU'},{code: 'TO', country: 'TONGA'},{code: 'TT', country: 'TRINIDAD AND TOBAGO'},{code: 'TN', country: 'TUNISIA'},{code: 'TR', country: 'TURKEY'},{code: 'TM', country: 'TURKMENISTAN'},{code: 'TC', country: 'TURKS AND CAICOS ISLANDS'},{code: 'TV', country: 'TUVALU'},{code: 'UG', country: 'UGANDA'},{code: 'UA', country: 'UKRAINE'},{code: 'AE', country: 'UNITED ARAB EMIRATES'},{code: 'GB', country: 'UNITED KINGDOM'},{code: 'US', country: 'UNITED STATES'},{code: 'UM', country: 'UNITED STATES MINOR OUTLYING ISLANDS'},{code: 'UY', country: 'URUGUAY'},{code: 'UZ', country: 'UZBEKISTAN'},{code: 'VU', country: 'VANUATU'},{code: 'VE', country: 'VENEZUELA, BOLIVARIAN REPUBLIC OF'},{code: 'VN', country: 'VIET NAM'},{code: 'VG', country: 'VIRGIN ISLANDS, BRITISH'},{code: 'VI', country: 'VIRGIN ISLANDS, U.S.'},{code: 'WF', country: 'WALLIS AND FUTUNA'},{code: 'EH', country: 'WESTERN SAHARA'},{code: 'YE', country: 'YEMEN'},{code: 'ZM', country: 'ZAMBIA'},{code: 'ZW', country: 'ZIMBABWE'}])
  ;

angular.module('app.filters', [])

.filter('booleanFlag', function ($sce) {
  'ngInject';

  return function (flag, hideFalse) {
    // var icon = flag ?
    //   '<md-icon md-font-set="material-icons" class="success">check</md-icon>' :
    //   '<md-icon md-font-set="material-icons" class="danger">close</md-icon>';

    // var icon = flag ?
    //   '<md-icon md-font-icon="fa-check" class="fa success" alt="Yes"></md-icon>' :
    //   '<md-icon md-font-icon="fa-close" class="fa danger" alt="No"></md-icon>' ;


    var icon = flag ?
      '<md-icon class="fa fa-check success" alt="Yes"></md-icon>' :
      '<md-icon class="fa fa-close danger" alt="No"></md-icon>' ;
    if (hideFalse && !flag) icon = '';
    return $sce.trustAsHtml(icon);
  };
})
.filter('socialFlag', function ($sce) {
  'ngInject';

  return function (social) {
    var icons = '';
    if(!social) social = {};
    Object.keys(social).forEach(function (socialSite) {
      // icons += '<md-icon md-font-set="material-icons">' + socialSite + '</md-icon>';
      // icons += '<md-icon md-font-icon="fa-' + socialSite + '" class="fa" alt="' + socialSite + '"></md-icon>';
      icons += '<md-icon md-font-icon="fa-' + socialSite.toLowerCase() + '" class="fa fa-' + socialSite.toLowerCase() + '" alt="' + socialSite + '"></md-icon>';
    });
    // console.log($sce.trustAsHtml(icons))
    // return icons;
    return $sce.trustAsHtml(icons);
  };
})
.filter('activeFlag', function () {
  return function (array, flag) {
    return array.filter(function (item) {
      return item.active === flag;
    });
  };
})
.filter('activeStatus', function () {
  return function (flag) {
    return flag ? 'Active' : 'Inactive';
  };
})
.filter('published', function () {
  return function (array) {
    return array.filter(function (item) {
      return item.published;
    });
  }
})
;


angular.module('collapse', [])

  .directive('collapse', ['$animate', function ($animate) {

    return {
      link: function (scope, element, attrs) {
        function expand() {
          element.removeClass('collapse').addClass('collapsing');
          $animate.addClass(element, 'in', {
            to: { height: element[0].scrollHeight + 'px' }
          }).then(expandDone);
        }

        function expandDone() {
          element.removeClass('collapsing');
          element.css({height: 'auto'});
        }

        function collapse() {
          element
            // IMPORTANT: The height must be set before adding "collapsing" class.
            // Otherwise, the browser attempts to animate from height 0 (in
            // collapsing class) to the given height here.
            .css({height: element[0].scrollHeight + 'px'})
            // initially all panel collapse have the collapse class, this removal
            // prevents the animation from jumping to collapsed state
            .removeClass('collapse')
            .addClass('collapsing');

          $animate.removeClass(element, 'in', {
            to: {height: '0'}
          }).then(collapseDone);
        }

        function collapseDone() {
          element.css({height: '0'}); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing');
          element.addClass('collapse');
        }

        scope.$watch(attrs.collapse, function (shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }]);
angular.module('imageDimension', [])
  .directive('imageDimension', function() {
    return {
        scope: false,
        restrict: 'A',
        link: function(scope, element, attrs) {
          element.bind('load', function() {
            if(this.naturalWidth/ this.naturalHeight > 2) {
              this.className += ' wide';
            }
          });
        }
    };
});

angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('agenda/agenda.html','\n\n\n<section id="agenda">\n  <div class="container">\n    <div class="row">\n      <div class="col-lg-12">\n          <h1 class="text-center">Agenda</h1>\n      </div>\n    </div>\n    <table class="table">\n      <!-- <thead>\n        <tr>\n          <td>Time</td>\n          <td>Session</td>\n        </tr>\n      </thead> -->\n      <tbody>\n        <tr ng-repeat="agendaSession in agenda.agenda.sessions | orderBy:\'start\'" ng-class="agendaSession.sessionType">\n          <td>\n            <p class="time">{{agendaSession.start | date: \'HH:mm\'}}</p>\n            <div class="row text-center" ng-if="agendaSession.sessionId.speakers.length === 1">\n              <span class="imageContainer">\n                <span class="speaker-images">\n                  <!-- <svg width="250" height="250">\n                    <image ng-attr-xlink:href="{{agendaSession.sessionId.speakers[0].profilePic}}" xlink:href="" width="250" height="250" class="speaker-image"/>\n                  </svg> -->\n                  <img ng-src="{{agendaSession.sessionId.speakers[0].profilePic}}" alt="{{agendaSession.sessionId.speakers[0].first}} {{agendaSession.sessionId.speakers[0].last}}" class="speaker-image">\n                 <!-- <img ng-src="{{agendaSession.sessionId.speakers[0].companyLogo}}" alt="{{agendaSession.sessionId.speakers[0].company}}" class="speaker-company-logo"> -->\n                </span>\n              </span>\n            </div>\n            <div class="row text-center">\n              <span ng-repeat="speaker in agendaSession.sessionId.speakers">\n                <img ng-src="{{speaker.companyLogo}}" alt="{{speaker.company}}" class="speaker-logo" image-dimension ng-class="{\'wide\':    img.width/img.height > 1, \'tall\': img.width/img.height <= 1}"><br>\n              </span>\n            </div>\n          </td>\n          <td class="session">\n            <p class="session-name">{{agendaSession.sessionId.name}}</p>\n            <p class="speaker" ng-if="agendaSession.sessionId.speakerIds.length > 0">\n              <span ng-repeat="speaker in agendaSession.sessionId.speakers">\n                {{speaker.first}} {{speaker.last}}, {{speaker.jobTitle}}, {{speaker.company}} <br ng-if="agendaSession.sessionId.speakers.length > $index+1">\n              </span>\n            </p>\n            <p class="session-details muted" ng-if="agendaSession.sessionId.description" btf-markdown="agendaSession.sessionId.description"></p>\n            <!-- <btf-markdown>{{agendaSession.sessionId.description}}</btf-markdown> -->\n          </td>\n        </tr>\n        <!-- <tr class="break info">\n          <td>\n            <p class="time">8:30<span class="hidden-xs"> - 9:00</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Registration &amp; Networking</p>\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <p class="time">9:00<span class="hidden-xs"> - 9:40</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Injecting Design into the Heart of Every Organisation</p>\n            <p class="speaker">Douglas Powell, Design Principal, IBM, US</p>\n            <p class="session-details muted">\n              <ul>\n                <li>Understanding the increasing importance of customer experience and focus for your product </li>\n                <li>Incorporating design thinking into non\xAD-design business from the top down</li>\n                <li>Better user experience for clients and customers at speed and scale</li>\n                <li>How do we make systems of the world more accessible to accelerate economies</li>\n                <li>Redefining teamwork and collaboration: What will teams look like in the future?</li>\n              </ul>\n            </p>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td>\n            <p class="time">9:40<span class="hidden-xs"> - 10:10</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Driving product innovation within the IoT</p>\n            <p class="speaker">David Boundy, Director, IOT Innovation, Intel</p>\n            <p class="session-details muted">\n              <ul>\n                <li>Sustainable product design: Understanding the future focus of products</li>\n                <li>Fueling innovation: Taking a look at Intel\u2019s portfolio of IoT products</li>\n                <li>Analysing the barriers slowing IoT adoption</li>\n                <li>Focusing on the end user: Understanding Intel\u2019s approach to maximising efficiencies between teams </li>\n                <li>Discussing Intel\u2019s Living Lab concept</li>\n\n              </ul>\n            </p>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td>\n            <p class="time">10:10<span class="hidden-xs"> - 10:40</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Announcing Shortly</p>\n            <p class="speaker"></p>\n            <p class="session-details muted">\n            </p>\n          </td>\n        </tr>\n\n\n        <tr class="break info">\n          <td>\n            <p class="time">10:40<span class="hidden-xs"> - 11:20</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Networking &amp; Exhibition Break</p>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td>\n            <p class="time">11:20<span class="hidden-xs"> - 11:40</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Announcing Shortly</p>\n            <p class="speaker"></p>\n            <p class="session-details muted">\n            </p>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td>\n            <p class="time">11:40<span class="hidden-xs"> - 12:00</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Developer Thinking: Building a Developer Mindset throughout your Organisation</p>\n            <p class="speaker">Adrian Trenaman, SVP Engineering, Hudson Bay Company / Gilt</p>\n            <p class="session-details muted">\n              <ul>\n                <li>A look at Gilt Tech: What makes us innovative and why we take a different approach</li>\n                <li>Scaling microservies at Gilt</li>\n                <li>Building a world class team:</li>\n                <li>Assessing the team and project management structure</li>\n                <li>Past, present and future team focus</li>\n                <li>Putting the user at the heart of your development</li>\n              </ul>\n            </p>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td>\n            <p class="time">12:00<span class="hidden-xs"> - 12:20</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Identifying Key Product &amp; Team Opportunities for Meaningful User Experience</p>\n            <p class="speaker">Travis George, Head of Product, EU, Riot Games</p>\n            <p class="session-details muted">\n              <ul>\n                <li>Collaborating across disciplines and regions to drive results</li>\n                <li>Providing the best user experience for our players</li>\n                <li>Establishing the most common team challenges of collaboration and how we\u2019ve overcome them</li>\n                <li>Understanding the value of a great work environment:</li>\n                <li>What makes us one of the great places to work</li>\n                <li>Identifying what\'s most important; creating self managed, self empowered teams</li>\n                <li>Creating a European specific product strategy: Expanding our capabilities</li>\n              </ul>\n            </p>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td>\n            <p class="time">12:20<span class="hidden-xs"> - 13:00</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">How to Create a Great Products, Based on past Product Successes</p>\n            <p class="speaker">Elaine Coughlan, CoFounder &amp; VC, Atlantic Bridge<br>\n                Tony Kelly, Founder, CTO, Investor, Deposify<br>\n                Gary Leyden, Commercial Director, NDRC\n            </p>\n            <p class="session-details muted">\n              <ul>\n\n              </ul>\n            </p>\n          </td>\n        </tr>\n\n\n        <tr class="break info">\n          <td>\n            <p class="time">13:00<span class="hidden-xs"> - 14:00</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Lunch and Networking</p>\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <p class="time">14:00<span class="hidden-xs"> - 14:30</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Product Design That Fuels Brand Ambition and Commercial Success</p>\n            <p class="speaker">Brian Stephens, CEO, Design Partners</p>\n            <p class="session-details muted">\n              <ul>\n                <li>What makes a great product: Designing for the future</li>\n                <li>Making design central to the flow and strategy of companies and organisations</li>\n                <li>Good design as an effective business tool: Incorporating the user experience from the onset</li>\n                <li>Unveiling new technology that illustrates just how smart products are becoming</li>\n                <li>Stories of success aligned with great team collaboration</li>\n              </ul>\n            </p>\n          </td>\n        </tr>\n\n\n\n        <tr>\n          <td>\n            <p class="time">14:30<span class="hidden-xs"> - 14:50</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Radical Agility for Team Empowerment and High Performance</p>\n            <p class="speaker">David O\'Donoghue,  Head of Engineering, Zalando</p>\n            <p class="session-details muted">\n              <ul>\n                <li>Dressing code: How Zalando are transforming how people everywhere connect with fashion</li>\n                <li>A look at Zalando\u2019s Radical Agility: What makes them innovative and why they\u2019re taking a different approach </li>\n                <li>How the team are focussed on lifting Zalando through its next order of magnitude of growth</li>\n                <li>Developer Thinking: Why it\u2019s important to spread a developer mindset throughout your organisation</li>\n              </ul>\n            </p>\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <p class="time">14:50<span class="hidden-xs"> - 15:30</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">All Stars Team Panel</p>\n            <p class="speaker"></p>\n            <p class="session-details muted">\n            </p>\n          </td>\n        </tr>\n\n        <tr class="break info">\n          <td>\n            <p class="time">15:30<span class="hidden-xs"> - 16:10</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Networking &amp; Exhibition Break</p>\n          </td>\n        </tr>\n\n\n\n        <tr>\n          <td>\n            <p class="time">16:10<span class="hidden-xs"> - 16:30</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">A Digital Business that Flies Planes</p>\n            <p class="speaker">David O\'Callaghan, Head of Development, Ryanair Labs</p>\n            <p class="session-details muted">\n              <ul>\n                <li>A review of Ryanair\'s Always getting better and why digital is at it\'s core</li>\n                <li>How to transition a business from IT neglect to first class citizen</li>\n                <li>Why Agile is working for Ryanair, and how they are continuously improving</li>\n                <li>Reducing the Build-Measure-Learn cycle time</li>\n                <li>What is in store for the future of Ryanair</li>\n              </ul>\n            </p>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td>\n            <p class="time">16:30<span class="hidden-xs"> - 16:50</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">The Death of the Project Manager: A New Era for Product Management Arises</p>\n            <p class="speaker">Paul Savage, COO, nearForm</p>\n            <p class="session-details muted">\n              <ul>\n                <li>Discussing current processes and why they\u2019re failing</li>\n                <li>Taking a look at nearForm: What success looks like</li>\n                <li>Approaching software differently: Setting team performance to enable feedback loop</li>\n                <li>Project management by proxy: Dissolving the middle person for true understanding</li>\n                <li>Implementing a controlling function: Providing ownership to the product owner</li>\n\n              </ul>\n            </p>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td>\n            <p class="time">16:50<span class="hidden-xs"> - 17:30</span></p>\n          </td>\n          <td class="session">\n            <p class="session-name">Announcing Shortly</p>\n          </td>\n        </tr>\n\n        <tr class="break info">\n          <td>\n            <p class="time">17:30</p>\n          </td>\n          <td class="session">\n            <p class="session-name">Conference Close</p>\n          </td>\n        </tr>\n\n -->\n\n      </tbody>\n    </table>\n  </div>\n</section>\n\n\n\n<!-- <section id="agenda">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <h2 class="section-heading text-center">Agenda</h2>\n                     <h3 class="section-sub-heading text-center">Product Team Efficiencies</h3>\n                <p class="text-muted">UXDX is all about the strategies and tactics for building high performing, efficient teams who can speed up the product delivery and learning cycles. Our focus is on self sufficient teams who own the end-to-end product life cycle with a particular focus on lean delivery, integrated UX, continuous delivery and automated DevOps deployments. </p>\n            </div>\n        </div>\n        <div class="row padded-top-row align-center">\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>8:30<span class="hidden-xs"> - 9:00</span></p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker">\n                    </div>\n                    <p class="text-muted">Registration and Networking</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>9:00 - 9:40</p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Opening Keynote</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>9:40 - 10:20 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>The All Stars Team</p>\n                         <p class="small">We\u2019ve put together the ultimate product dream team to ask the questions of why they continue to achieve success in their role, and an understanding of what makes them a great team player. Our all-star team will consist of a lead designer, developer, UX and product owner. </p>\n                </div>\n            </div>\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>10:20 - 11:00 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker">\n                    </div>\n                    <p class="text-muted">Networking Break / Product Showcase</p>\n                </div>\n            </div>\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>11:00 - 11:40 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker-img">\n                        <img src="../../img/speakers/brianstephens.jpg" alt="Brian Stephens">\n                    </div>\n                    <p>Brian Stephens, CEO, Design Partners</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>11:40 - 12:20 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Interactive Session</p>\n                </div>\n            </div>\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>12:20 - 13:20 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker">\n                    </div>\n                    <p class="text-muted">Lunch</p>\n                </div>\n            </div>\n\n\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>13:20 - 14:00 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Product Spotlight</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>14:00 - 14:40 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker-img">\n                        <img src="../../img/speakers/davidboundy.jpg" alt="David Boundy">\n                    </div>\n                    <p>David Bounty, Director IOT Innovation, Intel</p>\n                </div>\n            </div>\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>14:40 - 15:30 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker">\n                    </div>\n                    <p class="text-muted">Networking Break / Product Showcase</p>\n                </div>\n            </div>\n\n\n\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>15:30 - 16:10</p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Product Spotlight</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>16:10 - 16:50</p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Closing Keynote</p>\n                </div>\n            </div>\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>18:00 - Late</p>\n                </div>\n\n                <div class="col-xs-5 agenda-name last">\n                    <div class="marker marker-secondary">\n                    </div>\n                    <p>UXDX After Hours</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section> -->\n');
$templateCache.put('home/home.html','<header>\n    <div class="header-container">\n        <div class="container">\n            <div class="intro-text">\n                <!-- <span class="logo-header">UXDX</span> -->\n                <!-- <svg width="300" height="300">\n                  <image xlink:href="./img/UXDX_logo.svg" width="300" height="300"class="header-logo"/>\n                </svg> -->\n                <!-- <svg><use xlink:href=\u201C./img/UXDX_Logo.svg\u201D  /></svg> -->\n                <img src="./img/logo_white.png" class="header-logo">\n                <p class="intro-details-text">2 November | RDS, Dublin </p>\n                <div class="intro-details">\n                    <p class="intro-details-header">The Team behind the Product</p>\n                </div>\n                <a ui-sref="tickets" class="page-scroll btn btn-xl">Register Now</a>\n            </div>\n        </div>\n    </div>\n</header>\n\n\n<section id="about">\n  <div class="container">\n    <div class="row">\n      <h1 class="section-heading text-center">UXDX Mission</h1>\n      <h3 class="section-sub-heading text-center">Removing waste in product delivery</h3>\n      <p class="text-center">At UXDX we focus on improving the team behind the product. This is centred on the following three key team efficiencies.</p>\n      <div class="about-list">\n        <div class="col-xs-12 col-sm-4 about-section">\n          <div class="about-box">\n            <div class="about-box-header first">\n              <h4>Reduce External Dependencies</h4>\n            </div>\n            <div class="about-box-content">\n              <p class="text-muted">Remove the bottleneck of handovers with cross functional teams of UX, Dev, QA and Product Owners.</p>\n            </div>\n          </div>\n        </div>\n        <div class="col-xs-12 col-sm-4 about-section">\n          <div class="about-box">\n            <div class="about-box-header second">\n              <h4>Gather Early Feedback</h4>\n            </div>\n            <div class="about-box-content">\n              <p class="text-muted">Reduce the build-measure-learn cycle time through continuous delivery and improved DX (developer experience).</p>\n            </div>\n          </div>\n        </div>\n        <div class="col-xs-12 col-sm-4 about-section">\n          <div class="about-box">\n            <div class="about-box-header third">\n              <h4>Infrastructure as Code</h4>\n            </div>\n            <div class="about-box-content">\n              <p class="text-muted">Automate environment provisioning and utilise cloud infrastructure so the team can focus on the product and not the infrastructure.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section id="speakers">\n  <div class="container">\n    <div class="row">\n        <h1 class="text-center">Speakers</h1>\n        <div class="speaker-list">\n          <a class="speaker-entry" ng-repeat="speaker in home.conference.speakers | published | orderBy: \'order\'" ui-sref="speaker({speakerId: speaker._id})">\n            <span class="imageContainer">\n              <span class="speaker-images">\n                <svg width="250" height="250">\n                  <image ng-attr-xlink:href="{{speaker.profilePic}}" xlink:href="" width="250" height="250" class="speaker-image"/>\n                </svg>\n                <!-- <img ng-src="{{speaker.profilePic}}" alt="{{speaker.first}} {{speaker.last}}" class="speaker-image"> -->\n                <img ng-src="{{speaker.companyLogo}}" alt="{{speaker.company}}" class="speaker-logo" image-dimension ng-class="{\'wide\':    img.width/img.height > 1, \'tall\': img.width/img.height <= 1}">\n                <!-- <img src="./img/sponsors/designpartners.png" alt="Design Partners" class="speaker-logo wide"> -->\n                <!-- <img ng-src="{{speaker.profilePic}}" alt="{{speaker.first}} {{speaker.last}}" class="speaker-image"> -->\n              </span>\n            </span>\n            <div class="speaker-details">\n               <h3 class="speaker-name">\n                {{speaker.first}} {{speaker.last}}\n              </h3>\n              <h5 class="speaker-company">{{speaker.jobTitle}} at {{speaker.company}}</h5>\n            <!-- <h5 class="speaker-country">{{speaker.country | countryCode}}</h5> -->\n             <!-- <div class="share-widget">\n              <a ng-if="speaker.twitter" href="{{speaker.twitter}}" target="_blank"><i class="fa fa-2x fa-twitter"></i></a>\n              <a ng-if="speaker.linkedIn" href="{{speaker.linkedIn}}" target="_blank"><i class="fa fa-2x fa-linkedin-square"></i></a>\n            </div> -->\n           </div>\n        </a>\n      </div>\n    </div>\n</section>\n\n\n<section id="features">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <h1 class="section-heading text-center">What to Expect</h1>\n<!--                     <h3 class="section-sub-heading text-center">Product Team Efficiencies</h3> -->\n                <!-- <p class="text-muted">UXDX is all about the strategies and tactics for building high performing, efficient teams who can speed up the product delivery and learning cycles. Our focus is on self sufficient teams who own the end-to-end product life cycle with a particular focus on lean delivery, integrated UX, continuous delivery and automated DevOps deployments. </p> -->\n            </div>\n        </div>\n        <div class="row padded-top-row col-xs-12">\n            <div class="col-xs-12 col-md-6 about-iconText">\n                <div class="col-xs-12 col-sm-2 col-sm-push-10 align-right">\n                    <span class="fa-stack fa-2x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-life-ring fa-stack-1x fa-inverse"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-10 col-sm-pull-2 align-right">\n                    <h4 class="service-heading">Deep Dives</h4>\n                    <p class="text-muted">Want to drill into specifics of a talk, or get advice on your own project? You might just have a question that\u2019s better asked in an intimate, informal group. After each talk, the presenters will transition to the Deep Dive area which is more conducive to continuing the conversation between participants and presenters. The crowd drives the deep dive dialogue up to 30 mins.</p>\n                </div>\n            </div>\n            <div class="col-xs-12 col-md-6 about-iconText">\n                <div class="col-xs-12 col-sm-2">\n                    <span class="fa-stack fa-2x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-user fa-stack-1x fa-inverse"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-10">\n                    <h4 class="service-heading">Speakers</h4>\n                    <p class="text-muted">13 leading designers, developers, and product owners will take to the UXDX stage to inspire you with their visions on product design and development. Our speakers will consist of a mix of both new startups who are launching a ground-breaking product for their industry to large corporations who have successfully sped up their release cycles. </p>\n                </div>\n            </div>\n\n            <div class="col-xs-12 col-md-6 about-iconText">\n                <div class="col-xs-12 col-sm-2 col-sm-push-10 align-right">\n                    <span class="fa-stack fa-2x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-share-alt fa-stack-1x fa-inverse"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-10 col-sm-pull-2 align-right">\n                    <h4 class="service-heading">Networking</h4>\n                    <p class="text-muted">UXDX is not just about great content - building a great team requires great people. We are incorporating Networking into everything that we do at the conference from sharing attendee details upfront, so you can make contact before the event, to interactive sessions during the day,  to the After Hours party with 800 of your new best friends.</p>\n<!--                         <p class="text-muted">UXDX is not just about great content. In the spirit of building great teams and products, UXDX will feature a full day of team building and networking activities. You will work hard and play hard across the day with interactive breakouts, interactive sessions, happy hour, and one kick-ass after party at After Hours UXDX with 800 of your new best friends.</p> -->\n                </div>\n            </div>\n            <div class="col-xs-12 col-md-6 about-iconText">\n                <div class="col-xs-12 col-sm-2">\n                    <span class="fa-stack fa-2x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-clock-o fa-stack-1x fa-inverse"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-10">\n                    <h4 class="service-heading">Office Hours</h4>\n                    <p class="text-muted">A free, intensive, 30 minute consultation. The Office Hours space will include experts in design, engineering, development and product management that provides you with unfiltered, objective, and actionable advice; from onboarding issues to speeding up your release cycle. Your chosen expert will ensure you walk out the door with actionable items to address. </p>\n\n<!--                         <p class="text-muted">Whether you\u2019re involved in designing, developing, launching, or growing a product or service, this will be a sell-out experience, so register your interest now.</p> -->\n                </div>\n            </div>\n\n<!--                 <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-lightbulb-o fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10">\n                    <h4 class="service-heading">Product Showcase</h4>\n                    <p class="text-muted">How does your salary compare by role, skill set and work experience?</p>\n                </div>\n            </div>\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2 col-sm-push-9 col-md-push-10 align-right">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-beer fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10 col-sm-pull-3 col-md-pull-2 align-right">\n                    <h4 class="service-heading">PubX</h4>\n                    <p class="text-muted">How does your salary compare by role, skill set and work experience?</p>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</section>\n\n<section id="news" ng-if="home.conference.news">\n  <div class="container">\n    <div class="row">\n        <div class="col-lg-12 text-center">\n            <h1 class="text-center" >Latest News</h1>\n            <!--<h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>-->\n        </div>\n    </div>\n      <div class="row">\n        <div class="col-xs-12 col-sm-4 col-md-4" ng-repeat="post in home.conference.news.posts">\n          <a ng-href="{{home.blog + post.url}}" target="_blank">\n            <img class="newsImage" ng-src="{{home.blog + post.image}}" alt="{{post.meta_title}}">\n            <p class="newsTitle">{{post.meta_title}}</p>\n            <p class="newsDescription text-muted">{{post.meta_description}}</p>\n          </a>\n        </div>\n      </div>\n    </div>\n</section>\n<section id="contact" ng-if="home.conference.news">\n    <div class="container">\n        <div class="row">\n            <div class="col-xs-12 text-center">\n              <h3>Get Updates and News</h3>\n                <form id="mc-embedded-subscribe-form" action="//network.us13.list-manage.com/subscribe/post?u=1e15df91b3a8e4ca199a3e42b&amp;id=0e51377dd2" method="post" name="mc-embedded-subscribe-form" novalidate="" class="validate form-inline">\n\n                    <div class="form-group">\n                        <label for="MERGE1" class="sr-only">First Name</label>\n                        <input id="MERGE1" name="MERGE1" placeholder="First Name *" class="form-control input-lg" required data-validation-required-message="Please enter your first name.">\n                        <p class="help-block text-danger"></p>\n                    </div>\n                    <!-- <div class="form-group">\n                        <label for="MERGE2" class="sr-only">Last Name</label>\n                        <input id="MERGE2" name="MERGE2" required="" placeholder="Last Name *" class="form-control" data-validation-required-message="Please enter your last name.">\n                        <p class="help-block text-danger"></p>\n                    </div> -->\n                    <div class="form-group">\n                        <label for="MERGE0" class="sr-only">Email Address</label>\n                        <input id="MERGE0" type="email" name="MERGE0" required="" placeholder="Email Address *" class="form-control input-lg" data-validation-required-message="Please enter your email address.">\n                        <p class="help-block text-danger"></p>\n                    </div>\n                    <div style="position: absolute; left: -5000px"><input name="b_1e15df91b3a8e4ca199a3e42b_0e51377dd2" tabindex="-1"></div>\n\n                    <button type="submit" class="btn btn-lg btn-xl-inverse">Sign Me Up</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section id="venue">\n  <div class="container text-center">\n    <div class="row">\n      <h1>Venues</h1>\n      <div class="col-xs-12 col-sm-6 social">\n        <h2>Pre-Party <br><span class="small">1st November</span></h2>\n        <p>Various venues around Dublin</p>\n        <a href="https://www.google.ie/maps/place/Temple+Bar,+Dublin/@53.3451022,-6.2681806,16z/data=!4m5!3m4!1s0x48670e9cb559ea73:0x2600c7a819c83012!8m2!3d53.3450903!4d-6.2638032" target="_blank">\n          <div class="map"></div>\n        </a>\n      </div>\n      <div class="col-xs-12 col-sm-6 venue">\n        <h2>Conference <br><span class="small">2nd November</span></h2>\n        <p>RDS, Ballsbridge, Dublin 4</p>\n        <a href="https://www.google.ie/maps/place/Royal+Dublin+Society,+Anglesea+Rd,+Dublin+4/data=!4m2!3m1!1s0x48670ec6619efbb3:0xfa61b5a0f8f9f2f5?sa=X&ved=0ahUKEwjCvbPv3efOAhXjIMAKHZmPCBUQ8gEIMTAD" target="_blank">\n          <div class="map"></div>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id="partners">\n  <div class="container text-center">\n    <div class="row">\n      <h1>Supported By</h1>\n      <div class="partner-list">\n        <!-- <a ui-sref="sponsor({id: partner.objectId})" class="center-block"> -->\n          <img src="./img/sponsors/designpartners.png" alt="Design Partners" class="supporter wide">\n          <img src="./img/sponsors/Atlantic_Bridge.png" alt="Atlantic Bridge" class="supporter">\n          <img src="./img/sponsors/DJEI.jpg" alt="Department of Jobs, Enterprise and Innovation" class="supporter wide2x">\n          <img src="./img/sponsors/DublinUX.jpeg" alt="Dublin UX" class="supporter">\n          <img src="./img/sponsors/Intel.png" alt="Intel" class="supporter">\n          <img src="./img/sponsors/NDRC.png" alt="NDRC" class="supporter">\n          <img src="./img/sponsors/Riot_Games.png" alt="Riot Games" class="supporter">\n          <img src="./img/sponsors/Deposify.png" alt="Deposify" class="supporter">\n      </div>\n    </div>\n\n    <!-- <div  class="row"  ng-if="main.sponsors.gold.length > 0">\n      <h1>In Partnership with</h1>\n      <h2>Gold Sponsors</h2>\n      <partner-box partners="main.sponsors.gold" level="gold" class="row row-flex row-flex-wrap" ></partner-box>\n    </div>\n\n     <div class="row"  ng-if="main.sponsors.silver.length > 0">\n      <h2>Silver Sponsors</h2>\n      <partner-box partners="main.sponsors.silver" level="gold" class=" row row-flex row-flex-wrap"></partner-box>\n    </div>\n     <div class="row"  ng-if="main.sponsors.bronze.length > 0">\n      <h2>Bronze Sponsors</h2>\n      <partner-box partners="main.sponsors.bronze" level="gold" class=" row row-flex row-flex-wrap"></partner-box>\n    </div> -->\n\n\n    <!-- <div class="row"  ng-if="main.sponsors.media.length > 0">\n      <h1>Media Partner</h1>\n      <partner-box partners="main.sponsors.media" level="gold row row-flex row-flex-wrap"></partner-box>\n    </div> -->\n  </div>\n</section>\n\n\n<section id="partnerOpportunities">\n  <div class="container text-center">\n    <div class="row">\n      <h2>Partnership Opportunities</h2>\n      <p>There are a range of partnership opportunities available from exhibition space to event sponsorship.</p>\n      <a ui-sref="exhibition" class="btn btn-xl-inverse">Sponsorship and Exhibition Opportunities</a>\n      <!-- <p>We work with you to tailor a package that meets your needs. We know that marketing is data-driven and you need to validate your return on investment so as part of every sponsorship package we will share a post show report that details the success and exposure of each of our marketing initiatives.</p>\n      <p>Please contact <a href="mailto:sponsorship@exportleadership.com">sponsorship@exportleadership.com</a> to find out more information.</p> -->\n    </div>\n  </div>\n</section>\n\n<!-- Tickets Grid Section -->\n <section id="tickets">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12 text-center">\n                <h1 class="text-center">Tickets</h1>\n                <h3>Have a question for our support team?</h3>\n                <p>Call us on +353 1 598 1838</p>\n            </div>\n        </div>\n        <div class="row ticket-row">\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box ticket-faded sold">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Super Early</p>\n                    </div>\n                    <div class="ticket-details">\n                        <!-- <p class="ticket-cost">\u20AC125</p>\n                        <p class="ticket-exvat">\u20AC102 Ex VAT</p>\n                        <p class="ticket-description">(Ends on 19/08/2016)</p> -->\n                    </div>\n                    <div class="ticket-footer">\n                      <button class="ticket-button btn">Sold Out</button>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box ticket-primary">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Early</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC195</p>\n                        <p class="ticket-exvat">\u20AC159 Ex VAT</p>\n                        <!-- <p class="ticket-description">(Ends on 28/09/2016)</p> -->\n                    </div>\n                    <div class="ticket-footer">\n                      <a href="https://ti.to/initiate/uxdx-2016/with/fgctdpcyifg" class="tito-button">\n                        <tito-button event="initiate/uxdx-2016" releases="fgctdpcyifg" ssl-check-disabled>Book Now</tito-button>\n                      </a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Regular</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC295</p>\n                        <p class="ticket-exvat">\u20AC240 Ex VAT</p>\n                        <!-- <p class="ticket-description">(Ends on 19/10/2016)</p> -->\n                    </div>\n                    <div class="ticket-footer">\n                        <button class="ticket-button btn">Coming Soon</button>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Late</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC350</p>\n                        <p class="ticket-exvat">\u20AC285 Ex VAT</p>\n                    </div>\n                    <div class="ticket-footer">\n                        <button class="ticket-button btn">Coming Soon</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n');
$templateCache.put('exhibition/exhibition.html','<section id="exhibition">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <h2 class="text-center">Exhibition Enquiries</h2>\n\n                <p class="text-muted">If your company can help our audience improve efficiencies in their product delivery, we want to work with you. Contact our director, Catherine, to work on a personalised package to meet your needs and goals.</p>\n\n                <p><span class="sponsorName">Catherine Madden</span><br>\n                  <span class="sponsorNumber">+353 1 598 1838</span><br>\n                  <span class="sponsorEmail">catherine.madden@uxdxconf.com</span>\n              </p>\n\n\n              <p class="alternateContact">Alternatively, enter your details below and we will contact you.</p>\n            </div>\n        </div>\n        <div class="row padded-top-row col-xs-10 col-xs-offset-1">\n\n            <form ng-submit="exhibition.sendPartner()" name="exhibition.partnerForm" class="form-horizontal" ng-if="exhibition.showForm">\n               <div class="alert alert-danger" role="alert" ng-if="exhibition.formError">\n                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>\n                <span class="sr-only">Error:</span>\n                There was a problem with the form. Please try again.\n              </div>\n\n              <div class="form-group" ng-class="{\'has-error\': exhibition.partnerForm.name.$invalid && exhibition.partnerForm.name.$dirty}">\n                  <label for="name" class="col-sm-2 control-label">Name*</label>\n                  <div class="col-sm-10">\n                    <input type="string" class="form-control input-lg" id="name" ng-model="exhibition.partnerForm.name" required="">\n                  </div>\n              </div>\n              <div ng-messages="exhibition.partnerForm.name.$error" style="color:maroon" role="alert">\n                <div ng-message="required" class="help-block">You must enter your name</div>\n              </div>\n\n              <div class="form-group" ng-class="{\'has-error\': exhibition.partnerForm.company.$invalid && exhibition.partnerForm.company.$dirty}">\n                  <label for="company" class="col-sm-2 control-label">Company*</label>\n                  <div class="col-sm-10">\n                    <input type="string" class="form-control input-lg" id="company" ng-model="exhibition.partnerForm.company" required="">\n                  </div>\n              </div>\n\n              <div class="form-group" ng-class="{\'has-error\': exhibition.partnerForm.email.$invalid && exhibition.partnerForm.email.$dirty}">\n                  <label for="email" class="col-sm-2 control-label">Email</label>\n                  <div class="col-sm-10">\n                    <input type="email" class="form-control input-lg" id="email" ng-model="exhibition.partnerForm.email">\n                  </div>\n              </div>\n              <div ng-messages="exhibition.partnerForm.email.$error" style="color:maroon" role="alert">\n                <div ng-message="email" class="help-block">You must enter a valid email</div>\n              </div>\n\n\n              <div class="form-group" ng-class="{\'has-error\': exhibition.partnerForm.phone.$invalid && exhibition.partnerForm.phone.$dirty}">\n                  <label for="phone" class="col-sm-2 control-label">Phone Number</label>\n                  <div class="col-sm-10">\n                    <input type="string" class="form-control input-lg" id="phone" ng-model="exhibition.partnerForm.phone">\n                  </div>\n              </div>\n\n              <!-- Anti spam effort -->\n              <span class="hide">\n                <label for="zipcode" class="hide">Your zipcode</label>\n                <input type="text" id="zipcode" value="" data-ng-pattern="zipRegex" data-ng-model="exhibition.partnerForm.zipcode" class="hide"/>\n              </span>\n\n              <div class="form-group">\n                <div class="col-sm-offset-2 col-sm-10 text-left">\n                  <button type="submit" class="btn btn-xl" ng-disabled="exhibition.partnerForm.$invalid || exhibition.processing" >Get in Touch</button>\n                  <!-- <p class="small">Clicking \u201CApply Now\u201D indicates agreement to our <a ui-sref="terms">terms and conditions</a></p> -->\n                </div>\n              </div>\n\n            </form>\n            <p class="submissionSuccess" ng-if="!exhibition.showForm"> Form successfully sent. We\'ll be in touch shortly.</p>\n\n        </div>\n    </div>\n</section>\n');
$templateCache.put('about/about.html','<section id="about">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <h2 class="section-heading text-center">What to Expect from UXDX</h2>\n<!--                     <h3 class="section-sub-heading text-center">Product Team Efficiencies</h3> -->\n                <p class="text-muted">UXDX is all about the strategies and tactics for building high performing, efficient teams who can speed up the product delivery and learning cycles. Our focus is on self sufficient teams who own the end-to-end product life cycle with a particular focus on lean delivery, integrated UX, continuous delivery and automated DevOps deployments. </p>\n            </div>\n        </div>\n        <div class="row padded-top-row col-xs-10 col-xs-offset-1">\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-user fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10">\n                    <h4 class="service-heading">Speakers</h4>\n                    <p class="text-muted">Over 10 leading designers, developers, product owners and CTO\u2019s will take to the UXDX stage to inspire you with their visions on product design and deployment. They\u2019ll provide you with their leadership and advice on how to better manage cross functional teams and key tips drawing from what they\u2019ve learned over the years in the product space. Our speakers will consist of a mix of both new startups who are launching a ground-breaking product for their industry to large corporations who have successfully sped up their release cycles. </p>\n                </div>\n            </div>\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2 col-sm-push-9 col-md-push-10 align-right">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-life-ring fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10 col-sm-pull-3 col-md-pull-2 align-right">\n                    <h4 class="service-heading">Deep Dives</h4>\n                    <p class="text-muted">Want to drill into specifics of a talk, or get advice on your own project? You might just have a question that\u2019s better asked in an intimate, informal group. After each talk, the presenters will transition to the Deep Dive area. This area is conducive to continuing the conversation between participants and presenters. The crowd drives the deep dive dialogue up to 30 mins.</p>\n                </div>\n            </div>\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-clock-o fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10">\n                    <h4 class="service-heading">Office Hours</h4>\n                    <p class="text-muted">A free, intensive, 30 minute consultation. The Office Hours space will include experts in design, engineering, development and product management that provides you with unfiltered, objective, and actionable advice; from onboarding issues to speeding up your release cycle. Your chosen expert will ensure you walk out the door with actionable items to address. </p>\n\n<!--                         <p class="text-muted">Whether you\u2019re involved in designing, developing, launching, or growing a product or service, this will be a sell-out experience, so register your interest now.</p> -->\n                </div>\n            </div>\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2 col-sm-push-9 col-md-push-10 align-right">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-share-alt fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10 col-sm-pull-3 col-md-pull-2 align-right">\n                    <h4 class="service-heading">Networking</h4>\n                    <p class="text-muted">UXDX is not just about great content - building a great team requires great people. We are incorporating Networking into everything that we do at the conference from sharing attendee details upfront, so you can make contact before the event, to interactive sessions during the day,  to the After Hours party with 800 of your new best friends.</p>\n<!--                         <p class="text-muted">UXDX is not just about great content. In the spirit of building great teams and products, UXDX will feature a full day of team building and networking activities. You will work hard and play hard across the day with interactive breakouts, interactive sessions, happy hour, and one kick-ass after party at After Hours UXDX with 800 of your new best friends.</p> -->\n                </div>\n            </div>\n<!--                 <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-lightbulb-o fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10">\n                    <h4 class="service-heading">Product Showcase</h4>\n                    <p class="text-muted">How does your salary compare by role, skill set and work experience?</p>\n                </div>\n            </div>\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2 col-sm-push-9 col-md-push-10 align-right">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-beer fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10 col-sm-pull-3 col-md-pull-2 align-right">\n                    <h4 class="service-heading">PubX</h4>\n                    <p class="text-muted">How does your salary compare by role, skill set and work experience?</p>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</section>\n');
$templateCache.put('speakers/speaker.html','<section id="speaker">\n\n  <div class="container">\n\n    <div class="row">\n      <div class="col-xs-12 col-sm-4 col-md-3">\n        <div class="row text-center">\n          <span class="imageContainer">\n            <span class="speaker-images">\n              <svg width="250" height="250">\n                <image ng-attr-xlink:href="{{speaker.speaker.profilePic}}" xlink:href="" width="250" height="250" class="speaker-image"/>\n              </svg>\n              <!-- <img ng-src="{{speaker.speaker.profilePic}}" alt="{{speaker.speaker.first}} {{speaker.speaker.last}}" class="speaker-image">\n             <img ng-src="{{speaker.speaker.companyLogo}}" alt="{{speaker.speaker.company}}" class="speaker-company-logo"> -->\n            </span>\n          </span>\n        </div>\n        <div class="row text-center">\n          <img ng-src="{{speaker.speaker.companyLogo}}" alt="{{speaker.speaker.company}}" class="speaker-logo" image-dimension ng-class="{\'wide\':    img.width/img.height > 1, \'tall\': img.width/img.height <= 1}">\n\n        </div>\n        <hr>\n        <div class="share-widget">\n          <!-- <h4>Connect</h4> -->\n          <!-- <p> -->\n            <a ng-if="speaker.speaker.social.linkedIn" href="{{speaker.speaker.social.linkedIn}}" target="_blank"><i class="fa fa-linkedin-square"></i></a>\n            <a ng-if="speaker.speaker.social.twitter" href="{{speaker.speaker.social.twitter}}" target="_blank"><i class="fa fa-twitter"></i></a>\n            <a ng-if="speaker.speaker.social.instagram" href="{{speaker.speaker.social.instagram}}" target="_blank"><i class="fa fa-instagram"></i></a>\n            <a ng-if="speaker.speaker.social.github" href="{{speaker.speaker.social.github}}" target="_blank"><i class="fa fa-github"></i></a>\n          <!-- </p> -->\n        </div>\n      </div>\n\n      <div class="speaker-page speaker-details col-xs-12 col-sm-8 col-md-9">\n        <div class="col-xs-12">\n          <h1 class="speaker-name">\n            {{speaker.speaker.first}} <span class="surname">{{speaker.speaker.last}}<span>\n          </h1>\n          <h3>{{speaker.speaker.jobTitle}}, <span class="speaker-company">{{speaker.speaker.company}}</span></h3>\n        </div>\n        <!-- <div class="col-xs-12 col-sm-4">\n          <h4 class="speaker-heading">Position</h4>\n          <h5 class="speaker-title"></h5>\n        </div> -->\n        <!-- <div class="col-xs-12 col-sm-4">\n          <h4 class="speaker-heading">Location</h4>\n          <h5 class="speaker-country">{{speaker.speaker.country | countryCode}}</h5>\n        </div> -->\n        <hr>\n\n        <div class="col-xs-12">\n          <p class="speaker-page speaker-bio"><div btf-markdown="speaker.speaker.bio"></div></p>\n       </div>\n\n\n       <!-- <hr>\n       <div class="col-xs-12" ng-repeat="session in speaker.sessions">\n         <session-box session="session"></session-box>\n       </div> -->\n\n     </div>\n  </div>\n\n\n</section>\n');
$templateCache.put('survey/survey.html',' <!-- Survey Section -->\n<section id="survey">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <h1 class="text-center">Product industry in Ireland Survey 2016</h1>\n            </div>\n        </div>\n        <div class="row text-center padded-top-row">\n            <div class="col-md-4">\n                <a href="https://docs.google.com/forms/d/1p_Gg_0GwjU81Z49rj3tB4eGK6qkgKZSK-Jdm058Sspk/viewform" target="_blank">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x text-primary"></i>\n                        <i class="fa fa-eur fa-stack-1x fa-inverse"></i>\n                    </span>\n                </a>\n                <h4 class="service-heading"><a href="https://docs.google.com/forms/d/1p_Gg_0GwjU81Z49rj3tB4eGK6qkgKZSK-Jdm058Sspk/viewform" target="_blank">Salary</a></h4>\n                <h5 class="service-sub-heading">5 mins</h5>\n                <p class="text-muted">How does your salary compare by role, skill set and work experience?</p>\n            </div>\n            <div class="col-md-4">\n                <a href="https://docs.google.com/forms/d/1ga5vXRZdjCu4cXBksdsvjmDvwZTfLLKU3MUjfmNTTV4/viewform" target="_blank">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x text-primary"></i>\n                        <i class="fa fa-bug fa-stack-1x fa-inverse"></i>\n                    </span>\n                </a>\n                <h4 class="service-heading"><a href="https://docs.google.com/forms/d/1ga5vXRZdjCu4cXBksdsvjmDvwZTfLLKU3MUjfmNTTV4/viewform" target="_blank">Challenges</a></h4>\n                <h5 class="service-sub-heading">5 - 7 mins</h5>\n                <p class="text-muted">What are the common challenges for you and how are these challenges being addressed?</p>\n            </div>\n            <div class="col-md-4">\n                <a href="https://docs.google.com/forms/d/1OPdmEejcQDZVMTwFqeZ0Aymrl_3Y4eH1AefPtgpj71g/viewform" target="_blank">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x text-primary"></i>\n                        <i class="fa fa-clock-o fa-stack-1x fa-inverse"></i>\n                    </span>\n                </a>\n                <h4 class="service-heading"><a href="https://docs.google.com/forms/d/1OPdmEejcQDZVMTwFqeZ0Aymrl_3Y4eH1AefPtgpj71g/viewform" target="_blank">Ireland and the Future</a></h4>\n                <h5 class="service-sub-heading">5 mins</h5>\n                <p class="text-muted">What can the government and industry do to support you?</p>\n            </div>\n        </div>\n        <div class="row padded-top-row text-center">\n            <div class="wiifm">\n                <h2>Whats in it for me?</h2>\n                <hr>\n                <h3 class="survey-sub-heading">We\'ll share the anonymised results.</h3>\n                <p>How does your salary compare? How are others overcoming similar challenges to you?</p>\n      \n                \n            </div>\n            <a class="btn btn-xl" href="https://docs.google.com/forms/d/1p_Gg_0GwjU81Z49rj3tB4eGK6qkgKZSK-Jdm058Sspk/viewform" target="_blank">Start the Survey Now</a>\n        </div>\n    </div>\n</section>\n\n');
$templateCache.put('tickets/tickets.html','<!-- Tickets Grid Section -->\n <section id="tickets">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12 text-center">\n                <h1 class="text-center">Tickets</h1>\n                <h3>Have a question for our support team?</h3>\n                <p>Call us on +353 1 598 1838</p>\n            </div>\n        </div>\n        <div class="row ticket-row">\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box ticket-faded sold">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Super Early</p>\n                    </div>\n                    <div class="ticket-details">\n                        <!-- <p class="ticket-cost">\u20AC125</p>\n                        <p class="ticket-exvat">\u20AC102 Ex VAT</p>\n                        <p class="ticket-description">(Ends on 19/08/2016)</p> -->\n                    </div>\n                    <div class="ticket-footer">\n                      <button class="ticket-button btn">Sold Out</button>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box ticket-primary">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Early</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC195</p>\n                        <p class="ticket-exvat">\u20AC159 Ex VAT</p>\n                        <!-- <p class="ticket-description">(Ends on 28/09/2016)</p> -->\n                    </div>\n                    <div class="ticket-footer">\n                      <a href="https://ti.to/initiate/uxdx-2016/with/fgctdpcyifg" class="tito-button">\n                        <tito-button event="initiate/uxdx-2016" releases="fgctdpcyifg" ssl-check-disabled>Book Now</tito-button>\n                      </a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Regular</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC295</p>\n                        <p class="ticket-exvat">\u20AC240 Ex VAT</p>\n                        <!-- <p class="ticket-description">(Ends on 19/10/2016)</p> -->\n                    </div>\n                    <div class="ticket-footer">\n                        <button class="ticket-button btn">Coming Soon</button>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Late</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC350</p>\n                        <p class="ticket-exvat">\u20AC285 Ex VAT</p>\n                    </div>\n                    <div class="ticket-footer">\n                        <button class="ticket-button btn">Coming Soon</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n');
$templateCache.put('terms/anti-harassment.html','<section class="text pageSection">\n  <div class="container ">\n    <h1>Anti-Harassment Policy</h1>\n\n    <p>UXDX is dedicated to providing an enjoyable, respectful and harassment-free event experience for everyone regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, or religion. Sexual language and imagery is not appropriate for any conference venue, including talks.</p>\n\n    <p>We do not tolerate harassment of event participants in any form and we expect all participants to conduct themselves in a professional and appropriate manner. Conference participants violating these rules may be sanctioned or expelled from the conference, without a refund, at the discretion of the conference organisers.</p>\n\n    <p>Harassment includes verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p>\n\n    <p>Participants asked to stop any harassing behaviour are expected to comply immediately. </p>\n\n    <p>Exhibitors in the expo hall, sponsor or vendor booths, or similar activities are also subject to the anti-harassment policy. In particular, exhibitors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing / uniforms / costumes, or otherwise create a sexualised environment.</p>\n\n    <p>If a participant engages in harassing behaviour, the event organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately.</p>\n\n    <p>We expect participants to follow these rules at all conference venues and conference-related social events.</p>\n\n    <p>This statement has been adapted from geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy</p>\n\n    <p>For questions or feedback regarding this statement, please contact <a href="mailto:catherine.madden@uxdxconf.com">Catherine Madden</a></p>\n  </div>\n</section>');
$templateCache.put('terms/sponsor-terms.html','<section id="sponsorTerms">\n  <div class="container ">\n    <h1>Partnership Agreement Terms &amp; Conditions 2016</h1>\n    <p class="small muted">Last Updated: 07/09/2016</p>\n    <ol>\n      <li>\n        <p class="header">Definitions</p>\n        <p>In this agreement, the following words shall have the following meanings, unless the context requires otherwise:</p>\n        <table>\n          <tbody>\n            <tr>\n              <td>\n                <p>\u201CSponsorship\u201D</p>\n              </td>\n              <td>\n                <p>includes platinum, gold, silver and bronze sponsors, welcome reception, closing party, all social event sponsors and exhibitors</p>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <p>\u201CSponsor\u201D</p>\n              </td>\n              <td><p>means an organisation that is named as one of the official platinum, gold, silver or bronze sponsors, welcome reception sponsors, closing party sponsors, all social event sponsors and exhibitor participants;</p>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <p>\u201COrganiser\u201D</p>\n              </td>\n              <td>\n                <p>means the company who is organising and project managing the development of the event </p>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <p>"Event"</p>\n              </td>\n              <td>\n                <p>means UXDX 2016</p>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <p>\u201CEvent Manager\u201D</p>\n              </td>\n              <td>\n                <p>means the person appointed by the Organiser to manage and coordinate all contractors, sponsors, concessionaires and other participants of the event.</p>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <p>\u201CFee\u201D</p>\n              </td>\n              <td>\n                <p>means the price for the Sponsorship agreement.</p>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <p>"Term"</p>\n              </td>\n              <td>\n                <p>means the period from today until the last day of the Event, scheduled to be 2nd November 2016.</p>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <p>\u201CVenue\u201D</p>\n              </td>\n              <td>\n                <p>means primarily the RDS, but includes all of land around the Centre which is directly associated with its use and any other buildings and land which will be used in conjunction with the Event.</p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </li>\n\n      <li>\n        <p class="header">Interpretation</p>\n        <p>In this agreement unless the context otherwise requires:</p>\n        <ol>\n          <li>A reference to a person is a reference to one or more individuals, whether or not formally in partnership, or to a corporation, government body, or other association or organisation.</li>\n          <li>any agreement by any party not to do or omit to do something includes an obligation not to allow some other person to do or omit to do that same thing;</li>\n          <li>except where stated otherwise, any obligation of any person arising from this agreement may be performed by any other person;</li>\n          <li>in this agreement references to a party include references to a person to whom those rights and obligations are transferred or pass as a result of a merger, division, reconstruction or other re-organisation involving that party.</li>\n          <li>the headings to the paragraphs and schedules (if any) to this agreement do not affect the interpretation;</li>\n          <li>all money sums mentioned in this agreement are calculated net of VAT, which will be charged when payment is due.</li>\n        </ol>\n      </li>\n\n      <li>\n        <p class="header">Warranties for authority</p>\n        <p>Each of the parties warrant:</p>\n        <ol>\n          <li>that it has power to enter into this agreement and has obtained all necessary approvals to do so.</li>\n          <li>that it is not aware of anything within its reasonable control which might or will adversely affect its ability to fulfill its obligations under this agreement.</li>\n          <li>that it is not insolvent and knows of no circumstance which would entitle any creditor to appoint a receiver or to petition for winding up or to exercise any other right over or against its assets.</li>\n        </ol>\n      </li>\n\n      <li>\n        <p class="header">Relationship of parties</p>\n        <ol>\n          <li>Nothing in this agreement shall create a partnership or agency or other relationship between any of the parties, other than the contractual relationship expressly provided for in this agreement.</li>\n          <li>Neither party shall have, nor represent that it has, any authority to make any commitment on the other party\u2019s behalf.</li>\n        </ol>\n      </li>\n\n      <li>\n        <p class="header">Entire agreement</p>\n        <ol>\n          <li>This agreement contains the entire agreement between the parties and supersedes all previous agreements and understandings between the parties.</li>\n          <li>Each party acknowledges that, in entering into this agreement, they do not rely on any representation, warranty, information or document or other term not forming part of this agreement.</li>\n        </ol>\n      </li>\n\n      <li>\n        <p class="header">Joint obligations</p>\n        <p>Each of the parties agrees and undertakes to the other that they will:</p>\n        <ol>\n          <li>co-operate fully and in good time with the other so as to ensure that the rights granted in this agreement are delivered to the reasonable expectations of the Sponsor.</li>\n          <li>not do anything which prejudices or defames the other of them whether related to the Event or any aspect of this agreement.</li>\n        </ol>\n      </li>\n\n      <li>\n        <p class="header">Obligations of Sponsor</p>\n        <p>The Sponsor now acknowledges and undertakes that they will:</p>\n        <ol>\n          <li>submit their company logo. Preferably in high resolution, vector, Adobe illustrator or EPS format and company profile (50 words) in a word document within one week of signing.</li>\n          <li>comply at all times with the reasonable requests of the Event Manager.</li>\n          <li>exercise all rights granted in this agreement in accordance with the law.</li>\n          <li>not post or disseminate the Intellectual Property of the Event without express written approval of the Organiser. Event content including but not limited to photos, videos, slides, or papers, are considered property of the Organiser.</li>\n          <li>to have a policy of insurance in place at the company that covers 3rd party liability </li>\n          <li>refrain from bringing food or beverages onto the Venue without the express written permission of the Organiser.</li>\n          <li>comply with all applicable statutes, ordinances, rules and requirements relating to health, fire, safety, and use of the premises. Booth decorations must be flame-proof and all hangings must clear the floor. Electrical wiring must conform with all national and local government requirements. If inspection indicates that a sponsor has neglected to comply with these regulations, or otherwise incurs fire hazards, the right is reserved to cancel at sponsor\u2019s expense all or such part of the exhibit as may be irregular. </li>\n        </ol>\n      </li>\n\n      <li>\n        <p class="header">Obligations of Organiser</p>\n        <p>The Organiser undertakes to the Sponsor that they will:</p>\n        <ol>\n          <li>permit access to the Sponsor to erect and place structures and materials at the Venue and to remove them at the end of the Term.</li>\n          <li>arrange for the Sponsor to be given access and space for vehicles and people to place structures and materials as above and ensure that every employee and contractor working in connection with the Event, is aware of the obligations of the Organiser in the general terms of this agreement.</li>\n          <li>ensure the delivery and fulfilment of the sponsorship rights granted to the Sponsor</li>\n          <li>to take out a policy of insurance with a substantial insurer in respect to the Event and event cancellation insurance to cover costs in the event that the Event is cancelled through Force Majeure </li>\n          <li>allow the sponsor to use the Intellectual Property of the Organiser so far as it relates to the Event, in all the Sponsors marketing and promotional materials in any format or medium inside and outside of the Venue.</li>\n        </ol>\n      </li>\n\n      <li>\n        <p class="header">Sponsorship Fee and Payment</p>\n        <p>All sums due under this agreement:</p>\n        <ol>\n          <li>shall be made no later than 60 days after the submission of an invoice or 5 working days (28 October 2016) before the commencement of the Event, whichever is sooner. Should a sponsor not have paid the invoice within 5 working days of the commencement of the Event, all advertising, exhibitor space, complimentary passes and sponsorship will be suspended, where possible the booth resold and the sponsor will be liable for 100 per cent of the sponsorship Fee.</li>\n          <li>shall be paid in Euro by cheque made payable to Socially Motivated Limited or via bank transfer</li>\n        </ol>\n      </li>\n\n      <li>\n        <p class="header">Sponsorship Cancellation</p>\n        <p>Should the sponsor wish to withdraw from being a sponsor of the Event after the agreement has been signed, the sponsor will be liable to pay the following amounts:</p>\n        <ol>\n          <li>Cancellation after Sponsor\'s Logo has been placed on the Export Leadership website: 30% of Fee</li>\n          <li>Cancellation after 10/09/16: 50% of Fee</li>\n          <li>Cancellation after 15/10/16: 75% of Fee</li>\n          <li>Cancellation after 01/11/16: 100% of Fee</li>\n        </ol>\n        <p>Cancellation of sponsorship must be directed in writing to:</p>\n        <p>Catherine Madden, Initiate Network, 6 Swift House, Ardilaun Court, Patrick St., Dublin 8, Ireland or email catherine.madden@uxdxconf.com</p>\n      </li>\n\n      <li>\n        <p class="header">No deductions or withholdings</p>\n        <p>All fees payable to us by you in accordance with the terms contained in this agreement shall be paid free and clear of all deductions or withholdings whatsoever.</p>\n      </li>\n\n      <li>\n        <p class="header">Complimentary delegate passes</p>\n        <p>Complimentary delegate passes are for employees to man the exhibition stand, attend presentations and network with the buyers / decision makers at the event. A sponsorship delegate registration form must be completed by the sponsor in order to obtain the complimentary delegate passes. Notification of assigned delegate passes or changes to delegate passes must be sent via email, to connect@uxdxconf.com  no later than 10 working days (23 October 2016) prior to the commencement of the Event.</p>\n      </li>\n\n      <li>\n        <p class="header">Access to Venue</p>\n        <ol>\n          <li>access by its employees and contractors to the Venue on Tuesday 1st November 2016 from 6.30pm until 10pm for the purpose of setting up any promotional structure or material permitted by this agreement.</li>\n          <li>access by its employees and contractors to the Venue from Wednesday 2nd November 2016 from 6pm until 10pm for the purpose of dismantling any promotional structure or material permitted by this agreement.</li>\n        </ol>\n      </li>\n\n      <li>\n        <p class="header">Unauthorised Promotional literature, merchandise and/or gifts</p>\n        <p>The placing of unauthorised promotional literature, merchandise and/or gifts at the Event or a social event is strictly forbidden. All unauthorised items will be removed and disposed of without notification. </p>\n      </li>\n\n      <li>\n        <p class="header">Indemnification</p>\n        <p>Both the Organiser and Sponsor (the "Indemnifying Party\u201D) shall indemnify the other party (the "Indemnified Party\u201D) against and save each other harmless from any and all suits, proceedings at law or in equity, claims, liabilities, damages, costs, payments and expenses, including reasonable attorney\'s fees, asserted against or incurred by the Indemnified Party, arising out of or in connection with the negligence or willful misconduct of the Indemnifying Party in the performance of this Agreement including, but not limited to, any claim for damages to property or injuries to persons, to the extent that such damages or injuries shall have been caused by, or shall have resulted from the willful or negligent acts or omissions of the Indemnifying Party, or its employees or agents.</p>\n      </li>\n\n      <li>\n        <p class="header">Event Postponement or Cancellations</p>\n        <p>The Organiser at its discretion shall have the right to postpone or cancel the Event and shall be liable in no way to the sponsor for losses resulting from such delay or cancellation. The Organiser will not be liable for fulfilment of this contract as to the delivery of exhibition space if non-delivery is due to any of the following causes including, but not limited to: damage caused by fire, act of God, public enemy, war or insurrections, strikes, picketing, the authority of the law, or for any cause beyond the Organiser\u2019s control. It will, however, in the event of it not being able to hold the Event for any of the above named reasons, reimburse the sponsor for the amount already paid for the sponsorship.</p>\n      </li>\n\n      <li>\n        <p class="header">Insurance</p>\n        <p>All Sponsors are strongly urged to obtain insurance coverage against damage or loss and public liability insurance against injury to the person or property of others. </p>\n        <p>Exhibition materials should be covered from the time they are shipped, through move-in, exhibit dates, move-out and until all materials have been received at the point of origin. The Sponsor assumes the entire responsibility and liability for losses, damages and claims arising out of injury or damage to Sponsor\u2019s display, equipment and other property brought upon the venue and shall indemnify and hold harmless the Organiser from any and all such abuses, damages and claims.</p>\n      </li>\n\n      <li>\n        <p class="header">Compliance</p>\n        <p>The Sponsor agrees to abide by and comply with the rules and regulations including any amendments that the Organiser may make from time to time. The Sponsor further assumes all responsibility for compliance with all pertinent laws, ordinances, regulations and codes of duly authorised governing bodies concerning fire, safety and health as well as the rules and regulations of the operators of and/or owners of the property where the Event is held.</p>\n      </li>\n\n      <li>\n        <p class="header">Amendments</p>\n        <p>Any and all matters and questions not specifically covered by the preceding regulations shall be subject to the decision of the Organiser. Sponsors shall be notified in writing of any amendments to these regulations.</p>\n      </li>\n\n      <li>\n        <p class="header">Miscellaneous matters</p>\n        <ol>\n          <li>The schedules, if any, to this agreement are part of the agreement and have the same force and effect.</li>\n          <li>No amendment or variation to this agreement is valid unless in writing, signed by each of the parties or his authorised representative.</li>\n          <li>If any term or provision of this agreement is at any time held by any jurisdiction to be void, invalid or unenforceable, then it shall be treated as changed or reduced, only to the extent minimally necessary to bring it within the laws of that jurisdiction and to prevent it from being void and it shall be binding in that changed or reduced form. Subject to that, each provision shall be interpreted as severable and shall not in any way affect any other of these terms.</li>\n          <li>No failure or delay by any party to exercise any right, power or remedy will operate as a waiver of it nor indicate any intention to reduce that or any other right in the future.</li>\n          <li>Any communication to be served on either of the Parties by the other shall be delivered by e-mail, hand or sent by first class post.<br>\n            It shall be deemed to have been delivered:<br>\n            if delivered by hand: on the day of delivery;<br>\n            if sent by post to the correct address: within 72 hours of posting;<br>\n            If sent by e-mail to the address from which the receiving party has last sent e-mail: within 24 hours if no notice of non-receipt has been received by sender.\n          </li>\n          <li>In the event of a dispute between the parties to this agreement, then they undertake to attempt to settle the dispute by engaging in good faith with the other in a process of mediation before commencing arbitration or litigation.</li>\n          <li>In the event of any conflict between any term of this agreement and the provisions of the articles of a limited company or any comparable document intended to regulate any other corporate or collective body, then the terms of this agreement shall prevail.</li>\n          <li>Each party shall bear its own legal costs and other costs and expenses arising in connection with the negotiation and drafting of this agreement.</li>\n          <li>The validity, construction and performance of this agreement shall be governed by the laws of Republic of Ireland.</li>\n\n        </ol>\n        <p>Any and all matters and questions not specifically covered by the preceding regulations shall be subject to the decision of the Organiser. Sponsors shall be notified in writing of any amendments to these regulations.</p>\n      </li>\n    </ol>\n  </div>\n</section>\n');
$templateCache.put('terms/terms.html','<section class="text pageSection">\n  <div class="container ">\n    <h1>Terms &amp; Conditions</h1>\n\n    <h2>Introduction</h2>\n    <p>Socially Motivated Ltd, trading as Initiate Network, respects your privacy and is committed to ensuring its protection. We assure you that any identifiable data that you provide when using our websites will be used in accordance with this privacy policy.</p>\n    <p>This privacy policy explains how and when Socially Motivated Ltd uses and shares your information when you visit our site. Our privacy policy is in compliance with the Data Protection Acts of 1998 and the Amendment of 2003.</p>\n    <p>By visiting this website you are accepting the terms and conditions of this privacy policy; if you do not agree with the terms and conditions below you should not use the above mentioned website(s).</p>\n\n    <h2>How We Collect Information</h2>\n    <p>These are the ways in which we collect your data:</p>\n    <ul>\n      <li>If you fill out a survey</li>\n      <li>If you register or sign in to the website/mobile app</li>\n      <li>If you fill out a form</li>\n      <li>If you subscribe to our newsletter or communications</li>\n      <li>If you purchase, or receive a complimentary, conference ticket</li>\n      <li>If you correspond with us via email, letter, social media</li>\n    </ul>\n\n    <h2>Information We Collect</h2>\n    <h3>Personal Information</h3>\n    <p>We collect personal information through the means listed in the \u201CHow We Collect Your Information\u201D paragraph above. This information includes:</p>\n    <ul>\n      <li>name</li>\n      <li>email address </li>\n      <li>employment details </li>\n      <li>telephone numbers </li>\n      <li>work, billing and home address </li>\n      <li>date of birth </li>\n      <li>social media details </li>\n      <li>tax identification or VAT Number (if applicable)</li>\n      <li>personal preferences related to conferences</li>\n    </ul>\n    <h3>Non Personal Information</h3>\n    <p>Non-personal information such as demographic data regarding your IP address is collected from all of our website visitors on a cumulative basis. This type of anonymous statistical data cannot be used to identify or contact you.</p>\n\n    <h2>Use of Cookies</h2>\n    <p>Our websites use cookies. A cookie is a small piece of text which asks permission to be placed on your computer\u2019s hard drive. Most web browsers automatically accept cookies although it may be possible to alter your browser to refuse cookies or to have it indicate when a cookie is being sent. However, this may prevent you from experiencing all that our website can offer.</p>\n    <p>When you agree for a cookie to be placed on your hard drive, the cookie may save your personal preferences so you do not have to constantly re-enter them, or it may provide you with preferential content.</p>\n\n    <h2>Why We Save Your Information</h2>\n    <p>Having visitor information is essential for us to properly identify our customers\u2019 needs. When we understand our visitors\u2019 and customers\u2019 needs, we can provide them with the best service.</p>\n    <p>When we process your information we may use it for one or all of the following reasons:</p>\n    <ul>\n      <li>To provide you with the product/service you have requested</li>\n      <li>To contact you in relation to the product/service you have requested</li>\n      <li>To send promotional emails about new offers or services which we think may be of benefit to you</li>\n      <li>To customise the website in accordance with your preferences</li>\n      <li>To respond to any communications we may receive from you</li>\n      <li>For internal record keeping</li>\n      <li>Analyse and use the data for targeted advertising communications </li>\n      <li>Perform mathematical and statistical analysis of my personal data for advertising purposes</li>\n    </ul>\n    <p>We may also supplement the data that you provide with additional data from public domain or private sources. We may use this enhanced data for the same purposes listed above.</p>\n\n    <h2>Disclosure</h2>\n    <p>All attendees for UXDX, excluding contact information, will be listed on our website to enable all attendees to identify people they would like to meet with and improve the networking experience for everyone at the conference.</p>\n    <p>Personal contact information will not be disclosed on the website or to third parties unless we have your permission. We may make non-personal information available to third parties, such as Google Analytics, to enable reporting on website visits and behaviours.</p>\n    <p>We do have external links to third party websites, such as links to sponsor websites, which are visibly defined as such throughout the website. We are not responsible for the content or privacy policies of these other websites.</p>\n    <p>We will provide your personal information if we are required to by any applicable law, a summons, a search warrant, a court order or other statutory requirement.</p>\n    <p>In the event of a sale, merger, receivership, liquidation we reserve the right to transfer all or largely all of our company\u2019s assets, including your personal information, to a third party as long as the third party only uses your personal information for the purposes for which you provided it to us and only if the third party agrees to follow the terms of this Privacy Policy. You will be contacted in the event of any such transfer and given the option to withdraw your connection with the website.</p>\n\n    <h2>Restricting the Use of your Personal Information</h2>\n    <p>All direct contact with you will include an unsubscribe link. If you wish to be removed from the attendee list you may contact us at any time at <a href="mailto:connect@uxdxconf.com">connect@uxdxconf.com</a> should you wish to be removed.</p>\n\n    <h2>Right of Access</h2>\n    <p>Under section 4 of the Acts, you have a right to be given a copy of your personal data. This is called a \u201CRight of Access\u201D. Should you wish to access this information, you must send a Subject Access Request email to <a href="mailto:connect@uxdxconf.com">connect@uxdxconf.com</a>. We will send a response to the link where the processing fee of \u20AC6.35 can be paid. We will respond to your request within 40 calendar days of payment. Included in the request should be a copy of your driver\u2019s licence or passport.</p>\n\n    <h2>Right of Rectification or Erasure</h2>\n    <p>Under section 6 of the Acts, you have a right to have your personal data corrected, if inaccurate, or erased, in the case that we do not have a legitimate reason for retaining the data. For this request, please follow the procedure as outlined in the paragraph above entitled \u201CRight of Access\u201D. Please note there is no fee for this request and we shall comply within 40 calendar days of the receipt of such a request.</p>\n\n    <h2>Security</h2>\n    <p>The security of your Personal Information is important to us. When you enter sensitive information (such as credit card number) on our registration or order forms, we encrypt that information using secure socket layer technology (SSL). However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security and cannot accept any liability where the security of your Personal Information is compromised.</p>\n\n    <h2>Retention</h2>\n    <p>Data will not be held for longer than is necessary for the purpose(s) for which they were obtained. Our policy is to delete credit card details once a transaction had been finalised, unless you consent to retain details to ease future transactions.</p>\n\n    <h2>Amendments to this Privacy Policy</h2>\n    <p>Should any modifications to this privacy policy be undertaken, a clearly visible notification will be placed on the website so that all users are fully aware of what data we collect, how that data is used, and if and why it is disclosed.</p>\n    <p>If we ever decide to use personal information in a considerably different manner to that described in this privacy policy, or otherwise stated to you when you agreed to provide your details, we will inform you by email and you will consequently be able to choose whether or not to permit us to use your information in the amended manner.</p>\n\n    <h1>Refund and Cancellation Policy</h1>\n    <p>All purchases of tickets for conferences and events (including hotel rooms if applicable) are non-refundable in their entirety. Your ticket remains the property of Socially Motivated Limited and is a personal revocable license, which may be withdrawn, and admission refused at any time upon a refund of the printed registration price.</p>\n    <p>In the unlikely event of cancellation of a conference or event the liability of Socially Motivated Limited is limited to the share of paid registration fees that remains after credit card and payment processing fees have been incurred and deducted.</p>\n    <p>It is strictly forbidden for any company, organisation or attendee to attempt to host or organise any event in conjunction with, contiguous to or purporting to be related to UXDX or its affiliates without the express prior permission and cooperation of Socially Motivated Limited. In the event of breach of these terms any tickets purchased by the organiser and their affiliates will be rendered null and void. Socially Motivated Limited reserves their right to take such legal action including a claim for damages as may be appropriate.</p>\n    <p>The tickets purchased (including hotel rooms if applicable) are for your own personal use or that of your business only and may not be re-sold or transferred for commercial gain under any circumstances, including but not limited to use as part of any promotion or competition. Where there has been any re-sale or attempted re-sale of any tickets (or any other breach of this term), we reserve the right to cancel the relevant tickets with immediate effect.</p>\n    <p>We reserve the right to cancel any ticket purchase made by any person or body whom we reasonably believe to be associated with any ticket broker or tout.</p>\n    <p>Socially Motivated Limited reserves the right to refuse admission to any event or conference for any behaviour, which it deems unacceptable, or for breach of the terms and conditions.</p>\n    <p>Socially Motivated Limited will not be responsible for any tickets that are lost or stolen. The unauthorised use of photographic and recording equipment at events and conferences is prohibited.</p>\n    <p>Socially Motivated Limited will not be liable for any loss injury or damage to any person or property howsoever caused (save for death or personal injury as a result of Socially Motivated Limited\u2019s negligence or for any other type of liability that cannot by law be excluded or limited.)</p>\n    <p>Socially Motivated Limited will not be liable for the granting of any VISAs that are required to attend any event or conference. In the event that an attendee\u2019s VISA is not granted tickets will not be refunded for any event or conference.</p>\n    <p>In the event that the purchaser is a consumer and to whom the European Directive on Consumer Rights (Directive 2011 / 83/ EU) applies, the consumer would be entitled to a cooling off period of fourteen days which would begin on the day the contract for distance selling was concluded.</p>\n    <p>For questions about registration, assistance with any registration problems or complaints, please contact us at <a href="mailto:connect@uxdxconf.com">connect@uxdxconf.com</a>.</p>\n\n    <h1>Event Cancellation, Postponement &amp; Substitution Policy</h1>\n    <p>Socially Motivated Limited is not responsible for any loss or damage as a result of a substitution, alteration, cancellation or postponement of an event. Socially Motivated Limited shall assume no liability whatsoever in the circumstances that an event is cancelled, rescheduled or postponed due to a fortuitous event, Act of God, unforeseen occurrence or any other event that renders performance of an event impracticable, illegal or impossible. For purposes of this clause, a fortuitous event shall include, but not be limited to: war, fire, labour strike, extreme weather or other emergency.</p>\n    <p>Please note that while speakers and topics are confirmed at the time of publishing, circumstances beyond the control of the organisers may necessitate substitutions, alterations or cancellations of the speakers and/or topics. As such, Socially Motivated Limited reserves the right to alter or modify the advertised speakers and/or topics if necessary without any liability to you whatsoever. Any substitutions or alterations will be updated on our web page as soon as possible.</p>\n\n    <h1>Delivery Policy</h1>\n    <p>Once a successful purchase transaction has been completed, tickets are delivered in electronic soft-copy via email to the email address nominated by the purchaser. For some ticket types it may be necessary to complete required information \u2013 such as attendee name \u2013 before the tickets can be issued. The ticket acts as a receipt for the transaction and can be used to redeem entry at the event listed on the ticket. A printed hard-copy ticket or an electronic soft-copy ticket detailing the reference number can be used to register at the event.</p>\n\n    <h1>General Clauses</h1>\n    <p>Irish law governs these terms and conditions and any dispute are subject to the exclusive jurisdiction of the Irish Courts.</p>\n    <ol>\n      <li>No transport of any kind will be provided to or from any event or conference location.</li>\n      <li>You consent to film and sound recording as attendees at any event or conference.</li>\n      <li>Socially Motivated Ltd shall be entitled to delegate the provision of its obligations under this Agreement.</li>\n      <li>No other terms shall apply to this Agreement and these terms contain the entire agreement and understanding between us in respect of all matters which are referred to herein and supersede any prior, written or oral agreement between us relating to such matters. You confirm that in agreeing to accept these terms you have not relied on any representation that is not expressly included herein and you agree that you shall have no remedy in respect of any misrepresentation which has not become a part of these terms. However, nothing in these terms purport to exclude liability for any fraudulent statement or act.</li>\n      <li>If any part of the terms herein shall be deemed unlawful, void or for any reason unenforceable then that provision shall be deemed to be severable from these terms and shall not affect the validity and enforceability of any of the remaining provisions of the terms. You agree not to:</li>\n      <ol>\n        <li>Use the Website/Mobile App (or any part of it) for any illegal purpose and agree to use it in accordance with all relevant laws;</li>\n        <li>Upload or transmit through the Website/Mobile App any computer viruses, macro viruses, trojan horses, worms or anything else;</li>\n        <li>Use the Website/Mobile App in a manner which (i) may cause the Website/Mobile App to be interrupted, damaged, rendered less efficient or such designed to interfere with, interrupt or disrupt the normal operating procedures of a computer or (ii) any material which is defamatory, offensive, or of an obscene or menacing character, or that may cause annoyance, inconvenience or needless anxiety; (iii) that the effectiveness or functionality of the Website/Mobile App is in any way impaired or (iv) violates or infringes the rights of any person, firm or company (including, but not limited to, rights of intellectual property, rights of confidentiality or rights of privacy) of the Website/Mobile App;</li>\n        <li>Create or publish a hypertext link to any part of the Website/Mobile App or attempt any unauthorised access to any part or component;</li>\n        <li>Copy or distribute any part of the Website/Mobile App in any medium without our prior written consent; and</li>\n        <li>Alter or modify any part of the Website/Mobile App other than as may be reasonably necessary to use the Website/Mobile App for its intended use.</li>\n      </ol>\n    </ol>\n    <p>We reserve the right to:</p>\n    <ol>\n      <li>Modify or withdraw, temporarily or permanently, the Website/Mobile App (or any part of it) with or without notice to you.</li>\n      <li>Change these Terms from time to time. Your continued use of the website/mobile app (or any part of it) following such change shall be subject to and including the changes made to the terms from time to time.</li>\n      <li>Monitor any activity and content associated with the Website/Mobile App. We may investigate any reported violation of these Terms to confirm that we shall not be liable to you or any third party for any modification to or withdrawal of the Website/Mobile App; and/or deemed to be your acceptance of such change. It is your responsibility to check regularly to determine whether the Terms have been changed. If you do not agree to any change to the Terms then you must immediately stop using the Website/Mobile App; and/ or complaints relating to the Website/Mobile App and take any action that we deem appropriate (which may include, but is not limited to, issuing warnings, suspending, terminating or attaching conditions to your access and/or removing any materials from the Website/Mobile App).</li>\n    </ol>\n\n    <h2>Limitation of Liability</h2>\n    <p>Whilst we will use reasonable endeavours to verify the accuracy of any information we place on the website/mobile app, we make no warranties, whether express or implied in relation to its accuracy. The Website/Mobile App is provided on an \u201Cas is\u201D and \u201Cas available\u201D basis for your information and personal use only without any representation or endorsement. Unless specified in separate terms and conditions relating to a particular product or service, we make no warranties of any kind, whether express or implied, in relation to the Website/Mobile App, or products or services offered on the Website/Mobile App whether by us or on our behalf (including free software downloads) including but not limited to, implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security, accuracy, condition or completeness, or any implied warranty arising from course of dealing or usage or trade You acknowledge that we cannot guarantee and therefore shall not be in any way responsible for the security or privacy of the Website/Mobile App and any information provided to or taken from the Website/Mobile App by you.</p>\n    <p>The Organisers and its subsidiaries will not be liable for any loss injury or damage to any person or property howsoever caused (save for death or personal injury as a result of the Organisers negligence or for any other type of liability that cannot by law be excluded or limited.)</p>\n\n    <h2>Indemnity</h2>\n    <p>You agree to be fully responsible for (and fully indemnify us against) all claims, liability, damages, losses, costs and expenses, including legal fees, suffered by us and arising out of any breach of the terms by you or any other liabilities incurred by us arising out of your use of the website/mobile app, or use by any other person accessing the website/mobile app using your pc or internet access account.</p>\n\n    <h2>Intellectual Property and Rights to Use</h2>\n    <p>You acknowledge and agree that all copyright, trademarks and all other intellectual property rights in all material or content contained within the Website/Mobile App shall remain at all times owned by us or our licensors. You are permitted to use this material only as expressly authorised by us. We reserve all rights not expressly granted in and to the Website/Mobile App and the content in the Website/Mobile App.</p>\n  </div>\n</section>\n');}]);
'use strict';

angular.module('home', ['constants', 'app.filters'])
// .constant('AppConstants', constants)
.config(function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl as home',
      resolve: {
        $title: function () { return 'Home'; },
        conference: ['conferenceService', function (conferenceService) {
          return conferenceService.getConference();
        }],
      }
    })
    ;
})
.controller('HomeCtrl', function ($http, BLOG_API, BLOG_URL, conference, $sce) {
  'ngInject';
  // this.news = news;
  var self = this;
  this.blog = BLOG_URL;
  this.conference = conference;

  //parse news
  this.conference.news = JSON.parse(this.conference.news);
  console.log(this.conference.news);

  //Parse speaker images
  this.conference.speakers.forEach(function (speaker) {
    speaker.profilePic = $sce.trustAsResourceUrl(speaker.profilePic);
  })

})
;

'use strict';

angular.module('terms', [])
.config(function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('terms', {
      url: '/terms',
      templateUrl: 'terms/terms.html',
      // controller: 'TermsCtrl as terms',
      resolve: {
        $title: function () { return 'Terms & Conditions'; },
      }
    })
    .state('anti-harassment', {
      url: '/anti-harassment',
      templateUrl: 'terms/anti-harassment.html',
      // controller: 'AntiHarassmentCtrl as antiharass',
      resolve: {
        $title: function () { return 'Anti Harassment Policy'; },
      }
    })
    .state('sponsor-terms', {
      url: '/sponsor-terms',
      templateUrl: 'terms/sponsor-terms.html',
      // controller: 'SponsorTermsCtrl as sponsorTerms',
      resolve: {
        $title: function () { return 'Terms & Conditions'; },
      }
    })
    ;
})
.controller('TermsCtrl', function ($state, $rootScope) {
  'ngInject';


})
.controller('AntiHarassmentCtrl', function ($state, $rootScope) {
  'ngInject';


})
;

'use strict';

angular.module('tickets', [])
.config(function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('tickets', {
      url: '/tickets',
      templateUrl: 'tickets/tickets.html',
      controller: 'TicketCtrl as tickets',
      resolve: {
        $title: function () { return 'Tickets'; },
        // conference: ['$http', function ($http) {
        //   return $http.get(constants.API + constants.CONFERENCE_URL + '/full');
        // }]
      }
    })
    ;
})
.controller('TicketCtrl', function ($rootScope, $window, angularLoad) {
  'ngInject';

  // var release_id = 'bc9tf030gwm';
  // var event_url = 'initiate/uxdx2016';
  // window.TitoWidget.instance(event_url, {
  //     releases: [release_id],
  //     success: function(widget) {
  //       widget.load();
  //       // document.getElementById('some-element').onclick = function(){
  //       //   quantity = 1
  //       //   prefill = JSON.stringify({"name": "Paul Campbell", "email": "paul@tito.io", "company_name": "Tito"})
  //       //   widget.iframe().load_payment_form("registration[release_ids][" + release_id +"]=" + quantity + "&registration[prefill]=" + prefill, 'https://ti.to/your/conf/registrations')
  //       // }
  //       return false
  //     }
  //   })

  // $rootScope
  //   .$on('$viewContentLoaded', function(event, viewConfig){
  //     angularLoad.loadScript('https://js.tito.io/v1').then(function() {
  //       var button = $window.TitoWidget.button_elements();
  //       // var instance = $window.TitoWidget.button_elements();
  //       // $window.Tito.Button(button);
  //     });
  //   });
  //     console.log('viewContentLoaded')
        // angularLoad.loadScript('https://js.tito.io/v1').then(function() {
        //   // Script loaded succesfully.
        //   // We can now start using the functions from someplugin.js
        //   console.log('loaded')
        // }).catch(function(err) {
        //     // There was some error loading the script. Meh
        //     console.log('did not load', err)
        // });
    // });

})
;

'use strict';

angular.module('survey', [])
.config(function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('survey', {
      url: '/survey',
      templateUrl: 'survey/survey.html',
      controller: 'SurveyCtrl as survey',
      resolve: {
        $title: function () { return 'Survey'; },
        // conference: ['$http', function ($http) {
        //   return $http.get(constants.API + constants.CONFERENCE_URL + '/full');
        // }]
      }
    })
    ;
})
.controller('SurveyCtrl', function () {
  'ngInject';


})
;

'use strict';

angular.module('about', [])
.config(function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'about/about.html',
      controller: 'AboutCtrl as about',
      resolve: {
        $title: function () { return 'About'; },
        // conference: ['$http', function ($http) {
        //   return $http.get(constants.API + constants.CONFERENCE_URL + '/full');
        // }]
      }
    })
    ;
})
.controller('AboutCtrl', function () {
  'ngInject';


})
;

'use strict';

angular.module('agenda', [])
.config(function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('agenda', {
      url: '/agenda',
      templateUrl: 'agenda/agenda.html',
      controller: 'AgendaCtrl as agenda',
      resolve: {
        $title: function () { return 'Agenda'; },
        conference: ['conferenceService', function (conferenceService) {
          return conferenceService.getConference();
        }]
      }
    })
    ;
})
.controller('AgendaCtrl', function (conference) {
  'ngInject';
  var self = this;
  this.conference = conference;
  this.agenda = conference.agenda;
  // this.agenda = conference.agendas.filter(function (agenda) {
  //   return agenda.primary
  // })[0];
  //hydrate all agendaSession sessions
  this.agenda.sessions.forEach(function (agendaSession) {
    agendaSession.sessionId.speakers = [];
    agendaSession.sessionId.speakerIds.forEach(function (speakerId) {
      self.conference.speakers.forEach(function (speaker) {
        if(speakerId === speaker._id.toString()) {
          agendaSession.sessionId.speakers.push(speaker);
        }
      });
    });
  });
})
;

'use strict';

angular.module('exhibition', [])
.config(function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('exhibition', {
      url: '/exhibition',
      templateUrl: 'exhibition/exhibition.html',
      controller: 'ExhibitionCtrl as exhibition',
      resolve: {
        $title: function () { return 'Exhibition'; },
        // conference: ['$http', function ($http) {
        //   return $http.get(constants.API + constants.CONFERENCE_URL + '/full');
        // }]
      }
    })
    ;
})
.controller('ExhibitionCtrl', function ($http, API, CONFERENCE_URL) {
  'ngInject';
  var self = this;
  this.showForm = true;
  this.formError = false;
  this.processing = false;

  this.sendPartner = function () {
    //validate the form
    if(!self.partnerForm.name || !self.partnerForm.company) {
      self.formError = true;
    }
    else {
      self.processing = true;

      var partnerContact = {
        name: self.partnerForm.name,
        company: self.partnerForm.company,
        email: self.partnerForm.email,
        phone: self.partnerForm.phone,
        actioned: false
      };
      // save the media request
      $http.post(API + CONFERENCE_URL + '/sponsors/request', partnerContact)
        .success(function () {
          self.showForm = false;
          self.processing = false;
        })
        .error(function (err) {
          console.log(err);
          self.formError = true;
          self.processing = false;
        });
    }
  };

})
;

'use strict';

angular.module('speaker', [])
.config(function ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('speaker', {
      url: '/speaker/:speakerId',
      templateUrl: 'speakers/speaker.html',
      controller: 'SpeakerCtrl as speaker',
      resolve: {
        $title: function () { return 'Speaker'; },
        conference: ['conferenceService', function (conferenceService) {
          return conferenceService.getConference();
        }],
        // sessions: ['dataService', '$stateParams', function (dataService, $stateParams) {
        //   return dataService.getSessions({speaker: $stateParams.id});
        // }]
      }
    })
    ;
})
.controller('SpeakerCtrl', function (conference, $stateParams, $sce) {
  'ngInject';

  this.speaker = conference.speakers.filter(function (speaker) {
    return speaker._id.toString() === $stateParams.speakerId;
  })[0];

  this.speaker.profilePic = $sce.trustAsResourceUrl(this.speaker.profilePic);
  this.speaker.companyLogo = $sce.trustAsResourceUrl(this.speaker.companyLogo);

})
;

angular.module('app.services', [])
.factory('conferenceService',['$http', '$q', 'API', 'CONFERENCE_URL', function ($http, $q, API, CONFERENCE_URL) {
    var conference;

    function getConference () {
      var def = $q.defer();
      $http.get(API + CONFERENCE_URL + '/full', {cache: true}).then(function (results) {
        // console.log(results);
        conference = results.data;
        def.resolve(conference);
      },
      function (err) {
        conference = null;;
        def.reject(err);
      });
      return def.promise;
    }

    var service = {
      getConference: getConference
    };
    return service;
  }])
