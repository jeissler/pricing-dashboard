import { createApp } from 'vue'
import App from './App.vue'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'

import './styles.css'

const app = createApp(App)

app.use(VueQueryPlugin)

app.mount('#app')

// Register all Community AgGrid features - TODO: custom module registration
ModuleRegistry.registerModules([AllCommunityModule])
