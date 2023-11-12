# vscode extension 
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension vscode-icons-team.vscode-icons
code --install-extension steoates.autoimport
code --install-extension nucllear.vscode-extension-auto-import
code --install-extension naumovs.color-highlight
code --install-extension esbenp.prettier-vscode
code --install-extension humao.rest-client
code --install-extension riazxrazor.html-to-jsx
code --install-extension christian-kohler.path-intellisense
code --install-extension alexcvzz.vscode-sqlite
code --install-extension formulahendry.auto-rename-tag
code --install-extension formulahendry.auto-close-tag

# install
yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid chart.js react-chartjs-2 @react-hook/debounce react-router-dom @types/react-router-dom axios formik formik-material-ui moment react-moment url-join react-number-format @types/redux-logger react-redux redux redux-logger redux-thunk url-join @types/url-join react-iframe
yarn add @mui/x-date-pickers
# Page Components
yarn add global create-react-component-folder

// In Pages
cd src/components/pages
npx crcf -f --notest --typescript LoginPage RegisterPage
npx crcf -f --notest --typescript DevicePage DeviceCreatePage DeviceEditPage
npx crcf -f --notest --typescript ReportPage ReportCreatePage ReportEditPage
npx crcf -f --notest --typescript ServerPage ServerModbusCreatePage ServerModbusEditPage ServerOpcuaCreatePage ServerOpcuaEditPage
npx crcf -f --notest --typescript DashboardPage

// In Layouts
cd src/components/layouts
npx crcf -f --notest --typescript Header Menu