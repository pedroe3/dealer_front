<template>
    <div class="ui container">
        <h1>Customers</h1>
            <vuetable ref="vuetable"
                      :api-mode="false"
                      :data-manager="getRealmsDataG"
                      :fields="fields"
                      data-path="data"
                      pagination-path=""
                      :per-page="5"
                      :key="index"
                      @vuetable:pagination-data="onPaginationData"
                      @vuetable:row-clicked="onRowClicked"
            ></vuetable>
        <div style="padding-top:10px">
            <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>
            <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import { Vuetable } from "vuetable-2";
    import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
    import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";

    //import _ from "lodash";

    export default {
        name: "RealmDataTable",
        components: {
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo
        },
        data: function () {
            return {
                index: 0,
                index2: 0,
                fields: [
                    {
                        name: 'id',
                        title: 'Dealer Name'
                    },
                    {
                        name: 'customerName',
                        title: 'Dealer'
                    },
                    {
                        name: 'address'
                    },
                    {
                        name: 'state'
                    },
                    'active',
                    'actions'
                ],
                paginationMeta: {
                    perPage: 20,
                    currentPage: 0,
                    requestedPage: 0
                }

            };
        },
        computed: {
            ...mapGetters({
                realms: 'realm/getRealms',
                paginationData: 'realm/getPaginationData',
                realmsData: 'realm/getDataTableRealmsData'
            }),
        },
        watch: {
            data: function () {
                this.$refs.vuetable.refresh();
            }
        },
        methods: {
            ...mapActions({
                //getRealmsData: 'realm/getRealms',
                getRealmDataPage: 'realm/getRealmsPage',
            }),
            getRealmsDataG(){
                return this.realmsData
            },
            onPaginationData(paginationData) {
                this.$refs.pagination.setPaginationData(paginationData);
                this.$refs.paginationInfo.setPaginationData(paginationData);
            },
            onChangePage(page) {
                this.requestedPage = page - 1 < 0 ? 0 : page - 1
                this.getRealmDataPage(this.requestedPage).then(() => {
                    this.index = this.index + 1
                    this.currentPage = this.requestedPage
                })
                //action to load the page
                this.$refs.vuetable.changePage(page);
            },
            onActionClicked(action, data) {
                console.log("slot actions: on-click", data.name);
            },
            onRowClicked(event) {
                this.$router.push('/company/edit/' + event.id)
                console.log(event.id)
            },
            requestRealmsData(){
                this.getRealmDataPage(this.paginationMeta.requestedPage).then(() => {
                    this.index = this.index + 1
                })
            }
        },
        created() {
             this.requestRealmsData()
        }
    };
</script>
