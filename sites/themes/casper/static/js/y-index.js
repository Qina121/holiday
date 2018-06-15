$(document).ready(function() {
  // banner动画
  $(".carousel").carousel({
    interval: 2000
  });

  //分屏滚动
  $(function() {
    $.scrollify({
      section: ".fixHeight",
      scrollSpeed: 800,
      before: function(i, sections) {
        // $(sections[i])
        //   .find(".text_color")
        //   .stop()
        //   .animate({ opacity: 1, scale: 1 }, 900, function() {
        //     $(sections[i])
        //       .find(".text_color")
        //       .css({ transform: "scale(1.1,1.1)", transition: "0.2s" });
        //   });
      },
      after: function(i, sections) {}
    });
  });

  //点击滚屏营销自动化侧边导航
    var navA = $(".small_nav").find("a");
    navA.on("click", function() {
    var index = $(this).index();
    navA.css("backgroundColor", "#fff");
    console.log($(this));
    $(this).css("backgroundColor", "#ccc");

    $.scrollify.move(index);
  });

  //每个导航栏的移入下划线
  $(".nav_item").mouseenter(function() {
    $(this)
      .find(".line")
      .stop()
      .animate({ width: "100px", opacity: "1" }, 300);
    $(this)
      .find(".child_nav_2")
      .css("display", "flex");
    $(this)
      .find(".child_nav_2")
      .eq(0)
      .stop()
      .animate({ opacity: "0.8", height: "90px", zIndex: "5" }, 300);
  });

  //如果早当前的页面，导航下划线没有移出事件
  var url = window.location.pathname;
  //转换成字符串
  url = url.toString();
  var array = new Array(); //用来存放分分割后的字符串
  array = url.split("/");
  for (var i = 0; i < $(".nav_item").length; i++) {
    if (
      $(".nav_item")
        .eq(i)
        .attr("mark") == array[2]
    ) {
      //移除mouselesve
      $(".nav_item")
        .eq(i)
        .mouseleave(function() {
          $(this)
            .find(".child_nav_2")
            .eq(0)
            .stop()
            .animate(
              { opacity: "0", height: "0", zIndex: "0" },
              100,
              function() {
                $(this).css("display", "none");
              }
            );
        });
      $(".nav_item")
        .eq(i)
        .find(".line")
        .stop()
        .animate({ width: "100px", opacity: 1 }, 200);
    } else {
      $(".nav_item")
        .eq(i)
        .mouseleave(function() {
          $(this)
            .find(".line")
            .stop()
            .animate({ width: "0px", opacity: 0 }, 200);
          $(this)
            .find(".child_nav_2")
            .eq(0)
            .stop()
            .animate(
              { opacity: "0", height: "0", zIndex: "0" },
              100,
              function() {
                $(this).css("display", "none");
              }
            );
        });
    }
  }

  //监测滚动条大于零时，导航添加下阴影
  var header = $(".y-header");
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      header.css({ "box-shadow": "0px 0px 2px 2px #ccc" });
    } else {
      header.css({ "box-shadow": "none" });
    }
  });
  //页面加载之后执行三个小block下滑突出的效果
  slide();
  function slide() {
    $(".y-applys .block")
      .stop()
      .animate({ marginTop: "0" }, 600);
  }
