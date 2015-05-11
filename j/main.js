var app = angular.module('tableApp', ['ui.bootstrap']);

app.directive('powersearch', function() {
	return {
		restrict: 'E',
		template: '<input placeholder="Search anything you want!" class="powersearch" type="text" ng-model="find.$" />',
	};
});

app.directive('project', function() {
	return {
		restrict: 'E',
		template: '<h1 class="project">{{project.name1}} <span class="project-title">{{project.name2}}</span></h1>'
	};
});

app.factory('Computers', function(){
  var Computers = {};

  // we can pass this from the database later
  Computers.specification = [
    {
      motherboard: "ASUS A55M-A",	
      gpu: "hd 8280",
      cpu: "x4760k",
      ram: "4gb",
      hdd: "2tb",
      ssd: "128gb",
      psu: "Rosewill CAPSTONE-650",
      heatsink: "Stock",
      casing: "Corsair 200R"
    },
    {
      motherboard: "MSI B85-G41",	
      gpu: "gtx 750",
      cpu: "g3220",
      ram: "8gb",
      hdd: "500gb",
      ssd: "none",
      psu: "Rosewill CAPSTONE-650",
      heatsink: "NH-D14",
      casing: "Antec GX500"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "1tb",
      ssd: "none",
      psu: "CORSAIR CX430M",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "12gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "SeaSonic S12II 620",
      heatsink: "TC14PE",
      casing: "Antec GX500"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "1tb",
      ssd: "none",
      psu: "SeaSonic S12II 620",
      heatsink: "Stock",
      casing: "Corsair 200R"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "16gb",
      hdd: "500gb",
      ssd: "none",
      psu: "CORSAIR CX430M",
      heatsink: "Stock",
      casing: "Rosewill R5"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill capstone-650",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "6gb",
      hdd: "3tb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Corsair 200R"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "GTX 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill CAPSTONE-650",
      heatsink: "TC14PE",
      casing: "Corsair 200R"
    },
    {
      motherboard: "Rampage IV Extreme",	
      gpu: "GTX 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "750gb",
      ssd: "256gb",
      psu: "XFX PRO 750W",
      heatsink: "stock",
      casing: "Antec GX500"
    },
    {
      motherboard: "ASUS A55M-A",	
      gpu: "hd 8280",
      cpu: "x4760k",
      ram: "4gb",
      hdd: "1tb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "TC14PE",
      casing: "Rosewill R5"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "8gb",
      hdd: "500gb",
      ssd: "256gb",
      psu: "CORSAIR CX430M",
      heatsink: "TC14PE",
      casing: "Antec GX500"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "HD 7540",
      cpu: "g4010",
      ram: "8gb",
      hdd: "500gb",
      ssd: "128gb",
      psu: "CORSAIR CX430M",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill capstone-650",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "6gb",
      hdd: "3tb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Corsair 200R"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "GTX 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill CAPSTONE-650",
      heatsink: "TC14PE",
      casing: "Corsair 200R"
    },
    {
      motherboard: "Rampage IV Extreme",	
      gpu: "GTX 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "750gb",
      ssd: "256gb",
      psu: "XFX PRO 750W",
      heatsink: "stock",
      casing: "Antec GX500"
    },
    {
      motherboard: "ASUS A55M-A",	
      gpu: "hd 8280",
      cpu: "x4760k",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "XFX PRO 500W",
      heatsink: "TC14PE",
      casing: "Antec GX500"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill capstone-650",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "6gb",
      hdd: "3tb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Corsair 200R"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill capstone-650",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill capstone-650",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "6gb",
      hdd: "3tb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Corsair 200R"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "XFX PRO 750W",
      heatsink: "TC14PE",
      casing: "Antec GX500"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill capstone-650",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "6gb",
      hdd: "3tb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Corsair 200R"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "GTX 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill CAPSTONE-650",
      heatsink: "TC14PE",
      casing: "Corsair 200R"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "HD 7540",
      cpu: "G4010",
      ram: "8GB",
      hdd: "750GB",
      ssd: "256GB",
      psu: "XFX PRO 500W",
      heatsink: "stock",
      casing: "Corsair 200R"
    },
    {
      motherboard: "ASUS A55M-A",	
      gpu: "hd 8280",
      cpu: "x4760k",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "XFX PRO 500W",
      heatsink: "TC14PE",
      casing: "Antec GX500"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill capstone-650",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "6gb",
      hdd: "3tb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Corsair 200R"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill capstone-650",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "6gb",
      hdd: "3tb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Corsair 200R"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "GTX 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill CAPSTONE-650",
      heatsink: "TC14PE",
      casing: "Corsair 200R"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "4gb",
      hdd: "750gb",
      ssd: "128gb",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "8gb",
      hdd: "1tb",
      ssd: "none",
      psu: "CORSAIR CX430M",
      heatsink: "TC14PE",
      casing: "Rosewill R5"
    },
    {
      motherboard: "MSI H81M-P33",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "16gb",
      hdd: "750gb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Corsair 200R"
    },
    {
      motherboard: "GIGABYTE X79-UP4",	
      gpu: "hd 7540",
      cpu: "g4010",
      ram: "16gb",
      hdd: "1tb",
      ssd: "128gb",
      psu: "Rosewill capstone-650",
      heatsink: "NH-D14",
      casing: "Rosewill R5"
    },
    {
      motherboard: "ASRock Z97 PRO4",	
      gpu: "gtx 770",
      cpu: "i7 4960x",
      ram: "6gb",
      hdd: "3tb",
      ssd: "none",
      psu: "XFX PRO 750W",
      heatsink: "NH-D14",
      casing: "Corsair 200R"
    },
  ];
  return Computers;
});

app.factory('Country', function(){
  var Country = {};

  // we can pass this from the database later
  Country.name = [
	{
      flag: "Australia"
    },
    {
      flag: "Brazil"
    },
    {
      flag: "Canada"
    },
    {
      flag: "Finland"
    },
    {
      flag: "France"
    },
    {
      flag: "Germany"
    },
    {
      flag: "Hong Kong"
    },
    {
      flag: "Ireland"
    },
    {
      flag: "Japan"
    },
    {
      flag: "South Korea"
    },
    {
      flag: "Mexico"
    },
    {
      flag: "Taiwan"
    },
    {
      flag: "United Kingdom"
    },
    {
      flag: "United States"
    }
  ];
  return Country;
});

app.controller('specsCtrl', function($scope, Computers) {
	$scope.computers = Computers;
});

app.controller('projectCtrl', function ($scope, Country) {
	$scope.country = Country;

	$scope.project = {
		name1 :'Project',
		name2 :'C'
	};

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});