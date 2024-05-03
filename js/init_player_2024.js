var video_game1_2024_off = new Plyr('#video_game1_2024_off', {
    markers: {enabled: false, points:[{ time: 60, label: '1 Minute' }, { time: 75, label: 'A Minute and Some' }]},
    tooltips: {controls: true, seek: true},
    controls: ['play-large','rewind','play','fast-forward','current-time','duration','progress','mute','settings','pip','airplay','fullscreen'],
      });
  setTimeout(() => {video_game1_2024_off.poster = 'includes/images/2024_video_banner.png';}, 500)
