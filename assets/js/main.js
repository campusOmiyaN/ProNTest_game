const StageApp = Vue.createApp({
  data() {
    /* 初期値を設定します */
    return {
      /* 送信ボタン上下に表示されるメッセージ */
      okMessage: '正解！',
      ngMessage: 'そのキーワードは違うようだぞ！？',

      /* 解答
        スクリプト内では問題2-1、2-2の「-」は使用できないので「0」に変更します。
        ex. 問題2-3を追加する場合は下記のように解答を追加します。
          stage203CorrectAnswer: 'おおお',
      */
      stage1CorrectAnswer: 'あああ',
      stage201CorrectAnswer: 'いいい',
      stage202CorrectAnswer: 'ううう',
      stage3CorrectAnswer: 'えええ',

      /* stage1 */
      stage1Answer: false, // 正解かどうか
      stage1: '',          // インプットエリアの入力の値
      stage1Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage1Clear: false,  // ステージクリア

      /* stage2
        ex. 問題2-3を追加する場合は下記の様に定数を初期化します。
          stage203Answer: false,
          stage203: '',
          stage203Message: '',
      */
      /* 2-1 */
      stage201Answer: false, // 正解かどうか
      stage201: '',          // インプットエリアの入力の値
      stage201Message: '',   // 送信ボタン上下に表示されるメッセージ

      /* 2-2 */
      stage202Answer: false, // 正解かどうか
      stage202: '',          // インプットエリアの入力の値
      stage202Message: '',   // 送信ボタン上下に表示されるメッセージ

      stage2Answer: false,
      stage2Clear: false,    // ステージクリア

      /* stage3 */
      stage3Answer: false, // 正解かどうか
      stage3: '',          // インプットエリアの入力の値
      stage3Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage3Clear: false,  // ステージクリア
    }
  },
  methods: {
    /* stage1の入力を判定します。「送信」ボタンをクリックした時の動作です。 */
    stage1AnswerInput(stage1) {
      if(stage1 === this.stage1CorrectAnswer) { // 入力値が解答と一致する場合
        this.stage1Answer = true;
        this.stage1Message = '';
      } else { // 一致しない場合
        this.stage1Answer = false;
        this.stage1Message = this.ngMessage; 
      }
    },
    /* stage1のクリア画面「次のステージへ」ボタンをクリックした時の動作を設定します */
    stage1NextStage() {
      this.stage1Answer = false;
      this.stage1Clear = true;
    },
    /* stage2の解答が全て正解の場合
    * 問題を追加する場合はif()内に「 && this.stage203Answer」の様につなげます。
    * 問題を減らす場合はif()の「 && this.stage202Answer」を削除してください。
    */
    stage2AllAnswer() {
      if(this.stage201Answer && this.stage202Answer){
        this.stage2Answer = true;
      }
    },
    /* stage2の入力を判定します。「送信」ボタンをクリックした時の動作です。
      ex. 問題2-3を追加する場合は下記の様に関数を追加します。
        stage203AnswerInput(stage203) {
          if(stage203 === this.stage203CorrectAnswer) {
            this.stage203Answer = true;
            this.stage203Message = this.okMessage;
            this.stage2AllAnswer();
          } else {
            this.stage203Answer = false;
            this.stage203Message = this.ngMessage;
          }
        },
    */
    /* 2-1 */
    stage201AnswerInput(stage201) {
      if(stage201 === this.stage201CorrectAnswer) { // 入力値が解答と一致する場合
        this.stage201Answer = true;
        this.stage201Message = this.okMessage;
        this.stage2AllAnswer();
      } else { // 一致しない場合
        this.stage201Answer = false;
        this.stage201Message = this.ngMessage;
      }
    },
    /* 2-2 */
    stage202AnswerInput(stage202) {
      if(stage202 === this.stage202CorrectAnswer) { // 入力値が解答と一致する場合
        this.stage202Answer = true;
        this.stage202Message = this.okMessage;
        this.stage2AllAnswer();
      } else { // 一致しない場合
        this.stage202Answer = false;
        this.stage202Message = this.ngMessage;
      }
    },
    /* stage2のクリア画面「次のステージへ」ボタンをクリックした時の動作を設定します */
    stage2NextStage() {
      this.stage2Answer = false;
      this.stage2Clear = true;
    },
    /* stage3の入力を判定します。「送信」ボタンをクリックした時の動作です。 */
    stage3AnswerInput(stage3) {
      if(stage3 === this.stage3CorrectAnswer) { // 入力値が解答と一致する場合
        this.stage3Answer = true;
        this.stage3Message = '';
        window.location.href = 'final.html';
      } else { // 一致しない場合
        this.stage3Answer = false;
        this.stage3Message = this.ngMessage;
      }
    },
  }
}).mount('#stage')
