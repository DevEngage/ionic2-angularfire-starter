# ionic2-angularfire-starter

## Setup
- npm install
- Replace the config ofject info that is passed into the defaultFirebase function inside of the app.ts file
- ionic serve


## Note
- /// <reference path="../../../node_modules/angularfire2/firebase3.d.ts" />    <--- this is need in every file that used AngularFire
- af.database.list('/collection-name');   <--- this is how you get data from the database in the form of an array (that is observed)
