# DetoxDemoApp
#### Note: This app is for React Native version 0.64 and setup guide is tested on Android

We :green_heart: building apps with React Native, because it helps us create high quality products for both major mobile platforms quickly and cost-effectively.

To deliver high quality app requires any team to think about automation testing and various options available in same space . DetoxDemoApp is to get you started with React Native e2e(End to End) testing using Jest & Detox. The guide helps you to setup detox in your React Native projects.

## Getting Started

1. Create demo app using command: **`react-native init DetoxDemoApp`**
2. Install detox cli : **`npm install -g detox-cli`**
3. Navigate to your root directory and install detox to add detox library in your react native package.json:**`npm install detox --save-dev`**

## Configuring setup on Android

* Go to your Android build.gradle (project), and the update the minSdkVersion to 28: <br />
   **<code>minSdkVersion = 28</code>**
   
* Add the following to the same build.gradle file: <br />
  ```
  allprojects {
    repositories {
        maven {
            // All of the Detox artifacts are provided via the npm module
            url "$rootDir/../node_modules/detox/Detox-android"
        }
    }
  }
  ```
  
* Go to Android build.gradle (app), and add the following under android.defaultConfig:

  ```
  android {
      defaultConfig {
          // Added these for running tests
          testBuildType System.getProperty('testBuildType', 'debug')
          testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'
      }
  }
  ```
  

* Add these dependencies to the same file
  
  ```
    dependencies {
      // Added testing dependencies
      androidTestImplementation('com.wix:detox:+') { transitive = true }
      androidTestImplementation 'junit:junit:4.12'
    }
  ```
  
* Now, create a file called DetoxTest.java in the path <br /> **android/app/src/androidTest/java/com/[your_package]/**
