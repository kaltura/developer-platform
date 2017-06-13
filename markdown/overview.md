# Kaltura API Overview  

Building video experiences consists of ingesting media files, playing back videos, and reviewing usage and engagement analytics. In between, there is a world of nuances required for your unique use-case and application. Kaltura VPaaS is built on the principles of atomic services, SDKs, and tools that allow you full control and flexibility over every element and process in your media’s lifecycle.

## Tools and Guides  

The Kaltura Developer Tools and the [VPaaS Developer Guides](https://vpaas.kaltura.com/documentation/01_VPaaS-API-Getting-Started/Getting-Started-VPaaS-API.html), enable you to get started building your own video experiences and workflows, and provide you with everything you need to further explore the platform’s capabilities and to become an expert.

If you're just starting out with Kaltura, we recommend reading: [Getting Started with Kaltura VPaaS](https://vpaas.kaltura.com/documentation/01_VPaaS-API-Getting-Started/Getting-Started-VPaaS-API.html).

## Using the API  

Kaltura VPaaS API implements an HTTP POST/GET url-encoded requests structure. The API consist of service and actions for querying, setting, updating and listing entities as well as for configuring account settings, and for executing processes. Service and actions are grouped according to the entity type they are applied on, and provide all actions relevant to the specific entity.

This API documentation provides specific information on:

* Kaltura Services and their related actions
* Kaltura Objects and their related properties
* Kaltura Enumerated Types and their values

>Note: A prerequisite for using Kaltura APIs is obtaining Kaltura account ID, aka the Partner ID (or pid).
[Register for a Kaltura VPaaS account](https://vpaas.kaltura.com/register.php?utm_source=developertools&utm_campaign=login&utm_medium=website).

## About Kaltura’s REST-based APIs  

The Kaltura API is fully REST-based and can be used by constructing and calling direct URLs as such http://www.kaltura.com/api_v3/index.php/service/[the_service_to_use]/action/[the_action_to_execute].
You may also want to use tokens, for example: 
* [the_service_to_use] — The service (entity in the system) to call. You can find the list of services in the [API side panel](https://developer.kaltura.com) under each of the categories (e.g. [session]( https://developer.kaltura.com/api-docs/Generate_API_Sessions/session), [appToken]( https://developer.kaltura.com/api-docs/Generate_API_Sessions/appToken), [user]( https://developer.kaltura.com/api-docs/Search_Discover_and_Personalize/user), [media]( https://developer.kaltura.com/api-docs/Search_Discover_and_Personalize/media), etc.)
* [the_action_to_execute] — The action you wish to execute on the service. You can find the list of actions available for each service in the [API side panel](https://developer.kaltura.com) under each of the services (e.g. [session.start](https://developer.kaltura.com/api-docs/Generate_API_Sessions/session/session_start), [session.end](https://developer.kaltura.com/api-docs/Generate_API_Sessions/session/session_end), etc.)

For example, to use the ping action to check if the API is up, you can use the [system service and ping action](http://www.kaltura.com/api_v3/index.php/service/system/action/ping).

>Note: Most services will require a proper Kaltura Session (KS) key; therefore, in addition to your call, you’ll also need to create a KS to be passed as a parameter in your request.

For example, to retrieve a list of media entries, you’ll need to call the list action on the media service, and provide a proper KS key. Therefore, the steps will be 1) call session.start and your account credentials, and then 2) pass the result to the media.list API. E.g.: https://www.kaltura.com/api_v3/service/media/action/list/ks/[the_ks_generated_using_session.start].

To learn more, see these guides: 
* [How to Create a Kaltura Session](https://vpaas.kaltura.com/documentation/VPaaS-API-Getting-Started/how-to-create-kaltura-session.html)
* [Kaltura API Authentication and Security](https://vpaas.kaltura.com/documentation/VPaaS-API-Getting-Started/Kaltura_API_Authentication_and_Security.html)
* [Kaltura API Authentication and Security(]https://vpaas.kaltura.com/documentation/VPaaS-API-Getting-Started/introduction-kaltura-client-libraries.html)

Additionally, if you look at the [API docs](https://developer.kaltura.com) you’ll see each request’s GET URL at the top of the page. 
For example, if you follow the [guide for clipping & trimming](https://blog.kaltura.com/server-side-clipping-and-trimming/), you’ll see that to trim an entry, the service you’ll need to use is called ** media**, and the action is called [updateContent]( https://developer.kaltura.com/api-docs/Ingest_and_Upload_Media/media/media_updateContent/. You’ll also notice that the input of this API action expected to be two parameters: 
* The ID of the entry to replace with the newly trimmed entry
* A resource object representing the operations to execute on that entry
The resource is an object of type [KalturaOperationResource]( https://developer.kaltura.com/api-docs/General_Objects/Objects/KalturaOperationResource/), and it in itself also expects to be filled with an object of [KalturaClipAttributes]( https://developer.kaltura.com/api-docs/General_Objects/Objects/KalturaClipAttributes), which describes the operations to perform on the entry and the [KalturaEntryResource]( https://developer.kaltura.com/api-docs/General_Objects/Objects/KalturaEntryResource/) that describes the entry that carries out the operation.

>Note: Kaltura does *not* recommend making direct calls via REST calls without using a client library – Kaltura’s API is very robust and requires constructing objects for your requests, which means that requests can end up with complex URL structures that, if constructed manually, might result in semantic mistakes. Instead, Kaltura provides native client libraries for many programming languages that you can use in your applications.

## Resources  
We recommend you explore these tools as well:
* The Kaltura VPaaS [Developer Guides](https://vpaas.kaltura.com/documentation/01_VPaaS-API-Getting-Started/Getting-Started-VPaaS-API.html).
* The Kaltura VPaaS [Interactive Workflows](https://developer.kaltura.com/workflows), providing a quick way to learn about video workflows with Kaltura and see from real examples how to write applicatiosn with Kaltura.
* The [API Test Console](https://developer.kaltura.com/console), providing a quick exploration and discovery for each service and action, allowing you to try each action easily, and serving as code-example generator.

For support, please visit [Kaltura Community Forums](http://www.kaltura.org/forums).
