# Paid membership plugin for NodeBB

<center>
    <img src="https://raw.githubusercontent.com/botaniQQQ/nodebb-plugin-paid-membership/master/static/images/logo.png">
</center>

The plugin allows you to monetize your forum at the expense of paid members

## API settings (<a href="https://interkassa.com" target="_blank">interkassa.com</a>)

<center>
    <img src="https://raw.githubusercontent.com/botaniQQQ/nodebb-plugin-paid-membership/master/static/images/create.png">
</center>

- Create checkout

<center>
    <img src="https://raw.githubusercontent.com/botaniQQQ/nodebb-plugin-paid-membership/master/static/images/settings.png">
</center>

- Checkout settings -> Interface
  + Success URL: GET `https://example.com/?status=success`
  + Fail URL: GET `https://example.com/?status=fail`
  + Pending URL: GET `https://example.com/?status=pending`
  + Interaction URL: GET `https://example.com/interaction`
  
