const CracoLessPlugin = require('craco-less');
const {getThemeVariables} = require('antd/dist/theme');
const darkTheme = getThemeVariables({dark: true, compact: true});


module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#4c00ff',
                            '@layout-body-background': '#edeef0',
                            '@layout-header-background': '#ffffff',
                            '@layout-header-height': '100px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};