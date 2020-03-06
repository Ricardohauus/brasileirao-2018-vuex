import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component';
import store from '../store'
import TimeZonaComponent from './time-zona.component';

export default {
    components: {
        'time-list': TimeListComponent,
        'time-jogo': TimeJogoComponent,
        'time-zona': TimeZonaComponent
    },
    template: `
  <div class="container">
  <div class="row">
     <h3>Campeonato Brasileiro - Série A - 2016</h3>
     <div v-if="view == 'tabela'">
      <time-list> </time-list>
     </div>     
     <div v-if="view == 'novojogo'">    
     <time-jogo> </time-jogo>
     </div>
     <div v-if="view == 'zona'">    
     <time-zona> </time-zona>
     </div>
  </div>
</div>
  `,
    // mounted() {
    //     event.$on('show-time-list', () => {
    //             this.view = 'tabela';
    //         }),

    //         event.$on('show-time-novojogo', () => {
    //             this.view = 'novojogo';
    //         })
    // },
    computed: {
        view() {
            return store.state.view;
            //return this.$store.state.view;
        }
    },
    methods: {
        showView(view) {
            this.view = view;
        },
    }
};