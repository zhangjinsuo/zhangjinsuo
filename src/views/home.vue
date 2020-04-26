<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <el-button type="success" v-on:click="ddd">kkkkk</el-button>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            msg: "home"
        };
    },
    methods: {
        ddd: function() {
            let url = "a=1&b=2&c=3";

            console.log(Qs.parse(url));
            console.log("dd");
            // this.axios.get("http://localhost:3000/").then(res => {
            //   console.log(JSON.stringify(res.data));
            //   console.log(typeof res.data);
            // });
            let that = this;
            this.axios.get('http://localhost:3000/page_select')
                .then(res => {
                    if (res.code != 0) {
                        // that.totalnum = res.data.data[0].total;
                        console.log(JSON.stringify(res.data));
                        console.log(typeof res.data);
                    } else {
                        //
                    }
                })
        }
    }
};
</script>

<style scoped>
.home {
    font-size: 16px;
}
</style>