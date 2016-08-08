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

    'home'
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

angular.module('constants', [])

  .value('API', API_URL + '/api/v1')
  .value('CONFERENCE_URL', '/conference/abcd')
  .value('eventTimeZone', '-0000')

  .value ('partnerLevels', [{
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
;

angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('home/home.html','<header>\n    <div class="header-container">\n        <div class="container">\n            <div class="intro-text">\n                <span class="logo-header">UXDX</span>\n                <div class="intro-details">\n                    <p class="intro-details-text">The Team behind the product | 2 November | Dublin </p>\n                </div>\n                <a href="#tickets" class="page-scroll btn btn-xl" target="_self" offset="30" du-smooth-scroll du-scrollspy>Register Now</a>\n                <div class="social-row">\n                    <ul class="list-inline social-buttons">\n                        <li><a href="https://twitter.com/uxdxconf"><i class="fa fa-twitter"></i></a></li>\n\n                        <li><a href="https://facebook.com/uxdxconf"><i class="fa fa-facebook"></i></a></li>\n                        <li><a href="https://www.youtube.com/c/uxdxconf"><i class="fa fa-youtube"></i></a></li>\n                    </ul>\n                </div>\n<!--                 <a href="#services" class="page-scroll btn btn-xl">Tell Me More</a> -->\n            </div>\n\n        </div>\n    </div>\n</header>\n\n    <!-- Survey Section -->\n<!--     <section id="survey">\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-12">\n                    <h2 class="section-heading text-center">Product industry in Ireland Survey 2016</h2>\n                </div>\n            </div>\n            <div class="row text-center padded-top-row">\n                <div class="col-md-4">\n                    <a href="https://docs.google.com/forms/d/1p_Gg_0GwjU81Z49rj3tB4eGK6qkgKZSK-Jdm058Sspk/viewform" target="_blank">\n                        <span class="fa-stack fa-4x">\n                            <i class="fa fa-circle fa-stack-2x text-primary"></i>\n                            <i class="fa fa-eur fa-stack-1x fa-inverse"></i>\n                        </span>\n                    </a>\n                    <h4 class="service-heading"><a href="https://docs.google.com/forms/d/1p_Gg_0GwjU81Z49rj3tB4eGK6qkgKZSK-Jdm058Sspk/viewform" target="_blank">Salary</a></h4>\n                    <h5 class="service-sub-heading">5 mins</h5>\n                    <p class="text-muted">How does your salary compare by role, skill set and work experience?</p>\n                </div>\n                <div class="col-md-4">\n                    <a href="https://docs.google.com/forms/d/1ga5vXRZdjCu4cXBksdsvjmDvwZTfLLKU3MUjfmNTTV4/viewform" target="_blank">\n                        <span class="fa-stack fa-4x">\n                            <i class="fa fa-circle fa-stack-2x text-primary"></i>\n                            <i class="fa fa-bug fa-stack-1x fa-inverse"></i>\n                        </span>\n                    </a>\n                    <h4 class="service-heading"><a href="https://docs.google.com/forms/d/1ga5vXRZdjCu4cXBksdsvjmDvwZTfLLKU3MUjfmNTTV4/viewform" target="_blank">Challenges</a></h4>\n                    <h5 class="service-sub-heading">5 - 7 mins</h5>\n                    <p class="text-muted">What are the common challenges for you and how are these challenges being addressed?</p>\n                </div>\n                <div class="col-md-4">\n                    <a href="https://docs.google.com/forms/d/1OPdmEejcQDZVMTwFqeZ0Aymrl_3Y4eH1AefPtgpj71g/viewform" target="_blank">\n                        <span class="fa-stack fa-4x">\n                            <i class="fa fa-circle fa-stack-2x text-primary"></i>\n                            <i class="fa fa-clock-o fa-stack-1x fa-inverse"></i>\n                        </span>\n                    </a>\n                    <h4 class="service-heading"><a href="https://docs.google.com/forms/d/1OPdmEejcQDZVMTwFqeZ0Aymrl_3Y4eH1AefPtgpj71g/viewform" target="_blank">Ireland and the Future</a></h4>\n                    <h5 class="service-sub-heading">5 mins</h5>\n                    <p class="text-muted">What can the government and industry do to support you?</p>\n                </div>\n            </div>\n            <div class="row padded-top-row text-center">\n                <div class="wiifm">\n                    <h2>Whats in it for me?</h2>\n                    <hr>\n                    <h3 class="survey-sub-heading">We\'ll share the anonymised results.</h3>\n                    <p>How does your salary compare? How are others overcoming similar challenges to you?</p>\n          \n                    \n                </div>\n                <a class="btn btn-xl" href="https://docs.google.com/forms/d/1p_Gg_0GwjU81Z49rj3tB4eGK6qkgKZSK-Jdm058Sspk/viewform" target="_blank">Start the Survey Now</a>\n            </div>\n        </div>\n    </section> -->\n\n\n<section id="about">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <h2 class="section-heading text-center">What to Expect from UXDX</h2>\n<!--                     <h3 class="section-sub-heading text-center">Product Team Efficiencies</h3>\n                <p class="text-muted">UXDX is all about the strategies and tactics for building high performing, efficient teams who can speed up the product delivery and learning cycles. Our focus is on self sufficient teams who own the end-to-end product life cycle with a particular focus on lean delivery, integrated UX, continuous delivery and automated DevOps deployments. </p> -->\n            </div>\n        </div>\n        <div class="row padded-top-row col-xs-10 col-xs-offset-1">\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-user fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10">\n                    <h4 class="service-heading">Speakers</h4>\n                    <p class="text-muted">Over 10 leading designers, developers, product owners and CTO\u2019s will take to the UXDX stage to inspire you with their visions on product design and deployment. They\u2019ll provide you with their leadership and advice on how to better manage cross functional teams and key tips drawing from what they\u2019ve learned over the years in the product space. Our speakers will consist of a mix of both new startups who are launching a ground-breaking product for their industry to large corporations who have successfully sped up their release cycles. </p>\n                </div>\n            </div>\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2 col-sm-push-9 col-md-push-10 align-right">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-life-ring fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10 col-sm-pull-3 col-md-pull-2 align-right">\n                    <h4 class="service-heading">Deep Dives</h4>\n                    <p class="text-muted">Want to drill into specifics of a talk, or get advice on your own project? You might just have a question that\u2019s better asked in an intimate, informal group. After each talk, the presenters will transition to the Deep Dive area. This area is conducive to continuing the conversation between participants and presenters. The crowd drives the deep dive dialogue up to 30 mins.</p>\n                </div>\n            </div>\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-clock-o fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10">\n                    <h4 class="service-heading">Office Hours</h4>\n                    <p class="text-muted">A free, intensive, 30 minute consultation. The Office Hours space will include experts in design, engineering, development and product management that provides you with unfiltered, objective, and actionable advice; from onboarding issues to speeding up your release cycle. Your chosen expert will ensure you walk out the door with actionable items to address. </p>\n\n<!--                         <p class="text-muted">Whether you\u2019re involved in designing, developing, launching, or growing a product or service, this will be a sell-out experience, so register your interest now.</p> -->\n                </div>\n            </div>\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2 col-sm-push-9 col-md-push-10 align-right">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-share-alt fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10 col-sm-pull-3 col-md-pull-2 align-right">\n                    <h4 class="service-heading">Networking</h4>\n                    <p class="text-muted">UXDX is not just about great content - building a great team requires great people. We are incorporating Networking into everything that we do at the conference from sharing attendee details upfront, so you can make contact before the event, to interactive sessions during the day,  to the After Hours party with 800 of your new best friends.</p> \n<!--                         <p class="text-muted">UXDX is not just about great content. In the spirit of building great teams and products, UXDX will feature a full day of team building and networking activities. You will work hard and play hard across the day with interactive breakouts, interactive sessions, happy hour, and one kick-ass after party at After Hours UXDX with 800 of your new best friends.</p> -->\n                </div>\n            </div>\n<!--                 <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-lightbulb-o fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10">\n                    <h4 class="service-heading">Product Showcase</h4>\n                    <p class="text-muted">How does your salary compare by role, skill set and work experience?</p>\n                </div>\n            </div>\n            <div class="row about-iconText">\n                <div class="col-xs-12 col-sm-3 col-md-2 col-sm-push-9 col-md-push-10 align-right">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x"></i>\n                        <i class="fa fa-beer fa-stack-1x fa-inverse text-primary"></i>\n                    </span>\n                </div>\n                <div class="col-xs-12 col-sm-9 col-md-10 col-sm-pull-3 col-md-pull-2 align-right">\n                    <h4 class="service-heading">PubX</h4>\n                    <p class="text-muted">How does your salary compare by role, skill set and work experience?</p>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</section>\n\n<section id="agenda">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <h2 class="section-heading text-center">Agenda</h2>\n<!--                     <h3 class="section-sub-heading text-center">Product Team Efficiencies</h3>\n                <p class="text-muted">UXDX is all about the strategies and tactics for building high performing, efficient teams who can speed up the product delivery and learning cycles. Our focus is on self sufficient teams who own the end-to-end product life cycle with a particular focus on lean delivery, integrated UX, continuous delivery and automated DevOps deployments. </p> -->\n            </div>\n        </div>\n        <div class="row padded-top-row align-center">\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>8:30 - 9:00</p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker">\n                    </div>\n                    <p class="text-muted">Registration and Networking</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>9:00 - 9:40</p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Opening Keynote</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>9:40 - 10:20 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>The All Stars Team</p>\n<!--                         <p class="small">We\u2019ve put together the ultimate product dream team to ask the questions of why they continue to achieve success in their role, and an understanding of what makes them a great team player. Our all-star team will consist of a lead designer, developer, UX and product owner. </p> -->\n                </div>\n            </div>\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>10:20 - 11:00 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker">\n                    </div>\n                    <p class="text-muted">Networking Break / Product Showcase</p>\n                </div>\n            </div>\n            \n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>11:00 - 11:40 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker-img">\n                        <img src="../../img/speakers/brianstephens.jpg" alt="Brian Stephens">\n                    </div>\n                    <p>Brian Stephens, CEO, Design Partners</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>11:40 - 12:20 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Interactive Session</p>\n                </div>\n            </div>\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>12:20 - 13:20 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker">\n                    </div>\n                    <p class="text-muted">Lunch</p>\n                </div>\n            </div>\n\n            \n            \n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>13:20 - 14:00 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Product Spotlight</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>14:00 - 14:40 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker-img">\n                        <img src="../../img/speakers/davidboundy.jpg" alt="David Boundy">\n                    </div>\n                    <p>David Bounty, Director IOT Innovation, Intel</p>\n                </div>\n            </div>\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>14:40 - 15:30 </p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker">\n                    </div>\n                    <p class="text-muted">Networking Break / Product Showcase</p>\n                </div>\n            </div>\n\n\n            \n            \n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>15:30 - 16:10</p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Product Spotlight</p>\n                </div>\n            </div>\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time">\n                    <p>16:10 - 16:50</p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-primary">\n                    </div>\n                    <p>Closing Keynote</p>\n                </div>\n            </div>\n\n            <div class="agenda-item row">\n                <div class="col-xs-6 col agenda-time last">\n                    <p>18:00 - Late</p>\n                </div>\n\n                <div class="col-xs-5 agenda-name">\n                    <div class="marker marker-secondary">\n                    </div>\n                    <p>UXDX After Hours</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<!-- Tickets Grid Section -->\n <section id="tickets" class="bg-light-gray">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12 text-center">\n                <h2 class="section-heading">Tickets</h2>\n                <!--<h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>-->\n            </div>\n        </div>\n        <div class="row ticket-row">\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box ticket-primary">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Super Early</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC125</p>\n                        <p class="ticket-exvat">\u20AC102 Ex VAT</p>\n                        <p class="ticket-description">(Ends on 17/08/2016)</p>\n                    </div>\n                    <div class="ticket-footer">\n                        <tito-button event="initiate/uxdx-2016" releases="bc9tf030gwm">Book Now</tito-button>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Early</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC195</p>\n                        <p class="ticket-exvat">\u20AC159 Ex VAT</p>\n                        <p class="ticket-description">(Ends on 28/09/2016)</p>\n                    </div>\n                    <div class="ticket-footer">\n                        <button class="ticket-button btn">Coming Soon</button>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Regular</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC295</p>\n                        <p class="ticket-exvat">\u20AC240 Ex VAT</p>\n                        <p class="ticket-description">(Ends on 19/10/2016)</p>\n                    </div>\n                    <div class="ticket-footer">\n                        <button class="ticket-button btn">Coming Soon</button>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xs-12 col-sm-3">\n                <div class="ticket-box">\n                    <div class="ticket-header">\n                        <p class="ticket-name">Late</p>\n                    </div>\n                    <div class="ticket-details">\n                        <p class="ticket-cost">\u20AC350</p>\n                        <p class="ticket-exvat">\u20AC285 Ex VAT</p>\n                    </div>\n                    <div class="ticket-footer">\n                        <button class="ticket-button btn">Coming Soon</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n');}]);
'use strict';

angular.module('home', ['constants'])
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
        // conference: ['$http', function ($http) {
        //   return $http.get(constants.API + constants.CONFERENCE_URL + '/full');
        // }]
      }
    })
    ;
})
.controller('HomeCtrl', function ($state, $rootScope) {
  'ngInject';


})
;
