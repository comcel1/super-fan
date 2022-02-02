<?php

    $DataReceived = ( !empty( $_REQUEST['submitted'] ) ) ? $_REQUEST['submitted'] : '';

    if( !empty( $DataReceived ) )
    {

        $name   = trim($_REQUEST['name']);
        $email  = trim($_REQUEST['email']);
        $message = trim($_REQUEST['message']);
        //You can now save this into database or use data to validate user or transactions

        echo "Name is :  $name";
        echo "<br>Email is : $email";
        echo "<br>Message is: $message";
    }

?>





<script>
let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
})

resetButton.addEventListener('click', function(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name.value = '';
    email.value = '';
    message.value = '';
})

sendButton.addEventListener('click', function(e){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name = name.value;
    localStorage.setItem('name', name);
    
    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);
    
})
</script>