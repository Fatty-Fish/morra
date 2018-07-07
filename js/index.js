new Vue({
    el:"#app",
    data: {
        //电脑
        choice1:3,
        //玩家
        choice2:3,
        logs: []
    },
    methods: {
        clearlogs: function ()  {
            //清除日志
            this.logs = []
        },
        judgewin: function ()  {
            var choice1 = this.choice1,
                choice2 = this.choice2;
            if (choice1 === choice2) {
                //平局
                return 0;
            }
            return (choice1-choice2 + 3)%3 === 1 ? -1 : 1
        },
        content: function (choice) {
            if (choice == 1) {
                return "剪刀"
            }else if (choice == 2) {
                return "石头"
            }else {
                return "布"
            }
        },
        samples: function (num) {
            var curlog,
                choice1 = this.content(this.choice1),
                choice2 = this.content(this.choice2);
            if (num === 0) {
                curlog = {
                    competition:"tie",
                    templates: "电脑出 " + choice1+",玩家出 "+ choice2+",此局各不相让~"
                }
            }else if (num === 1) {
                curlog = {
                    competition:"player",
                    templates: "电脑出 " + choice1+",玩家出 "+ choice2+",此局玩家优胜！！"
                }
            }else {
                curlog = {
                    competition:"computer",
                    templates: "电脑出 " + choice1+",玩家出 "+ choice2+",此局电脑优胜"
                }
            }
            this.logs.unshift(curlog);
        },
        compuchoice: function ()  {
            var choice = Math.random()*3 + 1
            this.choice1 = Math.floor(choice);
            console.log(choice);
        },
        scissors:function () {
            this.choice2 = 1;
            this.compuchoice()
            this.samples(this.judgewin())
        },
        rock: function ()  {
            this.choice2 = 2;
            this.compuchoice()
            this.samples(this.judgewin())     
        },
        paper:function ()  {
            this.choice2 = 3;
            this.compuchoice()
            this.samples(this.judgewin())            
        }
    }
})