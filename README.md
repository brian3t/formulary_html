# formulary_html
Mobile / PhoneGap App built with Backbone.js and Ratchet

Live at https://formularymedical.com

Serving thousands of medical practitioners in the U.S.

Published at iTunes store: https://itunes.apple.com/us/app/formulary-medical/id949735021?mt=8


To disable warning
`This App Bundle contains Java/Kotlin code, which might be obfuscated. We recommend you upload a deobfuscation file to make your crashes and ANRs easier to analyze and debug.`

Add this into app/build.gradle
``` buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
```