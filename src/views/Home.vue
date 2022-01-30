<template lang="pug">

#home
  b-container
     b-col(cols='6')
      b-row
          b-col(cols="12")
            h1.text-center
          b-col(cols="12")
            b-form-group(label="What are we going today" label-for="suckmydick" invalid-feedback= "字數太少")
              b-form-input#suckmydick(v-model="suckmydick" :state="stats")
            b-btn.btn3(variant="light"  @click="hh") +
            hr
            h4 To-do
          b-col.my-3(cols="12")
            b-table(:items="ite" :fields="fie" show-empty)
              template(#empty)
                p.text-center 沒有項目
              template(#cell(name)="data")
                b-form-input(v-if="data.item.edit" v-model="data.item.model" :state="data.item.state" @keydown.enter="submitedit(data.index)"
                  @keydown.esc="canceledit(data.index)")
                span(v-else) {{ data.value }}
              template(#cell(action)="data")
                span(v-if="data.item.edit")
                  b-btn.mx-1(variant="sucess")
                    b-icon(icon="check" @click="submitedit(data.index)")
                  b-btn(variant="danger")
                    b-icon(icon="arrow-counterclockwise" @click="canceledit(data.index)")
                span(v-else)
                  b-btn(variant="dark")
                    b-icon(icon="pencil" @click="edititem(data.index)")
                  b-btn(variant="dark")
                    b-icon(icon="trash" @click="delitem(data.index)")
          b-col(cols="12")
            h1.text-center 已完成
          b-col(cols="12")
            b-table-simple
             thead
               th 名稱
               th 操作
             tbody
               tr(v-for="(item, idx) in finished")
                td {{ item }}
                td
                b-btn(variant="danger" @click="delfinish(idx)")
                  b-icon(icon="trash")
            tr(v-if="finished.length === 0")
              td.text-center(colspan="2") 沒有項目
</template>

<script>
export default {
  data () {
    return {
      status: 0,
      timer: 0,
      suckmydick: '',
      fie: [
        { key: 'name', label: '名稱' },
        { key: 'action', label: '操作' }
      ]
    }
  },
  computed: {
    你爸爸 () {
      return this.$store.state.你爸爸
    },
    currentText () {
      return this.current.length > 0 ? this.current : this.你爸爸.length > 0 ? '點擊開始' : '沒有事項'
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m} : ${s}`
    },
    current () {
      return this.$store.state.current
    },
    stats () {
      return this.suckmydick.length > 2 ? true : this.suckmydick.length === 0 ? null : false
    },
    ite () {
      return this.$store.state.你爸爸.map(item => {
        item.state = item.model.length > 2
        return item
      })
    },
    finished () {
      return this.$store.state.finished
    }
  },
  methods: {
    hh () {
      if (this.suckmydick.length > 2) {
        this.$store.commit('hh', this.suckmydick)
        this.suckmydick = ''
      }
    },
    edititem (index) {
      this.$store.commit('edititem', index)
    },
    delitem (index) {
      this.$store.commit('delitem', index)
    },
    submitedit (index) {
      if (this.ite[index].state) {
        this.$store.commit('submitedit', index)
      }
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
    },
    delfinish (index) {
      this.$store.commit('delfinish', index)
    },
    start () {
      if (this.status === 0 && this.你爸爸.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    pause () {
      this.status = 2
      clearInterval(this.timer)
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = require('@/assets/' + this.$store.state.sound)
        audio.play()
      }
      if (this.你爸爸.length > 0) {
        this.start()
      }
    }
  }
  // computed: {
  //   current () {
  //     return this.$store.state.current
  //   }
  // }
}
</script>
<style lang="scss">

#home .btn3{
    border: 1px solid black;
    font-weight: bolder;
    border-radius: 100%;
    font-size: 1rem;
}

// .aa{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: auto;
//   text-align: center;
//   position: relative;
// }

.ddd{
  margin-top: 100px;
}

.text{
  margin-bottom: 100px;
}

#home{
  position: absolute;
  left: 49%;
  top: 16%;
}

.col-6{
    max-width: 100%;
}

.row{
  margin-top: 100px;
}
// @media (max-width: 1268px) {
//   .aa{
//   background: url(../assets/tomato01.png);
//   background-size: 800px;
//   background-repeat: no-repeat;
//   background-position: -1vw -9vh;
//   position: relative;
//   border: 1px red solid;
//   padding: 5px;
//   font-size: 1.5rem;

// }
// }

@media (max-width: 992px) {
  #home{
 position:static

}
}

</style>
