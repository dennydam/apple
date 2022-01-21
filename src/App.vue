<template lang="pug">
#app
  #top
    b-container
      h2 トマトの時計
      hr
      b-row
       b-col(cols="12" lg='6').aa
        .jj
         img.cc(src='./assets/tomato01.png' alt)
        .zz
          h1 {{ timeText }}
          h3.text-center {{ currentText }}
          b-btn.mx-auto(variant='dark'  v-if='status !== 1' @click='start') Start
          b-btn(variant='outline-danger' pill v-else @click='pause').mr-2
                    b-icon(icon="pause-fill")
          b-btn(variant='outline-dark' pill v-if='current.length > 0' @click='finish(true)')
                    b-icon(icon="skip-end-fill")
       b-col.checklist
         b-btn.btn1(to='/#') Check list
         b-btn.btn2(to='/settings') Daily report
  keep-alive
      router-view.mt5.router
</template>

<script>
export default {
  data () {
    return {
      status: 0,
      timer: 0,
      suckmydick: '',
      喝尿: [
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
    幹大的 () {
      return this.suckmydick.length > 2 ? true : this.suckmydick.length === 0 ? null : false
    },
    吃屎 () {
      return this.$store.state.你爸爸.map(item => {
        item.state = item.model.length > 2
        return item
      })
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
      if (this.吃屎[index].state) {
        this.$store.commit('submitedit', index)
      }
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
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
.cc{
   margin: auto;
   width: 182%;
}

.aa{
  text-align: center;
}

#home .btn3{
  border: 1px solid black;
  font-weight: bolder;
  border-radius: 100%;
  font-size: 1rem;
}

.aa{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  position: relative;
}

.ddd{
  margin-top: 100px;
}
.zz{
  text-align: center;
  position: absolute;
}
.text{
  margin-bottom: 100px;
}

.router{
  margin-top: 100px;
}
.checklist{
  text-align: center;
}

// @media (max-width: 992px) {
//   .aa{
//   background: url(../assets/tomato01.png);
//   background-size: 100%;
//   background-repeat: no-repeat;
//   background-position: -1vw -9vh;
//   position: relative;
//   border: 1px red solid;
//   padding: 5px;
//   font-size: 1.5rem;

// }
// }

</style>
