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


