
function Calculator(){
    that = this,
    this.field = "input#number",
    this.button = "#body .buttons",
    this.init = false,

    this.run = function(){
        $(that.button).click(function(){
            /*if (value == "clr"){
                location.reload();
                value = "0";
                $(that.field).text("0");
            }*/
            var value = $(this).html();
            //console.log(value);
            if(that.init == false){
                $(that.field).val("");
                that.init = true;
                
            }
            if ((value != "=") && (value != "clr")){
                $(that.field).val($(that.field).val() + value);
                
            }
            that.dispatcher(value);
            
        });
        $("#clr").click(function(){
           
            location.reload();
            
        });
    },

    this.dispatcher = function(value){
        if ($(this.field).val().indexOf("/") != -1)
            this.operation(value, "/");
        if ($(this.field).val().indexOf("*") != -1)
            this.operation(value, "*");
        if ($(this.field).val().indexOf("+") != -1)
            this.operation(value, "+");
        if ($(this.field).val().indexOf("-") != -1)
            this.operation(value, "-");
    },

    this.operation = function(value,symbol){
        var numbers = $(this.field).val().split(symbol),
        result;
        if(symbol == "/")
            result = parseFloat(numbers[0])/parseFloat(numbers[1]);
        if(symbol == "*")
            result = parseFloat(numbers[0])*parseFloat(numbers[1]);
        if(symbol == "-")
            result = parseFloat(numbers[0])-parseFloat(numbers[1]);
        if(symbol == "+")
            result = parseFloat(numbers[0])+parseFloat(numbers[1]);
        
        if (numbers.length > 1){
            if (value == "=")
                $(this.field).val(result);
            else if (numbers.length > 2)
                $(this.field).val(result + symbol);
        }
    };

}


