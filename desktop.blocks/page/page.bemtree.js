block('page').content()(function() {
  var isList = Array.isArray(this._data), // TODO: use BEMHTML helper
    isRussian = this._lang == 'ru', // TODO: get rid, support multilang
    pagination = this._pagination;

  return [
    {
      block: 'header',
      content: [
        {
          tag: 'h1',
          content: {
            block: 'link', // TODO: не вешать ссылку для морды
            url: 'index.' + this._lang + '.html', // TODO: подставлять правильную ссылку
            content: this._title
          }
        },
        {
          block: 'link',
          mix: { block: 'language-switcher' },
          url: 'index.' + (isRussian ? 'en' : 'ru') + '.html',
          content: isRussian ? 'Read in English' : 'Читать по-русски'
        },
        {
          block: 'subtitle',
          content: this._subtitle
        }
      ]
    },
    {
      block: 'content',
      mods: { type: isList ? 'list' : 'single' }
    },
    pagination && pagination.needPagination ? {
      block: 'paginator',
      content: [
        pagination.idx ? {
          block: 'link',
          url: 'blog' + (pagination.idx - 1 ? '-' + (pagination.idx - 1) : '') + '.' + this._lang + '.html',
          content: isRussian ? 'Предыдущие посты' : 'Previous'
        } : '',
        pagination.isLast ? '' : {
          block: 'link',
          url: 'blog-' + (pagination.idx + 1)  + '.' + this._lang + '.html',
          content: isRussian ? 'Следующие посты' : 'Next'
        }
      ]
    } : '',
    {
      block: 'footer'
    }
  ];
});
