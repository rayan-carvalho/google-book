import apiInstance from './apiInstance';

export default {
    name: 'apiConfig',
    methods: {
        createInterceptors() {
            apiInstance.interceptors.request.use((config)=>{
                const newConfig = config;
                //config.headers.Authorization = this.$store.state.authToken;
                if (newConfig.url.indexOf('?') != -1) newConfig.url += '&';
                else newConfig.url += '?'; 

                newConfig.url += `?key=${this.$store.state.authToken}`;
                return newConfig;
            },() =>{
                    this.$store.commit('showErrorMessage', 'Ops! houve um problema ao enviar a requisição.');
            });
                apiInstance.interceptors.response.use((response) =>{
                return response;
            }, ()=> {
                this.$store.commit('showErrorMessage', 'Ops! houve um problema ao enviar a requisição.')
            });
        }
    }
}