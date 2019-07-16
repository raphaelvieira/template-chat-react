module.exports = {
  presets: [
    "@babel/preset-env", // resposible to change javascript commands that the browser does not recognize
    "@babel/preset-react" // resposible to change react(jsx and others) commands that the browser does not recognize
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties" // plugin to declare states and props without constructor
  ]
};
