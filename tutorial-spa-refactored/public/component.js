//declare components
Vue.component('header-component',{
    template:`<header><h1>{{header_title}}</h1><p>{{'Props example : ' + props_example}}</p></header>`,
    props:['props_example'],
    data:function(){
        return{
            header_title : 'This is a header'
        }
    }
})
Vue.component('footer-component', {
    template: `<footer><slot></slot></footer>`
})


//declaring const for pages
const home = {
    template:'<div>Home</div>'
}

const about = {
    template: '<div>About</div>'
}

const detail = {
    template: `
        <div><h2>Detail kelas</h2>
            <template v-if="detailData">
                <img :src="'images/' + detailData.pic" width="100"/>
                <h3>{{detailData.name}}</h3>
                <p>{{detailData.desc}}</p>
            </template>
            <p v-else>Data not found.</p>
            <router-link to="/list">Back</router-link>
        </div>`,
    data:function(){
        return{
            detailData:{}
        }
    },
    created(){
        this.getDetailById();
    },
    methods:{
        getDetailById(){
            let paramId = this.$route.params.id;
            let ref = db.ref('datas/' + paramId);
            ref.on('value', (element) => {
                this.detailData = element.val()
            }, (error) => {console.log(error)});

            // this.detailData = retVal[0];
        }
    }
}

const NotFound = {
    template : '<div>Page not found.</div>'
}

const list = {
    props:['items'],
    template: `
        <div>
            <h3>Tambah data</h3>
            
            <form v-on:submit.prevent="submitOnChild">
                <div class="input-group">
                    <label>Name</label>
                    <input type="text" placeholder="Name" v-model="kelas.name"/>
                    <div class="error" v-if="error.name"><small>{{ error.name }}</small></div>
                </div>

                <div class="input-group">
                    <label>Desc</label>
                    <textarea v-model="kelas.desc"></textarea>
                    <div class="error" v-if="error.desc"><small>{{ error.desc }}</small></div>
                </div>


                <div class="input-group">
                    <p><img width="200" :src="previewImg" v-if="previewImg"/></p>
                    <label>Pic</label>
                    <input type="file" ref="pic" v-on:change="upload"/>
                </div>
                <button type="submit">Submit</button>
            </form>

            <hr/>
            <h3>Data list : ({{items.length}})</h3>
            <template v-if="items.length">
                <ul>
                    <li v-for="(item, index) in items">
                        <img :src="'images/' + item.pic" width="100"/>
                        <p>{{item.id}} - {{item.name}}
                            <a href="" v-on:click.prevent="$emit('call-delete-data-function-on-parent', item.id)">Delete</a>
                            <router-link :to="'/list/' + item.id">Detail</router-link>
                        </p>
                    </li>
                    
                </ul>    
            </template>
            <li v-else>Data not found.</li>
        </div>`,
    data:function(){
        return{
            kelas:{
                name:'',
                desc:'',
                img:''
            },
            previewImg : '',
            error:{
                name:'',
                desc:''
            }
        }
    },
    methods:{
        submitOnChild:function(){

            this.error.name='';
            this.error.desc='';

            if(this.kelas.name == ''){
                this.error.name = 'Name is required';
                // return;
            }

            if(this.kelas.desc == ''){
                this.error.desc = 'Desc is required';
                // return;
            }

            if(this.error.name=='' && this.error.desc==''){
                const data = {
                    id : uuidv4(),
                    name : this.kelas.name,
                    desc : this.kelas.desc,
                    pic : this.kelas.img == '' ? 'fw.jpeg' : this.kelas.img
                }
                this.$emit('call-add-data-function-on-parent', data);

                //reinstantiate
                this.kelas.name = '';
                this.kelas.desc = '';
                this.kelas.img = '';
                this.previewImg = '';
                this.$refs.pic.value = '';
            }
        },
        upload:function(ev){
            const file = ev.target.files[0];
            this.kelas.img = ev.target.files[0].name;
            this.previewImg = URL.createObjectURL(file);
        }
    }
}