<template>
    <div class="small-box-chat">
        <div class="small-box-chat-status">
            <svg width="45%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#017BEF"></path> </g></svg>
        </div>
        <div class="small-box-chat-avatar">
            <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/330955926_558339152899506_331230476003010526_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=ERMJBJJqAM0AX-arixf&_nc_ht=scontent.fhan19-1.fna&oh=00_AfD-gOcIfaJR4QxWeWpXCucNIFHj0c8tQUxTh5wsrJhsyA&oe=6460F699">
        </div>
        <div class="small-box-chat-main">
            <div class="small-box-chat-header">
                <div class="small-box-chat-title">VinaPhone</div>
                <div class="small-box-chat-more">
                    <div class="small-box-chat-time">Thứ Ba</div>
                    <div class="small-box-chat-icon">
                        <svg width="12px" height="15px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="#9B9B9B"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"> </path> </g> </g> </g> </g></svg>
                    </div>
                </div>
            </div>
            <div class="small-box-chat-content">
                (QC) Tuyet voi! Nhan ngay 30GB/30 ngay tu goi cuoc BIG90, gia cuoc khong doi. Soan DK gui 9923 (90.000d/30 ngay). Loi moi co hieu luc trong 03 ngay. Tu choi QC, soan TC gui 9923. CSKH: 18001091
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SmallBoxChat"
}
</script>

<style lang="scss" scoped>
.small-box-chat{
    display: flex;
    align-items: center;
    .small-box-chat-status {
        display: flex;
        max-width: 25px;
        justify-content: center;
    }
    .small-box-chat-avatar img{
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .small-box-chat-main{
        padding: 1.11vh 2.41vw;
        border-top: 1px solid #F0F0F0;
        .small-box-chat-header{
            display: flex;
            justify-content: space-between;
            .small-box-chat-title{
                font-weight: bold;
                font-size: 18px;
            }
            .small-box-chat-more{
                display: flex;
                padding-right: 10px;
                .small-box-chat-time{
                    font-size: 15px;
                    color: #9B9B9B;
                    padding-right: 10px;
                }
                .small-box-chat-icon {
                //margin: -40px 10px 0 -20px;
                }
            }
        }
        .small-box-chat-content{
            word-spacing: 2.5px;
            font-size: 15px;
            padding: 3px 0;
            color: #9B9B9B;
            overflow: hidden;
            white-space: normal;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

    }

}

</style>