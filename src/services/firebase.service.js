export function InitFireBase() {
    // Initialize the Firebase SDK.
    firebase.initializeApp({
      apiKey: 'AIzaSyB-2RhY5nOASJt2EFpKF0EfUb7qW_wpZhs',
      databaseURL: 'https://surpass-share-default-rtdb.firebaseio.com/'
    });

    // Get Firebase Database reference.
    var firepadRef = firebase.database().ref();

    const urlparams = new URLSearchParams(window.location.search);

    const roomId = urlparams.get("id");

    if(roomId) {
        firepadRef = firepadRef.child(roomId);
    }else{
        firepadRef =firepadRef.push();
        window.history.replaceState(null, "Surpass Share", "?id=" + firepadRef.key)
    }

    return firepadRef;
  }