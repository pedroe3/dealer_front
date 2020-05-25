<template>
    <div class="ui container">
        <user-filter-bar></user-filter-bar>
        <div class="vuetable-pagination ui basic segment grid">
            <vuetable-pagination-info ref="paginationInfoTop"
            ></vuetable-pagination-info>
            <vuetable-pagination ref="paginationTop"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
        <vuetable ref="vuetable"

                  :fields="fields"
                  pagination-path=""
                  :per-page="5"
                  @vuetable:pagination-data="onPaginationData"
        ></vuetable>
        <div class="vuetable-pagination ui basic segment grid">
            <vuetable-pagination-info ref="paginationInfo"
            ></vuetable-pagination-info>
            <vuetable-pagination ref="pagination"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </div>
</template>

<script>
    import UserFilterBar from "../../UserFilterBar/UserFilterBar";
    import accounting from 'accounting'
    import moment from 'moment'
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
    import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
    import Vuetable from 'vuetable-2/src/components/Vuetable'
    export default {
        components: {
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo,
            UserFilterBar
        },
        props: {
        },
        data () {
            return {
                fields: [
                    'customerName','address','active'
                ]
            }
        },
        methods: {
            allcap (value) {
                return value.toUpperCase()
            },
            genderLabel (value) {
                return value === 'M'
                    ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
                    : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
            },
            formatNumber (value) {
                return accounting.formatNumber(value, 2)
            },
            formatDate (value, fmt = 'D MMM YYYY') {
                return (value == null) ? '' : moment(value, 'YYYY-MM-DD').format(fmt)
            },
            onPaginationData (paginationData) {
                this.$refs.paginationTop.setPaginationData(paginationData)
                this.$refs.paginationInfoTop.setPaginationData(paginationData)
                this.$refs.pagination.setPaginationData(paginationData)
                this.$refs.paginationInfo.setPaginationData(paginationData)
            },
            onChangePage (page) {
                this.$refs.vuetable.changePage(page)
            }
        }
    };
</script>
