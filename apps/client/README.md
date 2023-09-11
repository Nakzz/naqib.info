# naqib.info

## Dev Setup

- Open Dev Container
- `nvm install && nvm use && yarn install `

#TODO:

- Run Dockerized keystone in production proporly. Check access to /api playground and make sure that is blocked from www

# Bugs

- Build fails on following update
- "react": "^17.0.3" - Github not resolved yet
- "next-redux-wrapper": "^6.0.2",
- "next-fonts": "^1.5.1", - icofont, unexprexed char ''
- "next": "^10.0.9", -- Cannot find module 'webpack/lib/node/NodeTemplatePlugin'

# F.A.Q.

### Error: spawn ../node_modules/optipng-bin/vendor/optipng

```
rm -rf node_modules/optipng-bin/
npm rebuild
```
