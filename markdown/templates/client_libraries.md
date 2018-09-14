# Kaltura API SDK - Native Client Libraries

When developing applications that interact with the Kaltura API, it is best to use a native Client Library.

Below you can download the Client Library for the programming language of your choice.

<% if (target === 'ovp') { -%>
To learn how to use the client libraries and see example code implementations, use the [API Test Console](/console) and [Interactive Workflows](/workflows).
The Test Console and Workflows automatically generate sample code based on the API actions and parameters you select.

Please note, the client libraries provided here have been generated for the Kaltura.com API.
Users of self-hosted editions of Kaltura (On-Prem or CE) are encouraged to use their Kaltura Server Clients Generator for optimal compatibility.
<% } else { -%>
Please note, the client libraries provided here have been generated for version <%- version %> of the Kaltura OTT Platform API. Customers are encouraged to verify their platform API version and ensure the use of client libraries that match the version of their platform version for optimal compatibility. If you’re unsure which version to use, please contact your Kaltura Account Manager
<% } -%>

## Download Client Archives
<style>
.client-lib-link {
  width: 71px;
  height: 81px;
  overflow: hidden;
  margin-top: 12px;
  margin-right: 12px;
  display: inline-block;
  background-image: url(assets/img/client-libs.png);
  background-position: -70px;
}
</style>

<%- clientMD %>

<script>
  window.jquery('.client-lib-link').click(function() {
    var lang = $(this).attr('data-language');
    mixpanel.track('client_library', {language: lang});
  })
</script>

<% if (target === 'ovp') { -%>
## Install Via Package Managers
In programming languages that use package managers, Kaltura also provides
client libraries as packages that can be installed via the respective package manager.

[![NPM](https://nodei.co/npm/kaltura-client.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/kaltura-client/)

* [PHP](https://packagist.org/packages/kaltura/api-client-library) `composer require kaltura/api-client-library`
* [Ruby](https://rubygems.org/gems/kaltura-client) `gem install kaltura-client`
* [Python](https://pypi.python.org/pypi/KalturaApiClient) `pip install KalturaApiClient`
* [Swift](http://cocoapods.org/pods/KalturaClient) `pod "KalturaClient"`
* [Java](https://mvnrepository.com/artifact/com.kaltura/kalturaApiClient) (via Maven)

```xml
<dependency>
  <groupId>com.kaltura</groupId>
  <artifactId>kalturaApiClient</artifactId>
  <version>14.5.0</version>
</dependency>
```
<% } -%>


## Missing a Language?
Tweet [@Kaltura_API pls add sdk for: [lang]](http://twitter.com/?status=@Kaltura_API%20pls%20add%20sdk%20for%3A%20%5Bprogramming_language%5D)

or [create your own Client Library Generator](http://www.kaltura.org/api-client-library-generator-guide)

