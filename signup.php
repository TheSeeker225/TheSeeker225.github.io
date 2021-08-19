<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Nouveau compte utilisateur | Seeker225 AIJNWJ </title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body id="login-body">

    <form id="login-form">

        <p id="message-de-confirmation">

        </p>
 
        <div id="login-normal">

            <h3>Login Form</h3>

            <div class="input-style">
                <input type="text" name="username" id="username" required>
                <label for="mail">Saisissez votre username !</label>
            </div>

            <div class="input-style">
                <input type="email" name="mail" id="email" required>
                <label for="mail">Saisissez votre email !</label>
            </div>

            <div class="input-style">
                <input type="password" name="motpasse" class="motpasse" required>
                <label for="motpasse">Entrez votre mot de passe !</label>
            </div>

            <div class="input-style">
                <input type="password" name="mot_de_passe_repete" class="motpasse" required>
                <label for="motpasse">Resaisissez votre mot de passe !</label>
            </div>

            <input type="submit" value="Enregistrer">

        </div>

    </form>
    
    <script src="./js/main.js"></script> 
</body>
</html>