//block里的适用于是否显示
  $(".auto_marking").mouseenter(function() {
    console.log(1);
    $(this)
      .find(".auto_item")
      .stop()
      .animate({ opacity: "1", height: "160px" }, 300);
  });
  $(".auto_marking").mouseleave(function() {
    $(this)
      .find(".auto_item")
      .stop()
      .animate({ opacity: "0", height: "0" }, 300);
  });

  // $(".green_bg").mouseenter(function() {
  //   $(this).css("backgroundColor", "#52bad5");
  //   $(this)
  //     .find("a")
  //     .eq(0)
  //     .css("color", "#fff");
  // });
  // $(".green_bg").mouseleave(function() {
  //   $(this).css("backgroundColor", "#fff");
  //   $(this)
  //     .find("a")
  //     .eq(0)
  //     .css("color", "#666");
  // });

  //导航字体的移入颜色
  $(".nav_item").mouseenter(function() {
    $(this)
      .find(".scope")
      .css("color", "#000");
  });
  $(".nav_item").mouseleave(function() {
    $(this)
      .find(".scope")
      .css("color", "#666");
  });

  var win_state = true;

  //首页的人工咨询
  $(".y-consult").on("click", function(event) {
    if (win_state) {
      $(".consult_win")
        .stop()
        .animate({ opacity: "1", height: "344px", width: "270px" }, 300);
      win_state = false;
    } else {
      $(".consult_win")
        .stop()
        .animate({ opacity: "0", height: "0px", width: "0px" }, 300);
      win_state = true;
    }

    event.stopPropagation();
  });
  $(".consult_win").on("click", function(event) {
    event.stopPropagation();
  });

  $(document).on("click", function() {
    $(".consult_win")
      .stop()
      .animate({ opacity: "0", height: "0px", width: "0px" }, 300);
    win_state = true;
  });

  //邮件正则
  $(".email").blur(function() {
    var val = $(this).val();
    //console.log(val);
    var re = /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|(^$)/;
    if (re.test(val)) {
      $(this).css("border", "1px solid #ccc");
    } else {
      $(this).css("border", "1px solid red");
    }
  });
  //手机正则
  $(".phone").blur(function() {
    var val = $(this).val();
    //console.log(val);
    if (val) {
      var t = /^1[345789]\d{9}$/;
      if (t.test(val)) {
        //console.log(11);
        $(this).css("border", "1px solid #ccc");
      } else {
        //console.log(222);
        $(this).css("border", "1px solid red");
      }
    }
  });

  //apply移入效果
  var block = $(".y-applys .model .block");
  //console.log(block);
  block.mouseenter(function() {
    $(this)
      .find(".desc")
      .css({ display: "block", transition: "1s" });
    $(this)
      .find(".desc")
      .stop()
      .animate({ height: "80px", opacity: "1" }, 300);
    // $(this).css({ transform: "scale(1.1,1.1)", transition: "0.7s" });
  });
  block.mouseleave(function() {
    // $(this).css({ transform: "scale(1,1)", transition: "0.7s" });

    $(this)
      .find(".desc")
      .stop()
      .animate({ height: "0px", opacity: "0" }, 600, function() {
        //console.log(33333333);
        //$(this).css({ display: "none"});
      });
  });
  var W = $(window).width() + "px";
  var H = $(window).height() + "px";
  var Width = $(window).width();
  var Height = $(window).height();
  $('.functuon_block').css('height',(Height-120)+'px');
  //蒙版的宽高
  $(".matte").css("width", W);
  $(".matte").css("height", H);
  var yesT = (Height - $(".yes").height()) / 2 + "px";
  var yesL = (Width - $(".yes").width()) / 2 + "px";
  $(".yes").css("top", yesT);
  $(".yes").css("left", yesL);
  //滚屏里的block的高
  // var block_h = (Height-70)/2+'px';
  // $('.fixHeight').find('.block').css('height',block_h);

  $(".y-header .child_nav_2").css("width", W);

  //导航的小iocn放大缩小
  $(".y-header .child_nav_2 a").mouseenter(function() {
    $(this).css({ transform: "scale(1,1)", transition: "0.6s" });
  });
  $(".y-header .child_nav_2 a").mouseleave(function() {
    $(this).css({ transform: "scale(0.9,0.9)", transition: "0.6s" });
  });

  
  //判断表单内容是否有空值
  function cmd(formInput) {
    var ipt = formInput.find("input"); //查找divbox这个div里的所有文本框
    console.log(111)
    for (var i = 0; i < ipt.length; i++) {
      //循环
      if (ipt[i].value.length == 0) {
        //如果其中一个文本框没有填写
        //alert("请将表单填写完整"); //弹出提示
        ipt[i].focus();
        //ipt.eq(i).css("border","1px solid red") //定位到没有填写的文本框
        return false; //返回false
      }
    }
    return true; //都已经填写，返回true
  }
  

  //提交表单
  var url = location.search;
  function test(formId) {
    //验证是否注册成功
    var form = new FormData(formId);
    //             var req = new XMLHttpRequest();
    //             req.open("post", "${pageContext.request.contextPath}/public/testupload", false);
    //             req.send(form);
    $.support.cors = true;
    $.ajax({
      url: "https://wellemail.com/Service/SolutionsConsulting",
      type: "post",
      data: form,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log("成功！！");
        console.log(data);
        $(".matte").css("display", "block");
        formId.find('input').val('');
      },
      error: function(e) {
        alert("错误！！");
      }
    });
  }

  function random(formId) {
    //验证随机码是否正确
    var form = new FormData(formId);
    //随机码验证
    $.ajax({
      url: "https://wellemail.com/Service/SendMobileCode",
      type: "post",
      data: form,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log("成功！！");
        console.log(data);
      },
      error: function(e) {
        alert("错误！！");
      }
    });
  }

  function countDown() {
    //倒计时
    var endTime = new Date().getTime() + 60 * 1000;
    var timer = 0;

    timer = setInterval(function() {
      var start = new Date().getTime();
      var time = endTime - start;

      if (time <= 0) {
        time = 0;
        clearInterval(timer);
      }

      //秒：
      var s = parseInt((time % (60 * 1000)) / 1000);
      console.log(s);
      $(".code_button").html(s + "s");
      if (s <= 1) {
        console.log(s);
        $(".code_button").removeAttr("disabled");
        $(".code_button").html("点击获取验证码");
      } else {
        $(".code_button").attr("disabled", "disabled");
      }
    }, 1000);
  }

  $(".order").click(function() {
    if (cmd($("#formBox"))) {
      test($("#tf")[0]);
    } else {
      alert("请将表单填写完整");
    }
    return false;
  });

  $(".tryOne").click(function() {
    if (cmd($("#mfFull"))) {
      test($("#mf")[0]);
    } else {
      alert("请将表单填写完整");
    }
    return false;
  });

  //短信验证码点击后禁用
  $(".code_button").click(function() {
    random($("#tf")[0]); //获取短信验证码
    countDown(); //倒计时
  });
  $(".code_button_mf").click(function() {
    random($("#mf")[0]); //获取短信验证码
    countDown(); //倒计时
  });
  $(".OK").click(function() {
    $(".matte").css("display", "none");
  });

  $(".redraw").click(function(e) {
    e.preventDefault();
    $(".random")
      .find(".randomImg")
      .attr(
        "src",
        "https://wellemail.com/Service/CheckCodeImage?" + new Date().getTime()
      );
  });
});
