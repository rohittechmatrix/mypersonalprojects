	var showDownloadApp = "false";
	var appStoreUrl = "";
	var getAppStoreName = "application store";
	var isABT = "false";
	var abtUserName = "";
	var baseDir = "default/";
	var categoryName = "Home";
	var menuId = "home";
	var tenantId = "1";
	var frescoTenantId = "1";
	var login = "true";
	var serverDate = "Thu, 11 Sep 2014 18:13:11 +0530";
	var appProp = {
			 default_site_name:'www.yatra.com',
			 application_context_name:'fresco',
			 site_default_language_code:'en',
			 site_default_currency_id:'1',
			 site_environment_variable:'prod',
			 cache_cms_content_updates:'false',
			 yatra_js_location:'http://js.yatra.com/content/fresco/{base.dir}js/',
			 yatra_jsplugin_location:'http://js.yatra.com/content/fresco/js/',
			 yatra_js_version:'?version=2014190147',
			 yatra_image_location:'http://img.yatra.com/ythomepagecms/media/',
			 yatra_font_location:'http://img.yatra.com/content/fresco/{base.dir}fonts/',
			 yatra_css_location:'http://css.yatra.com/content/fresco/{base.dir}css/',
			 fresco_app_location:'http://www.yatra.com/fresco/',
			 local_image_location:'/fresco/resources/css/common/images',
			 yatra_external_js_location:'https://secure.yatra.com/content/js',
			 secure_yatra_js_location:'https://secure.yatra.com/content/fresco/{base.dir}js/',
			 secure_yatra_jsplugin_location:'https://secure.yatra.com/content/fresco/js/',
			 secure_yatra_img_location:'https://secure.yatra.com/ythomepagecms/media/',
			 secure_yatra_font_location:'https://secure.yatra.com/content/fresco/{base.dir}fonts/',
			 secure_yatra_css_location:'https://secure.yatra.com/content/fresco/{base.dir}css/',
			 secure_fresco_app_location:'https://secure.yatra.com/fresco/',
			 abtLoginUrl:'https://secure.yatra.com/creditpool/login',
			 abtLogoutUrl:'https://secure.yatra.com/creditpool/logout',
			 abtHomeUrl:'https://secure.yatra.com/creditpool/abt/home',
			 domesticTenant:'dom',
			 internationalTenant:'int',
			 usTenant:'us',
			 domesticNimbleTenant:'dom2',
			 domNimbleOn:'true',
			 intNimbleOn:'true',
			 intNimbleRedirectPercentage:'100',
			 isSsoOn:'true',
			 ssoLoginUrl:'/signin/createUserCookie',
			 ssoTokenGetUrl:'/signin/getSSOToken',
			 ssoTokenRemoveUrl:'/signin/removeSSOToken',
			 ssoLogoutUrl:'/signin/doLogout',
			 flightDomSearchUrl:'http://flight.yatra.com/air-search/dom2/trigger',
			 flightIntSearchUrl:'http://flight.yatra.com/flights-india-yt/int/wait/search',
			 flightUsSearchUrl:'http://flight.yatra.com/flights-india-yt/us/flight/search',
			 nimbleDomSearchUrl:'http://flight.yatra.com/air-search/dom2/trigger',
			 nimbleIntSearchUrl:'http://flight.yatra.com/air-search/int2/trigger',
			 wapFlightDomSearchUrl:'http://flight.yatra.com/wap/mdomwap/trigger',
			 wapFlightIntSearchUrl:'http://flight.yatra.com/wap/mintwap/trigger',
			 wapFlightUsSearchUrl:'http://flight.yatra.com/wap/muswap/trigger',
			 BEFlightAirFareCalendarUrl:'http://www.yatra.com/air-service/dom2/airMonthView',
			 exploreVacationIdeasUrl:'http://www.yatra.com/holidays/holiday-json.htm?component=PackageList',
			 hotelDomSearchUrl:'http://hotel.yatra.com/hotels-india/hotel/search.htm',
			 hotelIntSearchUrl:'http://internationalhotels.yatra.com/searchresults.html',
			 dynapackHomeUrl:'http://www.yatra.com/fresco/flights-hotels',
			 dynapackDomSearchUrl:'http://dpack.yatra.com/flights-hotels/wait',
			 holidayDomSearchUrl:'http://packages.yatra.com/holidays/india-tour-packages/wait.htm',
			 holidayIntSearchUrl:'http://packages.yatra.com/holidays/international-tour-packages/wait.htm',
			 holidayThemeSearchUrl:'http://packages.yatra.com/holidays/packages/wait.htm',
			 flightAutolookupUrl:'http://www.yatra.com/flights-india-yt/autosuggest/autosuggestion',
			 hotelAutolookupUrl:'http://www.yatra.com/hotels-india/hotel/getHomePageAutocompleteData.htm',
			 holidayAutolookupUrl:'http://www.yatra.com/holidays/holiday-json.htm?component=BookingEngine',
			 ajaxServiceUrl:'http://www.yatra.com/fresco/getWSContent',
			 frescoServiceUrl:'http://www.yatra.com/fresco/internalService',
			 isQBOn:'true',
			 pageID:'home',
			 flight_app_location:'http://www.yatra.com/flights-india-yt',
			 isQuickBookPromotionsDiscountingEnabled:'true',
			 isQuickBookPromotionsEnabled:'true',
			 priceCalendar:'true',
			 priceCalendarForMulticity: 'false',
			 priceCalendarAlignEnable:'true',
			 isIntDynapackOn:'true',
			 dynapackIntSearchUrl:'http://dpack.yatra.com/flights-hotels/int/wait',
			 trainAutolookupUrl:'http://www.yatra.com/trains/autosuggestion',
			 trainDomSearchUrl:'http://rail.yatra.com/trains/search',
			 hotelQbDiscountingService:'http://www.yatra.com/hotels-india/hotel/ajax/getqbDiscount.htm',
			 hotelQbWizardUrl:'https://secure.yatra.com/social/common/quickbook/register.htm?tenantId=12&action=ajax&secure=false&setCookie=true',
			 flightQbWizardUrl:'https://secure.yatra.com/social/common/quickbook/register.htm?tenantId=3&action=ajax&secure=false&setCookie=true',
			 flightDomQbDiscountingService:'http://www.yatra.com/air-pay-book-service/dom/discountService/getDiscounts',
			 flightIntQbDiscountingService:'http://www.yatra.com/air-pay-book-service/int/discountService/getDiscounts',
			 isQuickBookOnTablet:'true',
			 airportCodePriority:'0',
			 cityNameDomPriority:'1',
			 cityNameAllPriority:'2',
			 cityNamePriority:'3',
			 countryNameDomPriority:'4',
			 countryNameAllPriority:'5',
			 countryNamePriority:'6',
			 originCityNearbyAirportsEnabled:'true',
			 arrivalCityNearbyAirportsEnabled:'true',
			 flightAutocompleteMinChar:'1',
			 flightAutocompleteWithoutAjax:'true',
			 recentSearchProp:{
				 urls: {
					  flights:{"search":{dom:'http://flight.yatra.com/air-search/dom2/trigger', international:'http://flight.yatra.com/air-search/int2/trigger'},
					  		    review:{dom:'http://www.yatra.com/flights-india-yt/dom2/book/bookAjax', international:'http://www.yatra.com/flights-india-yt/int2/book/bookAjax'}},
					  hotels:{"search":{dom:'http://hotel.yatra.com/hotels-india/hotel/searchresults.htm', international:'http://internationalhotels.yatra.com/searchresults.html'},
					  			review:{dom:'https://secure.yatra.com/hotels-india/hotel/review.htm', international:'https://secure.yatra.com/hotels-india/hotel/review.htm'}},
					  holidays:{"search":{dom:'http://packages.yatra.com/holidays/india-tour-packages/wait.htm', international:'http://packages.yatra.com/holidays/india-tour-packages/wait.htm'},
						  		review:{dom:'http://packages.yatra.com/holidays/india-tour-packages/wait.htm', international:'http://packages.yatra.com/holidays/india-tour-packages/wait.htm'}}
					  },
				ajaxPricing: true,
				visibleRows: 3
			 },
			 bus:{
				searchURL:'http://ebus.yatra.com/bus/search',
				autocompleteURL:'http://www.yatra.com/bus/autosuggestion'	,
				topbusroute: 'http://www.yatra.com/bus/getTopBusRoute'
			 },
			 eCashUrl:'/social/common/ewallet/userCash.htm',
			 eCashEnable:'false',
			 eCashAmount:'200',
			 refreshTimeInterval:'600',
			 visaServiceUrl:'http://www.yatra.com/flights-india-yt/visaservice',
			 mobileFlightUrl : 'http://mobile.yatra.com/mobile/flight/wait.htm',
			 mobileFlightsUrl: 'http://mobile.yatra.com/fresco/mobile-flights',
			 mobileHomeUrl: 'http://mobile.yatra.com/fresco/mobile-home',
			 mobileHotelUrl: 'http://mobile.yatra.com/Yatra/www/app/index.php#hotels',
			 mobileHolidayUrl: 'http://mobile.yatra.com/holidays/submitRequestForm.htm',
			 mobileEventsUrl: 'http://mobile.yatra.com/Yatra/www/app/#events/all/',
			 mobileSigninUrl: 'https://secure.yatra.com/social/common/yatra/signin.htm',
			 mobileSignupUrl: 'https://secure.yatra.com/social/common/yatra/register.htm'
};
if(baseDir.replace(/\//, "")=="mobile") {
	appProp.recentSearchProp = {
				 urls: {
					  flights:{"search":{dom:'http://flight.yatra.com/wap/mdomwap/trigger', international:'http://flight.yatra.com/wap/mintwap/trigger'},
					  		    review:{dom:'https://secure.yatra.com/air-checkout/mdomwap/price', international:'https://secure.yatra.com/air-checkout/mintwap/price'}},
					  hotels:{"search":{dom:'http://hotel.yatra.com/hotels-india/hotel/searchresults.htm', international:'http://internationalhotels.yatra.com/searchresults.html'},
					  			review:{dom:'https://secure.yatra.com/hotels-india/hotel/review.htm', international:'https://secure.yatra.com/hotels-india/hotel/review.htm'}}
					  },
				ajaxPricing: false,
				visibleRows: 5
					  
			 }
}
for(var key in appProp){
	if(typeof(baseDir) != "undefined" && baseDir){
		var index = baseDir.indexOf("/");
		if(index == -1){
			baseDir = baseDir+"/";
		}
	}
	if(typeof appProp[key]!="object") {
		appProp[key] = appProp[key].replace(/{base.dir}/,baseDir);
	}
}
