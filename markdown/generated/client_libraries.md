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
  background-image: url(assets/img/client-libs.png);
  background-position: -70px;
}
</style>
<a class="client-lib-link php53" data-language="php53" href="http://cdnbakmi.kaltura.com/content/clientlibs/php53_19-01-2017.tar.gz" style="background-position: 0px"></a><a class="client-lib-link php5Zend" data-language="php5Zend" href="http://cdnbakmi.kaltura.com/content/clientlibs/php5Zend_19-01-2017.tar.gz" style="background-position: -142px"></a><a class="client-lib-link java" data-language="java" href="http://cdnbakmi.kaltura.com/content/clientlibs/java_19-01-2017.tar.gz" style="background-position: -213px"></a><a class="client-lib-link csharp" data-language="csharp" href="http://cdnbakmi.kaltura.com/content/clientlibs/csharp_19-01-2017.tar.gz" style="background-position: -284px"></a><a class="client-lib-link ruby" data-language="ruby" href="http://cdnbakmi.kaltura.com/content/clientlibs/ruby_19-01-2017.tar.gz" style="background-position: -355px"></a><a class="client-lib-link python" data-language="python" href="http://cdnbakmi.kaltura.com/content/clientlibs/python_19-01-2017.tar.gz" style="background-position: -426px"></a><a class="client-lib-link nodejs" data-language="nodejs" href="http://cdnbakmi.kaltura.com/content/clientlibs/node_19-01-2017.tar.gz" style="background-position: -497px"></a><a class="client-lib-link js" data-language="js" href="http://cdnbakmi.kaltura.com/content/clientlibs/js_19-01-2017.tar.gz" style="background-position: -568px"></a><a class="client-lib-link cli" data-language="cli" href="http://cdnbakmi.kaltura.com/content/clientlibs/cli_19-01-2017.tar.gz" style="background-position: -639px"></a><a class="client-lib-link objc" data-language="objc" href="http://cdnbakmi.kaltura.com/content/clientlibs/objc_19-01-2017.tar.gz" style="background-position: -710px"></a><a class="client-lib-link android" data-language="android" href="http://cdnbakmi.kaltura.com/content/clientlibs/android_19-01-2017.tar.gz" style="background-position: -781px"></a>
<script>
  window.jquery('.client-lib-link').click(function() {
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

