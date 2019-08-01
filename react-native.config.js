module.exports = {
    dependencies: {
        'react-native-firebase': {
            platforms: {
                android: {
                    "sourceDir": "./node_modules/react-native-firebase/android", "folder": "./node_modules/react-native-firebase", "packageImportPath": "import io.invertase.firebase.RNFirebasePackage;", "packageInstance": "new RNFirebasePackage()"
                }
            }
        }
    },
    assets: [
        "android/app/src/main/assets/fonts"
    ]
};

