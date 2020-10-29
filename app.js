import Vue from 'vue';
import Counter from './src/Counter';

window.onload = ()=>{
    new Vue({
        el:"#app",
        data:{
            msg:"Hello world"
        },
        components:{
            'counter-component': Counter
        }
    })
}