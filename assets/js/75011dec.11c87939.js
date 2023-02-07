"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[48],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(g,p(p({ref:t},s),{},{components:n})):a.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<r;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3168:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var a=n(3117),o=(n(7294),n(3905));const r={id:"create-app",title:"Create an App",slug:"/create-app",sidebar_position:3},p=void 0,i={unversionedId:"GettingStarted/create-app",id:"GettingStarted/create-app",title:"Create an App",description:"Creating a Cloud Carbon Footprint App is a good way to quickly set up your own project.",source:"@site/docs/GettingStarted/CreateApp.md",sourceDirName:"GettingStarted",slug:"/create-app",permalink:"/docs/create-app",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"create-app",title:"Create an App",slug:"/create-app",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Run with Mocked Data",permalink:"/docs/run-with-mocked-data"}},l={},c=[{value:"Create an App",id:"create-an-app",level:3},{value:"General folder structure",id:"general-folder-structure",level:3},{value:"Install and Start the App",id:"install-and-start-the-app",level:3},{value:"Linking in local Cloud Carbon Footprint packages",id:"linking-in-local-cloud-carbon-footprint-packages",level:3},{value:"Keeping Cloud Carbon Footprint Updated",id:"keeping-cloud-carbon-footprint-updated",level:3},{value:"Updating Cloud Carbon Footprint versions",id:"updating-cloud-carbon-footprint-versions",level:4},{value:"Following create-app template changes",id:"following-create-app-template-changes",level:4}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creating a Cloud Carbon Footprint App is a good way to quickly set up your own project."),(0,o.kt)("p",null,"Containing everything you need to run in your own environment, a Cloud Carbon Footprint App is a monorepo that is setup utilizing lerna."),(0,o.kt)("p",null,"If you wish to have more control over the configuration of the app and all of its packages or contribute to the Cloud Carbon Footprint project, you may want to ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#configuring-the-app-locally"},"Run Cloud Carbon Footprint Locally")," instead."),(0,o.kt)("h3",{id:"create-an-app"},"Create an App"),(0,o.kt)("p",null,"To create a Cloud Carbon Footprint app, you will need to have ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 12 installed."),(0,o.kt)("p",null,"Creating a Cloud Carbon Footprint app guides you through the initial setup of selecting the name of the app."),(0,o.kt)("p",null,"The command to run the create app package using npx is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx @cloud-carbon-footprint/create-app@latest\n")),(0,o.kt)("p",null,"In the case that you would prefer to install the app yourself, you can run the same command with the following flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx @cloud-carbon-footprint/create-app --skip-install\n")),(0,o.kt)("p",null,"This will create a new Cloud Carbon Footprint App inside the current folder. The name of the app-folder is the name that was provided when prompted."),(0,o.kt)("p",null,"Inside that directory, it will generate all the files and folder structure needed for you to run your app."),(0,o.kt)("h3",{id:"general-folder-structure"},"General folder structure"),(0,o.kt)("p",null,"Below is a simplified layout of the files and folders generated when creating an app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"app\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 prettierrc.json\n\u251c\u2500\u2500 lerna.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 packages\n  \u251c\u2500 api\n  \u251c\u2500 cli\n  \u2514\u2500\u2500client\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tsconfig.json: Contains information about typescript configuration needed for the monorepo setup."),(0,o.kt)("li",{parentName:"ul"},"prettierrc.json: Contains information about prettier configuration needed for the monorepo setup."),(0,o.kt)("li",{parentName:"ul"},"lerna.json: Contains information about workspaces and other lerna configuration needed for the monorepo setup."),(0,o.kt)("li",{parentName:"ul"},"package.json: Root package.json for the project. Note: Be sure that you don't add any npm dependencies here as they probably should be installed in the intended workspace rather than in the root."),(0,o.kt)("li",{parentName:"ul"},'packages/: Lerna leaf packages or "workspaces". Everything here is going to be a separate package, managed by lerna.'),(0,o.kt)("li",{parentName:"ul"},"packages/api/: The API endpoint as an entrypoint to get cloud energy and carbon emissions. Optionally used by the client dashboard."),(0,o.kt)("li",{parentName:"ul"},"packages/cli/: Command Line Interface as an entrypoint to get cloud energy and carbon emissions."),(0,o.kt)("li",{parentName:"ul"},"packages/client/: The front-end dashboard for Cloud Carbon Footprint.")),(0,o.kt)("h3",{id:"install-and-start-the-app"},"Install and Start the App"),(0,o.kt)("p",null,"When the installation is complete you can open the app folder to start the configuration process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd my-ccf-app\nyarn guided-install\n")),(0,o.kt)("p",null,"Note: If you used the ",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-install")," flag, you will need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," before running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn guided-install"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn guided-install")," command will lead you through a guided installation as referenced ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#guided-install"},"here"),". You can also choose to configure your app manually as referenced ",(0,o.kt)("a",{parentName:"p",href:"/docs/aws"},"here"),"."),(0,o.kt)("p",null,"Once you are finished with the installation you are ready to start the application!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn start\n")),(0,o.kt)("p",null,"Open a browser and directly navigate to the frontend at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"Now you're free to start your own Cloud Carbon Footprint application! Happy Hacking!"),(0,o.kt)("h3",{id:"linking-in-local-cloud-carbon-footprint-packages"},"Linking in local Cloud Carbon Footprint packages"),(0,o.kt)("p",null,"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/app")," and  ",(0,o.kt)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/common")," packages are used as a dependencies for packages in your Cloud Carbon Footprint App, the packages will not be accessible for any modifications. Since these packages contain the core logic to get cloud usage data and estimate energy and carbon emissions, you may find yourself wanting to update the emissions factors, coefficients, or any other calculations. Fortunately, by linking them as external packages, you will be able to make modifications and test out the changes locally!"),(0,o.kt)("p",null,"You will notice that in the create-app template files, the app and common packages are the only external dependencies used. The app package in turn depends on the aws, gcp and azure packages.\nEach of the cloud provider packages also depend on the core package. In these packages is where most of the core logic of our application is specifically located and these can all be externally linked for modification as well."),(0,o.kt)("p",null,"To do this, you will first need to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint"},"Cloud Carbon Footprint App"),". Then you will need to modify your package.json and lerna.json workspace paths. You can either add relative or absolute paths with or without globs. For example:"),(0,o.kt)("p",null,"In the package.json file in the root of your Cloud Carbon Footprint App:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"workspaces": {\n  "packages": [\n    "packages/*",\n    "../cloud-carbon-footprint/packages/core"\n    "../cloud-carbon-footprint/packages/app",\n    "../cloud-carbon-footprint/packages/common",\n    "../cloud-carbon-footprint/packages/aws",\n    "../cloud-carbon-footprint/packages/gcp",\n    "../cloud-carbon-footprint/packages/azure"\n  ]\n}\n')),(0,o.kt)("p",null,"And in the lerna.json file in same directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"packages": [\n  "packages/*",\n  "../cloud-carbon-footprint/packages/core",\n  "../cloud-carbon-footprint/packages/app",\n  "../cloud-carbon-footprint/packages/common",\n  "../cloud-carbon-footprint/packages/aws",\n  "../cloud-carbon-footprint/packages/gcp",\n  "../cloud-carbon-footprint/packages/azure"\n]\n')),(0,o.kt)("p",null,"Then reinstall packages to make yarn set up symlinks by running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," in the root directory."),(0,o.kt)("p",null,"Now you should be able to modify any of the external packages within the main repository that you cloned, and have those changes be reflected in your app!"),(0,o.kt)("h3",{id:"keeping-cloud-carbon-footprint-updated"},"Keeping Cloud Carbon Footprint Updated"),(0,o.kt)("p",null,"Cloud Carbon Footprint has constant improvements being made each day, so we recommend staying up to date with the latest releases. The ",(0,o.kt)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/create-app")," tool can be considered a good starting point for a continuously evolving application."),(0,o.kt)("h4",{id:"updating-cloud-carbon-footprint-versions"},"Updating Cloud Carbon Footprint versions"),(0,o.kt)("p",null,"Currently, when you create a Cloud Carbon Footprint app using the create-app package, there are a couple package dependencies which are ",(0,o.kt)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/app")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/common"),".\nThe command used to bump the package dependencies to the latest version is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn up @cloud-carbon-footprint/app\n")),(0,o.kt)("p",null,"and / or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn up @cloud-carbon-footprint/common\n")),(0,o.kt)("p",null,"Please note that depending on the current version of the app or common package, the update command may only update it to the next highest minor version as referenced ",(0,o.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/dependency-versions/#toc-caret-ranges"},"here"),". Beware that once the app or common package is ",(0,o.kt)("inlineCode",{parentName:"p"},">= v1.0.0"),", running the command will update to the latest package with breaking changes."),(0,o.kt)("h4",{id:"following-create-app-template-changes"},"Following create-app template changes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/create-app")," command will create the initial base structure of your Cloud Carbon Footprint installation from a template. The source of this template in the Cloud Carbon Footprint repository is updated periodically, but when you use the create-app command, your local app and packages won't automatically get these template updates."),(0,o.kt)("p",null,"Any changes made to the template are documented along with upgrade instructions in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/create-app/CHANGELOG.md"},"changelog")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/create-app")," package. In order to see if there might be any applicable updates when upgrading packages, it is recommended to regularly take a look at this changelog."))}u.isMDXComponent=!0}}]);