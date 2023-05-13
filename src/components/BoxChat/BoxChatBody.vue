<template>
    <div class="box-chat-body">
        <div class="box-chat-message-out">
            <div class="box-chat-message-avatar">
                <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/330955926_558339152899506_331230476003010526_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=ERMJBJJqAM0AX-arixf&_nc_ht=scontent.fhan19-1.fna&oh=00_AfD-gOcIfaJR4QxWeWpXCucNIFHj0c8tQUxTh5wsrJhsyA&oe=6460F699">
            </div>
            <div class="box-chat-message-out-content">
                <div class="box-chat-message-out-content-message">Fb anh bị lag rồi</div>
            </div>
        </div>
        <div class="box-chat-message-in">
            <div class="box-chat-message-avatar">
                <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/330955926_558339152899506_331230476003010526_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=ERMJBJJqAM0AX-arixf&_nc_ht=scontent.fhan19-1.fna&oh=00_AfD-gOcIfaJR4QxWeWpXCucNIFHj0c8tQUxTh5wsrJhsyA&oe=6460F699">
            </div>
            <div class="box-chat-message-in-content">
                <div class="box-chat-message-in-content-message">Fb anh bị lag rồi</div>
                <div class="box-chat-message-in-content-message">
                    display: flex;
                    flex-direction: column-reverse;
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "BoxChatBody",
    components: {},
    methods: {}

}
</script>

<style lang="scss" scoped>
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
</style>