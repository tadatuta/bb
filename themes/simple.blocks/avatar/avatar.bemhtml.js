block('avatar')(
  tag()('img'),
  attrs()(function() {
    return { src: this.ctx.url };
  })
)
