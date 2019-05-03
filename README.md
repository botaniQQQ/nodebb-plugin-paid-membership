# Paid membership plugin for NodeBB

<p align="center">
    <img src="https://raw.githubusercontent.com/botaniQQQ/nodebb-plugin-paid-membership/master/static/images/logo.png">
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/botaniQQQ/nodebb-plugin-paid-membership/master/static/images/pay.png">
</p>

> The plugin allows you to monetize your forum at the expense of paid members

## Installation

```bash
npm i nodebb-plugin-paid-membership
```

## API settings

- Create checkout on <a href="https://interkassa.com" target="_blank">interkassa.com</a>

<p align="center">
    <img src="https://raw.githubusercontent.com/botaniQQQ/nodebb-plugin-paid-membership/master/static/images/create.png">
</p>

- Checkout settings -> Interface
  + Success URL: GET `https://example.com/?status=success`
  + Fail URL: GET `https://example.com/?status=fail`
  + Pending URL: GET `https://example.com/?status=pending`
  + Interaction URL: POST `https://example.com/interaction`

<p align="center">
    <img src="https://raw.githubusercontent.com/botaniQQQ/nodebb-plugin-paid-membership/master/static/images/settings.png">
</p>