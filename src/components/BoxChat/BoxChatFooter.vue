<template>
    <div class="box-chat-footer">
        <div class="box-chat-footer-camera">
            <svg fill="#989898" width="25px" viewBox="-4.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#989898"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>camera</title> <path d="M18.281 8.719h2.125c1.438 0 2.625 1.156 2.625 2.625v11.375c0 1.438-1.188 2.625-2.625 2.625h-17.781c-1.438 0-2.625-1.188-2.625-2.625v-11.375c0-1.469 1.188-2.625 2.625-2.625h2.156c0.531-0.844 1.5-2.063 2.375-2.063h8.719c0.875 0 1.875 1.219 2.406 2.063zM11.438 22.031c3.219 0 5.844-2.625 5.844-5.844 0-3.25-2.625-5.875-5.844-5.875-3.25 0-5.906 2.625-5.906 5.875 0 3.219 2.656 5.844 5.906 5.844zM11.531 12.656c1.938 0 3.5 1.594 3.5 3.531 0 1.906-1.563 3.5-3.5 3.5s-3.531-1.594-3.531-3.5c0-1.938 1.594-3.531 3.531-3.531z"></path> </g></svg>
        </div>
        <div class="box-chat-footer-message">
            <select name="" id="">
                <option value="" selected disabled hidden>Type a message...</option>
                <option value="">Tới đoạn anh nhập otp  Tới đoạn anh nhập otp Tới đoạn anh nhập otp vpn trên máy anh thì phải</option>
                <option value="">Tới đoạn anh nhập otp vpn trên máy anh thì phải</option>
                <option value="">Tới đoạn anh nhập otp vpn trên máy anh thì phải</option>
            </select>
        </div>
        <div class="box-chat-footer-send" @click="sendMessage">
            <svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z" fill="#0177F7"></path> </g></svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "BoxChatIndex",
    components: {},
    methods: {
        sendMessage(){

        }
    }

}
</script>

<style lang="scss" scoped>
.box-chat-footer {
    display: flex;
    align-items: center;
    word-break: break-all;
    height: 5vh;
    margin: 0 20px;
    justify-content: space-around;
    .box-chat-footer-camera, .box-chat-footer-send{
        padding-top: 5px;
    }
    .box-chat-footer-message{
        select {
            appearance: none;
            padding: 10px;
            border-radius: 10px;
            border: 1px solid #E3E3E3;
            color: black;
            background-color: white;
            width:calc(100vw - 110px);
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
        }
    }
}
</style>