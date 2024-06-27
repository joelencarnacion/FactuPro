module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: "> 0.25%, not dead",
        include: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-private-methods'
        ]
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods'
  ]
};
