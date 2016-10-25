// JavaScript authentication file
$(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCri6RqCSj17XChzVkdO1oBvDcGPJc9mhY",
        authDomain: "m13-authentication-1128b.firebaseapp.com",
        databaseURL: "https://m13-authentication-1128b.firebaseio.com",
        storageBucket: "m13-authentication-1128b.appspot.com",
        messagingSenderId: "1081332132597"
      };
      firebase.initializeApp(config);
    // Sign Up: Function to create account on firebase, then redirect to index.html
    
    var signUp = function() {
        // Get email, password, and display name

        var email = $('#email').val();
        var password = $('#password').val();

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        // Create user, then set the user's display name
            user.updateProfile({
                // Set display name
                displayName: $('#name').val(),
            }).then(function(){
                window.location = '/';
                
            });
        }).catch(function(error){
            alert(error.message);
        });
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var email = $('#email').val();
        var password = $('#password').val();
        firebase.auth().signInWithEmailPassword(email, password).then(function(){
            window.location = 'index.html';
        });
        // Authenticate using email and password, then redirect
        firebase.auth().onAuthStateChanged(function(user){
            if(firebase.auth().currentUser){
                window.location = '/';
            }else{
                alert('User is not signed in');
            }
        });

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $('form').on('submit', function(){
        event.preventDefault();
        if(this.id == 'sign-up'){
            signUp();
        }

        if(this.id == 'sign-in'){
            signIn();
        }
        
    });


    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
