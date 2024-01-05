     // Closure
     // Note.- Outer function cant access inner function var.
          function show(){
            var j = "J is a local variable of outer function";
            console.log(j + "<br>");
            function innrFun(){
                var k = "K is a lacal variable of inner function";
                console.log(k + "<br>");
                console.log(j + "<br>"); //outer function var.
            }
            innrFun();
          }
          show();