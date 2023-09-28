"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[6163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={id:"data-persistence-and-caching",title:"Data Persistence and Caching",slug:"/data-persistence-and-caching",sidebar_position:1},l=void 0,r={unversionedId:"ConfigurationOptions/data-persistence-and-caching",id:"ConfigurationOptions/data-persistence-and-caching",title:"Data Persistence and Caching",description:"Calculating estimates can take time and you may wish for a way to persist data to speed up performance of subsequent calls to the API.",source:"@site/docs/ConfigurationOptions/DataPersistenceAndCaching.md",sourceDirName:"ConfigurationOptions",slug:"/data-persistence-and-caching",permalink:"/docs/data-persistence-and-caching",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"data-persistence-and-caching",title:"Data Persistence and Caching",slug:"/data-persistence-and-caching",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Alternative Data Approaches",permalink:"/docs/alternative-data-approaches"},next:{title:"Performance Considerations",permalink:"/docs/performance-considerations"}},s={},c=[{value:"JSON File",id:"json-file",level:2},{value:"Local Filesystem",id:"local-filesystem",level:3},{value:"Google Cloud Storage",id:"google-cloud-storage",level:3},{value:"MongoDB Storage",id:"mongodb-storage",level:2},{value:"Paginating Estimates",id:"paginating-estimates",level:3},{value:"Filtering Estimates",id:"filtering-estimates",level:3},{value:"Caching Configurations",id:"caching-configurations",level:2},{value:"Ensure Real-Time Estimates",id:"ensure-real-time-estimates",level:3},{value:"Seeding Cache File",id:"seeding-cache-file",level:2},{value:"Fetch Methods",id:"fetch-methods",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Calculating estimates can take time and you may wish for a way to persist data to speed up performance of subsequent calls to the API.\nWe offer the following data caching methods of varying levels of simplicity and power for saving estimates after they are calculated:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JSON File (default, but will be deprecated)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Local filesystem (default, no configuration needed)"),(0,i.kt)("li",{parentName:"ul"},"Google Cloud Storage"))),(0,i.kt)("li",{parentName:"ul"},"MongoDB (local or cloud database)")),(0,i.kt)("h2",{id:"json-file"},"JSON File"),(0,i.kt)("h3",{id:"local-filesystem"},"Local Filesystem"),(0,i.kt)("p",null,"To make local development a pleasant experience with a quick feedback loop, we have a no-setup local caching method that uses a JSON file that is automatically generated. This file will be created in either the packages/api or packages/cli directory \u2013 typically with the name of the grouping method included (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"estimates.month.cache.json"),". If you would like to see up-to-date estimates, you will have to delete ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/cli/estimates.[grouping].cache.json")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/api/estimates.[grouping].cache.json"),". Depending on how much usage you have, it could take several minutes to fetch up-to-date estimates and regenerate the cache file.\nNote: If you don\u2019t see one of these files, don\u2019t worry. Simply start the server, and load the app for the first time."),(0,i.kt)("p",null,"Currently, this caching method is planned to be deprecated and will receive decreased support for incoming features made to the app. This is due to its poor scalability which creates issues for those with very large usage data on a typical enterprise or organizational scale. However, it is a great way to get up and start with the app quickly and still appropriate for small-scale users."),(0,i.kt)("h3",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,i.kt)("p",null,"As an expansion to the local cache method, you can use the same JSON file generation within a Google Cloud Storage bucket. If you are experiencing long load times in your staging or production environments, or simply wish to forego the local filesystem, the option to store a JSON cache file in the cloud may be the best option for you. This could be especially helpful in improving re-estimate speeds for your deployed environments. In order to use the Google Cloud option, you have to set the following variables in your ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/api/.env")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/cli/.env")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dotenv"},"CACHE_MODE=GCS\nGCS_CACHE_BUCKET_NAME=\u201dsome-bucket-name\u201d\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: The Google service account that you are using must have access and permissions to read/write into the bucket.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note on Memory Limitations:"),"\nFor JSON Filesystem cache modes, CCF uses read and write streams to get and set estimates. Ultimately, this helps avoid running into JS memory limitations when inevitably needing to stringify the data. The set back for this approach as the data scales is when sending through the REST API result. With express, the JSON response value passed through will need to get stringified. Usually once the data size reaches around 500 mb is when you might see an issue like:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RangeError: Invalid string length")),(0,i.kt)("p",null,"For this reason, we have chosen to focus our support on the MongoDB cache mode, where we have implemented pagination for the REST API response which will scale better and avoid the memory limitations. We believe the JSON File cache mode is a good choice for smaller data sets."),(0,i.kt)("h2",{id:"mongodb-storage"},"MongoDB Storage"),(0,i.kt)("p",null,"Users or organizations with large amounts of usage data may have difficulty using the default local caching method. For those wishing to persist a larger scale of data, we offer the option of configuring a MongoDB instance to store your estimates. Similar to the local cache system, this method will also speed up subsequent calls to the API and is the recommended and fully supported caching method."),(0,i.kt)("p",null,"CCF currently supports either a manual local instance via MongoDB Community/Enterprise, or an automated cloud instance via MongoDB Atlas or similar platform."),(0,i.kt)("p",null,"To use this configuration, first set up a MongoDB instance of your choice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mongodb.com/docs/atlas/getting-started/"},"Local Instance Manual Setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mongodb.com/docs/v6.0/installation/"},"MongoDB Atlas Setup"))),(0,i.kt)("p",null,"After setting up a new instance or collection to be used for CCF, configure the following environment variables in your packages/api or packages/cli/.env file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-.env"},"CACHE_MODE=MONGODB\nMONGODB_URI=mongodb://example-uri\nMONGODB_CREDENTIALS=/path-to-credentials.pem\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The MONGODB_URI variable should be set to the connection URI of your MongoDB instance. If using Atlas, you should find this option in the Connect section of your Atlas cluster. For a local instance, the default string is usually ",(0,i.kt)("inlineCode",{parentName:"li"},"mongodb://localhost:27017")," while the service is running."),(0,i.kt)("li",{parentName:"ul"},"The MONGODB_CREDENTIALS variable is optionally used when configuring MongoDB Atlas. CCF will need the credentials to be stored and referenced in order to connect.")),(0,i.kt)("p",null,"After calculating estimates for the first time, the app will create a new collection titled \u201cccf\u201d. Estimates will be separated into timestamps and stored into a collection that is named according to the current grouping method (i.e. \u201cestimates-by-month)."),(0,i.kt)("h3",{id:"paginating-estimates"},"Paginating Estimates"),(0,i.kt)("p",null,"Since the MongoDB storage method is capable of storing a large amount of estimates, it is possible the estimates for a requested date range will exceed the ideal size of a REST API response. To accommodate this, we have enabled pagination when fetching estimates using this method alongside the CCF client or querying the API directly."),(0,i.kt)("p",null,"We have added a configurable limit value used to paginate the data through the client package. ",(0,i.kt)("inlineCode",{parentName:"p"},"REACT_APP_PAGE_LIMIT")," will default to paginating through 1000 documents at a time, but depending on the overall collection size, the limit value can be set to whatever makes the most sense."),(0,i.kt)("p",null,"When consuming the API directly, you can still take advantage of the paginated feature by configuring it through the use of parameters when querying the /footprint endpoint.\nThere will need to be additional logic written to loop through multiple requests and paginate the data depending on the specified limit value."),(0,i.kt)("p",null,"A sample request using limit and skip parameters may look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"/footprint?start=2021-01-01&end=2021-02-01&limit=30&skip=10\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Skip: The number of estimates (MongoDB documents) to skip over"),(0,i.kt)("li",{parentName:"ul"},"Limit: The maximum number of estimates (MongoDB documents) to include in the request (<=50000)")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: This feature only works when the MONGODB cache mode is enabled. The limit and skip parameters will be ignored for other cache modes.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"To avoid potential issues with memory limitations when loading and aggregating estimates from the cache, a default value of 50,000 documents will be used for the page limit.\nThis ensures that individual timestamps with significantly large amount of estimates are handled properly. Custom limit values that exceed this number will result in a validation error.")),(0,i.kt)("h3",{id:"filtering-estimates"},"Filtering Estimates"),(0,i.kt)("p",null,"With the MongoDB cache mode, CCF is now supporting the capability to filter estimates by the following keys and request parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"cloudProviders")," (AWS | GCP | Azure)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"accounts")," (via account id)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"services")," (i.e. AmazonDynamoDB)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"regions")," (i.e. us-east-1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tags")," (via key/value pairs)")),(0,i.kt)("p",null,"A sample request to filter by cloud providers may look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"/footprint?start=2021-01-01&end=2021-02-01&limit=30&skip=10&cloudProviders=AWS\n")),(0,i.kt)("p",null,"Multiple filters can be provided even within the same key, for example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"&cloudProviders=AWS&cloudProviders=GCP")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A note on tags:"),"\nAs tagging for our supported cloud service providers is typically set up using key value pairs, the parameters must be set up to handle this appropriately. For example, if you have a tag in AWS called ",(0,i.kt)("inlineCode",{parentName:"p"},"aws:CreatedBy")," and the value is the username, the request parameter should look like:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"&tags[aws:CreatedBy]=username")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Filtering for Mongodb will only work to filter existing cached data in the collection. Providing these parameters for the initial request to the CSP\u2019s will not return filtered data.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Filtering is only supported via the API and is not yet supported on the client.")),(0,i.kt)("h2",{id:"caching-configurations"},"Caching Configurations"),(0,i.kt)("h3",{id:"ensure-real-time-estimates"},"Ensure Real-Time Estimates"),(0,i.kt)("p",null,"In order to make local development a pleasant experience with a quick feedback loop, we have a cache file that is automatically generated. If you would like to see up-to-date estimates, you will have to delete ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/cli/estimates.cache.json")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/api/estimates.cache.json"),". If you are using MongoDB or GCS to store estimates, you will either have to delete the collection or the estimates file in the storage bucket respectively. Depending on how much usage you have, it could take several minutes to fetch up-to-date estimates and regenerate the cache file."),(0,i.kt)("p",null,"There is also an optional boolean parameter that can be set to ignore setting estimates to a cache:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ignoreCache=true")),(0,i.kt)("p",null,"Or when using the client, you can set an optional environment variable:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DISABLE_CACHE=true")),(0,i.kt)("h2",{id:"seeding-cache-file"},"Seeding Cache File"),(0,i.kt)("p",null,"We have an option to run the server-side API calls as a background job. This can be useful for larger amounts of data to query from the cloud providers and will have no timeout limit when running with the browser. Before running the script, you will need to set the necessary configurations in a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the CLI directory."),(0,i.kt)("p",null,"From the root directory, run:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn seed-cache-file")),(0,i.kt)("p",null,"You will then be prompted to enter a start date, end date and groupBy parameter. "),(0,i.kt)("p",null,"Optionally, you can specify a specific cloud provider to seed. This will allow you to append estimations to given dates in your requested time frame that may be missing from a newly configured cloud provider (currently only supported with a MongoDB caching mode)."),(0,i.kt)("p",null,"Once this process is finished running, estimates will either be saved to a newly created JSON file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/cli")," directory or into your configured MongoDB instance. If using the JSON method, in order to use the cache file to run with the front-end client package, you will have to copy the cache file to the API directory before starting the application."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: If you end up seeing an error due to memory limitations, you will either have to adjust to a smaller date range or change the grouping method.")),(0,i.kt)("h3",{id:"fetch-methods"},"Fetch Methods"),(0,i.kt)("p",null,"When starting the cache file seeding, one of the last prompts will ask you to specify a fetch method for the requests that the script will make. This allows for greater flexibility with handling date ranges with potentially large data that will be too large to calculate in a single API request. You will be presented with the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Single")," - Seed the cache file using a ",(0,i.kt)("em",{parentName:"li"},"single request")," to the API (Default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Split")," -  Seed the cache file using multiple requests split according to specified number of days")),(0,i.kt)("p",null,"By default, the script will fetch estimates using a single request."),(0,i.kt)("p",null,"If you choose to split your requests, you will be asked an optional follow-up question of how many days to fetch per request. This will allow it to fetch the provided number of days or to fetch a default of one day per request until the date range is covered."),(0,i.kt)("p",null,"We recommend using this method when dealing with a large amount of usage data within a date range that may cause issues when running your app, especially for historical data, as described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/performance-considerations"},"Performance Considerations")," section."))}d.isMDXComponent=!0}}]);