<template>
    <box-chat-header></box-chat-header>
    <box-chat-body></box-chat-body>
    <box-chat-footer></box-chat-footer>
</template>

<script>
import boxChatHeader from "./BoxChatHeader.vue";
import boxChatBody from "./BoxChatBody.vue";
import boxChatFooter from "./BoxChatFooter.vue";

export default {
    name: "BoxChatIndex",
    components: {boxChatHeader, boxChatBody, boxChatFooter},
    methods: {
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

.box-chat-body {
    padding: 20px 20px 10px;
    word-break: break-all;
    overflow-y: auto;
    height: 77vh;

    .box-chat-message-out {
        display: flex;
        flex-direction: row-reverse;

        .box-chat-message-avatar {
            display: flex;
            flex-direction: column-reverse;
            padding: 0 0 10px 5px;
            margin-right: -12px;

            img {
                vertical-align: middle;
                width: 28px;
                height: 28px;
                border-radius: 50%;
            }
        }

        .box-chat-message-out-content {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-bottom: 5px;

            .box-chat-message-out-content-message {
                max-width: 60vw;
                background-color: #2C9DFD;
                padding: 10px;
                border-radius: 15px;
                color: white;
                margin-bottom: 1px;
            }
        }
    }

    .box-chat-message-in {
        display: flex;

        .box-chat-message-avatar {
            display: flex;
            flex-direction: column-reverse;
            padding: 0 5px 10px 0;
            margin-left: -12px;

            img {
                vertical-align: middle;
                width: 28px;
                height: 28px;
                border-radius: 50%;
            }
        }

        .box-chat-message-in-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 5px;

            .box-chat-message-in-content-message {
                max-width: 60vw;
                background-color: #E9E9EB;
                padding: 10px;
                border-radius: 15px;
                color: black;
                margin-bottom: 1px;
            }
        }
    }
}

.box-chat-footer {
    display: flex;
    align-items: center;
    word-break: break-all;
    height: 5vh;
    margin: 0 20px;
    justify-content: space-around;

    .box-chat-footer-camera, .box-chat-footer-send {
        padding-top: 5px;
    }

    .box-chat-footer-message {
        select {
            appearance: none;
            padding: 10px;
            border-radius: 10px;
            border: 1px solid #E3E3E3;
            color: black;
            background-color: white;
            width: calc(100vw - 110px);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
</style>