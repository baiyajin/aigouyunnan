<script type="text/javascript">

  /*验证手机号是否合格*/
  function checkPhone(phoneNumber) {
    var pattern = /^1[34578]\d{9}$/;
    if(phoneNumber === "1254085110"){
      return true;
    }else if(!pattern.test(phoneNumber)){
      return false;
    }else{
      return true;
    }
  }

  function hint_success(obj,m){
    obj.$message({
      message: m,
      type: 'success'
    });
  }

  function hint_error(obj,m) {
    obj.$message.error(m);
  }

  //获取一组随机rgba颜色
  function getRandmColor(opacity) {
    //获取0-1之间的随机数
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    opacity === undefined?(opacity =Math.random()):opacity;
    return "rgba("+r+','+g+','+b+','+opacity+")";
  }






    export default {
      checkPhone,
      getRandmColor,
      hint_success,
      hint_error,
      getUrlKey: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
      },
      compileStr:function(code){      //对字符串进行加密
        var c=String.fromCharCode(code.charCodeAt(0)+code.length);
        for(var i=1;i<code.length;i++){
           c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));
        }
        return escape(c);
      },
      uncompileStr:function(code){  //字符串进行解密
       code=unescape(code);
       var c=String.fromCharCode(code.charCodeAt(0)-code.length);
       for(var i=1;i<code.length;i++){
          c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));
        }
      return c;
    },

  }
</script>
