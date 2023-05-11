<template>
  <div class="header">
    <div class="header-action">
        <div class="left-button">Sửa</div>
        <div class="right-button"><svg  fill="#6CACF3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 494.94 494.94" xml:space="preserve" stroke="#4077B9" stroke-width="0.00494936" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="7.918975999999999"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"></path> <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"></path> </g> </g> </g></svg></div>
    </div>
    <div class="header-title">Tin nhắn</div>
    <div class="header-search">
        <div class="header-search-icon"><svg fill="#8D8D8D" width="80%" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#808080" stroke-width="1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path> </g></svg></div>
        <div class="header-search-title">Tìm kiếm</div>
    </div>
  </div>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
  <SmallBoxChat></SmallBoxChat>
</template>

<script>
import SmallBoxChat from "./SmallBoxChat.vue";

export default {
  name: "Dashboard",
  components: {SmallBoxChat}

}
</script>

<style lang="scss" scoped>
.header{
  height: 145px;

  display: block;
  padding: 0 4.83vw 0 4.83vw;
  .header-action{
    margin-top: 2.58vh;
    margin-bottom: 1.12vh;
    color: #6CACF3;
    display: flex;
    line-height: 20px;
    justify-content: space-between;
    .right-button{
      width: 25px;
    }
  }
  .header-title{
    font-size: 33px;
    font-weight: bolder;
    margin-bottom: 12px;
  }
  .header-search{
    background-color: #EEEEEE;
    max-height: 35px;
    border-radius: 10px;
    color: #939393;
    display: flex;
    align-items: center;
    .header-search-icon{
      padding: 10px 5px 10px 10px;
      width: 20px;
    }
  }
}
</style>