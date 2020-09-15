<template>
  <div class="subTop">
    <div class="subTitle">
      <h2>간편한 모바일 세탁소 <strong>데일리세탁</strong></h2>
      <div class="black"/>
    </div>

    <div class="state">
      <div class="inner">
        <ul>
          <li>홈</li>
          <li class="active">{{this.$route.meta.pageTitle}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.subTop{

  .subTitle{
    display:flex;
    position:relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:360px;
    background:url('/img/shirt.jpg') no-repeat top/ 100%;
    background-attachment: fixed;

    h2{
      margin-top:60px;
      text-align:center;
      position:relative;
      font-size:3vw;
      font-weight:200;
      z-index:3;
      color:#fff;
      letter-spacing: -2px;
      text-shadow: 0 0 20px rgba(0,0,0,0.15);
      strong{
        font-weight:600;
      }
    }  
  }

  .black{
    position:absolute;
    background:#fff;
    z-index:2;
    width:100%;
    height:100%;
    opacity: 0.5;
  }


  .state{
    border-bottom:1px solid #e2e2e2;

    .inner{
      ul{
        display:flex;
        height:50px;
        border-left:1px solid #e2e2e2;
        padding:0px;

        li{
          display:flex;
          align-items: center;
          justify-content: center;
          flex:1;
          width:120px;
          max-width:160px;
          font-size:14px;
          color:#888;
          border-right:1px solid #e2e2e2;
        }

        li.active{
          color:#292929;
          background:#eef5f7;
        }
      }

    }
  }
}

@media screen and(max-width:600px){
  .subTop{
    
    .subTitle{
      height:300px;
      background-size:150%;

      h2{
        letter-spacing:-1px;
        font-size:6vw;
        strong{display:block;}
      }
    }

    .state{
      .inner{
        ul{
          display:flex;
          justify-content: center;;
          height:40px;
          li{
            font-size:12px;
            max-width:120px;
          }
          li:first-child{border-left:1px solid #e2e2e2;}

          li.active{
            color:#292929;
            background:#eef5f7;
          }
        }

      }
    }
  }
  
}
</style>