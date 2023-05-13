<template>
    <div class="box-chat-header">
        <div class="box-chat-header-action">
            <div class="box-chat-header-action-left-button">
                <div class="box-chat-header-action-left-button-back" @click="backToDashboard">
                    <svg width="20px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><title>arrow_left [#335]</title>
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-345.000000, -6679.000000)" fill="#0177F7">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231"
                                              id="arrow_left-[#335]"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="box-chat-header-action-left-button-number">
                    <svg fill="#0177F7" width="25px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M16.417 9.6A7.917 7.917 0 1 1 8.5 1.683 7.917 7.917 0 0 1 16.417 9.6zm-5.313 1.297a2.087 2.087 0 0 0-.186-.907 1.89 1.89 0 0 0-.504-.653 2.124 2.124 0 0 0-.755-.393 3.235 3.235 0 0 0-.926-.13 4.29 4.29 0 0 0-.329.014 2.02 2.02 0 0 0-.329.05l.056-1.037h2.64V6.508H6.75l-.158 3.75a4.635 4.635 0 0 1 .801-.208 4.72 4.72 0 0 1 .802-.079 2.539 2.539 0 0 1 .481.047 1.291 1.291 0 0 1 .43.162.929.929 0 0 1 .31.31.902.902 0 0 1 .121.482.87.87 0 0 1-.291.713 1.117 1.117 0 0 1-1.362.018 1.1 1.1 0 0 1-.384-.565l-1.417.436a2.094 2.094 0 0 0 .347.699 2.221 2.221 0 0 0 .565.523 2.708 2.708 0 0 0 .732.33 3.141 3.141 0 0 0 1.783-.029 2.468 2.468 0 0 0 .81-.43 2.082 2.082 0 0 0 .57-.727 2.365 2.365 0 0 0 .213-1.043z"></path>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="box-chat-header-action-contact">
                <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/330955926_558339152899506_331230476003010526_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=ERMJBJJqAM0AX-arixf&_nc_ht=scontent.fhan19-1.fna&oh=00_AfD-gOcIfaJR4QxWeWpXCucNIFHj0c8tQUxTh5wsrJhsyA&oe=6460F699">
                <div class="box-chat-header-action-name">
                    <label for="">🥦</label>
                    <svg width="8px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><title>arrow_right [#336]</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="#9B9B9B">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                                              id="arrow_right-[#336]"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="box-chat-header-action-right-button">
                <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M13 18.75H6C5.27065 18.75 4.57118 18.4603 4.05546 17.9445C3.53973 17.4288 3.25 16.7293 3.25 16V8C3.25 7.27065 3.53973 6.57118 4.05546 6.05546C4.57118 5.53973 5.27065 5.25 6 5.25H13C13.7293 5.25 14.4288 5.53973 14.9445 6.05546C15.4603 6.57118 15.75 7.27065 15.75 8V16C15.75 16.7293 15.4603 17.4288 14.9445 17.9445C14.4288 18.4603 13.7293 18.75 13 18.75ZM6 6.75C5.66848 6.75 5.35054 6.8817 5.11612 7.11612C4.8817 7.35054 4.75 7.66848 4.75 8V16C4.75 16.3315 4.8817 16.6495 5.11612 16.8839C5.35054 17.1183 5.66848 17.25 6 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H6Z"
                              fill="#0177F7"></path>
                        <path d="M20 16.75C19.8626 16.7479 19.7282 16.71 19.61 16.64L14.61 13.64C14.5002 13.5732 14.4094 13.4792 14.3463 13.3671C14.2833 13.255 14.2501 13.1286 14.25 13V11C14.2501 10.8714 14.2833 10.745 14.3463 10.633C14.4094 10.5209 14.5002 10.4269 14.61 10.36L19.61 7.36002C19.7248 7.2913 19.8562 7.255 19.99 7.255C20.1238 7.255 20.2552 7.2913 20.37 7.36002C20.485 7.42526 20.5807 7.51973 20.6475 7.63388C20.7142 7.74804 20.7496 7.8778 20.75 8.01003V16.01C20.7496 16.1423 20.7142 16.272 20.6475 16.3862C20.5807 16.5003 20.485 16.5948 20.37 16.66C20.2572 16.7232 20.1292 16.7543 20 16.75ZM15.75 12.58L19.25 14.68V9.32002L15.75 11.42V12.58Z"
                              fill="#0177F7"></path>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "BoxChatHeader",
    components: {},
    methods: {
        backToDashboard() {
            this.$router.back()
        },
    }

}
</script>

<style lang="scss" scoped>
.box-chat-header {
    height: 80px;
    background-color: #EDEFEE;
    display: block;
    padding: 2.90vh 4.83vw 0 4.83vw;
    border-bottom: 1px solid #E4E4E4;

    .box-chat-header-action {
        margin-bottom: 1.12vh;
        color: #6CACF3;
        display: flex;
        line-height: 20px;
        justify-content: space-between;
        align-items: center;

        .box-chat-header-action-left-button {
            display: flex;

            .box-chat-header-action-left-button-number {
                margin: -3px 0px 0px -5px;
            }
        }

        .box-chat-header-action-contact {
            img {
                vertical-align: middle;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-bottom: 5px;
            }

            .box-chat-header-action-name {
                font-size: 12px;
                color: #393939;
                display: flex;
                justify-content: center;

                svg {
                    padding-left: 2px;
                }
            }
        }

        .box-chat-header-action-right-button {
            width: 35px;
        }
    }
}
</style>