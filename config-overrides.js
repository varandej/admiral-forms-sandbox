module.exports = function override(config) {
  config.module.rules[1].oneOf[4].options.presets = ['@babel/preset-typescript'];
  config.module.rules[1].oneOf.push({
    test: /\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
    type: 'asset/resource'
  });

  return config;
};
