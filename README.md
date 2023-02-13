
create next app 

create sanity by using npm create sanity@latest -- --coupon sonny2022  (for extra bonus)

We've doubled the free included monthly usage to:

200k API requests
1M API CDN requests
20GB Bandwidth.


fill the following in command propmt 

copy the necessary items from the sanity package.json and paste in in regular package.json
"@sanity/vision": "^3.0.0",
 "@sanity/image-url": "^1.0.2", #not sure
 "sanity": "^3.0.0",
 "styled-components": "^5.2.0"
 "@sanity/eslint-config-studio": "^2.0.1",

pull sanity.cli.js,sanity.config.js and schemas from the folder created

delete the sanity folder created.

create .env.local add necessary path and edit sanity.cli and sanity.config

log to localhost:3000/studio and login add add test items

to make studio look nicer create theme.js and connect using sanity config - theme:myTheme


To style the /studio

edit sanity.config

create a studio object

studio : {
    components : {
        ...
    }
}


(admin) -> paranthesis doesnt affect routes but helps to
create a higher level so that layout can be configured for individual routes.

implementing preview mode 

create lib folder
sanity.client.js
sanity.preview

create apis in pages/api

edit user/page.js

tailwind css lineclamp is used to truncate

clickable button issue in nextjs 13

to create visual preview mode 

add defaultDocumentNode in plugins - sanity config


npm run build
