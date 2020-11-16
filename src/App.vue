<script lang="ts">
    export default {
        mpType: 'app',
        onLaunch() {
            console.log('App Launch')
        },
        onShow() {
            console.log('App Show')
        },
        onHide() {
            console.log('App Hide')
        },
    };
</script>

<style>
    /*每个页面公共css */
	page {
	  height: 100%;
	}

  button::after {
    border: none !important;
  }

  .btn-plain {
    color: #353535;
    border: 1px solid #353535;
    background-color: transparent;
  }
</style>
