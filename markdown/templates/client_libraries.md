# Kaltura API SDK - Native Client Libraries
[[Edit on GitHub]](https://github.com/kaltura/kaltura-api-recipes/edit/development/swagger/markdown/client_libraries.md)

When developing applications that interact with the Kaltura API, it is best to use a native Client Library.

Below you can download the Client Library for the programming language of your choice.

To learn how to use the client libraries and see example code implementations, use the [API Test Console](/console) and [Code Recipes](/recipes).
The Test Console and Recipes automatically generate sample code based on the API actions and parameters you select.

Please note, the client libraries provided here have been generated for the Kaltura.com API.
Users of self-hosted editions of Kaltura (On-Prem or CE) are encouraged to use their Kaltura Server Clients Generator for optimal compatibility.

## Download Packages
<style>
.client-lib-link {
  width: 71px;
  height: 81px;
  overflow: hidden;
  margin-top: 30px;
  margin-right: 50px;
  display: inline-block;
  background-image: url(/assets/img/client-libs.png);
  background-position: -70px;
}
</style>
{{ client_libraries }}
<script>
  $('.client-lib-link').click(function() {
    var lang = $(this).attr('data-language');
    mixpanel.track('client_library', {language: lang});
  })
</script>

## Install Via Package Managers
In programming languages that use package managers, Kaltura also provides
client libraries as packages that can be installed via the respective package manager.

[![NPM](https://nodei.co/npm/kaltura.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/kaltura/)

* PHP `composer require kaltura/api-client-library`
* Ruby `gem install kaltura-client`
* Java (via Maven)
```
<dependency>
  <groupId>com.kaltura</groupId>
  <artifactId>kalturaClient</artifactId>
  <version>3.2.1</version>
</dependency>
```

## Missing a Language?
Tweet [@Kaltura_API pls add sdk for: [lang]](http://twitter.com/?status=@Kaltura_API%20pls%20add%20sdk%20for%3A%20%5Bprogramming_language%5D)

or [create your own Client Library Generator](http://www.kaltura.org/api-client-library-generator-guide)

