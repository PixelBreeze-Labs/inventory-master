const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = {
    ...config,
    resolver: {
        ...config.resolver,
        sourceExts: [...config.resolver.sourceExts, 'web.js', 'web.jsx', 'web.ts', 'web.tsx']
    }
};