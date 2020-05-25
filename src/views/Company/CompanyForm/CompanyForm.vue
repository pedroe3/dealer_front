<template>
    <section class="section">
        <form>
            <h1 class="title is-1">
                form name
            </h1>
            <div class="field">
                <label class="label">Company Name</label>
                <div class="control">
                    <input class="input" type="text" v-model="realm.customerName" />
                </div>
            </div>
            <div class="field">
                <label class="label">Postal Address</label>
                <div class="control">
                    <input class="input" type="text" v-model="realm.address" />
                </div>
            </div>
            <div class="field">
                <label class="label">State</label>
                <div class="control">
                    <div class="select">
                        <select v-model="realm.state">
                            <option v-for="state in ['Florida', 'Puerto Rico', 'Atlanta']" :value="realm.state"  :key="state">
                                {{state}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Phone</label>
                <div class="control">
                    <input class="input" type="text" v-model="realm.phone" />
                </div>
            </div>
            <input class="button is-primary margin-bottom" type="submit" @click.prevent="submit" />
        </form>
        {{ id }}
    </section>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import auth from "../../../router/middleware/auth";
    import SuperAdmin from "../../../router/middleware/SuperAdmin";
    import ClearRealmState from "../../../router/middleware/ClearRealmState";

    export default {
        middleware: [
            auth,
            SuperAdmin,
            ClearRealmState
        ],
        props:[
            'id'
        ],
        computed: {
            ...mapGetters({
                realm: 'realm/getRealm'
            })
        },
        methods: {
            ...mapActions({
                submitNewRealm: 'realm/addRealm',
                getRealmById: 'realm/getRealmById'
            }),
            submit() {
                this.submitNewRealm(this.realm).then(()=>{
                    this.$router.push("/admin")
                })
            }
        },
        created() {
            if(this.id){
                this.getRealmById(this.id)
            }
        }
    };
</script>

<style scoped>
    .margin-bottom {
        margin-bottom: 15px;
    }
</style>
