$(function(){
    // リロード時にスタート地点へ
    $('html,body').animate({ scrollLeft: 0 }, '1');
    // 地面にブロック番号表示
    for(let i = 1; i < 1000; i++){
        $(".front__base--below").append("<p>" + i + "</p>");
    }
    // 「はじめる」を押してプレイヤー設定画面へ
    $("#start__button--start").click(function(){
        $(".dark__toTitle").css({
            "border": "solid 0 #000"
        })
        $("#start__inner--title").css({
            "display": "none"
        })
        $("#start__inner--setting").css({
            "display": "block"
        })
        $("#audio__setting").get(0).play();
        $("#audio__title").delay(500).queue(function(){
            $(this).get(0).play();
        })
    })
    // 「戻る」を押してタイトルへ
    $(".toTitle").click(function(){
        $("#start__inner--title").css({
            "display": "block"
        })
        $("#start__inner--setting").css({
            "display": "none"
        })
        $("#audio__error").get(0).play();
    })
    // 「ミニゲーム」を押してミニゲームへ
    $(".toMiniGame").click(function(){
        // $("#start").css({
        //     "display": "none"
        // })
        $("#audio__start").get(0).play();
    })
    // デフォルトのプレイヤーである場合のプレイヤー画像(タイトル)
    if($("input[name='playerRadio']:checked").val() === "default"){
        $("#player__image").css({
            "bottom": "86px",
            "z-index": "0"
        })
    // デフォルト以外
    }else{
        $("#player__image").css({
            "bottom": "90px",
            "z-index": "1"
        })
    }
    // プレイヤー選択時の音
    $(".characterImage__label").click(function(){
        $("#audio__select").get(0).play();
    })
    // デフォルト選択で頭変更
    $("#player__default").click(function(){
        $("#player__image").attr("class", "player__image--default");
        $("#player").css({
            "z-index": "0"
        })
        $("#player__image").css({
            "bottom": "86px",
            "z-index": "0"
        })
        if($("input[name='playerRadio']:checked").val() != "default"){
            console.log("プレイヤーをデフォルトに設定しました");
        }
        $("#player__image").attr("src", "../assets/images/player_default-head.png");
    })
    // べにちゃん選択で頭変更
    $("#player__benny").click(function(){
        $("#player__image").attr("class", "player__image--others");
        $("#player").css({
            "z-index": "1"
        })
        $("#player__image").css({
            "bottom": "90px",
            "z-index": "1"
        })
        if($("input[name='playerRadio']:checked").val() != "benny"){
            console.log("プレイヤーをべにちゃんに設定しました");
        }
        $("#player__image").attr("src", "../assets/images/benny_small-dot.png");
    })
    // プレイヤーを追加
    $("#player__add__file").change(function(){
        $("#player__image").attr("class", "player__image--others");
        $("#player").css({
            "z-index": "1"
        })
        $("#player__image").css({
            "bottom": "90px",
            "z-index": "1"
        })
        var file = $(this).prop("files")[0];
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            $("#player__image").remove();
            $("#player").html('<img id="player__image" class="player__image--others" alt="プレイヤー" src="' + fileReader.result + '"/>');
            $("input[name='playerRadio']:eq(2)").prop('checked', true);
            console.log("プレイヤーを追加しました");
        }
        fileReader.readAsDataURL(file);
    })
    // 「このイノチではじめる」を押してスタート
    $("#start__button--settingOk").click(function(){
        if ($("#name__input").val() != ""){

            console.log("あなたは" + $("#name__input").val());

            $("#start").css({
                "z-index": "0"
            })
            $("#audio__start").get(0).play();
            // darkのアニメーション
            $(".dark").delay(100).queue(function(){
                $(this).css({
                    "animation": "dark 18.5s 1 linear normal none"
                })
            })
            // プレイヤーの名前をdialogに反映
            $("#player__name").html($("#name__input").val());
            // dark中の要素のアニメーション
            $("#start").delay(1200).queue(function(){
                $(this).css({
                    "display": "none"
                })
                $(".king--back").css({
                    "display": "block"
                })
                $("#audio__title").get(0).pause();
                // さらに1s後88再生＆アニメーション開始
                $("#audio__88").delay(2250).queue(function(){
                    $(this).get(0).play();
                    $(".dialog").css({
                        "display": "block"
                    })
                    $(".king").delay(1000).queue(function(){
                        $(this).css({
                            "animation": "king 6s 1 linear normal none"
                        })
                        $(".dialog__text--first").css({
                            "display": "inline-block",
                            "animation": "dialog--first 4s 1 steps(38, end) normal none"
                        })
                        $(".prophecy").delay(6200).queue(function(){
                            $(this).css({
                                "visibility": "visible",
                                "opacity": "1"
                            })
                            $(".dialog__text--first").css({
                                "display": "none"
                            })
                            $(".dialog__text--second").css({
                                "display": "inline-block",
                                "animation": "dialog--second 4s 1 steps(38, end) normal none"
                            })
                            $(".dialog").delay(7400).queue(function(){
                                $(this).css({
                                    "display": "none"
                                })
                                $(".prophecy").css({
                                    "display": "none"
                                })
                            })
                        })
                    })
                })
            })
            // 「このイノチではじめる」を押した後のプレイヤーモーション
            // デフォルトのプレイヤー
            if($("input[name='playerRadio']:checked").val() === "default"){
                $("#player__image").css({
                    "bottom": "82px"
                })
            // デフォルト以外
            }else{
                $("#player__image").css({
                    "bottom": "86px"
                })
            }
            // darkに入ってからプレイヤーの体のvisibilityリセット
            $(".base--1").delay(3000).queue(function(){
                $(this).css({
                    "visibility": "visible"
                })
                $(".base--2").css({
                    "visibility": "visible"
                })
                $(".player__image--default").css({
                    "bottom": "86px"
                })
                $(".player__image--others").css({
                    "bottom": "90px"
                })
            })
            // デフォルトのプレイヤーの頭のアニメーション(~べに)
            if($("input[name='playerRadio']:checked").val() === "default"){
                $("#player__image").css({
                    "animation": "playerHead--default calc(120s / 144) step-start 18s 126 normal none"
                })
            }
            // その他のプレイヤーの頭のアニメーション(~べに)
            else{
                $("#player__image").css({
                    "animation": "playerHead calc(120s / 144) step-start 18s 126 normal none"
                })
            }
            // プレイヤーの体のアニメーション(~べに)
            $(".base--1").css({
                "visibility": "hidden",
                "animation": "walk--1 calc(120s / 144) step-start 18s 126 normal none"
            })
            $(".base--2").css({
                "visibility": "hidden",
                "animation": "walk--2 calc(120s / 144) step-start 18s 126 normal none"
            })
            $(".base--3").css({
                "visibility": "visible",
                "animation": "walk--3 calc(120s / 144) step-start 18s 126 normal none"
            })
            // べにちゃん遭遇中のプレイヤー
            $("#player__image").delay(123000).queue(function(){
                // デフォルトのプレイヤーの頭
                if($($(this).attr("class") == "player__image--default")){
                    $("#player__image").css({
                        "animation": "playerHead--default calc(120s / 144) step-start 35.9s 33 normal none"
                    })
                }
                // その他のプレイヤーの頭
                else{
                    $("#player__image").css({
                        "animation": "playerHead calc(120s / 144) step-start 45.9s 33 normal none"
                    })
                }
                // プレイヤーの体
                $(".base--1").css({
                    "z-index": "0",
                    "animation": "walk--1 calc(120s / 144) step-start 155.9s 33 normal none"
                })
                $(".base--2").css({
                    "z-index": "-1",
                    "animation": "walk--2 calc(120s / 144) step-start 155.9s 33 normal none"
                })
                $(".base--3").css({
                    "z-index": "-1",
                    "animation": "walk--3 calc(120s / 144) step-start 155.9s 33 normal none"
                })
            })
            // $("#player__image").delay(138000).queue(function(){
            //     // デフォルトのプレイヤーの頭のアニメーション(B2~魔王)
            //     if($(this).attr("class") === "player__image--default"){
            //         $(this).css({
            //             "animation": "playerHead--default calc(120s / 144) step-start 32 normal none"
            //         })
            //     }
            //     // その他のプレイヤーの頭のアニメーション(B2~魔王)
            //     else{
            //         $(this).css({
            //             "animation": "playerHead calc(120s / 144) step-start 32 normal none"
            //         })
            //     }
            //     // プレイヤーの体のアニメーション(B2~魔王)
            //     $(".base--1").css({
            //         "animation": "walk--1 calc(120s / 144) step-start 32 normal none"
            //     })
            //     $(".base--2").css({
            //         "visibility": "visible",
            //         "animation": "walk--2 calc(120s / 144) step-start 32 normal none"
            //     })
            //     $(".base--3").css({
            //         "visibility": "visible",
            //         "animation": "walk--3 calc(120s / 144) step-start 32 normal none"
            //     })
            //     $("#player__image").delay(102000).queue(function(){
            //         // デフォルトのプレイヤーの頭のアニメーション(進め~ラスト)
            //         if($(this).attr("class") === "player__image--default"){
            //             $(this).css({
            //                 "animation": "playerHead--default calc(120s / 144) step-start 65 normal none"
            //             })
            //         }
            //         // その他のプレイヤーの頭のアニメーション(進め~ラスト)
            //         else{
            //             $(this).css({
            //                 "animation": "playerHead calc(120s / 144) step-start 65 normal none"
            //             })
            //         }
            //         // プレイヤーの体のアニメーション(進め~ラスト)
            //         $(".base--1").css({
            //             "animation": "walk--1 calc(120s / 144) step-start 65 normal none"
            //         })
            //         $(".base--2").css({
            //             "visibility": "visible",
            //             "animation": "walk--2 calc(120s / 144) step-start 65 normal none"
            //         })
            //         $(".base--3").css({
            //             "visibility": "visible",
            //             "animation": "walk--3 calc(120s / 144) step-start 65 normal none"
            //         })
            //     })
            // })
            // スクロールアニメーション
            $("#back--far").css({
                "animation":" autoScroll__front 300s 18s 1 linear normal none"
            })
            $("#back--near").css({
                "animation":" autoScroll__back--near 300s 18s 1 linear normal none"
            })
            $("#front").css({
                "animation":" autoScroll__front 300s 18s 1 linear normal none"
            })
            // テストアニメーション
            $(".test").css({
                "animation": "test calc(120s / 72) step-start 18s infinite normal none"
            })
            // テストアニメーション１周ごとにconsole.log
            $(".front__base--below").delay(18200 - 11250 / 9).queue(function(){
                setInterval(function(){
                    console.log("💩");
                }, 120000 / 72)
            })
        }else{
            $("#audio__error").get(0).play();
        }
    })
})