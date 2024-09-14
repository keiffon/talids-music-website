var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

    icon.onclick = function(){
        if(mySong.paused){
            mySong.play();
            icon.src = "media/pause.png";
            }else{
            mySong.pause();
            icon.src = "media/play.png";
            }
        };

       function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
       };

       function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
       }
        

    
