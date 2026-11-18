import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'pokedex-app',
  webDir: 'www',

  plugins: {  
    CapacitoHttp:
    {
      enabled: true
    },
},
}
export default config;
