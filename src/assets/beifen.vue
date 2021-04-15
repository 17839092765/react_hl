<template>
  <div id="app">
    <div id="player"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      api: null,
      player: null
    };
  },
  computed: {},
  watch: {},
  methods: {
    //监听三维交互的返回事件
    onLoad () {
      console.log(1);
      // onResize();
      init(true, true);
    },
    onResize () {
      let leftPanel = document.getElementById('leftPanel');
      let infoPanel = document.getElementById('infoPanel');
      let player = document.getElementById('player');

      player.style.width = `${window.innerWidth - leftPanel.clientWidth - 30}px`;
      player.style.height = `${window.innerHeight - infoPanel.clientHeight - 50}px`;
    },
    onEvent (e) {
      console.log(e);
    },
    onReady () {
      //此时可以调用接口了
    },
    log () {

    },
    initWebSocket () {
      //初始化weosocket
      const wsuri = "127.0.0.1:4322";
      this.websock = new AirCityCloud(wsuri, this.onReady, this.log);
      // this.websock.setEventCallback(this.onEvent);
    },
    getMatchServerConfig (host, fn, callbackIndex) {
      console.log(1);
      if ('WebSocket' in window) {

        var url = `ws://${host}`;
        let __fn = fn;

        var ws = new WebSocket(url);
        ws.onopen = function () {
          this.send(JSON.stringify({
            'command': 6,
            'callbackIndex': callbackIndex
          }));
        }
        ws.onmessage = function (event) {
          var o = JSON.parse(event.data);
          __fn(o);
        }
        ws.onclose = function () {
        }
        ws.onerror = function (event) {
        };
      }
      else {
        this.log('Not Support WebSocket!');
      }
    },
    init (withPlayer, withInterface) {
      let _this = this

      getMatchServerConfig(HostConfig.MatchServer, function (o) {
        if (o.result == 0) {
          if (withPlayer) {
            new AirCityPlayer(o.instanceId, 'player', HostConfig.Token, true);
          }
          if (withInterface) {
            var ace = new AirCityCloud(o.instanceId, _this.onReady, _this.log);
            ace.setEventCallback(_this.onEvent);
          }
        }
        else {
          if (withPlayer) {
            let host = HostConfig.instanceId ? HostConfig.instanceId : HostConfig.AirCityPlayer;
            let acp = new AirCityPlayer(host, 'player', HostConfig.Token, true, true);
            //AirCityPlayer对象增加方法enableAutoAdjustResolution，可以设置启用或关闭视频窗口缩放时
            //自动调整分辨率的功能。这个功能默认是启用的，如果想关闭此功能，可以在初始化的时候调用enableAutoAdjustResolution(false)
            //acp.enableAutoAdjustResolution(false);
          }
          if (withInterface) {
            let host = HostConfig.instanceId ? HostConfig.instanceId : HostConfig.AirCityAPI;
            var ace = new AirCityCloud(host, _this.onReady, _this.log);
            ace.useColorLog = true;
            ace.setEventCallback(_this.onEvent);

          }
        }
      })

    }

  },
  created () {
    // this.initWebSocket();
  },
  mounted () {

    window.addEventListener('load', this.onLoad, true);
    window.addEventListener('resize', this.onResize, true);
    // this.api = new acapi.AirCityAPI(instanceId, function () {
    //   this.api.misc.setMainUIVisibility(true);
    // }.bind(this));
    // let instanceId = "3232270593-8889-8081-4323"

    // this.player = new acapi.AirCityPlayer(instanceId, "player")
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () {
    // this.api.destroy();
    // this.player.destroy();
  },
  activated () { },
  components: {},
};
</script>

<style lang="scss" scoped>
#player {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}
</style>
